import { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Imprint | Codex Medicus",
  robots: { index: false, follow: true },
};

export default function ImprintPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
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

      <main className="flex-1 mx-auto max-w-3xl px-6 py-16">
        <article className="prose prose-sm prose-invert max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-h1:text-3xl prose-h2:mt-10 prose-h2:text-xl prose-a:text-gold prose-a:underline-offset-2 prose-strong:text-foreground">
          <h1>Imprint</h1>
          <p className="text-muted-foreground">Last updated: March 15, 2026</p>

          <p>This website and the Codex Medicus platform are operated by:</p>

          <p>
            <strong>HR Online Consulting LLC (doing business as ProFlow Labs AI / Codex Medicus)</strong>
            <br />
            Incorporated under the laws of the Catawba Indian Nation of the Carolinas,
            <br />
            Catawba Digital Economic Zone, USA
            <br />
            <strong>Registered Office:</strong> 550 Kings Mountain, Kings Mountain, NC 28086
            <br />
            <strong>Authorized Representative:</strong> Henrik Rühe, Managing Member
            <br />
            <strong>Tax Identification Number (EIN):</strong> 61-2199060
          </p>

          <p>
            <strong>Contact Information:</strong>
            <br />
            Email:{" "}
            <a href="mailto:legal@proflowlabsai.com">
              legal@proflowlabsai.com
            </a>
            <br />
            Website:{" "}
            <a href="https://proflowlabsai.com">
              https://proflowlabsai.com
            </a>
          </p>

          <h2>Responsibility for Content</h2>
          <p>
            In accordance with applicable law, the operator of this platform is responsible for
            its own content. We are not obliged to monitor transmitted third-party information or
            investigate illegal activity unless we have knowledge of a specific infringement. Upon
            notification, we will remove infringing content immediately.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content and works created by the site operator are subject to international
            copyright law. Any duplication, processing, or commercialization requires prior
            written consent.
          </p>

          <h2>Medical Disclaimer</h2>
          <p>
            Codex Medicus is an educational tool for medical professionals. It does not provide
            medical advice, diagnosis, or treatment. All clinical outputs are AI-generated and must
            be verified by qualified healthcare professionals before any patient care decisions.
            The operator assumes no liability for clinical decisions made with the assistance of
            this software.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            We are neither willing nor obliged to participate in dispute resolution proceedings
            before a consumer arbitration board.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
