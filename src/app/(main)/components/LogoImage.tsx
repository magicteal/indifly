"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type LogoImageProps = {
  variant?: "navbar" | "footer";
  href?: string; // used only by navbar variant
};

export default function LogoImage({ variant, href }: LogoImageProps) {
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

  const footerSrc =
    logoVariant === "incore"
      ? "/incorelogo2.png"
      : logoVariant === "default"
        ? "/indiflyLogo2.svg"
        : "/indiflyLogo.svg";

  const navbarSrc =
    logoVariant === "incore" ? "/incorelogo2.png" : "/indiflyLogo.svg";

  const computedAlt = logoVariant === "incore" ? "inCORE" : "IndiFly";

  if (variant === "navbar") {
    // Navbar expects Link + Image with controllable dimensions
    return (
      <Link
        href={href ?? "/"}
        aria-label={computedAlt}
        className="inline-flex items-center"
      >
        <Image
          src={navbarSrc}
          alt={computedAlt}
          width={100}
          height={40}
          priority
        />
      </Link>
    );
  }

  // Footer/default: just the image with route-aware sizing
  return (
    <Image
      src={footerSrc}
      alt={computedAlt}
      width={logoVariant === "incore" ? 240 : 210}
      height={70}
      priority
      className="h-auto w-[210px] md:w-[240px]"
    />
  );
}
