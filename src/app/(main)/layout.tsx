import { Footer } from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import TopBanner from "./components/TopBanner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 hidden md:block">
        <TopBanner />
      </div>
      <div className="fixed top-16 right-0 left-0 z-50 md:hidden">
        <TopBanner />
      </div>
      <div className="h-24 md:h-8 theme-incore:bg-black theme-incore-services:bg-black" />
      <Navbar />
      <div className="overflow-x-clip">
        {children}
        <Footer />
      </div>
    </>
  );
}
