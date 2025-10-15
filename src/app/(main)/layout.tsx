import Navbar from "@/components/layout/navbar/Navbar";
import TopBanner from "@/components/layout/TopBanner";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
      <Navbar
        logo={{ href: "/", src: "/indiflyLogo.svg", alt: "Indifly Logo" }}
      />
      {children}
    </>
  );
}
