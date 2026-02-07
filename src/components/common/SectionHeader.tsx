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
  
  
  const badgeClass = isWhite
    ? "text-primary-blue"
    : "text-primary-blue";

  // Size Logic
  const titleSize = size === "large" 
    ? "text-4xl md:text-6xl lg:text-7xl" 
    : "text-3xl md:text-4xl lg:text-5xl";

  return (
    <div 
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {/* --- NEW BADGE DESIGN --- */}
      {badge && (
        <span 
          className={`inline-block px-4 py-1.5 mb-6 rounded-lg text-xs font-extrabold uppercase tracking-widest leading-none transition-colors duration-300 cursor-default select-none ${badgeClass}`}
        >
          {badge}
        </span>
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