"use client";

import Image from "next/image";
import Section from "@/components/ui/section";
import { Container } from "@/components/ui/container";

const logos: { src: string; alt: string }[] = [
  { src: "/indiflyLogo.svg", alt: "Indifly" },
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/next.svg", alt: "Next.js" },
  { src: "/indiflyLogo.svg", alt: "Indifly" },
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/next.svg", alt: "Next.js" },
  
 
];

export default function ClientsMarqueeSection() {
  return (
    <Section withContainer={false} py="py-14 md:py-20" wrapperClassName="bg-[#001631]">
      {/* Centered gradient title */}
      <Container className="text-center">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#8338EC_0%,#FF990B_27%,#04E762_80%,#3A86FF_100%)]"
        >
          Our Client
        </h2>
      </Container>

      {/* Edge-to-edge marquee */}
      <div className="mt-8 md:mt-12 overflow-hidden">
        <div className="relative">
          <div className="marquee flex items-center gap-12 md:gap-16 will-change-transform">
            {logos.map((logo, idx) => (
              <LogoItem key={`logo-1-${idx}`} src={logo.src} alt={logo.alt} />
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo, idx) => (
              <LogoItem key={`logo-2-${idx}`} src={logo.src} alt={logo.alt} ariaHidden />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee { animation: marquee 25s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </Section>
  );
}

function LogoItem({ src, alt, ariaHidden = false }: { src: string; alt: string; ariaHidden?: boolean }) {
  return (
    <div className="shrink-0 opacity-85 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <Image
        src={src}
        alt={alt}
        width={140}
        height={56}
        className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
        aria-hidden={ariaHidden}
      />
    </div>
  );
}
