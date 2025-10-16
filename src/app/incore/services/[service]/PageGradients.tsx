"use client";

import type { ServiceKey } from "@/lib/serviceContext";
import { cn } from "@/lib/utils";

// Import service-specific gradients as flexible SVG components to allow width control
// inSURGE
import InsurgeG1 from "@public/inCore/pageGradients/insurge/gradient1.svg?flex";
import InsurgeG2 from "@public/inCore/pageGradients/insurge/gradient2.svg?flex";
import InsurgeG3 from "@public/inCore/pageGradients/insurge/gradient3.svg?flex";
import InsurgeHeader from "@public/inCore/pageGradients/insurge/headerGradient.svg?flex";
// inSTACK
import InstackG1 from "@public/inCore/pageGradients/instack/gradient1.svg?flex";
import InstackG2 from "@public/inCore/pageGradients/instack/gradient2.svg?flex";
import InstackG3 from "@public/inCore/pageGradients/instack/gradient3.svg?flex";
import InstackHeader from "@public/inCore/pageGradients/instack/headerGradient.svg?flex";
// inVOLVE
import InvolveG1 from "@public/inCore/pageGradients/involve/gradient1.svg?flex";
import InvolveG2 from "@public/inCore/pageGradients/involve/gradient2.svg?flex";
import InvolveG3 from "@public/inCore/pageGradients/involve/gradient3.svg?flex";
import InvolveHeader from "@public/inCore/pageGradients/involve/headerGradient.svg?flex";
// inSURE
import InsureG1 from "@public/inCore/pageGradients/insure/gradient1.svg?flex";
import InsureG2 from "@public/inCore/pageGradients/insure/gradient2.svg?flex";
import InsureG3 from "@public/inCore/pageGradients/insure/gradient3.svg?flex";
import InsureHeader from "@public/inCore/pageGradients/insure/headerGradient.svg?flex";

type GradKey = "header" | "g1" | "g2" | "g3";
type SvgCmp = React.ComponentType<{ className?: string }>;

const maps: Record<ServiceKey, Record<GradKey, SvgCmp>> = {
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

export function HeaderGradient({
  service,
  className,
}: {
  service: ServiceKey;
  className?: string;
}) {
  const Cmp = maps[service].header;
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 z-0 select-none",
        className,
      )}
    >
      <Cmp className="h-auto w-screen max-w-none" />
    </div>
  );
}

export function SectionGradient({
  service,
  variant,
  className,
}: {
  service: ServiceKey;
  variant: 1 | 2 | 3;
  className?: string;
}) {
  const key: GradKey = variant === 1 ? "g1" : variant === 2 ? "g2" : "g3";
  const Cmp = maps[service][key];
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 z-0 select-none",
        className,
      )}
    >
      <Cmp className="h-auto w-screen max-w-none" />
    </div>
  );
}

export default function PageGradients({ service }: { service: ServiceKey }) {
  // This component isn't used directly for layout but kept for potential future aggregation
  return <div className="hidden" data-service={service} />;
}
