"use client";
import { Container } from "@/components/container";
import { VentureKey } from "@/lib/ventureContext";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import VentureCards from "./VentureCards";

export default function VenturesHero({
  defaultActive,
}: {
  defaultActive?: VentureKey;
}) {
  const router = useRouter();
  const [active, setActive] = useState<VentureKey>(defaultActive ?? "indipe");

  const handleChange = useCallback(
    (k: VentureKey) => {
      if (k === active) return;
      setActive(k);
      router.push(`/ventures/${k}`);
    },
    [active, router],
  );

  return (
    <section className="relative pt-20 pb-4 sm:pt-24 md:pt-32 md:pb-6">
      <Container>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#3C3C3C] sm:text-3xl">
            Our <span className="text-primary">Ventures</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#3C3C3C] sm:text-base">
            Building and backing platforms and products, bringing about digital
            inclusion and transformative growth in the emerging regions of
            Bharat.
          </p>
        </div>
      </Container>

      {/* Combined hero + venture cards */}
      <VentureCards active={active} onChangeAction={handleChange} />
    </section>
  );
}
