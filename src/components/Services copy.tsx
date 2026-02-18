'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Cpu, Shield, Zap, Search, Layout, ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Utility for cleaner classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Data with Grid Spans for the "Clustered" Look
const services = [
    {
        title: 'Web Engineering',
        desc: 'High-performance web applications using React, Next.js, and Three.js.',
        icon: Globe,
        span: 'md:col-span-2 md:row-span-2', // Large Feature Item
        gradient: 'from-blue-500/20 to-cyan-500/20',
        border: 'group-hover:border-blue-500/50',
    },
    {
        title: 'Mobile Solutions',
        desc: 'Native and cross-platform apps for seamless experiences.',
        icon: Cpu,
        span: 'md:col-span-1 md:row-span-1',
        gradient: 'from-emerald-500/20 to-green-500/20',
        border: 'group-hover:border-emerald-500/50',
    },
    {
        title: 'Cybersecurity',
        desc: 'Enterprise-grade protocols protecting digital assets.',
        icon: Shield,
        span: 'md:col-span-1 md:row-span-1',
        gradient: 'from-purple-500/20 to-violet-500/20',
        border: 'group-hover:border-purple-500/50',
    },
    {
        title: 'Cloud Architecture',
        desc: 'Scalable infrastructure design and migration services.',
        icon: Zap,
        span: 'md:col-span-1 md:row-span-1',
        gradient: 'from-amber-500/20 to-orange-500/20',
        border: 'group-hover:border-amber-500/50',
    },
    {
        title: 'SEO & Analytics',
        desc: 'Data-driven visibility strategies.',
        icon: Search,
        span: 'md:col-span-1 md:row-span-1',
        gradient: 'from-rose-500/20 to-pink-500/20',
        border: 'group-hover:border-rose-500/50',
    },
    {
        title: 'UI/UX Design Systems',
        desc: 'Award-winning aesthetics married with intuitive functionality.',
        icon: Layout,
        span: 'md:col-span-2 md:row-span-1', // Wide Footer Item
        gradient: 'from-indigo-500/20 to-blue-500/20',
        border: 'group-hover:border-indigo-500/50',
    },
];

export default function ServicesClustered() {
    const containerRef = useRef<HTMLDivElement>(null);

    // GSAP: Handle the high-performance entrance animation
    useGSAP(() => {
        const cards = gsap.utils.toArray('.service-card');
        
        gsap.fromTo(cards, 
            { y: 100, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%', // Starts when top of section hits 75% of viewport
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-32 bg-[#050505] overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <div className="mb-20 max-w-3xl">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Service <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Architecture
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-neutral-400 leading-relaxed max-w-xl"
                    >
                        We architect the digital backbone of modern enterprises. 
                        Precision-driven engineering meets future-proof design strategy.
                    </motion.p>
                </div>

                {/* The Modern Clustered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4 md:gap-6">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} data={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ data }: { data: typeof services[0] }) {
    return (
        <motion.div
            // Framer Motion handles the hover physics
            whileHover={{ y: -5 }}
            className={cn(
                "service-card group relative p-8 rounded-3xl overflow-hidden border border-white/5 bg-neutral-900/50 backdrop-blur-sm transition-colors duration-500",
                data.span,
                data.border
            )}
        >
            {/* Hover Gradient Bloom */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br",
                data.gradient
            )} />

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-2xl text-white group-hover:bg-white/10 transition-colors">
                        <data.icon size={28} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" />
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                        {data.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                        {data.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}