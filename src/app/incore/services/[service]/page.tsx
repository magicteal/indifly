import { ContactForm } from "@/components/ContactForm";
import ApproachSection from "./ApproachSection";
import CoreOfferings from "./coreOfferings";
import HeroSection from "./Herosection";
import WhyItMatters from "./whyItMatters";

export default function Page() {
  return (
    <main className="min-h-[80vh] flex-col items-center justify-center overflow-x-clip bg-[#171717] py-16 sm:py-20 md:py-28 lg:py-36">
      <HeroSection />
      <ApproachSection />
      <WhyItMatters />
      <CoreOfferings />
      <div className="mt-36" />
      <ContactForm />
    </main>
  );
}
