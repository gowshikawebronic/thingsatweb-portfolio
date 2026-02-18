"use client";

import { useState } from "react";
import { X, Send, Sparkles } from "lucide-react"; // Added Icons
import { AnimatePresence, motion } from "framer-motion";

// 1. IMPORT DATA & COMPONENTS
import { servicesRegistry } from "./data/servicesRegistry";
import SectionHeader from "@/components/common/SectionHeader"; 
import { PageServiceCard, ServiceCardData } from "@/components/services/PageServiceCard";
import ServiceGrid from "@/components/services/ServiceGrid";

// --- DATA PREPARATION ---
const MAIN_SERVICE_IDS = [
  "web-development",
  "ai-machine-learning",
  "cloud-services",
  "digital-transformation",
  "devops",
  "iot-solutions",
  "data-analytics",
];

// Helper to transform registry data to ServiceCardData
const transformData = (ids: string[]): ServiceCardData[] => {
  return ids
    .map((id) => servicesRegistry[id])
    .filter(Boolean)
    .map((data) => ({
      id: data.id,
      title: data.preview.title,
      tagline: data.preview.tagline,
      description: data.preview.description,
      localIcon: data.preview.localIcon,
      image: data.preview.image,
      icon: data.preview.icon,
      points: data.preview.points,
      technologies: data.preview.technologies,
    }));
};

const mainServicesList = transformData(MAIN_SERVICE_IDS);

const allIds = Object.keys(servicesRegistry);
const additionalIds = allIds.filter((id) => !MAIN_SERVICE_IDS.includes(id));
const additionalServicesList = transformData(additionalIds);

// --- ENQUIRY MODAL COMPONENT ---
const EnquiryModal = ({
  service,
  onClose,
}: {
  service: ServiceCardData;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0F172A]/80 backdrop-blur-md animate-in fade-in duration-300 font-sora">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl relative overflow-hidden"
      >
       
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/50 hover:bg-white rounded-full text-slate-400 hover:text-[#0F172A] transition-colors z-20 backdrop-blur-sm border border-slate-100"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 p-8 md:p-10">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4888E8]/10 text-[#4888E8] text-[10px] font-black uppercase tracking-widest mb-4">
               <Sparkles size={12} />
               Start Project
            </span>
            <h3 className="text-3xl font-black text-[#0F172A] mb-2 tracking-tight">
              Let's Build This
            </h3>
            <p className="text-slate-500 font-medium">
              You are inquiring about:{" "}
              <span className="text-[#4888E8] font-bold">{service.title}</span>
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Work Email
              </label>
              <input
                type="email"
                className="w-full p-4 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#4888E8] focus:ring-1 focus:ring-[#4888E8] font-bold text-[#0F172A] placeholder:text-slate-400 transition-all"
                placeholder="name@company.com"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full p-4 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#4888E8] focus:ring-1 focus:ring-[#4888E8] font-medium text-[#0F172A] placeholder:text-slate-400 transition-all resize-none"
                placeholder="Briefly describe your requirements..."
              />
            </div>

            <button className="group w-full py-4 bg-[#0F172A] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#4888E8]/20 transition-all active:scale-[0.98] overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-r from-[#4888E8] to-[#07b022] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-2">
                 Request Consultation <Send size={16} />
               </span>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  return (
    <main className="bg-white min-h-screen font-sora selection:bg-[#4888E8] selection:text-white">
      
      {/* 2. MAIN SERVICES (Vertical Stack) */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-slate-100">
        
        {/* Background Mesh */}
       
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-24">
            <SectionHeader
              // badge="Core Domains"
              // FIX: Combined title and highlight into one ReactNode prop
              title={
                <>
                  Primary <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">Service Suite</span>
                </>
              }
              description="Our foundational technical capabilities designed to drive digital transformation, operational efficiency, and sustainable growth for modern enterprises"
              align="left"
              color="blue"
              className="mb-0"
            />
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {mainServicesList.map((service, index) => (
              <PageServiceCard
                key={service.id}
                service={service}
                index={index}
                onCtaClick={setSelectedService}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADDITIONAL SERVICES (Grid) */}
      <ServiceGrid services={additionalServicesList} />

      {/* 4. MODAL */}
      <AnimatePresence>
        {selectedService && (
          <EnquiryModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}