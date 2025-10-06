import Navbar from "@/components/layout/navbar/Navbar";
import TopBanner from "@/components/layout/TopBanner";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// Footer removed; now added per-page to allow context-specific theming

export const metadata: Metadata = {
  title: {
    default: "inCORE",
    template: "%s | inCORE",
  },
};

export default function IncoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const incoreLogo = (
    <Link href="/incore">
      <Image src="/incorelogo.png" alt="inCORE Logo" width={100} height={40} />
    </Link>
  );

  return (
    <>
      {/* Fixed TopBanner on all viewports */}
      <div className="fixed top-0 right-0 left-0 z-50 hidden md:block">
        <TopBanner variant="incore" />
      </div>
      <div className="fixed top-16 right-0 left-0 z-50 md:hidden">
        <TopBanner variant="incore" />
      </div>

      <Navbar logo={incoreLogo} />
      <div className="h-24 md:h-8" />
      <div className="overflow-x-clip">{children}</div>
    </>
  );
}
