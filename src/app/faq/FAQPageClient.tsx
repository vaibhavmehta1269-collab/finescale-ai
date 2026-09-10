"use client";

import React, { useState, useMemo } from "react";
import { Plus, Minus, Search, ArrowRight } from "lucide-react";
import { faqData, faqCategories } from "@/data/faqData";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function FAQPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "0": true });

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Questions" || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-white">
      {/* Hero Header with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <ScrollReveal variant="fade-up" className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase block">
            Frequently Asked Questions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#020617] leading-tight">
            Technical & operational <span className="text-[#334155] font-normal">inquiries</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-normal pt-2">
            Detailed answers regarding AI operating systems, multi-agent coordination, private cloud security, deterministic boundary validation, and implementation sprints.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter and Search Bar with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {faqCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer active:scale-95 ${
                      isActive
                        ? "bg-[#F1F6FF] text-[#0066FF] font-bold border border-blue-300 shadow-xs"
                        : "text-[#1E293B] hover:text-[#020617] hover:bg-slate-100 border border-slate-200 font-semibold"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-slate-300 text-xs font-mono text-[#020617] placeholder-slate-500 focus:outline-none focus:border-[#0066FF] shadow-xs font-medium transition-colors"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Accordion FAQ List with Stagger */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-[#F8FAFC] border border-slate-300">
            <p className="text-[#334155] font-mono text-xs mb-3 font-semibold">
              No questions found matching "{searchQuery}".
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSelectedCategory("All Questions");
                setSearchQuery("");
              }}
            >
              Reset Search
            </Button>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = !!openItems[faq.id];
            return (
              <ScrollReveal
                key={faq.id}
                variant="fade-up"
                delay={idx * 0.04}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-blue-300 shadow-md"
                      : "bg-white border-slate-300 hover:border-slate-400 shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider block font-bold">
                        {faq.category}
                      </span>
                      <h2 className="font-display font-bold text-lg text-[#020617]">
                        {faq.question}
                      </h2>
                    </div>

                    <div className={`p-1.5 rounded-lg border transition-all duration-200 shrink-0 mt-1 ${
                      isOpen
                        ? "bg-blue-50 border-blue-200 text-[#0066FF] rotate-180"
                        : "bg-[#F8FAFC] border-slate-300 text-[#020617]"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4 text-[#0066FF]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-7 pb-7 pt-0 border-t border-slate-100 mt-2">
                        <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-normal pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })
        )}
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
