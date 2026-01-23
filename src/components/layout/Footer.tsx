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
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Changed to bg-slate-50 for a subtle light theme
    <footer className="bg-[#FAF7F6] text-slate-600 font-sora pt-24 pb-12 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Decor (Subtle Blue Fade) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(39,118,234,0.03)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Company Info */}
          <div className="space-y-8">
            
            {/* --- LOGO ONLY (Clickable) --- */}
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image 
                src="/assets/logo/thingsatweb.png" 
                alt="ThingsAtWeb Logo" 
                height={130} 
                width={130}
                className="object-contain" 
              />
            </Link>
            {/* --------------------------- */}

            <p className="text-slate-500 leading-relaxed font-medium text-sm max-w-xs">
              "We help our clients to fulfill their vision not just their requirement specifications."
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/thingsatweb" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/thingsatweb/" },
                { icon: Instagram, href: "https://www.instagram.com/thingsatweb/" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  // Updated hover styles for light theme
                  className="h-10 w-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-500 hover:bg-[#2776ea] hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center gap-2 text-slate-900">
              Sitemap
              <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea]" />
            </h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Services",
                "Contact",
                "News",
                "Terms and Conditions",
                "Privacy Policy"
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    href="#" 
                    className="text-sm font-medium text-slate-500 hover:text-[#2776ea] hover:translate-x-1 transition-all flex items-center  gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-[#76ea27] transition-opacity" />
                    <span className="group-hover:ml-0 -ml-6 transition-all">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center gap-2 text-slate-900">
              Useful Links
              <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea]" />
            </h4>
            <ul className="space-y-4">
              {[
                "IoT Solutions",
                "Web Development",
                "App Development",
                "Domain & Hosting",
                "Search Engine Optimization",
                "Digital Marketing"
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    href="#" 
                    className="text-sm font-medium text-slate-500 hover:text-[#2776ea] hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-[#76ea27] transition-opacity" />
                    <span className="group-hover:ml-0 -ml-6 transition-all">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address & Contact */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center gap-2 text-slate-900">
              Address
              <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea]" />
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#2776ea] shadow-sm">
                  <MapPin size={16} />
                </div>
                <div className="text-sm text-slate-500 leading-relaxed font-medium">
                  <p>Sockerbruksgatan 7</p>
                  <p>53140 Lidköping</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#2776ea] shadow-sm">
                  <Mail size={16} />
                </div>
                <a href="mailto:kontakt@thingsatweb.se" className="text-sm text-slate-500 hover:text-[#2776ea] transition-colors font-medium">
                  kontakt@thingsatweb.se
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#2776ea] shadow-sm">
                  <Phone size={16} />
                </div>
                <a href="tel:+46707770727" className="text-sm text-slate-500 hover:text-[#2776ea] transition-colors font-medium">
                  +46 70 777 07 27
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
          <p>© {currentYear} ThingsAtWeb AB. All Rights Reserved.</p>
          <div className="flex gap-6">
            
          </div>
        </div>

      </div>
    </footer>
  );
}