"use client";

import { useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Clock
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return alert("Please agree to the privacy policy.");
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", phone: "", email: "", message: "", consent: false });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="font-sora py-[130px] lg:py-[140px] bg-[#FAF7F6] relative overflow-hidden" id="contact">
      
      {/* --- BACKGROUND THEME --- */}
      {/* 1. Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      
      {/* 2. Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#2776ea]/5 rounded-full blur-[80px] lg:blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#16A34A]/5 rounded-full blur-[80px] lg:blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-[40px] relative z-10">
        
        {/* --- Header --- */}
        <SectionHeader 
            badge="Get In Touch"
            title="Let's Start a Conversation"
            description="Whether you have a question, a project idea, or just want to say hello, our team is ready to answer."
            centered={true}
            className="mb-[40px] lg:mb-[60px]"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- LEFT: CONTACT INFO CARD --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Main Info Card */}
            <div className="bg-[#0F172A] text-white p-8 lg:p-10 rounded-[24px] lg:rounded-[32px] relative overflow-hidden shadow-2xl shadow-blue-900/20 group">
              {/* Decor */}
              <div className="absolute top-0 right-0 w-48 lg:w-64 h-48 lg:h-64 bg-[#2776ea]/20 rounded-full blur-[60px] lg:blur-[80px] pointer-events-none group-hover:bg-[#2776ea]/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-black mb-6 lg:mb-8">Contact Info</h3>
                
                <div className="space-y-6 lg:space-y-8">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4 lg:gap-5 group/item">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#2776ea] shrink-0 group-hover/item:bg-[#2776ea] group-hover/item:text-white transition-all duration-300">
                      <MapPin size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Visit Us</p>
                      <p className="text-base lg:text-lg font-medium leading-relaxed text-slate-200">
                        Sockerbruksgatan 7<br />
                        53140 Lidköping, Sweden
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 lg:gap-5 group/item">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#4F86E8] shrink-0 group-hover/item:bg-[#4F86E8] group-hover/item:text-white transition-all duration-300">
                      <Mail size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</p>
                      <a href="mailto:kontakt@thingsatweb.se" className="text-base lg:text-lg font-bold hover:text-[#4F86E8] transition-colors break-all">
                        kontakt@thingsatweb.se
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 lg:gap-5 group/item">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#16A34A] shrink-0 group-hover/item:bg-[#16A34A] group-hover/item:text-white transition-all duration-300">
                      <Phone size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Call Us</p>
                      <a href="tel:+46707770727" className="text-base lg:text-lg font-bold hover:text-[#16A34A] transition-colors">
                        +46 70 777 07 27
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Support Note / Mini Card */}
            <div className="bg-white p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 transition-transform hover:-translate-y-1 text-center sm:text-left">
               <div className="h-12 w-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                  <Clock size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-[#0F172A] mb-1">Business Hours</h4>
                  <p className="text-slate-500 text-sm">Mon - Fri: 09:00 - 18:00</p>
               </div>
            </div>
          </div>

          {/* --- RIGHT: FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-8 lg:p-12 rounded-[24px] lg:rounded-[32px] shadow-2xl shadow-[#0F172A]/5 border border-[#e2e8f0] relative">
              
              {/* Form Header */}
              <div className="mb-8 lg:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2776ea] text-xs font-bold uppercase tracking-wide mb-4">
                    <MessageSquare size={14} />
                    Send a Message
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-[#0F172A] mb-3 lg:mb-4">How can we help?</h3>
                <p className="text-[#475569] leading-relaxed text-sm lg:text-base">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {isSuccess ? (
                // SUCCESS STATE
                <div className="bg-[#16A34A]/5 border border-[#16A34A]/20 rounded-[24px] p-8 lg:p-12 text-center animate-fade-in-up">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#16A34A] text-white rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-xl shadow-green-500/30">
                    <CheckCircle2 size={32} className="lg:w-10 lg:h-10" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-[#0F172A] mb-2">Message Sent!</h4>
                  <p className="text-[#475569] text-sm lg:text-base">Thank you for reaching out. We'll be in touch shortly.</p>
                </div>
              ) : (
                // FORM STATE
                <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                  <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-[#0F172A] ml-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 lg:px-5 py-3 lg:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2776ea] focus:ring-4 focus:ring-[#2776ea]/10 outline-none transition-all placeholder:text-slate-400 font-medium text-[#0F172A]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-[#0F172A] ml-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 lg:px-5 py-3 lg:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2776ea] focus:ring-4 focus:ring-[#2776ea]/10 outline-none transition-all placeholder:text-slate-400 font-medium text-[#0F172A]"
                        placeholder="+46..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-[#0F172A] ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 lg:px-5 py-3 lg:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2776ea] focus:ring-4 focus:ring-[#2776ea]/10 outline-none transition-all placeholder:text-slate-400 font-medium text-[#0F172A]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-[#0F172A] ml-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 lg:px-5 py-3 lg:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2776ea] focus:ring-4 focus:ring-[#2776ea]/10 outline-none transition-all placeholder:text-slate-400 font-medium text-[#0F172A] resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 p-3 lg:p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#2776ea]/30 transition-colors">
                    <div className="relative flex items-center pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleCheckbox}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-300 transition-all checked:border-[#2776ea] checked:bg-[#2776ea]"
                      />
                      <div className="pointer-events-none absolute top-1 left-0 w-5 h-5 flex items-center justify-center text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <CheckCircle2 size={14} />
                      </div>
                    </div>
                    <label htmlFor="consent" className="text-xs text-slate-500 cursor-pointer select-none leading-relaxed">
                      By checking this, you consent to allow <span className="font-bold text-slate-700">ThingsAtWeb</span> to store and process the personal information submitted to provide you the content requested.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className={`w-full py-3 lg:py-4 rounded-xl font-bold text-white shadow-xl flex items-center justify-center gap-3 transition-all
                      ${isSubmitting || !formData.consent 
                        ? "bg-slate-300 cursor-not-allowed shadow-none" 
                        : "bg-[#0F172A] hover:bg-[#2776ea] hover:shadow-blue-500/20 hover:-translate-y-1 active:scale-95"
                      }`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}