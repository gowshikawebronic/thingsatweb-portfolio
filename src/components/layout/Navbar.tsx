"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

// --- Data ---
const SERVICES = [
  "App Development",
  "Web Development",
  "Digital Marketing",
  "SEO Optimization",
  "Domain Hosting",
  "IoT Solutions",
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // State for Desktop Dropdowns
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // State for Mobile Accordions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* --- Floating Pill Header --- */}
      <header 
        className={`
          fixed left-1/2 -translate-x-1/2 z-50 
          mx-auto w-full top-5 transition-all duration-500 ease-in-out
          
          /* Visual Style */
          rounded-[30px] bg-white/60 backdrop-blur-[25px] border border-white/40 shadow-lg ring-1 ring-black/5
          
          /* Specific Widths */
          lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] 
          sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[350px]
          max-[400px]:max-w-[350px]
          
          ${scrolled ? "shadow-xl bg-white/80" : ""}
        `}
      >
        <div className="flex items-center justify-between px-3 py-2.5 relative">
          
          {/* --- Logo (Left) --- */}
          <Link href="/" className="relative z-50 flex shrink-0 items-center pl-2">
            <Image
              src="/assets/logo/thingsatweb.png"
              alt="ThingsAtWeb Logo"
              width={120}
              height={35}
              priority
              className="h-auto w-auto object-contain"
            />
          </Link>

          {/* --- Desktop Navigation (Center) --- */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <ul className="flex items-center gap-6 text-[15px] font-medium text-slate-700">
              <li>
                <Link href="/" className="hover:text-brand-green transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-brand-green transition-colors">
                  About Us
                </Link>
              </li>

              {/* Services Dropdown */}
              <li 
                className="relative group h-full py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link 
                  href="/services" 
                  className="flex items-center gap-1 hover:text-brand-green transition-colors"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-brand-green" : ""}`}
                  />
                </Link>

                {/* Invisible Bridge */}
                <div className="absolute top-full left-0 h-6 w-full" />

                {/* Animated Dropdown Panel */}
                <div 
                  className={`absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 w-64 rounded-2xl border border-white/50 bg-white/90 backdrop-blur-xl p-2 shadow-2xl ring-1 ring-black/5 transition-all duration-200 origin-top ${
                    servicesOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <ul className="flex flex-col gap-1">
                    {SERVICES.map((service, index) => (
                      <DropdownItem key={index} href={`/services/${service.toLowerCase().replace(/ /g, '-')}`} label={service} />
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link href="/news" className="hover:text-brand-green transition-colors">
                  News
                </Link>
              </li>

              {/* Language Selector Desktop */}
              <li 
                className="relative py-2"
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
              >
                <button 
                  className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium hover:bg-black/5 transition-colors"
                >
                  <Image
                    src="/assets/logo/america.png"
                    alt="EN"
                    width={18}
                    height={18}
                    className="rounded-full object-cover"
                  />
                  English
                  <ChevronDown size={12} className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
                </button>

                <div className="absolute top-full left-0 h-4 w-full" />

                <div 
                  className={`absolute top-[calc(100%+0.5rem)] right-0 w-32 rounded-xl border border-white/50 bg-white/90 backdrop-blur-xl p-1.5 shadow-xl ring-1 ring-black/5 transition-all duration-200 origin-top-right ${
                    langOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    href="/lang/sv"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-green transition-colors"
                  >
                    <Image src="/assets/logo/sweden.png" alt="SV" width={18} height={18} className="rounded-full object-cover" />
                    Swedish
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* --- Right Actions (CTA) --- */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 pr-1">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-brand-green px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-green/20 transition-all hover:scale-105 hover:bg-[#4F86E8] active:scale-95"
            >
              Let’s Talk
            </Link>
          </div>

          {/* --- UPDATED: Mobile Menu Button (Reference Style) --- */}
          <div className="lg:hidden block">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-hamburger flex flex-col gap-[5px] size-10 bg-slate-100 hover:bg-slate-200 rounded-full items-center justify-center cursor-pointer transition-colors"
            >
              <span className="sr-only">Menu</span>
              <span className={`block w-5 h-0.5 bg-slate-800 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-slate-800 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-slate-800 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* --- UPDATED: Mobile Menu (Floating Card Style) --- */}
        <div 
          className={`
            absolute top-[calc(100%+10px)] left-0 w-full 
            bg-white/95 backdrop-blur-xl border border-white/40 
            rounded-[20px] p-4 shadow-2xl overflow-hidden
            transition-all duration-300 ease-in-out origin-top
            ${isMobileMenuOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}
          `}
        >
          <ul className="flex flex-col gap-2">
            <li>
              <Link 
                href="/" 
                className="block p-3 rounded-xl hover:bg-slate-50 text-lg font-medium text-slate-700 hover:text-brand-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link 
                href="/about" 
                className="block p-3 rounded-xl hover:bg-slate-50 text-lg font-medium text-slate-700 hover:text-brand-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>

            {/* Mobile Services Accordion */}
            <li className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-lg font-medium text-slate-700 hover:text-brand-green transition-colors"
              >
                Services
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="flex flex-col gap-1 pl-4 pb-2">
                  {SERVICES.map((service, index) => (
                     <MobileLink key={index} href={`/services/${service.toLowerCase()}`} label={service} closeMenu={() => setIsMobileMenuOpen(false)} />
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link 
                href="/news" 
                className="block p-3 rounded-xl hover:bg-slate-50 text-lg font-medium text-slate-700 hover:text-brand-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
            </li>

            {/* Mobile Language */}
            <li>
               <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex w-full items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-lg font-medium text-slate-700 hover:text-brand-green transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Image src="/assets/logo/america.png" alt="US" width={20} height={14} className="rounded-sm" />
                  English
                </div>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${mobileLangOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div className={`transition-all duration-300 overflow-hidden ${mobileLangOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                 <Link
                  href="/lang/sv"
                  className="flex items-center gap-3 p-3 pl-6 rounded-xl hover:bg-slate-50 text-base text-slate-600 hover:text-brand-green"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image src="/assets/logo/sweden.png" alt="SV" width={20} height={14} className="rounded-sm" />
                  Swedish
                </Link>
              </div>
            </li>

            {/* Mobile CTA */}
            <li className="mt-4 pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 font-bold text-white shadow-lg transition-all active:scale-95"
              >
                Let’s Talk
                <ArrowRight size={18} />
              </Link>
            </li>
          </ul>
        </div>

      </header>
    </>
  );
}

/* Helper Component for Desktop Dropdown Item */
function DropdownItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-green transition-all"
      >
        {label}
      </Link>
    </li>
  );
}

/* Helper Component for Mobile Links */
function MobileLink({ href, label, closeMenu }: { href: string; label: string; closeMenu: () => void }) {
  return (
    <li>
      <Link 
        href={href} 
        onClick={closeMenu} 
        className="block py-2 px-3 text-base text-slate-500 hover:text-brand-green transition-colors"
      >
        {label}
      </Link>
    </li>
  );
}