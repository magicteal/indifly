import indiconnect from "./indiconnect";
import indikendra from "./indikendra";
import indinxt from "./indinxt";
import indipe from "./indipe";
import indispeed from "./indispeed";
import sec2pay from "./sec2pay";
import type { VentureContent } from "./types";

export const ventureKeys = [
  "indipe",
  "sec2pay",
  "indiconnect",
  "indikendra",
  "indinxt",
  "indispeed",
] as const;
export type VentureKey = (typeof ventureKeys)[number];

const contents: Record<VentureKey, VentureContent> = {
  indipe,
  sec2pay,
  indiconnect,
  indikendra,
  indinxt,
  indispeed,
};

export function getVentureContent(key: VentureKey): VentureContent {
  return contents[key];
}

export function isVentureKey(v: string): v is VentureKey {
  return v in contents;
}
