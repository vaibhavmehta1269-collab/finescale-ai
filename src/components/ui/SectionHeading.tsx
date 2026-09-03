"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlightText,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleMaskRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

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
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      // 1. Eyebrow: Small fade + upward movement
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }

      // 2. Headline: Masked line reveal (120ms gap)
      if (titleMaskRef.current) {
        const line = titleMaskRef.current.querySelector(".heading-mask-inner");
        if (line) {
          tl.fromTo(
            line,
            { y: "115%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 0.75, ease: "power3.out" },
            "-=0.38"
          );
        }
      }

      // 3. Supporting copy: Reveal slightly afterward (180ms)
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClass[align], className)}>
      {badge && (
        <span
          ref={badgeRef}
          className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-3 block"
        >
          {badge}
        </span>
      )}

      <div className="overflow-hidden py-1">
        <h2
          ref={titleMaskRef}
          className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#020617] leading-[1.2] mb-3 overflow-hidden"
        >
          <span className="heading-mask-inner inline-block transform-gpu will-change-transform">
            {title}{" "}
            {highlightText && (
              <span className="text-[#334155] font-normal">
                {highlightText}
              </span>
            )}
          </span>
        </h2>
      </div>

      {description && (
        <p
          ref={descRef}
          className="text-[#0F172A] text-sm sm:text-base leading-relaxed max-w-2xl font-normal"
        >
          {description}
        </p>
      )}
    </div>
  );
}
