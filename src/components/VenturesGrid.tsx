import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const VenturesGrid = () => {
  return (
    <div className="relative bg-[#0F172A] -mt-32 pt-40 pb-20">
      <Container>
        {/* Bento Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-[500px]">
          {/* Card 1: Our Ventures (Spanning 2x2) */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-[#F6EFE9] p-8 rounded-2xl flex flex-col justify-between text-black shadow-lg">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Our
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mt-1">Ventures</h2>
              <p className="text-gray-700 mt-4 text-base max-w-md">
                Empowering individuals with secure, user-friendly financial
                tools.
              </p>
              <Link href="/ventures">
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors">
                  Know More <span aria-hidden="true">→</span>
                </button>
              </Link>
            </div>
            <div className="self-end -mb-8">
              <Image
                src="/VenturesGridMan.svg"
                alt="Man in blue shirt"
                width={280}
                height={280}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Card 2: inCORE */}
          <div className="bg-[#F56522] p-8 rounded-2xl flex items-center justify-center shadow-lg">
            <Image
              src="/incore-logo.svg"
              alt="inCORE Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Card 3: INDsights */}
          <div className="bg-blue-600 p-8 rounded-2xl flex items-center justify-center shadow-lg">
            <h3 className="text-white text-3xl font-bold tracking-tight">
              INDsights
            </h3>
          </div>

          {/* Card 4: Become our Partner */}
          <div className="bg-blue-200/50 backdrop-blur-md p-8 rounded-2xl flex items-center justify-center text-center shadow-lg">
            <Link
              href="/partner"
              className="text-white text-3xl font-bold leading-snug hover:text-blue-300 transition-colors"
            >
              Become our <br /> <span className="text-blue-400">Partner →</span>
            </Link>
          </div>

          {/* Card 5: Get in Touch */}
          <div className="bg-[#F6EFE9] p-8 rounded-2xl flex items-center justify-center text-center shadow-lg">
            <Link
              href="/contact"
              className="text-black text-3xl font-bold leading-snug hover:text-[#F56522] transition-colors"
            >
              Get in <br /> <span className="text-[#F56522]">Touch →</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VenturesGrid;
