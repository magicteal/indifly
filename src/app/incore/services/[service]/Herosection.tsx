"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import type { ServiceKey, ServiceTheme } from "@/lib/serviceContext";
import InstackHero from "@public/inCore/hero/instackHero.svg?flex";
import InsureHero from "@public/inCore/hero/insureHero.svg?flex";
import InsurgeHero from "@public/inCore/hero/insurgeHero.svg?flex";
import InvolveHero from "@public/inCore/hero/involveHero.svg?flex";
import Link from "next/link";

interface HeroSectionProps {
  theme: ServiceTheme;
  hero: { text: [string, string, string]; button: string };
  service: ServiceKey;
}

export default function HeroSection({
  theme,
  hero,
  service,
}: HeroSectionProps) {
  // Map service key to its hero SVG component once (tree-shake friendly)
  const heroMap: Record<
    ServiceKey,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    insurge: InsurgeHero,
    instack: InstackHero,
    involve: InvolveHero,
    insure: InsureHero,
  };

  const HeroArt = heroMap[service];

  return (
    <section
      className="relative overflow-hidden"
      role="region"
      aria-label={`${service} service hero section`}
    >
      <Container className="mt-20 mb-24 flex flex-col-reverse items-center gap-12 md:mt-40 md:mb-40 md:flex-row md:justify-between md:gap-16 lg:gap-24">
        {/* Left copy block */}
        <div className="relative z-10 w-full max-w-xl text-center md:max-w-[560px] md:text-left">
          <div className="text-xl font-semibold tracking-wide sm:text-2xl">
            <span>in</span>
            <span className={`${theme.text}`}>{hero.text[0]}</span>
          </div>

          <h1 className="mt-4 text-4xl leading-tight font-medium sm:text-5xl md:text-6xl/[1.1]">
            <span className="block">{hero.text[1]}</span>
            <span className={`mt-2 block font-bold ${theme.text} italic`}>
              {hero.text[2]}
            </span>
          </h1>

          <div className="mt-8 flex justify-center md:justify-start">
            <Button asChild size="lg" variant={theme.buttonVariant}>
              <Link href="#">{hero.button}</Link>
            </Button>
          </div>
        </div>

        {/* Right artwork */}
        {HeroArt && (
          <div className="relative w-full max-w-[480px] sm:max-w-[560px] md:max-w-[520px] lg:max-w-[600px] xl:max-w-[640px]">
            <HeroArt
              className="h-auto w-full drop-shadow-[0_0_40px_rgba(0,0,0,0.25)]"
              role="img"
              aria-label={`${service} service hero artwork`}
            />
          </div>
        )}
      </Container>
    </section>
  );
}
