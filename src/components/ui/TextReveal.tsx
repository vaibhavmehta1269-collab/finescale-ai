"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.04,
  highlightWords = [],
  highlightClass = "text-[#0066FF] font-semibold",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".reveal-word-inner");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          y: "110%",
          opacity: 0,
          rotateZ: 2,
        },
        {
          y: "0%",
          opacity: 1,
          rotateZ: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: container,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [delay, stagger]);

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={cn("flex flex-wrap items-baseline gap-x-[0.28em] gap-y-1 overflow-hidden", className)}
    >
      {words.map((word, idx) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span key={idx} className="inline-block overflow-hidden py-1">
            <span
              className={cn(
                "reveal-word-inner inline-block transform-gpu will-change-transform",
                isHighlighted ? highlightClass : "",
                wordClassName
              )}
            >
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
}
