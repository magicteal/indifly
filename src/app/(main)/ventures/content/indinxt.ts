import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indinxt",
  hero: {
    tagline: "UPI for Bharat",
    description: "IndiNXT powers banks, fintechs, and enterprises with the transaction backbone they need to scale. From UPI switches to fraud management, IndiNXT combines reliability, security, and intelligence to keep Bharat — and the world — moving.",
  },
  highlights: [
    { title: "Scale", description: "Built for reliability and nationwide scale." },
    { title: "APIs", description: "Developer-first APIs for seamless integrations." },
  ],
});

export default content;
