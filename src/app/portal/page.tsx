"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Download,
  Loader2,
  RefreshCw,
  Stethoscope,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";

interface PortalData {
  email: string;
  purchaseDate: string;
  currentVersion: string;
  downloadUrl: string;
}

export default function PortalPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PortalData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const lookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch("/api/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const err = await res.json();
        setError(err.error || "Something went wrong");
        return;
      }

      setData(await res.json());
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-6">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold-dim">
              <Stethoscope className="h-4 w-4 text-gold" />
            </div>
            <span className="font-serif text-lg tracking-wide">Codex Medicus</span>
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-xl px-6 py-20">
        <FadeIn className="text-center">
          <h1 className="font-serif text-3xl tracking-tight">Customer Portal</h1>
          <p className="mt-3 text-muted-foreground">
            Enter the email you used to purchase Codex Medicus Pro to access your download.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={lookup} className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Purchase Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer bg-gold text-primary-foreground hover:bg-gold/90"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Find My Purchase"
                  )}
                </Button>
              </form>

              {/* Error */}
              {error && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <div>
                    <p className="text-sm font-medium text-destructive">{error}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Make sure you&apos;re using the same email address from your Stripe checkout.
                      If you need help, contact{" "}
                      <a href="mailto:contact@brainbytes.dev" className="text-gold underline underline-offset-2">
                        contact@brainbytes.dev
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Success */}
              {data && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Purchase verified</p>
                      <p className="text-xs text-muted-foreground">
                        {data.email} — purchased{" "}
                        {new Date(data.purchaseDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <Card className="border-gold/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <RefreshCw className="h-4 w-4 text-gold" />
                        Latest Version: v{data.currentVersion}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={data.downloadUrl}
                        className={cn(
                          buttonVariants(),
                          "w-full cursor-pointer gap-2 bg-gold text-primary-foreground hover:bg-gold/90"
                        )}
                      >
                        <Download className="h-4 w-4" />
                        Download v{data.currentVersion}
                      </a>
                      <p className="mt-3 text-center text-xs text-muted-foreground">
                        Download link expires in 24 hours. Come back anytime for a fresh link.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </FadeIn>

        {/* Help */}
        <FadeIn delay={0.2} className="mt-8 text-center text-sm text-muted-foreground">
          Need help?{" "}
          <a href="mailto:contact@brainbytes.dev" className="text-gold underline underline-offset-2">
            contact@brainbytes.dev
          </a>
        </FadeIn>
      </main>
    </div>
  );
}
