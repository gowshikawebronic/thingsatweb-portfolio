"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
// 1. Import 'Variants' type to fix the error
import { motion, Variants } from "framer-motion"; 
import SectionHeader from "@/components/common/SectionHeader";
import { ServiceCardData } from "@/components/services/PageServiceCard";


interface ServiceGridProps {
  services: ServiceCardData[];
}

// --- ANIMATION VARIANTS ---
// 2. Explicitly type these objects as 'Variants'
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This creates the wave effect
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  },
};

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="relative py-24 bg-[#FAF7F6] font-sora overflow-hidden">
      
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionHeader 
            badge="Specialized Capabilities"
            title={
                <>
                Extended <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">Service Suite</span>
                </>
            }
            description="Beyond our core platforms, we offer specialized engineering and consulting services tailored to enterprise needs"
            align="left"
            color="blue"
            className="mb-0" 
          />
        </div>

        {/* The Grid */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
                <Link
                  href={`/service?category=${service.id}`}
                  className="group relative h-full bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F172A]/5 hover:border-[#4888E8]/30"
                >
                
                {/* 1. Icon & Action */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="h-16 w-16 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-center text-[#4888E8] group-hover:bg-gradient-to-br group-hover:from-[#4888E8] group-hover:to-[#07b022] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#4888E8]/20 transition-all duration-500">
                        {/* Mask Image for Icon */}
                        <div
                            className="h-8 w-8 bg-current [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]"
                            style={{
                              maskImage: `url('${service.image.replaceAll(" ", "%20")}')`,
                              WebkitMaskImage: `url('${service.image.replaceAll(" ", "%20")}')`,
                            }}
                        />
                    </div>

                    <div className="h-10 w-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-[#07b022] group-hover:text-[#07b022] group-hover:bg-[#07b022]/5 group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                {/* 2. Content */}
                <div className="relative z-10 flex-grow mb-8">
                    <h3 className="text-2xl font-black text-[#0F172A] mb-4 group-hover:text-[#4888E8] transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-base font-medium text-slate-500 leading-relaxed line-clamp-3 group-hover:text-slate-600 transition-colors">
                        {service.description}
                    </p>
                </div>

                {/* 3. Tech Stack */}
                <div className="relative z-10 mt-auto pt-6 border-t border-slate-50">
                    <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:bg-white group-hover:text-[#4888E8] group-hover:border-[#4888E8]/20 transition-all duration-300"
                        >
                        {tech.name}
                        </span>
                    ))}
                    {service.technologies.length > 3 && (
                        <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-[10px] font-black text-slate-400 border border-transparent">
                        +{service.technologies.length - 3}
                        </span>
                    )}
                    </div>
                </div>

                {/* 4. Decorative Sparkle */}
                <div className="absolute -bottom-10 -right-10 text-[#07b022]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 pointer-events-none rotate-12">
                    <Sparkles size={200} strokeWidth={0.5} />
                </div>
                
                {/* 5. Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#4888E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}