"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, Linkedin } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const magneticButtonRef = useMagnetic<HTMLButtonElement>({ strength: 0.15 });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200 overflow-hidden pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-300">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 inline-flex">
              <div className="w-7 h-7 rounded-md bg-[#0066FF] flex items-center justify-center text-white font-bold text-xs tracking-tighter shadow-xs">
                FS
              </div>
              <span className="font-display font-bold text-base tracking-tight text-[#020617]">
                FineScale AI
              </span>
            </Link>

            <p className="text-sm text-[#1E293B] leading-relaxed max-w-sm font-normal">
              AI systems, custom software development, and connected operational layers engineered for modern enterprises.
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono text-[#334155] font-semibold">
                Connected Business Systems • Private Cloud Enclaves
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#020617] font-bold block">
              Pages
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#020617] font-bold block">
              Offerings
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/services#ai-os" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  01 AI OS
                </Link>
              </li>
              <li>
                <Link href="/services#multi-agent-systems" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  02 Multi-Agent Systems
                </Link>
              </li>
              <li>
                <Link href="/services#custom-development" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  03 Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai-consulting-audit" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  04 AI Consulting / Audit
                </Link>
              </li>
              <li>
                <Link href="/services#predictive-analytics" className="text-[#334155] hover:text-[#0066FF] transition-colors font-medium">
                  05 Predictive Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Architecture Dispatch / Contact */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#020617] font-bold block">
              Stay Informed
            </span>
            <p className="text-xs text-[#1E293B] leading-relaxed font-normal">
              Updates on enterprise AI systems, operational workflows, and software engineering.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs text-[#020617] placeholder-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors font-mono shadow-xs font-medium"
                />
                <button
                  ref={magneticButtonRef}
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-[#0066FF] hover:bg-[#0052CC] text-white rounded flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#0066FF] font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Subscribed to engineering updates</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#334155] font-medium">
          <span>© {new Date().getFullYear()} FineScale AI. All rights reserved.</span>

          <div className="flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/vaibhav-mehta-137763328/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FineScale AI on LinkedIn"
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-300 bg-white text-[#334155] hover:text-[#0066FF] hover:border-blue-300 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#0066FF] transition-colors group cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform text-[#0066FF]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
