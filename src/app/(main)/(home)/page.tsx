import BharatSection from "./BharatSection";
import Hero from "./Hero";
import ImpactOnBharat from "./ImpactOnBharat";
import SectorsSection from "./SectorsSection";
import VenturesGrid from "./VenturesGrid";
// import ContactFooter from "@/components/ContactFooter";
import { ContactForm } from "@/components/layout/ContactForm";
import { defaultServiceTheme } from "@/lib/serviceContext";
import { Footer } from "../../../components/layout/Footer";
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
      <div className="bg-secondary">
        <ContactForm theme={defaultServiceTheme} />
      </div>
      <div className="bg-gradient-to-b from-[#01295C] to-[#00142D]">
        <Footer theme={defaultServiceTheme} />
      </div>
      {/* <ContactFooter
        variant="contact"
        title="Contact Us"
        description="We are committed to processing the information in order to contact you and talk about your project."
      /> */}
    </main>
  );
}
