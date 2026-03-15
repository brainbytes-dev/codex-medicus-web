"use client";

import { useCallback } from "react";
import { Stethoscope } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const handleCheckout = useCallback(async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error("Checkout error:", error);
    }
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold-dim">
            <Stethoscope className="h-4 w-4 text-gold" />
          </div>
          <span className="font-serif text-lg tracking-wide text-foreground">
            MedSynIQ
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="/#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="/#agents" className="transition-colors hover:text-foreground">Agents</a>
          <a href="/#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="/#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={handleCheckout}
            className={cn(buttonVariants(), "cursor-pointer bg-cta text-cta-foreground hover:bg-cta/90")}
          >
            Get Pro
          </button>
        </div>
      </div>
    </nav>
  );
}
