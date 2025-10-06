import type { ServiceContent } from "./types";

export const instackContent: ServiceContent = {
  hero1: {
    text: ["STACK", "Technology that scales", "as fast as you do"],
    button: "Book a Consultation Call",
  },
  ourApproach: {
    description: ["Technology built to scale with you.", ""],
    steps: [
      {
        title: "Architect",
        description: "Map the right foundation for product and scale.",
      },
      {
        title: "Engineer",
        description: "Build secure, resilient, and future‑ready systems.",
      },
      {
        title: "Accelerate",
        description: "Deploy, optimize, and grow without friction.",
      },
    ],
  },
  whyItMatters: {
    description:
      "Startups don’t fail because of lack of ideas. They fail because:",
    challenges: [
      {
        title: "Fragile tech foundations",
        description: "Systems crash when scale begins.",
      },
      {
        title: "Rushed MVPs",
        description: "Security and reliability are compromised from day one.",
      },
      {
        title: "Broken integrations",
        description: "Launches get delayed and disrupted by brittle linkages.",
      },
      {
        title: "Weak architecture",
        description: "Cloud + infra costs spiral with every new feature.",
      },
      {
        title: "Mounting tech debt",
        description: "Future growth paths get permanently blocked.",
      },
    ],
    tagline: "inSTACK solves all of this.",
  },
  coreOfferings: {
    offerings: [
      {
        name: "Custom Applications",
        description:
          "Enterprise-grade web and mobile apps (iOS, Android, Flutter, React Native) tailored to your business.",
      },
      {
        name: "API & Integrations",
        description:
          "Seamless connections with third-party platforms and custom APIs to keep systems in sync.",
      },
      {
        name: "Cloud & DevOps",
        description:
          "Cloud-native architecture (AWS, Azure, GCP) with Docker, Kubernetes, and microservices for cost-optimized scaling.",
      },
      {
        name: "Secure & Scalable Software",
        description:
          "Built with OWASP standards, CI/CD pipelines, and test-driven development for reliability and security.",
      },
      {
        name: "Industry-Specific Expertise",
        description:
          "Fintech wallets, UPI solutions, ONDC integrations, core banking systems, and compliance-driven platforms.",
      },
      {
        name: "Agile Delivery",
        description:
          "Continuous improvement through DevSecOps practices and real-time CI/CD for faster, safer releases.",
      },
    ],
    tagline: "Strong products are built on stronger stacks.",
  },
};
