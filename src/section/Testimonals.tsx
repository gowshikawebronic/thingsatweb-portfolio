"use client";

import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/home/SectionHeader";

// Mock Data - You can move this to a separate data file later
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Erik Svensson",
    role: "CTO, Nordic Tech Solutions",
    image: "/assets/testimonials/user1.jpg", // Replace with actual paths
    content:
      "ThingsAtWeb transformed our manufacturing process with their Digital Twin technology. The real-time insights we gained were immediate and actionable. A truly visionary partner.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anna Lindberg",
    role: "Director, GreenLeaf Logistics",
    image: "/assets/testimonials/user2.jpg",
    content:
      "The production monitoring dashboard gives us visibility we never thought possible. They didn't just build a tool; they engineered a scalable platform for our future growth.",
    rating: 5,
  },
  {
    id: 3,
    name: "Johan Berg",
    role: "Product Manager, Future Systems",
    image: "/assets/testimonials/user3.jpg",
    content:
      "Professional, technical, and highly efficient. Their approach to IoT solutions helped us reduce downtime by 40% in the first quarter alone. Highly recommended.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FAF7F6] py-24 lg:py-32 font-sora relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* --- Header --- */}
        <SectionHeader
          badge="Success Stories"
          title="What Our Clients Say"
          description="We don't just deliver code; we deliver value. Hear from the partners who trust us with their vision."
          centered={true}
          className="mb-20"
        />

        {/* --- Testimonials Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 flex flex-col relative"
            >
              {/* Quote Icon Decoration */}
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-[#2776ea]/10 transition-colors">
                <Quote size={64} fill="currentColor" strokeWidth={0} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10">
                "{item.content}"
              </p>

              {/* User Info (Bottom) */}
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-50">
                {/* Avatar Placeholder */}
                <div className="h-12 w-12 rounded-full bg-slate-100 border border-slate-200 relative overflow-hidden shrink-0">
                  {/* Uncomment Image component once you have real images */}
                  {/* <Image src={item.image} alt={item.name} fill className="object-cover" /> */}

                  {/* Fallback Initial */}
                  <div className="flex items-center justify-center h-full w-full text-slate-400 font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-[#76ea27]">
                <CheckCircle2 size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Trust Indicator / CTA --- */}
        <div className="mt-20 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Trusted by innovators across industries
          </p>
          
        </div>
      </div>
    </section>
  );
}
