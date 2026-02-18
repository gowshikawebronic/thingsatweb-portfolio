"use client";

import React from "react";
import { Code2, Bot, Cloud, Check, Cpu, Zap, Layers, Shield } from "lucide-react";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalTechStack({ data }: { data: ServicePageData['techStack'] }) {
  if (!data) return null;

  return (
    <section className="relative bg-[#F8FAFC] py-24 font-sora px-5 lg:px-10 overflow-hidden">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 -right-20 w-[500px] h-[500px] bg-[#4888E8]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-[#07b022]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader 
          badge="Our Ecosystem"
          title={data.heading}
          description={data.description}
          align="center"
          className="max-w-3xl mx-auto mb-20"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 1. Frameworks - The Base Layer (#4888E8) */}
          <div className="group relative">
            <div className="h-full bg-white rounded-3xl p-8 border-b-4 border-[#4888E8] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[#4888E8]/10 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-[#4888E8]/10 flex items-center justify-center text-[#4888E8]">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 leading-none">Frameworks</h3>
                  <p className="text-[10px] font-bold text-[#4888E8] uppercase tracking-widest mt-1">Foundational Tech</p>
                </div>
              </div>

              <div className="space-y-6">
                {data.frameworks.map((item, i) => (
                  <div key={i} className="group/item">
                    <h4 className="text-md font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-[#4888E8]" />
                      {item.name}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 pl-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Intelligence - The Logic Layer (#07b022) */}
          <div className="group relative">
            <div className="h-full bg-white rounded-3xl p-8 border-b-4 border-[#07b022] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[#07b022]/10 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-[#07b022]/10 flex items-center justify-center text-[#07b022]">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 leading-none">Intelligence</h3>
                  <p className="text-[10px] font-bold text-[#07b022] uppercase tracking-widest mt-1">Cognitive Engine</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {data.llms.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[#07b022]/5 border border-[#07b022]/10 rounded-xl text-sm font-bold text-slate-700">
                        <Check size={14} className="text-[#07b022]" strokeWidth={3} />
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-4 flex items-center gap-2">
                    <Layers size={12} /> Optimization & Ops
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {data.mlOps.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-500 hover:bg-white hover:border-[#07b022] transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Cloud & Infra - The Scale Layer (Slate/Shield) */}
          <div className="group relative">
            <div className="h-full bg-white rounded-3xl p-8 border-b-4  shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-slate-200 hover:-translate-y-2 border-[#4888E8]">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                  <Cloud size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 leading-none">Cloud & Infra</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Global Delivery</p>
                </div>
              </div>

              <div className="space-y-8">
                {data.cloudPlatforms.map((platform, i) => (
                  <div key={i} className="relative">
                    <h4 className="text-[10px] font-black text-[#4888E8] uppercase tracking-[0.15em] mb-3">
                      {platform.provider}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.services.map((service, j) => (
                        <div key={j} className="text-[11px] font-bold text-slate-600 bg-slate-50/50 p-2 rounded-lg border border-slate-100 flex items-center gap-1.5 group-hover:bg-white transition-colors">
                          <div className="h-1 w-1 rounded-full bg-slate-300" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Shield with 50% opacity class */}
              <div className="mt-8 flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Shield size={16} className="text-slate-400 opacity-50" /> 
                <span className="text-[11px] font-bold text-slate-500 italic">Enterprise Grade Security</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}