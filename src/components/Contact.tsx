"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import LeadModal from "@/components/LeadModal";
import SectionHeader from "./common/SectionHeader2";

export default function UniversalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-32 relative overflow-hidden  font-sora">
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Badge */}
          <SectionHeader
            align="center" // Changed from 'centered'
            badge="Let's work together"
            color="blue" // Changed from 'badgeColor'
            title={
              <>
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">
                  Scale?
                </span>
              </>
            }
            description="Let's build something extraordinary together. Schedule a free consultation to discuss your vision."
          />

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex mt-10 items-center gap-3 bg-[#0F172A] text-white text-lg px-10 py-5 rounded-[2rem] shadow-2xl shadow-[#0F172A]/20 hover:shadow-[#4888E8]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Button Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4888E8] to-[#07b022] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="relative z-10 font-bold tracking-wide">
                Start Your Project
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <LeadModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
