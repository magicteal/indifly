import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export default function InCorePage() {
  return (
    <main className="min-h-[80vh] bg-[#001631] flex items-center justify-center py-24 md:py-36 ">
      <Container size="2xl" className="text-center">
   
        <h1 className={cn("font-sans text-3xl md:text-5xl font-semibold text-white")}> 
          Integrated expertise for 
          <span className="font-bold"> startup success</span>
        </h1>

        <div className="mt-8 flex justify-center">
          <Image
            src="/incorehero2.png"
            alt="inCORE hero"
            width={900}
            height={500}
            className="w-full max-w-2xl h-auto"
            priority
          />
        </div>

    
          <Link href="/incore/services" className="inline-block">
            <span
              className={cn(
                "px-6 py-3 rounded-full text-white font-medium",
                "[background:linear-gradient(90deg,#0252D4_0%,#86BBFE_100%)]",
                "hover:opacity-95 transition-opacity"
              )}
            >
              Explore Our Services
            </span>
          </Link>
        
      
      </Container>
    </main>
  );
}