"use client";

import { termsData, lastUpdated } from "@/data/termsData"; // Adjust path as needed
import { Clock, ShieldCheck, ArrowUp, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export default function TermsSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll to Top Button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-[#FAF7F6] font-sora min-h-screen pt-[140px] pb-[100px] relative overflow-hidden">
      
      {/* --- BACKGROUND THEME --- */}
      {/* 1. Subtle Grid */}
      
      <div className="container mx-auto px-5 lg:px-20 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#4888E8]/20 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#4888E8]"></span>
            <span className="text-xs font-bold tracking-wider text-[#0F172A] uppercase">Legal Information</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6 tracking-tight">
            Terms & {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">
              Conditions
            </span>
          </h1>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4888E8]/5 rounded-xl border border-[#4888E8]/10 text-[#4888E8] text-sm font-bold">
            <Clock size={16} />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>

        {/* --- CONTENT CARD --- */}
        <div className="bg-white rounded-[32px] shadow-2xl shadow-[#0F172A]/5 border border-slate-100 border-t-[8px] border-t-[#4888E8] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          
          {/* Subtle Decor inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4888E8]/5 rounded-bl-full pointer-events-none" />

          <div className="space-y-12 relative z-10">
            {termsData.map((section, index) => (
              <div key={index} className="scroll-mt-32 group" id={`section-${index}`}>
                
                {/* Section Title */}
                <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FAF7F6] flex items-center justify-center text-[#4888E8] font-black border border-slate-100 group-hover:bg-[#4888E8] group-hover:text-white transition-colors duration-300">
                        {index + 1}
                    </div>
                    <h2 className="text-2xl font-bold text-[#0F172A] pt-1">
                        {section.title}
                    </h2>
                </div>

                {/* Section Content */}
                <div className="pl-[3.5rem] space-y-4 text-slate-500 leading-relaxed font-medium">
                  {section.content.map((paragraph, pIndex) => {
                    
                    // Logic to check if this is a sub-point
                    const isListItem = paragraph.match(/^\d+\.\d+\./) || paragraph.match(/^\(i+\)/);
                    const isSubHeader = paragraph === "Copyright Policy" || paragraph === "Additionally, you agree not to:";

                    if (isSubHeader) {
                      return (
                        <h3 key={pIndex} className="text-lg font-bold text-[#0F172A] mt-8 mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#07b022]"></span>
                          {paragraph}
                        </h3>
                      );
                    }

                    return (
                      <p 
                        key={pIndex} 
                        className={`
                          ${isListItem ? "pl-4 border-l-2 border-slate-100" : ""}
                          ${paragraph.includes("kontakt@thingsatweb.se") ? "text-[#4888E8] font-bold" : ""}
                        `}
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
                
                {/* Divider between sections */}
                {index !== termsData.length - 1 && (
                    <div className="h-px bg-slate-100 w-full mt-12 ml-[3.5rem]" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom Divider */}
          <div className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm font-bold text-slate-400">
              © {new Date().getFullYear()} Thingsatweb Sweden AB. All rights reserved.
            </p>
          </div>
        </div>

      </div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-[#0F172A] text-white rounded-full shadow-xl shadow-[#4888E8]/20 transition-all duration-300 z-50 hover:bg-[#4888E8] hover:-translate-y-1 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp size={24} />
      </button>

    </section>
  );
}