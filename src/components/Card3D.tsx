'use client';

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface Card3DProps {
    title: string;
    desc: string;
    icon: LucideIcon;
    color: string;
}

const Card3D = ({ title, desc, icon: Icon, color }: Card3DProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <motion.div
            style={{ rotateX, rotateY, z: 100 }}
            whileHover={{ scale: 1.02 }}
            className="relative group perspective-1000 cursor-pointer"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF] to-[#00CC66] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-white h-full p-8 rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-white ${color}`}>
                    <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{desc}</p>
                <div className="mt-6 flex items-center text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] to-[#00CC66]">
                    Learn more <ArrowRight className="ml-2 text-[#00CC66]" size={16} />
                </div>
            </div>
        </motion.div>
    );
};

export default Card3D;
