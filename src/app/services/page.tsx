import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services — AI Systems, Software Engineering & Automation",
  description:
    "Explore FineScale AI's services: AI operating systems, multi-agent workflows, custom software development, AI consulting, predictive analytics, and staff augmentation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services — AI Systems, Software Engineering & Automation | FineScale AI",
    description:
      "We design, build, integrate, and operate intelligent systems — from enterprise AI operating systems to custom software and predictive intelligence.",
    url: "https://www.finescaleai.com/services",
    siteName: "FineScale AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — AI Systems, Software Engineering & Automation | FineScale AI",
    description:
      "We design, build, integrate, and operate intelligent systems — from enterprise AI operating systems to custom software and predictive intelligence.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
