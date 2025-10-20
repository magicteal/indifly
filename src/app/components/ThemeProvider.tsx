"use client";
import { usePathname } from "next/navigation";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // domain.com/any-other-page -> theme=""
  // domain.com/ -> theme="theme-default"

  // domain.com/ventures/sec2pay -> theme="theme-blue"
  // domain.com/ventures/indikendra -> theme="theme-blue"
  // domain.com/ventures/indispeed -> theme="theme-yellow"
  // domain.com/ventures/:other -> theme="theme-orange"

  // domain.com/incore -> theme="theme-incore"
  // domain.com/incore/services/:service -> theme="theme-incore-services theme-:service"

  let theme = "";
  if (pathname === "/") {
    theme = "theme-home";
  } else if (pathname === "/incore") {
    theme = "theme-incore";
  } else if (pathname.startsWith("/incore/services/")) {
    theme = "theme-incore-services";
    const service = pathname.split("/")[3];
    theme += ` theme-${service}`;
  } else if (pathname.startsWith("/ventures/")) {
    const venture = pathname.split("/")[2];
    if (venture === "sec2pay") {
      theme = "theme-blue";
    } else if (venture === "indikendra") {
      theme = "theme-blue";
    } else if (venture === "indispeed") {
      theme = "theme-yellow";
    } else {
      theme = "theme-orange";
    }
  }

  return (
    <div className={`${theme} bg-background text-foreground`}>{children}</div>
  );
}
