'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <motion.section ref={ref} style={{ opacity }} className={`relative py-24 md:py-32 ${className}`}>
            <motion.div style={{ y }} className="container mx-auto px-6">
                {children}
            </motion.div>
        </motion.section>
    );
};

export default ParallaxSection;
