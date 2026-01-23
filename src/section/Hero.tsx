"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import LeadModal from "@/components/forms/LeadModal"; // Importing your specific modal

// --- Data ---
const SERVICES = [
  "App Development",
  "Web Development",
  "Digital Marketing",
  "SEO Optimization",
  "Domain Hosting",
  "IoT Solutions",
];

// --- Internal Component: Animated Counter ---
const CountUp = ({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(ease * target));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Hero() {
  const [openModal, setOpenModal] = useState<null | "consult" | "analysis">(null);

  // --- Typewriter State ---
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // --- Typewriter Logic ---
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % SERVICES.length;
      const fullText = SERVICES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // --- Modal Logic ---
  const isConsult = openModal === "consult";
  const modalTitle = isConsult ? "Get Free Consultation" : "Request Website Analysis";
  const modalSubtitle = isConsult 
    ? "Let's discuss how we can help your business grow." 
    : "Get a detailed performance report of your current site.";

  return (
    <section className="relative w-full bg-[#FAF7F6] pt-[120px] pb-[80px] lg:pt-[120px] lg:pb-[120px] overflow-hidden font-sora">
      
      {/* Premium Background Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#4F86E8]/10 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#16A34A]/5 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          
          {/* --- Left Content --- */}
          <div className="flex flex-col items-start max-w-2xl order-2 lg:order-1">
            <h1 className="text-[42px] lg:text-[60px] leading-[1.1] font-extrabold tracking-tight text-[#0F172A] mb-[32px] opacity-0 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]">
              Is it <br />
              <span className="relative inline-block text-[#4F86E8]">
                {text}
                <span className="animate-pulse text-[#0F172A] font-light ml-1">|</span>
                <svg className="absolute -bottom-2 left-0 w-full h-[12px] text-[#16A34A]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              <br />
              you&apos;re looking for?
            </h1>

            <p className="text-[15px] lg:text-[15px] text-[#475569] leading-relaxed mb-[48px] font-light opacity-0 animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              Whether you need a new website, app, marketing campaign, SEO, IoT for your company, the key to success in the project is to have a creative and well thought out plan. Things at web is a world-class web agency. Why not start by testing your website for how good it is or create a free website to get started?
            </p>

            <div className="flex flex-col sm:flex-row gap-[16px] w-full sm:w-auto opacity-0 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:forwards]">
              <button
                onClick={() => setOpenModal("consult")}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0F172A] px-[32px] py-[16px] text-[16px] font-bold text-white transition-all hover:bg-[#4F86E8] hover:shadow-lg hover:shadow-[#4F86E8]/30 hover:-translate-y-1 active:scale-95"
              >
                Create Free Website
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setOpenModal("analysis")}
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#e2e8f0] bg-white px-[32px] py-[16px] text-[16px] font-bold text-[#0F172A] transition-all hover:border-[#0F172A] hover:bg-[#fafafa] active:scale-95"
              >
                <PlayCircle size={20} className="text-[#475569] group-hover:text-[#0F172A] transition-colors" />
                Free Website Analysis
              </button>
            </div>

            <div className="mt-[60px] pt-[30px] border-t border-[#e2e8f0] w-full flex flex-wrap gap-[30px] lg:gap-[60px] opacity-0 animate-fade-in-up [animation-delay:800ms] [animation-fill-mode:forwards]">
              <div>
                <p className="text-[32px] font-extrabold text-[#0F172A] tabular-nums">
                  <CountUp target={200} suffix="+" />
                </p>
                <p className="text-[14px] text-[#475569] font-medium mt-[4px]">Projects Delivered</p>
              </div>
              <div>
                <p className="text-[32px] font-extrabold text-[#0F172A] tabular-nums">
                  <CountUp target={98} suffix="%" />
                </p>
                <p className="text-[14px] text-[#475569] font-medium mt-[4px]">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-[32px] font-extrabold text-[#0F172A]">24/7</p>
                <p className="text-[14px] text-[#475569] font-medium mt-[4px]">Expert Support</p>
              </div>
            </div>
          </div>

          {/* --- Right Visual --- */}
          <div className="relative perspective-1000 w-full max-w-[420px] lg:max-w-[480px] mx-auto lg:mx-0 opacity-0 animate-fade-in-right [animation-delay:600ms] [animation-fill-mode:forwards] lg:pt-8 order-1 lg:order-2">
            <div className="relative rounded-[32px] bg-white p-[16px] shadow-2xl shadow-[#0F172A]/10 border border-[#e2e8f0] transform transition-transform duration-700 hover:rotate-y-2 hover:scale-[1.01] animate-float">
              <div className="relative rounded-[24px] overflow-hidden bg-[#FAF7F6] aspect-square group">
                <Image
                  src="./assets/images/hero.png"
                  alt="Digital Solutions"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent opacity-50" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[20px] bg-white/90 backdrop-blur-md border border-white shadow-xl flex items-center justify-between animate-bounce-slow">
                <div className="flex items-center gap-[12px]">
                  <div className="h-[40px] w-[40px] rounded-full bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#0F172A]">Digital Growth</p>
                    <p className="text-[12px] text-[#475569]">Guaranteed Results</p>
                  </div>
                </div>
                <div className="h-[32px] w-[32px] rounded-full border border-[#e2e8f0] flex items-center justify-center bg-white text-[#0F172A]">
                  <ArrowRight size={16} className="-rotate-45" />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-[24px] -right-[24px] w-full h-full rounded-[32px] border-2 border-dashed border-[#e2e8f0] hidden lg:block" />
          </div>
        </div>
      </div>

      {/* --- MODAL USAGE CORRECTED --- */}
      {/* We only pass what your LeadModal accepts: isOpen, onClose, title, subtitle */}
      {openModal && (
        <LeadModal
          isOpen={!!openModal}
          onClose={() => setOpenModal(null)}
          title={modalTitle}
          subtitle={modalSubtitle}
        />
      )}

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.3; } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-right { animation: fade-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-2 { transform: rotateY(2deg); }
      `}} />
    </section>
  );
}