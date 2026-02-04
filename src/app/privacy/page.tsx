"use client";

import { privacyData, lastUpdated, ContentBlock } from "@/data/privacyData";
import { Lock, ArrowUp, CalendarDays } from "lucide-react";
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
          <p key={index} className="text-[#475569] leading-relaxed mb-4">
            {block.text}
          </p>
        );

      case "list":
        return (
          <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-[#475569]">
            {block.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case "table":
        return (
          <div key={index} className="overflow-x-auto mb-8 rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-slate-50">
                <tr>
                  {block.tableHeaders?.map((header, i) => (
                    <th key={i} className="p-4 text-sm font-bold text-[#0F172A] border-b border-slate-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.tableRows?.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-4 text-sm text-[#475569] font-medium align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "subsection":
        return (
          <div key={index} className="mt-8 mb-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">
              {block.text}
            </h3>
            {/* Recursively render blocks inside the subsection */}
            {block.subBlocks?.map((subBlock, i) => renderBlock(subBlock, i))}
          </div>
        );

      case "contact-box":
        return (
          <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            {block.text && (
              <h4 className="font-bold text-[#0F172A] mb-3 text-sm uppercase tracking-wide">
                {block.text}
              </h4>
            )}
            <ul className="space-y-2">
              {block.items?.map((item, i) => (
                <li key={i} className="text-sm font-medium text-[#475569]">
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
      
      {/* --- Background Theme --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-20 relative z-10 ">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  text-[#2776ea] text-xs font-bold uppercase tracking-wide mb-4">
            <Lock size={14} />
            Data Protection
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium">
            <CalendarDays size={16} />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>

        {/* --- Content Card --- */}
        <div className="bg-white rounded-[32px] shadow-xl shadow-[#0F172A]/5 border border-[#e2e8f0] p-8 md:p-12 lg:p-16">
          
          <div className="space-y-12">
            {privacyData.map((section, index) => (
              <div key={index} id={`section-${index}`} className="scroll-mt-28">
                
                {/* Main Section Title */}
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6 pb-4 border-b border-slate-100">
                  {section.title}
                </h2>

                {/* Render Content Blocks */}
                <div className="text-[#475569]">
                  {section.content.map((block, blockIndex) => 
                    renderBlock(block, blockIndex)
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer of the Policy */}
          <div className="mt-16 pt-10 border-t border-slate-100 text-center">
            <p className="font-bold text-[#0F172A] text-lg mb-2">END OF PRIVACY POLICY</p>
            <p className="text-slate-500 mb-6">
              Thank you for trusting Thingsatweb Sweden AB with your data.
            </p>
            <div className="inline-block bg-[#0F172A] text-white px-6 py-3 rounded-full font-bold text-sm">
              Questions? Contact dpo@thingsatweb.se
            </div>
          </div>
        </div>

      </div>

      {/* --- Scroll to Top Button --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-[#2776ea] text-white rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-[#0F172A] hover:-translate-y-1 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>

    </section>
  );
}