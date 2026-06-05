import { motion, useReducedMotion } from "framer-motion";
import { CtaButton } from "@/components/CtaButton";
import { SITE } from "@/lib/site";


export function Hero() {
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.06, duration: 0.7, ease },
    }),
  };

  const line1 = "Stop wasting time on manual work.".split(" ");
  const line2 = "Start running your business with AI systems that actually do the work.".split(" ");

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* ambient accent glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
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
          AI as a Service — built for real business results
        </motion.div>

        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
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
                {w === "actually" ? <span className="text-accent">{w}</span> : w}&nbsp;
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          MeadowOps helps SMBs and growth-stage startups replace repetitive operations, cut wasted
          effort, and scale faster with AI systems built for real business results. Not ideas. Not
          hype. <span className="font-semibold text-foreground">Real systems.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <CtaButton to={SITE.bookingPath}>Book an Audit</CtaButton>
          <CtaButton to="/products" variant="ghost" showArrow={false}>
            See What We Build
          </CtaButton>
        </motion.div>

      </div>
    </section>
  );
}
