# About Page Redesign

Replace the placeholder `PageHero` in `src/routes/about.tsx` with a full, brand-consistent page built from the supplied copy. To give this page a **different look** from Community (giant stacked words + floating cards) and Products (toggle hub), About will use an **editorial, numbered-section** layout: a split asymmetric hero, then numbered manifesto-style sections that alternate between light canvas and inverted black blocks.

All work stays in `src/routes/about.tsx` (frontend/presentation only). Colours strictly via semantic tokens (`accent`, `foreground`, `muted-foreground`, `card`, `border`, `background`). Text uses the existing DM Sans display/sans tokens. Reuse `SiteLayout`, `Reveal`, `StaggerGroup`, `StaggerItem`, `CtaButton`, and `lucide-react` — no new files, packages, or backend.

## Page structure

```text
1. Hero            — eyebrow pill, asymmetric split: large headline left,
                     subheadline + "Book an Audit" CTA; subtle grid + glow
2. Who We Are      — numbered "01", "Not an agency. Not generic consulting."
                     statement + supporting paragraphs
3. What We Believe — numbered "02", inverted black block: "AI should create
                     clarity, not confusion." + the 4 needs as a checklist
4. What Makes Us   — numbered "03", "Built around outcomes." + 4 differentiator
   Different          cards (StaggerGroup, lucide icons)
5. Who We Serve    — numbered "04", "Built for growing businesses..." + 3
                     audience cards (SMBs, funded startups, growth-stage)
6. Mission / CTA   — "Our mission is simple." statement + "Book an Audit" CTA
```

## Section details

### 1 — Hero
- Eyebrow pill ("About MeadowOps", pulsing accent dot) matching other heroes.
- Asymmetric two-column on desktop: left column the H1 "MeadowOps helps businesses use AI the right way." (word-by-word framer-motion entrance, "the right way" in accent); right column the subheadline paragraph + `CtaButton` "Book an Audit".
- Background grid + ambient orange glow consistent with Community/Products heroes.

### 2 — Who We Are
- Big "01" index marker in accent, section label "Who We Are".
- Bold statement "Not an agency. Not generic consulting. MeadowOps is different by design." then the two supporting paragraphs as muted body copy.

### 3 — What We Believe
- Inverted `bg-foreground text-background` block for contrast/rhythm.
- "02" marker, headline "AI should create clarity, not confusion.", intro line, then the four needs (a clear starting point / the right use case / the right system / a path that works inside their business) as an accent-checkmark list. Closing paragraph on reducing wasted budget and failed tools.

### 4 — What Makes Us Different
- "03" marker, headline "Built around outcomes.".
- Four differentiator cards (`StaggerGroup` / `StaggerItem`) with lucide icons: defined set of products (`Package`), structured methodology (`Workflow`), clear audit→build→activation process (`Route`), focus on business impact (`Target`). Closing emphasis line.

### 5 — Who We Serve
- "04" marker, headline "Built for growing businesses that want to scale smarter.".
- Three audience cards: SMBs, funded startups, growth-stage startups (lucide icons). Closing line about stopping manual processes.

### 6 — Mission / Final CTA
- Bordered rounded card with accent glow (same family as other final CTAs).
- "Our mission is simple." + mission statement + `CtaButton` "Book an Audit" → `SITE.bookingPath`.

## Technical details
- Edit only `src/routes/about.tsx`: drop the `PageHero` import/usage, keep `SiteLayout`, and update `head()` meta (title, description, og:title/description/url, canonical) to match the new About hero copy.
- Animations via `framer-motion` (already installed) respecting `useReducedMotion`; reuse `Reveal`/`StaggerGroup`/`StaggerItem`.
- No hardcoded colours, no new dependencies, no schema/backend changes.
