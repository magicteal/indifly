import { notFound } from "next/navigation";
import type { SvgComponent } from "../../../../../../components/Gradient";
import { Gradient } from "../../../../../../components/Gradient";
import ApproachSection from "./ApproachSection";
import {
  ServiceKey,
  getServiceContent,
  isServiceKey,
  serviceKeys,
} from "./content";
import CoreOfferings from "./coreOfferings";
import HeroSection from "./Herosection";
import WhyItMatters from "./whyItMatters";

// Import gradients and create local map per service
import InstackG1 from "@public/inCore/pageGradients/instack/gradient1.svg?flex";
import InstackG2 from "@public/inCore/pageGradients/instack/gradient2.svg?flex";
import InstackG3 from "@public/inCore/pageGradients/instack/gradient3.svg?flex";
import InstackHeader from "@public/inCore/pageGradients/instack/headerGradient.svg?flex";
import InsureG1 from "@public/inCore/pageGradients/insure/gradient1.svg?flex";
import InsureG2 from "@public/inCore/pageGradients/insure/gradient2.svg?flex";
import InsureG3 from "@public/inCore/pageGradients/insure/gradient3.svg?flex";
import InsureHeader from "@public/inCore/pageGradients/insure/headerGradient.svg?flex";
import InsurgeG1 from "@public/inCore/pageGradients/insurge/gradient1.svg?flex";
import InsurgeG2 from "@public/inCore/pageGradients/insurge/gradient2.svg?flex";
import InsurgeG3 from "@public/inCore/pageGradients/insurge/gradient3.svg?flex";
import InsurgeHeader from "@public/inCore/pageGradients/insurge/headerGradient.svg?flex";
import InvolveG1 from "@public/inCore/pageGradients/involve/gradient1.svg?flex";
import InvolveG2 from "@public/inCore/pageGradients/involve/gradient2.svg?flex";
import InvolveG3 from "@public/inCore/pageGradients/involve/gradient3.svg?flex";
import InvolveHeader from "@public/inCore/pageGradients/involve/headerGradient.svg?flex";

type GradKey = "header" | "g1" | "g2" | "g3";
const maps: Record<ServiceKey, Record<GradKey, SvgComponent>> = {
  insurge: {
    header: InsurgeHeader,
    g1: InsurgeG1,
    g2: InsurgeG2,
    g3: InsurgeG3,
  },
  instack: {
    header: InstackHeader,
    g1: InstackG1,
    g2: InstackG2,
    g3: InstackG3,
  },
  involve: {
    header: InvolveHeader,
    g1: InvolveG1,
    g2: InvolveG2,
    g3: InvolveG3,
  },
  insure: {
    header: InsureHeader,
    g1: InsureG1,
    g2: InsureG2,
    g3: InsureG3,
  },
};

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
      <Gradient Cmp={maps[service].header} className="top-0" />
      <Gradient Cmp={maps[service].g1} />

      <HeroSection hero={content.hero1} service={service} />

      <Gradient Cmp={maps[service].g2} className="top-0">
        <ApproachSection approach={content.ourApproach} service={service} />
      </Gradient>

      <WhyItMatters whyItMatters={content.whyItMatters} service={service} />

      <Gradient Cmp={maps[service].g3} className="top-0">
        <CoreOfferings offerings={content.coreOfferings} service={service} />
      </Gradient>
    </div>
  );
}
