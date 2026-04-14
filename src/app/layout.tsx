import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import ScrollCTA from "@/components/ScrollCTA";
import MobileBottomBar from "@/components/MobileBottomBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B2A52",
};

export const metadata: Metadata = {
  title: {
    default: "Kelowna Flooring Superstore | Flooring For Life",
    template: "%s | Kelowna Flooring Superstore",
  },
  description:
    "Kelowna's premier flooring store. In-stock laminate, hardwood, carpet, vinyl plank, tile & more. Expert installation across the Central Okanagan. Free estimates. Call (250) 860-7847.",
  keywords: [
    "flooring kelowna",
    "hardwood flooring kelowna",
    "carpet kelowna",
    "vinyl plank kelowna",
    "laminate flooring kelowna",
    "tile flooring kelowna",
    "flooring store kelowna",
    "kelowna flooring superstore",
    "flooring installation kelowna",
    "area rugs kelowna",
    "commercial flooring kelowna",
    "okanagan flooring",
    "flooring superstores kelowna",
    "west kelowna flooring",
    "lake country flooring",
    "engineered hardwood kelowna",
    "waterproof flooring kelowna",
    "free estimate flooring kelowna",
  ],
  authors: [{ name: "Kelowna Flooring Superstore" }],
  creator: "Kelowna Flooring Superstore",
  publisher: "Flooring Superstores",
  metadataBase: new URL("https://www.kelownaflooringsuperstore.com"),
  alternates: {
    canonical: "https://www.kelownaflooringsuperstore.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.kelownaflooringsuperstore.com",
    siteName: "Kelowna Flooring Superstore",
    title: "Kelowna Flooring Superstore | Flooring For Life",
    description:
      "Kelowna's premier flooring destination. Massive in-stock selection, expert installation, free estimates. (250) 860-7847.",
    images: [
      {
        url: "/assets/images/hero-walnut.webp",
        width: 1200,
        height: 630,
        alt: "Beautiful walnut hardwood flooring installed in a Kelowna home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelowna Flooring Superstore | Flooring For Life",
    description:
      "In-stock flooring showroom in Kelowna. Laminate, hardwood, carpet, vinyl plank & more. Free estimates.",
    creator: "@KelownaFloorSS",
    images: ["/assets/images/hero-walnut.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <LocalBusinessSchema />
        <GoogleAnalytics />
        <Script
          id="roomvoAssistant"
          src="https://www.roomvo.com/static/scripts/b2b/common/assistant.js"
          strategy="afterInteractive"
          data-locale="en-us"
          data-position="bottom-right"
        />
      </head>
      <body className="antialiased bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollCTA />
        <MobileBottomBar />
        {/* Bottom padding so mobile content isn't hidden by sticky bar */}
        <div className="h-[57px] lg:hidden" />
      </body>
    </html>
  );
}
