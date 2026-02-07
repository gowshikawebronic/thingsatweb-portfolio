"use client";

import { Clock, Cpu } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalCoreServices({ data }: { data: ServicePageData['coreServices'] }) {
  if (!data) return null;

  return (
    <section className="relative bg-slate-50 py-24 font-sora overflow-hidden border-b border-slate-200/60">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <SectionHeader 
          badge={data.badge}
          title={data.titleLine1}
          highlight={data.titleHighlight}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-16"
          size="default"
        />

        {/* CARDS GRID (Cleaner, uniform height) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {data.cards.map((card, index) => (
            // Changed hover:shadow-blue-900/5 to hover:shadow-primary-blue/5
            <div key={index} className={`group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary-blue/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:-translate-y-1 ${card.span || ""}`}>
              
              {/* Subtle Top Line */}
              <div className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.bg?.replace("/10", "")}`} />

              <div className="flex items-start justify-between mb-6">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${card.bg} ${card.color} group-hover:scale-105 transition-transform duration-300`}>
                    <DynamicIcon name={card.icon} size={24} strokeWidth={1.5} />
                </div>
                {/* Arrow Icon for interactivity hint */}
                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-slate-400">
                    <DynamicIcon name="ArrowUpRight" size={16} />
                </div>
              </div>

              {/* Changed group-hover:text-[#2776ea] to group-hover:text-primary-blue */}
              <h3 className="text-h3 font-black text-slate-900 mb-3 group-hover:text-primary-blue transition-colors">
                {card.title}
              </h3>

              <div className="text-body font-medium text-slate-500 leading-relaxed mb-6 flex-grow">
                {card.desc}
              </div>

              {card.list && (
                <ul className="space-y-2 pt-4 border-t border-slate-50 mt-auto">
                  {card.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-caption font-bold text-slate-600">
                      {/* Changed bg-[#76ea27] to bg-brand-green */}
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {card.tags && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {card.tags.map((tag, i) => (
                    // Changed group-hover:border-[#2776ea]/20 and text-[#2776ea] to primary-blue
                    <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-caption font-bold text-slate-500 uppercase tracking-wide group-hover:border-primary-blue/20 group-hover:text-primary-blue transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* COMPACT FOOTER METRICS */}
        <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Block */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-center gap-6">
                {/* Changed bg-[#76ea27]/10 and text-[#76ea27] to brand-green */}
                <div className="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                    <Clock size={24} />
                </div>
                <div>
                    <h4 className="text-caption font-black uppercase tracking-widest text-slate-400 mb-1">{data.footer.left.title}</h4>
                    <p className="text-h3 font-black text-slate-900 tracking-tight">{data.footer.left.content}</p>
                </div>
            </div>

            {/* Right Block */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-center gap-6">
                {/* Changed bg-[#2776ea]/10 and text-[#2776ea] to primary-blue */}
                <div className="h-12 w-12 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                    <Cpu size={24} />
                </div>
                <div className="flex-1">
                    <h4 className="text-caption font-black uppercase tracking-widest text-slate-400 mb-2">{data.footer.right.title}</h4>
                    <div className="flex flex-wrap gap-2">
                        {Array.isArray(data.footer.right.content) && data.footer.right.content.map((tag: string, i: number) => (
                            <span key={i} className="px-2 py-1 rounded bg-slate-50 text-caption font-bold text-slate-600 border border-slate-100">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}