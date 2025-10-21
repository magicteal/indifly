// src/components/IndiaMap.tsx
import indiaMapUrl from "@public/home/india.svg?url";
import Image from "next/image";

const IndiaMap = () => {
  return (
    <div className="relative w-full">
      <Image 
        src={indiaMapUrl as string}
        alt="India Map" 
        width={500}
        height={500}
        className="h-auto w-full"
        priority
        quality={100}
      />

      {/* Blinking Dots */}
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
        <span className="dot" style={{ top: "25%", left: "40%" }}></span>
        <span
          className="dot"
          style={{ top: "50%", left: "50%", animationDelay: "0.5s" }}
        ></span>
        <span
          className="dot"
          style={{ top: "75%", left: "60%", animationDelay: "1s" }}
        ></span>
        <span
          className="dot"
          style={{ top: "30%", left: "75%", animationDelay: "1.5s" }}
        ></span>
        <span
          className="dot"
          style={{ top: "60%", left: "25%", animationDelay: "2s" }}
        ></span>
      </div>
    </div>
  );
};

export default IndiaMap;
