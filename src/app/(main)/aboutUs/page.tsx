import { teamGroups } from "@/app/(main)/aboutUs/content/team";
import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/section";
import { lightTheme } from "@/lib/serviceContext";
import aboutHero from "@public/aboutHero.png";
import TitleBrush from "@public/home/titieINDsights.svg";
// Collage imports moved into CompanyCollage component
// Collage assets now imported within CompanyCollage component
import Image from "next/image";
import GradientFrame from "../blog/gradient";
import { CompanyCollage } from "./CompanyCollage";
import { JourneyTimeline } from "./components/JourneyTimeline";
import { ProfileCard } from "./components/ProfileCard";

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      {/* Full-bleed hero */}
      <div className="relative w-full">
        <div className="absolute inset-0 z-0 min-h-[420px] md:min-h-[560px]">
          <Image
            src={aboutHero}
            alt="About hero"
            priority
            fill
            className="object-cover grayscale"
          />
        </div>
        {/* subtle gray overlay */}
        <div className="absolute inset-0 z-[5] bg-black/40" />

        <div className="relative z-20 flex min-h-[420px] items-center md:min-h-[560px]">
          <div className="w-full">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <h2
                className="text-2xl font-extrabold md:text-3xl"
                style={{
                  background: "linear-gradient(90deg,#E04A00,#FF915C)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                VISION
              </h2>
              <p className="mt-4 text-lg text-white/95 drop-shadow">
                To foster entrepreneurship for inclusive growth of Bharat
              </p>

              <h3
                className="mt-8 text-xl font-semibold text-white md:text-2xl"
                style={{
                  background: "linear-gradient(90deg,#E04A00,#FF915C)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                MISSION
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90">
                To create platforms and ecosystems for mission-driven founders
                and cultivate brands that bring transformative growth in the
                emerging regions of Bharat through digital inclusion.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom headline on hero */}
        <div className="absolute inset-x-0 bottom-6 z-20 px-6">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-2xl leading-tight font-bold text-white md:text-3xl">
              Building <span className="text-[#F56522]">Ventures,</span>{" "}
              Building <span className="text-[#F56522]">Nation.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Title with brush stroke */}
      <div className="my-10 flex w-full items-center justify-center">
        <div className="relative">
          <TitleBrush className="h-auto w-full" />
          <div className="absolute inset-0 grid place-items-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              ROADMAP
            </h2>
          </div>
        </div>
      </div>

      <p className="mx-auto text-center text-xl font-bold text-[#0B44FF]">
        Our Journey
      </p>
      <p className="mx-auto mt-2 max-w-3xl px-6 text-center text-lg text-neutral-800">
        Empowering communities through innovative solutions since 2017.
      </p>

      {/* Timeline Section */}
      <section className="mt-8">
        <JourneyTimeline />
      </section>

      {/* Team Section */}
      <Section className="py-16 md:py-24">
        {/* Title with brush stroke */}
        <div className="mb-10 flex w-full items-center justify-center">
          <div className="relative">
            <TitleBrush className="h-auto w-full" />
            <div className="absolute inset-0 grid place-items-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Meet the Team
              </h2>
            </div>
          </div>
        </div>
        <p className="mx-auto max-w-3xl px-6 text-center text-[#0B2B4A]">
          Join our mission to transform India&apos;s economic landscape and
          empower aspiring entrepreneurs
        </p>

        <div className="mt-12">
          {teamGroups.map((group) => (
            <div key={group.title} className="mx-auto max-w-6xl px-6">
              <h3 className="text-left text-xl font-semibold text-[#1B1B1F] md:text-2xl">
                {group.title}
              </h3>
              <div className="mt-6 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {group.members.map((m) => (
                  <ProfileCard
                    key={m.name}
                    name={m.name}
                    role={m.role}
                    linkedin={m.linkedin}
                    imageUrl={m.imageUrl}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CompanyCollage />

      <div className="relative overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <GradientFrame variant="v1" className="opacity-40" />
          <div className="relative z-10">
            <ContactForm theme={lightTheme} />
          </div>
        </div>
      </div>
      <Footer theme={lightTheme} />
    </main>
  );
}
