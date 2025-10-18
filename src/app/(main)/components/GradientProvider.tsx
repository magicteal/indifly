import React from "react";

export default function GradientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* blog aboutus */}
      {/* <GradientFrame variant="v1" className="opacity-40" /> */}

      {/* ventures */}
      {/* {(() => {
          const bottomVariantMap: Record<VentureKey, "bottom1" | "bottom2"> = {
            indipe: "bottom1",
            sec2pay: "bottom2",
            indiconnect: "bottom1",
            indikendra: "bottom2",
            indinxt: "bottom1",
            indispeed: "bottom1",
          };
          const variant = bottomVariantMap[venture];
          const Overlay = variant === "bottom1" ? Bottom1 : Bottom2;
          return (
            <div className="pointer-events-none absolute w-[100vw]">
              <Overlay className="h-full w-full" />
            </div>
          );
        })()} */}
      {children}
    </div>
  );
}
