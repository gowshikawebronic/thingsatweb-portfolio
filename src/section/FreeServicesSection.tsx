"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import LeadModal from "@/components/forms/LeadModal"; // Import the modal
import SectionHeader from "@/components/home/SectionHeader";


export default function FreeWebsiteSection() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#FAF7F6] py-[100px] relative font-sora">
      <div className="container mx-auto px-[24px] lg:px-[40px]">
          <SectionHeader
                          badge="Free Services"
                          title="Build awesome Free Websites"
                          description="Experience premium development at zero cost to kickstart your digital journey"
                          centered={true}
                          className="mb-20"
                        />
        {/* Main Feature Card */}
        <div className="relative flex flex-col lg:flex-row bg-white rounded-[32px] border border-[#e2e8f0] shadow-xl shadow-[#0F172A]/5 overflow-hidden min-h-[600px] transition-transform duration-500 ease-out hover:-translate-y-[4px]">
          
          {/* --- Left Content --- */}
          <div className="flex-1 p-[40px] lg:p-[60px] flex flex-col justify-center order-2 lg:order-1">
            
            {/* Badge */}
            <div className="w-fit px-[16px] py-[6px] rounded-lg bg-indigo-50 text-indigo-600 text-[12px] font-bold uppercase tracking-wider mb-[24px] flex items-center gap-2">
              <Sparkles size={14} />
              Limited Offer
            </div>

            {/* Heading */}
            <h2 className="text-[36px] lg:text-[52px] font-extrabold text-[#0F172A] tracking-tight mb-[24px] leading-[1.1]">
              Build Awesome <br />
              <span className="text-indigo-600">Free Websites</span>
            </h2>

            {/* Body Text */}
            <p className="text-[#475569] text-[18px] leading-relaxed font-light mb-[32px]">
              Whether you need a new website, App, marketing campaign, SEO, or IoT
              created for your business, the key to making the project a success
              starts with having well-thought-out creative brief.{" "}
            </p>

            {/* Feature List */}
            <div className="space-y-[12px] mb-[48px]">
              {[
                "Custom Design & Development",
                "SEO Optimized Architecture",
                "Mobile-First Responsive Layouts",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-indigo-600 shrink-0"
                  />
                  <span className="text-[16px] text-[#475569] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto">
              {/* Trigger Button for Modal */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-[10px] px-[32px] py-[16px] rounded-xl bg-[#0F172A] text-white font-bold text-[16px] transition-all hover:bg-[#4F86E8] hover:shadow-lg hover:shadow-blue-500/20"
              >
                Get Started Free
                <ArrowRight size={18} />
              </button>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-[10px] px-[32px] py-[16px] rounded-xl bg-white border border-[#e2e8f0] text-[#0F172A] font-bold text-[16px] transition-all hover:border-[#0F172A]"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* --- Right Image --- */}
          <div className="hidden lg:flex flex-1 bg-indigo-50 border-l border-indigo-100 items-center justify-center p-[40px] relative overflow-hidden order-1 lg:order-2">
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

            {/* Image Container */}
            <div className="relative w-full h-full max-h-[500px] transition-transform duration-700 hover:scale-105 flex items-center justify-center">
              <Image
                src="/assets/images/website.png" // Dummy Path
                alt="Free Website Development"
                height={400}
                width={400}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Mobile Image (Visible only on mobile) */}
          <div className="lg:hidden h-[250px] w-full relative bg-indigo-50 border-b border-indigo-100 order-1">
            <Image
              src="/assets/images/website.png" // Dummy Path
              alt="Free Website Development"
              fill
              className="object-contain p-[40px]"
            />
          </div>
        </div>
      </div>

      {/* --- Modal Integration --- */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Claim Your Free Website"
        subtitle="Let's build something awesome together."
      />
    </section>
  );
}