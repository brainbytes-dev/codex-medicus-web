import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer_email: email || undefined,
      customer_creation: "always",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/#pricing`,
      allow_promotion_codes: true,
      metadata: {
        product: "codex-medicus-pro",
        version: process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
