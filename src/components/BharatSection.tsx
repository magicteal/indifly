// src/components/BharatSection.tsx

import IndiaMap from "./IndiaMap";

const BharatSection = () => {
  return (
    <section className="bg-[#0F172A] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Creating platforms and ecosystems for{" "}
              <span className="text-[#F56522]">mission-driven founders</span>{" "}
              that cultivate brands bringing about{" "}
              <span className="text-[#F56522]">digital inclusion</span> and{" "}
              <span className="text-[#F56522]">transformative growth</span> in
              the emerging regions of {/* Corrected Gradient for "Bharat" */}
              <span className="bg-gradient-to-r from-[#F56522] to-[#86EFAC] text-transparent bg-clip-text">
                Bharat.
              </span>
            </h2>
            {/* Corrected Sub-heading */}
            <p className="mt-8 text-lg italic text-gray-300">
              For the people, to the people, and by the people to build a
              brighter,{" "}
              <span className="text-[#F56522]">more equitable future.</span>
            </p>
          </div>

          {/* Map */}
          <div className="md:w-1/2 flex justify-center">
            <IndiaMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BharatSection;
