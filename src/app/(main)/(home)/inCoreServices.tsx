"use client";

import DecorativeBannerSection from "@/components/DecorativeBannerSection";
import Container from "@/components/container";

export default function InCoreServices() {
  return (
    <Container>
      <div className="mt-24 w-full space-y-4 text-center">
        <h2 className="text-5xl font-bold">
          Integrated expertise, delivered at every stage.
        </h2>
        <p className="mb-0 text-2xl font-medium">
          We don’t just advise – we embed.
        </p>
        <p className="text-xl">
          With inSTACK, inSURGE, inSURE, and inVOLVE founders gain the muscle of
          execution alongside strategic leadership guidance.
        </p>
      </div>
      <DecorativeBannerSection />
    </Container>
  );
}
