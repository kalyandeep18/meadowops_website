export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Audit", to: "/audit" },
  { label: "Products & Services", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Community", to: "/community" },
  { label: "Contact", to: "/contact" },
] as const;

export const SITE = {
  name: "MeadowOps",
  tagline: "AI systems that actually do the work.",
  // CTA destination — placeholder until scheduler/form is decided.
  bookingPath: "/audit",
} as const;
