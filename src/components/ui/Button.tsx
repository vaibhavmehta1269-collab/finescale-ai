"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      href,
      variant = "primary",
      size = "md",
      magnetic = false,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const magneticRef = useMagnetic<HTMLButtonElement | HTMLAnchorElement>({
      strength: magnetic ? 0.22 : 0,
      duration: 0.35,
    });

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs font-semibold",
      md: "px-5 py-2.5 text-sm font-semibold",
      lg: "px-6 py-3 text-sm font-bold",
    };

    const variantStyles = {
      primary:
        "bg-[#0066FF] hover:bg-[#0052CC] text-white border border-[#0066FF] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
      secondary:
        "bg-white hover:bg-slate-50 text-[#020617] hover:text-[#0066FF] border border-slate-300 hover:border-[#0066FF] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",
      outline:
        "bg-transparent text-[#0F172A] hover:text-[#0066FF] border border-slate-300 hover:border-[#0066FF] hover:bg-blue-50/40 hover:-translate-y-0.5 transition-all duration-200",
      ghost:
        "bg-transparent text-[#334155] hover:text-[#020617] hover:bg-slate-100 transition-all duration-200",
    };

    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 rounded-lg font-sans transition-all duration-200 select-none group cursor-pointer active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none transform-gpu";

    const content = (
      <>
        {leftIcon && <span className="relative z-10 transition-colors">{leftIcon}</span>}
        <span className="magnetic-inner relative z-10 flex items-center gap-2 tracking-normal">
          {children}
        </span>
        {rightIcon && <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          ref={magnetic ? (magneticRef as unknown as React.Ref<HTMLAnchorElement>) : (forwardedRef as React.Ref<HTMLAnchorElement>)}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={magnetic ? (magneticRef as unknown as React.Ref<HTMLButtonElement>) : (forwardedRef as React.Ref<HTMLButtonElement>)}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
