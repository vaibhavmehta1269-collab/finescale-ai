"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Layers, 
  Workflow, 
  Code2, 
  Compass, 
  TrendingUp, 
  Users, 
  PhoneCall, 
  MessageSquare,
  Search, 
  ArrowRight, 
  Check
} from "lucide-react";
import { servicesData, serviceCategories, ServiceItem } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";
import { ServiceDrawer } from "@/components/sections/ServiceDrawer";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Workflow,
  Code2,
  Compass,
  TrendingUp,
  Users,
  PhoneCall,
  MessageSquare,
};

export default function ServicesPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        selectedCategory === "ALL" || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortPositioning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.includedCapabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        service.integrationStack.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-white">
      {/* Hero Header with Masked Line Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase block">
            Services & System Architectures
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#020617] leading-tight">
            AI systems, software engineering <span className="text-[#334155] font-normal">& automation</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal pt-2">
            We design, build, integrate, and operate intelligent systems that become part of how a business operates — from enterprise AI operating systems to custom software and predictive intelligence.
          </p>
        </ScrollReveal>
      </section>

      {/* Category Tabs and Instant Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {serviceCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer active:scale-95 ${
                      isActive
                        ? "bg-[#F1F6FF] text-[#0066FF] font-bold border border-blue-300 shadow-xs"
                        : "text-[#1E293B] hover:text-[#020617] hover:bg-slate-100 border border-slate-200 font-medium"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-slate-300 text-xs font-mono text-[#020617] placeholder-slate-500 focus:outline-none focus:border-[#0066FF] shadow-xs font-medium transition-colors"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Systems Catalog Display - Staggered Editorial Reveal with Masked Titles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-[#F8FAFC] border border-slate-300">
            <p className="text-[#334155] font-mono text-xs mb-3 font-semibold">
              No services match "{searchQuery}".
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredServices.map((service, idx) => {
              const IconComp = iconMap[service.icon] || Layers;
              const isFlagship = service.tier === "flagship";
              const isSupporting = service.tier === "supporting";

              return (
                <ScrollReveal
                  key={service.id}
                  variant="fade-up"
                  delay={idx * 0.05}
                >
                  <div
                    id={service.id}
                    onClick={() => setActiveService(service)}
                    className={`rounded-2xl border transition-all duration-300 cursor-pointer group flex flex-col justify-between transform-gpu hover:-translate-y-1.5 ${
                      isFlagship
                        ? "p-8 sm:p-10 bg-white border-blue-300 hover:border-[#0066FF] shadow-xs hover:shadow-xl"
                        : isSupporting
                        ? "p-6 sm:p-8 bg-[#F8FAFC] border-slate-300 hover:border-slate-400 hover:shadow-md"
                        : "p-8 sm:p-9 bg-white border-slate-300 hover:border-slate-400 shadow-xs hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* Top Row Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3.5">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                            isFlagship 
                              ? "bg-blue-50 text-[#0066FF] border border-blue-200 font-bold" 
                              : "bg-[#F8FAFC] text-[#020617] border border-slate-300 font-semibold"
                          }`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-mono text-[#0066FF] uppercase font-bold">
                                [{service.orderNumber}] {service.category}
                              </span>
                              <span className="text-slate-400 font-mono">•</span>
                              <span className="text-[11px] font-mono text-[#334155] font-semibold">
                                {service.badge}
                              </span>
                            </div>
                            <div className="overflow-hidden py-0.5">
                              <h2 className="font-display font-bold text-2xl text-[#020617] group-hover:text-[#0066FF] transition-colors">
                                {service.name}
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div className="text-xs font-mono text-[#334155] sm:text-right shrink-0">
                          <span className="text-[#334155] block text-[10px] uppercase font-bold">Benchmark</span>
                          <span className="text-[#020617] font-bold">{service.latencyOrMetric}</span>
                        </div>
                      </div>

                      {/* Short Positioning & Quote */}
                      <p className="text-sm font-mono text-[#0066FF] mb-3 font-bold">
                        {service.shortPositioning}
                      </p>

                      <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-normal mb-6 max-w-4xl">
                        {service.shortDescription}
                      </p>

                      {/* Included Deliverables preview */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 pt-4 border-t border-slate-200">
                        {service.includedCapabilities.slice(0, 3).map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2.5 text-xs text-[#1E293B] font-sans font-medium"
                          >
                            <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                            <span className="truncate">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom with Animated Arrow Glide */}
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#334155] font-medium">
                        Positioning: "{service.positioningLine}"
                      </span>
                      <Link
                        href={`/services/${service.id}`}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Explore architecture & specs for ${service.name}`}
                        className="text-[#0066FF] flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-200 shrink-0 ml-4 font-bold rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
                      >
                        <span>Explore Architecture & Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </section>

      {/* Specifications & Architectural Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-2 block">
            02 / Architecture Comparison
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
            System Specifications & Deliverables Matrix
          </h3>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="rounded-2xl border border-slate-300 overflow-x-auto bg-white shadow-xs hover:shadow-md transition-shadow">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono text-[#0F172A] bg-[#F1F5F9]">
                  <th className="py-4 px-6 font-bold">#</th>
                  <th className="py-4 px-6 font-bold">Service System</th>
                  <th className="py-4 px-6 font-bold">Category</th>
                  <th className="py-4 px-6 font-bold">Primary Benchmark SLA</th>
                  <th className="py-4 px-6 font-bold">Typical Impact</th>
                  <th className="py-4 px-6 font-bold">Supported Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs font-mono">
                {servicesData.map((s) => (
                  <tr
                    key={s.id}
                    onClick={() => setActiveService(s)}
                    className="hover:bg-blue-50/30 cursor-pointer transition-colors"
                  >
                    <td className="py-4 px-6 text-[#0066FF] font-bold">{s.orderNumber}</td>
                    <td className="py-4 px-6 font-bold text-[#020617]">
                      <Link
                        href={`/services/${s.id}`}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View full specification for ${s.name}`}
                        className="flex items-center gap-1.5 hover:text-[#0066FF] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
                      >
                        <span>{s.name}</span>
                        <ArrowRight className="w-3 h-3 text-[#334155]" />
                      </Link>
                    </td>
                    <td className="py-4 px-6 text-[#1E293B] font-semibold">{s.category}</td>
                    <td className="py-4 px-6 text-[#0F172A] font-medium">{s.latencyOrMetric}</td>
                    <td className="py-4 px-6 text-[#0066FF] font-bold">{s.typicalRoi}</td>
                    <td className="py-4 px-6 text-[#1E293B] truncate max-w-xs font-sans font-medium">
                      {s.integrationStack.slice(0, 3).join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      {/* Embedded Unified Dual-Mode Calculator */}
      <ROICalculator />

      {/* Bottom CTA */}
      <CTASection />

      {/* Slide-over Service Detail Drawer */}
      <ServiceDrawer
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </div>
  );
}
