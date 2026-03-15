import { Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <>
      <section className="border-t border-border/50 bg-card/30 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-xs leading-relaxed text-muted-foreground/70">
          <strong>Medical Disclaimer:</strong> Codex Medicus provides AI-assisted tools for
          informational and educational purposes only. It is not a medical device and does not
          provide medical advice, diagnosis, or treatment. All clinical outputs must be verified
          by qualified healthcare professionals.
        </div>
      </section>
      <footer className="border-t border-border/50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4 text-gold/60" />
            <span className="text-sm text-muted-foreground">
              Codex Medicus by ProFlow Labs AI
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <a href="/portal" className="transition-colors hover:text-foreground">Portal</a>
            <a href="mailto:contact@proflowlabsai.com" className="transition-colors hover:text-foreground">Contact</a>
            <a href="https://github.com/proflowlabs-ai" className="transition-colors hover:text-foreground">GitHub</a>
            <a href="/terms" className="transition-colors hover:text-foreground">Terms</a>
            <a href="/disclaimer" className="transition-colors hover:text-foreground">Disclaimer</a>
            <a href="/imprint" className="transition-colors hover:text-foreground">Imprint</a>
          </div>
        </div>
      </footer>
    </>
  );
}
