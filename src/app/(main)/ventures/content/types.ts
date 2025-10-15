// Keep this in sync with src/lib/ventureContext.ts, but avoid importing from it
// to prevent circular dependencies between content and theme context.
export type VentureKey =
  | "indipe"
  | "sec2pay"
  | "indiconnect"
  | "indikendra"
  | "indinxt"
  | "indispeed";

export type VentureContent = {
  key: VentureKey;
  hero: {
    tagline?: string;
    description: string;
    ctaText?: string;
  };
  highlights?: Array<{ title: string; description: string }>;
  features?: Array<{ title: string; points: string[] }>;
  // extend as we build pages
};

export function defineVenture(content: VentureContent) {
  return content;
}
