import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  Hand,
  Repeat,
  Unplug,
  Wallet,
  AlertTriangle,
  Clock,
  Target,
  CheckCircle2,
  XCircle,
  Sparkles,
  Building2,
  Rocket,
  Compass,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Book an Audit — MeadowOps" },
      {
        name: "description",
        content:
          "Find the real bottleneck before you build anything with AI. The MeadowOps Audit shows you where manual work costs time and money — and what to fix first.",
      },
      { property: "og:title", content: "Book an Audit — MeadowOps" },
      {
        property: "og:description",
        content:
          "Most businesses don't need more tools — they need clarity. The MeadowOps AI Audit shows you the fastest path to better operations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/audit" },
    ],
    links: [{ rel: "canonical", href: "/audit" }],
  }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <SiteLayout>
      <AuditHero />
      <ProblemSection />
      <WhatItDoesSection />
      <WhatTheyGetSection />
      <WhyMattersSection />
      <WhoForSection />
      <WhyUsSection />
      <FinalCtaSection />
    </SiteLayout>
  );
}

/* ---------- Section 1: Asymmetric Hero ---------- */
function AuditHero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute -top-24 -left-32 h-[420px] w-[620px] rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            The AI Audit — start with clarity
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="max-w-4xl text-5xl font-bold leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl"
          >
            Find the real <span className="text-accent">bottleneck</span> before you build anything
            with AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-2xl"
          >
            Most businesses do not need more tools. They need clarity. Our AI Audit shows you where
            manual work is costing time, money, and growth — and what to fix first,{" "}
            <span className="font-semibold text-foreground">
              before you waste budget on the wrong solution.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="mt-11 flex flex-wrap gap-4"
          >
            <CtaButton to={SITE.bookingPath}>Book My Audit</CtaButton>
            <CtaButton href="#what-the-audit-does" variant="ghost" showArrow={false}>
              See What We Find
            </CtaButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="hidden lg:col-span-4 lg:block"
        >
          <div className="flex aspect-[3/4] flex-col justify-between rounded-3xl border border-border bg-card p-8">
            <span className="font-display text-8xl font-bold text-foreground/[0.07]">01</span>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                The diagnosis
              </p>
              <div className="h-2 w-full rounded-full bg-accent" />
              <div className="h-2 w-2/3 rounded-full bg-foreground/15" />
              <div className="h-2 w-3/4 rounded-full bg-foreground/15" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Section 2: The Problem (Side-Labeled) ---------- */
function ProblemSection() {
  const reasons = [
    { n: "01", title: "Work by hand", text: "Critical work is still done manually, every day." },
    { n: "02", title: "Repeated tasks", text: "Teams repeat the same tasks instead of building once." },
    { n: "03", title: "Disconnected tools", text: "Your tools do not talk to each other." },
    { n: "04", title: "Rising costs", text: "Costs keep climbing while output stays flat." },
    {
      n: "05",
      title: "Chaos at scale",
      text: "Growth creates more chaos instead of more control.",
    },
  ];

  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="self-start lg:col-span-4 lg:sticky lg:top-28">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              The Problem
            </span>
            <h2 className="mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Not stuck for lack of AI.
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Your business is stuck because the fundamentals quietly break long before any tool can
              help.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
          {reasons.map((r) => (
            <StaggerItem key={r.n}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/40">
                <span className="font-display text-2xl font-bold text-accent">{r.n}</span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-foreground p-8 text-background">
              <p className="text-xl font-medium leading-snug">
                Worst of all? Most try to fix <span className="text-accent">all of it at once.</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-background/70">
                MeadowOps exists to stop that cycle.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Section 3: What the Audit Does (Inverted Bento) ---------- */
function WhatItDoesSection() {
  const points = [
    {
      icon: Clock,
      title: "Where time leaks",
      text: "We map every touchpoint to find where your team loses the most time.",
      span: "md:col-span-2",
      tone: "muted" as const,
    },
    {
      icon: Sparkles,
      title: "Highest AI impact",
      text: "The single area where AI creates the biggest, fastest leverage.",
      span: "",
      tone: "accent" as const,
    },
    {
      icon: Repeat,
      title: "Repeated work",
      text: "Which tasks are repeated too often to stay manual.",
      span: "",
      tone: "muted" as const,
    },
    {
      icon: Target,
      title: "What to build first",
      text: "The first system to build — and the order everything else follows.",
      span: "md:col-span-2",
      tone: "muted" as const,
    },
  ];

  return (
    <section
      id="what-the-audit-does"
      className="relative scroll-mt-24 bg-foreground py-24 text-background sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              What the Audit Does
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              One clear answer: what should we automate, improve, or replace{" "}
              <span className="text-accent">first?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-background/60">
              Not a generic call. A focused review, guided by a proprietary methodology, built to
              show you the fastest path to better operations.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {points.map((p) => (
            <StaggerItem key={p.title} className={p.span}>
              <div
                className={
                  p.tone === "accent"
                    ? "h-full rounded-3xl bg-accent p-9 text-accent-foreground"
                    : "h-full rounded-3xl border border-background/10 bg-background/[0.04] p-9"
                }
              >
                <p.icon className="h-7 w-7" />
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                <p
                  className={
                    p.tone === "accent"
                      ? "mt-3 leading-relaxed text-accent-foreground/90"
                      : "mt-3 leading-relaxed text-background/60"
                  }
                >
                  {p.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Section 4: What You Get ---------- */
function WhatTheyGetSection() {
  const outcomes = [
    { n: "1", text: "What is broken" },
    { n: "2", text: "What is costing money" },
    { n: "3", text: "What wastes your time" },
    { n: "4", text: "What AI can solve" },
    { n: "5", text: "Your next best move", accent: true },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              After the Audit, <span className="text-accent">you will know.</span>
            </h2>
            <div className="hidden h-px flex-1 bg-border lg:mx-10 lg:block" />
            <p className="max-w-sm text-lg italic leading-relaxed text-muted-foreground">
              You leave with clarity, direction, and action — not vague advice.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {outcomes.map((o) => (
            <StaggerItem key={o.n}>
              <div
                className={
                  o.accent
                    ? "flex h-full flex-col items-center rounded-2xl bg-accent p-8 text-center text-accent-foreground"
                    : "flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
                }
              >
                <span
                  className={
                    o.accent
                      ? "flex h-12 w-12 items-center justify-center rounded-full bg-accent-foreground font-bold text-accent"
                      : "flex h-12 w-12 items-center justify-center rounded-full bg-foreground font-bold text-background"
                  }
                >
                  {o.n}
                </span>
                <span className="mt-5 font-medium leading-snug">{o.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Section 5: Why This Matters ---------- */
function WhyMattersSection() {
  const failures = [
    "The wrong use case gets chosen.",
    "The team loses trust.",
    "The budget gets wasted.",
    "The business gets no real return.",
  ];

  return (
    <section className="relative border-y border-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why This Matters
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-balance sm:text-5xl">
            Most AI projects fail for the same reason: they start with the{" "}
            <span className="text-muted-foreground">tool</span> instead of the{" "}
            <span className="text-accent">problem.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 space-y-4 text-left">
          {failures.map((f, i) => (
            <StaggerItem
              key={f}
              className="flex items-start gap-6 border-b border-border pb-6 last:border-0"
            >
              <span className="font-display text-2xl font-bold tracking-tight text-accent">
                0{i + 1}
              </span>
              <p className="text-xl leading-snug text-foreground/90">{f}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            MeadowOps helps SMBs and growth-stage startups avoid failed tools and confusing
            implementation by starting with the{" "}
            <span className="font-semibold text-foreground">right diagnosis first.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 6: Who This Is For ---------- */
function WhoForSection() {
  const audience = [
    { icon: Hand, text: "Your team is doing too much manually." },
    { icon: Rocket, text: "You are growing, but operations are lagging." },
    { icon: Compass, text: "You want AI, but do not know where to begin." },
    { icon: Target, text: "You need a plan before investing in automation." },
    { icon: Building2, text: "You want systems that actually support growth." },
  ];

  return (
    <section className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Who This Is For
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Is this for you?
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 space-y-5">
            {audience.map((a) => (
              <StaggerItem key={a.text} className="flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <a.icon className="h-4 w-4" />
                </span>
                <span className="text-lg font-medium text-foreground/90">{a.text}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-border bg-card p-10 sm:p-12">
            <Wallet className="h-8 w-8 text-accent" />
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl">
              “The right diagnosis saves months of building the wrong thing — and the budget that
              goes with it.”
            </blockquote>
            <p className="mt-6 text-muted-foreground">
              That is what the Audit is built to deliver — execution over hype.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 7: Why MeadowOps Audit ---------- */
function WhyUsSection() {
  const outcomes = [
    "A better starting point",
    "A clearer priority",
    "Less waste",
    "A faster route to useful AI",
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="self-start lg:col-span-5 lg:sticky lg:top-28">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Why MeadowOps Audit
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
              Not a generic consultant.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              MeadowOps is not an agency or a vague consulting firm. It is a focused company built
              around a defined process, outcome awareness, and AI systems designed for your business.
              So instead of guessing, you get:
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {outcomes.map((o, i) => (
            <StaggerItem key={o}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/40">
                <CheckCircle2 className="h-7 w-7 text-accent" />
                <p className="mt-10 font-display text-2xl font-bold leading-tight tracking-tight">
                  {o}
                </p>
                <span className="mt-4 font-display text-sm font-semibold text-foreground/30">
                  0{i + 1}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Section 8: Final CTA ---------- */
function FinalCtaSection() {
  const reduce = useReducedMotion();
  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden bg-accent py-24 text-accent-foreground sm:py-32">
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent-foreground/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-foreground/8 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-foreground/20 bg-accent-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]">
          Start with clarity
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Stop guessing what to automate first.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-accent-foreground/90">
          Get a clear view of what is slowing your business down and what to fix next.
        </p>

        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <CtaButton
            href="https://whop.com/checkout/plan_NmYawSbjYoDsU"
            variant="dark"
            eyebrow="FOR INDIA"
            price={`\n`}
            subtitle="60-minute diagnostic + detailed report within 48 hours"
            showArrow={false}
            className="w-full text-base sm:text-lg"
          >
            Book Your AI Audit
          </CtaButton>
          <CtaButton
            href="https://whop.com/checkout/plan_AkSljzUtYmw1V"
            variant="dark"
            eyebrow="FOR INTERNATIONAL"
            note="(US, UK, Europe, Australia, etc.,)"
            price={`\n`}
            subtitle="60-minute diagnostic + detailed report within 48 hours"
            showArrow={false}
            className="w-full text-base sm:text-lg"
          >
            Book Your AI Audit
          </CtaButton>
        </div>

        <p className="mt-8 text-sm font-medium text-accent-foreground/80">
          Start with the right problem. Build the right system. Scale with confidence.
        </p>
      </motion.div>
    </section>
  );
}
