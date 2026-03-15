"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Download,
  Loader2,
  ShieldX,
  Stethoscope,
  Terminal,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations";
import { Footer } from "@/components/footer";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="ml-2 inline-flex cursor-pointer items-center gap-1 rounded-md bg-gold-dim px-2 py-1 text-xs text-gold transition-colors hover:bg-gold/20"
    >
      {copied ? <CheckCircle2 className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [state, setState] = useState<"loading" | "verified" | "invalid">("loading");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [version, setVersion] = useState("1.0.0");

  useEffect(() => {
    if (!sessionId) {
      setState("invalid");
      return;
    }

    fetch("/api/verify-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          setState("verified");
          setDownloadUrl(data.downloadUrl);
          setVersion(data.version || "1.0.0");
        } else {
          setState("invalid");
        }
      })
      .catch(() => setState("invalid"));
  }, [sessionId]);

  if (state === "loading") {
    return (
      <div className="flex min-h-screen flex-col">
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
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-gold" />
            <p className="mt-4 text-muted-foreground">Verifying your purchase...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (state === "invalid") {
    return (
      <div className="flex min-h-screen flex-col">
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
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <ShieldX className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="font-serif text-2xl">Access Denied</h1>
            <p className="mt-3 text-muted-foreground">
              This page requires a valid purchase. If you already bought Codex Medicus Pro,
              use the Customer Portal to download your copy.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href="/portal" className={cn(buttonVariants(), "cursor-pointer bg-gold text-primary-foreground hover:bg-gold/90")}>
                Go to Customer Portal
              </a>
              <a href="/#pricing" className={cn(buttonVariants({ variant: "outline" }), "cursor-pointer")}>
                Purchase Codex Medicus Pro
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
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

      <main className="mx-auto max-w-4xl flex-1 px-6 py-16">
        <FadeIn className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="font-serif text-3xl tracking-tight md:text-4xl">
            Welcome to Codex Medicus Pro
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Your purchase was successful. Follow the steps below to install and start using
            your medical intelligence system.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <Card className="border-gold/20 glow-gold-sm">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-dim">
                <Download className="h-5 w-5 text-gold" />
              </div>
              <div>
                <CardTitle className="text-lg">Download Codex Medicus Pro</CardTitle>
                <p className="text-sm text-muted-foreground">Version {version} — ZIP Archive</p>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href={downloadUrl || "#"}
                className={cn(buttonVariants(), "w-full cursor-pointer gap-2 bg-gold text-primary-foreground hover:bg-gold/90")}
              >
                <Download className="h-4 w-4" />
                Download codex-medicus-pro-v{version}.zip
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Save this page — you can also re-download from the{" "}
                <a href="/portal" className="text-gold underline underline-offset-2">Customer Portal</a>.
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-dim">
                  <Terminal className="h-5 w-5 text-gold" />
                </div>
                <CardTitle className="text-lg">Installation Guide</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                4 simple steps. Takes about 2 minutes.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">1</span>
                  <h3 className="font-semibold">Make sure Claude Code is installed</h3>
                </div>
                <p className="ml-10 text-sm text-muted-foreground">If you don&apos;t have Claude Code yet:</p>
                <div className="ml-10 mt-2 flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                  <code>npm install -g @anthropic-ai/claude-code</code>
                  <CopyButton text="npm install -g @anthropic-ai/claude-code" />
                </div>
              </div>

              <Separator />

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">2</span>
                  <h3 className="font-semibold">Unzip the download</h3>
                </div>
                <p className="ml-10 text-sm text-muted-foreground">
                  Unzip <code className="rounded bg-muted px-1.5 py-0.5 text-xs">codex-medicus-pro-v{version}.zip</code> to a folder, e.g.:
                </p>
                <div className="ml-10 mt-2 flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                  <code>~/codex-medicus</code>
                </div>
              </div>

              <Separator />

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">3</span>
                  <h3 className="font-semibold">Install the plugin</h3>
                </div>
                <p className="ml-10 text-sm text-muted-foreground">Open your terminal and run:</p>
                <div className="ml-10 mt-2 flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                  <code>claude plugins install ~/codex-medicus</code>
                  <CopyButton text="claude plugins install ~/codex-medicus" />
                </div>
              </div>

              <Separator />

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">4</span>
                  <h3 className="font-semibold">Try it out</h3>
                </div>
                <p className="ml-10 text-sm text-muted-foreground">Start Claude Code and type:</p>
                <div className="ml-10 mt-2 space-y-2">
                  <div className="flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                    <code>/differential 55-year-old with acute chest pain</code>
                    <CopyButton text="/differential 55-year-old with acute chest pain" />
                  </div>
                  <div className="flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                    <code>/drug-check metformin, ciprofloxacin, CKD stage 3</code>
                    <CopyButton text="/drug-check metformin, ciprofloxacin, CKD stage 3" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-dim">
                  <ArrowRight className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold">Updates</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your Pro license includes continuous updates. The plugin checks automatically
                    on each session start. When a new version is available, visit the{" "}
                    <a href="/portal" className="text-gold underline underline-offset-2">Customer Portal</a>{" "}
                    to download the latest version.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
