"use client";

import { useEffect, useRef } from "react";

interface MovingDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export function BackgroundMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const blueColors = [
      "rgba(0, 102, 255, ",
      "rgba(0, 140, 255, ",
      "rgba(56, 189, 248, ",
      "rgba(37, 99, 235, ",
    ];

    let dots: MovingDot[] = [];

    const initDots = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      dots = [];

      // Create 65-80 clearly visible, active moving blue dots
      const numDots = Math.min(85, Math.max(45, Math.floor((width * height) / 22000)));

      for (let i = 0; i < numDots; i++) {
        const rad = Math.random() * 2.5 + 2.0; // 2.0px to 4.5px
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.75, // Active floating motion
          vy: (Math.random() - 0.5) * 0.75,
          baseRadius: rad,
          radius: rad,
          color: blueColors[Math.floor(Math.random() * blueColors.length)],
          alpha: Math.random() * 0.45 + 0.35, // High legibility 0.35 - 0.80
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    initDots();

    const handleResize = () => {
      initDots();
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;
    const interactionRadius = 160;

    const render = () => {
      time += 0.015;

      // Mouse smoothing & velocity
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x += (mouse.targetX - mouse.x) * 0.22;
      mouse.y += (mouse.targetY - mouse.y) * 0.22;
      mouse.vx = mouse.x - mouse.prevX;
      mouse.vy = mouse.y - mouse.prevY;

      ctx.clearRect(0, 0, width, height);

      // Clean Solid White Canvas Background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      // Soft ambient blue radial glow in the center
      const bgGlow = ctx.createRadialGradient(
        width / 2,
        height * 0.25,
        30,
        width / 2,
        height * 0.25,
        width * 0.65
      );
      bgGlow.addColorStop(0, "rgba(241, 246, 255, 0.85)");
      bgGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // 1. Update and Draw Moving Blue Dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Constant floating velocity
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce gently at screen edges
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;

        // Cursor Attraction & Follow Physics
        if (mouse.active) {
          const dx = mouse.x - dot.x;
          const dy = mouse.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < interactionRadius) {
            const force = (1 - dist / interactionRadius);
            // Move with and swirl around cursor
            dot.x += (dx / dist) * force * 3.5 + mouse.vx * 0.15;
            dot.y += (dy / dist) * force * 3.5 + mouse.vy * 0.15;

            // Expand size near cursor
            dot.radius = dot.baseRadius + force * 2.5;
          } else {
            // Gradually return to base radius
            dot.radius += (dot.baseRadius - dot.radius) * 0.1;
          }
        } else {
          dot.radius += (dot.baseRadius - dot.radius) * 0.1;
        }

        // Pulse alpha gently
        const currentAlpha = dot.alpha + Math.sin(time * 2 + dot.pulseOffset) * 0.12;

        // Render blue dot with subtle soft aura
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${dot.color}${Math.max(0.2, Math.min(0.95, currentAlpha))})`;
        ctx.shadowColor = "rgba(0, 102, 255, 0.4)";
        ctx.shadowBlur = dot.radius > 3.5 ? 8 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for lines
      }

      // 2. Draw Connecting Blue Lines between nearby moving dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const d1 = dots[i];
          const d2 = dots[j];
          const dist = Math.hypot(d1.x - d2.x, d1.y - d2.y);

          if (dist < 135) {
            const lineAlpha = (1 - dist / 135) * 0.22;
            ctx.beginPath();
            ctx.moveTo(d1.x, d1.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
