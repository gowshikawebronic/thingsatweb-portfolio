"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, 
  CheckCircle2,
  ExternalLink,
  ListFilter,
  PlayCircle
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader"; 
import { Product, products } from "@/AllData/products/PRODUCT_DATA";

// --- INDIVIDUAL PRODUCT CARD COMPONENT ---
const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  // View State: 'image' (default), 'specs', or 'demo'
  const [view, setView] = useState<"image" | "specs" | "demo">("image");
  const isEven = index % 2 === 0;
  const isVirtualTour = product.id === "virtualtour360";

  // Helper to toggle views
  const toggleView = (targetView: "specs" | "demo") => {
    if (view === targetView) {
      setView("image"); // Close if clicking active button
    } else {
      setView(targetView); // Switch to new view
    }
  };

  return (
    <div 
      id={product.id} 
      className="scroll-mt-32 group relative w-full py-16 lg:py-20 border-b border-slate-100 last:border-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className={`lg:col-span-6 flex flex-col order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          
          {/* Header Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-[#2776ea] shadow-sm transition-transform duration-500 group-hover:scale-105">
              {product.icon}
            </div>
            <span className="text-caption font-bold uppercase tracking-widest px-4 py-2 ">
              {product.tagline}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-h2 font-bold text-slate-900 mb-6 group-hover:text-[#2776ea] transition-colors tracking-tight">
            {product.name}
          </h3>
          <p className="text-body text-slate-500 font-medium leading-loose mb-8">
            {product.description}
          </p>

          {/* --- ACTION ROW --- */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* 1. Visit Site (Always Visible) */}
            <Link 
              href={product.link}
              target="_blank"
              className="flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-[#2776ea] text-white font-bold text-menu uppercase tracking-widest hover:bg-[#1a5bbd] transition-colors shadow-md shadow-blue-200"
            >
              Visit Site
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <ExternalLink size={14} />
              </div>
            </Link>

            {/* 2. Live Demo Button (Only for Virtual Tour) */}
            {isVirtualTour && (
              <button 
                onClick={() => toggleView("demo")}
                className={`flex items-center gap-2 pl-5 pr-2 py-1.5 rounded-full border cursor-pointer transition-all ${
                  view === "demo" 
                    ? 'border-[#76ea27] bg-slate-50 text-slate-900' 
                    : 'border-slate-200 bg-white hover:border-[#76ea27]'
                }`}
              >
                <span className="text-caption font-bold uppercase tracking-widest text-slate-500">
                  {view === "demo" ? "Close Demo" : "Live Demo"}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  view === "demo" ? 'bg-[#76ea27] text-white' : 'bg-slate-50 text-slate-400'
                }`}>
                  {view === "demo" ? <X size={14} /> : <PlayCircle size={14} />}
                </div>
              </button>
            )}

            {/* 3. View Specs Button (Always Visible) */}
            <button 
               onClick={() => toggleView("specs")}
               className={`flex items-center gap-2 pl-5 pr-2 py-1.5 rounded-full border cursor-pointer transition-all ${
                 view === "specs" 
                   ? 'border-[#2776ea] bg-slate-50' 
                   : 'border-slate-200 bg-white hover:border-[#2776ea]'
               }`}
            >
               <span className="text-caption font-bold uppercase tracking-widest text-slate-500">
                   {view === "specs" ? "Close Specs" : "View Specs"}
               </span>
               <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                 view === "specs" ? 'bg-[#2776ea] text-white' : 'bg-slate-50 text-slate-400'
               }`}>
                  {view === "specs" ? <X size={14} /> : <ListFilter size={14} />}
               </div>
            </button>

          </div>
        </div>

        {/* --- RIGHT COLUMN: PEDESTAL --- */}
        <div className={`lg:col-span-6 h-[360px] lg:h-[450px] perspective-1000 order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative w-full h-full bg-slate-50/50 rounded-[2.5rem] border border-slate-100 overflow-hidden flex items-center justify-center transition-all duration-700 hover:shadow-xl hover:shadow-slate-200/50">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
            
            <AnimatePresence mode="wait">
              
              {/* VIEW 1: DEMO (IFRAME) */}
              {view === "demo" && (
                <motion.div 
                  key="demo"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-20 w-full h-full bg-white"
                >
                    <iframe 
                        src="https://app.virtualtour360.ai/real-estate/"
                        className="w-full h-full border-0"
                        title="Virtual Tour Demo"
                        allowFullScreen
                        loading="lazy"
                    />
                </motion.div>
              )}

              {/* VIEW 2: SPECS (FEATURES) */}
              {view === "specs" && (
                <motion.div 
                    key="specs"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-20 flex flex-col h-full p-8 lg:p-12"
                >
                    <div className="text-center mb-8">
                        <span className="text-caption font-black uppercase tracking-widest text-slate-400">
                            Key Features
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-3">
                        {product.features.map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#76ea27]/10 flex items-center justify-center text-[#5eb820]">
                                    <CheckCircle2 size={16} />
                                </div>
                                <span className="text-submenu font-bold text-slate-700">
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
              )}

              {/* VIEW 3: IMAGE (DEFAULT) */}
              {view === "image" && (
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-full h-full p-8 lg:p-12 flex items-center justify-center"
                >
                    <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-xl"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
              )}
              
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN SECTION ---
export default function ProductSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-white py-24 lg:py-32 font-sora">
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-20 lg:mb-24">
            <SectionHeader 
                badge="Our Ecosystem"
                title="Transforming Industry with"
                highlight="Proprietary Products"
                description="Scalable software solutions meticulously engineered to bridge the gap between complex data and operational excellence"
                centered={false}
                className="max-w-3xl"
            />
        </div>
        <div className="flex flex-col">
          {products.map((product, index) => (
             <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}