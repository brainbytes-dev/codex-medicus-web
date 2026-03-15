"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Download,
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
      className="ml-2 inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-md bg-gold-dim px-2 py-1 text-xs text-gold transition-colors hover:bg-gold/20"
    >
      {copied ? <CheckCircle2 className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function InstallGuide({
  downloadUrl,
  version,
  baseDelay = 0,
}: {
  downloadUrl: string;
  version: string;
  baseDelay?: number;
}) {
  return (
    <>
      {/* Download */}
      <FadeIn delay={baseDelay} className="mt-8">
        <Card className="border-gold/20 glow-gold-sm">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-dim">
              <Download className="h-5 w-5 text-gold" />
            </div>
            <div>
              <CardTitle className="text-lg">Download MedSynIQ Pro</CardTitle>
              <p className="text-sm text-muted-foreground">Version {version} — ZIP Archive</p>
            </div>
          </CardHeader>
          <CardContent>
            <a
              href={downloadUrl}
              className={cn(buttonVariants(), "w-full cursor-pointer gap-2 bg-cta text-cta-foreground hover:bg-cta/90")}
            >
              <Download className="h-4 w-4" />
              Download medsyniq-pro-v{version}.zip
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Download link expires in 24 hours. Visit the{" "}
              <a href="/portal" className="text-gold underline underline-offset-2">Customer Portal</a>{" "}
              anytime for a fresh link.
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Install Steps */}
      <FadeIn delay={baseDelay + 0.1} className="mt-6">
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
                <code className="flex-1 overflow-x-auto">npm install -g @anthropic-ai/claude-code</code>
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
                Unzip <code className="rounded bg-muted px-1.5 py-0.5 text-xs">medsyniq-pro-v{version}.zip</code> to a folder, e.g.:
              </p>
              <div className="ml-10 mt-2 flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                <code>~/medsyniq</code>
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
                <code className="flex-1 overflow-x-auto">claude plugins install ~/medsyniq</code>
                <CopyButton text="claude plugins install ~/medsyniq" />
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
                  <code className="flex-1 overflow-x-auto">/differential 55-year-old with acute chest pain</code>
                  <CopyButton text="/differential 55-year-old with acute chest pain" />
                </div>
                <div className="flex items-center rounded-lg border border-border bg-card p-3 font-mono text-sm">
                  <code className="flex-1 overflow-x-auto">/drug-check metformin, ciprofloxacin, CKD stage 3</code>
                  <CopyButton text="/drug-check metformin, ciprofloxacin, CKD stage 3" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Updates */}
      <FadeIn delay={baseDelay + 0.2} className="mt-6">
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
    </>
  );
}
