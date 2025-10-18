import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import {
  allServiceParams,
  getServiceContext,
  isServiceKey,
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
  const ctx = getServiceContext(service);

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
        <HeroSection hero={ctx.content.hero1} service={service} />
      </div>

      {/* Approach: background gradient 1 */}
      <div className="relative z-10">
        <SectionGradient service={service} variant={2} className="top-0" />
        <ApproachSection approach={ctx.content.ourApproach} service={service} />
      </div>

      {/* Why it matters: background gradient 2 */}
      <div className="relative z-10">
        <WhyItMatters
          whyItMatters={ctx.content.whyItMatters}
          service={service}
        />
      </div>

      {/* Core offerings: background gradient 3 */}
      <div className="relative z-10">
        <SectionGradient service={service} variant={3} className="top-0" />
        <CoreOfferings
          offerings={ctx.content.coreOfferings}
          service={service}
        />
      </div>

      {/* Contact form only needs theme (client component) */}
      <ContactForm />
      <Footer />
    </div>
  );
}
