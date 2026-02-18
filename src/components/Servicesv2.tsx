"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader2";

import {
  Smartphone,
  Globe,
  Server,
  Megaphone,
  Search,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- DATA ---
const servicesData = [
  {
    id: 1,
    title: "App Development",
    color: "#4888E8", // Blue
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
    href: "/services/app-development",
    icon: Smartphone,
    description: `We build apps with great UI/UX Design and cross platform support in mind. Our team comprises a bunch of knowledgeable iOS App and Android App Developers having a good skill set in building mobile applications.`,
  },
  {
    id: 2,
    title: "Web Development",
    color: "#07b022", // Green
    className: "md:col-span-1 md:row-span-1",
    href: "/services/web-development",
    icon: Globe,
    description: `Web presence is most important for the success of either a big or small business. Website takes your business to the world.`,
  },
  {
    id: 3,
    title: "Domain and Hosting",
    color: "#4888E8", // Blue
    className: "md:col-span-1 md:row-span-1",
    href: "/services/domain-hosting",
    icon: Server,
    description: `With the knowledge of working experience in many of the web servers including Amazon AWS, cost effective and speedy web hosting solutions.`,
  },
  {
    id: 4,
    title: "Digital Marketing",
    color: "#07b022", // Green
    className: "md:col-span-1 md:row-span-1",
    href: "/services/digital-marketing",
    icon: Megaphone,
    description: `Our Digital marketing service includes consulting and managing a variety of online marketing tactics such as Smart ads, Search ads, and PPC.`,
  },
  {
    id: 5,
    title: "SEO",
    color: "#4888E8", // Blue
    className: "md:col-span-1 md:row-span-1",
    href: "/services/seo",
    icon: Search,
    description: `Do you wish to see your website at the top of major search engines? We can do it for you. We do keyword research to improve rankings.`,
  },
  {
    id: 6,
    title: "IoT Solutions",
    color: "#07b022", // Green
    className: "md:col-span-2 md:row-span-1",
    href: "/services/iot-solutions",
    icon: Cpu,
    description: `Terms like Internet of things, IoT devices, Industry IoT (IIoT), Industry 4.0, or Smart Factory are becoming more familiar now.`,
  },
  {
    id: 7,
    title: "Data Analytics",
    color: "#4888E8", // Blue
    className: "md:col-span-2 md:row-span-1",
    href: "/services/data-analytics",
    icon: Cpu,
    description: `Data is your organization's most valuable asset. We help you transform it into actionable insights and remove manual reporting bottlenecks.`,
  },
];

export default function ServicesLight() {
  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden py-32">
      <div className="container mx-auto px-6 relative z-10">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4888E8]/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-0 left-20 w-[500px] h-[500px] bg-[#07b022]/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

        {/* Header */}

        <SectionHeader
          align="left" // Explicitly set to left
          badge="Our Expertise"
          color="blue" // Changed from 'badgeColor' to 'color'
          title={
            <>
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">
                TRANSFORMATION
              </span>
            </>
          }
          description="We combine strategic design, cutting-edge technology, and data-driven insights to build the digital future of your business."
        />

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(280px,auto)] gap-6 mt-7">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} data={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  data,
  index,
}: {
  data: (typeof servicesData)[0];
  index: number;
}) {
  return (
    <Link href={data.href} className={cn("block h-full", data.className)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        // OPTIMIZED HOVER: Removed spring, used easeOut for instant response
        whileHover={{
          y: -5,
          scale: 1.01,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className={cn(
          "group relative h-full p-8 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm",
          // CSS transitions for colors/shadows ONLY (separated from layout movement)
          "hover:shadow-2xl transition-shadow duration-300",
        )}
        style={{
          ["--hover-color" as any]: data.color,
        }}
      >
        {/* --- Image Background --- */}
        {data.image && (
          <>
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <motion.img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
                // Image zoom synchronized with card lift
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            {/* Gradient: Transparent top -> White bottom */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          </>
        )}

        {/* Dynamic Hover Border - Fast fade in */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--hover-color)] rounded-3xl transition-colors duration-300 pointer-events-none z-20" />

        {/* Hover Background Tint (only if no image) */}
        {!data.image && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-[var(--hover-color)]" />
        )}

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <data.icon size={28} strokeWidth={1.5} color={data.color} />
            </div>

            <div className="p-2 rounded-full bg-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
              <ArrowUpRight className="text-slate-900" size={18} />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[var(--hover-color)] transition-colors duration-300">
              {data.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-slate-700 transition-colors duration-300">
              {data.description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
