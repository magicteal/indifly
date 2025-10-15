import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { lightTheme } from "@/lib/serviceContext";
import GradientFrame from "../blog/gradient";
import { CompanyCollage } from "./CompanyCollage";
import { HeroSection } from "./HeroSection";
import { JourneyTimeline } from "./JourneyTimeline";
import { TeamSection } from "./TeamSection";

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection />
      <JourneyTimeline />
      <TeamSection />
      <CompanyCollage />
      <div className="relative">
        <GradientFrame variant="v1" className="opacity-40" />
        <ContactForm theme={lightTheme} />
      </div>
      <Footer theme={lightTheme} />
    </main>
  );
}
