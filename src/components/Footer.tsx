import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import logo from "@/assets/meadowops-logo.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="MeadowOps home">
              <img
                src={logo.url}
                alt="MeadowOps"
                className="h-9 w-9 object-contain invert"
                width={36}
                height={36}
                loading="lazy"
              />
              <span className="text-xl font-bold tracking-tight">
                Meadow<span className="text-accent">Ops</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">
              We help SMBs and growth-stage startups replace manual operations with AI systems that
              are audited, built, and activated for real business results.
            </p>
            <Link
              to={SITE.bookingPath}
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Book an Audit
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/40">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/40">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li>
                <a href="mailto:hello@meadowops.com" className="transition-colors hover:text-background">
                  hello@meadowops.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-background">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/community" className="transition-colors hover:text-background">
                  Join the community
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-background/20 px-3 py-1.5 text-xs text-background/60 transition-colors hover:border-background/50 hover:text-background"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-7 text-xs text-background/45 sm:flex-row sm:items-center">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="font-medium tracking-tight text-background/60">
            Start with clarity. Build with purpose. Scale with AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
