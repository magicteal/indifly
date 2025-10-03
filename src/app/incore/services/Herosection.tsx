"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Container className="mt-16 mb-24 flex flex-col items-center justify-between md:mt-56 md:flex-row">
        {/* Left copy block */}
        <div className="relative z-10">
          <div className="text-2xl font-bold tracking-wide">
            <span>in</span>
            <span className="text-insurge">SURGE</span>
          </div>

          <h1 className="mt-3 text-4xl leading-tight md:text-5xl">
            <span>Integrated expertise for</span>
            <br />
            <span className="font-bold text-insurge italic">
              startup success
            </span>
          </h1>

          <div className="mt-10">
            <Button asChild variant={"insurge"}>
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
