"use client";

import React from "react";
import { Check } from "lucide-react";
import { aiOsCaseStudies } from "@/data/caseStudiesPageData";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CaseStudiesPageClient() {
  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-white">
      {/* Hero Header with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase block">
            Architecture Studies
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#020617] leading-tight">
            Production case studies <span className="text-[#334155] font-normal">& outcomes</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal pt-2">
            Technical breakdowns of AI OS deployments — connected reporting, workflow, and operational intelligence systems built for real businesses.
          </p>

          {/* AI OS Service Positioning */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#F8FAFC] border border-slate-300 space-y-3">
            <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase block">
              AI OS — Operating System
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#020617] leading-snug">
              The nervous system that runs your business while you run your business.
            </h2>
            <p className="text-sm text-[#0F172A] leading-relaxed font-normal">
              Not a chatbot. Not a single automation. A fully connected internal system — built around how a business actually operates — that connects reporting, onboarding, task management, workflow orchestration, and team coordination around one shared source of truth.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Case Studies Deep-Dive List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 space-y-16">
        {aiOsCaseStudies.map((study, idx) => (
          <ScrollReveal
            key={study.id}
            variant="fade-up"
            delay={idx * 0.08}
          >
            <div
              id={study.id}
              className="rounded-2xl bg-white border border-slate-300 p-8 sm:p-12 space-y-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-[#0066FF] font-bold">
                      [{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <span className="text-xs font-mono text-[#0066FF] uppercase font-bold">
                      {study.category}
                    </span>
                    <span className="text-slate-400 font-mono">•</span>
                    <span className="text-xs font-mono text-[#334155] font-semibold">
                      {study.client}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
                    {study.title}
                  </h2>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#334155] shrink-0 font-medium">
                  <span>{study.timeline}</span>
                  <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#0066FF] font-bold">
                    {study.service}
                  </span>
                </div>
              </div>

              {/* Core Narrative Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left: Challenge & Solution */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#020617] mb-2 font-bold">
                      Operational Challenge
                    </h3>
                    <p className="text-sm text-[#0F172A] leading-relaxed font-normal">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#020617] mb-2 font-bold">
                      Architectural Solution
                    </h3>
                    <p className="text-sm text-[#0F172A] leading-relaxed font-normal">
                      {study.solution}
                    </p>
                  </div>

                  {/* Operational Impact */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#020617] block font-bold">
                      Operational Impact
                    </span>
                    <div className="rounded-xl bg-[#F8FAFC] border border-slate-300 divide-y divide-slate-200 text-xs font-mono">
                      {study.operationalImpact.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-2 items-center hover:bg-blue-50/20 transition-colors"
                        >
                          <span className="text-[#020617] font-bold">{item.label}</span>
                          <span className="text-[#334155] font-medium">
                            {item.before}
                          </span>
                          <span className="text-[#0066FF] font-bold flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#0066FF]" />
                            {item.after}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: System Capabilities, Quote & Tech Stack */}
                <div className="lg:col-span-5 space-y-6">
                  {/* System Capabilities */}
                  <div className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-300 space-y-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#020617] block font-bold">
                      System Capabilities
                    </span>
                    <div className="space-y-3">
                      {study.systemCapabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="pb-3 border-b border-slate-200 last:border-0 last:pb-0 group">
                          <span className="text-[11px] font-mono uppercase text-[#334155] block mb-0.5 font-bold">
                            {cap.label}
                          </span>
                          <div className="flex items-baseline gap-1.5 text-xs font-mono">
                            <span className="text-[#334155] font-medium">{cap.before}</span>
                            <span className="text-[#0066FF] font-bold">→</span>
                            <span className="text-[#020617] font-bold group-hover:text-[#0066FF] transition-colors">
                              {cap.after}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {study.capabilitiesNote && (
                      <p className="text-xs text-[#1E293B] leading-relaxed font-normal pt-1">
                        {study.capabilitiesNote}
                      </p>
                    )}
                  </div>

                  {/* Extra Section (e.g. AI Agent / AI-Powered Intelligence) */}
                  {study.extraSection && (
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#020617] mb-2 font-bold">
                        {study.extraSection.heading}
                      </h3>
                      <p className="text-sm text-[#0F172A] leading-relaxed font-normal">
                        {study.extraSection.text}
                      </p>
                    </div>
                  )}

                  {/* Stakeholder Quote */}
                  <blockquote className="p-5 rounded-xl bg-[#F8FAFC] border-l-2 border-[#0066FF] text-xs sm:text-sm text-[#0F172A] italic font-sans leading-relaxed">
                    "{study.quote.text}"
                    <footer className="mt-2 text-xs font-mono text-[#334155] font-semibold not-italic">
                      — {study.quote.author}
                    </footer>
                  </blockquote>

                  {/* Tech Stack Chips */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#020617] block mb-2 font-bold">
                      Deployed Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-slate-300 text-xs font-mono text-[#0F172A] font-semibold hover:border-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
