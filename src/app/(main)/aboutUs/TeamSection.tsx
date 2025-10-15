import { teamGroups } from "@/app/(main)/aboutUs/content/team";
import Section from "@/components/section";
import TitleBrush from "@public/home/titieINDsights.svg";
import { ProfileCard } from "./components/ProfileCard";

export function TeamSection() {
  return (
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
  );
}

export default TeamSection;
