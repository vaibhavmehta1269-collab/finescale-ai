import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BackgroundMatrix } from "@/components/ui/BackgroundMatrix";
import { PageTransition } from "@/components/layout/PageTransition";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Automation Agency & Custom AI Systems | FineScale AI",
    template: "%s | FineScale AI",
  },
  description:
    "We design, build, and operate intelligent business systems — from connected operational layers and multi-agent workflows to custom software development and predictive analytics.",
  keywords: [
    "FineScale AI",
    "Enterprise AI Systems",
    "AI OS",
    "Multi-Agent Systems",
    "Custom Software Development",
    "AI Consulting",
    "Predictive Analytics",
    "Staff Augmentation",
  ],
  authors: [{ name: "FineScale AI Engineering Team" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FineScale AI — Enterprise AI Systems",
    description:
      "Intelligent systems engineered to run business operations.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FineScale AI — Enterprise AI Systems",
    description:
      "Intelligent systems engineered to run business operations.",
  },
};

// NOTE: sameAs, contactPoint, address, aggregateRating and review are
// deliberately omitted — the only social presence found on the site is a
// personal LinkedIn profile (not a company page), and there is no verified
// phone number, mailing address, or review data to publish. Add these once
// confirmed by the site owner. No SearchAction either — there is no site
// search.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "FineScale AI designs, builds, and operates intelligent business systems — connected operational layers, multi-agent workflows, custom software development, and predictive analytics.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-white text-[#0B1220] antialiased min-h-screen flex flex-col selection:bg-blue-600/15 selection:text-[#0B1220]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#0066FF] focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SmoothScroll>
          <CustomCursor />
          <BackgroundMatrix />
          <Navbar />
          <main id="main-content" className="flex-1 flex flex-col relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
