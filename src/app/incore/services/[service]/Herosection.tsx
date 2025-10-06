"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import type { ServiceKey, ServiceTheme } from "@/lib/serviceContext";
import InstackHero from "@public/inCore/hero/instackHero.svg";
import InsureHero from "@public/inCore/hero/insureHero.svg";
import InsurgeHero from "@public/inCore/hero/insurgeHero.svg";
import InvolveHero from "@public/inCore/hero/involveHero.svg";
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
    <section className="relative overflow-hidden">
      <Container className="mt-16 mb-24 flex flex-col items-center justify-between gap-24 md:mt-56 md:flex-row">
        {/* Left copy block */}
        <div className="relative z-10">
          <div className="text-2xl font-bold tracking-wide">
            <span>in</span>
            <span className={`${theme.text}`}>{hero.text[0]}</span>
          </div>

          <h1 className="mt-3 text-4xl leading-tight md:text-5xl">
            <span>{hero.text[1]}</span>
            <br />
            <span className={`font-bold ${theme.text} italic`}>
              {hero.text[2]}
            </span>
          </h1>

          <div className="mt-10">
            <Button asChild size={"lg"} variant={theme.buttonVariant}>
              <Link href="#">{hero.button}</Link>
            </Button>
          </div>
        </div>

        {/* Right artwork card */}
        {HeroArt && (
          <HeroArt
            className="shrink-0"
            role="img"
            aria-label={`${service} service hero artwork`}
          />
        )}
      </Container>
    </section>
  );
}
