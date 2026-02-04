"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
// 1. Import SectionHeader
import SectionHeader from "@/components/common/SectionHeader";
import { ServiceCardData } from "./PageServiceCard";

interface ServiceGridProps {
  services: ServiceCardData[];
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="relative py-24 bg-white font-sora">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="max-w-3xl mb-16">
          <SectionHeader 
            badge="Specialized Capabilities"
            title="Extended"
            highlight="Service Suite"
            description="Beyond our core platforms, we offer specialized engineering and consulting services tailored to enterprise needs"
            centered={false}
            className="mb-0" 
          />
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services?category=${service.id}`}
              className="group relative h-full bg-slate-50 rounded-[2rem] border border-slate-100 p-8 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white hover:border-[#2776ea]/20 flex flex-col"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#2776ea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Row: Icon & Arrow */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#2776ea] group-hover:scale-110 group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-500">
                  <div
                    className="h-7 w-7 bg-current
      [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]
      [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]"
                    style={{
                      maskImage: `url('${service.image.replaceAll(" ", "%20")}')`,
                      WebkitMaskImage: `url('${service.image.replaceAll(" ", "%20")}')`,
                    }}
                  />
                </div>

                {/* Arrow Icon */}
                <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#2776ea] group-hover:text-[#2776ea] group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-h3 font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                  {service.title}
                </h3>
                <p className="text-body font-medium text-slate-500 leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="relative z-10 mt-auto pt-6 border-t border-slate-200/50">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-100 text-caption font-bold text-slate-500 uppercase tracking-wide group-hover:border-[#2776ea]/30 group-hover:text-[#2776ea] transition-colors"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-caption font-bold text-slate-400">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Decorative "Sparkle" on Hover */}
              <div className="absolute -bottom-4 -right-4 text-[#2776ea]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none">
                <Sparkles size={120} strokeWidth={0.5} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}