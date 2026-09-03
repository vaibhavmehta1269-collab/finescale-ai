"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable for pointer devices (disable on mobile touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    setIsVisible(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const setPos = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      gsap.to(dot, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.08,
        ease: "power2.out",
      });
    };

    const ticker = gsap.ticker.add(() => {
      // Lerp ring towards mouse
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;

      gsap.set(ring, {
        x: pos.x,
        y: pos.y,
      });
    });

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track hoverable targets
    const handleHoverTarget = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("[data-magnetic]") ||
        target.closest(".interactive-hover")
      );

      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", setPos);
    window.addEventListener("mousemove", handleHoverTarget);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", setPos);
      window.removeEventListener("mousemove", handleHoverTarget);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      gsap.ticker.remove(ticker);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Center sharp dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-200"
        style={{
          width: isHovered ? "5px" : "4px",
          height: isHovered ? "5px" : "4px",
          backgroundColor: "#0066FF",
        }}
      />

      {/* Trailing ambient ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-200 ease-out border ${
          isHovered
            ? "w-11 h-11 border-[#0066FF] bg-[#0066FF]/08"
            : isClicking
            ? "w-7 h-7 border-[#0052CC] bg-[#0066FF]/15"
            : "w-8 h-8 border-slate-900/25 bg-slate-900/02"
        }`}
      />
    </div>
  );
}
