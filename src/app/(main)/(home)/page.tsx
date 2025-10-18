import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import BharatSection from "./BharatSection";
import Hero from "./Hero";
import INDsights from "./INDsights";
import ImpactOnBharat from "./ImpactOnBharat";
import InCoreServices from "./inCoreServices";
import SectorsSection from "./sectors/SectorsSection";

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
      <div className="dark bg-secondary text-foreground">
        <ContactForm />
      </div>
      <div className="dark bg-gradient-to-b from-[#01295C] to-[#00142D] text-foreground">
        <Footer />
      </div>
    </main>
  );
}
