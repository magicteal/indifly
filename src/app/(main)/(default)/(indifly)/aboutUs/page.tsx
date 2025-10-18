import { CompanyCollage } from "./CompanyCollage";
import { HeroSection } from "./HeroSection";
import { JourneyTimeline } from "./JourneyTimeline";
import { TeamSection } from "./TeamSection";

export default function AboutUsPage() {
  return (
    <main className="theme-orange reveal-section">
      <HeroSection />
      <JourneyTimeline />
      <TeamSection />
      <CompanyCollage />
    </main>
  );
}
