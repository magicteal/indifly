import { ContactForm } from "@/app/(main)/(home)/ContactForm";
import CaseStudiesSection from "../component/CaseStudiesSection";
import Testimonials from "../component/Testimonials";
import CoreOfferings from "./coreOfferings";
import HeroSection from "./heroSection";
import WhyItMatters from "./whyItMatters";

export default function Page() {
  return (
    <div className="bg-[#171717]">
      <HeroSection />
      <WhyItMatters />
      <CoreOfferings />
      <CaseStudiesSection />
      <Testimonials />
      <ContactForm
        title="Get a Free Audit Done"
        description="We are committed to processing the information in order to contact you and talk about your project. "
      />
    </div>
  );
}
