"use client";

import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  isWhite?: boolean;
  className?: string;
  size?: "default" | "large";
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = false,
  isWhite = false,
  className = "",
  size = "default",
}: SectionHeaderProps) {
  
  // --- Styling Logic ---
  const titleColor = isWhite ? "text-white" : "text-slate-900";
  const highlightColor = isWhite ? "text-[#76ea27]" : "text-[#2776ea]";
  const descColor = isWhite ? "text-blue-50/80" : "text-slate-500";
  
  // Badge Logic: Clean, High-Contrast Tech Look
  const badgeContainerClass = isWhite
    ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
    : "bg-slate-50 border-slate-200 text-slate-700 hover:border-[#2776ea]/30 hover:bg-white";
    
  const badgeAccentClass = isWhite ? "bg-[#76ea27]" : "bg-[#2776ea]";

  // Size Logic
  const titleSize = size === "large" 
    ? "text-4xl md:text-6xl lg:text-7xl" 
    : "text-3xl md:text-4xl lg:text-5xl";

  return (
    <div 
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {/* --- REDESIGNED BADGE --- */}
      {badge && (
        <div 
          className={`inline-flex items-center gap-3 px-4 py-2  mb-6 transition-all duration-300 cursor-default select-none group ${badgeContainerClass}`}
        >
          {/* Tech Accent: A Precision Diamond instead of a blurry dot */}
          <div className={`w-1.5 h-1.5 rotate-45 rounded-[1px] ${badgeAccentClass} group-hover:scale-125 transition-transform duration-300`} />
          
          <span className="text-[10px] font-black uppercase tracking-[0.25em] leading-none">
            {badge}
          </span>
        </div>
      )}

      {/* 2. TITLE */}
      <h2 className={`${titleSize} font-black tracking-tight leading-[1.1] mb-6 ${titleColor}`}>
        {title}
        {highlight && (
          <>
            {" "}
            <span className={`${highlightColor} whitespace-nowrap`}>
              {highlight}
            </span>
          </>
        )}
      </h2>

      {/* 3. DECORATIVE LINE */}
      {centered && (
        <div className={`h-1.5 w-24 rounded-full mb-8 ${isWhite ? "bg-[#76ea27]" : "bg-gradient-to-r from-[#2776ea] to-[#76ea27]"}`} />
      )}

      {/* 4. DESCRIPTION */}
      {description && (
        <p className={`text-lg md:text-xl font-medium leading-relaxed max-w-2xl ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}