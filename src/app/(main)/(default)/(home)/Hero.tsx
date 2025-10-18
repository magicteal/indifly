import Image from "next/image";

import VenturesGrid from "./VenturesGrid";
import heroBgUrl from "@public/home/heroBg.svg?url";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#07172C]">
      <Image
        src={heroBgUrl as string}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
        aria-hidden
      />

      <div className="relative mx-auto w-full px-0 ">
        {/* Portrait on mobile with equal bars top/bottom; switches back to 16:9 on md+ */}
  <div className="relative aspect-[9/16] w-full overflow-hidden sm:aspect-[16/9] reveal-image">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 z-0 h-full w-full object-cover"
          >
            <source src="/home/heroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40" aria-hidden></div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#07172C]/40 to-[#07172C]"
            aria-hidden
          ></div>
        </div>
      </div>

      <div className="-mt-20 md:-mt-28 reveal-section">
        <VenturesGrid embedded />
      </div>
    </section>
  );
};

export default Hero;
