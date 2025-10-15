"use client";
import { Container } from "@/components/container";
import { useMemo, useState, useCallback } from "react";
import VentureCards from "./VentureCards";
import { VentureKey, getVentureTheme } from "@/lib/ventureContext";
import { useRouter } from "next/navigation";

export default function VenturesHero({ defaultActive }: { defaultActive?: VentureKey }) {
  const router = useRouter();
  const [active, setActive] = useState<VentureKey>(defaultActive ?? "indipe");
  const theme = useMemo(() => getVentureTheme(active), [active]);

  const handleChange = useCallback(
    (k: VentureKey) => {
      if (k === active) return;
      setActive(k);
      router.push(`/ventures/${k}`);
    },
    [active, router]
  );

  return (
    <section className="relative pt-20 pb-4 sm:pt-24 md:pt-32 md:pb-6">
      <Container>
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#3C3C3C]">
            Our <span className={theme.text}>Ventures</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#3C3C3C] max-w-2xl mx-auto">
            Building and backing platforms and products, bringing about digital inclusion and transformative growth in the emerging regions of Bharat.
          </p>
        </div>
      </Container>

      {/* Combined hero + venture cards */}
      <VentureCards active={active} onChangeAction={handleChange} />
    </section>
  );
}
