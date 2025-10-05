## indifly – AI coding agent guide

Purpose: Give an AI immediate, correct context to add/modify features safely in this Next.js monorepo-like site (main marketing + inCORE microsite + service vertical pages).

### Stack & Global Setup

- Next.js 15 App Router + React 19 + TypeScript + Tailwind v4 (PostCSS only). No `tailwind.config.*`; design tokens & color scales live in `src/app/globals.css` via CSS variables and `@theme inline` blocks.
- Root layout: `src/app/layout.tsx` sets Montserrat font, injects `<html class="dark">` (dark is default; explicitly set backgrounds for light surfaces).
- Alias paths: `@/*` → `src/*`, `@public/*` → `public/*` (see `tsconfig.json`). Use these rather than deep relative paths.

### Routing & Site Structure

- Main site grouped under `src/app/(main)`; landing page at `(home)/page.tsx` composes section components (e.g. `Hero`, `VenturesGrid`, `BharatSection`, `INDsights`). Keep page files lean—push logic into section components.
- Microsite `inCORE`: `src/app/incore` with its own `layout.tsx` plus `(home)` folder housing marketing sections (`CaseStudiesSection`, `ProcessJourneySection`, etc.).
- Dynamic service pages: `src/app/incore/services/[service]/` (service keys: `insurge`, `instack`, `involve`, `insure`). Each service page assembles: `Herosection`, `whyItMatters`, `coreOfferings`, `ApproachSection` using content hooks.
- Navigation auto-selects config via `getNavConfig(pathname)` (`src/app/components/navbar/navigation.ts`). Override only if a component explicitly passes custom nav items.

### Theming & Service Variants

- Use `useServiceTheme()` (`src/hooks/useServiceTheme.ts`) inside service route components to retrieve Tailwind token class names (e.g. `text-insurge`, gradients `from-insurge to-insurge`). Never hardcode service color hex values.
- Top gradient banner: `TopBanner` inspects pathname for a service keyword (instack / insurge / insure / involve) to swap gradients; otherwise uses `variant="incore"` or default.
- Buttons: variant names include core plus service-specific ones (`insurge`, `instack`, `involve`, `insure`) and their secondary variants (see `src/components/ui/button.tsx`). Pick the service-derived variant from the theme hook instead of guessing.

### Content System for Services

- Service textual/structured content centralized in `content/*.ts` under `[service]/content`. `index.ts` exports a resolver `getServiceContent` used by hook `useServiceContent()`; components consume structured objects, not raw strings sprinkled around.
- When adding a new service: (1) add its content file + register in `index.ts`; (2) extend `ServiceType` + theme entry in `useServiceTheme.ts`; (3) add gradient handling in `TopBanner`; (4) create assets under `public/inCore/` (mirroring existing naming patterns) if needed.

### Styling & Primitives

- No custom Tailwind config: rely on existing utility classes and tokens (e.g. `bg-primary`, `text-primary-foreground`, service-prefixed classes). If a needed semantic token is missing, add a CSS variable + utility mapping inside `globals.css` not a new config file.
- Core layout primitives: `Container` and `Section` (`src/components/` & `src/components/ui`). Favor them for consistent responsive widths and vertical rhythm. Example: `<Section id="case-studies" wrapperClassName="bg-[#001631]" containerProps={{ size: "7xl" }}>...</Section>`.
- Use `cn()` (`src/lib/utils.ts`) for conditional class merges; avoid manual array joins.

### Assets & SVG Handling

- SVG imports become React components by default (SVGR configured in `next.config.ts`). Append `?url` only when you must pass a file path to `<Image>` or CSS. E.g. `import Icon from "@public/inCore.svg"; <Icon />` vs `import mapUrl from "@public/indianMap.svg?url";`.
- Keep new service/microsite images under logical folders (`public/home`, `public/inCore/...`). Reuse existing naming patterns (camelCase base, no spaces).

### Scripts / Tooling

- Dev: `npm run dev` (Turbopack). Production: `npm run build` then `npm start`.
- Lint & format before committing: `npm run lint` and `npm run format` (auto organizes imports + Tailwind class sorting). Don’t reorder imports manually.

### Patterns & Conventions

- Keep page components minimal; encapsulate data-less presentation logic in colocated section files.
- Prefer hooks for cross-cutting context (theme & content) rather than prop-drilling.
- When extending theming or content, update all central registries first (theme map, content index) so downstream hooks stay pure.
- Avoid duplicating gradient logic—extend `TopBanner` conditional instead.
- Accessibility: `TopBanner` already sets `role="region"` + `aria-label`; mirror this pattern when adding similar global banners.

### Gotchas / Avoid

- Do NOT create `tailwind.config.js`—will break token expectation pipeline.
- Don’t inline hex colors for branded/service hues; use existing utility classes or add tokens.
- Don’t import SVG with `?url` unless required; doing so unnecessarily blocks tree-shaking of unused component markup.
- Avoid hardcoding navigation arrays inside components; rely on `getNavConfig()`.

### Quick Reference (additions or changes)

1. New service: update theme, content, gradients, navigation (if needed). 4 touchpoints only.
2. New section on a page: create a `PascalCaseSection.tsx` file and import into the page’s component list.
3. Need a variant button color: extend variants in `button.tsx` and align with tokens set in `globals.css`.

### When Unsure

Search for an existing pattern in `src/app/(main)/(home)` or `src/app/incore` and replicate structure; keep deltas minimal.

End of guide – ask for clarifications if a required pattern is missing rather than inventing new architecture.
