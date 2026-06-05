import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Hammer,
  Zap,
  Building2,
  Rocket,
  TrendingUp,
  Clock,
  Link2,
  Wallet,
  HelpCircle,
  Layers,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { SITE } from "@/lib/site";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MeadowOps — AI Systems That Actually Do The Work" },
      {
        name: "description",
        content:
          "MeadowOps helps SMBs and growth-stage startups replace manual operations with AI systems that are audited, built, and activated for real business results.",
      },
      { property: "og:title", content: "MeadowOps — AI Systems That Actually Do The Work" },
      {
        property: "og:description",
        content:
          "Replace repetitive operations, cut wasted effort, and scale faster with AI systems built for real business results.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SectionLabel = ({ children }: { children: string }) => (
  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
    <span className="h-px w-7 bg-accent" />
    {children}
  </span>
);

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <StorySection />
      <BigBadSection />
      <TransformationSection />
      <WhatWeDoSection />
      <WhoForSection />
      <WhySection />
      <FinalCtaSection />
    </SiteLayout>
  );
}

/* ---------- Section 2: The Story ---------- */
function StorySection() {
  const beats = [
    "At first, manual work feels manageable. A few extra tasks here. A few more tools there.",
    "One person handles support. Another manages follow-ups. Someone else repeats the same work every day.",
    "Then the business grows. And now the small inefficiencies become big problems.",
    "Work slows down. Costs go up. The team gets tired. Important things get missed.",
    "And the systems you thought would help… only create more confusion.",
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionLabel>The Story</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
            Your business is growing. But your team is still stuck doing too much{" "}
            <span className="text-accent">by hand.</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-px">
          {beats.map((b, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex gap-5 border-l-2 border-border py-5 pl-6 transition-colors hover:border-accent">
                <span className="select-none font-display text-sm font-semibold text-muted-foreground/50">
                  0{i + 1}
                </span>
                <p className="text-lg leading-relaxed text-muted-foreground">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl bg-foreground p-8 text-background sm:p-10">
            <p className="text-xl font-medium leading-relaxed sm:text-2xl">
              That is the point where <span className="text-accent">MeadowOps</span> steps in.
            </p>
            <p className="mt-4 leading-relaxed text-background/70">
              We help companies turn broken, manual operations into AI-powered systems that are
              clear, useful, and built around how your business actually works.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 3: The Big Bad ---------- */
function BigBadSection() {
  const problems = [
    { icon: Layers, text: "too much manual work" },
    { icon: Clock, text: "too many wasted hours" },
    { icon: Link2, text: "too many tools that do not connect" },
    { icon: Wallet, text: "too much money spent on things that do not work" },
    { icon: HelpCircle, text: "too much confusion about what to build first" },
  ];

  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-background sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionLabel>The Real Problem</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-balance sm:text-5xl">
            The real problem is not <span className="text-background/40">“lack of AI.”</span>
            <br />
            It is this:
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2">
          {problems.map((p) => (
            <StaggerItem
              key={p.text}
              className="flex items-center gap-4 rounded-2xl border border-background/10 bg-background/[0.03] p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <p.icon className="h-5 w-5" />
              </span>
              <span className="text-lg capitalize text-background/85">{p.text}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 max-w-3xl space-y-4 text-lg leading-relaxed text-background/70">
            <p>
              Most businesses do not need more AI noise. They need the{" "}
              <span className="font-semibold text-background">right AI system</span>, built for the
              right problem, in the right order.
            </p>
            <p>
              That is why MeadowOps is not a generic agency. It is a focused, outcome-aware company
              built to help businesses implement AI in a way that{" "}
              <span className="text-accent">reduces waste and increases output.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 4: What Changes ---------- */
function TransformationSection() {
  const shifts = [
    { from: "manual chaos", to: "smart systems" },
    { from: "slow operations", to: "faster execution" },
    { from: "wasted budget", to: "useful automation" },
    { from: "uncertainty", to: "clear direction" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          className="opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />

        <div className="relative mx-auto w-full max-w-2xl px-6">
          <div>
            <Reveal>
              <SectionLabel>After MeadowOps</SectionLabel>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
                When the right AI system is in place, everything feels{" "}
                <span className="text-accent">lighter.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Your team stops repeating the same tasks. Your operations become faster. Your
                business saves time and cost. And your systems start supporting growth instead of
                blocking it.
              </p>
            </Reveal>

            <StaggerGroup className="mt-10 space-y-3">
              {shifts.map((s) => (
                <StaggerItem
                  key={s.from}
                  className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-sm"
                >
                  <span className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-muted-foreground line-through decoration-muted-foreground/40">
                    {s.from}
                  </span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                  <span className="rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent">
                    {s.to}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- Section 5: What MeadowOps Does ---------- */
function WhatWeDoSection() {
  const steps = [
    {
      icon: Search,
      title: "Audit",
      body: "We find what is slowing you down and identify where AI can create the biggest impact first.",
    },
    {
      icon: Hammer,
      title: "Build",
      body: "We design and implement the right AI systems for your workflow, team, and goals.",
    },
    {
      icon: Zap,
      title: "Activate",
      body: "We make sure the system actually works inside your business, not just on paper.",
    },
  ];

  return (
    <section className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
              We help you <span className="text-accent">audit, build, and activate</span> AI systems
              for your business.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
                <span className="absolute right-6 top-6 font-display text-5xl font-bold text-foreground/[0.05]">
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            MeadowOps has{" "}
            <span className="font-semibold text-foreground">three defined products</span> and a{" "}
            <span className="font-semibold text-foreground">proprietary methodology</span> designed
            to guide every decision inside the company.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 6: Who It Is For ---------- */
function WhoForSection() {
  const audience = [
    { icon: Building2, title: "SMBs", body: "Established businesses ready to scale without adding more manual headcount." },
    { icon: Rocket, title: "Funded startups", body: "Teams with momentum that need systems to match their pace of growth." },
    { icon: TrendingUp, title: "Growth-stage startups", body: "Companies moving fast, where operations are struggling to keep up." },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Who It Is For</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Built for businesses ready to grow{" "}
              <span className="text-accent">without adding more manual work.</span>
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {audience.map((a) => (
            <StaggerItem key={a.title}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-accent/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-10 text-lg font-medium text-muted-foreground">
            If your business is already moving, but your systems are struggling to keep up —{" "}
            <span className="text-foreground">this is built for you.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 7: Why MeadowOps ---------- */
function WhySection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-background sm:py-32">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionLabel>Why MeadowOps</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-balance sm:text-5xl">
            You do not need another agency that gives you{" "}
            <span className="text-background/40">vague advice.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-background/70">
            You need a partner that understands what to fix, what to build, and how to make AI useful
            inside your business.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-background/10 bg-background/[0.03] p-8 sm:p-10">
            <p className="text-2xl font-semibold leading-snug sm:text-3xl">
              MeadowOps is built to help businesses implement AI systems that{" "}
              <span className="text-accent">10x operations</span> — through a clear process:
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {["Audited", "Built", "Activated"].map((w, i) => (
                <span key={w} className="flex items-center gap-3">
                  <span className="rounded-full border border-background/20 px-5 py-2 text-sm font-semibold">
                    {w}
                  </span>
                  {i < 2 && <ArrowRight className="h-4 w-4 text-accent" />}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-background/50">for your specific business.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 8: Final CTA ---------- */
function FinalCtaSection() {
  return (
    <section className="relative py-24 sm:py-32">
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
              Ready to stop running your business{" "}
              <span className="text-accent">the hard way?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Let's find the biggest bottleneck in your operations and turn it into a system that
              saves time, cuts cost, and helps your team move faster.
            </p>
            <div className="mt-9 flex justify-center">
              <CtaButton to={SITE.bookingPath} className="px-9 py-4 text-base">
                Book Your Audit
              </CtaButton>
            </div>
            <p className="mt-6 text-sm font-medium tracking-tight text-muted-foreground">
              Start with clarity. Build with purpose. Scale with AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
