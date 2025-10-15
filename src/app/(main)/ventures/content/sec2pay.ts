import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "sec2pay",
  hero: {
    tagline: "Your brand. Our rails.",
    description: "Sec2Pay enables enterprises to launch their own branded fintech services. From prepaid cards and wallets to AePS and lending, it provides the white-label infrastructure to expand financial inclusion at scale.",
    ctaText: "Talk to us",
  },
  highlights: [
    { title: "Whitelabel", description: "Banking, payments, onboarding—your brand front and center." },
    { title: "Compliance", description: "Built with security and regulatory readiness in mind." },
  ],
});

export default content;
