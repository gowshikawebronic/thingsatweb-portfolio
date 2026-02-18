'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const news = [
    {
        id: '01',
        title: 'Quantum Advantage',
        category: 'Research',
        date: 'Oct 12',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop',
        desc: 'Achieving supremacy in algorithmic trading speeds.',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        id: '02',
        title: 'Neural Interfaces',
        category: 'Product',
        date: 'Oct 08',
        image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2671&auto=format&fit=crop',
        desc: 'Direct-to-cloud brain computer interface prototypes.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50'
    },
    {
        id: '03',
        title: 'Sustainable Data',
        category: 'Green Tech',
        date: 'Sep 28',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        desc: 'Zero-emission server farms in the Arctic circle.',
        color: 'text-teal-600',
        bg: 'bg-teal-50'
    },
    {
        id: '04',
        title: 'Cyber Immunity',
        category: 'Security',
        date: 'Sep 15',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        desc: 'Self-healing networks that adapt to new threats instantly.',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50'
    }
];

export default function NewsHorizontal() {
    const targetRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    useEffect(() => {
        if (scrollRef.current && targetRef.current) {
            const calculateWidth = () => {
                const scrollWidth = scrollRef.current?.scrollWidth || 0;
                const clientWidth = window.innerWidth;
                setScrollRange(scrollWidth - clientWidth + 100); 
            };

            calculateWidth();
            window.addEventListener('resize', calculateWidth);
            return () => window.removeEventListener('resize', calculateWidth);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map scroll to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

    return (
        // CHANGED: Reduced height from 300vh to 150vh for faster scrolling
        <section ref={targetRef} className="relative h-[150vh] bg-slate-50">

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Ambient Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px] mix-blend-multiply" />
                </div>

                <div className="relative z-10 w-full h-full flex items-center">
                    
                    {/* Header */}
                    <div className="absolute top-12 left-6 md:left-24 z-20 max-w-sm pointer-events-none">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-slate-300" />
                            <span className="text-slate-400 text-xs font-bold tracking-[0.3em] uppercase">
                                Latest Intel
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none">
                            Fresh <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                                Headlines
                            </span>
                        </h2>
                    </div>

                    {/* Scrolling Track */}
                    <motion.div 
                        ref={scrollRef} 
                        style={{ x }} 
                        className="flex gap-8 px-6 md:px-24 items-center w-max"
                    >
                        {/* Shorter Spacer */}
                        <div className="min-w-[40vw] md:min-w-[20vw] shrink-0 flex flex-col justify-end pt-24">
                            <p className="text-slate-500 text-base leading-relaxed max-w-xs">
                                Curated insights from the bleeding edge.
                            </p>
                            <div className="flex items-center gap-2 mt-6 text-blue-600 font-bold tracking-widest text-xs uppercase">
                                <span>Scroll</span>
                                <ArrowRight className="w-4 h-4 animate-pulse" />
                            </div>
                        </div>

                        {news.map((item) => (
                            <NewsCard key={item.id} item={item} />
                        ))}

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function NewsCard({ item }: { item: typeof news[0] }) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            // CHANGED: Reduced Card Height (h-[400px] / md:h-[480px])
            className="group relative h-[400px] w-[300px] md:h-[480px] md:w-[400px] shrink-0 flex flex-col overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
        >
            {/* Image Section (Top 55%) */}
            <div className="relative h-[55%] overflow-hidden m-2 rounded-[1.5rem]">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 z-10" />
                
                <div className="absolute top-3 left-3 z-20">
                    <div className="px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm flex items-center gap-2">
                        <Calendar size={10} className="text-slate-400" />
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700">
                            {item.date}
                        </span>
                    </div>
                </div>

                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className={cn("text-[10px] font-bold uppercase tracking-wider", item.color)}>
                            {item.category}
                        </span>
                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0", item.bg)}>
                            <ArrowUpRight size={14} className={item.color} />
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                        {item.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}