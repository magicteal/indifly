"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getNavConfig, type NavItem } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronRight } from "lucide-react";

interface NavbarProps {
  logo: React.ReactNode;
  navItems?: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, navItems }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentNavItems = navItems || getNavConfig(pathname).navItems;
  
  return (
    <nav className="fixed top-0 md:top-14 left-0 w-full z-[60] font-sans">
      <div className="max-w-7xl mx-auto px-0 md:px-4 lg:px-8">
  <div className="relative flex items-center justify-between h-16 bg-white/10 backdrop-blur-lg px-4 md:px-6 border-b border-white md:rounded-xl md:border md:border-white">
          {/* Mobile Hamburger Menu Button  */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 md:mr-auto">
            {logo}
          </div>

          {/* Desktop Nav Links - centered */}
          <div className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
            {currentNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Search Icon */}
          <div className="flex items-center justify-center h-10 w-10 bg-white/80 rounded-full cursor-pointer group hover:bg-white transition-colors">
            <Search className="h-5 w-5 text-orange-500" />
          </div>
          {/* Mobile dropdown menu panel - overlay, attached under navbar */}
          {isOpen && (
              <div
                id="mobile-menu"
                className="md:hidden absolute left-0 right-0 top-full bg-gradient-to-b from-black/70 via-black/55 to-black/40 backdrop-blur-[30px] backdrop-saturate-150 border-b border-white/20 text-white px-4 py-4 ring-1 ring-white/10 shadow-xl"
                role="menu"
                aria-label="Mobile navigation"
                style={{ zIndex: 70 }}
              >
              <div className="flex flex-col space-y-1">
                {currentNavItems.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-red-500 mr-4 rounded-full"></div>
                        <Link
                          href={item.href}
                          className="text-white/90 hover:text-white text-lg font-medium transition-colors py-3 block"
                          onClick={() => setIsOpen(false)}
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      </div>
                      <ChevronRight className="h-5 w-5 text-white/60" aria-hidden="true" />
                    </div>
                    {index < currentNavItems.length - 1 && (
                      <div className="ml-6 my-2">
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
