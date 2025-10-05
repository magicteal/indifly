"use client";

import { useServiceTheme } from "@/app/incore/services/[service]/hooks/useServiceTheme";
import { Container } from "@/components/ui/container";

export const Footer = () => {
  const theme = useServiceTheme();

  return (
    <footer
      className={`relative overflow-hidden ${theme.service === "default" ? "bg-secondary" : "bg-[#171717]"} font-sans text-white`}
    >
      <Container className="relative z-1 pt-10 pb-28 md:pb-32">
        {/* Centered Footer Links Section */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
            {/* Decorative circle to the left of Home */}
            <div className="absolute top-1/4 left-[-40px] z-0 h-28 w-28 rounded-full border-2 border-white/10 opacity-50 sm:h-40 sm:w-40 md:h-48 md:w-48" />

            {/* Column 1 */}
            <div className="relative">
              <h3 className={`mb-4 text-lg font-bold ${theme.text}`}>Home</h3>
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
              <h3 className={`mb-4 text-lg font-bold ${theme.text}`}>inCore</h3>
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
              <h3 className={`mb-4 text-lg font-bold ${theme.text}`}>
                Quick links
              </h3>
              <ul className="space-y-3 text-gray-300/80">
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

      {/* Big Background Heading at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden">
        <h1
          className={`mb-[-1vw] text-[10.5vw] leading-none font-extrabold whitespace-nowrap ${theme.service !== "default" ? theme.text(10) : "text-[#071B36]"} md:text-[10.5vw]`}
        >
          Badhna Aasaan Hai
        </h1>
      </div>
    </footer>
  );
};
