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
    </main>
  );
}
