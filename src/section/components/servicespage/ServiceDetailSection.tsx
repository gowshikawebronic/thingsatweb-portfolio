"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, Zap, TrendingUp, 
  Smartphone, Factory, Globe, Layout, Server, Cloud, ShieldCheck, 
  Megaphone, Target, Search, LineChart, Cpu, Wifi 
} from "lucide-react";
import LeadModal from "@/section/components/forms/LeadModal";
import SectionHeader from "@/section/components/home/SectionHeader";
import { ServiceDetailType } from "@/data/ServicePage";

const ICON_MAP: Record<string, any> = {
  Smartphone, Factory, Globe, Layout, Server, Cloud, ShieldCheck,
  Megaphone, Target, Search, LineChart, Cpu, Wifi
};

interface Props {
  data: ServiceDetailType;
}

export default function ServiceDetailSection({ data }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "green":
        return {
          bg: "bg-green-50",
          border: "hover:border-[#16A34A]",
          iconBg: "bg-[#16A34A]",
          shadow: "shadow-green-500/20",
          text: "text-[#16A34A]",
        };
      case "purple":
        return {
          bg: "bg-purple-50",
          border: "hover:border-purple-600",
          iconBg: "bg-purple-600",
          shadow: "shadow-purple-500/20",
          text: "text-purple-600",
        };
      case "orange":
        return {
          bg: "bg-orange-50",
          border: "hover:border-orange-500",
          iconBg: "bg-orange-500",
          shadow: "shadow-orange-500/20",
          text: "text-orange-500",
        };
      default: // Blue
        return {
          bg: "bg-blue-50",
          border: "hover:border-[#2776ea]",
          iconBg: "bg-[#2776ea]",
          shadow: "shadow-blue-500/20",
          text: "text-[#2776ea]",
        };
    }
  };

  return (
    <section className="bg-[#FAF7F6] font-sora overflow-hidden ">
      
      {/* --- PART 1: HERO INTRO --- */}
      <div className="relative pt-[120px] pb-[80px] animate-card-entry ">
        {/* --- PART 4: SERVICES HEADER --- */}
      <div className="pt-[40px] pb-[60px] text-center max-w-4xl mx-auto px-6">
         <SectionHeader 
            badge="Our Expertise"
            title={data.sectionHeader}
            centered={true}
         />
      </div>
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-[24px] lg:px-[40px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              {/* Playful Eyebrow Text */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full  text-[#2776ea] font-bold text-sm uppercase tracking-wider mb-6 ">
                <Zap size={16} />
                {data.hero.eyebrow}
              </div>

              <h1 className="text-[42px] lg:text-[64px] font-extrabold text-[#0F172A] leading-[1.1] mb-6 tracking-tight">
                {data.hero.title} <br />
                <span className="text-[#2776ea]">{data.hero.highlight}</span>
              </h1>

              <p className="text-[18px] text-[#475569] leading-relaxed font-light mb-8">
                {data.hero.description}
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0F172A] text-white font-bold text-[16px] shadow-xl shadow-slate-900/20 transition-all hover:bg-[#2776ea] hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                {data.hero.cta}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* --- RIGHT: 3 IMAGE COLLAGE --- */}
            <div className="flex-1 w-full relative">
               <div className="relative w-full max-w-[600px] h-[500px] mx-auto">
                  {/* Decorative Blob */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50" />

                  {/* IMAGE 1: Main */}
                  <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] z-10  transform transition-transform hover:scale-[1.02] duration-500">
                    <Image
                      src={data.hero.images[0]} 
                      alt="Main Interface"
                      fill
                      className=""
                      priority
                    />
                  </div>

                  {/* IMAGE 2: Floating Top Right */}
                  <div className="absolute top-0 right-0 w-[180px] h-[240px] z-20  transform hover:-translate-y-2 transition-transform duration-500 animate-[float_6s_ease-in-out_infinite]">
                    <Image
                      src={data.hero.images[1]}
                      alt="Feature Detail"
                      fill
                      className=""
                    />
                  </div>

                  {/* IMAGE 3: Floating Bottom Left */}
                  <div className="absolute bottom-0 left-0 w-[200px] h-[200px] z-30  transform hover:translate-y-2 transition-transform duration-500 animate-[float_5s_ease-in-out_infinite_reverse]">
                    <Image
                      src={data.hero.images[2]}
                      alt="Analytics View"
                      fill
                      className=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/10 to-transparent" />
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-8 right-8 z-40 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-lg flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#16A34A]" />
                    <span className="text-xs font-bold text-[#0F172A]">High Performance</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- PART 2: VALUE PROPOSITION (Cards) --- */}
      <div className="py-[80px] container mx-auto px-[24px] lg:px-[40px]">
        {/* Dynamic Grid: If 3 cards, use 3 cols. Else 2 cols. */}
        <div className={`grid md:grid-cols-2 ${data.cards.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
          
          {data.cards.map((card, index) => {
            const styles = getThemeStyles(card.theme);
            // Lookup the icon from the map, fallback to Zap if not found
            const CardIcon = ICON_MAP[card.icon] || Zap;

            return (
              <div 
                key={index} 
                className={`group bg-white p-10 rounded-[32px] border border-slate-200 shadow-lg shadow-slate-200/50 ${styles.border} transition-all duration-300 relative overflow-hidden`}
              >
                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${styles.bg} rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110`} />
                
                <div className="relative z-10">
                  <div className={`h-14 w-14 rounded-2xl ${styles.iconBg} text-white flex items-center justify-center mb-6 shadow-lg ${styles.shadow}`}>
                    <CardIcon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{card.title}</h3>
                  <p className="text-[#475569] leading-relaxed mb-8 whitespace-pre-line">
                    {card.description}
                  </p>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`${styles.text} font-bold inline-flex items-center gap-2 hover:gap-3 transition-all`}
                  >
                    {card.cta} <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* --- PART 3: CTA STRIP --- */}
      <div className="py-[100px]">
        <div className="container mx-auto px-[24px] lg:px-[40px]">
           <div className="bg-[#2776ea] rounded-[40px] p-12 lg:p-16 text-center relative overflow-hidden">
              {/* Background Patterns */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">
                  {data.ctaStrip.title}
                </h2>
                <p className="text-blue-100 text-lg mb-10 font-medium">
                  {data.ctaStrip.description}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#2776ea] font-black uppercase tracking-widest hover:bg-[#76ea27] hover:text-slate-900 transition-all shadow-xl hover:-translate-y-1"
                >
                  {data.ctaStrip.cta}
                  <Zap size={20} fill="currentColor" />
                </button>
              </div>
           </div>
        </div>
      </div>

      

      {/* --- MODAL --- */}
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Get Started"
        subtitle="Let's build something amazing together."
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