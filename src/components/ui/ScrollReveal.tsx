"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-in" | "scale-up" | "stagger-children" | "stagger-horizontal";
  stagger?: number;
  duration?: number;
  delay?: number;
  threshold?: string;
  yOffset?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  stagger = 0.08,
  duration = 0.75,
  delay = 0,
  threshold = "top 88%",
  yOffset = 30,
  once = true,
  className,
  ...props
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({
    variant,
    stagger,
    duration,
    delay,
    threshold,
    yOffset,
    once,
  });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}
