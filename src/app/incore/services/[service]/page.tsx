import { ContactForm } from "@/app/components/ContactForm";
import ApproachSection from "./ApproachSection";
import CoreOfferings from "./coreOfferings";
import HeroSection from "./Herosection";
import WhyItMatters from "./whyItMatters";

export default function Page() {
  return (
    <div className="overflow-x-clip bg-[#171717]">
      <HeroSection />
      <ApproachSection />
      <WhyItMatters />
      <CoreOfferings />
      <ContactForm />
    </div>
  );
}
