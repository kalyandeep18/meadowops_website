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
  subtitle?: string;
  className?: string;
  showArrow?: boolean;
};

const base =
  "group relative items-center justify-center rounded-full font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const layouts = {
  default: "inline-flex gap-2 px-7 py-3.5 text-sm",
  stacked: "flex flex-col gap-1.5 px-8 py-5 text-center",
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

export function CtaButton({ to, href, variant = "primary", children, subtitle, className, showArrow = true }: Props) {
  const layout = subtitle ? layouts.stacked : layouts.default;
  const inner = (
    <motion.span whileTap={{ scale: 0.97 }} className={cn(base, layout, variants[variant], className)}>
      <span className="flex items-center gap-2">
        {children}
        {showArrow && !subtitle && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
      {subtitle && (
        <span className="block max-w-[280px] text-xs font-semibold leading-snug text-accent-foreground/85">
          {subtitle}
        </span>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className="inline-block">
      {inner}
    </Link>
  );
}
