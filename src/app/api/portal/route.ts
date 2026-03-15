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

    // Strategy 1: Search checkout sessions
    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
      status: "complete",
    });

    let purchased = sessions.data.find(
      (s) => s.customer_email?.toLowerCase() === emailLower
    );

    // Strategy 2: If not found, search by customer email via charges
    if (!purchased) {
      const customers = await stripe.customers.list({
        email: emailLower,
        limit: 10,
      });

      if (customers.data.length > 0) {
        const customer = customers.data[0];
        const charges = await stripe.charges.list({
          customer: customer.id,
          limit: 10,
        });

        const paidCharge = charges.data.find(
          (c) => c.status === "succeeded" && c.paid
        );

        if (paidCharge) {
          const token = generateDownloadToken(emailLower);
          const currentVersion =
            process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0";

          return NextResponse.json({
            email: emailLower,
            purchaseDate: new Date(paidCharge.created * 1000).toISOString(),
            currentVersion,
            downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/download?token=${token}`,
          });
        }
      }
    }

    if (!purchased) {
      return NextResponse.json(
        { error: "No purchase found for this email" },
        { status: 404 }
      );
    }

    const token = generateDownloadToken(emailLower);
    const currentVersion =
      process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0";

    return NextResponse.json({
      email: purchased.customer_email,
      purchaseDate: new Date(purchased.created * 1000).toISOString(),
      currentVersion,
      downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/download?token=${token}`,
    });
  } catch (error) {
    console.error("Portal error:", error);
    return NextResponse.json(
      { error: "Failed to verify purchase" },
      { status: 500 }
    );
  }
}
