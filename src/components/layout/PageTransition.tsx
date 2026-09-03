"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }

    const el = containerRef.current;
    const wipe = wipeRef.current;
    if (!el) return;

    // Fast, crisp cinematic entrance with subtle blue top line wipe
    if (wipe) {
      gsap.fromTo(
        wipe,
        { scaleX: 0, opacity: 1 },
        { scaleX: 1, opacity: 0, duration: 0.55, ease: "power3.inOut" }
      );
    }

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
      }
    );

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div ref={containerRef} className="w-full flex-1 flex flex-col relative">
      {/* Subtle top transition wipe bar */}
      <div
        ref={wipeRef}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0066FF] z-[9999] origin-left pointer-events-none opacity-0"
      />
      {children}
    </div>
  );
}
