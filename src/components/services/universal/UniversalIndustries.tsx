"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalIndustries({ data }: { data: ServicePageData['industries'] }) {
  const [activeTab, setActiveTab] = useState(data.items[0]?.id);
  const currentIndustry = data.items.find((ind) => ind.id === activeTab) || data.items[0];

  const isBlue = currentIndustry?.theme === "blue";
  const themeColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";

  return (
    <section className="bg-white py-24 font-sora relative overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        
        <SectionHeader 
          badge="Impact"
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-12"
        />

        {/* COMPACT TABS (Centered) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {data.items.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-menu font-bold uppercase tracking-wider border ${
                activeTab === ind.id
                  ? `${ind.theme === 'blue' ? 'bg-[#2776ea] border-[#2776ea]' : 'bg-[#76ea27] border-[#76ea27]'} text-white shadow-md`
                  : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
              }`}
            >
              <DynamicIcon name={ind.icon} size={14} />
              <span>{ind.label}</span>
            </button>
          ))}
        </div>

        {/* FEATURES GRID (Flex + Center) */}
        {/* Changed from Grid to Flex to ensure items are always centered even if row isn't full */}
        <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
          {currentIndustry.features.map((feature, idx) => (
            <div 
              key={idx} 
              // w-full on mobile, fixed width on desktop to keep them compact and uniform
              className="group flex flex-col bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-sm"
            >
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm ${themeColor}`}>
                  <DynamicIcon name={feature.icon} size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-h3 font-black text-slate-900 leading-tight">{feature.title}</h3>
              </div>

              <p className="text-caption font-medium text-slate-500 leading-relaxed mb-6 flex-grow">
                {feature.desc}
              </p>

              {feature.caseStudy && (
                <div className="mt-auto pt-3 border-t border-slate-200">
                   <p className="text-caption font-black uppercase tracking-widest text-[#2776ea] mb-1 flex items-center gap-1">
                      Success Story <ArrowRight size={10} />
                   </p>
                   <div className="flex flex-col gap-0.5">
                      <p className="text-caption font-bold text-slate-900 truncate">{feature.caseStudy.title}</p>
                      <span className="text-caption font-bold text-slate-400">{feature.caseStudy.result}</span>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}