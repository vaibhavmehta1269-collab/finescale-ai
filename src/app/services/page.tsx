import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { buildBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Automation Services — AI Agents, Workflows & Custom Software",
  description:
    "AI automation services for business operations: AI operating systems, multi-agent workflows, voice agents, chatbots, custom software, predictive analytics and AI consulting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "AI Automation Services — AI Agents, Workflows & Custom Software | FineScale AI",
    description:
      "We design, build, integrate, and operate intelligent systems — from enterprise AI operating systems to custom software and predictive intelligence.",
    url: "https://www.finescaleai.com/services",
    siteName: "FineScale AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services — AI Agents, Workflows & Custom Software | FineScale AI",
    description:
      "We design, build, integrate, and operate intelligent systems — from enterprise AI operating systems to custom software and predictive intelligence.",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([{ name: "Services", path: "/services" }]);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicesPageClient />
    </>
  );
}
