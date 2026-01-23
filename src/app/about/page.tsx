"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Users, Zap, BarChart, ShieldCheck } from "lucide-react";
import LeadModal from "@/components/forms/LeadModal";

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#FAF7F6] py-[120px] lg:py-[160px] font-sora relative overflow-hidden">
      
      {/* --- BACKGROUND THEME ENHANCEMENTS --- */}
      
      {/* 1. Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* 2. Soft Gradient Orbs (Blue & Green) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#4F86E8]/5 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#16A34A]/5 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      
      <div className="container mx-auto px-[24px] lg:px-[40px] relative z-10">
        
        {/* --- Main Card Layout --- */}
        <div className="relative flex flex-col lg:flex-row bg-white/80 backdrop-blur-sm rounded-[32px] border border-white/60 shadow-2xl shadow-[#0F172A]/5 overflow-hidden min-h-[600px] transition-transform duration-500 ease-out hover:-translate-y-[4px]">
          
          {/* --- Left Content --- */}
          <div className="flex-1 p-[40px] lg:p-[60px] flex flex-col justify-center order-2 lg:order-1 relative">
            
            {/* Decorative watermark */}
            <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
              <Users size={200} />
            </div>

            {/* Badge */}
            <div className="w-fit px-[16px] py-[6px] rounded-lg  text-[#4F86E8] text-[12px] font-bold uppercase tracking-wider mb-[24px] flex items-center gap-2">
              <Users size={14} />
              About Us
            </div>

            {/* Heading */}
            <h2 className="text-[36px] lg:text-[52px] font-extrabold text-[#0F172A] tracking-tight mb-[24px] leading-[1.1]">
              We offer everything <br />
              you need to <span className="text-[#4F86E8] relative">
                go digital.
                {/* Underline svg */}
                <svg className="absolute -bottom-2 left-0 w-full h-[8px] text-[#4F86E8]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            {/* Body Text */}
            <div className="space-y-6 text-[#475569] text-[16px] lg:text-[18px] leading-relaxed font-light mb-[40px]">
              <p>
                Things at Web is a renowned IT Company with a top-notch team of
                talented data experts, designers, developers, technicians,
                engineers, and highly innovative artists, which makes us a unique
                one-stop solution for our present and prospective customers.
              </p>
              <p>
                We are inspired to develop sophisticated and practical digital
                products that resolve all your issues. Our elegant, data-driven
                resolutions assist organizations in performing better and attaining
                their goals.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="flex flex-wrap gap-8 mb-[48px] border-t border-slate-100 pt-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-[#4F86E8]">
                  <BarChart size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] font-bold text-[#0F172A]">100%</span>
                  <span className="text-[14px] text-[#475569] font-medium">Data Driven</span>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-100 hidden sm:block" />
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-[#16A34A]">
                  <ShieldCheck size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] font-bold text-[#0F172A]">24/7</span>
                  <span className="text-[14px] text-[#475569] font-medium">Support Team</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-[10px] px-[32px] py-[16px] rounded-xl bg-[#0F172A] text-white font-bold text-[16px] transition-all hover:bg-[#4F86E8] hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
              >
                Get Started
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* --- Right Image Area --- */}
          <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50/50 to-slate-50/50 border-l border-blue-100/50 items-center justify-center relative overflow-hidden order-1 lg:order-2">
            
            {/* Animated Glow Behind Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4F86E8]/20 rounded-full blur-[80px] animate-pulse" />

            {/* Image Container */}
            <div className="relative w-full h-full min-h-[500px] flex items-center justify-center p-12">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/images/about.png" // Dummy Path
                  alt="ThingsAtWeb Team"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl shadow-blue-900/10 flex items-center gap-3 animate-float">
                <div className="h-10 w-10 rounded-full bg-[#4F86E8] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#475569] uppercase tracking-wider">Innovation</p>
                  <p className="text-[14px] font-black text-[#0F172A]">Top-Notch Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image (Visible only on mobile) */}
          <div className="lg:hidden h-[300px] w-full relative bg-blue-50 border-b border-blue-100 order-1 overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/assets/images/about.png" // Dummy Path
                  alt="ThingsAtWeb Team"
                  fill
                  className="object-cover"
                />
             </div>
          </div>

        </div>
      </div>

      {/* --- Modal Integration --- */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Start Your Journey"
        subtitle="Connect with our expert team today."
      />

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />

    </section>
  );
}