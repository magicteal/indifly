import Navbar from "@/components/layout/navbar/Navbar";
import TopBanner from "@/components/layout/TopBanner";
import Image from "next/image";
import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const mainLogo = (
    <Link href="/">
      <Image
        src="/indiflyLogo.svg"
        alt="Indifly Logo"
        width={100}
        height={40}
      />
    </Link>
  );

  return (
    <>
      {/* Fixed TopBanner on all viewports */}
      <div className="fixed top-0 right-0 left-0 z-50 hidden md:block">
        <TopBanner />
      </div>
      <div className="fixed top-16 right-0 left-0 z-50 md:hidden">
        <TopBanner />
      </div>
      {/* Add spacer to account for fixed banner + fixed navbar heights */}
      <div className="h-24 md:h-8" />
      <Navbar logo={mainLogo} />
      {children}
    </>
  );
}
