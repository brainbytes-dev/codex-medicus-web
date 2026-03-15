import { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Codex Medicus",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
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

      <main className="mx-auto max-w-3xl flex-1 px-6 py-16">
        <article className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-foreground prose-h1:text-3xl prose-h2:mt-10 prose-h2:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-gold prose-a:underline-offset-2 prose-strong:text-foreground">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: March 15, 2026</p>

          <h2>1. Who We Are</h2>
          <p>
            This website and the Codex Medicus platform are operated by HR Online Consulting LLC,
            doing business as ProFlow Labs AI (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p>
            Registered Office: 550 Kings Mountain, Kings Mountain, NC 28086
            <br />
            Contact: <a href="mailto:legal@proflowlabsai.com">legal@proflowlabsai.com</a>
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We collect the following personal data:</p>
          <ul>
            <li><strong>Email address</strong> — when you sign up for Codex Medicus Lite, purchase Pro, subscribe to our newsletter, or contact us.</li>
            <li><strong>Payment information</strong> — processed securely by Stripe. We do not store credit card numbers.</li>
            <li><strong>Usage data</strong> — basic analytics (page views, referral source) collected via privacy-respecting analytics.</li>
          </ul>
          <p>We do <strong>not</strong> collect:</p>
          <ul>
            <li>Health data or Protected Health Information (PHI)</li>
            <li>Patient data of any kind</li>
            <li>Biometric or genetic data</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <ul>
            <li><strong>Provide services:</strong> Process purchases, deliver downloads, manage your account.</li>
            <li><strong>Communication:</strong> Send product updates, medical AI insights, and important notices (only if you opted in).</li>
            <li><strong>Improvement:</strong> Understand how our website is used to improve the product.</li>
          </ul>
          <p>We will never sell, rent, or share your personal data with third parties for marketing purposes.</p>

          <h2>4. Legal Basis (GDPR)</h2>
          <p>For users in the European Economic Area, we process data based on:</p>
          <ul>
            <li><strong>Contract performance</strong> — to deliver purchased products and services.</li>
            <li><strong>Legitimate interest</strong> — to improve our services and prevent fraud.</li>
            <li><strong>Consent</strong> — for newsletter and marketing communications (you can withdraw at any time).</li>
          </ul>

          <h2>5. Third-Party Services</h2>
          <p>We use the following third-party processors:</p>
          <ul>
            <li><strong>Stripe</strong> — Payment processing. <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a></li>
            <li><strong>Vercel</strong> — Website hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a></li>
            <li><strong>GitHub</strong> — Code hosting and plugin distribution. <a href="https://docs.github.com/en/site-policy/privacy-policies" target="_blank" rel="noopener noreferrer">GitHub Privacy Policy</a></li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your data only as long as necessary to provide our services. Purchase records
            are retained for accounting and tax purposes as required by law. You may request deletion
            of your data at any time.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under GDPR and applicable privacy laws, you have the right to:</p>
          <ul>
            <li><strong>Access</strong> your personal data we hold</li>
            <li><strong>Rectify</strong> inaccurate data</li>
            <li><strong>Delete</strong> your data (&ldquo;right to be forgotten&rdquo;)</li>
            <li><strong>Restrict</strong> processing of your data</li>
            <li><strong>Data portability</strong> — receive your data in a structured format</li>
            <li><strong>Object</strong> to processing based on legitimate interest</li>
            <li><strong>Withdraw consent</strong> for marketing at any time</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:legal@proflowlabsai.com">legal@proflowlabsai.com</a>.
          </p>

          <h2>8. Cookies</h2>
          <p>
            We use only essential cookies required for the website to function (session, preferences).
            We do not use tracking cookies or third-party advertising cookies.
          </p>

          <h2>9. The Codex Medicus Plugin</h2>
          <p>
            The Codex Medicus plugin runs locally on your device. It does not transmit data to our
            servers during use. The only network request is an optional version check on session
            start, which sends no personal data.
          </p>
          <p>
            We strongly advise against entering real patient data into any AI assistant. The plugin
            includes PHI detection hooks that warn if Protected Health Information patterns are
            detected.
          </p>

          <h2>10. Children</h2>
          <p>
            Our services are intended for medical professionals and are not directed at individuals
            under the age of 18.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify users of material
            changes via email or a notice on our website.
          </p>

          <h2>12. Contact</h2>
          <p>
            For privacy-related inquiries:
            <br />
            HR Online Consulting LLC (dba ProFlow Labs AI)
            <br />
            550 Kings Mountain, Kings Mountain, NC 28086
            <br />
            <a href="mailto:legal@proflowlabsai.com">legal@proflowlabsai.com</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
