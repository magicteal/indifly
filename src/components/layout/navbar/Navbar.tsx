"use client";

import {
  getNavConfig,
  type NavItem,
} from "@/components/layout/navbar/navigation";
import { Button } from "@/components/ui/button";
import { ServiceTheme } from "@/lib/serviceContext";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavbarLogoProps {
  href: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface NavbarProps {
  logo: NavbarLogoProps;
  navItems?: NavItem[];
  theme?: ServiceTheme;
}

const Navbar: React.FC<NavbarProps> = ({ logo, navItems, theme }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentNavItems = navItems || getNavConfig(pathname).navItems;

  return (
    <nav className="fixed top-0 left-0 z-[60] w-full md:top-14">
      <div className="mx-auto max-w-7xl px-0 md:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between border-b border-white bg-white/30 px-4 backdrop-blur-lg md:rounded-xl md:border md:border-white md:px-6">
          {/* Mobile Hamburger Menu Button  */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`${theme?.service === "incore" ? "text-white" : "text-gray-900"} transition-colors hover:bg-white/20`}
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
            <Link
              href={logo.href}
              aria-label={logo.alt ?? "Logo"}
              className="inline-flex items-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt ?? "Logo"}
                width={logo.width ?? 100}
                height={logo.height ?? 40}
              />
            </Link>
          </div>

          {/* Desktop Nav Links - centered */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-6 md:flex">
            {currentNavItems.map((item) => (
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
            ))}
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
                {currentNavItems.map((item, index) => (
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
                      <ChevronRight
                        className="h-5 w-5 text-white/60"
                        aria-hidden="true"
                      />
                    </div>
                    {index < currentNavItems.length - 1 && (
                      <div className="my-2 ml-6">
                        <hr className="border-white/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
