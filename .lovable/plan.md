# MeadowOps Website — Homepage Build Plan

A fresh, conversion-focused, story-driven site that positions the client as the hero and MeadowOps as the mentor. Built around your brand colors, logo, and the StoryBrand-style copy you provided. We start with the home page (header, footer, all 8 sections), and scaffold the other pages as routes for later.

## Design System (the foundation)

**Colors (brand tokens in `src/styles.css`, oklch):**
- Star White `#EFEFE8` — main background / canvas
- Black `#000000` — primary text
- Grey `#737373` — subtext / muted
- Vivid Orange `#FF6320` — buttons, CTAs, highlighted numbers/keywords

**Typography:** Professional sans-serif pairing — a bold geometric grotesk for headlines (large, confident, tight tracking) + a clean neutral sans for body. Loaded via the project font setup. No serif, no generic AI defaults.

**Motion (level 4 — rich but tasteful):** scroll-triggered reveals, staggered text/line animations, an animated hero graphic, sticky/scroll-progress moments in the story sections, magnetic/hover CTA states, subtle parallax. Built with Framer Motion. Respects `prefers-reduced-motion`.

**Visual language:** Mixed imagery — generated abstract "AI systems" graphics (flowing nodes, signal lines, warm-orange gradients on star-white) in the hero and key moments; minimal/typographic treatment elsewhere. Distinctive cards with soft borders, generous negative space, off-grid asymmetry so it doesn't look templated.

**Logo:** Your `without_background.png` "M" mark registered as a project asset, used in header and footer.

## Site Structure (routes)

```text
/            Home        (built now — full storytelling page)
/audit       Audit       (lead magnet — scaffolded, built next)
/products    Products & Services (scaffolded)
/about       About Us    (scaffolded)
/community   Community    (scaffolded)
/contact     Contact Us   (scaffolded)
```

Each gets its own route file with unique SEO `head()` (title, description, og tags). Non-home pages start as clean placeholder shells with header/footer so navigation works; we build them out in following turns.

## Homepage Sections (using your copy verbatim)

1. **Sticky Header** — logo, nav (Home, Audit, Products & Services, About, Community, Contact), "Book an Audit" CTA. Transparent → solid on scroll.
2. **Hero** — headline "Stop wasting time on manual work…", subheadline, primary CTA **Book an Audit** + secondary **See What We Build**, animated abstract systems graphic.
3. **The Story** — scroll-driven narrative ("Your business is growing…") with progressive reveal building tension toward "That is the point where MeadowOps steps in."
4. **The Big Bad** — the real problem list (too much manual work, wasted hours, disconnected tools, wasted money, confusion) styled as an impactful pain block.
5. **What Changes After MeadowOps** — the transformation, with the "manual chaos → smart systems" before/after pairs animated in.
6. **What MeadowOps Does** — Audit / Build / Activate as three distinct cards + methodology note.
7. **Who It Is For** — SMBs, funded startups, growth-stage startups.
8. **Why MeadowOps** — differentiation block, "10x operations" emphasized in orange.
9. **Final CTA** — "Ready to stop running your business the hard way?" + **Book Your Audit** button + sub-line "Start with clarity. Build with purpose. Scale with AI."
10. **Footer** — logo, tagline, nav links, contact, social placeholders, copyright.

Numbers and key conversion words highlighted in Vivid Orange throughout.

## CTA behavior
Per your choice, "Book an Audit" / "Book Your Audit" buttons are visually complete and link to the `/audit` route for now (placeholder destination). We wire up the real scheduler or backend form in a later step when you decide.

## Build order this turn
1. Register logo asset + define color/type tokens and motion utilities in the design system.
2. Build reusable Header + Footer.
3. Generate hero + accent abstract graphics (brand colors).
4. Build all homepage sections with the provided copy and motion.
5. Scaffold the 5 other routes with header/footer + SEO so nav works.
6. Verify build, check the preview visually, and refine for the "designed by a pro, not AI" feel.

## Technical notes
- TanStack Start file-based routes under `src/routes/`; per-route `head()` for SEO; semantic design tokens only (no hardcoded colors in components).
- Framer Motion for animation; reduced-motion fallback.
- No backend enabled yet (CTA decision deferred); Lovable Cloud added later only when we build the audit form.

After you approve, I'll build the home page first, then we move page-by-page through Audit, Products & Services, About, Community, and Contact.