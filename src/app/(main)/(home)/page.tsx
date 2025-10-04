import BharatSection from "./BharatSection";
import Hero from "./Hero";
import ImpactOnBharat from "./ImpactOnBharat";
import SectorsSection from "./SectorsSection";
import VenturesGrid from "./VenturesGrid";
// import ContactFooter from "@/components/ContactFooter";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "./Footer";
import INDsights from "./INDsights";

export default function Home() {
  return (
    <main>
      <Hero />
      <VenturesGrid />
      <BharatSection />
      <SectorsSection />
      <ImpactOnBharat />
      <INDsights />
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
