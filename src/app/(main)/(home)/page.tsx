import Hero from "./Hero";
import VenturesGrid from "./VenturesGrid";
import BharatSection from "./BharatSection";

import SectorsSection from "./SectorsSection";
// import ContactFooter from "@/components/ContactFooter";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

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
