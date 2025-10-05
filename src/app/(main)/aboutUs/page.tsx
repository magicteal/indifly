import Image from "next/image";
import aboutHero from "@public/aboutHero.png";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/app/(main)/(home)/Footer";
import TitleBrush from "@public/home/titieINDsights.svg";
import { ProfileCard } from "./components/ProfileCard";
import { teamGroups } from "@/data/team";
import Section from "@/components/ui/section";
import GradientFrame from "../blog/gradient";
import { BentoGrid, BentoCard } from "@/components/bento/BentoGrid";
import IndianMap from "@public/indianMap.svg";
import VenturesGridBG from "@public/VenturesGridBG.svg";
import VenturesGridBox from "@public/VenturesGridBox.svg";
import VenturesGridinCore from "@public/VenturesGridinCore.svg";
import VenturesGridMan from "@public/VenturesGridMan.svg";

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      {/* Full-bleed hero */}
      <div className="relative w-full">
        <div className="absolute inset-0 z-0 min-h-[420px] md:min-h-[560px]">
          <Image src={aboutHero} alt="About hero" priority fill className="object-cover grayscale" />
        </div>
        {/* subtle gray overlay */}
        <div className="absolute inset-0 z-[5] bg-black/40" />

        <div className="min-h-[420px] md:min-h-[560px] flex items-center relative z-20">
          <div className="w-full">
            <div className="max-w-3xl mx-auto text-center px-6">
              <h2 className="text-2xl md:text-3xl font-extrabold" style={{ background: 'linear-gradient(90deg,#E04A00,#FF915C)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                VISION
              </h2>
              <p className="mt-4 text-lg text-white/95 drop-shadow">To foster entrepreneurship for inclusive growth of Bharat</p>

              <h3 className="mt-8 text-xl md:text-2xl font-semibold text-white " style={{ background: 'linear-gradient(90deg,#E04A00,#FF915C)', WebkitBackgroundClip: 'text', color: 'transparent' }}>MISSION</h3>
              <p className="mt-4 text-base text-white/90 max-w-2xl mx-auto">To create platforms and ecosystems for mission-driven founders and cultivate brands that bring transformative growth in the emerging regions of Bharat through digital inclusion.</p>
            </div>
          </div>
        </div>

        {/* Bottom headline on hero */}
        <div className="absolute inset-x-0 bottom-6 z-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl leading-tight font-bold md:text-3xl text-white">
              Building <span className="text-[#F56522]">Ventures,</span> Building{" "}
              <span className="text-[#F56522]">Nation.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <Section className="py-16 md:py-24">
        <div className="mb-10 flex w-full items-center justify-center md:mb-14">
          <div className="relative">
            <TitleBrush className="h-auto w-[340px] md:w-[420px]" />
            <div className="absolute inset-0 grid place-items-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-">Meet the team</h2>
            </div>
          </div>
        </div>
        <p className="mx-auto max-w-3xl text-center text-[#0B2B4A] px-6">
          Join our mission to transform India&apos;s economic landscape and empower aspiring entrepreneurs
        </p>

        <div className="mt-12 space-y-16">
          {teamGroups.map((group) => (
            <div key={group.title} className="px-6 max-w-6xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-[#1B1B1F] text-left">{group.title}</h3>
              <div className="mt-6 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {group.members.map((m) => (
                  <ProfileCard key={m.name} name={m.name} role={m.role} imageUrl={m.imageUrl} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Company Collage (Bento Grid) */}
      <Section className="py-12 md:py-16">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1B1B1F]">Company Collage</h3>
            <p className="text-sm text-[#3C3C3C]">Snapshots from our journey and the ecosystem we are building.</p>
          </div>

          <BentoGrid>
            <BentoCard
              id="map"
              className="sm:col-span-2 lg:col-span-2 h-[220px]"
              title="Building across Bharat"
              image={<IndianMap className="w-full h-full" />}
            />
            <BentoCard
              id="incore"
              className="lg:row-span-2 h-[460px]"
              title="inCORE"
              image={<VenturesGridinCore className="w-full h-full" />}
            />
            <BentoCard
              id="bg"
              className="h-[220px]"
              title="Ventures"
              image={<VenturesGridBG className="w-full h-full" />}
            />
            <BentoCard
              id="people"
              className="sm:col-span-2 h-[220px]"
              title="People first"
              image={<VenturesGridMan className="w-full h-full" />}
            />
            <BentoCard
              id="box"
              className="h-[220px]"
              title="Product & Design"
              image={<VenturesGridBox className="w-full h-full" />}
            />
          </BentoGrid>
        </div>
      </Section>

      <div className=" relative overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <GradientFrame variant="v1" className="opacity-40" />
          <div className="relative z-10">
            <ContactForm title="Contact Us" description="We are committed to processing the information in order to contact you and talk about your project." />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
