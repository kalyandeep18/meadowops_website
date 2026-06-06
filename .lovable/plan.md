# Audit Page Build Plan

Replace the placeholder `PageHero` in `src/routes/audit.tsx` with a full, brand-consistent page built from the supplied copy. It will match the home page's design language: Space Grotesk display font, DM Sans body, Star White background, black inverted blocks, vivid orange (`accent`) highlights, rounded-3xl cards, and the existing `Reveal`/`StaggerGroup`/`StaggerItem` scroll animations.

## What gets built

Eight sections, each as a small component inside `audit.tsx`, reusing patterns already proven on the home page (no new dependencies):

```text
1. Hero        — headline, subheadline, two CTAs (Book My Audit / See What We Find)
2. The Problem — "stuck because" list + the "fix it all at once" warning (inverted black block)
3. What the Audit Does — the core question + 6-point "what we look at" grid
4. What They Get — outcome list ("after the audit you will know…")
5. Why This Matters — failure-reasons block (inverted), starting-with-tool-not-problem
6. Who This Is For — 5-point audience checklist grid
7. Why MeadowOps Audit — generic-consultant contrast + 4 outcomes
8. CTA Section — "Stop guessing", Book Your Audit button + support line
```

## Design details

- **Hero**: word-by-word animated headline (same technique as `Hero.tsx`), ambient accent glow, primary `CtaButton` ("Book My Audit") + ghost `CtaButton` ("See What We Find" → scrolls/links to the audit-details section). Keeps the same top padding rhythm as other heroes.
- **Section labels**: reuse the `SectionLabel` pattern (orange uppercase tag with a short rule).
- **Lists/grids**: use `StaggerGroup` + `StaggerItem` cards with lucide icons (e.g. `Hand`, `Repeat`, `Unplug`, `TrendingUp`, `AlertTriangle`, `Clock`, `Target`, `CheckCircle2`, `XCircle`, `Search`, `Sparkles`). Check-style lists for "what they get" and "who this is for".
- **Inverted blocks**: Sections 2 (warning) and 5 use the black `bg-foreground text-background` treatment with a blurred accent glow, matching `BigBadSection`/`WhySection`.
- **Final CTA**: reuse the `FinalCtaSection` card styling (rounded-[2rem] bordered card, accent glow) with "Book Your Audit" and the support line.
- All colors via semantic tokens only (`accent`, `foreground`, `muted-foreground`, `card`, `border`) — no hardcoded colors.
- Respects reduced-motion through the existing `Reveal` components.

## SEO / head

Keep the existing `head()` meta in `audit.tsx` (title, description, og tags, canonical) — it already fits this page; minor copy tightening to match the new hero.

## Files changed

- `src/routes/audit.tsx` — replace placeholder with the full 8-section page.

No new files, no dependencies, no backend. Purely frontend/presentation work.