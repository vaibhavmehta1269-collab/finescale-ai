"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const magneticButtonRef = useMagnetic<HTMLAnchorElement>({ strength: 0.15 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle navbar entrance on initial page load
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      
      tl.fromTo(
        ".nav-logo-item",
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
      );

      tl.fromTo(
        ".nav-link-item",
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".nav-cta-item",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    }, header);

    return () => ctx.revert();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3.5 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs"
            : "py-5 sm:py-6 bg-white/70 backdrop-blur-xs border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="nav-logo-item flex items-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-md bg-[#0066FF] flex items-center justify-center text-white font-bold text-xs tracking-tighter shadow-xs group-hover:scale-105 transition-transform">
                FS
              </div>
              <span className="font-display font-bold text-base tracking-tight text-[#020617] group-hover:text-[#0066FF] transition-colors">
                FineScale AI
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link-item text-xs uppercase tracking-wider font-mono transition-colors duration-150 relative py-1 ${
                      isActive
                        ? "text-[#0066FF] font-bold"
                        : "text-[#1E293B] hover:text-[#0066FF] font-semibold"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066FF]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="nav-cta-item hidden md:flex items-center gap-4">
              <Link
                ref={magneticButtonRef}
                href="https://calendly.com/vaibhav-finescaleai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transform-gpu"
              >
                <span className="magnetic-inner flex items-center gap-1.5">
                  <span>Book a Free Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-300 text-[#020617] hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-white/98 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className={`p-3 text-base font-bold transition-colors ${
              pathname === "/" ? "text-[#0066FF]" : "text-[#020617] hover:text-[#0066FF]"
            }`}
          >
            Overview
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between p-3 rounded-lg transition-colors font-semibold ${
                  isActive
                    ? "bg-blue-50 text-[#0066FF]"
                    : "text-[#020617] hover:text-[#0066FF] hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />}
              </Link>
            );
          })}
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
          <Link
            href="https://calendly.com/vaibhav-finescaleai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-lg bg-[#0066FF] text-center text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Book a Free Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </>
  );
}
