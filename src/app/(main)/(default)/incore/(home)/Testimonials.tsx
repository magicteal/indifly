"use client";

import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "CEO, TechFlow Solutions",
    image: "/testimonials/rajesh.png",
    feedback:
      "inCORE transformed our startup journey. Their integrated approach saved us months of trial and error. The team truly becomes part of your vision.",
  },
  {
    name: "Priya Sharma",
    title: "Founder, HealthTech Innovations",
    image: "/testimonials/priya.png",
    feedback:
      "The expertise across all domains is unmatched. From tech architecture to legal compliance, inCORE provided exactly what we needed at each stage.",
  },
  {
    name: "Amit Patel",
    title: "CTO, FinanceFirst",
    image: "/testimonials/amit.png",
    feedback:
      "Working with inCORE felt like having a co-founder with superpowers. Their collaborative approach and deep expertise accelerated our growth significantly.",
  },
  {
    name: "Sneha Reddy",
    title: "VP Growth, EduTech Pro",
    image: "/testimonials/sneha.png",
    feedback:
      "The playbooks and tools provided by inCORE are game-changers. We've implemented their strategies across our entire organization.",
  },
];

export default function Testimonials() {
  return (
    <Section className="relative py-20">
      {/* Decorative SVGs behind header */}
      <div
        className="pointer-events-none absolute top-6 -left-4 z-0 md:top-24 md:-left-6"
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
        className="pointer-events-none absolute top-auto right-4 bottom-[-7] z-0 md:top-10 md:right-6 md:bottom-auto"
        aria-hidden="true"
      >
        <svg
          width="200"
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

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="flex flex-col items-start rounded-xl border border-white/20 bg-[#2C4566] p-6 shadow-md"
          >
            <CardContent className="flex w-full flex-col items-stretch gap-4 text-left">
              {/* Header row: left image (square) and right name/title */}
              <div className="flex w-full items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg leading-tight font-semibold text-white">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>

              {/* Star rating */}
              <div className="mb-4 flex justify-start gap-1 rounded-xl bg-[#0A2240] px-7 py-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-sm leading-relaxed text-gray-300">
                &quot;{t.feedback}&quot;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
