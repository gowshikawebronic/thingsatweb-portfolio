"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Menu, X, Globe } from "lucide-react";

// --- Data Configuration ---
const SERVICES = [
  { name: "All Services", href: "/services" },
  { name: "Web Development", href: "/service?category=web-development" },
  { name: "AI & ML", href: "/service?category=ai-machine-learning" },
  { name: "Cloud Services", href: "/service?category=cloud-services" },
  { name: "Digital Transformation", href: "/service?category=digital-transformation" },
  { name: "DevOps", href: "/service?category=devops" },
  { name: "IoT Solutions", href: "/service?category=iot-solutions" },
  { name: "Data Analytics", href: "/service?category=data-analytics" },
];

const PRODUCTS = [
  { name: "All Products", href: "/product" },
 
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Desktop States
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Mobile States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
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

  return (
    <>
      <header
        className={`
          fixed left-1/2 -translate-x-1/2 z-[999] 
          top-5
          w-[92%] max-w-7xl 
          rounded-[20px]
          transition-all duration-300 ease-in-out
          
          ${scrolled 
            ? "bg-white/10 backdrop-blur-[25px] border border-white/20 shadow-sm ring-1 ring-black/5" 
            : "bg-transparent border border-transparent shadow-none"
          }
        `}
      >
        <div className="flex items-center justify-between px-4 py-2 relative">
          {/* LOGO */}
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

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <ul className="flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-slate-700">
              <li>
                <Link href="/" className="hover:text-primary-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-blue transition-colors">
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
                  href="/service"
                  className="flex items-center gap-1 hover:text-primary-blue transition-colors"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-primary-blue" : ""}`}
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
                        href={service.href}
                        label={service.name}
                      />
                    ))}
                  </ul>
                </div>
              </li>

              {/* Products Dropdown */}
              <li
                className="relative group h-full py-2"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href="/products"
                  className="flex items-center gap-1 hover:text-primary-blue transition-colors"
                >
                  Products
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${productsOpen ? "rotate-180 text-primary-blue" : ""}`}
                  />
                </Link>

                <div className="absolute top-full left-0 h-6 w-full" />
                <div
                  className={`absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 w-64 rounded-2xl border border-white/50 bg-white/95 backdrop-blur-xl p-2 shadow-2xl ring-1 ring-black/5 transition-all duration-200 origin-top ${
                    productsOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <ul className="flex flex-col gap-1">
                    {PRODUCTS.map((product, index) => (
                      <DropdownItem
                        key={index}
                        href={product.href}
                        label={product.name}
                      />
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link href="/news" className="hover:text-primary-blue transition-colors">
                  News
                </Link>
              </li>

              {/* Language Selector (Desktop) */}
              <li
                className="relative py-2"
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
              >
                <button className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium  cursor-pointer transition-colors">
                  <Image
                    src="./assets/logo/america.png"
                    alt="EN"
                    width={20}
                    height={20}
                    className=" object-cover"
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
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-blue transition-colors"
                  >
                    <Image
                      src="./assets/logo/sweden.png"
                      alt="SV"
                      width={20}
                      height={20}
                      className=" object-cover"
                    />
                    Swedish
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-brand-green px-6 py-2.5 text-sm font-bold text-white transition-all  hover:bg-[#4F86E8] active:scale-95"
            >
              Let’s Talk
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden block">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/50 backdrop-blur-md hover:bg-white/80 text-slate-900 transition-colors shadow-sm"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
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
                className="block p-3 rounded-xl hover:bg-slate-50 text-base font-bold text-slate-800 hover:text-primary-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Mobile Services */}
            <li className="rounded-xl overflow-hidden bg-slate-50/50 mb-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between p-3 rounded-xl text-base font-bold text-slate-800 hover:text-primary-blue"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary-blue" : ""}`}
                />
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col gap-1 pl-2 pr-2 pb-2">
                  {SERVICES.map((service, index) => (
                    <MobileLink
                      key={index}
                      href={service.href}
                      label={service.name}
                      closeMenu={() => setIsMobileMenuOpen(false)}
                    />
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile Products */}
            <li className="rounded-xl overflow-hidden bg-slate-50/50 mb-1">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex w-full items-center justify-between p-3 rounded-xl text-base font-bold text-slate-800 hover:text-primary-blue"
              >
                Products
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180 text-primary-blue" : ""}`}
                />
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileProductsOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col gap-1 pl-2 pr-2 pb-2">
                  {PRODUCTS.map((product, index) => (
                    <MobileLink
                      key={index}
                      href={product.href}
                      label={product.name}
                      closeMenu={() => setIsMobileMenuOpen(false)}
                    />
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/news"
                className="block p-3 rounded-xl hover:bg-slate-50 text-base font-bold text-slate-800 hover:text-primary-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
            </li>

            {/* Mobile Language (Fixed) */}
            <li className="mt-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex w-full items-center justify-between p-3 text-base font-medium text-slate-600"
              >
                <div className="flex items-center gap-3">
                  <Image src="./assets/logo/america.png" alt="US" width={24} height={24}  />
                  English
                </div>
                <ChevronDown size={18} className={`transition-transform duration-300 ${mobileLangOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Added Dropdown for Mobile Language */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileLangOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                 <Link
                    href="/lang/sv"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 ml-4 rounded-xl text-sm font-medium text-slate-600 hover:text-primary-blue hover:bg-slate-50"
                  >
                    <Image src="./assets/logo/sweden.png" alt="SV" width={24} height={24}  />
                    Swedish
                  </Link>
              </div>
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

// --- Sub-Components ---

function DropdownItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-blue transition-all"
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
        className="block py-2.5 px-4 rounded-lg text-sm font-medium text-slate-500 hover:bg-white hover:text-primary-blue hover:shadow-sm transition-all"
      >
        {label}
      </Link>
    </li>
  );
}