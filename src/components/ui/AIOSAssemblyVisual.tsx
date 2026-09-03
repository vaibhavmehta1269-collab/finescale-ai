"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function AIOSAssemblyVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 1. Draw SVG connecting lines from 150 to 0
      tl.fromTo(
        ".ai-os-svg-line",
        { strokeDashoffset: 160 },
        { strokeDashoffset: 0, duration: 1.1, stagger: 0.15, ease: "power2.out" }
      );

      // 2. Animate nodes into position
      tl.fromTo(
        ".ai-os-node",
        { opacity: 0, scale: 0.85, y: 8 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" },
        "-=0.8"
      );

      // 3. Central AI OS pulse
      tl.fromTo(
        ".ai-os-core-pulse",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mt-6 pt-5 border-t border-slate-200/80">
      <div className="flex items-center justify-between text-[10px] font-mono text-[#334155] uppercase tracking-wider mb-3 font-semibold">
        <span>System Assembly Architecture</span>
        <span className="text-[#0066FF] font-bold">5-Layer Connected Mesh</span>
      </div>

      <div className="relative p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
        {/* Layer 1: Data Sources */}
        <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-mono mb-2">
          <div className="ai-os-node p-1.5 rounded bg-[#F8FAFC] border border-slate-300 text-[#0F172A] font-medium truncate">
            Data
          </div>
          <div className="ai-os-node p-1.5 rounded bg-[#F8FAFC] border border-slate-300 text-[#0F172A] font-medium truncate">
            Systems
          </div>
          <div className="ai-os-node ai-os-core-pulse p-1.5 rounded bg-blue-50 border border-blue-300 text-[#0066FF] font-bold truncate col-span-1 shadow-xs">
            AI OS
          </div>
          <div className="ai-os-node p-1.5 rounded bg-[#F8FAFC] border border-slate-300 text-[#0F172A] font-medium truncate">
            Workflows
          </div>
          <div className="ai-os-node p-1.5 rounded bg-[#F8FAFC] border border-slate-300 text-[#0F172A] font-medium truncate">
            Actions
          </div>
        </div>

        {/* 2D SVG Connecting Path */}
        <div className="relative h-6 w-full flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 300 24" fill="none">
            <line
              x1="30"
              y1="12"
              x2="270"
              y2="12"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              className="ai-os-svg-line"
              d="M 30 12 L 150 12 L 270 12"
              stroke="#0066FF"
              strokeWidth="2"
              strokeDasharray="160"
              strokeDashoffset="0"
            />
            {/* 5 Nodes */}
            <circle cx="30" cy="12" r="3.5" fill="#0066FF" />
            <circle cx="90" cy="12" r="3.5" fill="#0066FF" />
            <circle cx="150" cy="12" r="5" fill="#0066FF" className="animate-ping opacity-30" />
            <circle cx="150" cy="12" r="4.5" fill="#0066FF" />
            <circle cx="210" cy="12" r="3.5" fill="#0066FF" />
            <circle cx="270" cy="12" r="3.5" fill="#0066FF" />
          </svg>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-[#334155] pt-1">
          <span>Disconnected Inputs</span>
          <span className="text-[#0066FF] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            Unified Business System
          </span>
        </div>
      </div>
    </div>
  );
}
