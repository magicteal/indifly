import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
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
import { HeaderGradient, SectionGradient } from "./PageGradients";
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
    <div className="relative z-0 bg-[#171717]">
      {/* Full-width header gradient anchored to the top of the page content (just below navbar) */}
      <HeaderGradient service={ctx.service} />
      <SectionGradient service={ctx.service} variant={1} />

      {/* Hero needs hero1 slice & theme */}
      <div className="relative z-10">
        <HeroSection
          theme={ctx.theme}
          hero={ctx.content.hero1}
          service={ctx.service}
        />
      </div>

      {/* Approach: background gradient 1 */}
      <div className="relative z-10">
        <SectionGradient service={ctx.service} variant={2} className="top-0" />
        <ApproachSection
          theme={ctx.theme}
          approach={ctx.content.ourApproach}
          service={ctx.service}
        />
      </div>

      {/* Why it matters: background gradient 2 */}
      <div className="relative z-10">
        <WhyItMatters
          theme={ctx.theme}
          whyItMatters={ctx.content.whyItMatters}
          service={ctx.service}
        />
      </div>

      {/* Core offerings: background gradient 3 */}
      <div className="relative z-10">
        <SectionGradient service={ctx.service} variant={3} className="top-0" />
        <CoreOfferings
          theme={ctx.theme}
          offerings={ctx.content.coreOfferings}
          service={ctx.service}
        />
      </div>

      {/* Contact form only needs theme (client component) */}
      <ContactForm theme={ctx.theme} />
      <Footer theme={ctx.theme} />
    </div>
  );
}
