import { VentureKey } from ".";

export type VentureContent = {
  key: VentureKey;
  hero: {
    tagline?: string;
    description: string;
    ctaText?: string;
  };
  highlights?: Array<{ title: string; description: string }>;
  features?: Array<{ title: string; points: string[] }>;
  cards?: Array<{ title: string; subtitle: string; points: string[] }>;
};
