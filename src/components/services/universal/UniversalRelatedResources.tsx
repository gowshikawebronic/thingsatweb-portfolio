"use client";

import Link from "next/link";
import { ArrowUpRight, FileText, ArrowRight, Layers } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalRelatedResources({ data }: { data: ServicePageData['relatedResources'] }) {
  if (!data) return null;

  return (
    <section className="bg-slate-50/50 py-24 font-sora relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#4888E8]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#07b022]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <SectionHeader
          badge="Ecosystem"
          title="Expand Your Capabilities"
          description="Explore complementary services and documentation to accelerate your roadmap."
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* --- LEFT COL: RELATED SERVICES (The Blue Zone) --- */}
          <div className="lg:col-span-8 space-y-8">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-lg bg-[#4888E8]/10 flex items-center justify-center text-[#4888E8]">
                    <Layers size={16} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Connected Services</h3>
             </div>

             <div className="grid md:grid-cols-2 gap-4">
                {data.services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#4888E8]/10 hover:border-[#4888E8] overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Icon Box */}
                            <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#4888E8] group-hover:text-white transition-colors duration-300">
                                <DynamicIcon name={service.icon} size={20} />
                            </div>
                            
                            <h4 className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors uppercase tracking-wide">
                                {service.title}
                            </h4>
                        </div>

                        <div className="text-slate-300 group-hover:text-[#4888E8] group-hover:translate-x-1 transition-all duration-300">
                            <ArrowRight size={18} />
                        </div>
                    </div>
                  </Link>
                ))}
             </div>
          </div>

          {/* --- RIGHT COL: RESOURCES (The Green Zone) --- */}
          <div className="lg:col-span-4">
            <div className="h-full bg-white rounded-[2rem] p-8 border border-slate-200 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
                {/* Green Accent Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#07b022]/10 rounded-bl-[4rem] -z-0" />
                
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-[#07b022]/10 flex items-center justify-center text-[#07b022]">
                                <FileText size={16} />
                            </div>
                            <h3 className="text-xl font-black text-slate-900">Knowledge</h3>
                        </div>
                        <Link href="/resources" className="text-xs font-black uppercase tracking-wider text-[#07b022] hover:underline">
                            View All
                        </Link>
                    </div>

                    <div className="space-y-8">
                        {data.columns.map((col, idx) => (
                            <div key={idx}>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                                     {col.title}
                                </h4>
                                <ul className="space-y-3">
                                    {col.items.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.href} className="group flex items-start justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#07b022]/5 hover:border-[#07b022]/20 transition-all duration-300">
                                                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">
                                                    {item.label}
                                                </span>
                                                <ArrowUpRight size={14} className="text-slate-300 group-hover:text-[#07b022] mt-0.5 transition-colors" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}