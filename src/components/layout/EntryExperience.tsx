"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, LockOpen, Terminal } from "lucide-react";
import { gsap } from "@/lib/gsap";

export function EntryExperience() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftGateRef = useRef<HTMLDivElement>(null);
  const rightGateRef = useRef<HTMLDivElement>(null);
  const seamLightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Lock body scroll while entry gate is active
    document.body.style.overflow = "hidden";

    // 2D Ambient Matrix Grid Canvas Background
    const canvas = gridCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let animationFrameId: number;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Points for delicate 2D matrix
      const points: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
      const numPoints = Math.min(50, Math.floor(window.innerWidth / 25));

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
        });
      }

      const drawMatrix = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        ctx.lineWidth = 0.6;
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 140) {
              const alpha = (1 - dist / 140) * 0.25;
              ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw nodes
        for (let i = 0; i < points.length; i++) {
          const pt = points[i];
          pt.x += pt.vx;
          pt.y += pt.vy;

          if (pt.x < 0 || pt.x > canvas.width) pt.vx *= -1;
          if (pt.y < 0 || pt.y > canvas.height) pt.vy *= -1;

          ctx.fillStyle = "rgba(56, 189, 248, 0.5)";
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        animationFrameId = requestAnimationFrame(drawMatrix);
      };

      drawMatrix();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  // Entrance typography and elements reveal
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const content = contentRef.current;
    if (!content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        ".matrix-badge",
        { opacity: 0, scale: 0.9, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );

      tl.fromTo(
        ".matrix-title-line",
        { y: "115%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );

      tl.fromTo(
        ".matrix-subtitle",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".matrix-action-btn",
        { opacity: 0, scale: 0.92, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.3"
      );

      tl.fromTo(
        seamLightRef.current,
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 0.9, ease: "power2.out" },
        "-=0.7"
      );
    }, content);

    return () => ctx.revert();
  }, []);

  // Handle the 3-Second Cinematic "Opening Gate" Transition
  const handleOpenGate = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Unlock body scroll immediately
    document.body.style.overflow = "";

    // If reduced motion is preferred, close instantly
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsOpen(false);
      return;
    }

    const leftGate = leftGateRef.current;
    const rightGate = rightGateRef.current;
    const seamLight = seamLightRef.current;
    const content = contentRef.current;
    const overlay = overlayRef.current;

    if (!leftGate || !rightGate) {
      setIsOpen(false);
      return;
    }

    // Set background of overlay wrapper to transparent so gates parting reveals page underneath
    if (overlay) {
      overlay.style.backgroundColor = "transparent";
    }

    // Comprehensive 3.2-second Cinematic Transition Timeline
    const gateTl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
      },
    });

    // 1. Initial Charge & Content Dissolve (0.0s - 0.8s)
    if (content) {
      gateTl.to(content, {
        opacity: 0,
        scale: 1.06,
        y: -15,
        duration: 0.75,
        ease: "power2.inOut",
      });
    }

    // 2. Center Seam Laser charges up into a wide blue energy beacon (0.2s - 1.0s)
    if (seamLight) {
      gateTl.to(
        seamLight,
        {
          opacity: 1,
          scaleX: 8,
          boxShadow: "0 0 50px #0066FF, 0 0 100px #38BDF8, 0 0 150px #00D2FF",
          duration: 0.65,
          ease: "power2.out",
        },
        "-=0.6"
      );

      gateTl.to(
        seamLight,
        {
          opacity: 0,
          scaleX: 0,
          duration: 0.8,
          ease: "power2.in",
        },
        "+=0.1"
      );
    }

    // 3. Heavy Blast Gates Slide Open (1.0s - 3.2s = 2.2s smooth sliding motion)
    gateTl.to(
      leftGate,
      {
        xPercent: -100,
        duration: 2.3,
        ease: "power3.inOut",
      },
      "-=0.7"
    );

    gateTl.to(
      rightGate,
      {
        xPercent: 100,
        duration: 2.3,
        ease: "power3.inOut",
      },
      "<"
    );
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOpenGate}
      className="fixed inset-0 z-[10000] bg-[#030B1E] overflow-hidden select-none cursor-pointer"
    >
      {/* 2D Canvas Matrix Animation Layer */}
      <canvas
        ref={gridCanvasRef}
        className="absolute inset-0 z-20 pointer-events-none opacity-60"
      />

      {/* LEFT GATE PANEL (50vw) */}
      <div
        ref={leftGateRef}
        className="fixed top-0 left-0 bottom-0 w-[50.5vw] bg-[#030B1E] border-r border-[#0066FF]/40 shadow-[10px_0_40px_rgba(0,102,255,0.2)] z-10 transform-gpu will-change-transform"
      >
        {/* Dark matrix gradient & grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-950/50 via-[#030B1E] to-[#020712] pointer-events-none" />
        <div className="absolute top-8 left-8 text-[11px] font-mono text-blue-400/50 uppercase tracking-widest hidden sm:block">
          GATE-01 // LEFT WING
        </div>
      </div>

      {/* RIGHT GATE PANEL (50vw) */}
      <div
        ref={rightGateRef}
        className="fixed top-0 right-0 bottom-0 w-[50.5vw] bg-[#030B1E] border-l border-[#0066FF]/40 shadow-[-10px_0_40px_rgba(0,102,255,0.2)] z-10 transform-gpu will-change-transform"
      >
        {/* Dark matrix gradient & grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-blue-950/50 via-[#030B1E] to-[#020712] pointer-events-none" />
        <div className="absolute top-8 right-8 text-[11px] font-mono text-blue-400/50 uppercase tracking-widest text-right hidden sm:block">
          GATE-02 // RIGHT WING
        </div>
      </div>

      {/* CENTER SEAM GLOWING LASER LINE */}
      <div
        ref={seamLightRef}
        className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#0066FF] to-transparent z-15 pointer-events-none opacity-90 transform-gpu origin-center"
      />

      {/* CENTER FOREGROUND CONTENT (WHITE TEXT ON DARK BLUE MATRIX) */}
      <div
        ref={contentRef}
        className="relative z-30 w-full h-full flex flex-col items-center justify-between p-6 sm:p-12 text-center pointer-events-none"
      >
        {/* Top Branding */}
        <div className="w-full max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center text-white font-bold text-xs tracking-tighter shadow-[0_0_20px_rgba(0,102,255,0.6)]">
              FS
            </div>
            <span className="font-display font-bold text-base tracking-tight text-white">
              FineScale AI
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-blue-300/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-ping" />
            <span>AI MATRIX ACCESS PROTOCOL</span>
          </div>
        </div>

        {/* Center Main Stage */}
        <div className="max-w-3xl space-y-7 my-auto py-8">
          {/* Badge */}
          <div className="matrix-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/50 text-xs font-mono text-blue-300 shadow-[0_0_25px_rgba(0,102,255,0.3)]">
            <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="font-bold tracking-widest uppercase text-[11px]">
              SYSTEM INITIALIZATION PROTOCOL
            </span>
          </div>

          {/* Masked Headline: "WELCOME TO AI MATRIX" */}
          <div className="space-y-1">
            <div className="overflow-hidden py-1">
              <h1 className="matrix-title-line font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                WELCOME TO
              </h1>
            </div>
            <div className="overflow-hidden py-1">
              <h1 className="matrix-title-line font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#38BDF8] leading-tight drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
                AI MATRIX
              </h1>
            </div>
          </div>

          {/* Subtitle in Crisp White / Light Blue */}
          <p className="matrix-subtitle text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
            Autonomous business systems, deterministic multi-agent workflows, and connected enterprise operations.
          </p>

          {/* Interactive Gate Access Button */}
          <div className="matrix-action-btn pt-4 pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenGate();
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(0,102,255,0.7)] hover:shadow-[0_0_50px_rgba(0,102,255,1)] border border-blue-400/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer transform-gpu"
            >
              <LockOpen className="w-4 h-4 text-blue-200" />
              <span>ENTER MATRIX</span>
              <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="block text-[11px] font-mono text-slate-400 mt-3.5 font-medium">
              Click anywhere on screen to initiate 3-second gate opening sequence
            </span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-400 pt-4 border-t border-blue-950/80">
          <span>© {new Date().getFullYear()} FineScale AI • Quantum Systems Division</span>
          <div className="flex items-center gap-4 text-[11px] font-medium text-blue-400/80">
            <span>Private Cloud Enclaves</span>
            <span>•</span>
            <span>Zero Training Retention</span>
          </div>
        </div>
      </div>
    </div>
  );
}
