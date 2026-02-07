"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalGetStarted({ data }: { data: ServicePageData['getStarted'] }) {
  if (!data) return null;

  return (
    <section className="bg-white py-24 font-sora relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <SectionHeader 
          badge={data.badge}
          title={data.titleLines.join(" ")}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.cards.map((card, index) => {
            const isAccent = card.theme === "dark"; 
            
            // --- UPDATED COLOR LOGIC ---
            // Replaced hex codes with brand-green and primary-blue
            const accentColor = isAccent ? "text-brand-green" : "text-primary-blue";
            
            // Updated hover states to use opacity modifiers (/90) instead of hardcoded hexes
            const btnColor = isAccent 
              ? "bg-brand-green hover:bg-brand-green/90" 
              : "bg-primary-blue hover:bg-primary-blue/90";

            return (
              // Updated hover:shadow-blue-900/5 to hover:shadow-primary-blue/5
              <div key={index} className="flex flex-col rounded-3xl p-8 bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary-blue/5 transition-all duration-300 group">
                
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 bg-white border border-slate-100 shadow-sm ${accentColor}`}>
                    <DynamicIcon name={card.icon} size={24} />
                </div>
                  
                <h3 className="text-h3 font-black mb-2 text-slate-900">{card.title}</h3>
                <p className="text-body font-medium mb-8 text-slate-500">{card.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                    {card.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-caption font-bold text-slate-600">
                        <CheckCircle2 className={`shrink-0 mt-0.5 ${accentColor}`} size={14} />
                        {item}
                      </li>
                    ))}
                </ul>

                <a href={card.cta.link} className={`w-full inline-flex items-center justify-center gap-2 text-menu font-bold uppercase tracking-widest py-4 rounded-xl transition-colors text-white ${btnColor}`}>
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