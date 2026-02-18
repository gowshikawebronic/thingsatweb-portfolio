"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Send
} from "lucide-react";

// --- LINK CONFIGURATION ---
const SERVICE_LINKS = [
  { name: "Web Development", href: "/service?category=web-development" },
  { name: "App Development", href: "/service?category=app-development" },
  { name: "IoT Solutions", href: "/service?category=iot-solutions" },
  { name: "Cloud Services", href: "/service?category=cloud-services" },
  { name: "AI & Machine Learning", href: "/service?category=ai-machine-learning" },
  { name: "Digital Marketing", href: "/service?category=digital-marketing" },
];

const COMPANY_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Latest News", href: "/news" },
  { name: "Careers", href: "/careers" }, // Added placeholder
  { name: "Contact Support", href: "/contact" },
];

const LEGAL_LINKS = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://www.facebook.com/thingsatweb" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/thingsatweb/" },
  { icon: Instagram, href: "https://www.instagram.com/thingsatweb/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FAF7F6] pt-24 pb-12 overflow-hidden font-sora">
      
      {/* --- DESIGN ELEMENT: Left Accent Border (Matches the purple line in image, but Blue) --- */}
      <div className="absolute left-0 top-10 bottom-10 w-2 bg-[#4888E8] rounded-r-full hidden lg:block" />

      {/* --- DESIGN ELEMENT: Background Gradient Mesh --- */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-b from-[#4888E8]/5 to-transparent rounded-bl-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* --- COLUMN 1: BRAND & CTA (Matches Left side of image) --- */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-8 pr-8">
            <Link href="/" className="inline-block">
              <Image
                src="./assets/logo/thingsatweb.png"
                alt="ThingsAtWeb Logo"
                height={40}
                width={160}
                className="object-contain h-10 w-auto"
              />
            </Link>

            <h2 className="text-3xl font-black text-[#0F172A] leading-tight tracking-tight">
              Build Smarter <br />
              with <span className="text-[#4888E8]">ThingsAtWeb.</span>
            </h2>

            <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
              We help our clients to fulfill their vision, not just their requirement specifications.
            </p>

            {/* CTA Button (Matches "Unlock AI Copy" button in image) */}
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4888E8] hover:bg-[#07b022] text-white font-bold rounded-xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Send size={18} />
              Start a Project
            </Link>

            {/* Social Icons (Matches bottom left of image) */}
            <div className="flex items-center gap-3 pt-4">
              {SOCIAL_LINKS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* --- COLUMN 2: SERVICES --- */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-[#0F172A] mb-6">Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-500 hover:text-[#4888E8] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#07b022] transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: COMPANY --- */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-[#0F172A] mb-6">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-500 hover:text-[#4888E8] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 4: CONTACT & LEGAL --- */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-[#0F172A] mb-6">Contact & Legal</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#4888E8] shrink-0 mt-0.5" />
                <div className="text-sm text-slate-500 font-medium">
                  <p>Sockerbruksgatan 7</p>
                  <p>53140 Lidköping, Sweden</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#4888E8] shrink-0" />
                <a href="mailto:kontakt@thingsatweb.se" className="text-sm text-slate-500 hover:text-[#0F172A] font-medium transition-colors">
                  kontakt@thingsatweb.se
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#4888E8] shrink-0" />
                <a href="tel:+46707770727" className="text-sm text-slate-500 hover:text-[#0F172A] font-medium transition-colors">
                  +46 70 777 07 27
                </a>
              </div>
            </div>

            {/* Legal Links (Mini list) */}
            <div className="flex flex-col gap-2">
               {LEGAL_LINKS.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.href}
                    className="text-xs font-bold text-slate-400 hover:text-[#4888E8] uppercase tracking-wide transition-colors"
                  >
                    {item.name}
                  </Link>
               ))}
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} ThingsAtWeb AB. All Rights Reserved.
          </p>
          
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-[#4888E8]" />
             <div className="w-2 h-2 rounded-full bg-[#07b022]" />
             <div className="w-2 h-2 rounded-full bg-[#0F172A]" />
          </div>
        </div>

      </div>
    </footer>
  );
}