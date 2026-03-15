import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ valid: false }, { status: 400 });
    }

    const session = await getStripe().checkout.sessions.retrieve(sessionId);

    if (
      session.payment_status === "paid" &&
      session.metadata?.product === "codex-medicus-pro"
    ) {
      // Generate a download token for this customer
      const crypto = await import("crypto");
      const secret = process.env.DOWNLOAD_SECRET || "fallback-secret";
      const email = session.customer_email || "unknown";
      const expiry = Date.now() + 24 * 60 * 60 * 1000;
      const data = `${email}:${expiry}`;
      const hmac = crypto
        .createHmac("sha256", secret)
        .update(data)
        .digest("hex");
      const token = Buffer.from(`${data}:${hmac}`).toString("base64url");

      return NextResponse.json({
        valid: true,
        email: session.customer_email,
        downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/download?token=${token}`,
        version: process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0",
      });
    }

    return NextResponse.json({ valid: false }, { status: 403 });
  } catch {
    return NextResponse.json({ valid: false }, { status: 400 });
  }
}
