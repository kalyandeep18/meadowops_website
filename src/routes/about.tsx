import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  Package,
  Workflow,
  Route as RouteIcon,
  Target,
  Building2,
  Banknote,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MeadowOps" },
      {
        name: "description",
        content:
          "MeadowOps helps SMBs and growth-stage startups use AI the right way — a productized consulting company with a focused model, proprietary methodology, and a goal of real operational value.",
      },
      { property: "og:title", content: "About MeadowOps — Use AI the right way" },
      {
        property: "og:description",
        content:
          "Not an agency. Not generic consulting. An AIaaS company built around outcomes for SMBs and growth-stage startups.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <AboutHero />
      <WhoWeAreSection />
      <WhatWeBelieveSection />
      <WhatMakesUsDifferentSection />
      <WhoWeServeSection />
      <MissionCtaSection />
    </SiteLayout>
  );
}

/* ---------- Section 1: Hero ---------- */
function AboutHero() {
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

  const lead = "MeadowOps helps businesses use AI".split(" ");
  const tail = "the right way.".split(" ");

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          About MeadowOps
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1 className="lg:col-span-7 text-4xl font-bold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {lead.map((w, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {w}&nbsp;
              </motion.span>
            ))}
            {tail.map((w, i) => (
              <motion.span
                key={`t-${i}`}
                custom={i + lead.length}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block text-accent"
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </h1>

          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We are an AIaaS company built for SMBs and growth-stage startups that want to
              reduce manual work, lower costs, and scale operations with AI systems that are{" "}
              <span className="font-semibold text-foreground">
                clear, practical, and built for real outcomes.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-8"
            >
              <CtaButton to={SITE.bookingPath}>Book an Audit</CtaButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 2: Who We Are ---------- */
function WhoWeAreSection() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <span className="font-display text-6xl font-bold text-accent sm:text-7xl">01</span>
            <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Who We Are
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Not an agency. Not generic consulting.{" "}
              <span className="text-accent">MeadowOps is different by design.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We are not here to give surface-level advice, sell random services, or push tools
              that do not fit your business.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              MeadowOps is a productized consulting company with a focused model, a proprietary
              methodology, and a simple goal: help businesses implement AI systems that actually
              improve how they operate.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 3: What We Believe ---------- */
const NEEDS = [
  "A clear starting point",
  "The right use case",
  "The right system",
  "A path that works inside their business",
] as const;

function WhatWeBelieveSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-background sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -top-24 right-0 h-[320px] w-[480px] rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-display text-6xl font-bold text-accent sm:text-7xl">
                  02
                </span>
                <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-background/60">
                  What We Believe
                </p>
                <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl">
                  AI should create clarity,{" "}
                  <span className="text-accent">not confusion.</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-background/70">
                  Most businesses do not need more noise around AI. They need:
                </p>
              </div>

              <div className="lg:col-span-7 lg:pl-8">
                <ul className="space-y-4">
                  {NEEDS.map((need) => (
                    <li
                      key={need}
                      className="flex items-start gap-4 rounded-2xl border border-background/15 bg-background/5 px-5 py-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-base font-medium leading-snug sm:text-lg">
                        {need}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-base leading-relaxed text-background/70">
                  That is why MeadowOps starts with understanding the problem first, then building
                  the solution around it. Our process is built to reduce wasted budget, avoid
                  failed tools, and make AI useful in the real world.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 4: What Makes Us Different ---------- */
const DIFFERENTIATORS = [
  {
    icon: Package,
    title: "A defined set of products",
    body: "Clear, productized offerings — not a menu of random services.",
  },
  {
    icon: Workflow,
    title: "A structured methodology",
    body: "A proprietary approach applied consistently to every engagement.",
  },
  {
    icon: RouteIcon,
    title: "A clear process",
    body: "From audit to build to activation — a path you can follow.",
  },
  {
    icon: Target,
    title: "A focus on business impact",
    body: "We optimize for outcomes, not just the technology itself.",
  },
] as const;

function WhatMakesUsDifferentSection() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <span className="font-display text-6xl font-bold text-accent sm:text-7xl">03</span>
          <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            What Makes Us Different
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            MeadowOps is built around <span className="text-accent">outcomes.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((d) => (
            <StaggerItem
              key={d.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <d.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            That means every decision inside MeadowOps is designed to{" "}
            <span className="font-semibold text-foreground">
              move the business forward in a practical way.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 5: Who We Serve ---------- */
const AUDIENCE = [
  {
    icon: Building2,
    title: "SMBs",
    body: "Small and medium businesses ready to operate with less manual work.",
  },
  {
    icon: Banknote,
    title: "Funded startups",
    body: "Teams with capital who need AI systems that scale with them.",
  },
  {
    icon: TrendingUp,
    title: "Growth-stage startups",
    body: "Companies scaling fast and looking for practical, real-world AI.",
  },
] as const;

function WhoWeServeSection() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <span className="font-display text-6xl font-bold text-accent sm:text-7xl">04</span>
          <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Who We Serve
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Built for growing businesses that want to{" "}
            <span className="text-accent">scale smarter.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {AUDIENCE.map((a) => (
            <StaggerItem
              key={a.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <a.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            If your business is ready to stop relying on manual processes and start using AI
            systems that support growth,{" "}
            <span className="font-semibold text-foreground">MeadowOps is built for you.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 6: Mission / Final CTA ---------- */
function MissionCtaSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Our mission is simple
              </p>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
                Help businesses use AI with clarity, confidence, and real operational value.
              </h2>
              <div className="mt-9 flex justify-center">
                <CtaButton to={SITE.bookingPath}>Book an Audit</CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
