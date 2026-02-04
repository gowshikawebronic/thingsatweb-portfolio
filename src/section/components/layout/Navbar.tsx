"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

// --- Updated Services Data ---
const SERVICES = [
  "All Services",
  "Web Development",
  "Cloud Services",
  "DevOps",
  "Data Analytics",
  "AI and ML",
  "Digital Transformation",
  "IoT Solutions",
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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

  // Helper to create slugs: "AI and ML" -> "ai-and-ml"
  const getSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <header
        className={`
          fixed left-1/2 -translate-x-1/2 z-[999] 
          mx-auto top-5 transition-all duration-500 ease-in-out
          w-[92%] max-w-7xl 
          rounded-[30px] border border-white/40 shadow-lg ring-1 ring-black/5
          backdrop-blur-[25px]
          ${scrolled ? "bg-white/90 shadow-xl" : "bg-white/70"}
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 relative">
          <Link href="/" className="relative z-50 flex shrink-0 items-center">
            <Image
              src="./assets/logo/thingsatweb.png"
              alt="ThingsAtWeb Logo"
              width={140}
              height={40}
              priority
              className="h-8 w-auto md:h-9 object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-slate-700">
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
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-brand-green" : ""}`}
                  />
                </Link>

                <div className="absolute top-full left-0 h-6 w-full" />

                <div
                  className={`absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 w-64 rounded-2xl border border-white/50 bg-white/95 backdrop-blur-xl p-2 shadow-2xl ring-1 ring-black/5 transition-all duration-200 origin-top ${
                    servicesOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <ul className="flex flex-col gap-1">
                    {SERVICES.map((service, index) => (
                      <DropdownItem
                        key={index}
                        // If it's "All Services", link to /services, otherwise link to the slug
                        href={service === "All Services" ? "/services" : `/services/${getSlug(service)}`}
                        label={service}
                      />
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link href="/product" className="hover:text-brand-green transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-brand-green transition-colors">
                  News
                </Link>
              </li>

              <li
                className="relative py-2"
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
              >
                <button className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium hover:bg-black/5 transition-colors">
                  <Image
                    src="./assets/logo/america.png"
                    alt="EN"
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                  <span className="hidden xl:inline">English</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className="absolute top-full left-0 h-4 w-full" />
                <div
                  className={`absolute top-[calc(100%+0.5rem)] right-0 w-40 rounded-xl border border-white/50 bg-white/95 backdrop-blur-xl p-1.5 shadow-xl ring-1 ring-black/5 transition-all duration-200 origin-top-right ${
                    langOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    href="/lang/sv"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-green transition-colors"
                  >
                    <Image
                      src="./assets/logo/sweden.png"
                      alt="SV"
                      width={20}
                      height={20}
                      className="rounded-full object-cover"
                    />
                    Swedish
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-brand-green px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-green/20 transition-all hover:scale-105 hover:bg-[#4F86E8] active:scale-95"
            >
              Let’s Talk
            </Link>
          </div>

          <div className="lg:hidden block">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            absolute top-[calc(100%+12px)] left-0 w-full 
            bg-white/95 backdrop-blur-2xl border border-white/40 
            rounded-[24px] p-2 shadow-2xl 
            origin-top transition-all duration-300 ease-in-out
            max-h-[85vh] overflow-y-auto
            ${isMobileMenuOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}
          `}
        >
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <Link
                href="/"
                className="block p-3 rounded-xl hover:bg-slate-50 text-base font-bold text-slate-800 hover:text-brand-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="rounded-xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between p-3 rounded-xl text-base font-bold text-slate-800 hover:text-brand-green"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-brand-green" : ""}`}
                />
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col gap-1 pl-2 pr-2 pb-2">
                  {SERVICES.map((service, index) => (
                    <MobileLink
                      key={index}
                      href={service === "All Services" ? "/services" : `/services/${getSlug(service)}`}
                      label={service}
                      closeMenu={() => setIsMobileMenuOpen(false)}
                    />
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/news"
                className="block p-3 rounded-xl hover:bg-slate-50 text-base font-bold text-slate-800 hover:text-brand-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
            </li>
            <li className="mt-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex w-full items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-base font-medium text-slate-600"
              >
                <div className="flex items-center gap-3">
                  <Image src="./assets/logo/america.png" alt="US" width={24} height={24} className="rounded-full" />
                  English
                </div>
                <ChevronDown size={18} className={`transition-transform duration-300 ${mobileLangOpen ? "rotate-180" : ""}`} />
              </button>
            </li>
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-4 font-bold text-white shadow-lg"
              >
                Let’s Talk <ArrowRight size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

function DropdownItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-green transition-all"
      >
        {label}
      </Link>
    </li>
  );
}

function MobileLink({ href, label, closeMenu }: { href: string; label: string; closeMenu: () => void }) {
  return (
    <li>
      <Link
        href={href}
        onClick={closeMenu}
        className="block py-2.5 px-4 rounded-lg text-sm font-medium text-slate-500 hover:bg-white hover:text-brand-green hover:shadow-sm transition-all"
      >
        {label}
      </Link>
    </li>
  );
}