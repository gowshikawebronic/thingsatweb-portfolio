"use client";

import { privacyData, lastUpdated, ContentBlock } from "@/data/privacyData";
import { Lock, ArrowUp, CalendarDays, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function PrivacySection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // --- Helper to render specific content blocks ---
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="text-slate-500 leading-relaxed mb-4 font-medium">
            {block.text}
          </p>
        );

      case "list":
        return (
          <ul key={index} className="space-y-3 mb-6 pl-2">
            {block.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-500 font-medium">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#4888E8] mt-2.5"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );

      case "table":
        return (
          <div key={index} className="overflow-hidden mb-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    {block.tableHeaders?.map((header, i) => (
                      <th key={i} className="p-5 text-sm font-bold text-[#0F172A] uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {block.tableRows?.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-[#4888E8]/5 transition-colors">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-5 text-sm text-slate-600 font-medium align-top leading-relaxed">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "subsection":
        return (
          <div key={index} className="mt-10 mb-6 pl-4 border-l-4 border-[#07b022]">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">
              {block.text}
            </h3>
            {/* Recursively render blocks inside the subsection */}
            {block.subBlocks?.map((subBlock, i) => renderBlock(subBlock, i))}
          </div>
        );

      case "contact-box":
        return (
          <div key={index} className="bg-[#4888E8]/5 border border-[#4888E8]/20 rounded-2xl p-8 mb-8 mt-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4888E8]/10 rounded-bl-full pointer-events-none" />
            
            {block.text && (
              <h4 className="font-bold text-[#4888E8] mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={16} />
                {block.text}
              </h4>
            )}
            <ul className="space-y-3">
              {block.items?.map((item, i) => (
                <li key={i} className="text-base font-bold text-[#0F172A] flex flex-col sm:flex-row sm:gap-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-[#FAF7F6] font-sora min-h-screen pt-[140px] pb-[100px] relative overflow-hidden">
      
    
      <div className="container mx-auto px-5 lg:px-20 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#4888E8]/20 shadow-sm mb-6">
            <Lock size={14} className="text-[#4888E8]" />
            <span className="text-xs font-bold tracking-wider text-[#0F172A] uppercase">Data Protection</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6 tracking-tight">
            Privacy {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">
              Policy
            </span>
          </h1>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#07b022]/5 rounded-xl border border-[#07b022]/10 text-[#07b022] text-sm font-bold">
            <CalendarDays size={16} />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>

        {/* --- CONTENT CARD --- */}
        <div className="bg-white rounded-[32px] shadow-2xl shadow-[#0F172A]/5 border border-slate-100 border-t-[8px] border-t-[#07b022] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          
          {/* Subtle Decor inside card */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#07b022]/5 rounded-br-full pointer-events-none" />

          <div className="space-y-12 relative z-10">
            {privacyData.map((section, index) => (
              <div key={index} id={`section-${index}`} className="scroll-mt-32 group">
                
                {/* Main Section Title */}
                <div className="flex items-start gap-4 mb-8">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FAF7F6] flex items-center justify-center text-[#07b022] font-black border border-slate-100 group-hover:bg-[#07b022] group-hover:text-white transition-colors duration-300">
                        {index + 1}
                    </div>
                    <h2 className="text-2xl font-bold text-[#0F172A] pt-1 border-b border-transparent group-hover:border-slate-100 pb-4 w-full transition-all">
                        {section.title}
                    </h2>
                </div>

                {/* Render Content Blocks */}
                <div className="pl-0 lg:pl-[3.5rem]">
                  {section.content.map((block, blockIndex) => 
                    renderBlock(block, blockIndex)
                  )}
                </div>
                
                {/* Divider */}
                {index !== privacyData.length - 1 && (
                    <div className="h-px bg-slate-100 w-full mt-12 lg:ml-[3.5rem]" />
                )}
              </div>
            ))}
          </div>

          {/* Footer of the Policy */}
          <div className="mt-20 pt-10 border-t border-slate-100 text-center">
            <p className="font-bold text-[#0F172A] text-lg mb-2 tracking-wide">END OF PRIVACY POLICY</p>
            <p className="text-slate-500 mb-8 font-medium">
              Thank you for trusting Thingsatweb Sweden AB with your data.
            </p>
            <a 
                href="mailto:dpo@thingsatweb.se"
                className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#4888E8] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-xl shadow-slate-900/10 hover:-translate-y-1"
            >
              Questions? Contact dpo@thingsatweb.se
            </a>
          </div>
        </div>

      </div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-[#0F172A] text-white rounded-full shadow-xl shadow-[#4888E8]/20 transition-all duration-300 z-50 hover:bg-[#07b022] hover:-translate-y-1 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp size={24} />
      </button>

    </section>
  );
}