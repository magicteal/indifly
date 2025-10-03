// src/components/Footer.tsx
import { Container } from "@/components/ui/container";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#01295C] font-sans text-white">
      <div className="relative">
        {/* Big Background Heading */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <h1 className="mt-30 text-[18vw] font-extrabold whitespace-nowrap text-[#021D41] md:text-[10.5vw]">
            Badhna Aasaan Hai
          </h1>
        </div>

        <Container className="relative pt-10 pb-12">
          {/* Centered Footer Links Section */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-16">
              {/* Column 1 */}
              <div>
                <h3 className="mb-4 text-lg font-bold">Home</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      About inCORE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact US
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Customer Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      About IndiFly
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="mb-4 text-lg font-bold">inCore</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      inSurge (Marketing & Growth)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      inStack (Tech & Product)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      inVolve (HR & Culture)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      inSure (Legal & Compliance)
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="mb-4 text-lg font-bold">Quick links</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      SiteMap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
