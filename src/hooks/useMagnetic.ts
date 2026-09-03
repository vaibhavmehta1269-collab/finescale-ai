"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticOptions {
  strength?: number;
  textStrength?: number;
  ease?: string;
  duration?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(
  options: MagneticOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    strength = 0.35,
    textStrength = 0.15,
    ease = "power2.out",
    duration = 0.5,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration: duration,
        ease: ease,
      });

      const textEl = el.querySelector<HTMLElement>(".magnetic-inner");
      if (textEl) {
        gsap.to(textEl, {
          x: deltaX * textStrength,
          y: deltaY * textStrength,
          duration: duration,
          ease: ease,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });

      const textEl = el.querySelector<HTMLElement>(".magnetic-inner");
      if (textEl) {
        gsap.to(textEl, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, textStrength, ease, duration]);

  return ref;
}
