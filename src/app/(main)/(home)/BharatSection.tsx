// src/components/BharatSection.tsx

import { Section } from "@/components/ui/section";
import IndiaMap from "../../../components/IndiaMap";

const BharatSection = () => {
  return (
    <Section
      wrapperClassName="relative bg-gradient-to-br from-[#01295C] to-[#004FB3] text-white overflow-hidden"
      className="py-20"
    >
      <div className="relative z-10">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Text Content */}
          <div className="text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl leading-tight font-bold md:text-3xl">
              Creating platforms and ecosystems for{" "}
              <span className="text-[#F56522]">mission-driven founders</span>{" "}
              that cultivate brands bringing about{" "}
              <span className="text-[#F56522]">digital inclusion</span> and{" "}
              <span className="text-[#F56522]">transformative growth</span> in
              the emerging regions of {/* Corrected Gradient for "Bharat" */}
              <span className="bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] bg-clip-text text-6xl text-transparent">
                Bharat.
              </span>
            </h2>
            {/* Corrected Sub-heading */}
            <p className="mt-8 text-4xl leading-tight font-bold md:text-3xl">
              For the people, to the people, and by the people to build a
              brighter,{" "}
              <span className="text-[#F56522]">more equitable future.</span>
            </p>
          </div>

          {/* Map */}
          <div className="flex justify-center md:w-1/2">
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
