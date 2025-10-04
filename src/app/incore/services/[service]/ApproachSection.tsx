"use client";

import Container from "@/components/ui/container";
import InStackApproach from "@public/inCore/approach/instackApproach.svg";
import InSureApproach from "@public/inCore/approach/insureApproach.svg";
import InSurgeApproach from "@public/inCore/approach/insurgeApproach.svg";
import InVolveApproach from "@public/inCore/approach/involveApproach.svg";
import Cube from "@public/inCore/cube.svg";
import CircledLine from "@public/inCore/text-circled-line.svg";
import { useParams } from "next/navigation";
import { useServiceContent } from "./hooks/useServiceContent";
import { useServiceTheme } from "./hooks/useServiceTheme";

const approachImages = {
  instack: InStackApproach,
  insure: InSureApproach,
  involve: InVolveApproach,
  insurge: InSurgeApproach,
};

export default function ApproachSection() {
  const { service } = useParams<{ service: string }>();
  const serviceKey = service as keyof typeof approachImages;
  const theme = useServiceTheme();
  const content = useServiceContent();
  const positions = stepPositions[serviceKey] || stepPositions._default;

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
        <div className="relative mb-5 pt-14 text-2xl font-semibold italic md:text-3xl">
          <span className="mr-12">Our</span>
          <span className={`relative ${theme.text}`}>
            Approach
            <CircledLine className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 scale-70" />
          </span>
        </div>

        {/* dynamic description paragraphs */}
        <div className="mx-auto max-w-4xl px-6 text-center">
          {content.ourApproach.description.map((p, i) => (
            <p key={i} className="mt-4 text-base text-white/90">
              {p}
            </p>
          ))}
        </div>

        <div className="relative mt-12 mb-28">
          {/* Approach Image */}
          {(() => {
            const ApproachImage = approachImages[serviceKey];
            return <ApproachImage className="max-w-full" />;
          })()}

          {/* Steps mapped */}
          {content.ourApproach.steps.map((step, index) => {
            const pos = positions[index] || stepPositions._default[index];
            return (
              <div key={step.title} className={pos}>
                <div
                  className={`text-lg font-medium ${theme.text} md:text-2xl`}
                >
                  {step.title}
                </div>
                <div className="max-w-48">{step.description}</div>
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
    "absolute -bottom-20 left-1/2 w-48 -translate-x-1/2 text-center",
  ],
  // Per-service customizations
  insurge: [
    "absolute -top-12 -left-20 text-right",
    "absolute -top-8 -right-24 text-left",
    "absolute -bottom-24 left-1/2 w-52 -translate-x-1/2 text-center",
  ],
  instack: [
    "absolute -top-14 -left-25 text-right",
    "absolute -top-6 -right-20 text-left",
    "absolute -bottom-16 left-1/2 w-48 -translate-x-1/2 text-center",
  ],
  involve: [
    "absolute -top-8 -left-22 text-right",
    "absolute -top-12 -right-22 text-left",
    "absolute -bottom-18 left-1/2 w-48 -translate-x-1/2 text-center",
  ],
  insure: [
    "absolute -top-11 -left-21 text-right",
    "absolute -top-9 -right-21 text-left",
    "absolute -bottom-22 left-1/2 w-48 -translate-x-1/2 text-center",
  ],
};
