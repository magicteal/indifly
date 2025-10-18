// src/components/BharatSection.tsx

import { Section } from "@/components/section";
import IndiaMap from "../../../../components/IndiaMap";

const BharatSection = () => {
  return (
    <Section
      wrapperClassName="relative bg-gradient-to-br from-[#01295C] to-[#004FB3] text-white overflow-hidden"
      className="py-20"
    >
      <div className="relative z-10">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Text Content */}
          <div className="reveal-left text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl leading-tight md:text-3xl">
              We create platforms and ecosystems for{" "}
              <span className="bg-gradient-to-r from-[#E5BA9F] to-[#FFFFFF] bg-clip-text text-transparent">
                mission-driven founders
              </span>{" "}
              that cultivate brands bringing about digital inclusion and
              transformative growth in the emerging regions of
              <br />
              <span className="bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] bg-clip-text text-6xl font-bold text-transparent">
                Bharat.
              </span>
            </h2>
            {/* Corrected Sub-heading */}
            <p className="mt-8 text-4xl md:text-3xl">
              We are a venture builder co-creating alongside founders in their
              journey{" "}
              <span className="font-semibold">from idea to industry</span> and{" "}
              <span className="font-semibold">beyond.</span>
            </p>
          </div>

          {/* Map */}
          <div className="reveal-right flex justify-center md:w-1/2">
            <IndiaMap />
          </div>
        </div>
      </div>
      {/* Half Circles */}
      <div className="absolute -bottom-24 -left-24">
        <svg
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="125"
            cy="125"
            r="124"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="absolute -right-24 -bottom-24">
        <svg
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="125"
            cy="125"
            r="124"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        </svg>
      </div>
    </Section>
  );
};

export default BharatSection;
