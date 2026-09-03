"use client";

import React, { useState, useRef } from "react";
import { Send, CheckCircle2, Layers, Workflow, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { gsap } from "@/lib/gsap";

export function ROICalculator() {
  const [calculatorMode, setCalculatorMode] = useState<"ai-os" | "multi-agent">("ai-os");
  const inputsPanelRef = useRef<HTMLDivElement>(null);

  // AI OS State Variables
  const [aiOsRepetitiveHours, setAiOsRepetitiveHours] = useState(480);
  const [aiOsTeamSize, setAiOsTeamSize] = useState(12);
  const [aiOsHourlyCost, setAiOsHourlyCost] = useState(42);
  const [aiOsAutomationScope, setAiOsAutomationScope] = useState(65);

  // Multi-Agent State Variables
  const [agentStages, setAgentStages] = useState(5);
  const [agentWeeklyTasks, setAgentWeeklyTasks] = useState(1200);
  const [agentMinutesPerTask, setAgentMinutesPerTask] = useState(14);
  const [agentTeamSize, setAgentTeamSize] = useState(8);
  const [agentHourlyCost, setAgentHourlyCost] = useState(45);
  const [agentHandoffEfficiency, setAgentHandoffEfficiency] = useState(75);

  // Form State
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });

  // AI OS Calculations
  const aiOsMonthlyHoursReclaimed = Math.round(aiOsRepetitiveHours * (aiOsAutomationScope / 100));
  const aiOsMonthlyValue = Math.round(aiOsMonthlyHoursReclaimed * aiOsHourlyCost);
  const aiOsAnnualValue = aiOsMonthlyValue * 12;
  const aiOsPaybackWeeks = Math.max(3, Math.round((38000 / (aiOsAnnualValue / 52)) * 10) / 10);

  // Multi-Agent Calculations
  const agentMonthlyTasks = agentWeeklyTasks * 4.33;
  const agentTotalMonthlyHours = Math.round((agentMonthlyTasks * agentMinutesPerTask) / 60);
  const agentHandoffOverheadHours = Math.round(agentTotalMonthlyHours * (0.35 + (agentStages - 3) * 0.05));
  const agentMonthlyHoursReclaimed = Math.round(agentHandoffOverheadHours * (agentHandoffEfficiency / 100));
  const agentMonthlyValue = Math.round(agentMonthlyHoursReclaimed * agentHourlyCost);
  const agentAnnualValue = agentMonthlyValue * 12;
  const agentPaybackWeeks = Math.max(3, Math.round((42000 / (agentAnnualValue / 52)) * 10) / 10);

  const handleModeChange = (mode: "ai-os" | "multi-agent") => {
    if (mode === calculatorMode) return;

    if (inputsPanelRef.current) {
      gsap.fromTo(
        inputsPanelRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }
    setCalculatorMode(mode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="calculator" className="py-24 sm:py-36 lg:py-40 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Mode Switcher with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#0066FF] tracking-widest uppercase mb-3 block">
              Scope & Economics
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#020617] leading-tight mb-3">
              {calculatorMode === "ai-os"
                ? "AI OS — Scope & Economics"
                : "Multi-Agent Systems — Scope & Economics"}
            </h2>
            <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-normal">
              {calculatorMode === "ai-os"
                ? "Model the operational impact of connecting your business into one intelligent system."
                : "Estimate the operational impact of replacing repetitive handoffs with coordinated AI workflows."}
            </p>
          </div>

          {/* Unified Animated Mode Toggle */}
          <div className="flex items-center p-1.5 rounded-xl bg-[#F8FAFC] border border-slate-300 shrink-0 self-start md:self-auto shadow-xs">
            <button
              onClick={() => handleModeChange("ai-os")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                calculatorMode === "ai-os"
                  ? "bg-[#0066FF] text-white shadow-xs"
                  : "text-[#334155] hover:text-[#020617]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>AI OS</span>
            </button>

            <button
              onClick={() => handleModeChange("multi-agent")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                calculatorMode === "multi-agent"
                  ? "bg-[#0066FF] text-white shadow-xs"
                  : "text-[#334155] hover:text-[#020617]"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>MULTI-AGENT SYSTEMS</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Calculator Grid with ScrollReveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Dynamic Input Sliders */}
          <ScrollReveal variant="fade-up" className="lg:col-span-7">
            <div ref={inputsPanelRef} className="rounded-2xl bg-white border border-slate-300 p-8 sm:p-10 space-y-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-bold">
                  {calculatorMode === "ai-os" ? "AI OS Operating Parameters" : "Multi-Agent Workflow Stages & Volume"}
                </span>
                <span className="text-[10px] font-mono text-[#0066FF] font-bold px-2.5 py-1 rounded bg-blue-50 border border-blue-200">
                  {calculatorMode === "ai-os" ? "Connected Ops Model" : "Multi-Stage Swarm Model"}
                </span>
              </div>

              {calculatorMode === "ai-os" ? (
                /* AI OS Inputs */
                <div className="space-y-7">
                  {/* Slider 1: Repetitive Hours */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="text-[#020617] font-semibold">
                        Monthly Repetitive Workload (Across Teams)
                      </label>
                      <span className="font-bold text-[#020617]">
                        {aiOsRepetitiveHours.toLocaleString()} hrs / mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="20"
                      value={aiOsRepetitiveHours}
                      onChange={(e) => setAiOsRepetitiveHours(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] font-semibold">
                      <span>100 hrs</span>
                      <span>1,000 hrs</span>
                      <span>2,000+ hrs</span>
                    </div>
                  </div>

                  {/* Slider 2: Team Members */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="text-[#020617] font-semibold">
                        Team Members Coordinating Processes
                      </label>
                      <span className="font-bold text-[#020617]">
                        {aiOsTeamSize} People
                      </span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="50"
                      step="1"
                      value={aiOsTeamSize}
                      onChange={(e) => setAiOsTeamSize(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] font-semibold">
                      <span>3 people</span>
                      <span>25 people</span>
                      <span>50+ people</span>
                    </div>
                  </div>

                  {/* Slider 3: Hourly Cost */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="text-[#020617] font-semibold">
                        Average Fully Loaded Hourly Cost
                      </label>
                      <span className="font-bold text-[#020617]">
                        ${aiOsHourlyCost} / hr
                      </span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      step="1"
                      value={aiOsHourlyCost}
                      onChange={(e) => setAiOsHourlyCost(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] font-semibold">
                      <span>$20/hr</span>
                      <span>$60/hr</span>
                      <span>$100/hr</span>
                    </div>
                  </div>

                  {/* Slider 4: Connected Automation Scope */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="text-[#020617] font-semibold">
                        Target AI OS Operational Coverage
                      </label>
                      <span className="font-bold text-[#0066FF]">
                        {aiOsAutomationScope}% Connected
                      </span>
                    </div>
                    <input
                      type="range"
                      min="35"
                      max="85"
                      step="1"
                      value={aiOsAutomationScope}
                      onChange={(e) => setAiOsAutomationScope(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] font-semibold">
                      <span>35% (Reporting & Briefings)</span>
                      <span>65% (Full Operations Layer)</span>
                      <span>85% (Max Integration)</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Multi-Agent Systems Inputs */
                <div className="space-y-7">
                  {/* Slider 1: Workflow Stages */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="text-[#020617] font-semibold">
                        Number of Hand-Off Workflow Stages
                      </label>
                      <span className="font-bold text-[#020617]">
                        {agentStages} Agent Stages
                      </span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="8"
                      step="1"
                      value={agentStages}
                      onChange={(e) => setAgentStages(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] font-semibold">
                      <span>3 Stages (Triage → Sales → CRM)</span>
                      <span>5 Stages</span>
                      <span>8 Stages (End-to-End)</span>
                    </div>
                  </div>

                  {/* Slider 2: Weekly Task Volume */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="text-[#020617] font-semibold">
                        Tasks / Inquiries Handled Per Week
                      </label>
                      <span className="font-bold text-[#020617]">
                        {agentWeeklyTasks.toLocaleString()} tasks / wk
                      </span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="5000"
                      step="100"
                      value={agentWeeklyTasks}
                      onChange={(e) => setAgentWeeklyTasks(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] font-semibold">
                      <span>200 tasks</span>
                      <span>2,500 tasks</span>
                      <span>5,000+ tasks</span>
                    </div>
                  </div>

                  {/* Slider 3: Average Minutes Per Task */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="text-[#020617] font-semibold">
                        Average Human Handling Time Per Stage
                      </label>
                      <span className="font-bold text-[#020617]">
                        {agentMinutesPerTask} Minutes
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="45"
                      step="1"
                      value={agentMinutesPerTask}
                      onChange={(e) => setAgentMinutesPerTask(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] font-semibold">
                      <span>5 mins</span>
                      <span>20 mins</span>
                      <span>45 mins</span>
                    </div>
                  </div>

                  {/* Slider 4: Hourly Cost */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="text-[#020617] font-semibold">
                        Average Team Hourly Cost
                      </label>
                      <span className="font-bold text-[#020617]">
                        ${agentHourlyCost} / hr
                      </span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      step="1"
                      value={agentHourlyCost}
                      onChange={(e) => setAgentHourlyCost(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] font-semibold">
                      <span>$20/hr</span>
                      <span>$60/hr</span>
                      <span>$100/hr</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right: Calculated Outputs & Scoping Proposal Form */}
          <ScrollReveal variant="fade-up" delay={0.15} className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-300 p-8 sm:p-10 space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-mono uppercase tracking-wider text-[#020617] font-bold block pb-3 border-b border-slate-200">
                Illustrative Operational Impact
              </span>

              {/* Big Output Banner */}
              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-300 text-center hover:border-blue-300 transition-colors">
                <span className="text-[11px] font-mono uppercase text-[#334155] font-bold block mb-1">
                  {calculatorMode === "ai-os"
                    ? "Estimated Annual Operational Value Reclaimed"
                    : "Estimated Annual Handoff Overhead Reclaimed"}
                </span>
                <div className="font-mono font-bold text-3xl sm:text-4xl text-[#020617] my-2">
                  {formatCurrency(calculatorMode === "ai-os" ? aiOsAnnualValue : agentAnnualValue)}
                </div>
                <span className="text-xs font-mono text-[#0066FF] font-bold">
                  ≈ {formatCurrency((calculatorMode === "ai-os" ? aiOsMonthlyValue : agentMonthlyValue))} / month in team capacity
                </span>
              </div>

              {/* Metrics Breakdown */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-300 hover:border-slate-400 transition-colors">
                  <span className="text-[#334155] font-semibold block mb-0.5">Hours Reclaimed</span>
                  <span className="font-bold text-[#020617]">
                    {(calculatorMode === "ai-os" ? aiOsMonthlyHoursReclaimed : agentMonthlyHoursReclaimed).toLocaleString()} hrs / mo
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-300 hover:border-slate-400 transition-colors">
                  <span className="text-[#334155] font-semibold block mb-0.5">Est. Payback Horizon</span>
                  <span className="font-bold text-[#020617]">
                    ~{calculatorMode === "ai-os" ? aiOsPaybackWeeks : agentPaybackWeeks} Weeks
                  </span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-[11px] font-mono text-[#0F172A] leading-relaxed font-medium">
                <Info className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>
                  These figures are illustrative estimates for planning purposes, not guaranteed outcomes. Actual efficiency depends on workflow complexity and data hygiene.
                </span>
              </div>

              {/* Scoping Proposal Dispatch Form */}
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-xs text-[#020617] placeholder-slate-500 font-mono focus:outline-none focus:border-[#0066FF] shadow-xs font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-xs text-[#020617] placeholder-slate-500 font-mono focus:outline-none focus:border-[#0066FF] shadow-xs font-medium"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Work Email (name@company.com)"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-xs text-[#020617] placeholder-slate-500 font-mono focus:outline-none focus:border-[#0066FF] shadow-xs font-medium"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  rightIcon={<Send className="w-3.5 h-3.5" />}
                >
                  Request Architecture Proposal ({calculatorMode === "ai-os" ? "AI OS" : "Multi-Agent"})
                </Button>
              </form>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-300 text-xs font-mono text-[#0066FF] font-semibold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Proposal request received. A systems engineer will evaluate your configuration.</span>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
