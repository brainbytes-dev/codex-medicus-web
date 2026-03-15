"use client";

import { useState } from "react";
import { CheckCircle2, Copy, Terminal, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

function CopyBtn({ text }: { text: string }) {
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

export function LiteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save email for retargeting
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newsletter }),
    }).catch(() => {});

    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after close animation
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="rounded-xl border border-border bg-card p-6 shadow-2xl">
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 cursor-pointer rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              {!submitted ? (
                <>
                  {/* Email form */}
                  <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-dim">
                    <Terminal className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mt-3 font-serif text-xl">Get Codex Medicus Lite</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Enter your email to get the install instructions. Free forever — 5 agents, 20 skills, 10 commands.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-gold focus:ring-1 focus:ring-gold"
                    />

                    <label className="mt-3 flex cursor-pointer items-start gap-2.5">
                      <input
                        type="checkbox"
                        checked={newsletter}
                        onChange={(e) => setNewsletter(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-border accent-gold"
                      />
                      <span className="text-xs text-muted-foreground">
                        I agree to receive product updates and medical AI insights via email. You can unsubscribe anytime.
                      </span>
                    </label>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="mt-3 w-full cursor-pointer bg-gold text-primary-foreground hover:bg-gold/90"
                    >
                      {loading ? "..." : "Get Install Instructions"}
                    </Button>
                  </form>

                  <p className="mt-3 text-center text-xs text-muted-foreground/60">
                    By continuing you agree to our{" "}
                    <a href="/terms" target="_blank" className="underline underline-offset-2 hover:text-foreground">Terms</a>
                    {" "}and{" "}
                    <a href="/disclaimer" target="_blank" className="underline underline-offset-2 hover:text-foreground">Privacy Policy</a>.
                  </p>
                </>
              ) : (
                <>
                  {/* Install instructions */}
                  <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="mt-3 font-serif text-xl">Install Codex Medicus Lite</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Two steps. Takes 30 seconds.
                  </p>

                  <div className="mt-5 space-y-4">
                    {/* Step 1 */}
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary-foreground">1</span>
                        <span className="text-sm font-medium">Install Claude Code (if not already)</span>
                      </div>
                      <div className="flex items-center rounded-lg border border-border bg-background p-3 font-mono text-xs">
                        <code className="flex-1 overflow-x-auto">npm install -g @anthropic-ai/claude-code</code>
                        <CopyBtn text="npm install -g @anthropic-ai/claude-code" />
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary-foreground">2</span>
                        <span className="text-sm font-medium">Install the plugin</span>
                      </div>
                      <div className="flex items-center rounded-lg border border-border bg-background p-3 font-mono text-xs">
                        <code className="flex-1 overflow-x-auto">claude plugins install github:ProFlow-Labs-Ai/codex-medicus-lite</code>
                        <CopyBtn text="claude plugins install github:ProFlow-Labs-Ai/codex-medicus-lite" />
                      </div>
                    </div>

                    {/* Step 3 - Try it */}
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary-foreground">3</span>
                        <span className="text-sm font-medium">Try it out</span>
                      </div>
                      <div className="flex items-center rounded-lg border border-border bg-background p-3 font-mono text-xs">
                        <code className="flex-1">/differential 55-year-old with acute chest pain</code>
                        <CopyBtn text="/differential 55-year-old with acute chest pain" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-lg border border-gold/20 bg-gold-dim p-3 text-center text-xs text-muted-foreground">
                    Want the full system? <strong>27 agents, 142 skills, 35 specialties.</strong>
                    <br />
                    <button
                      onClick={handleClose}
                      className="mt-1 cursor-pointer font-semibold text-gold underline underline-offset-2"
                    >
                      Upgrade to Pro — $149
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
