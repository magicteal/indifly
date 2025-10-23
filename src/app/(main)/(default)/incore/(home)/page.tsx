import DecorativeBannerSection from "@/components/DecorativeBannerSection";
import { Gradient } from "@/components/Gradient";
import IncoreHomeBottom from "@public/inCore/incoreboottom.svg?flex";
import IncoreHomeHero from "@public/inCore/incoreHeroGradient.svg?flex";
import IncoreHomeMiddleAlt from "@public/inCore/incoreMiddle2.svg?flex";
import IncoreHomeMiddle from "@public/inCore/incoreMiddlegrad.svg?flex";
import CaseStudiesSection from "./CaseStudiesSection";
import Hero from "./Hero";
import IncoreINDsightsSection from "./IncoreINDsightsSection";
import ProcessJourneySection from "./ProcessJourneySection";
import WealthSection from "./WealthSection";

export default function InCorePage() {
  return (
    <main className="theme-incore min-h-[80vh] flex-col items-center justify-center overflow-x-clip bg-background pt-16 text-foreground sm:pt-20 md:pt-28 lg:pt-36">
      <Gradient Cmp={IncoreHomeHero} className="top-0">
        <div className="reveal-section text-center">
          <Hero />
        </div>
      </Gradient>

      <Gradient Cmp={IncoreHomeMiddle}>
        <div className="reveal-section" data-reveal-stagger>
          <WealthSection />
          <DecorativeBannerSection />
        </div>
      </Gradient>

      <Gradient Cmp={IncoreHomeMiddleAlt}>
        <div className="reveal-section" data-reveal-stagger>
          <ProcessJourneySection />
          <CaseStudiesSection />
        </div>
      </Gradient>

      {/* Large blurred gradient frame leading into insights */}
      <Gradient Cmp={IncoreHomeBottom}>
        <section className="reveal-section">
          <IncoreINDsightsSection />
        </section>
      </Gradient>
    </main>
  );
}
