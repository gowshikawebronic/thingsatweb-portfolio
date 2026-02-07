"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

// Defining the specific blogs for the Home Page here to ensure they link correctly
const HOME_BLOGS = [
  {
    id: "2", // ID from your main data
    title: "How to monitor water supply from your mobile?",
    excerpt: "Water pollution is one of the biggest fears for the green globalization. Water pollution affects human health by causing waterborne diseases.",
    image: "./assets/news/water-supply.png",
    category: "IoT",
    date: "Oct 22, 2025",
    link: "/news/monitor-water-supply", // Redirects to specific blog
  },
  {
    id: "3",
    title: "How to create a well written and customizable website?",
    excerpt: "It is difficult as a customer to know if you got a good website or less good, as much is hidden in the code.",
    image: "./assets/news/custom-website.png",
    category: "Web Development",
    date: "Oct 20, 2025",
    link: "/news/create-customizable-website", // Redirects to specific blog
  },
  {
    id: "4",
    title: "How to make a user friendly mobile app?",
    excerpt: "We offer first-class services for mobile app development. In addition to websites, we also develop applications for mobile phones.",
    image: "./assets/news/user-friendly-app.png",
    category: "App Development",
    date: "Oct 18, 2025",
    link: "/news/user-friendly-mobile-app", // Redirects to specific blog
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#FAF7F6] py-[100px] font-sora relative">
      <div className="container mx-auto px-[24px] lg:px-[40px]">
        
        {/* --- Section Header --- */}
        <SectionHeader
          badge="Blogs"
          title="News from our Blog"
          description="Insights, updates, and technical deep-dives from our team of experts"
          centered={true}
          className="mb-20"
        />

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[80px]">
          {HOME_BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="group flex flex-col bg-white rounded-[32px] border border-[#e2e8f0] shadow-xl shadow-[#0F172A]/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F172A]/10"
            >
              {/* Image Container */}
              <div className="relative h-[240px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider text-[#4F86E8] shadow-sm">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-[32px]">
                {/* Date */}
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4">
                  <CalendarDays size={16} />
                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-4 leading-tight group-hover:text-[#4F86E8] transition-colors">
                  <Link href={blog.link}>
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-[#475569] text-[15px] leading-relaxed font-light mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read More Link (Pushed to bottom) */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <Link
                    href={blog.link}
                    className="inline-flex items-center gap-2 text-[15px] font-bold text-[#0F172A] transition-all group-hover:gap-3 group-hover:text-[#4F86E8]"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- View All Blogs Button --- */}
        <div className="flex justify-center">
          <Link
            href="/news" // Redirects to the main News Page
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0F172A] px-[40px] py-[18px] text-[16px] font-bold text-white transition-all hover:bg-[#4F86E8] hover:shadow-lg hover:shadow-[#4F86E8]/30 hover:-translate-y-1 active:scale-95"
          >
            Read More Blogs
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}