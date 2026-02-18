'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const products = [
    {
        id: '01',
        name: 'Nexus Analytics',
        category: 'Data Intelligence',
        description: 'Enterprise-grade visualization platform for real-time market insights.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        tag: 'V 2.4',
        borderHover: 'group-hover:border-blue-200',
        bgHover: 'group-hover:bg-blue-50/50'
    },
    {
        id: '02',
        name: 'Fortress Guard',
        category: 'Cybersecurity',
        description: 'Automated threat detection system powered by neural networks.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        tag: 'Beta',
        borderHover: 'group-hover:border-emerald-200',
        bgHover: 'group-hover:bg-emerald-50/50'
    },
    {
        id: '03',
        name: 'Flux Engine',
        category: 'DevOps Tool',
        description: 'Zero-config deployment pipeline for high-scale next.js applications.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        tag: 'New',
        borderHover: 'group-hover:border-indigo-200',
        bgHover: 'group-hover:bg-indigo-50/50'
    }
];

export default function Products() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative py-32 bg-slate-50 overflow-hidden">

            {/* Dynamic Background Gradients */}
            <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-emerald-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"
                        >
                            Proprietary Ecosystem
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
                        >
                            Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                                Products
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-500 text-xl max-w-md mb-2 leading-relaxed"
                    >
                        Beyond services, we engineer proprietary SaaS ecosystems designed to accelerate growth.
                    </motion.p>
                </div>

                {/* Product Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <ProductCard key={i} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product, index }: { product: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={cn(
                "group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 transition-all duration-300",
                product.borderHover
            )}
        >
            {/* Hover Background Tint */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                product.bgHover
            )} />

            {/* Image Section (Compact) */}
            <div className="relative h-64 overflow-hidden border-b border-slate-100">
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold rounded-full shadow-sm tracking-widest uppercase border border-slate-100">
                        {product.tag}
                    </span>
                </div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between flex-1 p-8 relative z-10">
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <span className={cn("text-xs font-bold uppercase tracking-wider", product.color)}>
                            {product.category}
                        </span>
                        <span className="text-slate-300 font-mono text-xs">
                            {product.id}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                        {product.name}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed">
                        {product.description}
                    </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-slate-400 text-sm font-medium group-hover:text-slate-600 transition-colors">
                        View Case Study
                    </span>
                    <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                        product.bg,
                        product.color
                    )}>
                        <ArrowUpRight size={18} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
