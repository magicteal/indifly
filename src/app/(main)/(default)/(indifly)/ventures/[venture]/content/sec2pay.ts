import { type VentureContent } from "./types";

const content: VentureContent = {
  key: "sec2pay",
  hero: {
    tagline: "Your brand. Our rails.",
    description:
      "Sec2Pay enables enterprises to launch their own branded fintech services. From prepaid cards and wallets to AePS and lending, it provides the white-label infrastructure to expand financial inclusion at scale.",
    ctaText: "Talk to us",
  },
  cards: [
    {
      title: "White-Label Solutions",
      subtitle: "Your brand, our backbone",
      points: [
        "Payments and wallets under your own name",
        "Customizable modules for different sectors",
        "Secure and scalable infrastructure",
      ],
    },
    {
      title: "Card Services",
      subtitle: "Empowering digital transactions",
      points: [
        "Prepaid, debit, and virtual cards",
        "Instant issuance and management tools",
        "Secure card controls and reporting",
      ],
    },
    {
      title: "AePS & Micro-ATM",
      subtitle: "Financial access, anywhere",
      points: [
        "Aadhaar-enabled payment services",
        "Micro-ATM deployment for cash-in/cash-out",
        "Expanding reach in underserved regions",
      ],
    },
    {
      title: "Credit & Lending",
      subtitle: "Enable financial growth",
      points: [
        "Lending modules integrated with credit scoring",
        "EMI and repayment tracking tools",
        "Secure compliance for NBFCs and enterprises",
      ],
    },
  ],
};

export default content;
