import type { Metadata } from "next";
import CaseStudiesPageClient from "./CaseStudiesPageClient";
import { buildBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Automation Case Studies — Real Client Deployments",
  description:
    "Real FineScale AI deployments: AI OS reporting for a 12-brand e-commerce agency, an internal workflow operating system, a catering voice agent, and a custom inventory system.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "AI Automation Case Studies — Real Client Deployments | FineScale AI",
    description:
      "Technical breakdowns of AI OS deployments — connected reporting, workflow, and operational intelligence systems built for real businesses.",
    url: "https://www.finescaleai.com/case-studies",
    siteName: "FineScale AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Case Studies — Real Client Deployments | FineScale AI",
    description:
      "Technical breakdowns of AI OS deployments — connected reporting, workflow, and operational intelligence systems built for real businesses.",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([{ name: "Case Studies", path: "/case-studies" }]);

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudiesPageClient />
    </>
  );
}
