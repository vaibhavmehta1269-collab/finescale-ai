"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AIOSAssemblyVisual } from "@/components/ui/AIOSAssemblyVisual";
import { MultiAgentPipelineVisual } from "@/components/ui/MultiAgentPipelineVisual";

const coreServices = [
  {
    number: "03",
    name: "CUSTOM DEVELOPMENT",
    tagline: "Software built around your business.",
    description: "Custom applications, platforms, integrations, and intelligent internal tools built to your exact specifications.",
    href: "/services#custom-development",
  },
  {
    number: "04",
    name: "AI CONSULTING / AUDIT",
    tagline: "Know what to build before you build it.",
    description: "Identify the highest-value opportunities for AI and automation with an actionable, risk-mitigated technical roadmap.",
    href: "/services#ai-consulting-audit",
  },
  {
    number: "05",
    name: "PREDICTIVE ANALYTICS",
    tagline: "Know what may happen next.",
    description: "Turn historical and operational data into actionable forward-looking predictive signals for churn, demand, and growth.",
    href: "/services#predictive-analytics",
  },
  {
    number: "06",
    name: "STAFF AUGMENTATION",
    tagline: "Add experienced developers to your team.",
    description: "Experienced senior developers who integrate directly into your codebase and agile sprint workflow.",
    href: "/services#staff-augmentation",
  },
];

export function SystemsOverview() {
  return (
    <section className="py-24 sm:py-36 lg:py-40 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-3 block">
            AI SYSTEMS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#020617] leading-tight mb-4">
            Built around how your business <span className="text-[#334155] font-normal">actually works</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal">
            We design and build intelligent systems that connect your operations, data, software, and teams.
          </p>
        </ScrollReveal>

        {/* Tier 1 Flagships: 2 Large Spacious Cards with System Assembly & Pipeline Visuals */}
        <ScrollReveal variant="stagger-children" stagger={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          
          {/* 01 AI OS Flagship Card with System Assembly Choreography */}
          <Link
            href="/services#ai-os"
            className="p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-blue-300/90 hover:border-[#0066FF] transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 transform-gpu"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="inline-flex items-center gap-1.5 text-[#0066FF] font-bold text-sm px-2.5 py-1 rounded bg-blue-50/80 border border-blue-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  [01] FLAGSHIP
                </span>
                <span className="text-[#334155] group-hover:text-[#0066FF] transition-colors flex items-center gap-1 font-medium">
                  <span>View Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#020617] mb-2 group-hover:text-[#0066FF] transition-colors">
                AI OS
              </h3>

              <p className="text-sm font-mono text-[#0066FF] mb-4 font-semibold leading-snug">
                The operating system for an AI-enabled business.
              </p>

              <p className="text-sm sm:text-base text-[#0F172A] font-normal leading-relaxed">
                A connected intelligence and operations layer built around how your business actually operates — unifying workflows, reporting, and team coordination.
              </p>

              {/* 2D System Assembly Animation */}
              <AIOSAssemblyVisual />
            </div>
          </Link>

          {/* 02 Multi-Agent Systems Flagship Card with Pipeline Choreography */}
          <Link
            href="/services#multi-agent-systems"
            className="p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-blue-300/90 hover:border-[#0066FF] transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 transform-gpu"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="inline-flex items-center gap-1.5 text-[#0066FF] font-bold text-sm px-2.5 py-1 rounded bg-blue-50/80 border border-blue-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  [02] FLAGSHIP
                </span>
                <span className="text-[#334155] group-hover:text-[#0066FF] transition-colors flex items-center gap-1 font-medium">
                  <span>View Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#020617] mb-2 group-hover:text-[#0066FF] transition-colors">
                MULTI-AGENT SYSTEMS
              </h3>

              <p className="text-sm font-mono text-[#0066FF] mb-4 font-semibold leading-snug">
                Multiple specialized agents. One coordinated system.
              </p>

              <p className="text-sm sm:text-base text-[#0F172A] font-normal leading-relaxed">
                Specialized AI agents working together across complex, multi-stage business workflows without manual handoffs or friction.
              </p>

              {/* 2D Multi-Agent Pipeline Stepper */}
              <MultiAgentPipelineVisual />
            </div>
          </Link>

        </ScrollReveal>

        {/* Core Offerings: 4 Clean Spacious Cards with Stagger Reveal */}
        <ScrollReveal variant="stagger-children" stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {coreServices.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="p-6 sm:p-7 rounded-xl bg-white border border-slate-300 hover:border-[#0066FF]/60 transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transform-gpu"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#334155] font-bold">[{service.number}]</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all duration-200" />
                </div>

                <h4 className="font-display font-semibold text-base text-[#020617] mb-1.5 group-hover:text-[#0066FF] transition-colors">
                  {service.name}
                </h4>

                <p className="text-xs font-mono text-[#0066FF] mb-2.5 font-semibold leading-snug">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#1E293B] font-normal leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </ScrollReveal>

        {/* Supporting Capabilities Footnote & Explore Link with Reveal */}
        <ScrollReveal variant="fade-up" className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#334155] font-medium">
            Additional capabilities: Voice AI · Conversational AI
          </span>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0066FF] hover:text-[#0052CC] transition-colors group"
          >
            <span>Explore all 8 services and specifications</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
