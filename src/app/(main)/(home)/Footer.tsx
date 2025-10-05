// src/components/Footer.tsx
import { Container } from "@/components/ui/container";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#01295C] font-sans text-white">
      <div className="relative">
        {/* Big Background Heading at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden">
          <h1 className="mb-[-1vw] text-[10.5vw] leading-none font-extrabold whitespace-nowrap text-[#021D41] md:text-[10.5vw]">
            Badhna Aasaan Hai
          </h1>
        </div>

        <Container className="relative pt-10 pb-28 md:pb-32">
          {/* Centered Footer Links Section */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
              {/* Decorative circle to the left of Home */}
              <div
                className="pointer-events-none absolute top-1 left-0"
                aria-hidden="true"
              >
                <svg
                  width="195"
                  height="192"
                  viewBox="0 0 195 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M194 96.0077C194 43.5431 150.805 1 97.5005 1C44.1962 1 1 43.5277 1 96.0077C1 148.472 44.1962 191 97.5005 191C150.805 191 194 148.472 194 96.0077Z"
                    stroke="#153660"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* Column 1 */}
              <div className="relative">
                <h3 className="mb-4 text-lg font-bold">Home</h3>
                <ul className="space-y-3 text-gray-300/80">
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
                <ul className="space-y-3 text-gray-300/80">
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
                <ul className="space-y-3 text-gray-300/80">
                  <li>
                    <a href="/blog" className="hover:text-white">
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
