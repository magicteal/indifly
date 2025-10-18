"use client";

import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
};

const posts: Blog[] = [
  {
    id: 1,
    title: "Scaling CXOs: Lessons from the field",
    excerpt:
      "How embedded leadership models drive outcomes across growth, product, and operations.",
    image: "/home/blog.png",
  },
  {
    id: 2,
    title: "Shipping faster without breaking things",
    excerpt:
      "Release velocity frameworks and guardrails we use to accelerate delivery.",
    image: "/home/blog.png",
  },
  {
    id: 3,
    title: "Finding PMF with fewer cycles",
    excerpt:
      "Tightly scoped experiments and data loops to validate demand and pricing.",
    image: "/home/blog.png",
  },
];

export default function IncoreINDsightsSection() {
  return (
    <Section
      className="relative overflow-hidden py-16 md:py-24"
      id="about-indifly-ventures"
    >
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
        className="pointer-events-none absolute top-16 right-[-10px] z-0"
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
        className="pointer-events-none absolute right-[-10px] bottom-0 z-0"
        aria-hidden="true"
      >
        <svg
          width="300"
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

      <SectionHeader title="INDsights" />

      <div
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        data-reveal-stagger
      >
        {posts.map((p) => (
          <Card
            key={p.id}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#133258] shadow-[0_8px_40px_rgba(2,10,30,0.25)]"
          >
            {/* Decorative SVGs behind content */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
              {/* top-left complex shape */}
              <svg
                className="absolute -top-6 -left-8 scale-75"
                width="220"
                height="208"
                viewBox="0 0 431 409"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <g opacity="0.25">
                  <path
                    d="M234.589 -88.4803L183.897 138.302L-37.8516 207.794L12.8414 -18.9909L234.589 -88.4803Z"
                    stroke="#1E4D88"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M234.59 -88.4799L183.898 138.302L354.95 295.597L405.643 68.8116L234.59 -88.4799Z"
                    stroke="#1E4D88"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52.6293 179.439L82.6379 45.1892L213.905 4.05253L315.164 97.1654L285.156 231.415L153.888 272.552L52.6293 179.439Z"
                    fill="#0B2B4A"
                  />
                  <path
                    d="M-37.8531 207.795L12.8398 -18.9907L234.588 -88.4801L405.641 68.8115L354.948 295.597L133.203 365.087L-37.8531 207.795Z"
                    stroke="#1E4D88"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8422 -18.9906L183.898 138.302L405.643 68.8115L234.59 -88.48L12.8422 -18.9906Z"
                    stroke="#1E4D88"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M183.896 138.302L133.203 365.087L354.948 295.597L405.641 68.8115L183.896 138.302Z"
                    stroke="#1E4D88"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              {/* right ring */}
              <svg
                className="absolute -right-3 bottom-2"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <circle
                  cx="60"
                  cy="60"
                  r="58"
                  stroke="#1E4D88"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <CardContent className="relative z-10 flex h-full flex-col p-6">
              <h3 className="text-2xl font-extrabold text-white">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                {p.excerpt}
              </p>
              <div className="mt-4 overflow-hidden rounded-xl">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={640}
                  height={360}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className={cn(
                    "w-full rounded-full border bg-transparent px-6 py-3 md:w-auto",
                    "border-[#006FFF] bg-clip-text text-transparent",
                    "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
                    "bg-[linear-gradient(90deg,#006FFF_0%,#8EC0FF_100%)] hover:bg-white/5",
                  )}
                >
                  Read more{" "}
                  <span aria-hidden className="ml-2">
                    →
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
