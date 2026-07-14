import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  LayoutGrid,
  Wrench,
  GraduationCap,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Join M's AI Circle | MeadowOps" },
      {
        name: "description",
        content:
          "A free lifetime community for SMB and startup founders. Get step-by-step AI guides, simple frameworks, and practical resources to implement AI in your business without confusion.",
      },
      { property: "og:title", content: "Join M's AI Circle — MeadowOps Community" },
      {
        property: "og:description",
        content:
          "Free forever. Step-by-step guides, frameworks, and founder-friendly learning to bring AI into your business the right way.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <SiteLayout>
      <CommunityHero />
      <WhatYouGetSection />
      <FinalCtaSection />
    </SiteLayout>
  );
}

/* ---------- Section 1: Hero ---------- */
function CommunityHero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 36 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.08, duration: 0.7, ease },
    }),
  };

  const lines = [
    { text: "JOIN", accent: false },
    { text: "M'S AI", accent: true },
    { text: "CIRCLE", accent: false },
  ];

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Free Lifetime Community
        </motion.div>

        {/* Decorative giant stacked words + overlays */}
        <div className="relative mx-auto max-w-4xl">
          <h1 className="sr-only">
            Join M's AI Circle. Learn how to bring AI into your business the right way.
          </h1>

          <div aria-hidden className="select-none">
            {lines.map((line, i) => (
              <motion.div
                key={line.text}
                custom={i}
                variants={word}
                initial="hidden"
                animate="show"
                className={`block font-display font-bold leading-[0.9] tracking-tight text-5xl sm:text-7xl lg:text-8xl ${
                  line.accent ? "text-accent" : "text-foreground"
                }`}
              >
                {line.text}
              </motion.div>
            ))}
          </div>

          {/* Floating glass member cards (desktop only) */}
          <FloatingCard
            className="left-[-3rem] bottom-2 hidden lg:flex"
            initials="JD"
            name="founders joining"
            stat="1,200+ members"
          />
          <FloatingCard
            className="right-[-3rem] top-0 hidden lg:flex"
            initials="$0"
            name="membership"
            stat="Free forever"
          />

          {/* Rotating circular badge */}
          <div className="absolute -right-6 -bottom-16 hidden lg:block">
            <RotatingBadge />
          </div>

          {/* Accent arrows */}
          <svg
            aria-hidden
            className="absolute -left-16 top-1/2 hidden h-16 w-20 -translate-y-1/2 text-accent xl:block"
            viewBox="0 0 80 64"
            fill="none"
          >
            <path
              d="M4 12c20 6 40 28 70 26"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M62 26l12 12-16 4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A free lifetime community for SMB and startup founders who want simple resources,
          step-by-step guides, and practical frameworks to implement AI in their company
          without confusion. MeadowOps is built to help SMBs and growth-stage startups put AI
          into action, and{" "}
          <span className="font-semibold text-foreground">this community is where that learning starts.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-9 flex justify-center"
        >
          <CtaButton href="https://chat.whatsapp.com/K5aIRmnORzdIIsNy8mYg3I" target="_blank" rel="noopener noreferrer">
            Join for Free
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  initials,
  name,
  stat,
}: {
  className: string;
  initials: string;
  name: string;
  stat: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-10 items-center gap-3 rounded-2xl border border-border bg-card/70 px-4 py-3 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md ${className}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
        {initials}
      </span>
      <span className="text-left">
        <span className="block text-xs text-muted-foreground">{name}</span>
        <span className="block text-sm font-semibold text-foreground">{stat}</span>
      </span>
    </motion.div>
  );
}

function RotatingBadge() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
      className="relative h-28 w-28"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-foreground text-[7.7px] font-semibold uppercase tracking-[0.15em]">
          <textPath href="#badge-circle" startOffset="0" textLength="228" lengthAdjust="spacing">
            Join for free • Join for free • Join for free • 
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <Sparkles className="h-5 w-5" />
      </span>
    </motion.div>
  );
}

/* ---------- Section 2: What You Get ---------- */
const BENEFITS = [
  {
    icon: BookOpen,
    title: "Step-by-step AI guides",
    body: "Clear walkthroughs that take you from idea to implementation.",
  },
  {
    icon: LayoutGrid,
    title: "Simple frameworks",
    body: "Repeatable structures for deciding where AI actually helps.",
  },
  {
    icon: Wrench,
    title: "Implementation resources",
    body: "Practical tools and templates you can apply right away.",
  },
  {
    icon: GraduationCap,
    title: "Founder-friendly learning",
    body: "Made for real founders, not theory-only content.",
  },
  {
    icon: Users,
    title: "Ongoing support",
    body: "Grow through shared knowledge from people building like you.",
  },
] as const;

function WhatYouGetSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-7 bg-accent" />
            What You Get
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Everything you need to start using AI with clarity.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Inside M's AI Circle, you get practical resources made for real founders, not
            theory-only content.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <StaggerItem
              key={b.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12">
          <div className="rounded-2xl bg-foreground px-8 py-8 text-center text-background sm:py-10">
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
              No noise. No complex language. Just useful content that helps you{" "}
              <span className="text-accent">move faster.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 3: Final CTA ---------- */
function FinalCtaSection() {
  return (
    <section id="join" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
                Free today. Free forever. Built for founders who want to grow smarter.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                If you are a founder for SMB or startup and want a better way to understand and
                apply AI, this is your place.
              </p>
              <div className="mt-9 flex justify-center">
                <CtaButton href="https://chat.whatsapp.com/K5aIRmnORzdIIsNy8mYg3I" target="_blank" rel="noopener noreferrer">
                  Join M's AI Circle
                </CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
