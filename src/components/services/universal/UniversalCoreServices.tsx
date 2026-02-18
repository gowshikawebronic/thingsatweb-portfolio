"use client";

import { Clock, Cpu, ArrowUpRight } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalCoreServices({
  data,
}: {
  data: ServicePageData["coreServices"];
}) {
  if (!data) return null;

  return (
    <section className="relative  py-24 font-sora overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader
          align="center" // Replaces centered={true}
          badge={data.badge}
          color="blue" // Add color theme
          title={
            <>
              {data.titleLine1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">
                {data.titleHighlight}
              </span>
            </>
          }
          description={data.description}
          className="max-w-3xl mx-auto mb-16"
        />

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className={`group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-[#0F172A]/5 hover:shadow-2xl hover:shadow-[#4888E8]/10 hover:border-[#4888E8]/30 transition-all duration-500 relative overflow-hidden flex flex-col h-full hover:-translate-y-2 ${card.span || ""}`}
            >
              {/* Subtle Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4888E8] via-[#07b022] to-[#4888E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-8">
                <div
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center bg-[#4888E8]/10 text-[#4888E8] group-hover:bg-[#4888E8] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#4888E8]/30`}
                >
                  <DynamicIcon name={card.icon} size={28} strokeWidth={1.5} />
                </div>
                {/* Arrow Icon */}
                <div className="h-10 w-10 rounded-full bg-[#FAF7F6] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#4888E8] transform group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <h3 className="text-xl font-black text-[#0F172A] mb-4 group-hover:text-[#07b022] transition-colors">
                {card.title}
              </h3>

              <div className="text-lg font-medium text-slate-500 leading-relaxed mb-8 flex-grow">
                {card.desc}
              </div>

              {card.list && (
                <ul className="space-y-3 pt-6 border-t border-slate-100 mt-auto">
                  {card.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-bold text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#07b022] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {card.tags && (
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#FAF7F6] border border-slate-100 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:bg-[#4888E8]/5 group-hover:text-[#4888E8] group-hover:border-[#4888E8]/20 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* COMPACT FOOTER METRICS */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Block */}
          <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-lg shadow-[#0F172A]/5 flex items-center gap-8 hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-2xl bg-[#07b022]/10 flex items-center justify-center text-[#07b022] shrink-0">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                {data.footer.left.title}
              </h4>
              <p className="text-3xl font-black text-[#0F172A] tracking-tight">
                {data.footer.left.content}
              </p>
            </div>
          </div>

          {/* Right Block */}
          <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-lg shadow-[#0F172A]/5 flex items-center gap-8 hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-2xl bg-[#4888E8]/10 flex items-center justify-center text-[#4888E8] shrink-0">
              <Cpu size={32} />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                {data.footer.right.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(data.footer.right.content) &&
                  data.footer.right.content.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#FAF7F6] text-[10px] font-black text-slate-600 border border-slate-100 uppercase tracking-wide"
                    >
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
