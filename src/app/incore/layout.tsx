import Navbar from "@/app/components/navbar/Navbar";
import TopBanner from "@/app/components/TopBanner";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";

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
      {children}
      <Footer />
    </>
  );
}
