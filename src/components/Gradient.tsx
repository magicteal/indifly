import { cn } from "@/lib/utils";
import React from "react";

export type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export function Gradient({
  Cmp,
  className,
  children,
}: {
  Cmp: SvgComponent;
  className?: string;
  children?: React.ReactNode;
}) {
  if (children) {
    return (
      <div className="relative z-10">
        {children}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 z-0 select-none",
            className,
          )}
        >
          <Cmp className="h-auto w-screen max-w-none" />
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 z-0 select-none",
        className,
      )}
    >
      <Cmp className="h-auto w-screen max-w-none" />
    </div>
  );
}
