## indifly – AI agent quickstart

- Stack: Next.js 15 (App Router) + TypeScript + Tailwind v4 (PostCSS only). React 19. No `tailwind.config.*`.
- App root: `src/app/layout.tsx` loads Montserrat and `globals.css`. Dark theme forced via `<html class="dark">`.
- Route groups:
  - Main site: `src/app/(main)/(home)/page.tsx` composes sections like `Hero`, `VenturesGrid`, `BharatSection`.
  - inCORE microsite: `src/app/incore` with its own `layout.tsx`, `page.tsx`, and `services/page.tsx` (uses `heroSection.tsx`, `whyItMatters.tsx`, `coreOfferings.tsx`).
- Navigation: `Navbar` pulls items from `getNavConfig(pathname)` in `src/config/navigation.ts` unless `navItems` are provided.

Styling and primitives

- Tailwind v4 classes; tokens and colors live in `src/app/globals.css` via CSS variables and `@theme inline`.
- Use `cn()` from `src/lib/utils` to merge class names.
- UI primitives in `src/components/ui`: `Container`, `Section`, `Button` (variants: default | destructive | outline | secondary | insurge | ghost | link).
- Example:
  - `Section` usage: `<Section id="case-studies" wrapperClassName="bg-[#001631]" containerProps={{ size: "7xl" }}>...</Section>`
  - `Container` usage: `<Container size="2xl" className="mt-20">...</Container>`

Assets and aliases

- SVG: React components by default via SVGR; add `?url` to get a file URL (see `next.config.ts`, types in `svgr.d.ts`).
  - `import InCoreLogo from "@public/inCore.svg";` ⇒ `<InCoreLogo />`
  - `import mapUrl from "@public/indianMap.svg?url";` ⇒ `<Image src={mapUrl} ... />`
- TS path aliases (see `tsconfig.json`): `@/*` → `src/*`, `@public/*` → `public/*`.

Layout patterns

- `TopBanner` gradient variants: default vs `variant="incore"` (see `src/components/TopBanner.tsx`).
- Main layout `src/app/(main)/layout.tsx`: fixed `TopBanner`, centered desktop links in `Navbar`, mobile menu toggle.
- inCORE layout mirrors main but swaps logo and banner variant.

Scripts and linting

- `dev`: next dev --turbopack; `build`: next build; `start`: next start.
- `lint`: eslint (flat config extends Next + Prettier); `format`/`format:check`: Prettier 3 (organize-imports + tailwindcss plugins).

Gotchas

- Dark is the default theme; set explicit light backgrounds if needed.
- Don’t add Tailwind config; rely on tokens in `globals.css`.
- SVGs: use `?url` only when you need a URL; otherwise you’ll get a React component.

Where to look

- UI primitives: `src/components/ui/*`; utilities: `src/lib/utils.ts`.
- Navigation: `src/config/navigation.ts`.
- Composition patterns and gradients: `src/app/(main)/(home)` and `src/app/incore/*`.
