import GlobalAnimations from "@/components/animations/GlobalAnimations";
import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import TopBanner from "@/components/layout/TopBanner";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title:
    "Indifly Ventures | Empowering Entrepreneurship with Innovative Technology",
  description:
    "Indifly Ventures: Pioneering entrepreneurship with cutting-edge technology and strategic partnerships across emerging sectors in Bharat.",
  keywords: [
    "entrepreneurship",
    "innovative technology",
    "strategic partnerships",
    "emerging sectors",
    "business empowerment",
    "technology solutions",
    "startup support",
    "digital transformation",
    "venture capital",
  ],
  alternates: {
    canonical: "https://www.indiflyventures.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Load GTM only in production. Provide the container ID via NEXT_PUBLIC_GTM_ID
  const isProd = process.env.NODE_ENV === "production";
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <head>
        {isProd && GTM_ID && (
          <>
            {/* Google Tag Manager */}
            <Script id="gtm-init" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            {/* End Google Tag Manager */}
          </>
        )}
      </head>
      <body>
        {isProd && GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <ThemeProvider>
          <div className="fixed top-0 right-0 left-0 z-50 hidden md:block">
            <TopBanner />
          </div>
          <div className="fixed top-16 right-0 left-0 z-50 md:hidden">
            <TopBanner />
          </div>
          <div className="h-24 md:h-8 theme-incore:bg-black theme-incore-services:bg-black" />
          <Navbar />
          <div className="overflow-x-clip">{children}</div>
          <ContactForm />
          <Footer />
          <GlobalAnimations />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
