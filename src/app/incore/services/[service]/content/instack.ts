import type { ServiceContent } from "./types";

export const instackContent: ServiceContent = {
  hero1: {
    text: ["STACK", "Integrated expertise for", "startup success"],
    button: "Book a Consultation Call",
  },
  ourApproach: {
    description: [
      "We build with the founders as co-creators, not as service vendors. Our approach is collaborative, integrated, and focused on long-term success. We don't just provide services; we become a part of your journey.",
      "Our team becomes an extension of yours, working hand-in-hand to achieve your vision.",
    ],
    steps: [
      {
        title: "Collaborative",
        description:
          "We build with the founders as co-creators, not as service vendors",
      },
      {
        title: "Integrated",
        description:
          "Our approach is collaborative, integrated, and focused on long-term success.",
      },
      {
        title: "Committed",
        description:
          "We don't just provide services; we become a part of your journey.",
      },
    ],
  },
  whyItMatters: {
    description:
      "Startups face unique challenges that require specialized solutions. From limited resources to high competition, the hurdles are many. Our services are designed to address these specific challenges, helping startups navigate their path to success.",
    challenges: [
      {
        title: "Limited Resources",
        description:
          "Limited capital to sustain operations, hire talent, or scale.",
      },
      {
        title: "High Competition",
        description:
          "Intense competition from other startups and established players.",
      },
      {
        title: "Market Fit",
        description: "Difficulty in finding and validating product-market fit.",
      },
    ],
    tagline: "Tailored solutions for startup challenges.",
  },
  coreOfferings: {
    offerings: [
      {
        name: "MVP Development",
        description:
          "Rapid prototyping and development to validate your product idea quickly.",
      },
      { name: "Technical Architecture", description: "" },
      { name: "Cloud Infrastructure Setup", description: "" },
      { name: "API Development & Integration", description: "" },
      { name: "Mobile App Development", description: "" },
      { name: "DevOps & CI/CD", description: "" },
      { name: "Technical Consulting", description: "" },
    ],
    tagline: "All under one roof, tailored for startups.",
  },
};
