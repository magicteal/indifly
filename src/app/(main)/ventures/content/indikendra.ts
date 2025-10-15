import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indikendra",
  hero: {
    tagline: "Digital last-mile",
    description: "IndiKendra transforms local shops into service centers, bringing banking, payments, and governance to every corner of Bharat. It empowers communities while creating new income streams for shopkeepers.",
  },
  highlights: [
    { title: "Network", description: "Expanding access with on-ground agents and hubs." },
    { title: "Services", description: "From eKYC to bill pay—enablement for every citizen." },
  ],
});

export default content;
