import { teamGroups } from "@/app/(main)/(default)/aboutUs/content/team";
import Section from "@/components/section";
import TitleBrush from "@public/home/titieINDsights.svg";
import { ProfileCard } from "./components/ProfileCard";

export function TeamSection() {
  return (
    <Section className="reveal-section py-16 md:py-24">
      {/* Title with brush stroke */}
      <div className="mb-10 flex w-full items-center justify-center">
        <div className="relative">
          <TitleBrush className="reveal-image h-auto w-full" />
          <div className="absolute inset-0 grid place-items-center">
            <h2 className="reveal-title text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Meet the Team
            </h2>
          </div>
        </div>
      </div>
      <p className="reveal-right mx-auto max-w-3xl px-6 text-center text-[#0B2B4A]">
        Join our mission to transform India&apos;s economic landscape and
        empower aspiring entrepreneurs
      </p>

      <div className="mt-12">
        {teamGroups.map((group, gIdx) => (
          <div key={group.title} className="mx-auto mt-12 max-w-6xl px-6">
            <h3 className="reveal-left text-left text-xl font-semibold text-[#1B1B1F] md:text-2xl">
              {group.title}
            </h3>
            <div
              className="mt-6 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              data-reveal-stagger
            >
              {group.members.map((member, mIdx) => (
                <div
                  key={member.name}
                  className={
                    (gIdx + mIdx) % 2 === 0 ? "reveal-left" : "reveal-right"
                  }
                >
                  <ProfileCard {...member} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default TeamSection;
