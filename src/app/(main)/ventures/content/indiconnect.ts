import { defineVenture, type VentureContent } from "./types";

const content: VentureContent = defineVenture({
  key: "indiconnect",
  hero: {
    tagline: "SME super app",
    description: "IndiConnect powers business financial infrastructure in Bharat — combining payments, banking, and digital trust tools into a single platform. With solutions for payments, banking services, BizStack, and e-signing via IndiSign, we make enterprise operations seamless, secure, and scalable.",
  },
  highlights: [
    { title: "Manage", description: "Accounts, invoicing, compliance in one place." },
    { title: "Grow", description: "Credit access and partner network for expansion." },
  ],
});

export default content;
