import { ContactForm } from "@/app/components/ContactForm";
import ApproachSection from "./ApproachSection";
import CoreOfferings from "./coreOfferings";
import HeroSection from "./Herosection";
import WhyItMatters from "./whyItMatters";

export default function Page() {
  return (
    <main className="min-h-[80vh] flex-col items-center justify-center overflow-x-clip bg-[#171717] pt-12">
      <HeroSection />
      <ApproachSection />
      <WhyItMatters />
      <CoreOfferings />
      <ContactForm />
    </main>
  );
}
