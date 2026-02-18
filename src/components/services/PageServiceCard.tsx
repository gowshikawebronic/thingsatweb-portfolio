"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, Layers, ArrowUpRight, Sparkles } from "lucide-react";
// Import Variants type to fix the error
import { AnimatePresence, motion, Variants } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";

// --- 1. INTERFACES ---
export interface ServiceCardData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  localIcon?: string;
  points: string[];
  technologies: { name: string; logo: string }[];
}

interface PageServiceCardProps {
  service: ServiceCardData;
  index: number;
  // This function triggers the LeadModal in your parent page
  onCtaClick: (service: ServiceCardData) => void;
  reversed?: boolean;
}

// --- 2. FIXED ANIMATION VARIANTS ---
const floatVariants: Variants = {
  floating: {
    y: [0, -15, 0],
    rotate: [0, 1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const stackVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

export const PageServiceCard = ({
  service,
  index,
  onCtaClick,
  reversed = false,
}: PageServiceCardProps) => {
  const [showStack, setShowStack] = useState(false);

  // Dynamic URL
  const serviceUrl = `/service?category=${service.id}`;

  return (
    <div
      className="group relative w-full font-sora py-5 border-b border-slate-100 last:border-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
        
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div
          className={`lg:col-span-6 flex flex-col gap-8 order-2 ${
            reversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* --- NEW BADGE DESIGN --- */}
          <div className="flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-[#4888E8]/5 to-[#07b022]/5 border border-[#4888E8]/20 shadow-sm backdrop-blur-sm">
              {/* Gradient Text for Icon */}
              <Sparkles size={12} className="text-[#07b022]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4888E8]">
                {service.tagline}
              </span>
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.1]">
              {service.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {service.description}
          </p>

          {/* Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {service.points.slice(0, 4).map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-[#07b022]/10 flex items-center justify-center">
                    <Check size={12} className="text-[#07b022]" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-600">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* --- ACTION ROW --- */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            
            {/* 1. START PROJECT (Triggers LeadModal via onCtaClick) */}
            <button
              onClick={() => onCtaClick(service)}
              className="group/btn cursor-pointer relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F172A] text-white font-bold text-sm uppercase tracking-widest shadow-xl shadow-[#0F172A]/20 hover:shadow-2xl hover:shadow-[#4888E8]/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
               {/* Gradient Overlay on Hover */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#4888E8] to-[#07b022] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
               <span className="relative z-10">Start Project</span>
            </button>

            {/* 2. EXPLORE (Link) */}
            <Link
              href={serviceUrl}
              className="group/link inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-[#0F172A] font-bold text-sm uppercase tracking-widest hover:border-[#4888E8] hover:text-[#4888E8] transition-all duration-300"
            >
              Explore
              <ArrowUpRight size={16} className="group-hover/link:rotate-45 transition-transform duration-300" />
            </Link>

            {/* 3. STACK TOGGLE */}
            <button
              onClick={() => setShowStack(!showStack)}
              className={`
                group/toggle flex items-center gap-3 px-4 py-3 rounded-full border bg-white transition-all duration-300 ml-0 sm:ml-2
                ${showStack ? "border-[#4888E8] shadow-md shadow-[#4888E8]/10" : "border-slate-200 hover:border-[#4888E8]"}
              `}
            >
              <div className="flex -space-x-2">
                {service.technologies.slice(0, 3).map((t, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-white border border-slate-100 p-1 shadow-sm"
                  >
                    <img
                      src={t.logo}
                      alt={t.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover/toggle:text-[#4888E8]">
                <span>{showStack ? "Close" : "Stack"}</span>
                {showStack ? <X size={14} /> : <Layers size={14} />}
              </div>
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: PEDESTAL --- */}
        <div
          className={`lg:col-span-6 h-[400px] lg:h-[500px] perspective-1000 order-1 ${
            reversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative w-full h-full bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex items-center justify-center group-hover:shadow-[#4888E8]/10 transition-shadow duration-700">
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4888E8]/5 via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F8FAFC] to-transparent" />

            {/* --- CONTENT SWITCHER --- */}
            <AnimatePresence mode="wait">
              {showStack ? (
                /* 1. TECH STACK VIEW */
                <motion.div
                  key="stack"
                  variants={stackVariants} // Using typed variants
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-20 flex flex-col bg-white/95 backdrop-blur-md p-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                            Technologies Used
                        </h4>
                        <div className="h-px flex-grow bg-slate-100 mx-4" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto custom-scrollbar pr-2 pb-4">
                        {service.technologies.map((t) => (
                            <div
                                key={t.name}
                                className="flex flex-col items-center justify-center p-4 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#4888E8]/30 hover:bg-white hover:shadow-lg hover:shadow-[#4888E8]/5 transition-all duration-300 group/tech cursor-default"
                            >
                                <div className="w-10 h-10 mb-3 relative grayscale group-hover/tech:grayscale-0 transition-all duration-300">
                                    <img
                                        src={t.logo}
                                        alt={t.name}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide group-hover/tech:text-[#4888E8] text-center transition-colors">
                                    {t.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
              ) : (
                /* 2. IMAGE PEDESTAL VIEW */
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  {/* Floating Animation Wrapper */}
                  <motion.div 
                    variants={floatVariants} // Using typed variants
                    animate="floating"
                    className="relative w-[70%] h-[70%]"
                  >
                     <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                  </motion.div>

                  {/* Icon Badge Overlay */}
                  <div className="absolute top-8 right-8 h-16 w-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 flex items-center justify-center border border-slate-50 rotate-3 hover:rotate-0 transition-transform duration-300">
                    {service.localIcon ? (
                       <div
                       className="h-8 w-8 bg-[#4888E8] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]"
                       style={{
                         maskImage: `url('${service.icon}')`,
                         WebkitMaskImage: `url('${service.icon}')`,
                       }}
                     />
                    ) : (
                        <div className="text-[#4888E8]">
                            <DynamicIcon name={service.icon} size={32} />
                        </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};