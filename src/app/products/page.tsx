"use client";

import React, { useState, isValidElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, 
  Check,
  ExternalLink,
  ListFilter,
  PlayCircle,
  Sparkles
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// --- IMPORTS ---
import { productData, Product } from "@/AllData/products/PRODUCT_DATA";
import SectionHeader from "@/components/common/SectionHeader";

// --- INDIVIDUAL PRODUCT CARD COMPONENT ---
const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  // View State
  const [view, setView] = useState<"image" | "specs" | "demo">("image");
  const isEven = index % 2 === 0;
  
  // Logic: Check if ID is exactly virtualtour360 for the demo button
  const isVirtualTour = product.id === "virtualtour360";

  // Logic: Extract the "Visit Site" link
  const visitLink = product.links.find((l) => l.type === "primary")?.href || "#";

  // Helper to toggle views
  const toggleView = (targetView: "specs" | "demo") => {
    if (view === targetView) {
      setView("image"); 
    } else {
      setView(targetView); 
    }
  };

  return (
    <div 
      id={product.id} 
      className="scroll-mt-32 group relative w-full py-16  border-b border-slate-100 last:border-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
      
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className={`lg:col-span-6 flex flex-col gap-8 order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          
          {/* Header Badge & Icon */}
          <div className="flex flex-col items-start gap-5">
             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-[#4888E8]/5 to-[#07b022]/5 border border-[#4888E8]/20 shadow-sm backdrop-blur-sm">
                <div className="text-[#07b022]">
                    {isValidElement(product.icon) ? product.icon : <product.icon size={12} />}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4888E8]">
                    {product.tagline}
                </span>
             </span>

             <h3 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.1]">
                {product.name}
             </h3>
          </div>

          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {product.description}
          </p>

          {/* --- ACTION ROW --- */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            
            {/* 1. Visit Site (Primary) */}
            <Link 
              href={visitLink}
              target="_blank"
              className="group/btn relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F172A] text-white font-bold text-sm uppercase tracking-widest shadow-xl shadow-[#0F172A]/20 hover:shadow-2xl hover:shadow-[#4888E8]/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-[#4888E8] to-[#07b022] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
               <span className="relative z-10 flex items-center gap-2">
                  Visit Site <ExternalLink size={14} />
               </span>
            </Link>

            {/* 2. Live Demo Button (Only for Virtual Tour) */}
            {isVirtualTour && (
              <button 
                onClick={() => toggleView("demo")}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  view === "demo" 
                    ? 'border-[#07b022] bg-[#07b022]/5 text-[#07b022]' 
                    : 'border-slate-200 bg-white text-slate-500 hover:border-[#07b022] hover:text-[#07b022]'
                }`}
              >
                <span>{view === "demo" ? "Close Demo" : "Live Demo"}</span>
                {view === "demo" ? <X size={14} /> : <PlayCircle size={14} />}
              </button>
            )}

            {/* 3. View Specs Button (Always Visible) */}
            <button 
               onClick={() => toggleView("specs")}
               className={`flex items-center gap-2 px-6 py-3.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                 view === "specs" 
                   ? 'border-[#4888E8] bg-[#4888E8]/5 text-[#4888E8]' 
                   : 'border-slate-200 bg-white text-slate-500 hover:border-[#4888E8] hover:text-[#4888E8]'
               }`}
            >
               <span>{view === "specs" ? "Close Specs" : "View Specs"}</span>
               {view === "specs" ? <X size={14} /> : <ListFilter size={14} />}
            </button>

          </div>
        </div>

        {/* --- RIGHT COLUMN: PEDESTAL --- */}
        <div className={`lg:col-span-6 h-[400px] lg:h-[500px] perspective-1000 order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative w-full h-full bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex items-center justify-center group-hover:shadow-[#4888E8]/10 transition-shadow duration-700">
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4888E8]/5 via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
            
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
                  {/* Close Overlay Button */}
                  <button 
                    onClick={() => setView("image")}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-slate-50 transition-colors"
                  >
                     <X size={20} className="text-slate-500" />
                  </button>
                </motion.div>
              )}

              {/* VIEW 2: SPECS (FEATURES) */}
              {view === "specs" && (
                <motion.div 
                   key="specs"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.3 }}
                   className="absolute inset-0 z-20 flex flex-col bg-white/95 backdrop-blur-md p-8 md:p-12"
                >
                   <div className="flex items-center justify-between mb-8">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                           Key Features
                       </span>
                       <div className="h-px flex-grow bg-slate-100 mx-4" />
                   </div>

                   <div className="flex-1 flex flex-col justify-center gap-4 overflow-y-auto custom-scrollbar">
                       {product.features.map((feature, i) => (
                           <motion.div 
                               key={i}
                               initial={{ opacity: 0, x: -10 }}
                               animate={{ opacity: 1, x: 0 }}
                               transition={{ delay: i * 0.1 }}
                               className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#4888E8]/30 hover:bg-white hover:shadow-lg hover:shadow-[#4888E8]/5 transition-all duration-300 group/feature"
                           >
                               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#07b022]/10 flex items-center justify-center text-[#07b022]">
                                   <Check size={16} strokeWidth={3} />
                               </div>
                               <span className="text-sm font-bold text-slate-700 group-hover/feature:text-[#0F172A]">
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-full h-full p-8 lg:p-16 flex items-center justify-center"
                >
                   {/* Floating Animation Wrapper */}
                   <motion.div 
                      animate={{ 
                        y: [0, -10, 0],
                        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="relative w-full h-full"
                   >
                       <Image
                         src={product.image}
                         alt={product.name}
                         fill
                         className="object-contain drop-shadow-2xl"
                         sizes="(max-width: 768px) 100vw, 50vw"
                       />
                   </motion.div>
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
    <section id="products" className="relative overflow-hidden bg-[#FAF7F6] py-24 lg:py-32 font-sora">
      
     
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 z-10">
        <div className="mb-20 lg:mb-24">
            <SectionHeader 
                // badge="Our Ecosystem"
                title={
                    <>
                    Transforming Industry with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">Proprietary Products</span>
                    </>
                }
                description="Scalable software solutions meticulously engineered to bridge the gap between complex data and operational excellence"
                align="left"
                color="blue"
                className="max-w-3xl"
            />
        </div>
        <div className="flex flex-col">
          {productData.map((product, index) => (
             <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}