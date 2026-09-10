import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { SITE_URL, BOOKING_URL, toTitleCase, buildBreadcrumbJsonLd } from "@/lib/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = servicesData.find((s) => s.id === params.slug);
  if (!service) return {};

  const titleName = toTitleCase(service.name);
  const title = `${titleName} — ${service.shortPositioning}`;
  const ogTitle = `${title} | FineScale AI`;

  return {
    title,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.id}`,
    },
    openGraph: {
      title: ogTitle,
      description: service.shortDescription,
      url: `${SITE_URL}/services/${service.id}`,
      siteName: "FineScale AI",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: service.shortDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.id === params.slug);
  if (!service) notFound();

  const titleName = toTitleCase(service.name);
  const relatedServices = servicesData
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: titleName,
    description: service.shortDescription,
    url: `${SITE_URL}/services/${service.id}`,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${titleName} — Included Capabilities`,
      itemListElement: service.includedCapabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cap,
        },
      })),
    },
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Services", path: "/services" },
    { name: titleName, path: `/services/${service.id}` },
  ]);

  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
      >
        <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#334155] font-medium">
          <li>
            <Link href="/" className="hover:text-[#0066FF] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/services" className="hover:text-[#0066FF] transition-colors">
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-[#020617] font-bold">
            {titleName}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#0066FF] uppercase font-bold">
              [{service.orderNumber}] {service.category}
            </span>
            <span className="text-slate-400 font-mono">•</span>
            <span className="text-xs font-mono text-[#334155] font-semibold">
              {service.badge}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#020617] leading-tight">
            {titleName}
          </h1>
          <p className="text-sm sm:text-base font-mono text-[#0066FF] font-bold">
            {service.positioningLine}
          </p>
          <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal pt-2">
            {service.fullDescription}
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal variant="fade-up" delay={0.1} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 rounded-lg font-sans transition-all duration-200 select-none group cursor-pointer active:scale-[0.96] transform-gpu px-6 py-3 text-sm font-bold bg-[#0066FF] hover:bg-[#0052CC] text-white border border-[#0066FF] shadow-sm hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Book a Free Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <Link
            href="/case-studies"
            className="relative inline-flex items-center justify-center gap-2 rounded-lg font-sans transition-all duration-200 select-none group cursor-pointer active:scale-[0.96] transform-gpu px-6 py-3 text-sm font-bold bg-white hover:bg-slate-50 text-[#020617] hover:text-[#0066FF] border border-slate-300 hover:border-[#0066FF] shadow-xs hover:shadow-md hover:-translate-y-0.5"
          >
            <span>See Case Studies</span>
          </Link>
        </ScrollReveal>

        {/* Engineering Benchmark */}
        <ScrollReveal variant="fade-up" delay={0.15} className="mt-10 p-5 rounded-xl bg-[#F8FAFC] border border-slate-300 inline-flex items-center gap-3 max-w-full">
          <span className="text-xs font-mono uppercase text-[#334155] font-bold shrink-0">
            Engineering Benchmark
          </span>
          <span className="text-sm font-mono font-bold text-[#020617]">
            {service.latencyOrMetric}
          </span>
        </ScrollReveal>
      </section>

      {/* What this system includes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
            What this system includes
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="stagger-children" stagger={0.05} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {service.includedCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-4 rounded-xl bg-[#F8FAFC] border border-slate-300 text-sm text-[#0F172A] font-normal"
            >
              <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
              <span>{cap}</span>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* What changes operationally */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
            What changes operationally
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-300 space-y-2">
            <span className="text-xs font-mono text-[#334155] uppercase font-bold block">
              Before FineScale AI
            </span>
            <p className="text-sm text-[#0F172A] leading-relaxed font-normal">
              {service.beforeState}
            </p>
          </div>
          <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-300 space-y-2">
            <span className="text-xs font-mono text-[#0066FF] uppercase font-bold block">
              After System Deployment
            </span>
            <p className="text-sm text-[#020617] leading-relaxed font-semibold">
              {service.afterState}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Architecture flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
            Architecture flow
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.1}>
          <ol className="flex flex-col gap-3">
            {service.architectureFlow.map((step, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-slate-300"
              >
                <span className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-[#0066FF] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-[#020617]">{step}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </section>

      {/* Integrates with */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
            Integrates with
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.1} className="flex flex-wrap gap-2.5">
          {service.integrationStack.map((tool, idx) => (
            <span
              key={idx}
              className="px-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-slate-300 text-sm font-mono text-[#0F172A] font-semibold"
            >
              {tool}
            </span>
          ))}
        </ScrollReveal>
      </section>

      {/* Related systems */}
      {relatedServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
              Related systems
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="stagger-children" stagger={0.06} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                href={`/services/${related.id}`}
                className="group p-5 rounded-xl bg-white border border-slate-300 hover:border-[#0066FF] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-[#0066FF] uppercase font-bold block mb-1.5">
                    [{related.orderNumber}] {related.badge}
                  </span>
                  <h3 className="font-display font-semibold text-base text-[#020617] group-hover:text-[#0066FF] transition-colors mb-1.5">
                    {toTitleCase(related.name)}
                  </h3>
                  <p className="text-xs text-[#334155] leading-relaxed font-normal line-clamp-2">
                    {related.shortDescription}
                  </p>
                </div>
                <span className="pt-4 text-xs font-mono text-[#0066FF] font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>View system</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </ScrollReveal>
        </section>
      )}

      {/* Back to all services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0066FF] hover:text-[#0052CC] font-bold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All services</span>
        </Link>
      </div>

      {/* Closing CTA */}
      <CTASection />
    </div>
  );
}
