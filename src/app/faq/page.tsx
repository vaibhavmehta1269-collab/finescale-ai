import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";
import { faqData } from "@/data/faqData";
import { buildBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Technical & Operational Questions",
  description:
    "Answers on AI operating systems, multi-agent coordination, private cloud security, deterministic boundary validation, and implementation sprints at FineScale AI.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ — Technical & Operational Questions | FineScale AI",
    description:
      "Detailed answers regarding AI operating systems, multi-agent coordination, private cloud security, deterministic boundary validation, and implementation sprints.",
    url: "https://www.finescaleai.com/faq",
    siteName: "FineScale AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Technical & Operational Questions | FineScale AI",
    description:
      "Detailed answers regarding AI operating systems, multi-agent coordination, private cloud security, deterministic boundary validation, and implementation sprints.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([{ name: "FAQ", path: "/faq" }]);

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FAQPageClient />
    </>
  );
}
