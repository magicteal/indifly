import Hero from "@/components/Hero";
import VenturesGrid from "@/components/VenturesGrid";
import BharatSection from "@/components/BharatSection"; // Import kiya

import SectorsSection from "@/components/SectorsSection";
import ContactFooter from "@/components/ContactFooter";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <VenturesGrid />
      <BharatSection />
      <SectorsSection />
      <ContactForm
        variant="contact"
        title="Contact Us"
        description="We are committed to processing the information in order to contact you and talk about your project."
      />
      <Footer />
      {/* <ContactFooter
        variant="contact"
        title="Contact Us"
        description="We are committed to processing the information in order to contact you and talk about your project."
      /> */}
    </main>
  );
}
