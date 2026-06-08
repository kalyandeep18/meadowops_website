# Products & Services Page

Replace the placeholder `PageHero` in `src/routes/products.tsx` with a full, brand-consistent page built from the supplied copy. It matches the existing design language (Space Grotesk display / DM Sans body, Star White canvas, black inverted blocks, vivid orange accent, rounded cards, `Reveal`/`StaggerGroup` scroll animations) while introducing a distinctive centerpiece: two large interactive **Products** and **Services** toggles that expand to reveal their offerings.

## Page structure

```text
1. Hero            — headline, subheadline, two CTAs (Book an Audit / Explore Our Solutions)
2. The Big Idea    — "wrong starting point" narrative + the 5 unknowns + closing line
3. Solutions Hub   — THE centerpiece: two big toggles
                       ▸ PRODUCTS  → expands to: FYAIM card
                       ▸ SERVICES  → expands to: AI Clarity Audit + AI System Build cards
4. How It Works    — 3-step path (Audit → Build → Activate)
5. Positioning     — "not a menu of random services" statement block
6. Final CTA       — "Ready to choose the right AI move?" + two buttons
```

## The toggle centerpiece (key requirement)

Section 3 is the focus. Two large, full-width toggle headers ("Products" and "Services"), each with a count badge, short descriptor, and an animated chevron. Clicking one expands a panel below it revealing the relevant offering cards. Behavior:

- Built with `framer-motion` `AnimatePresence` + height/opacity animation for a smooth, premium expand/collapse (richer than the base shadcn accordion, and consistent with the rest of the page's motion).
- Default state: **Products open** so the page never looks empty; both can be toggled independently (multi-open allowed).
- Each toggle header uses the brand's inverted-on-hover / accent treatment so it reads as a deliberate, designed control.

**Products panel — FYAIM ("Find Your AI Model")**
- Tagline: "For founders confused about which AI model to use."
- Intro about models all claiming to do everything.
- "What it helps you do" list (choose best model, compare by use case, token sizes, what each is good at, avoid wrong choices).
- "Why it matters" line + CTA "Find the Right Model".

**Services panel — two service cards**
- *The AI Clarity Audit* — 60-min diagnostic; "What you get" (AI Opportunity Report: current state, 3 ranked opportunities, time savings, cost savings, investment range); "Why you need it"; CTA "Book the AI Clarity Audit".
- *The AI System Build* — design/build/test/activate + team training; "What you receive" (live system, documentation, training, 30-day support); important note that Phase 2 follows Phase 1; CTA "Start with the Audit".

## Other sections

- **Hero**: word-by-word animated headline ("Choose the right AI path. Build the right AI system."), subheadline, primary `CtaButton` ("Book an Audit") + ghost CtaButton ("Explore Our Solutions" → anchors to the Solutions Hub). Ambient accent glow, matching hero padding rhythm.
- **The Big Idea**: large statement headline, the 5 "without knowing" unknowns as a `StaggerGroup` grid, then the "How do we build it properly?" turn and the MeadowOps closing line. Likely one inverted black block for emphasis.
- **How It Works**: 3 numbered step cards (Audit / Build / Activate) with lucide icons, reinforcing the "audited, built, activated" model.
- **Positioning**: centered editorial statement ("This is not a menu of random services… not a generic agency").
- **Final CTA**: reuse the bordered rounded-card CTA styling with accent glow; primary "Book the AI Clarity Audit" + secondary "Explore FYAIM" (anchors back to Products).

## Technical details

- File: `src/routes/products.tsx` — replace `PageHero` usage with the full page; keep `SiteLayout` wrapper.
- Reuse `Reveal`, `StaggerGroup`, `StaggerItem`, `CtaButton`, and lucide-react icons (e.g. `Cpu`, `Search`, `Wrench`, `Workflow`, `ClipboardCheck`, `Rocket`, `CheckCircle2`, `ChevronDown`, `Sparkles`, `Layers`).
- Toggle state via local `useState` (which sections are open); `AnimatePresence` for expand/collapse; respect `useReducedMotion`.
- Colors strictly via semantic tokens (`accent`, `foreground`, `muted-foreground`, `card`, `border`) — no hardcoded colors.
- CTAs point to `SITE.bookingPath` (`/audit`); secondary CTAs use in-page anchors (`#solutions`, `#products`).
- Update `head()` meta (title, description, og tags, canonical) to match the new hero copy.

No new files, no dependencies, no backend — purely frontend/presentation work.