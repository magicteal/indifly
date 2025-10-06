// Centralized footer link configuration similar to navbar navigation config
// If a route does not yet exist, keep the href as a placeholder and update when implemented.

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

// NOTE: Assumptions made for hrefs where originals were '#'. Adjust anchors to match real section ids.
// - Contact points to home page contact anchor
// - Customer Stories assumed to be a future section on /incore
// - Privacy / Terms placeholder pages
// - Sitemap uses the generated xml route

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: "Home",
    links: [
      { label: "About inCORE", href: "/incore" },
      { label: "Contact Us", href: "/#contact" },
      // { label: "Customer Stories", href: "/incore#customer-stories" },
      { label: "About IndiFly", href: "/aboutUs" },
    ],
  },
  {
    heading: "inCore",
    links: [
      {
        label: "inSurge (Marketing & Growth)",
        href: "/incore/services/insurge",
      },
      { label: "inStack (Tech & Product)", href: "/incore/services/instack" },
      { label: "inVolve (HR & Culture)", href: "/incore/services/involve" },
      { label: "inSure (Legal & Compliance)", href: "/incore/services/insure" },
    ],
  },
  {
    heading: "Quick links",
    links: [
      { label: "Blogs", href: "/blog" },
      {
        label: "Privacy Policy",
        href: "https://www.indiflyventures.com/privacy-policy",
      },
      {
        label: "Terms & Conditions",
        href: "https://www.indiflyventures.com/terms-and-conditions",
      },
      // { label: "SiteMap", href: "/sitemap.xml" },
    ],
  },
];
