import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indinxt",
  hero: {
    tagline: "UPI for Bharat",
    description: "IndiNXT powers banks, fintechs, and enterprises with the transaction backbone they need to scale. From UPI switches to fraud management, IndiNXT combines reliability, security, and intelligence to keep Bharat — and the world — moving.",
  },
  cards: [
    {
      title: "UPI Acquiring & Issuing Switch",
      subtitle: "Seamless UPI infrastructure at scale",
      points: [
        "Acquiring switch for high-volume payments",
        "Issuing switch for VPAs and handles",
        "Intelligent routing and resilient uptime",
      ],
    },
    {
      title: "Authentication & Risk Management",
      subtitle: "Security, built in",
      points: [
        "T-OTP solutions for RBI-compliant authentication",
        "Real-time fraud detection & anomaly alerts",
        "Risk scoring and compliance automation",
      ],
    },
    {
      title: "Merchant Management Platform",
      subtitle: "Simplify merchant operations",
      points: [
        "Onboarding with KYC/KYB and lifecycle tracking",
        "Monitoring dashboards with detailed reporting",
        "Scalable tools for enterprises & marketplaces",
      ],
    },
    {
      title: "Industries We Serve",
      subtitle: "Trusted across sectors",
      points: [
        "Banking & Financial Institutions",
        "Fintech Platforms",
        "E-commerce & Marketplaces",
        "Government, Telecom & Retail Merchants",
      ],
    },
  ],
});

export default content;
