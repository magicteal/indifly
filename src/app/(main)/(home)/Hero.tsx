const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-in-a-van-4675-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Building <span className="text-[#F56522]">Ventures,</span> Building{" "}
          <span className="text-[#F56522]">Nation.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl">
          Empowering the youth, individuals, and businesses with{" "}
          <span className="text-[#F56522]">digitally inclusive solutions</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
