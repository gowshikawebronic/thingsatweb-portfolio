"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalRelatedResources({ data }: { data: ServicePageData['relatedResources'] }) {
  if (!data) return null;

  return (
    <section className="bg-slate-50 py-24 font-sora relative overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* --- SECTION 1: RELATED SERVICES --- */}
        <div className="mb-20">
          <SectionHeader
            badge="Ecosystem"
            title="Related Capabilities"
            description="Explore complementary services"
            centered={true}
            className="max-w-3xl mx-auto mb-10"
            size="default"
          />

          <div className="flex flex-wrap justify-center gap-4">
            {data.services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                // Changed hover:border-[#2776ea] to hover:border-primary-blue
                className="group bg-white px-6 py-4 rounded-2xl border border-slate-200 hover:border-primary-blue hover:shadow-lg transition-all duration-300 flex items-center gap-3"
              >
                <div className={`h-8 w-8 rounded-lg ${service.bg} flex items-center justify-center ${service.color}`}>
                  <DynamicIcon name={service.icon} size={16} />
                </div>
                {/* Changed group-hover:text-[#2776ea] to group-hover:text-primary-blue */}
                <h4 className="text-menu font-bold text-slate-700 group-hover:text-primary-blue uppercase tracking-wide">
                  {service.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: RESOURCES LINKS --- */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-h3 font-black text-slate-900">Resources & Documentation</h3>
                {/* Changed text-[#2776ea] to text-primary-blue */}
                <Link href="/resources" className="text-menu font-bold text-primary-blue hover:underline">View All</Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {data.columns.map((col, idx) => (
                    <div key={idx}>
                        <h4 className="text-caption font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                             <DynamicIcon name={col.icon} size={12} /> {col.title}
                        </h4>
                        <ul className="space-y-2">
                            {col.items.map((item, i) => (
                                <li key={i}>
                                    {/* Changed hover:text-[#2776ea] to hover:text-primary-blue */}
                                    <Link href={item.href} className="flex items-center gap-2 text-submenu font-medium text-slate-600 hover:text-primary-blue group">
                                        {/* Changed group-hover:text-[#2776ea] to group-hover:text-primary-blue */}
                                        <ArrowRight size={12} className="text-slate-300 group-hover:text-primary-blue transition-colors" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}