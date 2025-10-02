import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";

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
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <TopBanner variant="incore" />
      </div>
      <div className="md:hidden fixed top-16 left-0 right-0 z-50">
        <TopBanner variant="incore" />
      </div>
      
      <Navbar logo={incoreLogo} />

      {children}
    </>
  );
}