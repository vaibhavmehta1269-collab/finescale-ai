"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label: string;
  sublabel?: string;
  className?: string;
}

export function MetricCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
  label,
  sublabel,
  className,
}: MetricCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startVal = 0;
          const endVal = value;

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = startVal + (endVal - startVal) * easeProgress;

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endVal);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={elementRef} className={cn("flex flex-col", className)}>
      <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0B1220] flex items-baseline">
        <span className="text-[#0066FF]">{prefix}</span>
        <span>
          {decimals > 0
            ? count.toFixed(decimals)
            : Math.round(count).toLocaleString()}
        </span>
        <span className="text-[#0066FF] font-mono text-2xl sm:text-3xl ml-0.5">
          {suffix}
        </span>
      </div>
      <span className="text-sm font-semibold text-[#0B1220] mt-2">{label}</span>
      {sublabel && (
        <span className="text-xs font-mono text-[#64748B] mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
}
