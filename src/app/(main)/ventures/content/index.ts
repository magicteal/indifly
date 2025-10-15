import type { VentureContent, VentureKey } from "./types";

import indiconnect from "./indiconnect";
import indikendra from "./indikendra";
import indinxt from "./indinxt";
import indipe from "./indipe";
import indispeed from "./indispeed";
import sec2pay from "./sec2pay";

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

export function getAllVentureContents(): VentureContent[] {
  return Object.values(contents);
}
