"use client";

import Container from "@/components/ui/container";
import InStackApproach from "@public/inCore/approach/instackApproach.svg";
import InSureApproach from "@public/inCore/approach/insureApproach.svg";
import InSurgeApproach from "@public/inCore/approach/insurgeApproach.svg";
import InVolveApproach from "@public/inCore/approach/involveApproach.svg";
import Cube from "@public/inCore/cube.svg";
import CircledLine from "@public/inCore/text-circled-line.svg";
import { useParams } from "next/navigation";
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

  return (
    <Container>
      <div
        className="relative mt-12 rounded-4xl"
        style={{
          backgroundImage: `url('/inCore/cardGradient/${service}CardGradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* decorative cube */}
        <Cube className="absolute top-40 right-7 scale-30 rotate-12" />

        {/* heading */}
        <div className="relative mb-5 pt-14 text-center text-2xl font-semibold italic md:text-3xl">
          <span className="mr-12">Our</span>
          <span className={`relative ${theme.text}`}>
            Approach
            <CircledLine className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 scale-70" />
          </span>
        </div>
        <div className="mx-auto max-w-4xl px-6 pb-16 text-center">
          <div className="mt-4 text-base text-white/90">
            Growth doesn’t happen by chance.
            <br />
            At <span className="font-medium">inSURGE</span>, we break it into
            clarity, creativity, and consistency.
          </div>

          <div className="mt-8 flex justify-center">
            {(() => {
              const ApproachImage = approachImages[serviceKey];
              return <ApproachImage className="max-w-full" />;
            })()}
          </div>
        </div>
      </div>
    </Container>
  );
}
