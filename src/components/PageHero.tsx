import { motion } from "framer-motion";
import { CtaButton } from "@/components/CtaButton";
import { SITE } from "@/lib/site";

type Props = {
  label: string;
  title: string;
  highlight?: string;
  description: string;
  cta?: boolean;
};

/** Shared shell for pages that are scaffolded and built out later. */
export function PageHero({ label, title, highlight, description, cta = true }: Props) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          <span className="h-px w-7 bg-accent" />
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl font-bold leading-[1.05] text-balance sm:text-6xl"
        >
          {title} {highlight && <span className="text-accent">{highlight}</span>}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex justify-center"
          >
            <CtaButton to={SITE.bookingPath}>Book an Audit</CtaButton>
          </motion.div>
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-16 inline-block rounded-full border border-border bg-card px-5 py-2 text-sm text-muted-foreground"
        >
          More detail for this page is on the way.
        </motion.p>
      </div>
    </section>
  );
}
