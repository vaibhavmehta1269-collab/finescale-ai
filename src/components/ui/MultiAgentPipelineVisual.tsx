"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const stages = [
  { id: "res", label: "Research", code: "01" },
  { id: "qual", label: "Qualification", code: "02" },
  { id: "exec", label: "Execution", code: "03" },
  { id: "book", label: "Booking", code: "04" },
  { id: "crm", label: "CRM Mutation", code: "05" },
];

export function MultiAgentPipelineVisual() {
  const [activeStage, setActiveStage] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    // Automatic sequential workflow pulse cycle
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2000);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pipeline-node",
        { opacity: 0, scale: 0.88, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-6 pt-5 border-t border-slate-200/80">
      <div className="flex items-center justify-between text-[10px] font-mono text-[#334155] uppercase tracking-wider mb-3 font-semibold">
        <span>Multi-Agent Swarm Pipeline</span>
        <span className="text-[#0066FF] font-bold">
          Active: [{stages[activeStage].code}] {stages[activeStage].label}
        </span>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
        {/* Horizontal 5-Stage Stepper */}
        <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
          {stages.map((st, idx) => {
            const isActive = idx === activeStage;
            const isDone = idx < activeStage;
            return (
              <div
                key={st.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveStage(idx);
                }}
                className={`pipeline-node p-2 rounded-lg border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0066FF] text-white border-[#0066FF] shadow-xs scale-105"
                    : isDone
                    ? "bg-blue-50/80 text-[#0066FF] border-blue-200"
                    : "bg-[#F8FAFC] text-[#334155] border-slate-300 hover:border-slate-400"
                }`}
              >
                <span className="block text-[9px] opacity-80 mb-0.5">{st.code}</span>
                <span className="truncate block font-semibold">{st.label}</span>
              </div>
            );
          })}
        </div>

        {/* 2D Pipeline Progress Bar */}
        <div className="relative h-1.5 w-full bg-slate-200 rounded-full mt-3 overflow-hidden">
          <div
            className="absolute top-0 bottom-0 left-0 bg-[#0066FF] transition-all duration-500 rounded-full"
            style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-[#334155] pt-2">
          <span>Inbound Intent</span>
          <span className="text-[#0066FF] font-bold">Automated Coordinated Handoff</span>
        </div>
      </div>
    </div>
  );
}
