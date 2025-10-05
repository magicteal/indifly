"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import type { ServiceTheme } from "@/lib/serviceContext";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  theme: ServiceTheme;
  hero: { text: [string, string, string]; button: string };
  service: string;
}

export default function HeroSection({ theme, hero }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <Container className="mt-16 mb-24 flex flex-col items-center justify-between md:mt-56 md:flex-row">
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
        <div className="relative z-10">
          <Image
            src="/inCore/inCoreServiceHero.png"
            alt="Hero"
            width={592}
            height={333}
          />
        </div>
      </Container>
    </section>
  );
}
