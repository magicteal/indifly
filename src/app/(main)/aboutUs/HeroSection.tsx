import Container from "@/components/container";
import aboutHero from "@public/aboutHero.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden sm:aspect-[2/1]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutHero}
          alt="About hero"
          priority
          fill
          className="object-cover grayscale"
        />
      </div>
      {/* subtle gray overlay */}
      <div className="absolute inset-0 z-[5] bg-black/50 md:bg-black/40" />

      <Container className="relative z-20 flex h-full w-full items-center text-center">
        <div>
          <h2 className="text-xl font-extrabold text-primary">VISION</h2>
          <p className="text-base font-extrabold sm:text-xl lg:text-3xl">
            To foster entrepreneurship for inclusive growth of Bharat
          </p>

          <h3 className="mt-5 text-xl font-extrabold text-primary md:mt-10">
            MISSION
          </h3>
          <p className="mx-auto text-base sm:text-xl lg:text-3xl">
            To create platforms and ecosystems for mission-driven founders and
            cultivate brands that bring transformative growth in the emerging
            regions of Bharat through digital inclusion.
          </p>
        </div>
      </Container>

      {/* Bottom headline on hero */}
      <div className="absolute inset-x-0 bottom-6 z-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-xl font-bold text-white md:text-3xl">
            Building <span className="text-primary">Ventures,</span> Building{" "}
            <span className="text-primary">Nation.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
