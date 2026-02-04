"use client";

import { useState } from "react";
import { X } from "lucide-react";

// 1. IMPORT THE REGISTRY
import { servicesRegistry } from "./data/servicesRegistry";

// 2. Import Components
import SectionHeader from "@/components/common/SectionHeader"; 
import { PageServiceCard } from "@/components/services/PageServiceCard";
import ServiceGrid from "@/components/services/ServiceGrid";

// --- TYPES ---
export interface ServiceCardData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  localIcon?: string;
  points: string[];
  technologies: { name: string; logo: string }[];
}

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

// 1. Get Main Services List (Vertical Stack)
const mainServicesList = transformData(MAIN_SERVICE_IDS);

// 2. Get Additional Services List (Grid Layout)
const allIds = Object.keys(servicesRegistry);
const additionalIds = allIds.filter((id) => !MAIN_SERVICE_IDS.includes(id));
const additionalServicesList = transformData(additionalIds);

// --- ENQUIRY MODAL ---
const EnquiryModal = ({
  service,
  onClose,
}: {
  service: ServiceCardData;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 font-sora">
      <div className="bg-white rounded-[2rem] w-full max-w-lg p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Modal Background Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2776ea]/10 rounded-bl-full -mr-10 -mt-10" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="relative z-10">
          <h3 className="text-h2 font-black text-slate-900 mb-2">
            Let's Build This
          </h3>
          <p className="text-slate-500 mb-8 font-medium text-body">
            Inquiring about:{" "}
            <span className="text-[#2776ea] font-bold">{service.title}</span>
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-caption font-bold uppercase tracking-widest text-slate-400 mb-2">
                Work Email
              </label>
              <input
                type="email"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2776ea] focus:ring-1 focus:ring-[#2776ea] font-medium text-body text-slate-800 transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label className="block text-caption font-bold uppercase tracking-widest text-slate-400 mb-2">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2776ea] focus:ring-1 focus:ring-[#2776ea] font-medium text-body text-slate-800 transition-all resize-none"
                placeholder="Briefly describe your requirements.."
              />
            </div>
            <button className="w-full py-4 bg-[#2776ea] text-white text-menu font-bold rounded-xl hover:bg-[#1a65d8] transition-all shadow-lg shadow-[#2776ea]/20 active:scale-[0.98]">
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
  const [selectedService, setSelectedService] =
    useState<ServiceCardData | null>(null);

  return (
    <main className="bg-white min-h-screen font-sora selection:bg-[#2776ea] selection:text-white">
      {/* 2. MAIN SERVICES (Vertical Stack - PageServiceCard) */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Header for Main Services - USING REUSABLE COMPONENT */}
          <div className="max-w-3xl mb-24">
            <SectionHeader
              badge="Core Domains"
              title="Primary"
              highlight="Service Suite"
              description="Our foundational technical capabilities designed to drive digital transformation, operational efficiency, and sustainable growth for modern enterprises"
              centered={false}
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

      {/* 3. ADDITIONAL SERVICES (New Grid UI - ServiceGrid) */}
      <ServiceGrid services={additionalServicesList} />

      {/* 4. MODAL */}
      {selectedService && (
        <EnquiryModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </main>
  );
}