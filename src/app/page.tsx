'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Servicesv2 from '@/components/Servicesv2';
import FreeServices from '@/components/FreeServices';
import UniversalCTA from '@/components/Contact';


export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-[#F5F9FF] text-slate-900 overflow-x-hidden selection:bg-[#00CC66] selection:text-white font-sans">

      {/* Scroll Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007AFF] to-[#00CC66] origin-left z-[100]" />

    

      {/* 1. HERO SECTION */}
      <Hero />
      {/* 2. SERVICES SECTION */}
      <Servicesv2 />
      <Services />

      <FreeServices />
      {/* 3. PRODUCTS SECTION */}
      <Products />

      {/* <News />
      <Newsv2 />

      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800">Trusted By Industry Leaders</h2>
        </div>
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 text-4xl font-black text-slate-200 uppercase tracking-widest">
                <span>Microsoft</span>
                <span>Google</span>
                <span>Spotify</span>
                <span>Amazon</span>
                <span>Netflix</span>
                <span>Adobe</span>
                <span>Salesforce</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA SECTION */}
      <UniversalCTA />

      {/* FOOTER */}
      
    </div>
  );
}