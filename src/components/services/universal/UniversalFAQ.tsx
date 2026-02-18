"use client";

import { useState, useEffect } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalFAQ({ data }: { data: ServicePageData['faq'] }) {
  // Initialize with 0 (first item open)
  const [openItem, setOpenItem] = useState<number | null>(0);
  // Track if component has mounted to prevent hydration mismatch on animations
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  if (!data) return null;

  return (
    <section className="bg-slate-50 relative py-24 font-sora overflow-hidden" id="faq">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white rounded-[100%] blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#4888E8]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#07b022]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* HEADER */}
        <SectionHeader 
          badge="Common Questions"
          title={data.heading}
          description="Everything you need to know about our process, deliverables, and engagement models."
          centered={true}
          className="mb-16"
        />

        {/* FAQ CARDS */}
        <div className="space-y-4">
          {data.items.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <motion.div 
                key={index}
                // layout prop helps framer motion handle structure changes smoothly
                layout
                initial={false}
                animate={{ 
                  backgroundColor: isOpen ? "#ffffff" : "#ffffff",
                  borderColor: isOpen ? "#4888E8" : "rgba(226, 232, 240, 1)"
                }}
                className={`group border rounded-3xl overflow-hidden transition-shadow duration-300 ${
                  isOpen ? "shadow-[0_10px_40px_rgba(72,136,232,0.08)]" : "hover:border-[#4888E8]/30 hover:shadow-sm"
                }`}
              >
                <button 
                  onClick={() => toggleItem(index)} 
                  className="w-full text-left p-6 md:p-8 flex items-start gap-6 focus:outline-none cursor-pointer bg-transparent"
                >
                  {/* Icon Toggle */}
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen 
                      ? "bg-[#4888E8] text-white rotate-180 shadow-lg shadow-[#4888E8]/20" 
                      : "bg-slate-50 text-slate-400 group-hover:bg-[#4888E8]/10 group-hover:text-[#4888E8]"
                  }`}>
                    {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                  </div>

                  <div className="flex-1 pt-1">
                    {/* Question */}
                    <h3 className={`text-lg md:text-xl font-bold leading-tight transition-colors duration-300 ${
                      isOpen ? "text-[#4888E8]" : "text-slate-900 group-hover:text-slate-700"
                    }`}>
                      {item.question}
                    </h3>

                    {/* Animated Answer - Only render AnimatePresence after mount to avoid hydration mismatch */}
                    {isMounted ? (
                      <AnimatePresence initial={false} mode="wait">
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { opacity: 1, height: "auto", marginTop: 16 },
                              collapsed: { opacity: 0, height: 0, marginTop: 0 }
                            }}
                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          >
                            <div className="border-t border-dashed border-slate-100 pt-4">
                              <p className="text-slate-500 font-medium leading-relaxed text-base">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : (
                      // Server-side fallback (renders open state if it matches default, or hidden)
                      <div 
                        className={`overflow-hidden transition-all ${isOpen ? 'h-auto mt-4 opacity-100' : 'h-0 mt-0 opacity-0'}`}
                      >
                         <div className="border-t border-dashed border-slate-100 pt-4">
                              <p className="text-slate-500 font-medium leading-relaxed text-base">
                                {item.answer}
                              </p>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex justify-center">
           <div className="bg-white p-2 pr-6 rounded-full border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center gap-4 transition-transform hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-[#07b022]/10 flex items-center justify-center text-[#07b022]">
                 <HelpCircle size={20} />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Still have questions?</span>
                 <a href="/contact" className="flex items-center gap-1 text-sm font-black text-slate-900 hover:text-[#07b022] transition-colors">
                    Chat with our team <ArrowRight size={14} strokeWidth={3} />
                 </a>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}