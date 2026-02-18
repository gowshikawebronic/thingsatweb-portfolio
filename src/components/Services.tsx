"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import SectionHeader from "./common/SectionHeader2";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- DATA ---
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Erik Svensson",
    role: "CTO, Nordic Tech Solutions",
    content:
      "ThingsAtWeb transformed our manufacturing process with their Digital Twin technology. The real-time insights we gained were immediate and actionable.",
    rating: 5,
    column: 1,
  },
  {
    id: 2,
    name: "Anna Lindberg",
    role: "Director, GreenLeaf Logistics",
    content:
      "The production monitoring dashboard gives us visibility we never thought possible. They didn't just build a tool; they engineered a scalable platform.",
    rating: 5,
    column: 2,
  },
  {
    id: 3,
    name: "Johan Berg",
    role: "Product Manager, Future Systems",
    content:
      "Professional, technical, and highly efficient. Their approach to IoT solutions helped us reduce downtime by 40% in the first quarter alone.",
    rating: 5,
    column: 3,
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "VP of Engineering, CloudScale",
    content:
      "The architecture they designed allows us to handle millions of requests without a hiccup. Truly a zero-trust, future-proof solution.",
    rating: 5,
    column: 1,
  },
  {
    id: 5,
    name: "Marcus Thorne",
    role: "Head of Innovation, TechFlow",
    content:
      "We needed a partner who understood both hardware and software. This team bridged that gap perfectly with their mobile solutions.",
    rating: 4,
    column: 2,
  },
  {
    id: 6,
    name: "Elara Vane",
    role: "Operations Lead, Apex Dynamics",
    content:
      "Their SEO and Analytics overhaul didn't just improve traffic, it improved lead quality. We are seeing a 300% ROI in less than six months.",
    rating: 5,
    column: 3,
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-slate-50 overflow-hidden min-h-[120vh]"
    >
      {/* Organic Background Blobs */}
      <div
        className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
        {/* Fixed: Added 'relative z-20' so text is ON TOP of cards */}
        {/* Fixed: Increased margin to 'mb-40' to give the middle column room to breathe */}
        <SectionHeader
          align="center" // Changed from 'centered'
          badge="Client Success"
          color="blue" // Changed from 'badgeColor'
          title={
            <>
              Trusted by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                Industry Leaders
              </span>
            </>
          }
          description="We don't just deliver code; we deliver value. Hear from the partners who trust us with their most critical digital infrastructure."
          className="mb-40"
        />

        {/* --- GRID --- */}
        {/* Ensure grid has z-10 so it sits below the header if they ever touch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {/* Column 1 */}
          <motion.div
            style={{ y: y1 }}
            className="flex flex-col gap-8 md:gap-12 md:mt-0"
          >
            {TESTIMONIALS_DATA.filter((t) => t.column === 1).map((item, i) => (
              <TestimonialCard key={i} item={item} index={i} />
            ))}
          </motion.div>

          {/* Column 2 (Offset start - moves faster) */}
          {/* This column is pulled up (-mt-20), hence why we needed more margin in the header */}
          <motion.div
            style={{ y: y2 }}
            className="flex flex-col gap-8 md:gap-12 md:-mt-20"
          >
            {TESTIMONIALS_DATA.filter((t) => t.column === 2).map((item, i) => (
              <TestimonialCard key={i} item={item} index={i} />
            ))}
          </motion.div>

          {/* Column 3 (Different Offset - moves slower) */}
          <motion.div
            style={{ y: y3 }}
            className="flex flex-col gap-8 md:gap-12 md:mt-24"
          >
            {TESTIMONIALS_DATA.filter((t) => t.column === 3).map((item, i) => (
              <TestimonialCard key={i} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  index,
}: {
  item: (typeof TESTIMONIALS_DATA)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-default flex flex-col h-full border border-slate-100"
    >
      {/* Header: User Icon & Quote Icon */}
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
          {item.name.charAt(0)}
        </div>

        <div className="text-slate-200 group-hover:text-blue-500/20 transition-colors duration-300">
          <Quote size={40} fill="currentColor" strokeWidth={0} />
        </div>
      </div>

      {/* Content Body */}
      <div className="mb-8">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={cn(
                "transition-colors duration-300",
                i < item.rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-slate-200 fill-slate-200",
              )}
            />
          ))}
        </div>
        <p className="text-slate-600 leading-relaxed font-medium text-lg">
          "{item.content}"
        </p>
      </div>

      {/* Footer: Name & Verified Badge */}
      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-slate-900 text-lg leading-none mb-1 group-hover:text-blue-600 transition-colors">
            {item.name}
          </h4>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {item.role}
          </p>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-emerald-500">
          <CheckCircle2 size={16} />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Verified
          </span>
        </div>
      </div>
    </motion.div>
  );
}
