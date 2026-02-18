"use client";

import { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalOverview({ data }: { data: ServicePageData['overview'] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!data) return null;

  return (
    <section className="relative bg-white py-24 font-sora overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24  relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT: TEXT CONTENT (Col Span 7) --- */}
          <div className="lg:col-span-7">
            <SectionHeader 
              badge={data.badge}
              title={data.heading}
              highlight={data.highlight}
              centered={false}
              className="mb-8"
            />

            <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-lg">
              {data.content.slice(0, 2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {isExpanded && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  {data.content.slice(2).map((p, i) => (
                    <p key={i + 2}>{p}</p>
                  ))}
                </div>
              )}

              {data.content.length > 2 && (
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="group flex items-center gap-2 text-sm font-bold text-[#4888E8] hover:text-[#0F172A] transition-colors mt-6 outline-none uppercase tracking-wider"
                >
                  {isExpanded ? (
                      <>Read Less <ChevronUp size={16} /></>
                  ) : (
                      <>Read More <ChevronDown size={16} /></>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* --- RIGHT: DIFFERENTIATORS (Col Span 5) --- */}
          <div className="lg:col-span-5 relative">
            
            {/* Styled Container */}
            <div className="bg-[#FAF7F6] rounded-[2rem] p-8 border border-slate-100 relative overflow-hidden">
              
              {/* Subtle Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4888E8]/5 rounded-bl-[4rem] pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#07b022] shadow-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0F172A]">Key Differentiators</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Why ThingsAtWeb?</p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {data.differentiators.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#4888E8]/20 hover:-translate-y-1 group"
                  >
                    <div className="mt-1 h-10 w-10 rounded-xl bg-[#4888E8]/10 flex items-center justify-center text-[#4888E8] shrink-0 group-hover:bg-[#4888E8] group-hover:text-white transition-colors duration-300">
                      <DynamicIcon name={item.icon} size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A] mb-1 group-hover:text-[#4888E8] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}