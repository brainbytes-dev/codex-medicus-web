"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Download,
  Stethoscope,
  Terminal,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations";

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
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    // In production, verify session_id and generate download link
    // For now, show the install instructions
    if (sessionId) {
      setDownloadUrl("#"); // Will be replaced with actual download link
    }
  }, [sessionId]);

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

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Thank You Header */}
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

        {/* Download */}
        <FadeIn delay={0.2} className="mt-12">
          <Card className="border-gold/20 glow-gold-sm">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-dim">
                <Download className="h-5 w-5 text-gold" />
              </div>
              <div>
                <CardTitle className="text-lg">Download Codex Medicus Pro</CardTitle>
                <p className="text-sm text-muted-foreground">Version 1.0.0 — ZIP Archive</p>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href={downloadUrl || "#"}
                className={cn(buttonVariants(), "w-full cursor-pointer gap-2 bg-gold text-primary-foreground hover:bg-gold/90")}
              >
                <Download className="h-4 w-4" />
                Download codex-medicus-pro-v1.0.0.zip
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Save this page — you can also re-download from the{" "}
                <a href="/portal" className="text-gold underline underline-offset-2">Customer Portal</a>.
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Install Guide */}
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
              {/* Step 1 */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                    1
                  </span>
                  <h3 className="font-semibold">Make sure Claude Code is installed</h3>
                </div>
                <p className="ml-10 text-sm text-muted-foreground">
                  If you don&apos;t have Claude Code yet, install it first:
                </p>
                <div className="ml-10 mt-2 flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                  <code>npm install -g @anthropic-ai/claude-code</code>
                  <CopyButton text="npm install -g @anthropic-ai/claude-code" />
                </div>
              </div>

              <Separator />

              {/* Step 2 */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                    2
                  </span>
                  <h3 className="font-semibold">Unzip the download</h3>
                </div>
                <p className="ml-10 text-sm text-muted-foreground">
                  Unzip <code className="rounded bg-muted px-1.5 py-0.5 text-xs">codex-medicus-pro-v1.0.0.zip</code> to
                  a folder on your computer. For example:
                </p>
                <div className="ml-10 mt-2 flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                  <code>~/codex-medicus</code>
                </div>
              </div>

              <Separator />

              {/* Step 3 */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                    3
                  </span>
                  <h3 className="font-semibold">Install the plugin</h3>
                </div>
                <p className="ml-10 text-sm text-muted-foreground">
                  Open your terminal and run:
                </p>
                <div className="ml-10 mt-2 flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                  <code>claude plugins install ~/codex-medicus</code>
                  <CopyButton text="claude plugins install ~/codex-medicus" />
                </div>
                <p className="ml-10 mt-2 text-xs text-muted-foreground">
                  Replace <code className="rounded bg-muted px-1 py-0.5">~/codex-medicus</code> with the path where you unzipped the file.
                </p>
              </div>

              <Separator />

              {/* Step 4 */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                    4
                  </span>
                  <h3 className="font-semibold">Try it out</h3>
                </div>
                <p className="ml-10 text-sm text-muted-foreground">
                  Start Claude Code and type your first command:
                </p>
                <div className="ml-10 mt-2 space-y-2">
                  <div className="flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                    <code>/differential 55-year-old with acute chest pain</code>
                    <CopyButton text="/differential 55-year-old with acute chest pain" />
                  </div>
                  <div className="flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                    <code>/drug-check metformin, ciprofloxacin, CKD stage 3</code>
                    <CopyButton text="/drug-check metformin, ciprofloxacin, CKD stage 3" />
                  </div>
                  <div className="flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                    <code>/evidence-search SGLT2 inhibitors in heart failure</code>
                    <CopyButton text="/evidence-search SGLT2 inhibitors in heart failure" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Quick Reference */}
        <FadeIn delay={0.4} className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">All 30 Commands — Quick Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-wider text-gold uppercase">Clinical</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {["/differential", "/drug-check", "/evidence-search", "/guideline", "/lab-interpret", "/imaging-order", "/medication-review", "/triage", "/clinical-question", "/patient-education", "/discharge-summary", "/consultation", "/mortality-risk", "/safety-check", "/case-presentation"].map(c => (
                      <div key={c} className="font-mono text-xs">{c}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-wider text-gold uppercase">Research & Pharma</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {["/study-design", "/sample-size", "/statistics", "/abstract", "/manuscript", "/systematic-review", "/meta-analysis", "/protocol", "/grant", "/journal-club", "/ethics-review", "/regulatory-brief", "/heor-model", "/tumor-board", "/teaching-case"].map(c => (
                      <div key={c} className="font-mono text-xs">{c}</div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Updates Info */}
        <FadeIn delay={0.5} className="mt-8">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-dim">
                  <ArrowRight className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold">Updates</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your Pro license includes continuous updates — new agents, skills, and guideline
                    updates. The plugin checks for updates automatically on each session start.
                    When a new version is available, visit the{" "}
                    <a href="/portal" className="text-gold underline underline-offset-2">Customer Portal</a>{" "}
                    to download the latest version.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-xs text-muted-foreground/60">
          <strong>Medical Disclaimer:</strong> Codex Medicus is an educational tool.
          It does not provide medical advice, diagnosis, or treatment.
          All clinical outputs must be verified by qualified healthcare professionals.
        </div>
      </main>
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
