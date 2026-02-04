"use client";

import { termsData, lastUpdated } from "@/data/termsData"; // Adjust path as needed
import { Clock, ShieldCheck, ArrowUp } from "lucide-react";
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
    <section className="bg-[#FAF7F6] font-sora min-h-screen pt-[140px] pb-[100px] relative overflow-hidden  lg:px-20">
      
      {/* --- Background Theme --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-20 relative z-10 ">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  text-[#2776ea] text-xs font-bold uppercase tracking-wide mb-4">
            <ShieldCheck size={14} />
            Legal
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6">
            Terms and Conditions
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium">
            <Clock size={16} />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>

        {/* --- Content Card --- */}
        <div className="bg-white rounded-[32px] shadow-xl shadow-[#0F172A]/5 border border-[#e2e8f0] p-8 md:p-12 lg:p-16">
          
          <div className="space-y-12">
            {termsData.map((section, index) => (
              <div key={index} className="scroll-mt-28" id={`section-${index}`}>
                
                {/* Section Title */}
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6 pb-4 border-b border-slate-100">
                  {section.title}
                </h2>

                {/* Section Content */}
                <div className="space-y-4 text-[#475569] leading-relaxed">
                  {section.content.map((paragraph, pIndex) => {
                    
                    // Logic to check if this is a sub-point (e.g. "5.1." or "(i)")
                    const isListItem = paragraph.match(/^\d+\.\d+\./) || paragraph.match(/^\(i+\)/);
                    const isSubHeader = paragraph === "Copyright Policy" || paragraph === "Additionally, you agree not to:";

                    if (isSubHeader) {
                      return (
                        <h3 key={pIndex} className="text-lg font-bold text-[#0F172A] mt-6 mb-2">
                          {paragraph}
                        </h3>
                      );
                    }

                    return (
                      <p 
                        key={pIndex} 
                        className={`
                          ${isListItem ? "pl-4 lg:pl-8 font-medium text-slate-600" : ""}
                          ${paragraph.includes("kontakt@thingsatweb.se") ? "font-bold text-[#2776ea]" : ""}
                        `}
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Divider */}
          <div className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Thingsatweb Sweden AB. All rights reserved.
            </p>
          </div>
        </div>

      </div>

      {/* --- Scroll to Top Button --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-[#0F172A] text-white rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-[#2776ea] hover:-translate-y-1 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>

    </section>
  );
}