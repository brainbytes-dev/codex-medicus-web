import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { email, newsletter } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const stripe = getStripe();

    // Check if customer already exists
    const existing = await stripe.customers.list({
      email: email.toLowerCase(),
      limit: 1,
    });

    if (existing.data.length === 0) {
      // Create a free customer in Stripe for retargeting
      await stripe.customers.create({
        email: email.toLowerCase(),
        metadata: {
          source: "medsyniq-lite",
          newsletter: newsletter ? "yes" : "no",
          signup_date: new Date().toISOString(),
        },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ ok: true }); // Don't block the user
  }
}
