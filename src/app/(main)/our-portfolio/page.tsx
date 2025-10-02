import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Portfolio() {
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
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Navbar logo={mainLogo} />
      
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Discover the innovative companies we&apos;ve invested in and supported
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Portfolio Company 1</h3>
              <p className="text-gray-300 mb-4">
                Description of the portfolio company and their achievements.
              </p>
              <span className="text-orange-400 font-medium">Fintech • Series A</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Portfolio Company 2</h3>
              <p className="text-gray-300 mb-4">
                Description of the portfolio company and their achievements.
              </p>
              <span className="text-orange-400 font-medium">Healthcare • Seed</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Portfolio Company 3</h3>
              <p className="text-gray-300 mb-4">
                Description of the portfolio company and their achievements.
              </p>
              <span className="text-orange-400 font-medium">EdTech • Series B</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}