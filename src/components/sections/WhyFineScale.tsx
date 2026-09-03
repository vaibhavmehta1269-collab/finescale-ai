"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const comparisonData = [
  {
    feature: "System Architecture",
    finescale: "Connected operational layer built around your business",
    genericAgency: "Siloed, disconnected chatbot prompt wrappers",
    genericSaas: "Rigid, closed templates with fixed workflows",
  },
  {
    feature: "Workflow Coordination",
    finescale: "Deterministic multi-agent state orchestration",
    genericAgency: "Manual human handoffs between tools",
    genericSaas: "Basic linear automation rules",
  },
  {
    feature: "Data Security & Governance",
    finescale: "Private cloud enclave / zero training data retention",
    genericAgency: "Unmonitored third-party data passthrough",
    genericSaas: "Shared multi-tenant database infrastructure",
  },
  {
    feature: "Custom Integration",
    finescale: "Authenticated two-way database mutations & APIs",
    genericAgency: "Brittle external webhook connectors",
    genericSaas: "Limited to proprietary marketplace apps",
  },
  {
    feature: "IP & Code Ownership",
    finescale: "100% organization code & system IP ownership",
    genericAgency: "Vendor proprietary lock-in",
    genericSaas: "Per-seat monthly subscription lock-in",
  },
];

const pillars = [
  {
    number: "01",
    title: "Connected Architecture",
    description: "Systems designed as an integrated operational layer across your data, applications, and teams.",
  },
  {
    number: "02",
    title: "Deterministic Guardrails",
    description: "Mathematical schemas and state boundaries that ensure systems execute predictably without divergence.",
  },
  {
    number: "03",
    title: "Private Enclaves",
    description: "Enterprise security architecture where customer records and internal data never leak into public models.",
  },
  {
    number: "04",
    title: "Action Resolution",
    description: "Intelligent systems equipped to perform live transactions, reporting, and operational execution.",
  },
];

export function WhyFineScale() {
  return (
    <section className="py-24 sm:py-36 lg:py-40 relative overflow-hidden bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Reveal */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-3 block">
            Engineering Thesis
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#020617] leading-tight mb-4">
            Why organizations choose <span className="text-[#334155] font-normal">FineScale AI</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal">
            Most AI initiatives fail because they rely on isolated tools. We design, build, and integrate hardened software systems that operate reliably under enterprise volume.
          </p>
        </ScrollReveal>

        {/* 4 Editorial Pillars with Stagger Reveal */}
        <ScrollReveal variant="stagger-children" stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-20 sm:mb-24 pb-16 sm:pb-20 border-b border-slate-200">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="space-y-3 group p-4 rounded-xl hover:bg-white transition-all duration-300">
              <span className="font-mono text-xs text-[#0066FF] font-bold block group-hover:scale-110 transform-gpu origin-left transition-transform">
                [{pillar.number}]
              </span>
              <h3 className="font-display font-semibold text-lg text-[#020617] group-hover:text-[#0066FF] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </ScrollReveal>

        {/* Minimal White Comparison Table with Reveal */}
        <ScrollReveal variant="fade-up" className="space-y-5">
          <span className="text-xs font-mono uppercase tracking-wider text-[#334155] font-bold block">
            Architectural Comparison
          </span>

          <div className="rounded-2xl border border-slate-300 overflow-x-auto bg-white shadow-xs hover:shadow-md transition-shadow">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono text-[#0F172A] bg-[#F1F5F9]">
                  <th className="py-4 px-6 font-bold w-1/4">Criterion</th>
                  <th className="py-4 px-6 font-bold text-[#0066FF] bg-blue-50/70 w-1/3">
                    FineScale AI Architecture
                  </th>
                  <th className="py-4 px-6 font-semibold w-1/4">Generic AI Agency</th>
                  <th className="py-4 px-6 font-semibold w-1/4">Off-the-Shelf SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs font-sans">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/20 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#020617] font-mono text-xs">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-[#020617] bg-blue-50/30 font-semibold">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{row.finescale}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#334155] font-medium">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <span>{row.genericAgency}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#334155] font-medium">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <span>{row.genericSaas}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
