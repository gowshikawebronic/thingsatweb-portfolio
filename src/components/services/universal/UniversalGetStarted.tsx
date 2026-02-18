"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalGetStarted({ data }: { data: ServicePageData['getStarted'] }) {
  if (!data) return null;

  return (
    <section className=" py-24 font-poppins relative overflow-hidden">
      
     
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <SectionHeader 
          badge={data.badge}
          title={data.titleLines.join(" ")}
          description={data.description}
          align="center"
          className="max-w-3xl mx-auto mb-16"
        />

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.cards.map((card, index) => {
            const isAccent = card.theme === "dark"; 
            
            // --- COLOR MAPPING ---
            // isAccent (Dark Theme) -> Green (#07b022)
            // Standard (Light Theme) -> Blue (#4888E8)
            const themeColor = isAccent ? "text-[#07b022]" : "text-[#4888E8]";
            const bgIcon = isAccent ? "bg-[#07b022]/10" : "bg-[#4888E8]/10";
            const btnColor = isAccent 
              ? "bg-[#07b022] hover:bg-[#07b022]/90 shadow-[#07b022]/20" 
              : "bg-[#4888E8] hover:bg-[#4888E8]/90 shadow-[#4888E8]/20";
            const hoverBorder = isAccent 
              ? "group-hover:border-[#07b022]/30" 
              : "group-hover:border-[#4888E8]/30";

            return (
              <div 
                key={index} 
                className={`flex flex-col rounded-[2.5rem] p-8 md:p-10 bg-white border border-slate-100 shadow-xl shadow-[#0F172A]/5 hover:shadow-2xl transition-all duration-500 group ${hoverBorder} hover:-translate-y-2`}
              >
                
                {/* Icon Box */}
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 border border-transparent group-hover:scale-110 transition-transform duration-500 ${bgIcon} ${themeColor}`}>
                    <DynamicIcon name={card.icon} size={28} />
                </div>
                  
                {/* Content */}
                <h3 className="text-2xl font-black mb-4 text-[#0F172A]">{card.title}</h3>
                <p className="text-lg font-medium mb-10 text-slate-500 leading-relaxed">{card.description}</p>

                {/* List */}
                <ul className="space-y-4 mb-10 flex-grow">
                    {card.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-bold text-slate-600 text-sm">
                        <CheckCircle2 className={`shrink-0 mt-0.5 ${themeColor}`} size={18} />
                        {item}
                      </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a 
                    href={card.cta.link} 
                    className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest py-5 rounded-2xl transition-all text-white shadow-lg hover:shadow-xl active:scale-95 ${btnColor}`}
                >
                    <span>{card.cta.text}</span>
                    <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}