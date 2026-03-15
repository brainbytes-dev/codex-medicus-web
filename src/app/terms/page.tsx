import { Metadata } from "next";
import { Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Codex Medicus",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
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

      <main className="mx-auto max-w-3xl px-6 py-16">
        <article className="prose prose-sm prose-invert max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-h1:text-3xl prose-h2:mt-10 prose-h2:text-xl prose-a:text-gold prose-a:underline-offset-2 prose-strong:text-foreground">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 15, 2026</p>

          <h2>Agreement to Legal Terms</h2>
          <p>
            We are HR Online Consulting LLC, doing business as Brain Bytes and Codex Medicus
            (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            We provide the Codex Medicus medical intelligence platform and related services
            (collectively, the &ldquo;Services&rdquo;).
          </p>
          <p>
            These Terms of Service form a legally binding contract between you and HR Online
            Consulting LLC. By accessing or using the Services, you acknowledge that you have read
            and understood these Terms and agree to be bound by them. IF YOU DO NOT AGREE WITH
            THESE TERMS, YOU MUST NOT USE THE SERVICES.
          </p>

          <h2>1. Our Services</h2>
          <p>
            Codex Medicus is an educational and informational tool that provides structured
            medical knowledge for use with AI assistants. It is not a medical device and does not
            provide medical advice, diagnosis, or treatment.
          </p>
          <ul>
            <li>
              <strong>No patient data processing.</strong> Codex Medicus does not access, store,
              or process individual patient health records. The plugin runs locally on the
              user&apos;s device.
            </li>
            <li>
              <strong>Educational use.</strong> All outputs are for informational and educational
              purposes only. Clinical decisions remain the sole responsibility of licensed
              healthcare professionals.
            </li>
            <li>
              <strong>Compliance.</strong> Users are responsible for ensuring that their use of
              Codex Medicus complies with all applicable laws, regulations, and institutional
              policies in their jurisdiction.
            </li>
          </ul>

          <h2>2. Intellectual Property</h2>
          <p>
            We own all intellectual property rights in the Services, including agent definitions,
            skill files, command structures, hook scripts, documentation, and website designs. We
            grant you a limited, non-exclusive, non-transferable license to use the Services
            strictly for your professional and educational purposes.
          </p>
          <p>
            You may not redistribute, sublicense, resell, or create derivative works from Codex
            Medicus without prior written consent.
          </p>

          <h2>3. User Representations</h2>
          <p>By using the Services, you represent that:</p>
          <ul>
            <li>All registration and purchase details are true and accurate.</li>
            <li>You have the legal capacity to abide by these Terms.</li>
            <li>You are not a minor.</li>
            <li>
              You understand that Codex Medicus is an educational tool and not a substitute for
              professional medical judgment.
            </li>
            <li>
              You will not use Codex Medicus outputs as the sole basis for clinical decisions
              affecting patient care.
            </li>
          </ul>

          <h2>4. Purchases and Payment</h2>
          <p>
            Codex Medicus Pro is available as a one-time purchase. Payment is processed securely
            through Stripe. By completing a purchase, you agree to the pricing displayed at
            checkout.
          </p>
          <ul>
            <li>
              <strong>Lifetime access.</strong> Your purchase grants lifetime access to the
              version purchased, plus all future updates for as long as the product is actively
              maintained.
            </li>
            <li>
              <strong>Refund policy.</strong> Due to the digital nature of the product, all
              purchases are non-refundable unless required by applicable law. If you experience
              technical issues, contact us and we will work to resolve them.
            </li>
            <li>
              <strong>Delivery.</strong> After purchase, you will receive a download link. You may
              also access downloads through the Customer Portal at any time.
            </li>
          </ul>

          <h2>5. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Redistribute, resell, or share your Codex Medicus Pro license or download with
              unauthorized parties.
            </li>
            <li>
              Systematically extract content to build a competing product or dataset.
            </li>
            <li>
              Remove or alter copyright notices, disclaimers, or attribution from the plugin
              files.
            </li>
            <li>
              Use the Services in a way that violates applicable healthcare regulations or
              professional standards.
            </li>
            <li>
              Represent AI-generated outputs as your own professional medical opinion without
              independent verification.
            </li>
          </ul>

          <h2>6. Term and Termination</h2>
          <p>
            These Terms remain in force while you use the Services. We reserve the right to
            terminate your access if you breach these Terms or applicable law. Upon termination,
            your license to use Codex Medicus is revoked.
          </p>

          <h2>7. Disclaimer and Limitation of Liability</h2>
          <p className="font-semibold uppercase tracking-wide">
            THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
            WARRANTIES OF ANY KIND. WE EXPRESSLY DISCLAIM ALL LIABILITY FOR ANY CLINICAL
            DECISION, PATIENT OUTCOME, OR PROFESSIONAL CONSEQUENCE RESULTING FROM THE USE OF OUR
            SERVICES.
          </p>
          <p className="font-semibold uppercase tracking-wide">
            OUR TOTAL LIABILITY FOR ANY CLAIM SHALL BE LIMITED TO THE AMOUNT PAID BY YOU TO US FOR
            THE SERVICES.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Switzerland. Both you and HR Online Consulting
            LLC agree to the non-exclusive jurisdiction of the courts of Zurich, Switzerland.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            HR Online Consulting LLC
            <br />
            550 Kings Mountain, Kings Mountain, NC 28086
            <br />
            Email:{" "}
            <a href="mailto:legal@proflowlabsai.com">legal@proflowlabsai.com</a>
          </p>
        </article>
      </main>
    </div>
  );
}
