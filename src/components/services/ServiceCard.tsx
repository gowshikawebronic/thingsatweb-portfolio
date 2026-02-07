"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
  className?: string;
};

export default function ServiceCard({
  id,
  title,
  description,
  image,
  path,
  className = "",
}: ServiceCardProps) {
  return (
    <Link
      href={path}
      className={`group relative flex flex-col justify-end font-sora ${className}`}
    >
      {/* --- 1. THE FLOATING IMAGE --- */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="relative size-48 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-6 group-hover:scale-105 group-hover:rotate-2">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>

      {/* --- 2. THE PEDESTAL --- */}
      {/* Changed shadow-blue-900 to shadow-primary-blue and border-blue-100 to border-primary-blue/20 */}
      <div className="relative h-[80%] w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-blue group-hover:border-primary-blue overflow-hidden">
        
        {/* Fake Shadow */}
        {/* Changed bg-blue-900/5 to bg-primary-blue/5 */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-24 h-4 bg-primary-blue/ blur-xl rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-primary-blue/10 group-hover:blur-2xl" />

        {/* Content Section */}
        <div className="pt-15 relative z-10 text-center flex-1 flex flex-col">
          {/* Changed group-hover:text-[#2776ea] to group-hover:text-primary-blue */}
          <h3 className="text-h3 font-bold text-slate-900 mb-3 min-h-[3.5rem] flex items-center justify-center group-hover:text-primary-blue transition-colors leading-tight">
            {title}
          </h3>

          <p className="text-submenu text-slate-500 leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>
        </div>

        {/* --- FIXED BOTTOM ACTION BAR --- */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 group-hover:border-slate-200/60 transition-colors">
          <span className="text-caption font-bold uppercase tracking-widest text-slate-400 leading-none group-hover:text-slate-900 transition-colors">
            Explore
          </span>

          {/* Changed group-hover:bg-[#2776ea] to group-hover:bg-primary-blue */}
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-all duration-500 group-hover:bg-primary-blue group-hover:text-white group-hover:rotate-45 shadow-sm">
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        {/* Changed from-blue-50/30 to from-primary-blue/5 (to maintain lightness) */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/ to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </Link>
  );
}