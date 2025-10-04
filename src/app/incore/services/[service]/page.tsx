import { ContactForm } from "@/components/ContactForm";
import CaseStudiesSection from "../../components/CaseStudiesSection";
import Testimonials from "../../components/Testimonials";
import ApproachSection from "../ApproachSection";
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
      <CaseStudiesSection />
      <Testimonials />
      <ContactForm
        title="Get a Free Audit Done"
        description="We are committed to processing the information in order to contact you and talk about your project. "
      />
    </main>
  );
}
