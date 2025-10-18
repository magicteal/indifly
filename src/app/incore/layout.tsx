import Navbar from "@/components/layout/navbar/Navbar";
import TopBanner from "@/components/layout/TopBanner";

export default function IncoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Fixed TopBanner on all viewports */}
      <div className="fixed top-0 right-0 left-0 z-50 hidden md:block">
        <TopBanner variant="incore" />
      </div>
      <div className="fixed top-16 right-0 left-0 z-50 md:hidden">
        <TopBanner variant="incore" />
      </div>

      <Navbar
        logo={{ href: "/incore", src: "/incorelogo2.png", alt: "inCORE Logo" }}
      />
      <div className="h-24 bg-black md:h-8" />
      <div className="overflow-x-clip">{children}</div>
    </>
  );
}
