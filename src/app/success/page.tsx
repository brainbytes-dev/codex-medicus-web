"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Loader2,
  ShieldX,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations";
import { Footer } from "@/components/footer";
import { InstallGuide } from "@/components/install-guide";

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
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <ShieldX className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="font-serif text-2xl">Access Denied</h1>
            <p className="mt-3 text-muted-foreground">
              This page requires a valid purchase. If you already bought MedSynIQ Pro,
              use the Customer Portal to download your copy.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href="/portal" className={cn(buttonVariants(), "cursor-pointer bg-cta text-cta-foreground hover:bg-cta/90")}>
                Go to Customer Portal
              </a>
              <a href="/#pricing" className={cn(buttonVariants({ variant: "outline" }), "cursor-pointer")}>
                Purchase MedSynIQ Pro
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
      <main className="mx-auto max-w-2xl flex-1 px-6 py-16">
        <FadeIn className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="font-serif text-3xl tracking-tight md:text-4xl">
            Welcome to MedSynIQ Pro
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Your purchase was successful. Follow the steps below to install and start using
            your medical intelligence system.
          </p>
        </FadeIn>

        <InstallGuide
          downloadUrl={downloadUrl || "#"}
          version={version}
          baseDelay={0.2}
        />
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
