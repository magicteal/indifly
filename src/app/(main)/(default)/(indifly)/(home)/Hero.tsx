import VenturesGrid from "./VenturesGrid";

const Hero = () => {
  return (
    <section className="bg-[#07172C]">
      {/* Portrait on mobile with equal bars top/bottom; switches back to 16:9 on md+ */}
      <div className="reveal-image relative aspect-[9/16] w-full overflow-hidden bg-black sm:aspect-[16/9]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-contain object-center"
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

      <div className="reveal-section -mt-20 md:-mt-28">
        <VenturesGrid />
      </div>
    </section>
  );
};

export default Hero;
