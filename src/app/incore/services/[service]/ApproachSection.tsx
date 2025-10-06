"use client";

import Container from "@/components/container";
import type { ServiceTheme } from "@/lib/serviceContext";
import InStackApproach from "@public/inCore/approach/instackApproach.svg";
import InSureApproach from "@public/inCore/approach/insureApproach.svg";
import InSurgeApproach from "@public/inCore/approach/insurgeApproach.svg";
import InVolveApproach from "@public/inCore/approach/involveApproach.svg";
import Cube from "@public/inCore/cube.svg";
import CircledLine from "@public/inCore/text-circled-line.svg";

const approachImages = {
  instack: InStackApproach,
  insure: InSureApproach,
  involve: InVolveApproach,
  insurge: InSurgeApproach,
};

interface ApproachSectionProps {
  theme: ServiceTheme;
  approach: {
    description: string[];
    steps: { title: string; description: string }[];
  };
  service: string;
}

export default function ApproachSection({
  theme,
  approach,
  service,
}: ApproachSectionProps) {
  const serviceKey = service as keyof typeof approachImages;
  const positions =
    (stepPositions as Record<string, string[]>)[serviceKey] ||
    stepPositions._default;

  return (
    <Container>
      <div
        className="relative mt-12 flex flex-col items-center rounded-4xl"
        style={{
          backgroundImage: `url('/inCore/cardGradient/${service}CardGradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* decorative cube */}
        <Cube className="absolute top-40 right-7 scale-30 rotate-12" />

        {/* heading */}
        <div className="relative mb-8 pt-14 text-2xl font-semibold italic md:text-3xl">
          <span className="mr-12">Our</span>
          <span className={`relative ${theme.text}`}>
            Approach
            <CircledLine className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 scale-70" />
          </span>
        </div>

        {/* dynamic description paragraphs */}
        <div className="mx-auto max-w-4xl px-6 text-center">
          {approach.description.map((p, i) => (
            <p key={i} className="mt-0 text-base text-white/90">
              {p}
            </p>
          ))}
        </div>

        <div className="relative mt-28 mb-32">
          {/* Approach Image */}
          {(() => {
            const ApproachImage = approachImages[serviceKey];
            return <ApproachImage className="max-w-full" />;
          })()}

          {/* Steps mapped */}
          {approach.steps.map((step, index) => {
            const pos = positions[index] || stepPositions._default[index];
            return (
              <div key={step.title} className={pos}>
                <div
                  className={`text-lg font-medium ${theme.text} md:text-2xl`}
                >
                  {step.title}
                </div>
                <div className="max-w-60">{step.description}</div>
              </div>
            );
          })}
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
