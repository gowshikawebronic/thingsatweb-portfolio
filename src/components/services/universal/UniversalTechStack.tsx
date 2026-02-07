"use client";

import { Settings, Code2, Bot, Cloud, Check } from "lucide-react";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalTechStack({ data }: { data: ServicePageData['techStack'] }) {
  if (!data) return null;

  return (
    <section className="relative bg-white py-24 font-sora px-5 lg:px-10 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        <SectionHeader 
          badge="Infrastructure"
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 1. Frameworks */}
          {/* Changed hover:shadow-blue-900/5 to hover:shadow-primary-blue/5 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary-blue/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              {/* Changed bg-[#2776ea]/10 and text-[#2776ea] to primary-blue */}
              <div className="h-10 w-10 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                <Code2 size={20} />
              </div>
              <h3 className="text-h3 font-black text-slate-900">Frameworks</h3>
            </div>
            <div className="space-y-4">
              {data.frameworks.map((item, i) => (
                // Changed hover:border-[#2776ea] to hover:border-primary-blue
                <div key={i} className="border-l-2 border-slate-200 pl-4 py-1 hover:border-primary-blue transition-colors">
                  <h4 className="text-submenu font-bold text-slate-900 mb-0.5">{item.name}</h4>
                  <p className="text-caption font-medium text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Intelligence (LLMs & MLOps) */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary-blue/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              {/* Changed bg-[#76ea27]/10 and text-[#76ea27] to brand-green */}
              <div className="h-10 w-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                <Bot size={20} />
              </div>
              <h3 className="text-h3 font-black text-slate-900">Intelligence</h3>
            </div>
            
            <div className="space-y-6">
               {/* LLMs */}
               <div>
                  <p className="text-caption font-black uppercase tracking-widest text-slate-400 mb-3">Models</p>
                  <ul className="space-y-2">
                    {data.llms.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-caption font-semibold text-slate-600">
                            {/* Changed text-[#76ea27] to text-brand-green */}
                            <Check size={14} className="text-brand-green mt-0.5 shrink-0" />
                            <span>{item.name}</span>
                        </li>
                    ))}
                  </ul>
               </div>

               {/* MLOps Tags */}
               <div>
                  <p className="text-caption font-black uppercase tracking-widest text-slate-400 mb-3">Operations</p>
                  <div className="flex flex-wrap gap-2">
                    {data.mlOps.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-white border border-slate-200 text-caption font-bold text-slate-500">
                        {tag}
                    </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* 3. Cloud Platforms */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary-blue/5 transition-all duration-300">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-slate-200/50 flex items-center justify-center text-slate-600">
                   <Cloud size={20} />
                </div>
                <h3 className="text-h3 font-black text-slate-900">Cloud & Infra</h3>
             </div>
             <div className="space-y-6">
               {data.cloudPlatforms.map((platform, i) => (
                 <div key={i}>
                   {/* Note: platform.color usually comes from data (e.g., text-orange-500). 
                       If you want to enforce primary-blue here, replace ${platform.color} with text-primary-blue */}
                   <h4 className={`text-caption font-black uppercase tracking-widest ${platform.color} mb-2`}>
                     {platform.provider}
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {platform.services.map((service, j) => (
                       <span key={j} className="text-caption font-bold text-slate-600 bg-white px-2 py-1 rounded border border-slate-100">
                          {service}
                       </span>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}