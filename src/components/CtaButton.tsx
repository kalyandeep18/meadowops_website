import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "light";

type Props = {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-[0_8px_30px_-8px_var(--color-accent)] hover:shadow-[0_14px_40px_-8px_var(--color-accent)] hover:-translate-y-0.5",
  light:
    "bg-foreground text-background hover:-translate-y-0.5",
  ghost:
    "border border-foreground/15 bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/[0.03]",
};

export function CtaButton({ to, href, variant = "primary", children, className, showArrow = true }: Props) {
  const inner = (
    <motion.span whileTap={{ scale: 0.97 }} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
