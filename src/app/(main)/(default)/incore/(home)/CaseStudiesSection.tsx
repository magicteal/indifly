// components/CaseStudies.tsx
"use client";

import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";

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
    <Section className="relative overflow-hidden py-20">
      {/* Decorative SVGs behind header */}
      <div
        className="pointer-events-none absolute top-6 -left-4 z-0 md:top-10 md:-left-6"
        aria-hidden="true"
      >
        <svg
          width="240"
          height="228"
          viewBox="0 0 431 409"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <path
              d="M234.589 -88.4803L183.897 138.302L-37.8516 207.794L12.8414 -18.9909L234.589 -88.4803Z"
              stroke="#154583"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M234.59 -88.4799L183.898 138.302L354.95 295.597L405.643 68.8116L234.59 -88.4799Z"
              stroke="#154583"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M52.6293 179.439L82.6379 45.1892L213.905 4.05253L315.164 97.1654L285.156 231.415L153.888 272.552L52.6293 179.439Z"
              fill="#073167"
            />
            <path
              d="M-37.8531 207.795L12.8398 -18.9907L234.588 -88.4801L405.641 68.8115L354.948 295.597L133.203 365.087L-37.8531 207.795Z"
              stroke="#154583"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M12.8422 -18.9906L183.898 138.302L405.643 68.8115L234.59 -88.48L12.8422 -18.9906Z"
              stroke="#154583"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M183.896 138.302L133.203 365.087L354.948 295.597L405.641 68.8115L183.896 138.302Z"
              stroke="#154583"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <div
        className="pointer-events-none absolute top-20 right-48 z-0"
        aria-hidden="true"
      >
        <svg
          width="30"
          height="100"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="58"
            stroke="#154583"
            strokeOpacity="0.25"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute top-16 right-[-10] z-0"
        aria-hidden="true"
      >
        <svg
          width="50"
          height="100"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="58"
            stroke="#154583"
            strokeOpacity="0.25"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute top-48 right-8 z-0"
        aria-hidden="true"
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="58"
            stroke="#154583"
            strokeOpacity="0.25"
            strokeWidth="2"
          />
        </svg>
      </div>

  <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
        {caseStudies.map((study, i) => (
          <Card
            key={i}
            className="relative overflow-hidden rounded-xl border border-[#9AC1FF]/50 shadow-lg transition hover:shadow-xl"
          >
            {/* Soft translucent gradient background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#9AC1FF_100%)] opacity-30" />
            <CardContent
              className={`relative z-10 flex h-full flex-col items-center p-8 text-center`}
              data-reveal-stagger
            >
              <h3
                className={`text-2xl font-bold md:text-3xl ${
                  i % 2 === 0 ? "reveal-left" : "reveal-right"
                }`}
              >
                {study.title}
              </h3>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  i % 2 === 0 ? "reveal-right" : "reveal-left"
                }`}
              >
                {study.description}
              </p>
              <span
                className={`mt-6 font-bold tracking-wide ${
                  i % 2 === 0 ? "reveal-left" : "reveal-right"
                }`}
              >
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
