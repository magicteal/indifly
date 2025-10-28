"use client";

import LogoImage from "@/app/(main)/components/LogoImage";
import { getNavConfig } from "@/app/(main)/components/navbar/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const currentNavItems = getNavConfig(pathname).navItems;
  const homeHref = pathname.startsWith("/incore") ? "/incore" : "/";

  return (
    <nav className="fixed top-0 left-0 z-[60] w-full md:top-14">
      <div className="mx-auto max-w-7xl px-0 md:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between border-b border-white bg-white/30 px-4 backdrop-blur-lg md:rounded-xl md:border md:border-white md:px-6">
          {/* Mobile Hamburger Menu Button  */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              // className={`${theme?.service === "incore" ? "text-white" : "text-gray-900"} transition-colors hover:bg-white/20`}
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Logo - centered on mobile, left-aligned on desktop */}
          <div className="absolute left-1/2 flex-shrink-0 -translate-x-1/2 md:static md:mr-auto md:ml-0 md:translate-x-0">
            <LogoImage variant="navbar" href={homeHref} />
          </div>

          {/* Desktop Nav Links - centered */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-6 md:flex">
            {currentNavItems.map((item) => {
              const isIncore = pathname.startsWith("/incore");
              const isServices = isIncore && item.label === "Services";
              if (!isServices) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group text-md relative font-medium text-gray-900 transition-colors hover:text-gray-800"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute top-1/2 -left-3 h-4 w-1 -translate-y-1/2 transform rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    </span>
                  </Link>
                );
              }
              // Services dropdown for inCORE
              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className="text-md relative font-medium text-gray-900 transition-colors hover:text-gray-800"
                    aria-haspopup="menu"
                    aria-expanded={false}
                  >
                    <span className="relative cursor-default">
                      {item.label}
                      <span className="absolute top-1/2 -left-3 h-4 w-1 -translate-y-1/2 transform rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    </span>
                  </button>
                  {/* Dropdown panel */}
                  <div
                    className={`invisible absolute left-1/2 top-full z-[80] mt-3 -translate-x-1/2 inline-block rounded-2xl p-4 opacity-0 backdrop-blur-md transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 min-w-[464px] ${
                      isIncore ? "theme-incore bg-background/40" : "bg-background/40"
                    }`}
                  >
                    <div className="grid w-full grid-cols-4 gap-4">
                      {/* inSURGE */}
                      <div className="flex flex-col items-center">
                        <Link
                          href="/incore/services/insurge"
                          className="theme-insurge h-[99px] w-[99px] shrink-0 rounded-[24px] text-center font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                          style={{
                            background:
                              "linear-gradient(135deg, color-mix(in oklch, var(--primary), white 10%) 0%, var(--primary) 100%)",
                          }}
                        >
                          <span className="flex h-full w-full items-center justify-center leading-tight">
                            inSURGE
                          </span>
                        </Link>
                        <span className="mt-2 text-center text-xs font-semibold text-white">
                          Marketing &amp; Growth
                        </span>
                      </div>
                      {/* inSTACK */}
                      <div className="flex flex-col items-center">
                        <Link
                          href="/incore/services/instack"
                          className="theme-instack h-[99px] w-[99px] shrink-0 rounded-[24px] text-center font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                          style={{
                            background:
                              "linear-gradient(135deg, color-mix(in oklch, var(--primary), white 10%) 0%, var(--primary) 100%)",
                          }}
                        >
                          <span className="flex h-full w-full items-center justify-center leading-tight">
                            inSTACK
                          </span>
                        </Link>
                        <span className="mt-2 text-center text-xs font-semibold text-white">
                          Tech &amp; Product
                        </span>
                      </div>
                      {/* inVOLVE */}
                      <div className="flex flex-col items-center">
                        <Link
                          href="/incore/services/involve"
                          className="theme-involve h-[99px] w-[99px] shrink-0 rounded-[24px] text-center font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                          style={{
                            background:
                              "linear-gradient(135deg, color-mix(in oklch, var(--primary), white 10%) 0%, var(--primary) 100%)",
                          }}
                        >
                          <span className="flex h-full w-full items-center justify-center leading-tight">
                            inVOLVE
                          </span>
                        </Link>
                        <span className="mt-2 text-center text-xs font-semibold text-white">
                          HR &amp; Culture
                        </span>
                      </div>
                      {/* inSURE */}
                      <div className="flex flex-col items-center">
                        <Link
                          href="/incore/services/insure"
                          className="theme-insure relative h-[99px] w-[99px] shrink-0 rounded-[24px] text-center font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                          style={{
                            background:
                              "linear-gradient(135deg, color-mix(in oklch, var(--primary), white 10%) 0%, var(--primary) 100%)",
                          }}
                        >
                          {/* subtle dark overlay to improve contrast on light greens */}
                          <span className="pointer-events-none absolute inset-0 rounded-[24px] bg-black/10" />
                          <span className="relative z-10 flex h-full w-full items-center justify-center leading-tight" style={{ textShadow: "0 1px 1px rgba(0,0,0,.25)" }}>
                            inSURE
                          </span>
                        </Link>
                        <span className="mt-2 text-center text-xs font-semibold text-white">
                          Legal &amp; Compliance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Search Icon */}
          {/* <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/80 transition-colors hover:bg-white">
            <Search className="h-5 w-5 text-orange-500" />
          </div> */}
          {/* Mobile dropdown menu panel - overlay, attached under navbar */}
          {isOpen && (
            <div
              id="mobile-menu"
              className="absolute top-full right-0 left-0 bg-[#000000] px-4 py-4 text-white shadow-xl md:hidden"
              role="menu"
              aria-label="Mobile navigation"
              style={{ zIndex: 70 }}
            >
              <div className="flex flex-col space-y-1">
                {currentNavItems.map((item, index) => {
                  const isIncore = pathname.startsWith("/incore");
                  const isServices = isIncore && item.label === "Services";
                  if (!isServices) {
                    return (
                      <div key={item.label}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-4 h-6 w-1 rounded-full bg-red-500"></div>
                            <Link
                              href={item.href}
                              className="block py-3 text-lg font-medium text-white/90 transition-colors hover:text-white"
                              onClick={() => setIsOpen(false)}
                              role="menuitem"
                            >
                              {item.label}
                            </Link>
                          </div>
                          <ChevronRight className="h-5 w-5 text-white/60" aria-hidden="true" />
                        </div>
                        {index < currentNavItems.length - 1 && (
                          <div className="my-2 ml-6">
                            <hr className="border-white/20" />
                          </div>
                        )}
                      </div>
                    );
                  }
                  // Mobile Services expandable panel
                  return (
                    <div key={item.label}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="mr-4 h-6 w-1 rounded-full bg-red-500"></div>
                          <button
                            type="button"
                            className="block py-3 text-left text-lg font-medium text-white/90 transition-colors hover:text-white"
                            aria-expanded={servicesOpen}
                            aria-controls="mobile-services-panel"
                            onClick={() => setServicesOpen((v) => !v)}
                          >
                            {item.label}
                          </button>
                        </div>
                        <ChevronRight
                          className={`h-5 w-5 text-white/60 transition-transform ${servicesOpen ? "rotate-90" : "rotate-0"}`}
                          aria-hidden="true"
                        />
                      </div>
                      {servicesOpen && (
                        <div
                          id="mobile-services-panel"
                          className={`ml-6 mt-3 rounded-2xl p-3 ${isIncore ? "theme-incore bg-background/40" : "bg-background/40"}`}
                          role="group"
                          aria-label="inCORE services"
                        >
                          <div className="grid grid-cols-2 gap-3">
                            {/* inSURGE */}
                            <Link
                              href="/incore/services/insurge"
                              className="theme-insurge h-20 w-full rounded-[16px] text-center font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                              style={{
                                background:
                                  "linear-gradient(135deg, color-mix(in oklch, var(--primary), white 10%) 0%, var(--primary) 100%)",
                              }}
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="flex h-full w-full items-center justify-center leading-tight">inSURGE</span>
                            </Link>
                            {/* inSTACK */}
                            <Link
                              href="/incore/services/instack"
                              className="theme-instack h-20 w-full rounded-[16px] text-center font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                              style={{
                                background:
                                  "linear-gradient(135deg, color-mix(in oklch, var(--primary), white 10%) 0%, var(--primary) 100%)",
                              }}
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="flex h-full w-full items-center justify-center leading-tight">inSTACK</span>
                            </Link>
                            {/* inVOLVE */}
                            <Link
                              href="/incore/services/involve"
                              className="theme-involve h-20 w-full rounded-[16px] text-center font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                              style={{
                                background:
                                  "linear-gradient(135deg, color-mix(in oklch, var(--primary), white 10%) 0%, var(--primary) 100%)",
                              }}
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="flex h-full w-full items-center justify-center leading-tight">inVOLVE</span>
                            </Link>
                            {/* inSURE */}
                            <Link
                              href="/incore/services/insure"
                              className="theme-insure relative h-20 w-full rounded-[16px] text-center font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                              style={{
                                background:
                                  "linear-gradient(135deg, color-mix(in oklch, var(--primary), white 10%) 0%, var(--primary) 100%)",
                              }}
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="pointer-events-none absolute inset-0 rounded-[16px] bg-black/10" />
                              <span className="relative z-10 flex h-full w-full items-center justify-center leading-tight" style={{ textShadow: "0 1px 1px rgba(0,0,0,.25)" }}>inSURE</span>
                            </Link>
                          </div>
                        </div>
                      )}
                      {index < currentNavItems.length - 1 && (
                        <div className="my-2 ml-6">
                          <hr className="border-white/20" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
