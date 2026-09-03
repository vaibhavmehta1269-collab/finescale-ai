"use client";

import React from "react";

const enterpriseSystems = [
  { name: "Salesforce CRM", category: "Enterprise" },
  { name: "HubSpot", category: "Revenue Ops" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "PostgreSQL", category: "Relational DB" },
  { name: "Next.js & React", category: "Frontend" },
  { name: "Python / FastAPI", category: "Backend" },
  { name: "AWS Cloud", category: "Infrastructure" },
  { name: "Microsoft Azure", category: "Enterprise Cloud" },
  { name: "REST & GraphQL", category: "API Protocols" },
  { name: "Webhook Pipelines", category: "Event Bus" },
  { name: "Docker & Kubernetes", category: "Deployment" },
  { name: "Zendesk & Intercom", category: "Customer Ops" },
];

export function TechStackTicker() {
  return (
    <div className="w-full py-6 border-y border-slate-200 bg-[#F8FAFC] relative overflow-hidden">
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      {/* Infinite Marquee Container */}
      <div className="flex overflow-hidden select-none">
        <div className="flex shrink-0 items-center gap-8 animate-marquee py-1">
          {enterpriseSystems.concat(enterpriseSystems).map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs font-mono text-[#475569] hover:text-[#0066FF] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="font-medium text-[#0B1220]">{item.name}</span>
                <span className="text-[10px] text-[#64748B]">[{item.category}]</span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </div>
  );
}
