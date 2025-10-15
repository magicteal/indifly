import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indipe",
  hero: {
    tagline: "Wealth creation for everyone",
    description:
      "IndiPe is a digital-first wealth and payments platform designed for Bharat. With two apps — one for consumers and one for partners — IndiPe makes investing, transacting, and earning effortless. From mutual funds and digital gold to UPI services, it brings the power of financial growth to every hand.",
  },
  cards: [
    {
      title: "Mutual Funds",
      subtitle: "Invest smarter, the easy way",
      points: [
        "Start SIPs, SWPs, STPs or lumpsum in minutes",
        "Explore curated schemes across categories",
        "Track performance with real-time portfolio dashboards",
      ],
    },
    {
      title: "Digital Gold",
      subtitle: "Affordable, secure savings",
      points: [
        "Buy and sell 24K digital gold instantly, starting ₹10",
        "Bank-grade, insured storage vaults",
        "Transparent pricing directly linked to market rates",
      ],
    },
    {
      title: "UPI Payments",
      subtitle: "Fast, safe, and seamless",
      points: [
        "Instant and secure UPI transfers",
        "Pay bills and recharge in seconds",
        "Simple interface for everyday transactions",
      ],
    },
    {
      title: "Partner Program",
      subtitle: "Your network, your income",
      points: [
        "Become a distributor for mutual funds & digital gold",
        "Earn attractive commissions on every transaction",
        "Access client dashboards, reports & engagement tools",
        "Build a sustainable income stream with ease",
      ],
    },
  ],
});

export default content;
