"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Clock, 
  Tag, 
  ArrowLeft,
  Twitter,
  Linkedin,
  Facebook,
  Share2
} from "lucide-react";
import LeaveReplyForm from "@/components/common/EnquiryForm";
import BlogSidebar from "@/section/components/BlogSidebar";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
};

type Props = {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
};

// --- BRAND COLORS ---
const COLORS = {
  primary: "#4888E8", // Blue
  secondary: "#07b022", // Green
  dark: "#0F172A",
};

export default function BlogDetailClient({ post, prevPost, nextPost }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  // --- Scroll Reveal Logic ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sora pt-28 pb-24 selection:bg-[#4888E8] selection:text-white">
      
      {/* Background Decor (Subtle Gradients) */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-[#FAFAFA] -z-20" />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* --- Top Navigation --- */}
        <div className="mb-12 reveal-on-scroll">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#4888E8] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog Overview
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* --- LEFT SIDEBAR (Author & Meta - Matches Video Layout) --- */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-32 space-y-8 order-2 lg:order-1 self-start h-fit">
             
             {/* Author Card */}
             <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner">
                    {/* Placeholder Avatar - Replace with actual author image if available */}
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                        <User size={40} />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{post.author}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Writer | Tech Enthusiast</p>
                
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                    Brings 10+ years in SaaS and customer ops, helping brands build scalable, human-first support.
                </p>

                <div className="flex justify-center gap-3">
                    {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                        <button key={i} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#4888E8] hover:text-white transition-all">
                            <Icon size={16} />
                        </button>
                    ))}
                </div>
             </div>

             {/* Share Widget */}
             <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Share this article</span>
                <button className="w-10 h-10 rounded-full bg-[#07b022]/10 text-[#07b022] flex items-center justify-center hover:bg-[#07b022] hover:text-white transition-all">
                    <Share2 size={18} />
                </button>
             </div>

          </aside>

          {/* --- RIGHT CONTENT (Article Body) --- */}
          <article className="w-full lg:w-3/4 order-1 lg:order-2 min-w-0">
            
            {/* Header Section */}
            <header className="mb-10 reveal-on-scroll">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                 {post.title}
               </h1>
               
               <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
                  <span className="px-4 py-2 rounded-xl bg-[#4888E8]/10 text-[#4888E8] flex items-center gap-2">
                     <Tag size={14} /> {post.category}
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-500 flex items-center gap-2">
                     <Calendar size={14} /> {post.date}
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-500 flex items-center gap-2">
                     <User size={14} /> By {post.author}
                  </span>
               </div>
            </header>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] mb-16 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200 reveal-on-scroll">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Main Content */}
            <div
              ref={contentRef}
              className="prose prose-lg prose-slate max-w-none mb-16 reveal-on-scroll"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags Cloud */}
            <div className="mb-20 pt-8 border-t border-slate-100 reveal-on-scroll">
               <h4 className="text-sm font-bold text-slate-900 mb-4">Related Topics:</h4>
               <div className="flex flex-wrap gap-2">
                 {post.tags.map((tag) => (
                   <Link
                     key={tag}
                     href={`/news?tag=${encodeURIComponent(tag)}`}
                     className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-[#4888E8] hover:text-[#4888E8] transition-all"
                   >
                     #{tag}
                   </Link>
                 ))}
               </div>
            </div>

            {/* Prev/Next Navigation */}
            <div className="grid md:grid-cols-2 gap-6 mb-24 reveal-on-scroll">
              {prevPost ? (
                <Link
                  href={`/news/${prevPost.slug}`}
                  className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-[#4888E8]/30 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2 group-hover:text-[#4888E8]">
                    <ChevronLeft size={16} /> Previous Article
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#4888E8] transition-colors line-clamp-2 leading-snug">
                    {prevPost.title}
                  </h4>
                </Link>
              ) : <div />}
              
              {nextPost ? (
                <Link
                  href={`/news/${nextPost.slug}`}
                  className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-[#4888E8]/30 hover:shadow-lg transition-all duration-300 text-right"
                >
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-end gap-2 group-hover:text-[#4888E8]">
                    Next Article <ChevronRight size={16} />
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#4888E8] transition-colors line-clamp-2 leading-snug">
                    {nextPost.title}
                  </h4>
                </Link>
              ) : <div />}
            </div>

            {/* Comments / Reply Form */}
            <div className="reveal-on-scroll bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Leave a Reply</h3>
               <p className="text-slate-500 mb-8">We'd love to hear your thoughts. Keep it constructive!</p>
               <LeaveReplyForm />
            </div>

          </article>

        </div>
      </div>

      {/* --- Global Styles for Content --- */}
      <style jsx global>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                      transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Prose Customization for Blog Content */
        .prose h2 {
            font-size: 1.8rem;
            font-weight: 800;
            color: #0F172A;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            letter-spacing: -0.02em;
        }
        .prose h3 {
            font-size: 1.4rem;
            font-weight: 700;
            color: #0F172A;
            margin-top: 2rem;
        }
        .prose p {
            font-size: 1.125rem;
            line-height: 1.8;
            color: #475569;
            margin-bottom: 1.5rem;
        }
        .prose strong {
            color: #0F172A;
            font-weight: 700;
        }
        .prose ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .prose li {
            margin-bottom: 0.5rem;
            color: #475569;
        }
        .prose a {
            color: #4888E8;
            font-weight: 600;
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-color: #4888E850;
            transition: all 0.2s;
        }
        .prose a:hover {
            color: #07b022;
            text-decoration-color: #07b022;
        }
        .prose blockquote {
            border-left: 4px solid #4888E8;
            padding-left: 1.5rem;
            font-style: italic;
            color: #334155;
            background: #F8FAFC;
            padding: 1.5rem;
            border-radius: 0 1rem 1rem 0;
            margin: 2rem 0;
        }
      `}</style>
    </main>
  );
}