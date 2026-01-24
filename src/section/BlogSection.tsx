"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { blogData } from "@/data/BlogData";
import SectionHeader from "@/section/components/home/SectionHeader";


export default function BlogSection() {
  return (
    <section className="bg-[#FAF7F6] py-[100px] font-sora relative">
      <div className="container mx-auto px-[24px] lg:px-[40px]">
         <SectionHeader
                  badge="Blogs"
                  title=" News from our Blog"
                  description="Insights, updates, and technical deep-dives from our team of experts"
                  centered={true}
                  className="mb-20"
                />
        {/* --- Section Header ---
        <div className="mb-[60px] text-center max-w-3xl mx-auto">
          <h2 className="text-[36px] lg:text-[56px] font-extrabold text-[#0F172A] tracking-tight mb-[24px]">
            News from our Blog
          </h2>
          <p className="text-[18px] text-[#475569] font-light leading-relaxed">
            Insights, updates, and technical deep-dives from our team of experts.
          </p>
        </div> */}

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[80px]">
          {blogData.map((blog) => (
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
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider text-[#4F86E8]">
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
                  {blog.title}
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
            href="/blog" // Path to your main blog listing page
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