"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function FooterImage() {
  const pathname = usePathname();

  // domain.com/incore -> logoVariant="incore"
  // domain.com/ -> logoVariant="default"
  // domain.com/any-other-page -> logoVariant="light"

  let logoVariant = "light";
  if (pathname === "/") {
    logoVariant = "default";
  } else if (pathname.startsWith("/incore")) {
    logoVariant = "incore";
  }

  return (
    <Image
      src={
        logoVariant === "incore"
          ? "/incorelogo2.png"
          : logoVariant === "default"
            ? "/indiflyLogo2.svg"
            : "/indiflyLogo.svg"
      }
      alt={logoVariant === "incore" ? "inCORE" : "IndiFly"}
      width={logoVariant === "incore" ? 240 : 210}
      height={70}
      priority
      className="h-auto w-[210px] md:w-[240px]"
    />
  );
}
