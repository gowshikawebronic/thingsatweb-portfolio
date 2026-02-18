"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { 
  Search, 
  ArrowUpRight, 
  Sparkles, 
  Flame,
  ArrowRight,
  Clock
} from "lucide-react";
import { BLOG_POSTS, CATEGORIES, BlogPost } from "@/data/BlogpageData";
import Products from '@/components/Products';

// --- CHANGED: Limit to 5 items per page ---
// Page 1 = 1 Featured + 4 Standard (Perfect 2x2 or 1 row of 4)
// Page 2 = 5 Standard
const ITEMS_PER_PAGE = 5;

function NewsContent() {
  const searchParams = useSearchParams();
  const resultsRef = useRef<HTMLDivElement>(null);

  // --- STATE ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // --- HANDLERS ---
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      if (resultsRef.current) {
        window.scrollTo({ top: resultsRef.current.offsetTop - 100, behavior: "smooth" });
      }
    }
  }, [searchParams]);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Get Top 3 posts for the sidebar (Trending)
  const sidebarPosts = BLOG_POSTS.slice(0, 3);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    if (resultsRef.current) {
        window.scrollTo({ top: resultsRef.current.offsetTop - 120, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 pb-32">
      <Products />
      {/* --- HERO SECTION --- */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 hover:border-[#4888E8] transition-colors cursor-default">
            Blog <ArrowRight size={14} /> Fresh takes, weekly.
        </div>
        
        <p className="text-lg text-slate-500 font-medium max-w-lg mx-auto">
          Juicy insights and refreshing stories, all in one place.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start relative">
        
        {/* --- LEFT SIDEBAR (Sticky) --- */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-32 self-start h-fit space-y-12 order-2 lg:order-1">
            
            {/* 1. Search */}
            <div className="relative group">
                <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-5 pr-12 py-4 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4888E8]/20 focus:border-[#4888E8] transition-all shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-100 text-slate-400 rounded-xl">
                    <Search size={18} />
                </div>
            </div>

            {/* 2. Categories */}
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-2">Categories</h3>
                <nav className="flex flex-col gap-1">
                    <CategoryItem 
                        label="All Articles" 
                        count={BLOG_POSTS.length} 
                        isActive={selectedCategory === "All"} 
                        onClick={() => setSelectedCategory("All")} 
                    />
                    {CATEGORIES.map((cat) => (
                        <CategoryItem 
                            key={cat.name}
                            label={cat.name} 
                            count={cat.count} 
                            isActive={selectedCategory === cat.name} 
                            onClick={() => setSelectedCategory(cat.name)} 
                        />
                    ))}
                </nav>
            </div>

            {/* 3. TRENDING NOW (Home Page Style Cards) */}
            <div>
                 <div className="flex items-center gap-2 mb-6 px-2">
                    <Sparkles className="w-4 h-4 text-[#4888E8]" />
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trending Now</h3>
                 </div>
                 
                 <div className="flex flex-col gap-4">
                    {sidebarPosts.map((post, index) => (
                        <Link 
                           href={`/news/${post.slug}`} 
                           key={post.id}
                           className="group relative h-48 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#4888E8]/20 transition-all duration-500 block"
                        >
                            {/* Background Image */}
                            <Image 
                                src={post.image} 
                                alt={post.title} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-5 w-full">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#07b022] text-white shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                                <h4 className="text-white font-bold text-lg leading-snug line-clamp-2 group-hover:text-[#4888E8] transition-colors">
                                    {post.title}
                                </h4>
                                <div className="mt-3 flex items-center gap-2 text-slate-300 text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Read Now <ArrowRight size={12} />
                                </div>
                            </div>
                        </Link>
                    ))}
                 </div>
            </div>
        </aside>

        {/* --- RIGHT CONTENT AREA --- */}
        <div className="w-full lg:w-3/4 order-1 lg:order-2" ref={resultsRef}>
          
          <div className="flex flex-col gap-16">
            {currentPosts.length > 0 ? (
                <>
                    {/* Featured Post */}
                    {currentPage === 1 && currentPosts[0] && (
                        <div className="mb-4">
                             <FeaturedBlogCard post={currentPosts[0]} />
                        </div>
                    )}

                    {/* Standard Grid */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <Flame className="w-6 h-6 text-[#F59E0B]" fill="currentColor" />
                            <h2 className="text-2xl font-bold text-slate-900">Don't Miss These Hot Reads</h2>
                        </div>

                        {/* Keeps 3 columns to balance readability and "smallness" */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                            {(currentPage === 1 ? currentPosts.slice(1) : currentPosts).map((post) => (
                                <StandardBlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900">No stories found</h3>
                    <button onClick={() => setSelectedCategory("All")} className="mt-4 text-[#4888E8] font-bold hover:underline">
                        View all stories
                    </button>
                </div>
            )}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-24 flex items-center justify-center gap-4">
               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                          currentPage === page
                          ? "bg-slate-900 text-white shadow-lg"
                          : "bg-white border border-slate-200 text-slate-500 hover:border-[#4888E8] hover:text-[#4888E8]"
                      }`}
                  >
                      {page}
                  </button>
               ))}
                <button 
                 onClick={() => goToPage(currentPage + 1)}
                 disabled={currentPage === totalPages}
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-[#4888E8] hover:text-[#4888E8] disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all"
               >
                 <ArrowRight size={18} />
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sora selection:bg-[#4888E8] selection:text-white overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-[#FAFAFA] -z-20" />
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#4888E8]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#07b022]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center font-bold text-[#4888E8]">Loading...</div>}>
        <NewsContent />
      </Suspense>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function CategoryItem({ label, count, isActive, onClick }: { label: string, count: number, isActive: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all flex justify-between items-center group ${
                isActive 
                ? "bg-white text-[#4888E8] shadow-sm ring-1 ring-slate-100" 
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            }`}
        >
            <span>{label}</span>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md transition-colors ${
                isActive ? "bg-[#4888E8]/10 text-[#4888E8]" : "bg-slate-100 text-slate-400 group-hover:bg-white"
            }`}>
                {count}
            </span>
        </button>
    )
}

function FeaturedBlogCard({ post }: { post: BlogPost }) {
    return (
        <div className="group relative w-full bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#4888E8]/5 transition-all duration-500 cursor-default overflow-hidden">
            <div className="grid md:grid-cols-12 gap-10 items-center">
                
                {/* Image Section */}
                <div className="md:col-span-7 relative w-full h-[300px] md:h-[420px] rounded-[2rem] overflow-hidden bg-slate-50 shadow-inner">
                    <Link href={`/news/${post.slug}`}>
                        <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill
                            className="object-cover" 
                        />
                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-[#4888E8] shadow-sm flex items-center gap-2">
                            <Sparkles size={12} fill="currentColor" />
                            Editor's Pick
                        </div>
                    </Link>
                </div>

                <div className="md:col-span-5 flex flex-col justify-center pr-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wide">
                        <span className="bg-[#4888E8]/10 text-[#4888E8] px-3 py-1 rounded-lg">{post.category}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{post.date}</span>
                        </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-[1.1] group-hover:text-[#4888E8] transition-colors">
                        <Link href={`/news/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h2>
                    
                    <p className="text-slate-500 text-base mb-8 line-clamp-3 leading-relaxed font-medium">
                        {post.excerpt}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        {/* Prominent Read Article Button */}
                        <Link 
                            href={`/news/${post.slug}`}
                            className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-xl shadow-slate-900/20 hover:bg-[#4888E8] hover:shadow-[#4888E8]/30 hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            Read Article <ArrowUpRight size={18} />
                        </Link>

                        <div className="flex items-center gap-3 pl-2">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm border border-slate-200">
                                {post.author ? post.author[0] : "T"}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-900">{post.author || "ThingsAtWeb"}</span>
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Author</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StandardBlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/news/${post.slug}`} className="group flex flex-col bg-transparent w-full">
            {/* Image - Medium Sized (Square) */}
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-100 mb-4 shadow-sm border border-slate-100 group-hover:shadow-2xl group-hover:shadow-[#4888E8]/10 group-hover:-translate-y-2 transition-all duration-500">
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover" 
                />
            </div>
            
            {/* Meta - Balanced size */}
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wide pl-1">
                <span className="text-slate-400 group-hover:text-[#07b022] transition-colors">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-[#4888E8]">{post.category}</span>
            </div>
            
            {/* Title - Regular text size (text-lg) */}
            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#4888E8] transition-colors pl-1 line-clamp-2">
                {post.title}
            </h3>
            
            {/* Link - CTA */}
            <div className="mt-auto flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:gap-3 transition-all pl-1">
                Read Article <ArrowUpRight size={14} className="text-[#07b022]" />
            </div>
        </Link>
    )
}