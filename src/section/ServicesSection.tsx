"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import SectionHeader from "@/section/components/home/SectionHeader";


export default function ServicesSection() {
  return (
    <section className="bg-[#FAF7F6] py-[100px] relative">
      <div className="container mx-auto px-[24px] lg:px-[40px]">
         <SectionHeader
                                  badge="Our Services"
                                  title="What We Build"
                                  description="Scroll down to explore our solutions. We stack value upon value to help you grow."
                                  centered={true}
                                  className="mb-20"
                                />
        {/* Section Header */}
        {/* <div className="mb-[80px] max-w-3xl">
          <h2 className="text-[36px] lg:text-[56px] font-extrabold text-[#0F172A] tracking-tight mb-[24px]">
            Our Services
          </h2>
          <p className="text-[18px] lg:text-[20px] text-[#475569] font-light leading-relaxed">
            Scroll down to explore our solutions. We stack value upon value to help you grow.
          </p>
        </div> */}

        {/* STACKING CONTAINER */}
        <div className="flex flex-col">
          {servicesData.map((service, index) => {
            
            // DYNAMIC TOP OFFSET
            // Starts at 20vh + index increments so cards stack nicely
            const topOffset = `calc(20vh + ${index * 15}px)`;

            // THEME CONFIGURATION
            const themes = [
              { bg: "bg-blue-50", border: "border-blue-100" },
              { bg: "bg-emerald-50", border: "border-emerald-100" },
              { bg: "bg-purple-50", border: "border-purple-100" },
              { bg: "bg-orange-50", border: "border-orange-100" },
              { bg: "bg-indigo-50", border: "border-indigo-100" },
              { bg: "bg-teal-50", border: "border-teal-100" },
            ];
            const theme = themes[index % themes.length];

            return (
              <div
                key={service.id}
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
                // Sticky positioning with bottom margin
                className="sticky mb-[80px] last:mb-0" 
                style={{
                  top: topOffset, 
                  zIndex: index + 1,
                }}
              >
                {/* THE CARD */}
                <div className="relative flex flex-col lg:flex-row bg-white rounded-[32px] border border-[#e2e8f0] shadow-xl shadow-[#0F172A]/5 overflow-hidden min-h-[500px] lg:h-[60vh] max-h-[650px] transition-transform duration-500 ease-out hover:-translate-y-[8px]">
                  
                  {/* --- Left Content --- */}
                  <div className="flex-1 p-[40px] lg:p-[60px] flex flex-col justify-center">
                    
                    {/* Badge */}
                    <div className={`w-fit px-[16px] py-[6px]  text-[#4F86E8] text-[12px] font-bold uppercase tracking-wider mb-[24px]`}>
                      0{index + 1}  {service.title}
                    </div>

                    {/* Heading */}
                    <h3 className="text-[32px] lg:text-[42px] font-bold text-[#0F172A] mb-[24px]">
                      {service.title}
                    </h3>

                    {/* Body Text with Custom Scrollbar class */}
                    <div className="space-y-[16px] text-[#475569] text-[18px] leading-relaxed font-light mb-[40px] overflow-y-auto max-h-[200px] pr-[10px] custom-scrollbar">
                      {service.description.split("\n").map((paragraph, i) => (
                        <p
                          key={i}
                          className={`${paragraph.trim() === "" ? "hidden" : "block"}`}
                        >
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={service.href}
                        className="group inline-flex items-center gap-[12px] font-bold text-[#0F172A] transition-colors hover:text-[#4F86E8]"
                      >
                        <span className="border-b-2 border-[#e2e8f0] pb-[2px] transition-colors group-hover:border-[#4F86E8]">
                          Explore Service
                        </span>
                        <ArrowRight 
                          size={18} 
                          className="transform transition-transform group-hover:translate-x-[4px]"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* --- Right Image --- */}
                  <div className={`hidden lg:flex flex-1 ${theme.bg} border-l ${theme.border} items-center justify-center p-[40px] relative overflow-hidden`}>
                     {/* Image Container */}
                     <div className="relative w-full h-full max-h-[400px] transition-transform duration-700 hover:scale-105 flex items-center justify-center">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain drop-shadow-lg"
                          priority={index < 2}
                        />
                     </div>
                  </div>

                  {/* Mobile Image */}
                  <div className={`lg:hidden h-[200px] w-full relative ${theme.bg} border-t ${theme.border}`}>
                     <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain p-[30px]"
                      />
                  </div>

                </div>
              </div>
            );
          })}
          
          {/* Spacer for bottom scroll */}
          <div className="h-[20vh]" />
        </div>
      </div>
    </section>
  );
}