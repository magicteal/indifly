import { notFound } from "next/navigation";
import ApproachSection from "./ApproachSection";
import { getServiceContent, isServiceKey, serviceKeys } from "./content";
import CoreOfferings from "./coreOfferings";
import HeroSection from "./Herosection";
import { HeaderGradient, SectionGradient } from "./PageGradients";
import WhyItMatters from "./whyItMatters";

export function generateStaticParams() {
  return serviceKeys.map((service) => ({ service }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  if (!isServiceKey(service)) {
    notFound();
  }
  const content = getServiceContent(service);
  const theme = `theme-${service}`;

  return (
    <div
      className={`theme-incore-services ${theme} relative z-0 bg-background text-foreground`}
    >
      {/* Full-width header gradient anchored to the top of the page content (just below navbar) */}
      <HeaderGradient service={service} />
      <SectionGradient service={service} variant={1} />

      {/* Hero needs hero1 slice & theme */}
      <div className="relative z-10">
        <HeroSection hero={content.hero1} service={service} />
      </div>

      {/* Approach: background gradient 1 */}
      <div className="relative z-10">
        <SectionGradient service={service} variant={2} className="top-0" />
        <ApproachSection approach={content.ourApproach} service={service} />
      </div>

      {/* Why it matters: background gradient 2 */}
      <div className="relative z-10">
        <WhyItMatters whyItMatters={content.whyItMatters} service={service} />
      </div>

      {/* Core offerings: background gradient 3 */}
      <div className="relative z-10">
        <SectionGradient service={service} variant={3} className="top-0" />
        <CoreOfferings offerings={content.coreOfferings} service={service} />
      </div>
    </div>
  );
}
