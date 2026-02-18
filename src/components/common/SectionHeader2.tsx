"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Sparkles, Star, TrendingUp, LucideIcon } from "lucide-react";

// --- Types ---
interface SectionHeaderProps {
  /** The small tag text (e.g., "Our Expertise") */
  badge?: string;
  /** Optional icon for the badge */
  badgeIcon?: "Zap" | "Sparkles" | "Star" | "TrendingUp";
  /** The main title */
  title: React.ReactNode;
  /** The supporting text */
  description?: string;
  /** Alignment mode */
  align?: "left" | "center" | "split"; // 'split' is for the Blog section layout
  /** Theme color for badge */
  color?: "blue" | "green" | "slate";
  /** Custom classes */
  className?: string;
}

// --- Icons Map ---
const IconMap: Record<string, LucideIcon> = {
  Zap, Sparkles, Star, TrendingUp
};

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  align = "left",
  color = "blue",
  className = "",
}: SectionHeaderProps) {
  
  // --- Animation ---
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // --- Styles ---
  const badgeStyles = {
    blue: "bg-gradient-to-r from-[#4888E8] to-[#4888E8] text-white shadow-blue-500/20",
    green: "bg-gradient-to-r from-[#07b022] to-[#07b022] text-white shadow-green-500/20",
    slate: "bg-slate-100 text-slate-500 border border-slate-200", 
  };

  // Layout Logic
  const isSplit = align === "split";
  const isCentered = align === "center";

  const Icon = badgeIcon ? IconMap[badgeIcon] : null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`
        relative z-10 
        ${isCentered ? "text-center mx-auto max-w-4xl items-center" : ""} 
        ${isSplit ? "flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8" : "flex flex-col gap-6"}
        ${className}
      `}
    >
      {/* --- TITLE GROUP --- */}
      <div className={isSplit ? "max-w-2xl" : "w-full"}>
        {badge && (
          <motion.div variants={itemVariants} className="mb-6">
            <span 
              className={`
                inline-flex items-center gap-2 px-5 py-1.5 rounded-full 
                text-[10px] font-black tracking-[0.2em] uppercase shadow-lg
                transform transition-transform hover:-translate-y-0.5
                ${badgeStyles[color]}
              `}
            >
              {Icon && <Icon size={12} className="fill-current" />}
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]"
        >
          {title}
        </motion.h2>
      </div>

      {/* --- DESCRIPTION GROUP --- */}
      {description && (
        <motion.div 
          variants={itemVariants}
          // Added 'w-full' to ensure centering logic works within flex column
          className={`${isSplit ? "max-w-md pb-2" : "max-w-2xl w-full"} ${isCentered ? "mx-auto" : ""}`}
        >
          <p className={`text-lg md:text-xl text-slate-500 leading-relaxed ${isCentered ? "mx-auto" : ""}`}>
            {description}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}