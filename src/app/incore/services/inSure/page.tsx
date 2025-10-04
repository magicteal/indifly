import { ContactForm } from "@/app/(main)/(home)/ContactForm";
import CaseStudiesSection from "../../component/CaseStudiesSection";
import Testimonials from "../../component/Testimonials";
import CoreOfferings from "../coreOfferings";
import HeroSection from "../Herosection";
import WhyItMatters from "../whyItMatters";

export default function Page() {
  return (
    <main className="bg-[#171717] min-h-[80vh] flex-col items-center justify-center overflow-x-clip  py-16 sm:py-20 md:py-28 lg:py-36">
      <HeroSection />
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
