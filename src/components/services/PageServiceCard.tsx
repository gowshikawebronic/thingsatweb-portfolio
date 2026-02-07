"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, Layers, MessageSquare, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon"; 

// 1. DEFINE THE NEW TYPE HERE
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
  onCtaClick: (service: ServiceCardData) => void;
  reversed?: boolean;
}

export const PageServiceCard = ({
  service,
  index,
  onCtaClick,
  reversed = false,
}: PageServiceCardProps) => {
  const [showStack, setShowStack] = useState(false);

  // Dynamic URL using query param
  const serviceUrl = `/service?category=${service.id}`;

  return (
    <div
      style={{ animationDelay: `${index * 150}ms` }}
      className="group relative w-full font-sora animate-in slide-in-from-bottom-8 fade-in"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div
          className={`lg:col-span-7 flex flex-col order-2 ${reversed ? "lg:order-2" : "lg:order-1"}`}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            {/* Changed text-[#2776ea] to text-primary-blue */}
            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-primary-blue shadow-sm transition-transform duration-500 group-hover:scale-105">
              {service.localIcon ? (
                <div
                  className="h-7 w-7 bg-current
      [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]
      [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]"
                  style={{
                    maskImage: `url('${service.localIcon.replaceAll(" ", "%20")}')`,
                    WebkitMaskImage: `url('${service.localIcon.replaceAll(" ", "%20")}')`,
                  }}
                />
              ) : (
                <DynamicIcon name={service.icon} size={28} />
              )}
            </div>

            <span className="text-caption font-bold uppercase tracking-widest text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              {service.tagline}
            </span>
          </div>

          {/* Title & Description */}
          {/* Changed group-hover:text-[#2776ea] to group-hover:text-primary-blue */}
          <h3 className="text-h1 font-bold text-slate-900 mb-6 group-hover:text-primary-blue transition-colors tracking-tight">
            {service.title}
          </h3>
          <p className="text-slate-500 font-medium leading-loose mb-8 max-w-xl text-body">
            {service.description}
          </p>

          {/* Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {service.points.slice(0, 4).map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                {/* Changed bg-[#76ea27]/20 to bg-brand-green/20 */}
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green flex items-center justify-center mt-1">
                  {/* Changed text-[#5eb820] to text-brand-green */}
                  <Check size={12} className="text-brand-green" strokeWidth={4} />
                </div>
                <span className="text-submenu font-semibold text-slate-600">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* --- ACTION ROW --- */}
          <div className="flex flex-wrap items-center gap-4">
            {/* 1. Start Project */}
            {/* Changed bg-[#2776ea] to bg-primary-blue, hover to opacity modifier */}
            <button
              onClick={() => onCtaClick(service)}
              className="flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-primary-blue text-white font-bold text-menu uppercase tracking-widest hover:bg-brand-green transition-colors shadow-md shadow-slate-200"
            >
              Start Project
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <MessageSquare size={14} />
              </div>
            </button>

            {/* 2. Explore */}
            {/* Changed bg-[#76ea27] to bg-brand-green, hover to opacity modifier */}
            <Link
              href={serviceUrl}
              className="flex items-center gap-2 pl-6 pr-2 py-2 rounded-full  text-slate-900 font-bold text-menu uppercase tracking-widest  transition-colors shadow-md shadow-slate-200"
            >
              Explore
              <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center">
                <ArrowUpRight size={16} />
              </div>
            </Link>

            {/* 3. The Toggle Pill */}
            {/* Changed border hover and text hover to primary-blue */}
            <div
              onClick={() => setShowStack(!showStack)}
              className="flex items-center gap-3 pl-2 pr-5 py-1.5 rounded-full border border-slate-200 bg-white cursor-pointer hover:border-primary-blue hover:shadow-md transition-all group/toggle ml-0 sm:ml-2"
            >
              <div className="flex -space-x-2">
                {service.technologies.slice(0, 3).map((t, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-50 border border-white p-1.5"
                  >
                    <img
                      src={t.logo}
                      alt={t.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {/* Changed group-hover/toggle:text to primary-blue */}
                <span className="text-caption font-bold uppercase tracking-widest text-slate-500 group-hover/toggle:text-primary-blue transition-colors">
                  {showStack ? "Close" : "Stack"}
                </span>
                <Layers
                  size={14}
                  className="text-slate-400 group-hover/toggle:text-primary-blue"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: PEDESTAL --- */}
        <div
          className={`lg:col-span-5 h-full min-h-[420px] perspective-1000 order-1 ${reversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative w-full h-full bg-slate-50/50 rounded-[3rem] border border-slate-100 overflow-hidden flex items-center justify-center transition-all duration-700 hover:shadow-xl hover:shadow-slate-200">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-100/80 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {showStack ? (
                /* STACK VIEW */
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-20 flex flex-col"
                >
                  <div className="flex justify-between items-center px-8 pt-8 pb-4">
                    <span className="text-caption font-black uppercase tracking-widest text-slate-400">
                      Technologies
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowStack(false);
                      }}
                      className="p-2 bg-white rounded-full border border-slate-100 hover:bg-slate-50 text-slate-400 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-0">
                    <div className="grid grid-cols-2 gap-3">
                      {service.technologies.map((t) => (
                        <div
                          key={t.name}
                          // Changed hover:border to primary-blue/30
                          className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:border-primary-blue/30 hover:shadow-md transition-all duration-300 group/tech cursor-default"
                        >
                          <div className="w-9 h-9 mb-2 relative">
                            <img
                              src={t.logo}
                              alt={t.name}
                              className="object-contain w-full h-full"
                            />
                          </div>
                          {/* Changed group-hover/tech:text to primary-blue */}
                          <span className="text-caption font-bold text-slate-500 uppercase tracking-wide group-hover/tech:text-primary-blue text-center transition-colors">
                            {t.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* IMAGE VIEW */
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
                >
                  <div className="relative w-64 h-64 lg:w-72 lg:h-72 transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-1">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                  <div className="absolute bottom-16 w-32 h-3 bg-slate-400/20 blur-lg rounded-full transition-all duration-700 group-hover:w-24 group-hover:translate-y-4 opacity-50" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};