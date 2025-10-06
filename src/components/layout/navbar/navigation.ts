// Navigation configuration for different sites
export interface NavItem {
  href: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  navItems: NavItem[];
}

// Main Indifly site navigation
export const indiflyNavConfig: SiteConfig = {
  name: "indifly",
  navItems: [
    { href: "#our-portfolio", label: "Our Portfolio" },
    { href: "/incore", label: "inCORE" },
    { href: "/blog", label: "INDsights" },
    { href: "/aboutUs", label: "About us" },
    { href: "#contact", label: "Get in Touch" },
  ],
};

// inCORE site navigation
export const incoreNavConfig: SiteConfig = {
  name: "incore",
  navItems: [
    { href: "/incore#services", label: "Services" },
    { href: "/aboutUs", label: "About Indifly Ventures" },
    { href: "/incore#contact", label: "Contact" },
  ],
};

// Function to get navigation config based on current path
export const getNavConfig = (pathname: string): SiteConfig => {
  if (pathname.startsWith("/incore")) {
    return incoreNavConfig;
  }
  return indiflyNavConfig;
};
