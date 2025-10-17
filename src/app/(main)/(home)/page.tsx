import BharatSection from "./BharatSection";
import Hero from "./Hero";
import ImpactOnBharat from "./ImpactOnBharat";
import SectorsSection from "./sectors/SectorsSection";
// import ContactFooter from "@/components/ContactFooter";
import { ContactForm } from "@/components/layout/ContactForm";
import { defaultServiceTheme } from "@/lib/serviceContext";
import { Footer } from "../../../components/layout/Footer";
import INDsights from "./INDsights";
import InCoreServices from "./inCoreServices";

export default function Home() {
  return (
    <main>
      <div className="reveal-section">
        <Hero />
      </div>
     
        <BharatSection />
     
      <div className="reveal-section" data-reveal-stagger>
        <SectorsSection />
      </div>
      <div className="reveal-section">
        <InCoreServices />
      </div>
      <div className="reveal-section">
        <ImpactOnBharat />
      </div>
      <div className="reveal-section">
        <INDsights />
      </div>
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
