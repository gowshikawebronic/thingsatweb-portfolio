"use client";

import { ArrowUpRight, Quote, Zap, Target } from "lucide-react";
// 1. Import 'Variants' type here
import { motion, Variants } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

// 2. Explicitly type the variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      mass: 1 
    }
  },
};

export default function UniversalCaseStudies({ data }: { data: ServicePageData['caseStudies'] }) {
  if (!data) return null;

  return (
    <section className="bg-slate-50/50 py-24 font-sora relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4888E8]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#07b022]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <SectionHeader 
          badge="Success Stories"
          title={data.heading}
          description={data.description}
          align="center"
          className="max-w-3xl mx-auto mb-20"
        />

        {/* MOTION CONTAINER */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.items.map((study, index) => (
            <motion.div 
              key={study.id || index}
              variants={cardVariants}
              className="group flex flex-col h-full bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              
              {/* --- CARD HEADER (Client & Icon) --- */}
              <div className="p-8 pb-0">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-[#4888E8]/5 border border-[#4888E8]/10 flex items-center justify-center text-[#4888E8] group-hover:bg-[#4888E8] group-hover:text-white transition-colors duration-500">
                      <DynamicIcon name={study.icon} size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                        {study.category}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 leading-tight">
                        {study.client}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* --- IMPACT STATS (The "Green" Highlight) --- */}
                <div className="bg-[#07b022]/5 rounded-2xl p-5 border border-[#07b022]/10 mb-6 group-hover:bg-[#07b022]/10 transition-colors">
                  {study.results.slice(0, 1).map((res, i) => (
                    <div key={i}>
                      <p className="text-3xl font-black text-[#07b022] mb-1 tracking-tighter">
                        {res.value}
                      </p>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* --- CARD BODY (Content) --- */}
              <div className="px-8 flex-grow space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={14} className="text-slate-400" />
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900">Challenge</h4>
                  </div>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} className="text-[#4888E8]" fill="#4888E8" />
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900">Solution</h4>
                  </div>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-3">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* --- CARD FOOTER (Tech & Link) --- */}
              <div className="mt-8 p-6 bg-slate-50 border-t border-slate-100 group-hover:bg-slate-100/50 transition-colors">
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {study.implementation.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[10px] font-bold text-slate-500">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Quote size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-wider line-clamp-1 max-w-[150px]">
                      {study.author}
                    </span>
                  </div>

                  <button className="flex items-center gap-2 text-[#4888E8] text-xs font-black uppercase tracking-widest group/btn">
                    Read Story 
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Bottom Green Accent Line */}
              <div className="h-1 w-0 bg-[#07b022] group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW ALL BUTTON */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-sm tracking-wide shadow-xl hover:scale-105 hover:bg-[#4888E8] transition-all duration-300">
            View Complete Portfolio
          </button>
        </motion.div>

      </div>
    </section>
  );
}