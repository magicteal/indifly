import Hero from "@/components/Hero";
import VenturesGrid from "@/components/VenturesGrid";
import BharatSection from "@/components/BharatSection"; // Import kiya

import SectorsSection from "@/components/SectorsSection";

export default function Home() {
  

  return (
    <main>
      <Hero />
      <VenturesGrid />
      <BharatSection />
      <SectorsSection />
    </main>
  );
}
