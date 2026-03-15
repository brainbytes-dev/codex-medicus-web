import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function verifyToken(token: string): { valid: boolean; email?: string } {
  try {
    const decoded = Buffer.from(token, "base64url").toString();
    const [email, expiryStr, hmac] = decoded.split(":");
    const expiry = parseInt(expiryStr);

    if (Date.now() > expiry) return { valid: false };

    const secret = process.env.DOWNLOAD_SECRET || "fallback-secret";
    const data = `${email}:${expiryStr}`;
    const expected = crypto
      .createHmac("sha256", secret)
      .update(data)
      .digest("hex");

    if (hmac !== expected) return { valid: false };

    return { valid: true, email };
  } catch {
    return { valid: false };
  }
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token required" }, { status: 400 });
  }

  const { valid, email } = verifyToken(token);

  if (!valid) {
    return NextResponse.json(
      { error: "Invalid or expired download link. Please visit /portal to generate a new one." },
      { status: 403 }
    );
  }

  // For now: redirect to a pre-built ZIP hosted on GitHub Releases or R2/S3
  // Replace this URL with your actual download location
  const version = process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0";
  const downloadUrl = `https://github.com/brainbytes-dev/codex-medicus/releases/download/v${version}/codex-medicus-pro-v${version}.zip`;

  console.log("Download served:", { email, version });

  return NextResponse.redirect(downloadUrl);
}
