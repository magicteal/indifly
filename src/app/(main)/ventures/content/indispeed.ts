import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indispeed",
  hero: {
    tagline: "ONDC logistics orchestration",
    description: "IndiSpeed is a logistics orchestration platform built for Bharat. Designed for D2C brands, SMEs, and enterprises, it integrates seamlessly with ONDC and helps businesses ship faster, smarter, and at scale.",
  },
  highlights: [
    { title: "Coverage", description: "Nationwide partner network and routing." },
    { title: "Efficiency", description: "Smart assignment, tracking, and cost controls." },
  ],
});

export default content;
