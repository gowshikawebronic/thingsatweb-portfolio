'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const newsItems = [
    {
        id: '01',
        title: 'The Future of Serverless Architecture',
        category: 'Engineering',
        date: 'Oct 12, 2024',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        desc: 'How edge computing is redefining the way we build scalable applications.'
    },
    {
        id: '02',
        title: 'Design Systems for Enterprise',
        category: 'Design',
        date: 'Sep 28, 2024',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        desc: 'Scaling UI consistency across multi-platform ecosystems.'
    },
    {
        id: '03',
        title: 'AI in Cyber Defense',
        category: 'Intelligence',
        date: 'Sep 15, 2024',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        desc: 'Leveraging neural networks to predict and prevent zero-day attacks.'
    },
    {
        id: '04',
        title: 'Sustainable Tech Stack',
        category: 'Green Tech',
        date: 'Aug 30, 2024',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        desc: 'Reducing carbon footprint through optimized code and green hosting.'
    }
];

export default function Newsv2() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative py-32 bg-slate-950 text-white overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-12 bg-slate-700" />
                            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                                Insights & Updates
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
                        >
                            LATEST <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                TRANSMISSIONS
                            </span>
                        </motion.h2>
                    </div>

                    <div className="hidden md:block">
                        <button className="px-8 py-4 rounded-full border border-slate-800 hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-wide text-sm flex items-center gap-2 group">
                            <span>View All Articles</span>
                            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* News List */}
                <div className="flex flex-col">
                    {newsItems.map((item, index) => (
                        <NewsItem
                            key={item.id}
                            item={item}
                            index={index}
                            isHovered={hoveredIndex === index}
                            setHovered={setHoveredIndex}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

function NewsItem({ item, index, isHovered, setHovered }: { item: typeof newsItems[0], index: number, isHovered: boolean, setHovered: (i: number | null) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group relative border-t border-slate-800 py-12 cursor-pointer"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">

                {/* Meta Info */}
                <div className="flex items-center gap-4 md:w-1/4">
                    <span className="text-slate-500 font-mono text-sm">0{index + 1}</span>
                    <span className="px-3 py-1 rounded-full border border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                        {item.category}
                    </span>
                </div>

                {/* Title */}
                <div className="md:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300">
                        {item.title}
                    </h3>
                </div>

                {/* Date & Arrow */}
                <div className="flex items-center justify-between md:justify-end gap-12 md:w-1/4">
                    <span className="text-slate-500 text-sm font-medium">{item.date}</span>
                    <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                        <ArrowUpRight size={20} className="transform group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                </div>
            </div>

            {/* Hover Reveal Image */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[250px] rounded-2xl overflow-hidden pointer-events-none z-20 shadow-2xl shadow-blue-900/20 border border-slate-700 hidden md:block"
                        style={{ marginLeft: '10%' }} // Offset to not block title completely
                    >
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-sm font-medium line-clamp-2">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/0 via-blue-900/5 to-emerald-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}
