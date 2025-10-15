import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indikendra",
  hero: {
    tagline: "Digital last-mile",
    description: "IndiKendra transforms local shops into service centers, bringing banking, payments, and governance to every corner of Bharat. It empowers communities while creating new income streams for shopkeepers.",
  },
  cards: [
    {
      title: "Digital Banking",
      subtitle: "Banking at your doorstep",
      points: [
        "Cash transfers and withdrawals",
        "Bill payments and recharges",
        "Easy access to financial services",
      ],
    },
    {
      title: "Travel & Ticketing",
      subtitle: "Convenience close to home",
      points: [
        "Train, bus, and flight bookings",
        "Simple, assisted ticketing for everyone",
        "Trusted service through local shops",
      ],
    },
    {
      title: "Insurance Services",
      subtitle: "Protection made accessible",
      points: [
        "Health, vehicle, and life insurance",
        "Easy sign-up through retailers",
        "Affordable premiums, wider coverage",
      ],
    },
    {
      title: "eGovernance",
      subtitle: "Government services, simplified",
      points: [
        "Aadhaar, PAN, and utility services",
        "Assisted applications and verifications",
        "Building trust through local presence",
      ],
    },
  ],
});

export default content;
