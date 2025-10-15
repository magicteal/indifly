type Sector = {
  name: string;
  focusArea: string;
  description: [string, string];
  bulletPoints: string[];
  actions: "Install App" | "Partner with Us";
};

type SectorCategory = {
  title: string;
  sectors: Sector[];
};

export const ourSectors: SectorCategory[] = [
  {
    title: "Payments",
    sectors: [
      {
        name: "Indipe",
        focusArea: "Wealth Management",
        description: [
          "Seamless wealth creation and digital payments for all.",
          "Empowering individuals and partners with secure, user-friendly financial tools. From UPI transactions to personalized wealth management, we make financial growth accessible to everyone.",
        ],
        bulletPoints: [
          "User-friendly mutual fund investments",
          "Secure UPI transactions",
          "Seamless digital gold investments",
          "Advanced portfolio tracking tools",
          "Partner program for mutual fund distribution",
        ],
        actions: "Install App",
      },
      {
        name: "Indiconnect",
        focusArea: "B2B Payments",
        description: [
          "One-stop platform for payments, banking, and compliance — designed for SMEs and co-operatives.",
          "Indiconnect unifies essential financial services into one seamless stack.",
        ],
        bulletPoints: [
          "UPI, Cards, Wallets, Netbanking",
          "Virtual accounts & payouts",
          "Automated reconciliation",
          "KYC, KYB & credit rating tools",
          "Tailored for businesses & co-operatives",
        ],
        actions: "Install App",
      },
      {
        name: "IndiNXT",
        focusArea: "UPI Infrastructure",
        description: [
          "UPI infrastructure built for Bharat, ready for the world.",
          "IndiNXT powers banks, fintechs, and enterprises with secure, scalable, and intelligent payment switching solutions.",
        ],
        bulletPoints: [
          "UPI Acquiring & Issuing Switch",
          "T-OTP Solutions",
          "Fraud & risk management",
          "Merchant management platform",
          "Intelligent routing & high availability",
        ],
        actions: "Partner with Us",
      },
    ],
  },
  {
    title: "Financial Services",
    sectors: [
      {
        name: "Sec2Pay",
        focusArea: "Whitelabel Fintech Infrastructure",
        description: [
          "Sec2Pay empowers institutions to launch fintech services under their own brand — from prepaid cards to payments, lending, and more.",
          "A compliant, modular platform to scale financial inclusion.",
        ],
        bulletPoints: [
          "White-label payment solutions",
          "Prepaid cards & wallets",
          "Micro-ATM & AePS",
          "Lending & credit enablement",
          "Enterprise-grade compliance & security",
        ],
        actions: "Partner with Us",
      },
      {
        name: "Indikendra",
        focusArea: "Last mile digital banking",
        description: [
          "IndiKendra bridges financial access by offering last-mile digital and assisted services, ensuring inclusion across towns and villages.",
          "We bring comprehensive financial and eGovernance services to every corner.",
        ],
        bulletPoints: [
          "Banking & cash transfers in your shop",
          "Utility & bill payments made simple",
          "Train, bus & flight bookings at your doorstep",
          "Insurance services (health, vehicle, life)",
          "eGovernance support: Aadhaar, PAN, other government services",
        ],
        actions: "Install App",
      },
    ],
  },
  {
    title: "ONDC Logistics",
    sectors: [
      {
        name: "IndiSpeed",
        focusArea: "Smarter Logistics for Bharat",
        description: [
          "ONDC-powered courier and delivery orchestration platform.",
          "IndiSpeed enables D2C brands, enterprises, and sellers to ship faster, smarter, and at scale.",
        ],
        bulletPoints: [
          "API-first logistics integration",
          "Bulk dispatch via enterprise dashboard",
          "ONDC-ready multi-channel plugins",
          "Intercity & hyperlocal delivery",
          "Transparent pricing & SLA tracking",
        ],
        actions: "Partner with Us",
      },
    ],
  },
];
