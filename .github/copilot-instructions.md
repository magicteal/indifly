## indifly – AI coding agent guide

Purpose: Give an AI immediate, correct context to add/modify features safely in this Next.js monorepo-like site (main marketing + inCORE microsite + service vertical pages).

### Stack & Global Setup

- Next.js 15 App Router + React 19 + TypeScript + Tailwind v4 (PostCSS only). No `tailwind.config.*`; design tokens & color scales live in `src/app/globals.css` via CSS variables and `@theme inline` blocks.
- Root layout: `src/app/layout.tsx` sets Montserrat font, injects `<html class="dark">` (dark is default; explicitly set backgrounds for light surfaces).
- Alias paths: `@/*` → `src/*`, `@public/*` → `public/*` (see `tsconfig.json`). Use these rather than deep relative paths.

### Routing & Site Structure

- Main site grouped under `src/app/(main)`; landing page at `(home)/page.tsx` composes section components (e.g. `Hero`, `VenturesGrid`, `BharatSection`, `INDsights`). Keep page files lean—push logic into section components.
- Microsite `inCORE`: `src/app/incore` with its own `layout.tsx` plus `(home)` folder housing marketing sections (`CaseStudiesSection`, `ProcessJourneySection`, etc.). Footer is now page-level (not in the incore layout) to allow service-specific theming separately.
- Dynamic service pages: `src/app/incore/services/[service]/` (service keys: `insurge`, `instack`, `involve`, `insure`). Each service page is a SERVER COMPONENT that resolves its theme + content via `getServiceContext(service)` from `src/lib/serviceContext.ts` and passes slices (hero, approach, whyItMatters, coreOfferings) down as props.
- Navigation auto-selects config via `getNavConfig(pathname)` (`src/app/components/navbar/navigation.ts`). Override only if a component explicitly passes custom nav items.

### Theming & Service Variants

- Themes are defined centrally in `src/lib/serviceContext.ts` (exports: `defaultServiceTheme`, `incoreServiceTheme`, `getServiceTheme`, `getServiceContext`). Theme is resolved server-side for service pages (via `getServiceContext`) or imported directly for marketing pages, then passed to client components (`ContactForm`, `Footer`).
- Use the class strings from `ServiceTheme` (e.g. `text-insurge`, `from-insure`)—never inline hex for branded colors. If a new brand token is required, add a CSS variable + usage class in `globals.css`.
- `TopBanner` infers gradient variant from pathname for visual framing outside the service card contexts.
- Buttons: variant names include service-specific + secondary variants (see `src/components/ui/button.tsx`). Use `theme.buttonVariant` / `theme.buttonSecondaryVariant` rather than guessing.

### Content System for Services

- Service textual/structured content lives in `src/app/incore/services/[service]/content/`. `index.ts` exposes `getServiceContent(service)` consumed by server resolvers (no hook). `getServiceContext(service)` returns `{ service, theme, content }` for convenience in server page components.
- When adding a new service:
  1.  Create its content file + export in `content/index.ts`.
  2.  Add its theme entry to the `themes` map in `serviceContext.ts` and extend `ServiceType` / `ServiceKey`.
  3.  Add gradient handling (if needed) in any gradient maps (e.g. card gradients in `coreOfferings.tsx`, `TopBanner` path logic).
  4.  Place assets under `public/inCore/` following existing naming (e.g. `serviceNameCardGradient.png`).
  5.  (Optional) Add static params if pattern changes (currently `generateStaticParams` auto covers all keys).

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

- Keep page components minimal; compute data (theme + content) once at the server page boundary, then pass only the slices each section needs (`hero`, `approach`, etc.).
- Prefer pure functions + explicit prop passing for clarity and bundle reduction.
- When extending theming or content, update central registries (`serviceContext.ts` themes / types, `content/index.ts`).
- Avoid duplicating gradient logic—centralize service-specific gradients in a small map (as done in `coreOfferings.tsx`).
- Accessibility: `TopBanner` sets `role="region"` + `aria-label`; reuse that approach for any global decorative regions.

### Gotchas / Avoid

- Do NOT create `tailwind.config.js`—will break token expectation pipeline.
- Don’t inline hex colors for branded/service hues; use existing utility classes or add tokens.
- Don’t import SVG with `?url` unless required; doing so unnecessarily blocks tree-shaking of unused component markup.
- Avoid hardcoding navigation arrays inside components; rely on `getNavConfig()`.

### Quick Reference (additions or changes)

1. New service (5 touchpoints):
   - Add content file + export in `content/index.ts`.
   - Add theme entry + extend `ServiceType` / `ServiceKey` in `serviceContext.ts`.
   - Add any gradient mapping (e.g. `coreOfferings` gradient map, `TopBanner` condition if needed).
   - Add assets under `public/inCore/` (hero art, gradients, icons).
   - (If navigation differs) extend nav config.
2. New section: create `PascalCaseSection.tsx` and import into the page; accept only needed props (avoid over-fetching).
3. New button variant color: extend in `button.tsx` + add CSS variable tokens in `globals.css`.
4. Footer theming: pass an explicit `ServiceTheme` prop (page-level responsibility).

### When Unsure

Search for an existing pattern in `src/app/(main)/(home)` or `src/app/incore` and replicate structure; keep deltas minimal.

End of guide – ask for clarifications if a required pattern is missing rather than inventing new architecture.
