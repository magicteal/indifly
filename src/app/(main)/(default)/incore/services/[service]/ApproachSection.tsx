"use client";

import Container from "@/components/container";
import InStackApproach from "@public/inCore/approach/instackApproach.svg?flex";
import InStackMobile from "@public/inCore/approach/inStackMobile.svg?flex";
import InSureApproach from "@public/inCore/approach/insureApproach.svg?flex";
import InSureMobile from "@public/inCore/approach/inSureMobile.svg?flex";
import InSurgeApproach from "@public/inCore/approach/insurgeApproach.svg?flex";
import InSurgeMobile from "@public/inCore/approach/inSurgeMobile.svg?flex";
import InVolveApproach from "@public/inCore/approach/involveApproach.svg?flex";
import InVolveMobile from "@public/inCore/approach/inVolveMobile.svg?flex";
import Cube from "@public/inCore/cube.svg";
import CircledLine from "@public/inCore/text-circled-line.svg";
import type { FC, SVGProps } from "react";
import { useEffect, useState } from "react";
import { ServiceKey } from "./content";

const approachImages: Record<ServiceKey, FC<SVGProps<SVGElement>>> = {
  instack: InStackApproach,
  insure: InSureApproach,
  involve: InVolveApproach,
  insurge: InSurgeApproach,
};

const approachMobileImages: Record<ServiceKey, FC<SVGProps<SVGElement>>> = {
  instack: InStackMobile,
  insure: InSureMobile,
  involve: InVolveMobile,
  insurge: InSurgeMobile,
};

interface ApproachSectionProps {
  approach: {
    description: string[];
    steps: { title: string; description: string }[];
  };
  service: ServiceKey;
}

export default function ApproachSection({
  approach,
  service,
}: ApproachSectionProps) {
  const positions =
    (stepPositions as Record<string, string[]>)[service] ||
    stepPositions._default;
  // Resolve the SVG component for this service once
  const ApproachImage = approachImages[service];
  const ApproachMobileImage = approachMobileImages[service];

  // Only mount ONE svg at a time (desktop OR mobile) to avoid duplicate inline
  // <defs>/<mask>/<gradient> ids colliding in the DOM and wiping fills.
  const [isMdUp, setIsMdUp] = useState<boolean | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMdUp("matches" in e ? e.matches : (e as MediaQueryList).matches);
    };
    // Set initial state
    handler(mql);
    // Subscribe to changes
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handler as (ev: Event) => void);
      return () =>
        mql.removeEventListener("change", handler as (ev: Event) => void);
    } else {
      // Legacy Safari support
      const legacy = mql as unknown as {
        addListener: (fn: (e: MediaQueryListEvent) => void) => void;
        removeListener: (fn: (e: MediaQueryListEvent) => void) => void;
      };
      legacy.addListener(handler as (e: MediaQueryListEvent) => void);
      return () =>
        legacy.removeListener(handler as (e: MediaQueryListEvent) => void);
    }
  }, []);

  return (
    <Container className="reveal-section">
      <div
        className="relative mt-12 flex flex-col items-center rounded-4xl px-4 sm:px-8 lg:px-12"
        style={{
          backgroundImage: `url('/inCore/cardGradient/${service}CardGradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* decorative cube */}
        <Cube className="absolute top-40 right-7 scale-30 rotate-12" />

        {/* heading */}
        <div className="reveal-title relative mb-8 pt-14 text-2xl font-semibold italic md:text-3xl">
          <span className="mr-12">Our</span>
          <span className="relative text-primary">
            Approach
            <CircledLine className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 scale-70" />
          </span>
        </div>

        {/* dynamic description paragraphs */}
        <div className="mx-auto max-w-4xl px-6 text-center" data-reveal-stagger>
          {approach.description.map((p, i) => (
            <p key={i} className="mt-0 text-base text-white/90">
              {p}
            </p>
          ))}
        </div>

        {/* Desktop / tablet version: keep absolute positioning so arrows in SVG point correctly */}
        <div className="reveal-image relative mx-auto mt-28 mb-32 hidden w-full max-w-[500px] md:block">
          {isMdUp && (
            <ApproachImage
              className="mx-auto max-w-full"
              aria-label={`${service} approach diagram`}
            />
          )}
          {approach.steps.map((step, index) => {
            const pos = positions[index] || stepPositions._default[index];
            return (
              <div
                key={`step-${index}-${step.title}`}
                className={pos}
                aria-label={`${index + 1}. ${step.title}`}
              >
                <div className="text-lg font-medium text-primary md:text-2xl">
                  {step.title}
                </div>
                <div className="max-w-60 text-sm md:text-base">
                  {step.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile version: show mobile-specific image */}
        <div className="reveal-image mt-20 mb-12 w-full md:hidden">
          {isMdUp === false && (
            <ApproachMobileImage
              className="mx-auto h-auto w-full max-w-md"
              aria-label={`${service} approach diagram`}
            />
          )}
        </div>
      </div>
    </Container>
  );
}

// Each service holds an array of 3 className strings corresponding to the 3 steps.
const stepPositions: Record<string, string[]> = {
  // Defaults for all services (will be used if service not explicitly overridden)
  _default: [
    "absolute -top-10 -left-23 text-right",
    "absolute -top-10 -right-23 text-left",
    "absolute -bottom-20 left-1/2 -translate-x-1/2 text-center",
  ],
  // Per-service customizations
  insurge: [
    "absolute -top-14 -left-20 text-right",
    "absolute -top-14 -right-24 text-left",
    "absolute -bottom-13 left-1/2 -translate-x-1/2 text-center",
  ],
  instack: [
    "absolute -top-22 -left-20 text-right",
    "absolute -top-22 -right-18 text-left",
    "absolute -bottom-21 left-1/2  -translate-x-1/2 text-center",
  ],
  involve: [
    "absolute -top-14 -left-18 text-right",
    "absolute -top-14 -right-22 text-left",
    "absolute -bottom-13 left-1/2 -translate-x-1/2 text-center",
  ],
  insure: [
    "absolute -top-22 -left-21 text-right",
    "absolute -top-22 -right-21 text-left",
    "absolute -bottom-21 left-1/2 -translate-x-1/2 text-center",
  ],
};
