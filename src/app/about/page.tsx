"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Linkedin } from "lucide-react";
import { teamMembers, engineeringPrinciples, type TeamMember } from "@/data/teamData";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const complianceStandards = [
  { name: "SOC 2 Type II Alignment", desc: "Cryptographic audit logging and encrypted data transmission." },
  { name: "HIPAA BAA Ready", desc: "Zero-retention pipelines and isolated healthcare enclaves." },
  { name: "GDPR & CCPA Compliant", desc: "Data residency controls and complete telemetry isolation." },
  { name: "Zero Training Retention", desc: "No customer voice audio or prompts are used to train base models." },
];

const READABLE_FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function TeamCard({ member, layout = "vertical" }: { member: TeamMember; layout?: "vertical" | "horizontal" }) {
  const nameBlock = (
    <>
      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-mono text-sm font-bold text-[#0066FF] mb-4 group-hover:scale-110 transition-transform shrink-0">
        {member.initials}
      </div>

      <div className="flex items-center gap-1.5 mb-1">
        <h3
          style={{ fontFamily: READABLE_FONT_STACK }}
          className="font-semibold text-lg text-[#020617] group-hover:text-[#0066FF] transition-colors"
        >
          {member.name}
        </h3>
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="text-[#334155] hover:text-[#0066FF] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
        )}
      </div>
      <span
        style={{ fontFamily: READABLE_FONT_STACK }}
        className="text-sm text-[#334155] font-semibold block"
      >
        {member.role}
      </span>
    </>
  );

  const detailsBlock = (
    <>
      <p
        style={{ fontFamily: READABLE_FONT_STACK }}
        className="text-sm text-[#1E293B] leading-relaxed font-normal mb-4"
      >
        {member.bio}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {member.skills.map((skill) => (
          <span
            key={skill}
            style={{ fontFamily: READABLE_FONT_STACK }}
            className="text-xs font-semibold text-[#0066FF] bg-blue-50 border border-blue-200 rounded-md px-2 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );

  const focusBlock = (
    <div
      style={{ fontFamily: READABLE_FONT_STACK }}
      className="text-xs text-[#334155] font-semibold"
    >
      <span>Focus: {member.specialization}</span>
    </div>
  );

  if (layout === "horizontal") {
    return (
      <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-300 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="sm:w-64 shrink-0 sm:pr-8 sm:border-r border-slate-200 flex flex-col">
          {nameBlock}
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>{detailsBlock}</div>
          <div className="pt-4 mt-4 border-t border-slate-200">{focusBlock}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-7 rounded-2xl bg-white border border-slate-300 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {nameBlock}
        <div className="mt-3">{detailsBlock}</div>
      </div>

      <div className="pt-3 mt-4 border-t border-slate-200">{focusBlock}</div>
    </div>
  );
}

export default function AboutPage() {
  const founders = teamMembers.filter((m) => m.isFounder);
  const extendedTeam = teamMembers.filter((m) => !m.isFounder);

  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-white">
      {/* Hero Header with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-28">
        <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase block">
            About FineScale AI
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#020617] leading-tight">
            Building software systems for <span className="text-[#334155] font-normal">autonomous operations</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal pt-2">
            We are an applied AI systems and software engineering company specializing in enterprise AI operating systems, coordinated multi-agent workflows, and custom backend systems integration.
          </p>
        </ScrollReveal>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-y border-slate-200 mb-28 sm:mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-2 block">
                Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
                Why deterministic architecture matters.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-[#0F172A] leading-relaxed font-normal">
              <p>
                Most enterprise AI pilots stall because they treat large language models as magical end-to-end solutions. In real operational workflows, unconstrained probabilistic outputs lead to unpredictable failures, hallucinations, and customer frustration.
              </p>
              <p>
                Our engineering approach treats LLMs as cognitive processors inside strictly bounded finite-state machines. Business logic, financial margins, calendar reservations, and data updates are governed by deterministic validation layers.
              </p>
              <p>
                The result is software that provides the conversational nuance of modern AI with the strict reliability of enterprise backends.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Engineering Principles with Stagger Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 sm:mb-32">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-2 block">
            Principles
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
            How we design and build systems.
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="stagger-children" stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringPrinciples.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-2xl bg-white border border-slate-300 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3 group"
            >
              <span className="font-mono text-xs text-[#0066FF] font-bold block group-hover:scale-110 transform-gpu origin-left transition-transform">
                [{item.number}]
              </span>
              <h3 className="font-display font-semibold text-lg text-[#020617] group-hover:text-[#0066FF] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Engineering Team with Stagger Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 sm:mb-32">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-2 block">
            Team & Leadership
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
            Meet the Founders
          </h2>
          <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-normal mt-2">
            Technology and business working together to build intelligent systems that scale.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="stagger-children" stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {founders.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </ScrollReveal>

        <p className="text-xs sm:text-sm text-[#334155] font-normal mt-8 text-center">
          Built at the intersection of business strategy, software engineering, and artificial intelligence.
        </p>
      </section>

      {/* Extended Team with Stagger Reveal */}
      {extendedTeam.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 sm:mb-32">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-2 block">
              Team
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
              Meet the Team
            </h2>
            <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-normal mt-2">
              The specialists working alongside the founders to deliver FineScaleAI systems.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="stagger-children" stagger={0.08} className="grid grid-cols-1 gap-6">
            {extendedTeam.map((member, idx) => (
              <TeamCard key={idx} member={member} layout="horizontal" />
            ))}
          </ScrollReveal>
        </section>
      )}

      {/* Security & Data Governance with Stagger Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-2 block">
            Security & Governance
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#020617]">
            Data sovereignty by design.
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="stagger-children" stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {complianceStandards.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-300 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-300 space-y-2"
            >
              <h3 className="font-mono font-bold text-sm text-[#020617]">
                {item.name}
              </h3>
              <p className="text-xs text-[#1E293B] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
