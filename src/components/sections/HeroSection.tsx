"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import { Button } from "@/components/ui/Button";
import { gsap } from "@/lib/gsap";

// Premium technical display face — scoped to the hero headline only.
const heroDisplayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const modules = [
  {
    id: "ai-os",
    name: "AI OS",
    tagline: "The operating system for an AI-enabled business",
    description: "Connects workflows, reporting, applications, and teams into one coordinated operating system.",
    steps: [
      { label: "Data & Workflow Ingestion", detail: "Synchronizes information across business tools" },
      { label: "Operational Coordination", detail: "Automated routing and human approval gates" },
      { label: "Continuous Action", detail: "Daily briefings, reporting, and priority tracking" },
    ],
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Systems",
    tagline: "Multiple specialized agents. One coordinated system.",
    description: "Specialized AI agents that work together across complex multi-stage business workflows.",
    steps: [
      { label: "Qualification & Triage", detail: "Evaluates incoming requests and intent" },
      { label: "Research & Synthesis", detail: "Gathers and structures background context" },
      { label: "Execution & Follow-Up", detail: "Coordinates actions, booking, and records" },
    ],
  },
  {
    id: "custom-dev",
    name: "Custom Software",
    tagline: "Software built around your business",
    description: "Custom applications, platforms, integrations, and dedicated development capacity.",
    steps: [
      { label: "Custom Applications", detail: "Tailored web platforms and internal tools" },
      { label: "Predictive Signals", detail: "Actionable early indicators from historical data" },
      { label: "Engineering Capacity", detail: "Experienced developers integrated with your team" },
    ],
  },
];

export function HeroSection() {
  const [activeModule, setActiveModule] = useState(0);
  const current = modules[activeModule];
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const moduleContentRef = useRef<HTMLDivElement>(null);

  // Cinematic Entrance and Layered Parallax Scroll Exit
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Initial Load Entrance Timeline
      const loadTl = gsap.timeline({ delay: 0.15 });

      // Eyebrow badge — subtle horizontal drift + tracking collapse
      loadTl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
      );
      loadTl.fromTo(
        ".hero-eyebrow-label",
        { letterSpacing: "0.02em" },
        { letterSpacing: "0.07em", duration: 0.8, ease: "power2.out" },
        "<"
      );

      // Headline lines — alternating left/right cinematic entrance for depth
      loadTl.fromTo(
        ".hero-headline-line",
        { opacity: 0, x: (i: number) => (i % 2 === 0 ? -70 : 70) },
        { opacity: 1, x: 0, duration: 0.9, stagger: 0.14, ease: "power3.out" },
        "-=0.35"
      );

      // Supporting copy — enters from the opposite direction of the headline
      loadTl.fromTo(
        copyRef.current,
        { opacity: 0, x: 36 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      );

      // CTA with 0.96 -> 1 scale reveal
      loadTl.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.96, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "power2.out" },
        "-=0.35"
      );

      // Core value stats footer
      loadTl.fromTo(
        ".hero-core-values",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
        "-=0.3"
      );

      // Centered 2D visual architecture card initialization
      loadTl.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.96, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.5"
      );

      loadTl.fromTo(
        ".hero-svg-path",
        { strokeDashoffset: 150 },
        { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" },
        "-=0.5"
      );

      // 2. Layered Scroll Exit Parallax
      gsap.to(headlineRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(copyRef.current, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(ctaRef.current, {
        y: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(visualRef.current, {
        y: 25,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Smooth module switch transition
  const handleModuleChange = (idx: number) => {
    if (idx === activeModule) return;

    if (moduleContentRef.current) {
      gsap.fromTo(
        moduleContentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
    setActiveModule(idx);
  };

  return (
    <section ref={sectionRef} className="relative pt-36 sm:pt-48 pb-28 sm:pb-36 overflow-hidden bg-transparent">
      {/* Soft blue ambient highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#F1F6FF] blur-[140px] pointer-events-none rounded-full" />

      {/* Drifting left/right glow pair for subtle horizontal composition movement */}
      <div className="hero-glow-left absolute top-10 left-0 w-[420px] h-[420px] bg-[#DCEBFF] blur-[130px] pointer-events-none rounded-full opacity-60" />
      <div className="hero-glow-right absolute top-1/3 right-0 w-[380px] h-[380px] bg-[#EAF2FF] blur-[130px] pointer-events-none rounded-full opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* CENTERED INTRO CONTENT: BADGE, HEADLINE, SUBTEXT & BUTTONS */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center space-y-8">

          {/* Eyebrow Badge */}
          <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-slate-300 text-xs font-mono text-[#1E293B] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="hero-eyebrow-label font-semibold tracking-wide">AI Systems • Software Development • Automation</span>
          </div>

          {/* Masked Headline Lines (Centered & Spacious) */}
          <h1
            ref={headlineRef}
            className={`${heroDisplayFont.className} text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem] font-bold text-[#020617] tracking-tight leading-[1.1]`}
          >
            <div className="overflow-hidden py-0.5">
              <span className="hero-headline-line inline-block transform-gpu will-change-transform">
                We build AI systems that
              </span>
            </div>
            <div className="overflow-hidden py-0.5">
              <span className="hero-headline-line inline-block transform-gpu will-change-transform">
                become part of <span className="text-[#334155] font-medium">how your</span>
              </span>
            </div>
            <div className="overflow-hidden py-0.5">
              <span className="hero-headline-line inline-block transform-gpu will-change-transform text-[#334155] font-medium">
                business operates.
              </span>
            </div>
          </h1>

          {/* Supporting Copy (Centered & High Readability) */}
          <p ref={copyRef} className="text-base sm:text-xl text-[#0F172A] leading-[1.75] max-w-2xl mx-auto font-normal transform-gpu pt-1">
            We design, build, and operate intelligent business systems — from connected operational layers and multi-agent workflows to custom software development and predictive analytics.
          </p>

          {/* Centered CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 transform-gpu">
            <Button
              href="/services#calculator"
              variant="primary"
              size="lg"
              magnetic
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="px-7 py-3.5 shadow-sm hover:shadow-lg"
            >
              Model Scope & Economics
            </Button>

            <Button
              href="/services"
              variant="secondary"
              size="lg"
              magnetic
              className="px-7 py-3.5"
            >
              Explore Services
            </Button>
          </div>

          {/* Quiet Core Value Strip (Centered with Clean Dividers) */}
          <div className="hero-core-values pt-8 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-xs font-mono text-[#334155] max-w-2xl mx-auto w-full">
            <div className="group cursor-default sm:border-r sm:border-slate-200 sm:pr-6 last:border-0">
              <span className="text-[#020617] block font-bold text-sm mb-0.5 group-hover:text-[#0066FF] transition-colors">AI OS</span>
              <span className="text-[#1E293B]">Connected operations</span>
            </div>
            <div className="group cursor-default sm:border-r sm:border-slate-200 sm:pr-6 last:border-0">
              <span className="text-[#020617] block font-bold text-sm mb-0.5 group-hover:text-[#0066FF] transition-colors">Multi-Agent</span>
              <span className="text-[#1E293B]">Coordinated workflows</span>
            </div>
            <div className="group cursor-default">
              <span className="text-[#020617] block font-bold text-sm mb-0.5 group-hover:text-[#0066FF] transition-colors">Custom Dev</span>
              <span className="text-[#1E293B]">Tailored software</span>
            </div>
          </div>
        </div>

        {/* SPACIOUS SYSTEMS ARCHITECTURE PREVIEW WINDOW (PLACED BELOW INTRO & BUTTONS IN THE CENTER) */}
        <div ref={visualRef} className="mt-16 sm:mt-24 max-w-4xl mx-auto w-full transform-gpu will-change-transform">
          <div className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-10 space-y-7 shadow-sm hover:shadow-xl transition-all duration-300">
            
            {/* Header: Module Selector & Live Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" strokeOpacity="0.2" />
                  <path
                    className="hero-svg-path"
                    strokeDasharray="150"
                    d="M12 3a9 9 0 0 1 9 9"
                  />
                </svg>
                <span className="text-xs font-mono uppercase tracking-wider text-[#020617] font-bold">
                  Systems Architecture Preview Window
                </span>
              </div>
              <span className="text-xs font-mono text-[#0066FF] font-bold px-3 py-1 rounded-md bg-blue-50/80 border border-blue-200 self-start sm:self-auto">
                0{activeModule + 1} / 03 Offering Modules
              </span>
            </div>

            {/* Module Tabs (Spacious 3-Column Switcher) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {modules.map((mod, idx) => (
                <button
                  key={mod.id}
                  onClick={() => handleModuleChange(idx)}
                  className={`py-3 px-4 rounded-xl text-left text-xs font-mono transition-all duration-200 cursor-pointer active:scale-95 ${
                    idx === activeModule
                      ? "bg-[#F1F6FF] text-[#0066FF] font-bold border border-blue-300 shadow-xs"
                      : "bg-[#F8FAFC] text-[#334155] border border-slate-200 hover:text-[#020617] hover:bg-slate-100 font-semibold"
                  }`}
                >
                  <span className="text-[10px] text-[#0066FF] block mb-0.5">0{idx + 1}</span>
                  <span className="truncate block font-semibold text-sm">{mod.name}</span>
                </button>
              ))}
            </div>

            {/* Active Module Details with 2D Visual Flow */}
            <div ref={moduleContentRef} className="space-y-6 pt-2">
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#020617]">
                  {current.tagline}
                </h3>
                <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              {/* Workflow Steps in Spacious 3-Column Cards */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#334155] block font-bold">
                  Workflow Execution Architecture
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {current.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200 flex flex-col justify-between space-y-2 group"
                    >
                      <div className="flex items-center gap-2 text-[#0F172A]">
                        <span className="w-5 h-5 rounded-md bg-slate-200 group-hover:bg-[#0066FF] group-hover:text-white transition-colors text-[#0F172A] flex items-center justify-center font-bold text-[11px] font-mono">
                          {idx + 1}
                        </span>
                        <span className="font-semibold text-xs text-[#020617] font-mono">{step.label}</span>
                      </div>
                      <p className="text-[#334155] text-xs font-sans font-medium leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Specifications */}
            <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#334155]">
              <span className="font-semibold text-[#020617]">• Deterministic State Machine Boundaries</span>
              <span className="text-[#0066FF] font-bold">• Human-in-the-Loop Approval Gates</span>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-glow-left {
            animation: heroGlowDriftLeft 14s ease-in-out infinite;
          }
          .hero-glow-right {
            animation: heroGlowDriftRight 16s ease-in-out infinite;
          }
        }
        @keyframes heroGlowDriftLeft {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(60px, 20px, 0); }
        }
        @keyframes heroGlowDriftRight {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-60px, -15px, 0); }
        }
      `}</style>
    </section>
  );
}
