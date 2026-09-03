"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ScrollRevealOptions {
  variant?: "fade-up" | "fade-down" | "fade-in" | "scale-up" | "stagger-children" | "stagger-horizontal";
  stagger?: number;
  duration?: number;
  delay?: number;
  threshold?: string; // e.g. "top 85%"
  yOffset?: number;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    variant = "fade-up",
    stagger = 0.08,
    duration = 0.75,
    delay = 0,
    threshold = "top 88%",
    yOffset = 30,
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      if (variant === "stagger-children") {
        const children = el.children;
        if (!children.length) return;

        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: yOffset,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: duration,
            stagger: stagger,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          }
        );
      } else if (variant === "stagger-horizontal") {
        const children = el.children;
        if (!children.length) return;

        gsap.fromTo(
          children,
          {
            opacity: 0,
            x: -25,
          },
          {
            opacity: 1,
            x: 0,
            duration: duration,
            stagger: stagger,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          }
        );
      } else if (variant === "scale-up") {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.94,
          },
          {
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          }
        );
      } else if (variant === "fade-down") {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: -yOffset,
          },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          }
        );
      } else if (variant === "fade-in") {
        gsap.fromTo(
          el,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: duration,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          }
        );
      } else {
        // fade-up
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: yOffset,
          },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [variant, stagger, duration, delay, threshold, yOffset, once]);

  return ref;
}
