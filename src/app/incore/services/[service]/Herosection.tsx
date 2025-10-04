"use client";

import { useServiceTheme } from "@/app/incore/services/[service]/hooks/useServiceTheme";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function HeroSection() {
  const { service } = useParams<{ service: string }>();
  const theme = useServiceTheme();

  return (
    <section className="relative overflow-hidden">
      <Container className="mt-16 mb-24 flex flex-col items-center justify-between md:mt-56 md:flex-row">
        {/* Left copy block */}
        <div className="relative z-10">
          <div className="text-2xl font-bold tracking-wide">
            <span>in</span>
            <span className={theme.text}>{service.slice(2).toUpperCase()}</span>
          </div>

          <h1 className="mt-3 text-4xl leading-tight md:text-5xl">
            <span>Integrated expertise for</span>
            <br />
            <span className={`font-bold ${theme.text} italic`}>
              startup success
            </span>
          </h1>

          <div className="mt-10">
            <Button asChild size={"lg"} variant={theme.buttonVariant}>
              <Link href="#">Book a Consultation Call</Link>
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
