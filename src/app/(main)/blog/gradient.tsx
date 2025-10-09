"use client";

import { cn } from "@/lib/utils";

type GradientFrameProps = {
  className?: string;
  variant?: "v1" | "v2";
};

export default function GradientFrame({
  className,
  variant = "v1",
}: GradientFrameProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      {variant === "v1" && (
        <>
          <div className="absolute top-20 left-20 h-[193px] w-[425px] rounded-full bg-[#FFF4CC] blur-[187px]" />
          <div className="absolute top-40 left-1/3 h-[372px] w-[1056px] rounded-full bg-[#D15A31] blur-[187px]" />
          <div className="absolute top-60 left-1/4 h-[280px] w-[481px] rounded-full bg-[#FF0000] blur-[187px]" />
          <div className="absolute top-96 left-1/2 h-[274px] w-[676px] rounded-full bg-[#FF990B] blur-[187px]" />
          <div className="absolute top-[32rem] left-1/5 h-[275px] w-[481px] rounded-full bg-[#FF990B] blur-[187px]" />
          <div className="absolute top-[40rem] left-2/3 h-[262px] w-[663px] rounded-full bg-[#C44100] blur-[187px]" />
        </>
      )}

      {variant === "v2" && (
        <>
          {/* Variant 2 based on your rotated group */}
          <div className="absolute top-[10%] left-[15%] h-[193px] w-[425px] rotate-180 rounded-full bg-[#FFF4CC] opacity-70 blur-[180px]" />
          <div className="absolute top-[30%] left-[25%] h-[372px] w-[1056px] rotate-180 rounded-full bg-[#D15A31] opacity-65 blur-[200px]" />
          <div className="absolute top-[50%] left-[40%] h-[280px] w-[481px] rotate-180 rounded-full bg-[#FF0000] opacity-60 blur-[180px]" />
          <div className="absolute top-[60%] left-[55%] h-[274px] w-[676px] rotate-180 rounded-full bg-[#FF990B] opacity-55 blur-[200px]" />
          <div className="absolute top-[70%] left-[20%] h-[275px] w-[481px] rotate-180 rounded-full bg-[#FF990B] opacity-50 blur-[200px]" />
          <div className="absolute top-[80%] left-[65%] h-[262px] w-[663px] rotate-180 rounded-full bg-[#C44100] opacity-50 blur-[200px]" />
        </>
      )}
    </div>
  );
}
