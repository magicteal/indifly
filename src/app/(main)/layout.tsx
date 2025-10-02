import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";

export const metadata: Metadata = {
  title: {
    default: "Indifly",
    template: "%s | Indifly",
  },
};

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const mainLogo = (
    <Link href="/">
      <Image src="/indiflyLogo.svg" alt="Indifly Logo" width={100} height={40} />
    </Link>
  );

  return (
    <>
      {/* Fixed TopBanner on all viewports */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <TopBanner />
      </div>
      <div className="md:hidden fixed top-16 left-0 right-0 z-50">
        <TopBanner />
      </div>
      {/* Add spacer to account for fixed banner + fixed navbar heights */}
      <div className="h-24 md:h-8" />
      <Navbar logo={mainLogo} />
      {children}
    </>
  );
}