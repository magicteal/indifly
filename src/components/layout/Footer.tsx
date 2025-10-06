import { Container } from "@/components/container";
import type { ServiceTheme } from "@/lib/serviceContext";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { footerLinkGroups } from "./footerLinks";

export const Footer = ({ theme }: { theme: ServiceTheme }) => {
  // Map for non-default, non-incore faint headline colors
  const faintMap: Record<"insurge" | "instack" | "involve" | "insure", string> =
    {
      insurge: "text-insurge/10",
      instack: "text-instack/10",
      involve: "text-involve/10",
      insure: "text-insure/10",
    };

  let faint: string;
  if (theme.service === "default")
    faint = "text-[#021D41]"; // custom default tint
  else if (theme.service === "incore")
    faint = "text-[#071B36]"; // incore variant
  else faint = faintMap[theme.service];

  const isServiceTheme = theme.service !== "default"; // any real service (insurge, instack, involve, insure, incore)

  return (
    <footer className="relative overflow-hidden font-sans text-white">
      <Container className="relative z-1 pt-24 pb-28 md:pb-36">
        {/* Footer grid layout including new left branding block */}
        <div className="grid gap-14 md:grid-cols-2 md:gap-20 lg:grid-cols-[minmax(380px,_480px)_repeat(3,minmax(0,1fr))] lg:gap-28">
          {/* Left branding / mission block */}
          <div className="max-w-md">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src={isServiceTheme ? "/incorelogo2.png" : "/indiflyLogo2.svg"}
                alt={isServiceTheme ? "inCORE" : "IndiFly"}
                width={isServiceTheme ? 240 : 210}
                height={70}
                priority
                className="h-auto w-[210px] md:w-[240px]"
              />
            </div>
            <h2 className="text-xl leading-snug font-extrabold md:text-2xl">
              Building <span className={theme.text}>Ventures,</span> Building
              <span className={theme.text}> Nation.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300/90 md:text-[0.9rem]">
              A venture builder empowering mission-driven founders with
              resources, functional expertise and strategic partnerships to{" "}
              <span className={`font-semibold italic ${theme.text}`}>
                dream, build, and grow.
              </span>
            </p>
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium tracking-wide text-gray-400 uppercase">
                Connect with us:
              </p>
              <ul className="flex flex-wrap items-center gap-4 text-lg text-gray-300/80">
                <li>
                  <a
                    href="https://in.linkedin.com/company/indifly-ventures"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
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
                    className="transition-colors hover:text-white"
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
                    className="transition-colors hover:text-white"
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
                    className="transition-colors hover:text-white"
                  >
                    <IoLogoInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Link Columns (refactored to map over config) */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-1 md:grid-cols-3 lg:col-span-3">
            {footerLinkGroups.map((group) => (
              <div key={group.heading} className="relative">
                <h3 className={`mb-4 text-lg font-bold ${theme.text}`}>
                  {group.heading}
                </h3>
                <ul className="space-y-3 text-gray-300/80">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <a href={link.href} className="hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Big Background Heading at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden">
        <h1
          className={`mb-[-1vw] text-[10.5vw] leading-none font-extrabold whitespace-nowrap ${faint} md:text-[10.5vw]`}
        >
          Badhna Aasaan Hai
        </h1>
      </div>
    </footer>
  );
};
