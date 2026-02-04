"use client";

import { useState } from "react";
import { X, User, ArrowRight } from "lucide-react";

// 1. IMPORT THE REGISTRY
import { servicesRegistry } from "@/app/services/data/servicesRegistry"; 

// 2. Import Common Components
import SecondaryHero from "@/components/common/SecondaryHero";
import { PageServiceCard } from "@/components/services/PageServiceCard";

// 3. Helper to transform Registry Data to Card Props
// This maps the massive 'ServicePageData' down to just what the card needs
const serviceList = Object.values(servicesRegistry).map((data) => ({
  id: data.id,
  // We map from the 'preview' object we just created
  title: data.preview.title,
  tagline: data.preview.tagline,
  description: data.preview.description,
  image: data.preview.image,
  icon: data.preview.icon, // You might need to render this as <DynamicIcon> inside the card or pass string
  points: data.preview.points,
  technologies: data.preview.technologies,
}));

// --- ENQUIRY MODAL (Kept same) ---
const EnquiryModal = ({ service, onClose }: { service: any; onClose: () => void; }) => {
  // ... (Keep your modal logic exactly the same)
  // Just ensure 'service' type is flexible or matches the transformation above
  return (
      // ... (Your modal JSX)
       <div className="fixed inset-0 ..">
           {/* ... code ... */}
           <span>Regarding: {service.title}</span> 
           {/* ... code ... */}
       </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <main className="bg-white min-h-screen font-sora selection:bg-[#2776ea] selection:text-white">
      
      <SecondaryHero
        tag="Services"
        title="Architecting the"
        highlight="Digital Future"
        description="WEBRONIC transforms legacy challenges into competitive advantages using high-performance digital architectures"
      />
      
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col gap-24 md:gap-32">
            
            {/* 4. MAP FROM THE CENTRALIZED REGISTRY LIST */}
            {serviceList.map((service, index) => (
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

      {selectedService && (
        <EnquiryModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </main>
  );
}