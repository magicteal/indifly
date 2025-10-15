import type { VentureKey, VentureContent } from "./types";

import indipe from "./indipe";
import sec2pay from "./sec2pay";
import indiconnect from "./indiconnect";
import indikendra from "./indikendra";
import indinxt from "./indinxt";
import indispeed from "./indispeed";

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
