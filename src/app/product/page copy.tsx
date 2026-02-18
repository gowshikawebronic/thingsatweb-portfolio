"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Box, Sparkles } from "lucide-react";
import { productData, ProductLink } from "@/data/productData";

// --- Professional Button Styles ---
// Using a cleaner, less aggressive style for a "premium" feel
const getButtonStyles = (type: ProductLink["type"]) => {
  const baseStyles = "inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group/btn";
  
  switch (type) {
    case "primary":
      return `${baseStyles} px-6 py-3 rounded-full bg-[#0F172A] text-white hover:bg-[#2776ea] hover:shadow-lg hover:shadow-blue-900/20 active:scale-95`;
    case "accent":
      return `${baseStyles} px-6 py-3 rounded-full bg-[#2776ea] text-white hover:bg-[#1a5bb8] hover:shadow-lg hover:shadow-blue-500/30 active:scale-95`;
    case "secondary":
      return `${baseStyles} px-0 py-2 text-slate-500 hover:text-[#0F172A] hover:gap-3`; // Text link style for secondary actions
    default:
      return `${baseStyles} px-6 py-3 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200`;
  }
};

export default function ProductSection() {
  return (
    <section className="bg-[#FAF7F6] py-24 lg:py-36 font-sora relative overflow-hidden">
      
      {/* --- Sophisticated Background --- */}
      {/* A very faint grid pattern for technical texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
      
      {/* Subtle ambient glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2776ea]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- Header --- */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-28">
          {/* <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-[#2776ea] text-xs font-bold uppercase tracking-widest mb-6">
            Our Ecosystem
          </span> */}
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
            Engineered for <span className="text-[#2776ea]">Performance.</span>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            A suite of proprietary tools designed to bridge the gap between complex data and operational excellence.
          </p>
        </div>

        {/* --- The Bento Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {productData.map((product, index) => {
            // Feature logic: First item or specific ID can be featured (Span 2 cols)
            const isFeatured = product.id === 'virtual-tour-360';
            
            return (
              <article 
                key={product.id}
                className={`
                  group relative flex flex-col bg-white rounded-[32px] overflow-hidden 
                  border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 
                  transition-all duration-500 ease-out hover:-translate-y-1
                  ${isFeatured ? 'lg:col-span-3 lg:flex-row' : 'lg:col-span-1'} 
                `}
              >
                
                {/* --- 1. Visual/Image Area --- */}
                <div className={`
                  relative bg-[#F8FAFC] flex items-center justify-center overflow-hidden
                  ${isFeatured ? 'lg:w-1/2 p-12 lg:order-2' : 'h-[260px] w-full p-8'}
                `}>
                  {/* Decorative Circle behind image */}
                  <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-3xl scale-50 group-hover:scale-100" />
                  
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes={isFeatured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                    className="object-contain z-10 drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={isFeatured}
                  />
                </div>

                {/* --- 2. Content Area --- */}
                <div className={`
                  flex flex-col p-8 lg:p-10 relative
                  ${isFeatured ? 'lg:w-1/2 justify-center lg:order-1' : 'flex-1'}
                `}>
                  
                  {/* Top: Category */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors duration-300">
                      {isFeatured ? <Sparkles size={14} /> : <Box size={14} />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {product.category}
                    </span>
                  </div>

                  {/* Middle: Title & Text */}
                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2776ea] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom: Links/Buttons */}
                  <div className="mt-auto flex items-center gap-4 flex-wrap">
                    {product.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className={getButtonStyles(link.type)}
                      >
                        {link.label}
                        {link.type === 'secondary' ? (
                           <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                        ) : (
                           null
                        )}
                        {link.type === 'primary' && <ArrowRight size={16} />}
                        {link.type === 'accent' && <ExternalLink size={16} />}
                      </Link>
                    ))}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}