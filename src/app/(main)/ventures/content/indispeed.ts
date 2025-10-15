import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indispeed",
  hero: {
    tagline: "ONDC logistics orchestration",
    description: "IndiSpeed is a logistics orchestration platform built for Bharat. Designed for D2C brands, SMEs, and enterprises, it integrates seamlessly with ONDC and helps businesses ship faster, smarter, and at scale.",
  },
  cards: [
    {
      title: "Smart Integrations",
      subtitle: "Plug in, start shipping",
      points: [
        "ONDC-ready APIs and plugins",
        "Compatible with multiple sales channels",
        "Quick onboarding for sellers",
      ],
    },
    {
      title: "Bulk Dispatch",
      subtitle: "Enterprise-grade logistics",
      points: [
        "Manage thousands of orders from one dashboard",
        "Schedule, track, and optimize shipments",
        "Simplify dispatch for growing businesses",
      ],
    },
    {
      title: "Delivery Network",
      subtitle: "Coverage that scales with you",
      points: [
        "Intercity, intracity, and hyperlocal delivery",
        "Real-time tracking for customers",
        "SLA-backed services",
      ],
    },
    {
      title: "Transparent Pricing",
      subtitle: "No hidden surprises",
      points: [
        "Clear, upfront shipping rates",
        "Cost optimization across carriers",
        "Unified billing system",
      ],
    },
  ],
});

export default content;
