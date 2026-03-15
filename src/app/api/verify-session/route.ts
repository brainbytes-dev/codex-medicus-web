import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ valid: false }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Accept both "paid" and "no_payment_required" (100% discount)
    const validPayment =
      session.payment_status === "paid" ||
      session.payment_status === "no_payment_required";

    if (validPayment && session.metadata?.product === "codex-medicus-pro") {
      // Get email from session or customer object
      let email = session.customer_email;

      if (!email && session.customer) {
        const customer = await stripe.customers.retrieve(
          session.customer as string
        );
        if ("email" in customer && customer.email) {
          email = customer.email;
        }
      }

      email = email || "unknown";

      const secret = process.env.DOWNLOAD_SECRET || "fallback-secret";
      const expiry = Date.now() + 24 * 60 * 60 * 1000;
      const data = `${email}:${expiry}`;
      const hmac = crypto
        .createHmac("sha256", secret)
        .update(data)
        .digest("hex");
      const token = Buffer.from(`${data}:${hmac}`).toString("base64url");

      return NextResponse.json({
        valid: true,
        email,
        downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/download?token=${token}`,
        version: process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0",
      });
    }

    return NextResponse.json({ valid: false }, { status: 403 });
  } catch {
    return NextResponse.json({ valid: false }, { status: 400 });
  }
}
