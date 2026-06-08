import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Search,
  Wrench,
  Workflow,
  ClipboardCheck,
  Rocket,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Layers,
  HelpCircle,
  Coins,
  Gauge,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Services — MeadowOps" },
      {
        name: "description",
        content:
          "Choose the right AI path and build the right AI system. Explore MeadowOps products and services — Find Your AI Model, the AI Clarity Audit, and the AI System Build.",
      },
      { property: "og:title", content: "Products & Services — MeadowOps" },
      {
        property: "og:description",
        content:
          "From confusion to clarity. AI products and services built to solve real business problems — practical, clear, and results-driven.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <ProductsHero />
      <BigIdeaSection />
      <SolutionsHub />
      <HowItWorksSection />
      <PositioningSection />
      <FinalCtaSection />
    </SiteLayout>
  );
}

/* ---------- Section 1: Hero ---------- */
function ProductsHero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.05, duration: 0.7, ease },
    }),
  };

  const line1 = "Choose the right AI path.".split(" ");
  const line2 = "Build the right AI system.".split(" ");

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Products & Services
        </motion.div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
          <span className="block">
            {line1.map((w, i) => (
              <motion.span key={i} custom={i} variants={word} initial="hidden" animate="show" className="inline-block">
                {w}&nbsp;
              </motion.span>
            ))}
          </span>
          <span className="mt-2 block text-muted-foreground">
            {line2.map((w, i) => (
              <motion.span
                key={i}
                custom={i + line1.length}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {w === "right" ? <span className="text-accent">{w}</span> : w}&nbsp;
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          MeadowOps helps founders and growing teams move from confusion to clarity with AI products
          and services built to solve real business problems. Whether you need help choosing the
          right model or building a custom AI system, we make the path{" "}
          <span className="font-semibold text-foreground">clear, practical, and results-driven.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <CtaButton to={SITE.bookingPath}>Book an Audit</CtaButton>
          <CtaButton href="#solutions" variant="ghost" showArrow={false}>
            Explore Our Solutions
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Section 2: The Big Idea ---------- */
function BigIdeaSection() {
  const unknowns = [
    { icon: Cpu, text: "Which model fits the task" },
    { icon: Sparkles, text: "What that model is actually good at" },
    { icon: Gauge, text: "How much it can handle" },
    { icon: Coins, text: "What it will cost" },
    { icon: HelpCircle, text: "Whether it will really solve the problem" },
  ];

  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            The Big Idea
          </span>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Most businesses do not fail because of AI. They fail because they choose the{" "}
            <span className="text-accent">wrong starting point.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Too many founders try to use AI without knowing:
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {unknowns.map((u) => (
            <StaggerItem key={u.text}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <u.icon className="h-5 w-5" />
                </span>
                <p className="text-base font-medium leading-snug text-foreground/90">{u.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-8 rounded-3xl bg-foreground p-10 text-background sm:p-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
                And even when the problem is clear, the next challenge appears:{" "}
                <span className="text-accent">how do we build the system properly?</span>
              </p>
            </div>
            <p className="text-lg leading-relaxed text-background/70">
              That is where MeadowOps comes in. We do not just give advice. We help you make the
              right decision first — then build what your business actually needs.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 3: Solutions Hub (toggle centerpiece) ---------- */
type Panel = "products" | "services";

function SolutionsHub() {
  const [open, setOpen] = useState<Record<Panel, boolean>>({
    products: true,
    services: false,
  });

  const toggle = (key: Panel) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section id="solutions" className="relative scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Solutions
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              One product. Two services. A clear AI pathway.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Open each path to see exactly what it includes and where it fits in your journey.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-6">
          <div id="products" className="scroll-mt-24">
            <ToggleHeader
              label="Products"
              count="01"
              descriptor="​"
              isOpen={open.products}
              onClick={() => toggle("products")}
            />
            <TogglePanel isOpen={open.products}>
              <ProductsContent />
            </TogglePanel>
          </div>

          <div id="services" className="scroll-mt-24">
            <ToggleHeader
              label="Services"
              count="02"
              descriptor=""
              isOpen={open.services}
              onClick={() => toggle("services")}
            />
            <TogglePanel isOpen={open.services}>
              <ServicesContent />
            </TogglePanel>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToggleHeader({
  label,
  count,
  descriptor,
  isOpen,
  onClick,
}: {
  label: string;
  count: string;
  descriptor: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className={cn(
        "group flex w-full items-center justify-between gap-6 rounded-3xl border px-7 py-7 text-left transition-all duration-300 sm:px-10 sm:py-9",
        isOpen
          ? "border-transparent bg-foreground text-background"
          : "border-border bg-card text-foreground hover:border-accent/40",
      )}
    >
      <div className="flex items-center gap-5 sm:gap-7">
        <span
          className={cn(
            "font-display text-2xl font-bold sm:text-4xl",
            isOpen ? "text-accent" : "text-accent",
          )}
        >
          {count}
        </span>
        <div>
          <h3 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">{label}</h3>
          <p
            className={cn(
              "mt-1 text-sm font-medium uppercase tracking-[0.15em]",
              isOpen ? "text-background/60" : "text-muted-foreground",
            )}
          >
            {descriptor}
          </p>
        </div>
      </div>
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors",
          isOpen ? "bg-accent text-accent-foreground" : "bg-foreground text-background",
        )}
      >
        <ChevronDown
          className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")}
        />
      </span>
    </button>
  );
}

function TogglePanel({ isOpen, children }: { isOpen: boolean; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="pt-6">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProductsContent() {
  const helps = [
    "Choose the best model for your task",
    "Compare models by real use case",
    "Understand token size and token requirements",
    "See what each model is actually good at",
    "Avoid wasting time on the wrong choice",
  ];

  return (
    <div className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-2 lg:gap-12">
      <div>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
          <Cpu className="h-6 w-6" />
        </span>
        <h4 className="mt-6 font-display text-3xl font-bold tracking-tight">
          Find Your AI Model{" "}
          <span className="text-muted-foreground">(FYAIM)</span>
        </h4>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-accent">
          For founders confused about which AI model to use
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Today, almost every model claims to do everything — text, image, video, and more. But in
          reality, not every model is equally strong at every task. Some excel at text, some at
          visuals, others at specific workflows, token sizes, or output types. FYAIM helps you find
          the right AI model for the right job.
        </p>
        <div className="mt-8 rounded-2xl bg-secondary/60 p-6">
          <p className="text-base leading-relaxed text-foreground/90">
            <span className="font-semibold">Why it matters:</span> instead of guessing, you get a
            clear direction before you build, test, or spend money.
          </p>
        </div>
        <div className="mt-8">
          <CtaButton to={SITE.bookingPath}>Find the Right Model</CtaButton>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-background p-7 sm:p-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          What it helps you do
        </p>
        <ul className="mt-6 space-y-4">
          {helps.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="leading-snug text-foreground/90">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServicesContent() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Service 1: AI Clarity Audit */}
      <div className="flex flex-col rounded-3xl border border-border bg-card p-8 sm:p-9">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
          <Search className="h-6 w-6" />
        </span>
        <h4 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          The AI Clarity Audit
        </h4>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-accent">
          The first step before building anything
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          A 60-minute structured diagnostic session where we uncover your biggest operational pain
          points and identify the AI systems that will create the highest impact.
        </p>

        <p className="mt-7 font-display text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
          What you get — the AI Opportunity Report
        </p>
        <p className="mt-1 text-sm text-muted-foreground">A detailed 3 to 5-page document covering:</p>
        <ul className="mt-4 space-y-3">
          {[
            "Your current operational state",
            "Three ranked AI opportunities",
            "Estimated time savings",
            "Estimated cost savings",
            "The investment range for implementation",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm leading-snug text-foreground/90">{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 rounded-2xl bg-secondary/60 p-5">
          <p className="text-sm leading-relaxed text-foreground/90">
            <span className="font-semibold">Why you need it:</span> clarity comes before execution.
            You do not want to build the wrong system, waste budget, or automate the wrong process.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <CtaButton to={SITE.bookingPath}>Book the AI Clarity Audit</CtaButton>
        </div>
      </div>

      {/* Service 2: AI System Build */}
      <div className="flex flex-col rounded-3xl border border-border bg-card p-8 sm:p-9">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
          <Wrench className="h-6 w-6" />
        </span>
        <h4 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          The AI System Build
        </h4>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-accent">
          For businesses that already know what to build
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Once the audit identifies the right opportunity, we design, build, test, and activate a
          custom AI system for your business — and train your team to operate it independently.
        </p>

        <p className="mt-7 font-display text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
          What you receive
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "A live, tested AI system ready to use",
            "Complete documentation",
            "Full team training",
            "30-day support after launch",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm leading-snug text-foreground/90">{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 rounded-2xl border border-accent/30 bg-accent/[0.06] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Important note
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">
            Phase 2 only starts after Phase 1. If you want the AI System Build, you first complete
            the AI Clarity Audit — so we build the right thing from the start.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <CtaButton to={SITE.bookingPath}>Start with the Audit</CtaButton>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section 4: How It Works ---------- */
function HowItWorksSection() {
  const steps = [
    {
      n: "01",
      icon: ClipboardCheck,
      title: "Audit",
      text: "We find the best AI opportunity inside your business.",
    },
    {
      n: "02",
      icon: Workflow,
      title: "Build",
      text: "We create the custom system based on the audit.",
    },
    {
      n: "03",
      icon: Rocket,
      title: "Activate",
      text: "We test, train, and launch the system with your team.",
    },
  ];

  return (
    <section className="relative bg-foreground py-24 text-background sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              How It Works
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Audited, built, and <span className="text-accent">activated</span> for your business.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-background/60">
              Three steps that keep the process simple, focused, and outcome-driven.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="flex h-full flex-col rounded-3xl border border-background/10 bg-background/[0.04] p-9">
                <div className="flex items-center justify-between">
                  <s.icon className="h-7 w-7 text-accent" />
                  <span className="font-display text-4xl font-bold text-background/15">{s.n}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-background/60">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Section 5: Positioning ---------- */
function PositioningSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Layers className="mx-auto h-9 w-9 text-accent" />
          <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold leading-tight text-balance sm:text-5xl">
            This is not a menu of random services. It is a clear{" "}
            <span className="text-accent">AI pathway.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            For businesses that want better operations, less manual work, and more output — without
            wasted time or confusion. MeadowOps is not a generic agency. It is a focused AI company
            built to help SMBs and growth-stage startups implement systems that actually move the
            business forward.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 6: Final CTA ---------- */
function FinalCtaSection() {
  return (
    <section className="relative px-6 pb-24 sm:pb-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <Reveal>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Ready to choose the right <span className="text-accent">AI move?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Start with the audit. Get clarity first. Then build with confidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <CtaButton to={SITE.bookingPath}>Book the AI Clarity Audit</CtaButton>
              <CtaButton href="#products" variant="ghost" showArrow={false}>
                Explore FYAIM
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
