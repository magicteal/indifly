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
        "absolute inset-0 z-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {variant === "v1" && (
        <>
           <div className="absolute w-[425px] h-[193px] bg-[#FFF4CC] rounded-full blur-[187px] top-20 left-20" />
      <div className="absolute w-[1056px] h-[372px] bg-[#D15A31] rounded-full blur-[187px] top-40 left-1/3" />
      <div className="absolute w-[481px] h-[280px] bg-[#FF0000] rounded-full blur-[187px] top-60 left-1/4" />
      <div className="absolute w-[676px] h-[274px] bg-[#FF990B] rounded-full blur-[187px] top-96 left-1/2" />
      <div className="absolute w-[481px] h-[275px] bg-[#FF990B] rounded-full blur-[187px] top-[32rem] left-1/5" />
      <div className="absolute w-[663px] h-[262px] bg-[#C44100] rounded-full blur-[187px] top-[40rem] left-2/3" />
        </>
      )}

      {variant === "v2" && (
        <>
          {/* Variant 2 based on your rotated group */}
          <div className="absolute w-[425px] h-[193px] bg-[#FFF4CC] rounded-full blur-[180px] top-[10%] left-[15%] opacity-70 rotate-180" />
          <div className="absolute w-[1056px] h-[372px] bg-[#D15A31] rounded-full blur-[200px] top-[30%] left-[25%] opacity-65 rotate-180" />
          <div className="absolute w-[481px] h-[280px] bg-[#FF0000] rounded-full blur-[180px] top-[50%] left-[40%] opacity-60 rotate-180" />
          <div className="absolute w-[676px] h-[274px] bg-[#FF990B] rounded-full blur-[200px] top-[60%] left-[55%] opacity-55 rotate-180" />
          <div className="absolute w-[481px] h-[275px] bg-[#FF990B] rounded-full blur-[200px] top-[70%] left-[20%] opacity-50 rotate-180" />
          <div className="absolute w-[663px] h-[262px] bg-[#C44100] rounded-full blur-[200px] top-[80%] left-[65%] opacity-50 rotate-180" />
        </>
      )}
    </div>
  );
}
