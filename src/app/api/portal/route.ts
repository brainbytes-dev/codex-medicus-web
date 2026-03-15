import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import crypto from "crypto";

function generateDownloadToken(email: string): string {
  const secret = process.env.DOWNLOAD_SECRET || "fallback-secret";
  const expiry = Date.now() + 24 * 60 * 60 * 1000;
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

    // Strategy 1: Search completed checkout sessions by customer_email
    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
      status: "complete",
    });

    const session = sessions.data.find(
      (s) =>
        s.customer_email?.toLowerCase() === emailLower ||
        s.customer_details?.email?.toLowerCase() === emailLower
    );

    if (session) {
      const sessionEmail = session.customer_email || session.customer_details?.email || emailLower;
      return NextResponse.json(
        makeResponse(sessionEmail, session.created)
      );
    }

    // Strategy 2: Search completed sessions by customer object email
    // (handles 100% discount where customer_email is null but customer exists)
    for (const s of sessions.data) {
      if (s.customer && !s.customer_email) {
        try {
          const customer = await stripe.customers.retrieve(s.customer as string);
          if ("email" in customer && customer.email?.toLowerCase() === emailLower) {
            return NextResponse.json(
              makeResponse(emailLower, s.created)
            );
          }
        } catch {
          // Customer might be deleted, skip
        }
      }
    }

    // Strategy 3: Search customers directly (catches all edge cases)
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

      // Check if customer was created via checkout (has checkout metadata)
      // This handles $0 purchases where there are no charges
      const customerSessions = await stripe.checkout.sessions.list({
        customer: customer.id,
        limit: 10,
        status: "complete",
      });

      if (customerSessions.data.length > 0) {
        return NextResponse.json(
          makeResponse(emailLower, customerSessions.data[0].created)
        );
      }
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
