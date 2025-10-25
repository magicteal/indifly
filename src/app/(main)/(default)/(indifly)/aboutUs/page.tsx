import { Gradient } from "@/components/Gradient";
import Bottom1 from "@public/companies/bg/bottom1.svg?flex";
import Middle1 from "@public/companies/bg/middle1.svg?flex";
import Top1 from "@public/companies/bg/top1.svg?flex";
import { CompanyCollage } from "./CompanyCollage";
import { HeroSection } from "./HeroSection";
import { JourneyTimeline } from "./JourneyTimeline";
import { TeamSection } from "./TeamSection";

export default function AboutUsPage() {
  return (
    <main className="theme-orange reveal-section">
      <HeroSection />
      <Gradient Cmp={Top1} className="-top-12">
        <JourneyTimeline />
      </Gradient>
      <Gradient Cmp={Middle1} className="bottom-33">
        <TeamSection />
        <Gradient Cmp={Bottom1}>
          <CompanyCollage />
        </Gradient>
      </Gradient>
    </main>
  );
}
