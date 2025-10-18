"use client";

import DecorativeBannerSection from "@/components/DecorativeBannerSection";
import Container from "@/components/container";

export default function InCoreServices() {
  return (
    <Container>
      <div className="mt-24 w-full space-y-4 text-center text-neutral-800">
        <h2 className="text-5xl font-bold">
          Integrated expertise, delivered at{" "}
          <span className="text-primary">every stage.</span>
        </h2>
        <p className="mt-8 mb-0 text-2xl font-medium reveal-title">
          We don’t just advise – we embed.
        </p>
        <p className="text-xl reveal-left">
          With <span className="font-medium">inSTACK, inSURGE, inSURE,</span>{" "}
          and <span className="font-medium">inVOLVE</span> founders gain the
          muscle of execution alongside strategic leadership guidance.
        </p>
      </div>
      <div className="reveal-image">
        <DecorativeBannerSection />
      </div>
    </Container>
  );
}
