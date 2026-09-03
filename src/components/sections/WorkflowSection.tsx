"use client";

import { useState, useRef } from "react";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { gsap } from "@/lib/gsap";

const workflowSteps = [
  {
    phase: "01",
    title: "Workflow & Security Scoping",
    duration: "Week 01 - 02",
    summary: "Audit the operational bottleneck, map existing database schemas, and define deterministic boundary constraints.",
    deliverables: [
      "VPC boundary specification & API mapping",
      "SOP rule decomposition into finite states",
      "Dataset compilation for accuracy benchmarking",
      "Security & credential isolation architecture",
    ],
    benchmark: "Zero data leakage architecture",
  },
  {
    phase: "02",
    title: "System & Workflow Build",
    duration: "Week 03 - 04",
    summary: "Construct multi-agent state machines, connected operational pipelines, and live tool-calling integrations.",
    deliverables: [
      "Deterministic state machine implementation",
      "Coordinated agent handoff pipelines",
      "Authenticated 2-way CRM / ERP database mutations",
      "Configurable human approval triggers",
    ],
    benchmark: "Sub-second workflow execution",
  },
  {
    phase: "03",
    title: "Synthetic Stress Testing",
    duration: "Week 05 - 06",
    summary: "Execute synthetic concurrent workflows, edge-case prompt variations, and failover simulations.",
    deliverables: [
      "Adversarial edge-case penetration tests",
      "API concurrency and failover stress runs",
      "Live sandbox testing with organization stakeholders",
      "Deterministic margin and policy verification",
    ],
    benchmark: "Deterministic execution validation",
  },
  {
    phase: "04",
    title: "Production Cutover & Telemetry",
    duration: "Week 07+",
    summary: "Seamless live deployment with continuous monitoring, execution tracking, and periodic system improvements.",
    deliverables: [
      "Real-time decision logging and anomaly alerts",
      "Dedicated Slack / Teams engineering bridge",
      "Scheduled model calibrations and feature expansions",
      "Elastic concurrency scaling",
    ],
    benchmark: "Production reliability guarantee",
  },
];

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = workflowSteps[activeStep];
  const stepDetailRef = useRef<HTMLDivElement>(null);

  const handleStepChange = (idx: number) => {
    if (idx === activeStep) return;

    if (stepDetailRef.current) {
      gsap.fromTo(
        stepDetailRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
    setActiveStep(idx);
  };

  return (
    <section className="py-24 sm:py-36 lg:py-40 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-3 block">
            Implementation Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#020617] leading-tight mb-4">
            A structured path <span className="text-[#334155] font-normal">from scoping to production</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal">
            Every deployment follows a 4-phase sprint methodology to ensure integration into your existing systems without disrupting live operations.
          </p>
        </ScrollReveal>

        {/* 4 Steps Horizontal Progress Bar with Stagger */}
        <ScrollReveal variant="stagger-children" stagger={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {workflowSteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => handleStepChange(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                  isActive
                    ? "bg-[#F1F6FF] border-blue-300 text-[#020617] shadow-sm"
                    : "bg-[#F8FAFC] border-slate-300 text-[#334155] hover:text-[#020617] hover:border-slate-400"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={isActive ? "text-[#0066FF] font-bold" : "text-[#1E293B] font-semibold"}>
                    Phase {step.phase}
                  </span>
                  <span className="text-[#334155] text-[11px] font-medium">{step.duration}</span>
                </div>
                <h3 className="font-display font-semibold text-sm text-[#020617] truncate">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Active Step Details */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div ref={stepDetailRef} className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#0066FF] font-bold uppercase px-2.5 py-1 rounded bg-blue-50 border border-blue-200">
                    Phase {current.phase} • {current.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#020617]">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-normal">
                  {current.summary}
                </p>

                <div className="pt-3 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#334155] block font-bold">
                    Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#0F172A] font-sans font-medium"
                      >
                        <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benchmark Note */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#F8FAFC] border border-slate-300 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#334155] font-bold block">
                  Target Benchmark
                </span>
                <p className="text-sm font-bold text-[#020617] font-mono">
                  {current.benchmark}
                </p>
                <p className="text-xs text-[#334155] leading-relaxed font-sans font-medium">
                  Rigorous testing gates must pass 100% of validation metrics before moving to the subsequent sprint phase.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
