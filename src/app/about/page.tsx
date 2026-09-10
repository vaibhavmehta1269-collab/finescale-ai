import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { buildBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Our Engineering Philosophy & Team",
  description:
    "FineScale AI is an applied AI systems and software engineering company. Learn our engineering philosophy, meet the founders and team, and see our security & governance standards.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About FineScale AI — Our Engineering Philosophy & Team",
    description:
      "Building software systems for autonomous operations — deterministic architecture, connected AI systems, and the team behind FineScale AI.",
    url: "https://www.finescaleai.com/about",
    siteName: "FineScale AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About FineScale AI — Our Engineering Philosophy & Team",
    description:
      "Building software systems for autonomous operations — deterministic architecture, connected AI systems, and the team behind FineScale AI.",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([{ name: "About", path: "/about" }]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutPageClient />
    </>
  );
}
