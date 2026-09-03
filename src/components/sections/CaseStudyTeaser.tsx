"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { gsap } from "@/lib/gsap";

export function CaseStudyTeaser() {
  const [activeIdx, setActiveIdx] = useState(0);
  const featuredCaseStudies = caseStudiesData.slice(0, 3);
  const current = featuredCaseStudies[activeIdx];
  const deepDiveRef = useRef<HTMLDivElement>(null);

  const handleStudyChange = (idx: number) => {
    if (idx === activeIdx) return;

    if (deepDiveRef.current) {
      gsap.fromTo(
        deepDiveRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
    setActiveIdx(idx);
  };

  return (
    <section className="py-24 sm:py-36 lg:py-40 relative bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-3 block">
              Case Study Examples
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#020617] leading-tight">
              Production architectures <span className="text-[#334155] font-normal">and measured outcomes</span>.
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="text-xs font-mono text-[#0066FF] hover:text-[#0052CC] inline-flex items-center gap-1.5 transition-colors shrink-0 font-bold group"
          >
            <span>View all 6 case studies</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </ScrollReveal>

        {/* Interactive Case Study Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selector List with Stagger */}
          <ScrollReveal variant="stagger-children" stagger={0.1} className="lg:col-span-5 flex flex-col gap-3.5">
            {featuredCaseStudies.map((cs, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={cs.id}
                  onClick={() => handleStudyChange(idx)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 transform-gpu active:scale-98 ${
                    isActive
                      ? "bg-white border-blue-300 text-[#020617] shadow-md -translate-x-1"
                      : "bg-white/80 border-slate-300 text-[#334155] hover:border-slate-400 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#0066FF] font-bold">{cs.industry}</span>
                    <span className="text-[#334155] text-[11px] font-semibold">{cs.heroTag}</span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-[#020617] mb-1.5">
                    {cs.clientTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1E293B] line-clamp-2 font-normal leading-relaxed">
                    {cs.summary}
                  </p>
                </div>
              );
            })}
          </ScrollReveal>

          {/* Right Column: Deep-Dive Card */}
          <ScrollReveal variant="fade-up" delay={0.15} className="lg:col-span-7">
            <div ref={deepDiveRef} className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 text-xs font-mono">
                <span className="text-[#0066FF] font-bold">
                  [{current.clientPlaceholder}]
                </span>
                <span className="text-[#334155] font-semibold">
                  Timeline: {current.timeline}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#020617]">
                  {current.clientTitle}
                </h3>
                <p className="text-sm text-[#0F172A] leading-relaxed font-normal">
                  {current.challenge}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 p-5 rounded-xl bg-[#F8FAFC] border border-slate-300">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="group">
                    <span className="text-[10px] font-mono uppercase text-[#334155] font-bold block mb-1">
                      {m.label}
                    </span>
                    <span className="font-mono text-base sm:text-lg font-bold text-[#020617] block group-hover:text-[#0066FF] transition-colors">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono text-[#0066FF] font-bold">
                      {m.delta}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="p-5 rounded-xl bg-[#F8FAFC] border-l-2 border-[#0066FF] text-xs sm:text-sm text-[#0F172A] italic font-sans leading-relaxed">
                "{current.quote.text}"
                <footer className="mt-2 text-xs font-mono text-[#334155] font-semibold not-italic">
                  — {current.quote.author}, {current.quote.role}
                </footer>
              </blockquote>

              {/* Link to Full Detail */}
              <div className="pt-2 flex justify-end">
                <Link
                  href="/case-studies"
                  className="text-xs font-mono text-[#0066FF] hover:text-[#0052CC] inline-flex items-center gap-1.5 transition-colors font-bold group"
                >
                  <span>Read complete case study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
