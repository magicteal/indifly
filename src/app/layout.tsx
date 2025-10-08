import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Montserrat import kiya
import Script from "next/script";
import "./globals.css";
// import TopBanner from "@/components/TopBanner";
// import Navbar from "@/components/Navbar";

// Montserrat font ko setup kiya
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Aap zaroorat ke hisaab se weights add kar sakte hain
  variable: "--font-montserrat", // CSS variable ka naam
});

export const metadata: Metadata = {
  title: "Indifly",
  description: "Building Ventures, Building Nation.",
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
    <html lang="en">
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
      <body className={`${montserrat.variable} font-sans antialiased`}>
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
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
