"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  ChevronDown,
  X,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { services, type Service } from "@/components/data";

const EnquiryModal = ({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) => {
  if (!service) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Enquiry sent for ${service.title}!`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 transition-all  "
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl md:rounded-4xl bg-white shadow-2xl ring-1 ring-black/5 animate-modal-pop font-sora"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#2776ea] p-6 md:p-8 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Start a Project
            </h3>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-2 hover:bg-white/40 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <p className="mt-2 text-blue-50 text-xs md:text-sm opacity-90 font-medium">
            Consulting for{" "}
            <span className="font-bold underline decoration-[#76ea27]">
              {service.title}
            </span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-5 md:p-8 space-y-4 md:space-y-5"
        >
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 h-4 w-4 md:h-5 md:w-5 text-slate-300" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 pl-10 md:pl-12 p-3 md:p-3.5 text-sm md:text-base focus:border-[#2776ea] focus:ring-4 focus:ring-blue-50 outline-none transition font-medium text-slate-700"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 h-4 w-4 md:h-5 md:w-5 text-slate-300" />
                <input
                  type="email"
                  placeholder="company@email.com"
                  className="w-full rounded-xl border border-slate-200 pl-10 md:pl-12 p-3 md:p-3.5 text-sm md:text-base focus:border-[#2776ea] focus:ring-4 focus:ring-blue-50 outline-none transition font-medium text-slate-700"
                  required
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 h-4 w-4 md:h-5 md:w-5 text-slate-300" />
                <input
                  type="tel"
                  placeholder="+91.."
                  className="w-full rounded-xl border border-slate-200 pl-10 md:pl-12 p-3 md:p-3.5 text-sm md:text-base focus:border-[#2776ea] focus:ring-4 focus:ring-blue-50 outline-none transition font-medium text-slate-700"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
              Interested Service
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-3.5 h-4 w-4 md:h-5 md:w-5 text-slate-300 pointer-events-none" />
              <select
                defaultValue={service.id}
                className="w-full rounded-xl border border-slate-200 pl-10 md:pl-12 p-3 md:p-3.5 text-sm md:text-base focus:border-[#2776ea] focus:ring-4 focus:ring-blue-50 outline-none transition font-medium appearance-none bg-white text-slate-700 cursor-pointer"
                required
              >
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-4 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
              Requirement
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-3.5 h-4 w-4 md:h-5 md:w-5 text-slate-300" />
              <textarea
                rows={2}
                placeholder="Tell us about your goals.."
                className="w-full rounded-xl border border-slate-200 pl-10 md:pl-12 p-3 md:p-3.5 text-sm md:text-base focus:border-[#2776ea] focus:ring-4 focus:ring-blue-50 outline-none transition resize-none font-medium text-slate-700"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl md:rounded-2xl bg-[#2776ea] py-3.5 md:py-4 text-xs md:text-sm font-extrabold uppercase tracking-widest text-white shadow-xl shadow-blue-200 hover:bg-[#3a71c5] transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Send Inquiry
            <Send
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

const ServiceCard = ({
  service,
  isOpen,
  onToggle,
  onCtaClick,
  index,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
  onCtaClick: (service: Service) => void;
  index: number;
}) => {
  return (
    <div
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
      className="animate-on-load group relative overflow-hidden rounded-3xl md:rounded-[2.5rem] border border-slate-100 bg-white p-6 md:p-12 shadow-xl shadow-slate-200/50 transition-all duration-700 hover:shadow-2xl hover:shadow-[#2776ea]/10 hover:-translate-y-2 opacity-0 font-sora"
    >
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-50/50 blur-3xl transition-opacity group-hover:opacity-100 hidden md:block" />

      <div className="grid gap-8 md:gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
        <div className="flex flex-col h-full relative z-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
            <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-[#2776ea] text-white shadow-lg shadow-blue-100 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              {service.icon}
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5 md:mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27]" />
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#76ea27]">
                  {service.tagline}
                </p>
              </div>
              <h3 className="text-xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="mt-4 md:mt-8 text-slate-500 text-center sm:text-left leading-relaxed text-sm md:text-lg font-medium max-w-xl">
            {service.description}
          </p>

          <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8">
            {service.points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 group/point">
                <div className="flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-blue-50 text-[#2776ea] transition-colors group-hover/point:bg-[#76ea27] group-hover/point:text-white shrink-0">
                  <CheckCircle2 className="size={10} md:size={14} strokeWidth={4}" />
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-700">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 md:pt-12">
            <button
              onClick={onToggle}
              className="flex items-center justify-center cursor-pointer sm:justify-start w-full sm:w-auto gap-2 text-[13px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#2776ea] transition-colors"
            >
              The Stack
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-500  ${
                  isOpen ? "rotate-180 text-[#2776ea]" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] mt-4 md:mt-6 opacity-100"
                  : "grid-rows-[0fr] mt-0 opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-wrap gap-4 md:gap-6 justify-center sm:justify-start items-center rounded-xl md:rounded-2xl   p-4 md:p-6">
                  {service.technologies.map((t) => (
                    <img
                      key={t.name}
                      src={t.logo}
                      alt={t.name}
                      title={t.name}
                      className="h-6 md:h-8 w-auto "
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-10">
              <button
                onClick={() => onCtaClick(service)}
                className="group/btn relative w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl md:rounded-2xl bg-[#2776ea] px-8 md:px-10 py-3.5 md:py-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-2xl shadow-blue-200 transition-all hover:bg-[#76ea27]"
              >
                <span className="relative z-10">{service.cta}</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform group-hover/btn:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end order-first lg:order-last">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-100/40 to-green-100/20 rounded-full blur-2xl md:blur-3xl -z-10 animate-pulse" />
          <div className="relative p-2 md:p-4">
            <div className="absolute -inset-1 md:-inset-2 rounded-3xl md:rounded-4xl  " />
            <img
              src={service.image}
              alt={service.title}
              className="relative z-10 w-full max-w-45 md:max-w-[320px] object-contain animate-float drop-shadow-[0_10px_30px_rgba(72,136,232,0.15)] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HowWorks() {
  const [openTechId, setOpenTechId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main className="bg-white font-sora overflow-x-hidden">
      <section className="relative overflow-hidden py-20 md:py-36 bg-slate-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(72,136,232,0.05),transparent_25%),radial-gradient(circle_at_0%_100%,rgba(9,177,37,0.05),transparent_25%)]" />

        <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-12 md:mb-24 text-left max-w-4xl opacity-0 animate-card-entry">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
                Solutions & Services
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl flex flex-col items-center lg:items-start font-black tracking-tight text-slate-900 leading-[1.1]">
              Architecting the <br />
              <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
                Digital Future
              </span>
            </h2>
            <p className="text-sm md:text-xl text-center lg:text-start text-slate-500 leading-relaxed mt-5 max-w-2xl opacity-80">
              WEBRONIC transforms legacy challenges into competitive advantages
              using high-performance digital architectures.
            </p>
          </div>

          <div className="grid gap-10 md:gap-20">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isOpen={openTechId === service.id}
                onToggle={() =>
                  setOpenTechId(openTechId === service.id ? null : service.id)
                }
                onCtaClick={setSelectedService}
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
