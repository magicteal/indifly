import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import VenturesGrid from "@/components/VenturesGrid";
import BharatSection from "@/components/BharatSection"; // Import kiya
import Link from "next/link";
import Image from "next/image";
import SectorsSection from "@/components/SectorsSection";

export default function Home() {
  const mainNavItems = [
    { href: "/our-portfolio", label: "Our Portfolio" },
    { href: "/incore", label: "inCORE" },
    { href: "/insights", label: "INDsights" },
    { href: "/about-us", label: "About us" },
    { href: "/get-in-touch", label: "Get in Touch" },
  ];

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
    <main>
      
      <Hero>
        <Navbar logo={mainLogo} navItems={mainNavItems} />
      </Hero>
      <VenturesGrid />
      <BharatSection /> {/* Yahan add kiya */}
      <SectorsSection />
      {/* Baaki ke sections yahan aayenge */}
    </main>
  );
}
