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
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
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

            <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-body">
              {data.content.slice(0, 2).map((p, i) => (
                <p key={i} className="text-slate-600">{p}</p>
              ))}

              {isExpanded && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  {data.content.slice(2).map((p, i) => (
                    <p key={i + 2}>{p}</p>
                  ))}
                </div>
              )}

              {data.content.length > 2 && (
                <button onClick={() => setIsExpanded(!isExpanded)} className="group flex items-center gap-2 text-menu font-bold text-[#2776ea] hover:text-[#1a5bbd] transition-colors mt-4 outline-none uppercase tracking-wider">
                  {isExpanded ? <>Read Less <ChevronUp size={14} /></> : <>Read More <ChevronDown size={14} /></>}
                </button>
              )}
            </div>
          </div>

          {/* --- RIGHT: DIFFERENTIATORS (Col Span 5) --- */}
          <div className="lg:col-span-5 relative">
            {/* Styled Container */}
            <div className="bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-100">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#76ea27] shadow-sm">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-h3 font-black text-slate-900">Key Differentiators</h3>
                  <p className="text-caption text-slate-400 font-bold uppercase tracking-widest">Why Webronic?</p>
                </div>
              </div>

              <div className="space-y-4">
                {data.differentiators.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                    <div className="mt-1 h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#2776ea] shrink-0">
                      <DynamicIcon name={item.icon} size={16} />
                    </div>
                    <div>
                      <h4 className="text-submenu font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-caption font-medium text-slate-500 leading-relaxed">
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