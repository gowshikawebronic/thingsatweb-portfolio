"use client";

import React, { useState, useEffect, isValidElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  LayoutGrid, 
} from "lucide-react";

// --- FIX: Correct Import from the file we just updated ---
import { productData } from "@/AllData/products/PRODUCT_DATA";

// --- Data Configuration ---
const SERVICES = [
  { name: "All Services", href: "/services", icon: LayoutGrid },
  { name: "Web Development", href: "/service?category=web-development" },
  { name: "AI & ML", href: "/service?category=ai-machine-learning" },
  { name: "Cloud Services", href: "/service?category=cloud-services" },
  { name: "Digital Transformation", href: "/service?category=digital-transformation" },
  { name: "DevOps", href: "/service?category=devops" },
  { name: "IoT Solutions", href: "/service?category=iot-solutions" },
  { name: "Data Analytics", href: "/service?category=data-analytics" },
];

// --- FIX: Correct Mapping Logic ---
const PRODUCT_ITEMS = [
  { name: "All Products", href: "/products", icon: LayoutGrid },
  ...productData.map((product) => ({
    name: product.name,
    href: product.id === "storetech" 
      ? "/product?category=storetech" 
      : `/products#${product.id}`,
    icon: product.icon 
  })),
];  

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop Dropdown States
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Mobile Dropdown States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Text color based on scroll state
  const textColor = isScrolled ? "text-slate-700" : "text-slate-700";
  const hoverColor = isScrolled ? "hover:text-[#007AFF]" : "hover:text-[#007AFF]";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-[999] flex justify-center px-4"
    >
      <nav
        className={`
          flex items-center px-6 py-3 rounded-full transition-all duration-300 ease-in-out relative
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg w-[95%] md:w-[85%] lg:w-[75%] justify-between ' 
            : 'bg-transparent w-full md:w-[90%] justify-between'
          }
        `}
      >
        {/* --- LOGO --- */}
        <Link href="/" className="relative z-50 flex shrink-0 items-center gap-2 group">
           <div className={`relative h-8 w-auto transition-all duration-300`}>
             <Image
                src="./assets/logo/thingsatweb.png"
                alt="ThingsAtWeb Logo"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
                priority
             />
           </div>
        </Link>

        {/* --- DESKTOP NAV LINKS --- */}
        <div className={`hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium transition-colors duration-300 ${textColor}`}>
          <Link href="/" className={`relative group transition-colors ${hoverColor}`}>
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00CC66] transition-all group-hover:w-full" />
          </Link>

          <Link href="/about" className={`relative group transition-colors ${hoverColor}`}>
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00CC66] transition-all group-hover:w-full" />
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative group h-full py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/service" className={`flex items-center gap-1 relative group transition-colors ${hoverColor}`}>
              Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00CC66] transition-all group-hover:w-full" />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-72 rounded-2xl bg-white border border-slate-100 shadow-xl p-2 ring-1 ring-black/5"
                >
                  <ul className="flex flex-col gap-1">
                    {SERVICES.map((service, index) => (
                      <DropdownItem key={index} href={service.href} label={service.name} icon={service.icon} />
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Dropdown */}
          <div 
            className="relative group h-full py-2"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link href="/products" className={`flex items-center gap-1 relative group transition-colors ${hoverColor}`}>
              Products
              <ChevronDown size={14} className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`} />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00CC66] transition-all group-hover:w-full" />
            </Link>

             <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-72 rounded-2xl bg-white border border-slate-100 shadow-xl p-2 ring-1 ring-black/5"
                >
                   <ul className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {PRODUCT_ITEMS.map((product, index) => (
                      <DropdownItem key={index} href={product.href} label={product.name} icon={product.icon} />
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
           <Link href="/news" className={`relative group transition-colors ${hoverColor}`}>
            News
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00CC66] transition-all group-hover:w-full" />
          </Link>
        </div>

        {/* --- ACTIONS (Lang + CTA) --- */}
        <div className="hidden lg:flex items-center gap-4">
            {/* Language */}
            <div 
                className="relative" 
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
            >
                <button className={`flex items-center gap-2 transition-colors ${textColor} ${hoverColor}`}>
                      <Image 
                        src="./assets/logo/america.png" 
                        alt="US Flag" 
                        width={20} 
                        height={20} 
                        className="rounded-full object-cover w-5 h-5"
                      />
                      <span className="text-xs font-medium uppercase">English</span>
                </button>
                 <AnimatePresence>
                    {langOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-[calc(100%+10px)] right-0 w-40 rounded-xl bg-white border border-slate-100 shadow-xl p-1"
                        >
                            <Link href="/lang/sv" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#007AFF] transition-colors">
                                <Image 
                                    src="./assets/logo/sweden.png" 
                                    alt="Swedish Flag" 
                                    width={20} 
                                    height={20} 
                                    className="rounded-full object-cover w-5 h-5"
                                />
                                Swedish
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
                <button 
                    className={`
                        px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95
                        ${isScrolled 
                            ? 'bg-slate-900 text-white hover:bg-[#007AFF]' 
                            : 'bg-white text-slate-900 hover:bg-[#00CC66]'
                        }
                    `}
                >
                    Let's Talk
                </button>
            </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="lg:hidden">
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                  relative z-50 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300
                   ${isScrolled ? 'bg-white/20 text-slate-900' : 'bg-white/20 text-slate-900 backdrop-blur-md'}
              `}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+12px)] left-0 w-full bg-white/95 backdrop-blur-2xl border border-white/40 rounded-[24px] p-4 shadow-2xl max-h-[85vh] overflow-y-auto"
                >
                     <ul className="flex flex-col gap-1">
                        <li>
                            <Link href="/" className="block p-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block p-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        </li>

                        {/* Mobile Services Accordion */}
                        <li className="rounded-xl overflow-hidden bg-slate-50/50 mb-1">
                             <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="flex w-full items-center justify-between p-3 font-bold text-slate-800"
                              >
                                Services
                                <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                              </button>
                               <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <ul className="flex flex-col gap-1 pl-2 pr-2 pb-2">
                                  {SERVICES.map((service, index) => (
                                    <MobileLink key={index} href={service.href} label={service.name} closeMenu={() => setIsMobileMenuOpen(false)} icon={service.icon} />
                                  ))}
                                </ul>
                              </div>
                        </li>

                        {/* Mobile Products Accordion */}
                        <li className="rounded-xl overflow-hidden bg-slate-50/50 mb-1">
                             <button
                                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                className="flex w-full items-center justify-between p-3 font-bold text-slate-800"
                              >
                                Products
                                <ChevronDown size={18} className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                              </button>
                               <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileProductsOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <ul className="flex flex-col gap-1 pl-2 pr-2 pb-2">
                                  {PRODUCT_ITEMS.map((product, index) => (
                                    <MobileLink key={index} href={product.href} label={product.name} closeMenu={() => setIsMobileMenuOpen(false)} icon={product.icon} />
                                  ))}
                                </ul>
                              </div>
                        </li>
                        
                        <li>
                            <Link href="/news" className="block p-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
                        </li>

                         {/* Mobile Lang & CTA */}
                        <li className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4">
                             <div className="flex items-center justify-between px-2">
                                <span className="font-bold text-slate-500 text-sm">Language</span>
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-md text-sm font-bold text-slate-800">
                                        <Image src="./assets/logo/america.png" alt="US" width={20} height={20} className="rounded-full w-5 h-5 object-cover" />
                                        English
                                    </button>
                                    <Link href="/lang/sv" className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-slate-500 hover:text-slate-800">
                                        <Image src="./assets/logo/sweden.png" alt="SE" width={20} height={20} className="rounded-full w-5 h-5 object-cover" />
                                        Sweden
                                    </Link>
                                </div>
                             </div>
                             
                             <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#007AFF] px-6 py-4 font-bold text-white shadow-lg active:scale-95 transition-transform">
                                Let’s Talk <ArrowRight size={18} />
                              </Link>
                        </li>
                     </ul>
                </motion.div>
            )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}

// --- SUB COMPONENTS ---

function DropdownItem({ href, label, icon: Icon }: { href: string; label: string; icon?: any }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#007AFF] transition-all group"
      >
        {Icon && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-[#007AFF]/10 group-hover:text-[#007AFF] transition-colors">
            {isValidElement(Icon) ? Icon : <Icon size={16} />}
          </div>
        )}
        {label}
      </Link>
    </li>
  );
}

function MobileLink({ href, label, closeMenu, icon: Icon }: { href: string; label: string; closeMenu: () => void; icon?: any }) {
  return (
    <li>
      <Link
        href={href}
        onClick={closeMenu}
        className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm font-medium text-slate-500 hover:bg-white hover:text-[#007AFF] transition-all"
      >
        {Icon && (
           <span className="shrink-0 opacity-70 flex items-center">
            {isValidElement(Icon) ? Icon : <Icon size={18} />}
          </span>
        )}
        {label}
      </Link>
    </li>
  );
}