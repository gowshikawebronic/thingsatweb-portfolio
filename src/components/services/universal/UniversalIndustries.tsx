"use client";

import { useState } from "react";
import { Zap, Globe2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalIndustries({ data }: { data: ServicePageData['industries'] }) {
  // Default to first item if data exists
  const [activeTab, setActiveTab] = useState(data.items[0]?.id);
  
  // Find current active data
  const currentIndustry = data.items.find((ind) => ind.id === activeTab) || data.items[0];

  // Color Logic
  const isBlue = currentIndustry?.theme === "blue";
  const brandMain = isBlue ? "#4888E8" : "#07b022"; // Hex for dynamic styles
  const brandBgClass = isBlue ? "bg-[#4888E8]" : "bg-[#07b022]";
  const brandTextClass = isBlue ? "text-[#4888E8]" : "text-[#07b022]";

  return (
    <section className="bg-white py-24 font-sora relative overflow-hidden border-b border-slate-100">
      
      {/* Centered Background Blob */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] blur-[120px] rounded-full pointer-events-none -z-10 transition-colors duration-500 ${brandBgClass}`} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. Header: Strictly Centered */}
        <SectionHeader 
          badge="Market Expertise"
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        {/* 2. Tabs: Strictly Centered Flex Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-20">
          {data.items.map((ind) => {
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border ${
                  isActive 
                    ? `${ind.theme === 'blue' ? 'bg-[#4888E8] border-[#4888E8]' : 'bg-[#07b022] border-[#07b022]'} text-white shadow-lg shadow-slate-200` 
                    : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                }`}
              >
                <DynamicIcon name={ind.icon} size={16} />
                <span className="text-[11px] font-bold uppercase tracking-wider">{ind.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3. Cards Container: FLEX JUSTIFY-CENTER (Fixes Left Alignment) */}
        <div className="w-full max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              // THIS IS THE FIX: flex-wrap + justify-center ensures items stay in the middle
              className="flex flex-wrap justify-center gap-8"
            >
              {currentIndustry.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  // Card Width: Fixed max-width ensures they don't stretch weirdly. 
                  // Items-center & Text-center ensures text is centered.
                  className="w-full max-w-[360px] flex flex-col items-center text-center bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group"
                >
                  
                  {/* Icon: Centered */}
                  <div className={`mb-6 h-16 w-16 rounded-2xl ${brandBgClass} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <DynamicIcon name={feature.icon} size={32} />
                  </div>

                  {/* Title: Centered */}
                  <h3 className="text-xl font-black text-slate-900 mb-4">
                    {feature.title}
                  </h3>

                  {/* Description: Centered */}
                  <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">
                    {feature.desc}
                  </p>

                  {/* Result Card: Centered */}
                  {feature.caseStudy && (
                    <div className="mt-auto w-full pt-6 border-t border-slate-50">
                      <div className="flex flex-col items-center gap-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${brandTextClass}`}>
                          Success Story
                        </span>
                        <p className="text-xs font-bold text-slate-800">{feature.caseStudy.title}</p>
                        
                        <div className="flex items-center gap-1.5 mt-1 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                           <Zap size={12} className="text-amber-500 fill-amber-500" />
                           <span className="text-[11px] font-black text-slate-700">{feature.caseStudy.result}</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Bottom CTA: Strictly Centered */}
        <div className="mt-20 flex justify-center">
            <button className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full transition-all hover:scale-105">
                <Globe2 size={18} className={brandTextClass} />
                <span className="text-xs font-bold uppercase tracking-widest">Explore All Industries</span>
                <div className={`w-6 h-6 rounded-full ${brandBgClass} flex items-center justify-center text-white group-hover:translate-x-1 transition-transform`}>
                    <ArrowRight size={12} />
                </div>
            </button>
        </div>

      </div>
    </section>
  );
}