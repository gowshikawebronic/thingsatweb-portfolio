"use client";

import { useRef } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalCaseStudies({ data }: { data: ServicePageData['caseStudies'] }) {
  const containerRef = useRef(null);
  
  if (!data) return null;

  return (
    <section className="bg-slate-50 py-20 font-sora relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <SectionHeader 
          badge="Proven Impact"
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-16"
          size="default"
        />

        {/* STACKING CARD CONTAINER */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-20">
          {data.items.map((study, index) => {
            // Adjusted offset for tighter stacking
            const stickyTop = `calc(100px + ${index * 20}px)`;

            return (
              <motion.div 
                key={study.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ top: stickyTop }} 
                // Changed hover:shadow-blue-900/10 to hover:shadow-primary-blue/10
                className="sticky group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-primary-blue/10 transition-shadow duration-500 flex flex-col lg:flex-row"
              >
                
                {/* --- LEFT: NARRATIVE (Compacted) --- */}
                <div className="p-6 md:p-8 lg:w-3/5 flex flex-col relative z-10 bg-white">
                    
                    {/* Meta Header */}
                    <div className="flex items-center gap-3 mb-4">
                        {/* Changed text-[#2776ea] to text-primary-blue */}
                        <div className={`p-2 rounded-xl bg-slate-50 border border-slate-100 ${study.color} text-primary-blue`}>
                            <DynamicIcon name={study.icon} size={18} />
                        </div>
                        <div>
                            <span className="block text-caption font-black uppercase tracking-widest text-slate-400">
                                {study.category}
                            </span>
                            <span className="block text-caption font-bold text-slate-900">
                                {study.client}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-h3 md:text-h2 font-black text-slate-900 mb-4 leading-tight">
                        {study.title}
                    </h3>

                    {/* Challenge & Solution (Side-by-side on larger screens for height savings) */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6 flex-grow">
                        <div>
                            <h4 className="text-caption font-black uppercase tracking-wide text-red-400/80 mb-1">The Challenge</h4>
                            <p className="text-caption font-medium text-slate-500 leading-relaxed line-clamp-3">
                                {study.challenge}
                            </p>
                        </div>
                        <div>
                            {/* Changed text-[#76ea27]/90 to text-brand-green/90 */}
                            <h4 className="text-caption font-black uppercase tracking-wide text-brand-green/90 mb-1">The Solution</h4>
                            <p className="text-caption font-medium text-slate-500 leading-relaxed line-clamp-3">
                                {study.solution}
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack Pills (Small) */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                        {study.implementation.slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-caption font-bold text-slate-600">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT: RESULTS & IMPACT (Compacted) --- */}
                <div className="bg-slate-50/80 p-6 md:p-8 lg:w-2/5 border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-center relative overflow-hidden">
                    
                    <div className="relative z-10">
                        {/* Metrics (Tighter vertical spacing) */}
                        <div className="space-y-3 mb-6">
                            {study.results.map((res, i) => (
                              <div key={i} className="flex items-end justify-between border-b border-slate-200/60 pb-2 last:border-0">
                                  <span className="text-caption font-bold text-slate-500 uppercase tracking-widest">{res.label}</span>
                                  {/* Changed text-[#2776ea] to text-primary-blue */}
                                  <span className="text-h2 font-black text-primary-blue">{res.value}</span>
                              </div>
                            ))}
                        </div>

                        {/* Quote Box (Condensed) */}
                        <div className="relative bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-4">
                            <Quote size={14} className="text-slate-200 mb-2" />
                            <p className="text-caption font-medium text-slate-600 italic leading-relaxed mb-2 line-clamp-2">
                                "{study.quote}"
                            </p>
                            <div className="flex items-center gap-2">
                                {/* Changed bg-[#2776ea] to bg-primary-blue */}
                                <div className="h-px w-4 bg-primary-blue" />
                                <span className="text-caption font-black text-slate-900 uppercase tracking-wider">
                                    {study.author}
                                </span>
                            </div>
                        </div>
                        
                        {/* Action Button (Slim) */}
                        {/* Changed bg-[#2776ea] to bg-primary-blue and hover:bg-[#2776ea]/70 to hover:bg-primary-blue/70 */}
                        <button className="w-full py-3 rounded-lg bg-primary-blue text-white text-caption font-bold uppercase tracking-widest hover:bg-primary-blue/70 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group/btn">
                            Full Case Study 
                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}