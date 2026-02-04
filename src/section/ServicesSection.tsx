"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import SectionHeader from "@/components/common/SectionHeader";

export default function ServicesSection() {
  return (
    <section className="bg-[#FAF7F6] py-[60px]  relative">
      <div className="container mx-auto px-[24px] lg:px-[40px]">
        <SectionHeader
          badge="Our Services"
          title="What We Build"
          description="Scroll down to explore our solutions. We stack value upon value to help you grow."
          centered={true}
          className="mb-12 lg:mb-20"
        />

        {/* STACKING CONTAINER */}
        <div className="flex flex-col relative">
          {servicesData.map((service, index) => {
            // RESPONSIVE OFFSETS
            // On mobile, cards stack tighter (10px). On desktop, we use 20px.
            const topOffsetMobile = 80 + index * 10;
            const topOffsetDesktop = 120 + index * 20;

            return (
              <div
                key={service.id}
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
                className="sticky w-full"
                style={{
                  // Dynamic calculation based on standard screen sizes
                  top: `var(--stack-top, ${topOffsetDesktop}px)`,
                  zIndex: index + 1,
                  paddingBottom: "40px", // Creates the "gap" seen when scrolling
                }}
              >
                {/* CSS Variable injected via style for cleaner responsive handling */}
                <style jsx>{`
                  div {
                    --stack-top: ${topOffsetMobile}px;
                  }
                  @media (min-width: 1024px) {
                    div {
                      --stack-top: ${topOffsetDesktop}px;
                    }
                  }
                `}</style>

                {/* THE CARD */}
                <div className="relative flex flex-col lg:flex-row bg-white rounded-[24px] lg:rounded-[32px] border border-[#e2e8f0]  overflow-hidden min-h-[450px] lg:h-[60vh] max-h-[650px] transition-all duration-500 ease-out hover:-translate-y-1">
                  {/* --- Left Content --- */}
                  <div className="flex-1 p-8 lg:p-[60px] flex flex-col justify-center">
                    <div className="w-fit px-3 py-1 bg-slate-50 rounded-full text-[#4F86E8] text-[11px] lg:text-[12px] font-bold uppercase tracking-wider mb-6">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1} •{" "}
                      {service.title}
                    </div>

                    <h3 className="text-2xl lg:text-[42px] lg:leading-[1.1] font-bold text-[#0F172A] mb-4 lg:mb-6">
                      {service.title}
                    </h3>

                    <div className="space-y-4 text-[#475569] text-base lg:text-[18px] leading-relaxed font-light mb-8 overflow-y-auto max-h-[150px] lg:max-h-[250px] pr-2 custom-scrollbar">
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
                        className="group inline-flex items-center gap-3 font-bold text-[#0F172A] transition-colors hover:text-[#4F86E8]"
                      >
                        <span className="border-b-2 border-[#e2e8f0] pb-1 transition-colors group-hover:border-[#4F86E8]">
                          Explore Service
                        </span>
                        <ArrowRight
                          size={18}
                          className="transform transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* --- Right Image --- */}
                  {/* THEME LOGIC */}
                  {(() => {
                    const themes = [
                      { bg: "bg-blue-50", border: "border-blue-100" },
                      { bg: "bg-emerald-50", border: "border-emerald-100" },
                      { bg: "bg-purple-50", border: "border-purple-100" },
                      { bg: "bg-orange-50", border: "border-orange-100" },
                      { bg: "bg-indigo-50", border: "border-indigo-100" },
                      { bg: "bg-teal-50", border: "border-teal-100" },
                      { bg: "bg-rose-50", border: "border-rose-100" },
                    ];
                    const theme = themes[index % themes.length];

                    return (
                      <>
                        {/* Desktop Image Section */}
                        <div
                          className={`hidden lg:flex flex-1 ${theme.bg} border-l ${theme.border} items-center justify-center p-12 relative overflow-hidden`}
                        >
                          <div className="relative w-full h-full transition-transform duration-700 hover:scale-105 flex items-center justify-center">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-contain drop-shadow-2xl"
                              priority={index < 2}
                            />
                          </div>
                        </div>

                        {/* Mobile Image Section */}
                        <div
                          className={`lg:hidden h-[180px] w-full relative ${theme.bg} border-t ${theme.border}`}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain p-6"
                          />
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-end relative z-[100]">
  <Link
    href="/services"
    className="group relative inline-flex items-center gap-4 px-1 py-1 pr-6 lg:pr-8 rounded-full  bg-white/50 backdrop-blur-sm transition-all duration-500 hover:border-[#4F86E8] hover:bg-white hover:shadow-xl hover:shadow-[#4F86E8]/10"
  >
    <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-500 group-hover:bg-[#4F86E8] group-hover:text-white">
      <ArrowRight 
        size={20} 
        className="transition-transform duration-500 group-hover:translate-x-0.5" 
      />
    </div>

    {/* --- Text --- */}
    <div className="flex flex-col">
      <span className="text-[14px] lg:text-[16px] font-bold text-slate-800 transition-colors duration-500 group-hover:text-[#4F86E8]">
        View All Services
      </span>
    </div>

    {/* --- Subtle External "Ring" on Hover --- */}
    <div className="absolute inset-0 -z-10 rounded-full scale-90 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
  </Link>
</div>

        {/* Final padding to ensure the last card can be fully scrolled past */}
        <div className="h-[10vh] lg:h-[15vh]" />
      </div>
    </section>
  );
}
