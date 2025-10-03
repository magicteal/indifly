import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

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

      <div className="px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-center text-5xl font-bold text-white">
            Our Portfolio
          </h1>
          <p className="mb-12 text-center text-xl text-gray-300">
            Discover the innovative companies we&apos;ve invested in and
            supported
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Portfolio Company 1
              </h3>
              <p className="mb-4 text-gray-300">
                Description of the portfolio company and their achievements.
              </p>
              <span className="font-medium text-orange-400">
                Fintech • Series A
              </span>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Portfolio Company 2
              </h3>
              <p className="mb-4 text-gray-300">
                Description of the portfolio company and their achievements.
              </p>
              <span className="font-medium text-orange-400">
                Healthcare • Seed
              </span>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Portfolio Company 3
              </h3>
              <p className="mb-4 text-gray-300">
                Description of the portfolio company and their achievements.
              </p>
              <span className="font-medium text-orange-400">
                EdTech • Series B
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
