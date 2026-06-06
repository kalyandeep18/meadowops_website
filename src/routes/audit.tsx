import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Hand,
  Repeat,
  Unplug,
  Wallet,
  AlertTriangle,
  Clock,
  Target,
  CheckCircle2,
  XCircle,
  Search,
  Sparkles,
  Building2,
  Rocket,
  Compass,
  ShieldCheck,
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

const SectionLabel = ({ children }: { children: string }) => (
  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
    <span className="h-px w-7 bg-accent" />
    {children}
  </span>
);

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

/* ---------- Section 1: Hero ---------- */
function AuditHero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.12 + i * 0.05, duration: 0.7, ease },
    }),
  };

  const line = "Find the real bottleneck before you build anything with AI.".split(" ");

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          The AI Audit — start with clarity
        </motion.div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          {line.map((w, i) => (
            <motion.span key={i} custom={i} variants={word} initial="hidden" animate="show" className="inline-block">
              {w === "bottleneck" ? <span className="text-accent">{w}</span> : w}&nbsp;
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Most businesses do not need more tools. They need clarity. Our AI Audit shows you where
          manual work is costing time, money, and growth — and what to fix first. MeadowOps helps SMBs
          and growth-stage startups identify the right AI opportunities{" "}
          <span className="font-semibold text-foreground">before they waste budget on the wrong solution.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <CtaButton to={SITE.bookingPath}>Book My Audit</CtaButton>
          <CtaButton href="#what-the-audit-does" variant="ghost" showArrow={false}>
            See What We Find
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Section 2: The Problem ---------- */
function ProblemSection() {
  const reasons = [
    { icon: Hand, text: "work is still done by hand" },
    { icon: Repeat, text: "teams repeat the same tasks every day" },
    { icon: Unplug, text: "tools do not connect" },
    { icon: Wallet, text: "costs keep rising" },
    { icon: AlertTriangle, text: "growth creates more chaos instead of more control" },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-balance sm:text-5xl">
            Your business is not stuck because you lack AI.{" "}
            <span className="text-muted-foreground">It is stuck because:</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2">
          {reasons.map((r) => (
            <StaggerItem
              key={r.text}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <r.icon className="h-5 w-5" />
              </span>
              <span className="text-lg text-foreground/85">{r.text}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-foreground p-8 text-background sm:p-10">
            <p className="text-xl font-medium leading-relaxed sm:text-2xl">
              And the worst part? Most businesses try to fix{" "}
              <span className="text-accent">all of it at once.</span>
            </p>
            <p className="mt-4 leading-relaxed text-background/70">
              That leads to confusion, wasted money, and AI solutions that never truly fit the
              business. MeadowOps exists to stop that cycle.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 3: What the Audit Does ---------- */
function WhatItDoesSection() {
  const points = [
    { icon: Clock, text: "where your team loses the most time" },
    { icon: Repeat, text: "which tasks are repeated too often" },
    { icon: Hand, text: "what manual work is slowing growth" },
    { icon: Sparkles, text: "where AI can create the biggest impact" },
    { icon: Target, text: "what system should be built first" },
    { icon: XCircle, text: "what should be avoided for now" },
  ];

  return (
    <section id="what-the-audit-does" className="relative scroll-mt-24 bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>What the Audit Does</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
              A clear answer to one question:{" "}
              <span className="text-accent">what should we automate, improve, or replace first?</span>
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {points.map((p, i) => (
            <StaggerItem key={p.text}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
                <span className="absolute right-6 top-6 font-display text-5xl font-bold text-foreground/[0.05]">
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <p className="mt-6 text-lg font-medium leading-relaxed text-foreground/90">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            This is not a generic call. It is a focused review built to show you the fastest path to
            better operations — guided by a{" "}
            <span className="font-semibold text-foreground">proprietary methodology</span> and a
            defined product approach.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 4: What They Get ---------- */
function WhatTheyGetSection() {
  const outcomes = [
    "what is broken",
    "what is costing you money",
    "what is wasting your team's time",
    "what AI can realistically solve",
    "what your next best move should be",
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionLabel>What You Get</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
            After the Audit, <span className="text-accent">you will know.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 space-y-3">
          {outcomes.map((o) => (
            <StaggerItem
              key={o}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
              <span className="text-lg text-foreground/90">{o}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-border bg-card p-8 sm:p-10">
            <p className="text-xl font-medium leading-relaxed sm:text-2xl">
              You will not leave with vague advice. You will leave with{" "}
              <span className="text-accent">clarity, direction, and a smarter path forward.</span>
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That is the point of the audit: not information, but action.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 5: Why This Matters ---------- */
function WhyMattersSection() {
  const failures = [
    "the wrong use case gets chosen",
    "the team loses trust",
    "the budget gets wasted",
    "the business gets no real return",
  ];

  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-background sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionLabel>Why This Matters</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-balance sm:text-5xl">
            Most AI projects fail for the same reason. They start with the{" "}
            <span className="text-background/40">tool</span> instead of the{" "}
            <span className="text-accent">problem.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2">
          {failures.map((f) => (
            <StaggerItem
              key={f}
              className="flex items-center gap-4 rounded-2xl border border-background/10 bg-background/[0.03] p-5 transition-colors hover:border-accent/40"
            >
              <XCircle className="h-6 w-6 shrink-0 text-accent" />
              <span className="text-lg text-background/85">{f}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-background/70">
            MeadowOps helps SMBs and growth-stage startups avoid failed tools and confusing
            implementation by starting with the{" "}
            <span className="font-semibold text-background">right diagnosis first.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 6: Who This Is For ---------- */
function WhoForSection() {
  const audience = [
    { icon: Hand, text: "your team is doing too much manually" },
    { icon: Rocket, text: "your business is growing, but operations are lagging" },
    { icon: Compass, text: "you want AI, but do not know where to begin" },
    { icon: Target, text: "you need a clear plan before investing in automation" },
    { icon: Building2, text: "you want systems that actually support growth" },
  ];

  return (
    <section className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Who This Is For</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
              This is <span className="text-accent">for you</span> if:
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a) => (
            <StaggerItem key={a.text}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-accent/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                  <a.icon className="h-6 w-6" />
                </span>
                <p className="mt-6 text-lg font-medium leading-relaxed text-foreground/90">{a.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Section 7: Why MeadowOps Audit ---------- */
function WhyUsSection() {
  const outcomes = [
    "a better starting point",
    "a clearer priority",
    "less waste",
    "a faster route to useful AI",
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Why MeadowOps Audit</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Why not just use a generic consultant?{" "}
              <span className="text-muted-foreground">Because generic advice does not build outcomes.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            MeadowOps is not an agency. It is not a vague consulting firm. It is a focused company
            built around a{" "}
            <span className="font-semibold text-foreground">defined process</span>, outcome
            awareness, and AI systems designed for your specific business. So instead of guessing,
            you get:
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2">
          {outcomes.map((o) => (
            <StaggerItem
              key={o}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="text-lg font-medium text-foreground/90">{o}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Section 8: Final CTA ---------- */
function FinalCtaSection() {
  return (
    <section className="relative pb-24 sm:pb-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Stop guessing what to <span className="text-accent">automate first.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Get a clear view of what is slowing your business down and what to fix next.
            </p>
            <div className="mt-9 flex justify-center">
              <CtaButton to={SITE.bookingPath} className="px-9 py-4 text-base">
                Book Your Audit
              </CtaButton>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Start with the right problem. Build the right system. Scale with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
