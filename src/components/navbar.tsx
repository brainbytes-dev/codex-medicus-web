"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { Stethoscope } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { LiteModal } from "@/components/lite-modal";

export function Navbar() {
  const [liteOpen, setLiteOpen] = useState(false);
  const pathname = usePathname();

  const scrollTo = (hash: string) => {
    if (pathname === "/") {
      // Same page — just scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Different page — navigate then scroll
      window.location.href = "/" + hash;
    }
  };

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
    <>
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
            <button onClick={() => scrollTo("#features")} className="cursor-pointer transition-colors hover:text-foreground">Features</button>
            <button onClick={() => scrollTo("#agents")} className="cursor-pointer transition-colors hover:text-foreground">Agents</button>
            <button onClick={() => scrollTo("#pricing")} className="cursor-pointer transition-colors hover:text-foreground">Pricing</button>
            <button onClick={() => scrollTo("#faq")} className="cursor-pointer transition-colors hover:text-foreground">FAQ</button>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setLiteOpen(true)}
              className="hidden cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground md:block"
            >
              Try Lite
            </button>
            <button
              onClick={handleCheckout}
              className={cn(buttonVariants(), "cursor-pointer bg-cta text-cta-foreground hover:bg-cta/90")}
            >
              Get Pro
            </button>
          </div>
        </div>
      </nav>
      <LiteModal open={liteOpen} onClose={() => setLiteOpen(false)} />
    </>
  );
}
