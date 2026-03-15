import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import crypto from "crypto";

function generateDownloadToken(email: string): string {
  const secret = process.env.DOWNLOAD_SECRET || "fallback-secret";
  const expiry = Date.now() + 24 * 60 * 60 * 1000; // 24h
  const data = `${email}:${expiry}`;
  const hmac = crypto.createHmac("sha256", secret).update(data).digest("hex");
  return Buffer.from(`${data}:${hmac}`).toString("base64url");
}

function makeResponse(email: string, created: number) {
  const token = generateDownloadToken(email.toLowerCase());
  const currentVersion = process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0";

  return {
    email,
    purchaseDate: new Date(created * 1000).toISOString(),
    currentVersion,
    downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/download?token=${token}`,
  };
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const emailLower = email.toLowerCase();

    // Strategy 1: Search ALL completed checkout sessions (includes $0 / 100% discount)
    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
      status: "complete",
    });

    const session = sessions.data.find(
      (s) => s.customer_email?.toLowerCase() === emailLower
    );

    if (session) {
      return NextResponse.json(
        makeResponse(session.customer_email!, session.created)
      );
    }

    // Strategy 2: Search customers + charges (paid purchases)
    const customers = await stripe.customers.list({
      email: emailLower,
      limit: 10,
    });

    for (const customer of customers.data) {
      // Check charges
      const charges = await stripe.charges.list({
        customer: customer.id,
        limit: 10,
      });

      const paidCharge = charges.data.find(
        (c) => c.status === "succeeded" && c.paid
      );

      if (paidCharge) {
        return NextResponse.json(
          makeResponse(emailLower, paidCharge.created)
        );
      }

      // Check subscriptions (future-proofing for abo model)
      const subs = await stripe.subscriptions.list({
        customer: customer.id,
        status: "active",
        limit: 5,
      });

      if (subs.data.length > 0) {
        return NextResponse.json(
          makeResponse(emailLower, subs.data[0].created)
        );
      }
    }

    // Strategy 3: Search payment intents (catches edge cases)
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 50,
    });

    const matchingPI = paymentIntents.data.find(
      (pi) =>
        pi.status === "succeeded" &&
        pi.receipt_email?.toLowerCase() === emailLower
    );

    if (matchingPI) {
      return NextResponse.json(
        makeResponse(emailLower, matchingPI.created)
      );
    }

    return NextResponse.json(
      { error: "No purchase found for this email" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Portal error:", error);
    return NextResponse.json(
      { error: "Failed to verify purchase" },
      { status: 500 }
    );
  }
}
