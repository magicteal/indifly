"use client";

import { cn } from "@/lib/utils";
import IncoreHomeHero from "@public/inCore/incoreHeroGradient.svg?flex";
import IncoreHomeMiddleAlt from "@public/inCore/incoreMiddle2.svg?flex";
import IncoreHomeMiddle from "@public/inCore/incoreMiddlegrad.svg?flex";
import IncoreHomeBottom from "@public/inCore/incoreboottom.svg?flex";
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
import { ServiceKey } from "./content";

type ServiceGradKey = "header" | "g1" | "g2" | "g3";
type ServiceVariant = 1 | 2 | 3;
type HomeVariant = "homeHero" | "homeMiddle" | "homeMiddleAlt" | "homeBottom";
type SectionVariant = ServiceVariant | HomeVariant;
type GradientService = ServiceKey | "incoreHome";
type SvgCmp = React.ComponentType<{ className?: string }>;

const serviceMaps: Record<ServiceKey, Record<ServiceGradKey, SvgCmp>> = {
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

const homeMaps: Record<HomeVariant, SvgCmp> = {
  homeHero: IncoreHomeHero,
  homeMiddle: IncoreHomeMiddle,
  homeMiddleAlt: IncoreHomeMiddleAlt,
  homeBottom: IncoreHomeBottom,
};

export function HeaderGradient({
  service,
  className,
}: {
  service: ServiceKey;
  className?: string;
}) {
  const Cmp = serviceMaps[service].header;
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
  service: GradientService;
  variant: SectionVariant;
  className?: string;
}) {
  if (service === "incoreHome") {
    if (typeof variant === "number") {
      return null;
    }
    const Cmp = homeMaps[variant];
    if (!Cmp) {
      return null;
    }
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-0 left-1/2 z-0 w-screen -translate-x-1/2 select-none",
          className,
        )}
      >
        <Cmp className="h-auto w-full max-w-none" />
      </div>
    );
  }

  if (typeof variant !== "number") {
    return null;
  }

  const key: ServiceGradKey =
    variant === 1 ? "g1" : variant === 2 ? "g2" : "g3";
  const Cmp = serviceMaps[service][key];
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
