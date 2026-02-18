"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Send, 
  MessageSquare 
} from "lucide-react";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
};

export default function LeadModal({ 
  isOpen, 
  onClose,
  title = "Get Free Consultation", 
  subtitle = "Let's discuss how we can help your business grow."
}: LeadModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // --- FIX: Scroll Locking Logic ---
  // Separated this to ensure it always cleans up, even if the component crashes or unmounts.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // CLEANUP FUNCTION: This runs when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // --- Animation Logic ---
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      setShouldRender(true);
      // Small delay to allow the DOM to mount before fading in
      timer = setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      // Wait for the fade-out animation (300ms) before unmounting
      timer = setTimeout(() => setShouldRender(false), 300);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    // Delay calling the parent onClose until animation finishes
    setTimeout(onClose, 300);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
        isVisible ? "bg-slate-900/60 backdrop-blur-sm opacity-100" : "bg-transparent opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-lg transform rounded-[30px] bg-white shadow-2xl ring-1 ring-black/5 transition-all duration-300 ease-out mx-4 ${
          isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"
        }`}
      >
        {/* --- Header --- */}
        <div className="relative border-b border-slate-100 px-8 py-6">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
              <MessageSquare size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
              <p className="text-[15px] leading-relaxed text-slate-500 mt-1">{subtitle}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="absolute right-6 top-6 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* --- Form Content --- */}
        <div className="p-8 pt-6">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Input */}
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <User size={20} />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2776ea]"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2776ea]"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Phone size={20} />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2776ea]"
              />
            </div>

            {/* Website Input */}
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Globe size={20} />
              </div>
              <input
                type="text"
                placeholder="Website URL (Optional)"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2776ea]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full py-4 font-bold text-white transition-all bg-[#0F172A] hover:bg-[#2776ea] shadow-xl hover:shadow-[#2776ea]/20 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Submit Request</span>
              <Send size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs font-medium text-slate-400 mt-6">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}