// components/CaseStudies.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

const caseStudies = [
  {
    title: "+300%",
    description:
      "Growth achieved for fintech startup through integrated marketing and product optimization",
    tag: { prefix: "in", suffix: "SURGE", color: "text-[#FF990B]" },
  },
  {
    title: "6 Weeks",
    description:
      "Complete tech stack revamp and modernization for e-commerce platform",
    tag: { prefix: "in", suffix: "STACK", color: "text-[#8338EC]" },
  },
  {
    title: "100+ Hires",
    description:
      "Team scaling and culture building for rapidly growing SaaS company",
    tag: { prefix: "in", suffix: "VOLVE", color: "text-[#3A86FF]" },
  },
  {
    title: "Zero Issues",
    description:
      "Seamless regulatory compliance setup for healthcare technology startup",
    tag: { prefix: "in", suffix: "SURE", color: "text-[#04E762]" },
  },
  {
    title: "5x ROI",
    description:
      "Marketing campaign optimization resulting in exceptional return on investment",
    tag: { prefix: "in", suffix: "SURGE", color: "text-[#FF990B]" },
  },
  {
    title: "24x7",
    description:
      "Continuous support and monitoring for mission-critical applications",
    tag: { prefix: "in", suffix: "STACK", color: "text-[#8338EC]" },
  },
];

export default function CaseStudies() {
  return (
    <Section className="py-20 relative overflow-hidden">
      {/* Decorative SVGs behind header */}
      <div className="pointer-events-none absolute top-6 -left-4 md:top-10 md:-left-6 z-0" aria-hidden="true">
        <svg width="240" height="228" viewBox="0 0 431 409" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <path d="M234.589 -88.4803L183.897 138.302L-37.8516 207.794L12.8414 -18.9909L234.589 -88.4803Z" stroke="#154583" strokeMiterlimit="10" strokeLinejoin="round"/>
            <path d="M234.59 -88.4799L183.898 138.302L354.95 295.597L405.643 68.8116L234.59 -88.4799Z" stroke="#154583" strokeMiterlimit="10" strokeLinejoin="round"/>
            <path d="M52.6293 179.439L82.6379 45.1892L213.905 4.05253L315.164 97.1654L285.156 231.415L153.888 272.552L52.6293 179.439Z" fill="#073167"/>
            <path d="M-37.8531 207.795L12.8398 -18.9907L234.588 -88.4801L405.641 68.8115L354.948 295.597L133.203 365.087L-37.8531 207.795Z" stroke="#154583" strokeMiterlimit="10" strokeLinejoin="round"/>
            <path d="M12.8422 -18.9906L183.898 138.302L405.643 68.8115L234.59 -88.48L12.8422 -18.9906Z" stroke="#154583" strokeMiterlimit="10" strokeLinejoin="round"/>
            <path d="M183.896 138.302L133.203 365.087L354.948 295.597L405.641 68.8115L183.896 138.302Z" stroke="#154583" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </div>
      <div className="pointer-events-none absolute  right-48 top-20  z-0" aria-hidden="true">
        <svg width="30" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" stroke="#154583" strokeOpacity="0.25" strokeWidth="2" />
        </svg>
      </div>
      <div className="pointer-events-none absolute  right-[-10] top-16  z-0" aria-hidden="true">
        <svg width="50" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" stroke="#154583" strokeOpacity="0.25" strokeWidth="2" />
        </svg>
      </div>
      <div className="pointer-events-none absolute  right-8 top-48  z-0" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" stroke="#154583" strokeOpacity="0.25" strokeWidth="2" />
        </svg>
      </div>
      <SectionHeader title="Case Studies"  />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Card
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition border border-[#9AC1FF]/50"
          >
            {/* Soft translucent gradient background */}
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(180deg,#FFFFFF_0%,#9AC1FF_100%)]" />
            <CardContent className="relative z-10 p-8 flex flex-col items-center text-center h-full">
              <h3 className="text-2xl md:text-3xl font-bold ">
                {study.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed">
                {study.description}
              </p>
              <span className="mt-6 font-bold tracking-wide">
                <span className="">{study.tag.prefix}</span>
                <span className={study.tag.color}>{study.tag.suffix}</span>
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}