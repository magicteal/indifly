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

        <div className="text-center">
          <div>
            Growth doesn’t happen by chance.
            <br />
            At inSURGE, we break it into clarity, creativity, and consistency.
          </div>
        </div>

        <div className="relative mt-12 mb-28">
          {/* Approach Image */}
          {(() => {
            const ApproachImage = approachImages[serviceKey];
            return <ApproachImage className="max-w-full" />;
          })()}

          {/* Three Steps*/}
          <div className="absolute -top-10 -left-23 text-right">
            <div className={`text-lg font-medium ${theme.text} md:text-2xl`}>
              Architect
            </div>
            <div className="max-w-48">
              Map the right foundation for product and scale
            </div>
          </div>

          <div className="absolute -top-10 -right-23 text-left">
            <div className={`text-lg font-medium ${theme.text} md:text-2xl`}>
              Activate
            </div>
            <div className="max-w-48">
              Execute with excellence and efficiency across all channels
            </div>
          </div>

          <div className="absolute -bottom-20 left-1/2 w-48 -translate-x-1/2 text-center">
            <div className={`text-lg font-medium ${theme.text} md:text-2xl`}>
              Amplify
            </div>
            <div className="max-w-48">
              Optimize and scale with data-driven decisions
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
