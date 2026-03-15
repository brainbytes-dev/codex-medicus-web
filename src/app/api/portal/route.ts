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

    // Find completed checkout sessions for this email
    const sessions = await getStripe().checkout.sessions.list({
      limit: 100,
      status: "complete",
    });

    const purchased = sessions.data.find(
      (s) =>
        s.customer_email?.toLowerCase() === email.toLowerCase() &&
        s.metadata?.product === "codex-medicus-pro"
    );

    if (!purchased) {
      return NextResponse.json(
        { error: "No purchase found for this email" },
        { status: 404 }
      );
    }

    const token = generateDownloadToken(email);
    const currentVersion = process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0";

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
