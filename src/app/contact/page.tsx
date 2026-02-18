"use client";

import { useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Clock,
  ArrowRight
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader2";


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
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="font-sora py-[100px] lg:py-[140px] bg-[#FAF7F6] relative overflow-hidden" id="contact">
     
      <div className="container mx-auto px-4 sm:px-6 lg:px-[40px] relative z-10">
        
        {/* --- CUSTOM HEADER (Replaces SectionHeader) --- */}
        
<SectionHeader
  align="center"
  
  color="green" // This applies the Green gradient/shadow style
  title={
    <>
      Let's Start a <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4888E8] to-[#07b022]">
        Conversation
      </span>
    </>
  }
  description="Whether you have a question, a project idea, or just want to say hello, our team is ready to answer."
  className="max-w-3xl mx-auto mb-[60px]"
/>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- LEFT: CONTACT INFO CARD --- */}
          {/* Added a solid Blue border to frame this section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-[#0F172A] text-white p-8 lg:p-10 rounded-[32px] relative overflow-hidden shadow-2xl shadow-blue-900/10 border-l-8 border-[#4888E8] group">
              {/* Internal Gradient Mesh */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4888E8]/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#07b022] rounded-full"></span>
                  Contact Info
                </h3>
                
                <div className="space-y-8">
                  
                  {/* Address */}
                  <div className="flex items-start gap-5 group/item">
                    <div className="p-3 rounded-2xl bg-white/10 text-[#4888E8] shrink-0 border border-white/5 group-hover/item:bg-[#4888E8] group-hover/item:text-white transition-all duration-300 shadow-lg shadow-[#4888E8]/10">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Visit Us</p>
                      <p className="text-lg font-medium leading-relaxed text-slate-200">
                        Sockerbruksgatan 7<br />
                        53140 Lidköping, Sweden
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5 group/item">
                    <div className="p-3 rounded-2xl bg-white/10 text-[#4888E8] shrink-0 border border-white/5 group-hover/item:bg-[#4888E8] group-hover/item:text-white transition-all duration-300 shadow-lg shadow-[#4888E8]/10">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</p>
                      <a href="mailto:kontakt@thingsatweb.se" className="text-lg font-bold hover:text-[#4888E8] transition-colors break-all">
                        kontakt@thingsatweb.se
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-5 group/item">
                    <div className="p-3 rounded-2xl bg-white/10 text-[#07b022] shrink-0 border border-white/5 group-hover/item:bg-[#07b022] group-hover/item:text-white transition-all duration-300 shadow-lg shadow-[#07b022]/10">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Call Us</p>
                      <a href="tel:+46707770727" className="text-lg font-bold hover:text-[#07b022] transition-colors">
                        +46 70 777 07 27
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-transform hover:-translate-y-1 relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#07b022]"></div>
               <div className="h-14 w-14 rounded-2xl bg-[#07b022]/10 text-[#07b022] flex items-center justify-center shrink-0">
                  <Clock size={28} />
               </div>
               <div className="text-center sm:text-left">
                  <h4 className="font-bold text-xl text-[#0F172A] mb-1">Business Hours</h4>
                  <p className="text-slate-500 font-medium">Mon - Fri: 09:00 - 18:00</p>
               </div>
            </div>
          </div>

          {/* --- RIGHT: FORM --- */}
          {/* Added Green accent border to separate it from the blue card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 lg:p-12 rounded-[32px] shadow-2xl shadow-[#0F172A]/5 border border-slate-100 border-t-[8px] border-t-[#07b022] relative">
              
              {/* Form Header */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4888E8]/10 text-[#4888E8] text-xs font-bold uppercase tracking-wide mb-4">
                    <MessageSquare size={14} />
                    Send a Message
                </div>
                <h3 className="text-3xl font-black text-[#0F172A] mb-3">How can we help?</h3>
                <p className="text-slate-500 leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {isSuccess ? (
                // SUCCESS STATE
                <div className="bg-[#07b022]/5 border border-[#07b022]/20 rounded-[24px] p-12 text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-[#07b022] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0F172A] mb-2">Message Sent!</h4>
                  <p className="text-slate-500">Thank you for reaching out. We'll be in touch shortly.</p>
                </div>
              ) : (
                // FORM STATE
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-[#0F172A] ml-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#4888E8] focus:ring-4 focus:ring-[#4888E8]/10 outline-none transition-all placeholder:text-slate-400 font-medium text-[#0F172A]"
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
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#4888E8] focus:ring-4 focus:ring-[#4888E8]/10 outline-none transition-all placeholder:text-slate-400 font-medium text-[#0F172A]"
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
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#4888E8] focus:ring-4 focus:ring-[#4888E8]/10 outline-none transition-all placeholder:text-slate-400 font-medium text-[#0F172A]"
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
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#4888E8] focus:ring-4 focus:ring-[#4888E8]/10 outline-none transition-all placeholder:text-slate-400 font-medium text-[#0F172A] resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#4888E8]/30 transition-colors">
                    <div className="relative flex items-center pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleCheckbox}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-300 transition-all checked:border-[#4888E8] checked:bg-[#4888E8]"
                      />
                      <div className="pointer-events-none absolute top-1 left-0 w-5 h-5 flex items-center justify-center text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <CheckCircle2 size={14} />
                      </div>
                    </div>
                    <label htmlFor="consent" className="text-xs text-slate-500 cursor-pointer select-none leading-relaxed">
                      By checking this, you consent to allow <span className="font-bold text-[#0F172A]">ThingsAtWeb</span> to store and process the personal information submitted.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className={`w-full py-4 rounded-xl font-bold text-white shadow-xl shadow-[#4888E8]/20 flex items-center justify-center gap-3 transition-all
                      ${isSubmitting || !formData.consent 
                        ? "bg-slate-300 cursor-not-allowed shadow-none" 
                        : "bg-gradient-to-r from-[#4888E8] to-[#4F86E8] hover:to-[#07b022] hover:shadow-green-500/20 hover:-translate-y-1 active:scale-95"
                      }`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <ArrowRight size={20} />
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