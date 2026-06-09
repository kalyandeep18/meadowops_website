# Community Page

Replace the placeholder `PageHero` in `src/routes/community.tsx` with a full, brand-consistent page built from the supplied copy. The referenced `hero.tsx` snippet (a crypto "BASE CLUB" hero) arrived with its SVG/JSX bodies stripped out, and it ships its own navbar/logo/wallet button that would clash with the existing MeadowOps `SiteLayout` header. So rather than paste it verbatim, I'll recreate its strongest ideas — massive stacked display typography, floating glass "member" cards, a rotating circular badge, hand-drawn accent arrows, and a 3-card feature row — rebuilt in the MeadowOps design language (Space Grotesk / DM Sans, Star White canvas, black inverted blocks, vivid orange accent, `Reveal`/`StaggerGroup` motion).

## Page structure

```text
1. Hero          — eyebrow, massive stacked headline, subheadline, "Join for Free" CTA,
                    floating glass member cards, rotating circular badge, accent arrows
2. What You Get  — headline + intro, then the 5 benefits as animated cards
3. Final CTA     — "Free today. Free forever." headline + body + "Join M's AI Circle" button
```

## Section 1 — Hero (the centerpiece)

- Background grid + ambient orange glow consistent with other page heroes.
- Eyebrow pill ("Free Community" / pulsing accent dot) matching the Products/Home hero pill.
- Massive stacked display words built from the brand idea, e.g. three lines: **JOIN  ·  M'S AI  ·  CIRCLE** rendered as oversized `text-7xl/8xl` Space Grotesk, with one line in accent orange. Word-by-word `framer-motion` entrance (respecting `useReducedMotion`).
- Headline copy used as the accessible H1: "Join M's AI Circle. Learn how to bring AI into your business the right way." (the giant words are decorative; the full H1 sits as the readable headline so SEO/screen-readers get the real sentence).
- Subheadline paragraph (full supplied copy).
- Primary `CtaButton` → `SITE.bookingPath` placeholder for "Join for Free" (anchored to final CTA / booking path).
- Decorative floating **glass member cards** (frosted `bg-card/70 backdrop-blur border` rounded pills) showing a founder avatar + name + "points/streak"-style stat, re-themed as community stats (e.g. "1,200+ founders", "Free forever"). Positioned absolutely on desktop, stacked/hidden on mobile.
- A **rotating circular badge** ("JOIN FOR FREE • JOIN FOR FREE •") built with SVG `textPath` + slow CSS/motion rotation, in accent orange.
- Two hand-drawn-style accent **arrows** (inline SVG, `stroke-accent` / `stroke-foreground`) pointing toward the CTA, hidden on small screens.

## Section 2 — What You Get

- Section label + headline "Everything you need to start using AI with clarity." + intro body.
- The 5 expectations as a `StaggerGroup` card grid with lucide icons:
  step-by-step AI guides (`BookOpen`), simple frameworks (`LayoutGrid`), implementation resources (`Wrench`), founder-friendly learning (`GraduationCap`), ongoing support (`Users`).
- Closing line: "No noise. No complex language. Just useful content that helps you move faster." in an inverted black emphasis strip.

## Section 3 — Final CTA

- Reuse the bordered rounded-card CTA styling with accent glow.
- Headline "Free today. Free forever. Built for founders who want to grow smarter." + body.
- Primary `CtaButton` "Join M's AI Circle".

## Technical details

- Edit only `src/routes/community.tsx` — drop the `PageHero` import/usage, keep the `SiteLayout` wrapper, keep/extend the existing `head()` meta (title, description, og:*, canonical) to match the new hero copy.
- Reuse `Reveal`, `StaggerGroup`, `StaggerItem`, `CtaButton`, and `lucide-react` icons. No `motion/react` dependency needed — the project already uses `framer-motion`, so the hero animation uses that (no new packages installed).
- Colors strictly via semantic tokens (`accent`, `foreground`, `muted-foreground`, `card`, `border`) — no hardcoded colors.
- Avatars: lightweight initial/letter circles or existing assets rather than external Unsplash URLs, to avoid network-image dependencies and keep SSR clean.
- Rotating badge animation uses a CSS keyframe / `framer-motion` rotate that respects reduced motion.

No new files, no dependencies, no backend — purely frontend/presentation work scoped to the Community page.