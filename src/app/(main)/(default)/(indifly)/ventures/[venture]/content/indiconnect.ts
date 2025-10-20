import { type VentureContent } from "./types";

const content: VentureContent = {
  key: "indiconnect",
  hero: {
    tagline: "SME super app",
    description:
      "IndiConnect powers business financial infrastructure in Bharat — combining payments, banking, and digital trust tools into a single platform. With solutions for payments, banking services, BizStack, and e-signing via IndiSign, we make enterprise operations seamless, secure, and scalable.",
  },
  cards: [
    {
      title: "Payment Solutions",
      subtitle: "All payments, one platform",
      points: [
        "Accept UPI, cards, wallets & netbanking",
        "Easy integration for merchants & cooperatives",
        "Bulk payouts, vendor disbursements, auto reconciliation",
      ],
    },
    {
      title: "Banking Services",
      subtitle: "Embedded banking for enterprises",
      points: [
        "Virtual accounts & settlement accounts",
        "Lending & credit modules for businesses",
        "Custom banking flows (escrow, merchant credit)",
      ],
    },
    {
      title: "BizStack",
      subtitle: "Your business engine layer",
      points: [
        "Modular APIs & microservices to build fintech products",
        "Workflow orchestration, dashboards, permissions",
        "Analytics, reporting, usage insights in real time",
      ],
    },
    {
      title: "IndiSign (eSign & Contracts)",
      subtitle: "Trusted digital signing for every document",
      points: [
        "Seamless eSign, stamping & contract automation",
        "RBI-compliant, fraud-proof, and KYC/KYB integrated",
        "Embedded with BizStack workflows for secure contract flows",
      ],
    },
  ],
};

export default content;
