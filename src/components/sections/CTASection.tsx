"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // 1. Radial Light Expansion
      if (glowRef.current) {
        tl.fromTo(
          glowRef.current,
          { scale: 0.6, opacity: 0 },
          { scale: 1.2, opacity: 0.9, duration: 1.4, ease: "power2.out" }
        );
      }

      // 2. Eyebrow reveal
      tl.fromTo(
        ".cta-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=1.1"
      );

      // 3. Masked Headline Reveal
      tl.fromTo(
        ".cta-headline-mask",
        { y: "115%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.7"
      );

      // 4. Supporting text
      tl.fromTo(
        ".cta-copy",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // 5. Button scale 0.96 -> 1
      tl.fromTo(
        ".cta-button-group",
        { opacity: 0, scale: 0.96, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-28 sm:py-40 lg:py-44 relative overflow-hidden bg-[#F1F6FF]/70 border-t border-slate-200">
      {/* Subtle expanding blue radial light */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-200/50 via-sky-100/40 to-blue-200/50 blur-[130px] rounded-full pointer-events-none transform-gpu will-change-transform"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="cta-eyebrow text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase block">
          Get Started
        </span>

        <div className="overflow-hidden py-1">
          <h2 className="cta-headline-mask font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#020617] tracking-tight leading-[1.15] mb-6 transform-gpu will-change-transform">
            Ready to scope your <span className="text-[#334155] font-normal">AI operating system</span>?
          </h2>
        </div>

        <p className="cta-copy text-base sm:text-lg text-[#0F172A] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Schedule an architecture session with our systems engineers to evaluate your current bottlenecks, security requirements, and integration timeline.
        </p>

        {/* Buttons with subtle scale reveal & magnetic interaction */}
        <div className="cta-button-group flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            href="/services#calculator"
            variant="primary"
            size="lg"
            magnetic
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Scope an Automation
          </Button>

          <Button
            href="/services"
            variant="secondary"
            size="lg"
            magnetic
          >
            Explore All 8 Services
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#1E293B] font-semibold">
          <span>• Private Cloud Enclaves</span>
          <span>• Zero Training Data Retention</span>
          <span>• 100% IP & Code Ownership</span>
        </div>
      </div>
    </section>
  );
}
