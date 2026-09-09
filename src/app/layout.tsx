import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BackgroundMatrix } from "@/components/ui/BackgroundMatrix";
import { PageTransition } from "@/components/layout/PageTransition";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

const SITE_URL = "https://www.finescaleai.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FineScale AI — Enterprise AI Systems & Software Engineering",
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
    siteName: "FineScale AI",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FineScale AI",
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0B1220] antialiased min-h-screen flex flex-col selection:bg-blue-600/15 selection:text-[#0B1220]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll>
          <CustomCursor />
          <BackgroundMatrix />
          <Navbar />
          <main className="flex-1 flex flex-col relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
