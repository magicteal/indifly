const Hero = () => {
  return (
    // Portrait on mobile with equal black bars top/bottom; switches back to 16:9 on md+
    <div className="relative aspect-[9/16] w-full overflow-hidden bg-black sm:aspect-[16/9]">
      {/* Video Background */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};

export default Hero;
