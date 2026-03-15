"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Stethoscope } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newsletter: true }),
    }).catch(() => {});
    setStatus("done");
  };

  return (
    <>
      {/* Newsletter + Disclaimer */}
      <section className="border-t border-border/50 bg-card/30 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Newsletter */}
            <div>
              <h3 className="font-serif text-lg">Stay updated</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Medical AI insights, new skills, and product updates. No spam.
              </p>
              {status === "done" ? (
                <div className="mt-4 flex items-center gap-2 text-sm text-gold">
                  <CheckCircle2 className="h-4 w-4" />
                  Subscribed. Welcome aboard.
                </div>
              ) : (
                <form onSubmit={subscribe} className="mt-4 flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="cursor-pointer rounded-lg bg-gold px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold/90 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
              )}
              <p className="mt-2 text-xs text-muted-foreground/50">
                By subscribing you agree to our{" "}
                <a href="/privacy" className="underline underline-offset-2 hover:text-muted-foreground">Privacy Policy</a>.
                Unsubscribe anytime.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="text-xs leading-relaxed text-muted-foreground/60">
              <strong className="text-muted-foreground/80">Medical Disclaimer:</strong> MedSynIQ
              provides AI-assisted tools for informational and educational purposes only. It is not
              a medical device and does not provide medical advice, diagnosis, or treatment. All
              clinical outputs must be verified by qualified healthcare professionals.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom footer */}
      <footer className="border-t border-border/50 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4 text-gold/60" />
            <span className="text-sm text-muted-foreground">
              MedSynIQ by ProFlow Labs AI
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <a href="/portal" className="transition-colors hover:text-foreground">Portal</a>
            <a href="mailto:contact@proflowlabsai.com" className="transition-colors hover:text-foreground">Contact</a>
            <a href="https://github.com/ProFlow-Labs-Ai" className="transition-colors hover:text-foreground">GitHub</a>
            <a href="/terms" className="transition-colors hover:text-foreground">Terms</a>
            <a href="/privacy" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="/disclaimer" className="transition-colors hover:text-foreground">Disclaimer</a>
            <a href="/imprint" className="transition-colors hover:text-foreground">Imprint</a>
          </div>
        </div>
      </footer>
    </>
  );
}
