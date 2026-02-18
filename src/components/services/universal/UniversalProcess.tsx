"use client";

import React from "react";
import { Clock, Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalProcess({ data }: { data: ServicePageData['process'] }) {
  if (!data) return null;

  return (
    <section className="bg-slate-50/50 py-24 font-sora relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] -left-20 w-[600px] h-[600px] bg-[#4888E8]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-20 w-[600px] h-[600px] bg-[#07b022]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader 
          badge="Execution Framework"
          title={data.title}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-24"
        />

        <div className="relative">
          {/* Central Connecting Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4888E8] via-[#07b022] to-transparent hidden lg:block -translate-x-1/2" />

          <div className="space-y-20 lg:space-y-32">
            {data.phases.map((phase, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-24`}
                >
                  {/* --- ICON JUNCTION (The Center Point) --- */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full border-4 border-white shadow-xl flex items-center justify-center z-20 ${index % 2 === 0 ? 'bg-[#4888E8]' : 'bg-[#07b022]'} text-white`}>
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* --- CONTENT SIDE --- */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
                      <Clock size={12} className={isEven ? 'text-[#4888E8]' : 'text-[#07b022]'} />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{phase.duration}</span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                      {phase.title}
                    </h3>
                    
                    <div className={`flex flex-wrap gap-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                       {/* This displays the icon prominently on mobile, or as a detail on desktop */}
                       <div className={`lg:hidden w-12 h-12 rounded-xl flex items-center justify-center ${index % 2 === 0 ? 'bg-[#4888E8]' : 'bg-[#07b022]'} text-white mb-4`}>
                          <DynamicIcon name={phase.icon} size={24} />
                       </div>
                    </div>
                  </div>

                  {/* --- CARD SIDE --- */}
                  <div className="w-full lg:w-1/2">
                    <div className={`relative p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group overflow-hidden`}>
                      {/* Accent Corner Glow */}
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 opacity-10 blur-3xl -z-10 ${isEven ? 'bg-[#4888E8]' : 'bg-[#07b022]'}`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                           <div className={`p-2 rounded-lg ${isEven ? 'bg-[#4888E8]/10 text-[#4888E8]' : 'bg-[#07b022]/10 text-[#07b022]'}`}>
                              <Sparkles size={18} />
                           </div>
                           <span className="text-xs font-black uppercase tracking-tighter text-slate-400">Key Deliverables</span>
                        </div>

                        <ul className="space-y-4">
                          {phase.objectives.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 group/item">
                              <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${isEven ? 'bg-[#4888E8]/5 text-[#4888E8] group-hover/item:bg-[#4888E8]' : 'bg-[#07b022]/5 text-[#07b022] group-hover/item:bg-[#07b022]'} group-hover/item:text-white`}>
                                <Check size={10} strokeWidth={4} />
                              </div>
                              <span className="text-slate-600 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className={`mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 font-bold text-sm ${isEven ? 'text-[#4888E8]' : 'text-[#07b022]'}`}>
                           View Case Study <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Visual */}
        <div className="mt-32 flex justify-center">
            <div className="px-8 py-4 bg-slate-900 rounded-full text-white font-bold flex items-center gap-4 shadow-2xl hover:scale-105 transition-transform cursor-pointer">
                <span>Start Your Transformation</span>
                <div className="w-8 h-8 rounded-full bg-[#07b022] flex items-center justify-center">
                    <ArrowRight size={16} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}