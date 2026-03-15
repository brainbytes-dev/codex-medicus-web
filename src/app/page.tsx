"use client";

import { useCallback, useState } from "react";
import { LiteModal } from "@/components/lite-modal";
import { ScrollToTop } from "@/components/scroll-to-top";
import { CustomCursor } from "@/components/custom-cursor";
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  Brain,
  CheckCircle2,
  ChevronDown,
  Cross,
  Droplets,
  Ear,
  Eye,
  FileText,
  FlaskConical,
  HeartPulse,
  Heart,
  Microscope,
  Pill,
  Radiation,
  Scale,
  Scan,
  Shield,
  Skull,
  Syringe,
  Stethoscope,
  Terminal,
  Thermometer,
  Users,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  Counter,
  MagneticHover,
  FloatingOrb,
  TypeWriter,
} from "@/components/animations";
import { Footer } from "@/components/footer";

const agents = [
  { name: "clinical-reasoner", desc: "Differential diagnosis, Bayesian reasoning", icon: Brain, model: "opus" },
  { name: "evidence-appraiser", desc: "Critical appraisal, GRADE, NNT/NNH", icon: FileText, model: "opus" },
  { name: "pharmacologist", desc: "Drug interactions, CYP450, dosing", icon: Pill, model: "opus" },
  { name: "biostatistician", desc: "Hypothesis testing, survival analysis", icon: FlaskConical, model: "opus" },
  { name: "emergency-physician", desc: "ABCDE, triage, resuscitation", icon: Zap, model: "opus" },
  { name: "intensivist", desc: "Ventilation, sepsis bundles, ICU", icon: Heart, model: "opus" },
  { name: "oncologist", desc: "TNM staging, immunotherapy, tumor boards", icon: Microscope, model: "opus" },
  { name: "surgeon", desc: "Perioperative care, ERAS, complications", icon: Stethoscope, model: "opus" },
];

const specialtyGroups = [
  {
    category: "Internal Medicine",
    items: [
      { name: "Cardiology", icon: HeartPulse },
      { name: "Pulmonology", icon: Wind },
      { name: "Gastroenterology", icon: Activity },
      { name: "Nephrology", icon: Droplets },
      { name: "Endocrinology", icon: Scale },
      { name: "Hematology-Oncology", icon: Microscope },
      { name: "Rheumatology", icon: Bone },
      { name: "Infectious Disease", icon: Syringe },
      { name: "Geriatrics", icon: Users },
      { name: "Intensive Care", icon: HeartPulse },
    ],
  },
  {
    category: "Surgery & Specialties",
    items: [
      { name: "General Surgery", icon: Cross },
      { name: "Orthopedics", icon: Bone },
      { name: "Neurosurgery", icon: Brain },
      { name: "Cardiac Surgery", icon: Heart },
      { name: "Emergency Medicine", icon: Zap },
      { name: "Anesthesiology", icon: Thermometer },
    ],
  },
  {
    category: "Neurosciences & Diagnostics",
    items: [
      { name: "Neurology", icon: Brain },
      { name: "Psychiatry", icon: Skull },
      { name: "Radiology", icon: Scan },
      { name: "Pathology", icon: Microscope },
      { name: "Ophthalmology", icon: Eye },
      { name: "ENT", icon: Ear },
    ],
  },
  {
    category: "Primary & Cross-Cutting",
    items: [
      { name: "Pediatrics", icon: Baby },
      { name: "Gynecology", icon: Heart },
      { name: "Dermatology", icon: Radiation },
      { name: "General Practice", icon: Stethoscope },
      { name: "Pain Medicine", icon: Pill },
      { name: "Tropical Medicine", icon: Thermometer },
      { name: "Rehabilitation", icon: Activity },
    ],
  },
];

const commands = [
  { cmd: "/differential", desc: "Generate structured differential diagnosis" },
  { cmd: "/drug-check", desc: "Check interactions, doses, contraindications" },
  { cmd: "/evidence-search", desc: "Search evidence using PICO framework" },
  { cmd: "/lab-interpret", desc: "Interpret laboratory panels with correlation" },
  { cmd: "/study-design", desc: "Design a clinical study with endpoints" },
  { cmd: "/sample-size", desc: "Calculate sample size and power" },
  { cmd: "/manuscript", desc: "Structure papers with reporting guidelines" },
  { cmd: "/tumor-board", desc: "Prepare tumor board presentations" },
  { cmd: "/guideline", desc: "Find and interpret clinical guidelines" },
  { cmd: "/meta-analysis", desc: "Design and interpret meta-analyses" },
];

const faqs = [
  {
    q: "Is this a medical device?",
    a: "No. Codex Medicus is an AI-assisted tool for informational and educational purposes only. It is not a medical device, does not provide medical advice, and is not a substitute for professional clinical judgment.",
  },
  {
    q: "Who is this built for?",
    a: "Physicians, medical researchers, clinical trialists, pharmacologists, medical students, and anyone who works with clinical evidence and medical literature professionally.",
  },
  {
    q: "What AI platforms does it support?",
    a: "Claude Code (primary), OpenAI Codex, Cursor, OpenCode, and Google Gemini CLI. Multi-harness support is included in the Pro edition.",
  },
  {
    q: "How is this different from ChatGPT for medical questions?",
    a: "Codex Medicus provides structured clinical reasoning with 142 specialized skills that enforce evidence levels (GRADE/CEBM), cite specific guidelines (ESC, AHA, NICE, AWMF), and include safety checks for drug interactions and contraindications. It thinks like a clinician, not a chatbot.",
  },
  {
    q: "Is my patient data safe?",
    a: "Codex Medicus includes HIPAA/GDPR-compliant hooks that actively scan for and flag Protected Health Information (PHI). The plugin runs locally — no patient data is sent to our servers.",
  },
  {
    q: "Can I try before I buy?",
    a: "Yes. Codex Medicus Lite is completely free and open-source, with 5 agents, 20 skills, and 10 commands covering the essentials.",
  },
];

export default function Home() {
  const [liteOpen, setLiteOpen] = useState(false);

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
    <div className="min-h-screen bg-background bg-grid">
      {/* Floating orbs */}
      <FloatingOrb className="left-[10%] top-[20%] bg-gold" size={300} delay={0} />
      <FloatingOrb className="right-[15%] top-[40%] bg-blue-500" size={200} delay={3} />
      <FloatingOrb className="left-[60%] top-[70%] bg-gold" size={250} delay={6} />

      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold-dim">
              <Stethoscope className="h-4 w-4 text-gold" />
            </div>
            <span className="font-serif text-lg tracking-wide text-foreground">
              Codex Medicus
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#agents" className="transition-colors hover:text-foreground">Agents</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setLiteOpen(true)}
              className="hidden cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground md:block"
            >
              Try Lite
            </button>
            <button onClick={handleCheckout} className={cn(buttonVariants(), "cursor-pointer bg-cta text-cta-foreground hover:bg-cta/90")}>
              Get Pro
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="bg-radial-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-gold/20 px-4 py-1.5 text-xs font-medium tracking-wider text-gold uppercase"
            >
              Built by a Physician
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Medical Intelligence
            <br />
            <span className="gradient-gold animate-gradient">for AI Assistants</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            27 specialized agents. 142 domain skills. 30 commands.
            From differential diagnosis to meta-analysis — clinical expertise
            that thinks like a physician.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button onClick={handleCheckout} className={cn(buttonVariants({ size: "lg" }), "cursor-pointer gap-2 bg-cta px-8 text-base font-semibold text-cta-foreground hover:bg-cta/90 transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]")}>
              Get Codex Medicus Pro
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => setLiteOpen(true)} className={cn(buttonVariants({ size: "lg", variant: "outline" }), "cursor-pointer gap-2 border-border px-8 text-base")}>
              <Terminal className="h-4 w-4" />
              Try Lite — Free
            </button>
          </motion.div>

          {/* Terminal Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-xl border border-border glow-gold"
          >
            <div className="flex items-center gap-2 border-b border-border bg-card/80 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-muted-foreground">claude</span>
            </div>
            <div className="space-y-3 bg-card/40 p-6 text-left font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-gold">$</span>{" "}
                <TypeWriter text="/differential 65-year-old, acute chest pain, diaphoresis, ST-elevation V1-V4" speed={30} />
              </p>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5, delay: 4 }}
                className="rounded-lg border border-border/50 bg-surface p-4"
              >
                <p className="mb-2 font-sans text-xs font-semibold tracking-wider text-gold uppercase">
                  Differential Diagnosis — Bayesian Approach
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">1. STEMI</span> — Pre-test probability: 92%
                  <br />
                  <span className="text-foreground">2. Aortic dissection</span> — Pre-test: 3%
                  <br />
                  <span className="text-foreground">3. Pulmonary embolism</span> — Pre-test: 2%
                  <br />
                  <span className="mt-2 block text-xs text-gold">
                    Evidence: ESC 2023 STEMI Guidelines, Level I-A
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            { n: 27, label: "Specialized Agents" },
            { n: 142, label: "Domain Skills" },
            { n: 30, label: "Commands" },
            { n: 35, label: "Clinical Specialties" },
          ].map((s) => (
            <FadeIn key={s.label} className="px-6 py-8 text-center">
              <div className="font-serif text-3xl text-gold md:text-4xl">
                <Counter target={s.n} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Evidence-Based by Design
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Every clinical output cites evidence levels. Every drug mention checks interactions.
              Every recommendation follows current guidelines.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "5 Always-Active Rules",
                desc: "EBM evidence levels, patient safety checks, medical disclaimers, HIPAA/GDPR data privacy, and research integrity — enforced on every output.",
              },
              {
                icon: Pill,
                title: "Drug Interaction Hooks",
                desc: "Automated CYP450 interaction checks for 30+ critical drug pairs. Flags contraindications, dose adjustments for renal/hepatic impairment, and pregnancy categories.",
              },
              {
                icon: FileText,
                title: "Guideline-Aware",
                desc: "References ESC, AHA/ACC, NICE, AWMF (S1-S3), WHO, KDIGO, GOLD, GINA. Compares guidelines across bodies and highlights where they diverge.",
              },
            ].map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <MagneticHover className="h-full">
                  <Card className="h-full border-border/50 bg-card/50 transition-colors hover:bg-surface-hover">
                    <CardHeader>
                      <div className="relative mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-dim">
                        <f.icon className="h-5 w-5 text-gold" />
                        <div className="absolute inset-0 rounded-lg bg-gold/10 animate-pulse-ring" />
                      </div>
                      <CardTitle className="text-lg">{f.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="border-t border-border/50 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              27 Specialized Agents
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Each agent is a deep expert with structured processes, worked examples,
              and clinical red flags.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.06}>
            {agents.map((a) => (
              <StaggerItem key={a.name}>
                <MagneticHover>
                  <div className="group h-full rounded-xl border border-border/50 bg-card/30 p-5 transition-all hover:border-gold/20 hover:bg-card/60">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-dim transition-colors group-hover:bg-gold/20">
                        <a.icon className="h-4 w-4 text-gold" />
                      </div>
                      <Badge variant="outline" className="border-border/50 text-[10px] font-normal text-muted-foreground uppercase">
                        {a.model}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-semibold">{a.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                </MagneticHover>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3} className="mt-6 text-center text-sm text-muted-foreground">
            + 19 more agents including systematic-reviewer, biostatistician, regulatory-affairs, precision-medicine, and more
          </FadeIn>
        </div>
      </section>

      {/* Specialties */}
      <section className="border-t border-border/50 bg-card/20 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              35 Clinical Specialties
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Deep domain knowledge for every major medical discipline — key conditions,
              diagnostic approaches, first-line treatments, red flags, and current guidelines.
            </p>
          </FadeIn>

          <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-2">
            {specialtyGroups.map((group, gi) => (
              <FadeIn key={group.category} delay={gi * 0.1} direction={gi % 2 === 0 ? "left" : "right"}>
                <div>
                  <h3 className="mb-4 text-xs font-semibold tracking-widest text-gold uppercase">
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="group flex cursor-default items-center gap-3 rounded-lg border border-border/40 bg-card/30 px-4 py-3 transition-all hover:border-gold/25 hover:bg-card/60 hover:shadow-[0_0_20px_rgba(20,184,166,0.08)]"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gold-dim transition-colors group-hover:bg-gold/20">
                          <item.icon className="h-4 w-4 text-gold" />
                        </div>
                        <span className="text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-10 text-center text-sm text-muted-foreground">
            + Angiology, Hepatology, Psychosomatic Medicine, Vascular Surgery, Forensic Medicine, and more
          </FadeIn>
        </div>
      </section>

      {/* Commands */}
      <section className="border-t border-border/50 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              30 Slash Commands
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Type a command. Get clinical-grade output.
            </p>
          </FadeIn>
          <div className="mx-auto mt-12 max-w-3xl space-y-1">
            {commands.map((c, i) => (
              <FadeIn key={c.cmd} delay={i * 0.05} direction="right">
                <div className="flex items-center justify-between rounded-lg px-4 py-3 transition-all hover:bg-surface hover:translate-x-1">
                  <code className="text-sm font-semibold text-gold">{c.cmd}</code>
                  <span className="text-sm text-muted-foreground">{c.desc}</span>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.5} className="pt-2 text-center text-sm text-muted-foreground">
              + 20 more commands
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border/50 bg-card/20 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Choose Your Edition
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Start free with Lite. Unlock everything with Pro.
            </p>
          </FadeIn>

          <div className="mx-auto mt-16 grid max-w-4xl items-stretch gap-8 md:grid-cols-2">
            {/* Lite */}
            <FadeIn direction="left" className="flex">
              <Card className="w-full border-border/50 bg-card/50">
                <CardHeader>
                  <div className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Lite</div>
                  <div className="mt-2 font-serif text-4xl">Free</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The essentials. Free to get started.
                  </p>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-3">
                    {["5 core agents", "20 essential skills", "10 commands", "5 always-active rules", "Hook scripts included", "Clinical + Research + Review contexts", "Personal use", "No future updates"].map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setLiteOpen(true)} className={cn(buttonVariants({ variant: "outline" }), "mt-8 w-full cursor-pointer")}>
                    Get Lite — Free
                  </button>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Pro */}
            <FadeIn direction="right" className="relative flex">
              <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2">
                <span className="inline-block rounded-full bg-cta px-5 py-2 text-sm font-bold tracking-wide text-cta-foreground shadow-xl shadow-cta/30 uppercase">
                  Recommended
                </span>
              </div>
              <Card className="w-full border-gold/30 bg-card/50 glow-gold-sm">
                <CardHeader>
                  <div className="text-sm font-medium tracking-wider text-gold uppercase">Pro</div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-serif text-4xl text-foreground">$149</span>
                    <span className="text-sm text-muted-foreground">one-time</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The full system. Lifetime access with continuous updates.
                  </p>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-3">
                    {[
                      "27 specialized agents",
                      "142 domain skills",
                      "30 slash commands",
                      "35 clinical specialties",
                      "Drug development & regulatory (15 skills)",
                      "Pharmacovigilance & HEOR (9 skills)",
                      "Multi-harness (Codex, Cursor, OpenCode, Gemini)",
                      "Specialty agents (ER, ICU, Oncology, Surgery)",
                      "6 hook scripts with drug interaction checks",
                      "Continuous updates — new skills, agents & guidelines",
                      "Priority support",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={handleCheckout} className={cn(buttonVariants(), "mt-8 w-full cursor-pointer gap-2 bg-cta text-base font-semibold text-cta-foreground hover:bg-cta/90 transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]")}>
                    Get Codex Medicus Pro
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>


          <FadeIn delay={0.3} className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need enterprise pricing for your hospital or research institution?{" "}
              <a href="mailto:contact@proflowlabsai.com" className="text-gold underline underline-offset-4 transition-colors hover:text-gold/80">
                Contact us
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t border-border/50 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Built by a Physician
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Every agent, every skill, every clinical score has been reviewed for accuracy.
              This is structured clinical knowledge, built the way a physician thinks.
            </p>
          </FadeIn>

          <StaggerChildren className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Clinically Accurate",
                desc: "Real clinical frameworks — CASP, GRADE, CONSORT, Wells Score, CHA\u2082DS\u2082-VASc. Not AI-generated summaries.",
              },
              {
                icon: Users,
                title: "Multi-Harness",
                desc: "Works with Claude Code, Codex, Cursor, OpenCode, and Gemini CLI. Use your preferred AI platform.",
              },
              {
                icon: Shield,
                title: "Safety-First",
                desc: "PHI detection hooks, drug interaction warnings, evidence level enforcement, and medical disclaimers — built in.",
              },
            ].map((t) => (
              <StaggerItem key={t.title}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-dim">
                    <t.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-sm font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border/50 bg-card/20 py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="mt-12 space-y-0 divide-y divide-border/50">
            {faqs.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.05}>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-5 text-sm font-medium transition-colors hover:text-gold">
                    {f.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border/50 py-20 md:py-32 overflow-hidden">
        <FloatingOrb className="left-[30%] top-[20%] bg-gold" size={400} delay={2} />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl tracking-tight md:text-5xl">
              Clinical intelligence,
              <br />
              <span className="gradient-gold animate-gradient">one install away.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              Join medical professionals who use AI the way it should be used —
              with evidence, with safety checks, with clinical rigor.
            </p>
            <div className="mt-10">
              <button onClick={handleCheckout} className={cn(buttonVariants({ size: "lg" }), "cursor-pointer gap-2 bg-cta px-8 text-base font-semibold text-cta-foreground hover:bg-cta/90 transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]")}>
                Get Codex Medicus Pro — $149
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <LiteModal open={liteOpen} onClose={() => setLiteOpen(false)} />
      <ScrollToTop />
      <CustomCursor />
    </div>
  );
}
