import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indipe",
  hero: {
    tagline: "Wealth creation for everyone",
    description: "IndiPe is a digital-first wealth and payments platform designed for Bharat. With two apps — one for consumers and one for partners — IndiPe makes investing, transacting, and earning effortless. From mutual funds and digital gold to UPI services, it brings the power of financial growth to every hand.",
    
  },
  highlights: [
    { title: "Payments", description: "UPI, cards, and more with a unified experience." },
    { title: "Investments", description: "Goal-based investing simplified for Bharat." },
  ],
});

export default content;
