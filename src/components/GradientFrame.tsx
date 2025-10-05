import { ServiceType } from "@/lib/serviceContext";
import React from "react";

type Blob = {
  // CSS color string
  color: string;
  // positioning relative to container, accept Tailwind-like classes or inline styles
  style?: React.CSSProperties;
  // optional size
  width?: string | number;
  height?: string | number;
  // optional border radius
  borderRadius?: string;
  // optional blur value
  blur?: string;
  // zIndex
  z?: number;
};

type GradientFrameProps = {
  className?: string;
  // overall width/height can be controlled with classes; defaults approximate the figma px dims
  width?: string;
  height?: string;
  blobs?: Blob[];
  // wrapper children
  children?: React.ReactNode;
  // additional class for inner content wrapper
  innerClassName?: string;
  // preset name for common blob layouts (eg. 'instack')
  preset?: ServiceType;
};

export default function GradientFrame({
  className = "",
  width = "full",
  height = "full",
  blobs,
  children,
  innerClassName = "relative z-10",
  preset = "instack",
}: GradientFrameProps) {
  const instackBlobs: Blob[] = [
    // 006FFF above 8D809E but a little right
    {
      color: "#006FFF",
      style: { left: "10%", top: "10%" },
      width: "38%",
      height: "38%",
      borderRadius: "50%",
      blur: "140px",
      z: 10,
    },
    // 3E0C84 at center big rectangle
    {
      color: "#3E0C84",
      style: { left: "50%", top: "50%", transform: "translateX(-50%)" },
      width: "60%",
      height: "40%",
      borderRadius: "24px",
      blur: "120px",
      z: 5,
    },
    // 501EFE right middle
    {
      color: "#501EFE",
      style: { right: "1%", top: "40%" },
      width: "30%",
      height: "28%",
      borderRadius: "24px",
      blur: "100px",
      z: 8,
    },
    // 8338EC center small rectangle
    {
      color: "#8338EC",
      style: { left: "50%", top: "34%", transform: "translateX(-50%)" },
      width: "30%",
      height: "18%",
      borderRadius: "20px",
      blur: "100px",
      z: 12,
    },
    // 8D809E bottom left corner rectangular
    {
      color: "#8D809E",
      style: { left: "1%", bottom: "6%" },
      width: "32%",
      height: "28%",
      borderRadius: "20px",
      blur: "100px",
      z: 3,
    },
    // DCC5FF just above 8D809E to left small rectangle
    {
      color: "#DCC5FF",
      style: { left: "1%", top: "24%" },
      width: "20%",
      height: "12%",
      borderRadius: "16px",
      blur: "80px",
      z: 6,
    },
  ];

  const insurgeBlobs: Blob[] = [
    {
      color: "#006FFF",
      style: { left: "10%", bottom: "6%" },
      width: "36%",
      height: "36%",
      borderRadius: "40px",
      blur: "120px",
      z: 8,
    },
    {
      color: "#FFC700",
      style: { left: "8%", top: "24%" },
      width: "28%",
      height: "32%",
      borderRadius: "20px",
      blur: "120px",
      z: 6,
    },
    {
      color: "#FFA791",
      style: { right: "12%", top: "26%" },
      width: "30%",
      height: "28%",
      borderRadius: "20px",
      blur: "100px",
      z: 9,
    },
    {
      color: "#FFCD52",
      style: { left: "50%", top: "36%", transform: "translateX(-50%)" },
      width: "18%",
      height: "12%",
      borderRadius: "16px",
      blur: "80px",
      z: 12,
    },
    {
      color: "#D7AF0F",
      style: { right: "6%", bottom: "6%" },
      width: "24%",
      height: "24%",
      borderRadius: "20px",
      blur: "100px",
      z: 4,
    },
    {
      color: "#553C00",
      style: { right: "20%", bottom: "10%" },
      width: "10%",
      height: "10%",
      borderRadius: "12px",
      blur: "60px",
      z: 6,
    },
  ];

  const insureBlobs: Blob[] = [
    {
      color: "#131B15",
      style: { left: "6%", bottom: "6%" },
      width: "30%",
      height: "30%",
      borderRadius: "20px",
      blur: "100px",
      z: 4,
    },
    {
      color: "#04E762",
      style: { left: "10%", top: "20%" },
      width: "22%",
      height: "26%",
      borderRadius: "18px",
      blur: "110px",
      z: 9,
    },
    {
      color: "#04E762",
      style: { right: "12%", top: "30%" },
      width: "24%",
      height: "22%",
      borderRadius: "18px",
      blur: "100px",
      z: 8,
    },
    {
      color: "#8338EC",
      style: { left: "50%", top: "36%", transform: "translateX(-50%)" },
      width: "18%",
      height: "12%",
      borderRadius: "16px",
      blur: "90px",
      z: 12,
    },
    {
      color: "#00B59A",
      style: { left: "48%", top: "6%", transform: "translateX(-50%)" },
      width: "30%",
      height: "18%",
      borderRadius: "20px",
      blur: "110px",
      z: 6,
    },
    {
      color: "#553C00",
      style: { left: "2%", top: "6%" },
      width: "12%",
      height: "10%",
      borderRadius: "12px",
      blur: "60px",
      z: 5,
    },
  ];

  const involveBlobs: Blob[] = [
    {
      color: "#006FFF",
      style: { left: "6%", bottom: "6%" },
      width: "30%",
      height: "30%",
      borderRadius: "20px",
      blur: "120px",
      z: 6,
    },
    {
      color: "#04E762",
      style: { left: "12%", top: "20%" },
      width: "22%",
      height: "24%",
      borderRadius: "18px",
      blur: "100px",
      z: 9,
    },
    {
      color: "#8D809E",
      style: { right: "12%", top: "24%" },
      width: "26%",
      height: "26%",
      borderRadius: "20px",
      blur: "110px",
      z: 5,
    },
    {
      color: "#8338EC",
      style: { right: "4%", top: "36%" },
      width: "12%",
      height: "14%",
      borderRadius: "12px",
      blur: "80px",
      z: 11,
    },
    {
      color: "#3A86FF",
      style: { left: "48%", top: "28%", transform: "translateX(-50%)" },
      width: "50%",
      height: "36%",
      borderRadius: "24px",
      blur: "140px",
      z: 4,
    },
    {
      color: "#FFC700",
      style: { right: "6%", bottom: "6%" },
      width: "20%",
      height: "20%",
      borderRadius: "20px",
      blur: "100px",
      z: 7,
    },
  ];

  const renderBlobs = (list: Blob[]) =>
    list.map((b, i) => {
      const w = typeof b.width === "number" ? `${b.width}px` : b.width;
      const h = typeof b.height === "number" ? `${b.height}px` : b.height;
      const style: React.CSSProperties = {
        position: "absolute",
        pointerEvents: "none",
        mixBlendMode: "screen",
        ...b.style,
        width: w,
        height: h,
        borderRadius: b.borderRadius ?? "9999px",
        filter: `blur(${b.blur ?? "60px"})`,
        opacity: 0.95,
        zIndex: b.z ?? 1,
        background: b.color,
      };

      // Use a div with background and heavy blur to create the glow
      return <div key={i} style={style} />;
    });

  const blobsToRender = blobs && blobs.length ? blobs : [];
  // if a preset is provided and blobs were not overridden, map the preset
  const presetBlobs = (() => {
    if (blobs && blobs.length) return blobsToRender;
    switch (preset) {
      case "insurge":
        return insurgeBlobs;
      case "insure":
        return insureBlobs;
      case "involve":
        return involveBlobs;
      case "instack":
      default:
        return instackBlobs;
    }
  })();

  return (
    <div className={`${width} ${height} relative overflow-hidden ${className}`}>
      {/* background blobs layer */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {renderBlobs(presetBlobs)}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%)",
            mixBlendMode: "screen",
            zIndex: 2,
          }}
        />
      </div>

      {/* content wrapper (children will render above the blobs) */}
      <div className={innerClassName}>{children}</div>
    </div>
  );
}
