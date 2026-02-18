'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, LayoutTemplate, Zap } from 'lucide-react';
import LeadModal from './LeadModal';
import SectionHeader from './common/SectionHeader2';


export default function FreeWebsiteSection() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Features List
  const features = [
    "Custom Design & Development",
    "SEO Optimized Architecture",
    "Mobile-First Responsive Layouts",
    "High-Performance Next.js"
  ];

  return (
    <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden font-sora">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4888E8]/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#07b022]/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- INLINE HEADER IMPLEMENTATION --- */}
   <SectionHeader 
  align="center"       // Changed from 'centered' to 'align="center"'
  badge="Free Services"
  
  color="blue"         // Changed from 'badgeColor' to 'color'
  title={
    <>
      Build Awesome <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">
        Free Websites
      </span>
    </>
  }
  description="Experience premium development at zero cost. We don't just build websites; we engineer digital foundations to kickstart your journey."
  className="mb-20"
/>

        {/* --- Main Feature Card --- */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                
                {/* --- Left Content --- */}
                <div className="p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                    
                    {/* Limited Offer Badge inside Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-fit px-4 py-2 rounded-full bg-[#4888E8]/10 text-[#4888E8] text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2 border border-[#4888E8]/20"
                    >
                        <Sparkles size={14} className="fill-[#4888E8]" />
                        Limited Time Offer
                    </motion.div>

                    {/* Heading Inside Card */}
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                        Launch Your Idea <br />
                        <span className="text-slate-400">Without The Cost</span>
                    </h3>

                    {/* Body Text */}
                    <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                        Whether you need a new website, App, or IoT dashboard, the key to success starts with a professional digital presence.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-5 mb-12">
                        {features.map((item, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-1 rounded-full bg-[#07b022]/10 text-[#07b022] group-hover:bg-[#07b022] group-hover:text-white transition-colors duration-300">
                                    <CheckCircle2 size={18} strokeWidth={3} />
                                </div>
                                <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-sm tracking-wide overflow-hidden transition-all hover:shadow-xl hover:shadow-[#4888E8]/20 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4888E8] to-[#07b022] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 flex items-center gap-2">
                                <span>Get Started Free</span>
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </button>

                        <Link
                            href="/services"
                            className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm tracking-wide transition-all hover:border-[#4888E8] hover:text-[#4888E8] hover:bg-slate-50 active:scale-95 flex items-center justify-center"
                        >
                            View Services
                        </Link>
                    </div>
                </div>

                {/* --- Right Image Area --- */}
                <div className="relative order-1 lg:order-2 bg-slate-50 flex items-center justify-center p-8 lg:p-0 overflow-hidden border-b lg:border-b-0 lg:border-l border-slate-100">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
                    
                    {/* Glowing Orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-[#4888E8] to-[#07b022] rounded-full blur-[120px] opacity-20 animate-pulse" />

                    {/* Image Container */}
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-[500px] lg:max-w-full h-[300px] lg:h-full flex items-center justify-center"
                    >
                         {/* Using a placeholder visual that represents 'Web Development' */}
                        <div className="relative w-[90%] h-[90%]">
                             <Image
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                alt="Dashboard Preview"
                                fill
                                className="object-contain lg:object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                        
                        {/* Floating Status Badge */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4 z-20"
                        >
                            <div className="p-3 bg-[#07b022]/10 rounded-xl text-[#07b022]">
                                <LayoutTemplate size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Plan Status</p>
                                <p className="text-sm font-bold text-slate-900">100% Free Tier</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </motion.div>

      </div>

      {/* --- Modal Integration --- */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Claim Your Free Website"
        subtitle="Let's build something awesome together."
      />
    </section>
  );
}