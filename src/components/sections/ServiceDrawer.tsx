"use client";

import { useEffect, useRef } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";
import { gsap } from "@/lib/gsap";

interface ServiceDrawerProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function ServiceDrawer({ service, onClose }: ServiceDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // GSAP opening animation
      if (backdropRef.current && panelRef.current) {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );

        gsap.fromTo(
          panelRef.current,
          { x: "100%" },
          { x: "0%", duration: 0.45, ease: "power3.out" }
        );

        // Stagger inner sections
        const items = panelRef.current.querySelectorAll(".drawer-stagger-item");
        if (items.length) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, delay: 0.15, ease: "power2.out" }
          );
        }
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  const handleClose = () => {
    if (backdropRef.current && panelRef.current) {
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" });
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power3.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity cursor-pointer"
      />

      {/* Drawer Panel */}
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-2xl bg-white border-l border-slate-300 h-full overflow-y-auto p-8 sm:p-10 flex flex-col justify-between shadow-2xl space-y-8"
      >
        <div>
          {/* Header */}
          <div className="drawer-stagger-item flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#0066FF] uppercase font-bold">
                [{service.orderNumber}] {service.category}
              </span>
              <span className="text-slate-400 font-mono">•</span>
              <span className="text-xs font-mono text-[#334155] font-semibold">
                {service.badge}
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-lg border border-slate-300 text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Short Positioning */}
          <div className="drawer-stagger-item mb-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#020617] mb-1.5">
              {service.name}
            </h3>
            <p className="text-sm font-mono text-[#0066FF] font-bold">
              {service.shortPositioning}
            </p>
          </div>

          {/* Positioning Line Quote Callout */}
          <div className="drawer-stagger-item p-4 rounded-xl bg-[#F8FAFC] border-l-2 border-[#0066FF] text-xs sm:text-sm font-semibold text-[#020617] font-sans mb-6 leading-relaxed">
            "{service.positioningLine}"
          </div>

          {/* Main Description */}
          <p className="drawer-stagger-item text-[#0F172A] text-sm leading-relaxed mb-6 font-normal">
            {service.fullDescription}
          </p>

          {/* Transformation Before vs After */}
          <div className="drawer-stagger-item space-y-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#020617] block font-bold">
              Operational Transformation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-300 space-y-1.5">
                <span className="text-xs font-mono text-[#334155] uppercase font-bold block">
                  Before FineScale AI
                </span>
                <p className="text-xs text-[#0F172A] leading-relaxed font-sans font-normal">
                  {service.beforeState}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-300 space-y-1.5">
                <span className="text-xs font-mono text-[#0066FF] uppercase font-bold block">
                  After System Deployment
                </span>
                <p className="text-xs text-[#020617] leading-relaxed font-sans font-semibold">
                  {service.afterState}
                </p>
              </div>
            </div>
          </div>

          {/* Key Metric & Typical Outcome Box */}
          <div className="drawer-stagger-item grid grid-cols-2 gap-3.5 p-4 rounded-xl bg-[#F8FAFC] border border-slate-300 mb-6 text-xs font-mono">
            <div>
              <span className="text-[#334155] font-semibold uppercase block mb-0.5">
                Target Benchmark
              </span>
              <span className="font-bold text-[#020617]">
                {service.latencyOrMetric}
              </span>
            </div>
            <div>
              <span className="text-[#334155] font-semibold uppercase block mb-0.5">
                Expected Impact
              </span>
              <span className="font-bold text-[#0066FF]">
                {service.typicalRoi}
              </span>
            </div>
          </div>

          {/* Capabilities Included */}
          <div className="drawer-stagger-item mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#020617] block mb-3 font-bold">
              What It Can Include & Support
            </h4>
            <div className="space-y-2">
              {service.includedCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#0F172A] font-sans font-medium"
                >
                  <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="drawer-stagger-item mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#020617] block mb-3 font-bold">
              Execution Architecture Flow
            </h4>
            <div className="flex flex-col gap-2 font-mono text-xs">
              {service.architectureFlow.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#020617]"
                >
                  <span className="w-4 h-4 rounded bg-slate-300 text-[#020617] flex items-center justify-center font-bold text-[10px] shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-semibold">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Stack */}
          <div className="drawer-stagger-item mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#020617] block mb-2 font-bold">
              Supported Platforms & Integrations
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.integrationStack.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#F8FAFC] border border-slate-300 text-xs font-mono text-[#0F172A] font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="drawer-stagger-item pt-5 border-t border-slate-200 flex gap-3">
          <Button
            href="/services#calculator"
            variant="primary"
            className="w-full"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            onClick={handleClose}
          >
            Scope {service.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
