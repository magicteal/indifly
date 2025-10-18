import { Container } from "@/components/container";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import FooterImage from "./FooterImage";
import { footerLinkGroups } from "./footerLinks";

export const Footer = () => {
  return (
    <footer className="reveal-section relative overflow-hidden font-sans text-foreground">
      <Container className="relative z-1 pt-24 pb-28 md:pb-36">
        {/* Footer grid layout including new left branding block */}
        <div className="grid gap-14 md:grid-cols-2 md:gap-20 lg:grid-cols-[minmax(380px,_480px)_repeat(3,minmax(0,1fr))] lg:gap-28">
          {/* Left branding / mission block */}
          <div className="reveal-left max-w-md" data-reveal-stagger>
            <div className="mb-6 flex items-center gap-3">
              <FooterImage />
            </div>
            <h2 className={`text-xl leading-snug font-extrabold md:text-2xl`}>
              Building <span className="text-primary">Ventures,</span> Building
              <span className="text-primary"> Nation.</span>
            </h2>
            <p className={`mt-4 text-sm leading-relaxed md:text-[0.9rem]`}>
              A venture builder empowering mission-driven founders with
              resources, functional expertise and strategic partnerships to{" "}
              <br />
              <span className={`font-semibold text-primary italic`}>
                dream, build, and grow.
              </span>
            </p>
            <div className="mt-8">
              <p className={`mb-3 text-xs font-medium tracking-wide uppercase`}>
                Connect with us:
              </p>
              <ul className={`flex flex-wrap items-center gap-4 text-lg`}>
                <li>
                  <a
                    href="https://in.linkedin.com/company/indifly-ventures"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <IoLogoLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/IndiflyVentures"
                    aria-label="X / Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <IoLogoTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/indiflyventures"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <IoLogoFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/indifly_official"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <IoLogoInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Link Columns (refactored to map over config) */}
          <div
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-1 md:grid-cols-3 lg:col-span-3"
            data-reveal-stagger
          >
            {footerLinkGroups.map((group) => (
              <div key={group.heading} className="reveal-right relative">
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {group.heading}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Big Background Heading at bottom */}
      <h1 className="pointer-events-none absolute bottom-0 left-1/2 mb-[-0.5vw] -translate-x-1/2 transform text-[5.7vw] font-extrabold whitespace-nowrap text-[#021D41] theme-orange:text-[#FFE3D9] theme-blue:text-[#BBCDE466] theme-yellow:text-[#FFE3D9] theme-incore-services:text-primary/10">
        Building Ventures. Building Nation.
      </h1>
    </footer>
  );
};
