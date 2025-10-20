import { Section } from "@/components/section";
// SVGs as React components via SVGR
import Circle from "@public/home/circle.svg";
import Hexagon from "@public/home/hexagon.svg";
import Silhoutte from "@public/home/silhoutte.svg";
import TitleBg from "@public/home/titilebg.svg";

export default function ImpactOnBharat() {
  const stats = [
    { value: "7+", label: "Companies" },
    { value: "3L+", label: "Partners" },
    { value: "1.26Cr+", label: "Customers" },
  ];

  return (
    <Section
      wrapperClassName="relative overflow-hidden"
      className="mt-24 py-24"
      // exact background per spec
      style={{
        background: "linear-gradient(95.65deg, #E04A00 29.81%, #FF915C 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none select-none">
        <Hexagon className="absolute -top-8 left-4 w-[180px] animate-pulse opacity-30 md:w-[240px]" />
        <Circle className="absolute top-20 right-16 h-6 w-6 animate-bounce opacity-30" />
        <Circle className="absolute right-40 bottom-24 h-6 w-6 animate-bounce opacity-20" />
      </div>

      {/* Title Section */}
      <div className="reveal-title relative z-10 mb-18 text-center">
        <div className="relative isolate inline-block px-6">
          {/* Brush stroke background */}
          <TitleBg
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <h2 className="relative z-10 text-3xl font-extrabold text-[#F56522] md:text-4xl">
            Impact on <span className="italic">Bharat</span>
          </h2>
        </div>
      </div>

      {/* Stats Cards */}
      <div
        className="relative z-20 mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3"
        data-reveal-stagger
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative rounded-[24px] border-2 border-solid border-red-800 bg-[#FFFFFF4D] p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFFFFF66]"
            style={{
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              // borderImageSource:
              //   "linear-gradient(297.05deg, rgba(255, 255, 255, 0.8) 14.79%, rgba(255, 183, 148, 0.8) 88.65%)",
              // borderImageSlice: 1,
              // borderStyle: "solid",
              // borderWidth: 2,
            }}
          >
            <div className="space-y-4">
              <h3 className="text-5xl font-extrabold text-white drop-shadow-sm md:text-6xl">
                {stat.value}
              </h3>
              <p className="text-lg font-medium tracking-wide text-white/90 md:text-xl">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom cityscape silhouette */}
      <Silhoutte className="pointer-events-none absolute bottom-0 left-1/2 z-10 -translate-x-1/2 select-none" />
    </Section>
  );
}
