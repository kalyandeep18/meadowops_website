import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "light" | "dark";

type Props = {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  eyebrow?: string;
  note?: string;
  price?: string;
  subtitle?: string;
  className?: string;
  showArrow?: boolean;
};

const base =
  "group relative items-center justify-center rounded-full font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const layouts = {
  default: "inline-flex gap-2 px-7 py-3.5 text-sm",
  stacked: "flex h-full flex-col items-center justify-center gap-1 px-8 py-5 text-center",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-[0_8px_30px_-8px_var(--color-accent)] hover:shadow-[0_14px_40px_-8px_var(--color-accent)] hover:-translate-y-0.5",
  light:
    "bg-foreground text-background hover:-translate-y-0.5",
  ghost:
    "border border-foreground/15 bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/[0.03]",
  dark:
    "bg-foreground text-accent-foreground shadow-[0_10px_35px_-10px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)] hover:bg-foreground/92 hover:shadow-[0_18px_50px_-12px_color-mix(in_oklab,var(--color-foreground)_45%,transparent)] hover:-translate-y-1",
};

export function CtaButton({
  to,
  href,
  variant = "primary",
  children,
  eyebrow,
  note,
  price,
  subtitle,
  className,
  showArrow = true,
}: Props) {
  const hasStack = eyebrow || note || price || subtitle;
  const layout = hasStack ? layouts.stacked : layouts.default;
  const inner = (
    <motion.span
      whileTap={{ scale: 0.97 }}
      className={cn(base, "h-full w-full", layout, variants[variant], className)}
    >
      {eyebrow && (
        <span className="block w-full text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-foreground/80">
          {eyebrow}
        </span>
      )}
      {note && (
        <span className="block w-full text-center text-xs font-medium leading-snug text-accent-foreground/70">
          {note}
        </span>
      )}
      <span className="flex items-center justify-center gap-2">
        {children}
        {showArrow && !hasStack && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
      {price && (
        <span className="block w-full text-center text-2xl font-bold leading-none whitespace-pre-wrap text-accent-foreground">
          {price}
        </span>
      )}
      {subtitle && (
        <span className="block w-full text-center text-xs font-semibold leading-snug text-accent-foreground/85">
          {subtitle}
        </span>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="block h-full w-full">
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className="block h-full w-full">
      {inner}
    </Link>
  );
}
