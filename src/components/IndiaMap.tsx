// src/components/IndiaMap.tsx
import indiaMapUrl from "@public/home/india.svg?url";
import Image from "next/image";

const IndiaMap = () => {
  return (
    <div className="relative w-full overflow-hidden">
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
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full [--dot-shadow:0_0_8px_#f56522,_0_0_16px_#f56522] [--dot-size:10px] md:[--dot-shadow:0_0_12px_#f56522,_0_0_24px_#f56522] md:[--dot-size:16px]">
        <span
          className="dot"
          style={{
            top: "18%",
            left: "35%",
            width: "var(--dot-size)",
            height: "var(--dot-size)",
            boxShadow: "var(--dot-shadow)",
          }}
        ></span>
        <span
          className="dot"
          style={{
            top: "32%",
            left: "45%",
            width: "var(--dot-size)",
            height: "var(--dot-size)",
            animationDelay: "0.5s",
            boxShadow: "var(--dot-shadow)",
          }}
        ></span>
        <span
          className="dot"
          style={{
            top: "37%",
            left: "30%",
            width: "var(--dot-size)",
            height: "var(--dot-size)",
            animationDelay: "0.5s",
            boxShadow: "var(--dot-shadow)",
          }}
        ></span>
        <span
          className="dot"
          style={{
            top: "55%",
            left: "36%",
            width: "var(--dot-size)",
            height: "var(--dot-size)",
            animationDelay: "1s",
            boxShadow: "var(--dot-shadow)",
          }}
        ></span>
        <span
          className="dot"
          style={{
            top: "79%",
            left: "42%",
            width: "var(--dot-size)",
            height: "var(--dot-size)",
            animationDelay: "1.5s",
            boxShadow: "var(--dot-shadow)",
          }}
        ></span>
        <span
          className="dot"
          style={{
            top: "50%",
            left: "66%",
            width: "var(--dot-size)",
            height: "var(--dot-size)",
            animationDelay: "2s",
            boxShadow: "var(--dot-shadow)",
          }}
        ></span>
      </div>
    </div>
  );
};

export default IndiaMap;
