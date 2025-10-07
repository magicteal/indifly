import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Montserrat import kiya
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
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
