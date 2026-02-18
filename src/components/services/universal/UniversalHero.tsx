"use client";

import Link from "next/link";
import { ArrowRight, Activity, Layers, Zap, Check } from "lucide-react";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalHero({
  data,
}: {
  data: ServicePageData["hero"];
}) {
  if (!data) return null;

  return (
    <section className="relative w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 font-sora overflow-hidden border-b border-slate-100 selection:bg-[#2776ea] selection:text-white">
      {/* --- BACKGROUND DECORATION --- */}
      {/* Subtle top gradient to give depth */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-slate-50/50 to-transparent -z-10 pointer-events-none" />

      {/* Right side accent blob */}
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- LEFT: CONTENT --- */}
          <div className="max-w-2xl relative">
            <SectionHeader
              align="left" // Replaces centered={false}
              badge={data.badge}
              color="blue" // Default theme color
              title={
                <>
                  {data.titlePrefix}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">
                    {data.titleHighlight}
                  </span>
                </>
              }
              description={data.description}
              className="mb-8"
            />

            {/* Enhanced CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#2776ea] text-white font-bold text-[15px] shadow-lg shadow-[#2776ea]/25 hover:bg-[#1a65d8] hover:shadow-xl hover:shadow-[#2776ea]/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                {data.ctaPrimary}
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/case-studies"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white border-2 border-slate-100 text-slate-600 font-bold text-[15px] hover:border-[#2776ea]/20 hover:text-[#2776ea] hover:bg-slate-50 transition-all duration-300 active:scale-95"
              >
                {data.ctaSecondary}
              </Link>
            </div>

            {/* Trust Indicator (Optional Enhancement) */}
            <div className="mt-8 flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-[#76ea27] fill-current" />
                High Performance
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Enterprise Ready</span>
            </div>
          </div>

          {/* --- RIGHT: ENHANCED VISUAL MODULE --- */}
          <div className="relative hidden lg:flex justify-end items-center perspective-[2000px]">
            {/* 1. Engineering Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_100%,transparent_100%)] opacity-40 z-0 scale-110" />

            {/* 2. Main Module Card */}
            <div className="relative z-10 w-full max-w-[360px] bg-white/90 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 overflow-hidden transform transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(39,118,234,0.15)] hover:-translate-y-1">
              {/* Top Status Bar */}
              <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#76ea27] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#76ea27]"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Operational
                  </span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-8">
                {/* Icon & Identity */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#2776ea] to-[#1a5bbd] flex items-center justify-center text-white shadow-lg shadow-[#2776ea]/25">
                    <Layers size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] block mb-1.5">
                      Architecture
                    </span>
                    <span className="text-lg font-black text-slate-900 leading-none block">
                      {data.badge}
                    </span>
                  </div>
                </div>

                {/* Capabilities Stack (Pills) */}
                <div className="space-y-4">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 flex justify-between items-center">
                    Active Modules
                    <span className="text-[#2776ea]">
                      {data.features.length}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {data.features.slice(0, 4).map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-600 hover:bg-[#2776ea]/5 hover:border-[#2776ea]/20 hover:text-[#2776ea] transition-colors cursor-default"
                      >
                        <Check
                          size={12}
                          className="mr-1.5 text-[#76ea27]"
                          strokeWidth={3}
                        />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Highlight Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#2776ea] via-[#76ea27] to-[#2776ea]" />
            </div>

            {/* Floating Badge (Accent) */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-3xl border border-slate-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] z-20 flex items-center gap-4 animate-[float_5s_ease-in-out_infinite]">
              <div className="h-10 w-10 rounded-xl bg-[#76ea27]/10 flex items-center justify-center text-[#5bc515]">
                <Activity size={20} strokeWidth={2.5} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                  Impact
                </span>
                <span className="block text-sm font-black text-slate-900">
                  {data.titleHighlight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
