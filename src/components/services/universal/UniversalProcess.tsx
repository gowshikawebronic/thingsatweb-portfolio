"use client";

import { Clock, Check, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalProcess({ data }: { data: ServicePageData['process'] }) {
  if (!data) return null;

  return (
    <section className="bg-white py-24 font-sora relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <SectionHeader 
          badge="Workflow"
          title={data.title}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-20"
        />

        {/* STACKING CONTAINER */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-24">
          
          {/* Vertical Guide Line (Visual Hint) */}
          <div className="absolute left-10 md:left-[88px] top-40 bottom-24 w-0.5 bg-slate-100 -z-10" />

          {data.phases.map((phase, index) => {
            // Dynamic Top Offset: Cards stick and stack with a small visible tab
            const stickyTop = `calc(120px + ${index * 15}px)`;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ top: stickyTop }}
                // Changed hover:shadow-blue-900/5 to hover:shadow-primary-blue/5
                className="sticky group bg-white rounded-3xl border border-slate-200 p-1 shadow-sm hover:shadow-xl hover:shadow-primary-blue/5 transition-all duration-500"
              >
                



                
                <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-slate-50/50 rounded-[1.25rem] border border-slate-100/50 h-full">
                    
                    {/* --- LEFT: STEP INDICATOR --- */}
                    <div className="flex flex-row md:flex-col items-center gap-4 md:w-20 shrink-0">
                        {/* Number */}
                        {/* Changed group-hover:text-[#2776ea]/20 to group-hover:text-primary-blue/20 */}
                        <span className="text-h1 font-black text-slate-200 group-hover:text-primary-blue/20 transition-colors">
                            0{index + 1}
                        </span>
                        
                        {/* Icon Box */}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-4 border-white shadow-sm transition-transform duration-500 group-hover:scale-110 ${phase.color} text-white`}>
                            <DynamicIcon name={phase.icon} size={24} strokeWidth={2} />
                        </div>
                    </div>

                    {/* --- RIGHT: CONTENT --- */}
                    <div className="flex-1 pt-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-h3 font-black text-slate-900">{phase.title}</h3>
                            
                            {/* Duration Badge */}
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm w-fit">
                                <Clock size={12} className="text-slate-400" />
                                <span className="text-caption font-bold text-slate-500 uppercase tracking-wide">{phase.duration}</span>
                            </div>
                        </div>

                        {/* Objectives Grid */}
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {phase.objectives.map((item, i) => (
                                // Changed group-hover:border-[#2776ea]/10 to group-hover:border-primary-blue/10
                                <li key={i} className="flex items-start gap-2.5 text-caption font-semibold text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm group-hover:border-primary-blue/10 transition-colors">
                                    {/* Changed bg-[#2776ea]/10 and text-[#2776ea] to primary-blue */}
                                    <div className="mt-0.5 w-4 h-4 rounded-full bg-primary-blue/10 flex items-center justify-center shrink-0 text-primary-blue">
                                        <Check size={8} strokeWidth={4} />
                                    </div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Arrow Hint (Hidden on last item) */}
                {index !== data.phases.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-300 shadow-sm z-20">
                        <ArrowDown size={14} />
                    </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}