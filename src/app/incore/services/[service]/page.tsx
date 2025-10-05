import { ContactForm } from "@/app/components/ContactForm";
import { Footer } from "@/app/components/Footer";
import GradientFrame from "@/components/GradientFrame";
import {
  allServiceParams,
  getServiceContext,
  isServiceKey,
  type ServiceKey,
} from "@/lib/serviceContext";
import { notFound } from "next/navigation";
import ApproachSection from "./ApproachSection";
import CoreOfferings from "./coreOfferings";
import HeroSection from "./Herosection";
import WhyItMatters from "./whyItMatters";

// Enable full static generation of all service pages
export function generateStaticParams() {
  return allServiceParams();
}

// Server component: resolves theme + content once and passes only needed slices
export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  if (!isServiceKey(service)) {
    notFound();
  }
  const ctx = getServiceContext(service as ServiceKey);

  return (
    <div className="bg-[#171717]">
      <GradientFrame preset={ctx.service}>
        {/* Hero needs hero1 slice & theme */}
        <HeroSection
          theme={ctx.theme}
          hero={ctx.content.hero1}
          service={ctx.service}
        />

        {/* Approach needs approach slice & theme */}
        <ApproachSection
          theme={ctx.theme}
          approach={ctx.content.ourApproach}
          service={ctx.service}
        />

        {/* WhyItMatters slice */}
        <WhyItMatters
          theme={ctx.theme}
          whyItMatters={ctx.content.whyItMatters}
          service={ctx.service}
        />

        {/* Core offerings */}
        <CoreOfferings
          theme={ctx.theme}
          offerings={ctx.content.coreOfferings}
          service={ctx.service}
        />

        {/* Contact form only needs theme (client component) */}
        <ContactForm theme={ctx.theme} />
        <Footer theme={ctx.theme} />
      </GradientFrame>
    </div>
  );
}
