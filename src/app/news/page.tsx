"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Search, ChevronLeft, ChevronRight, Calendar, ArrowUpRight, Hash, Filter, X } from "lucide-react";
import { BLOG_POSTS, CATEGORIES, TAGS, BlogPost } from "@/data/BlogpageData";

const ITEMS_PER_PAGE = 4;

function NewsContent() {
  const searchParams = useSearchParams();
  const resultsRef = useRef<HTMLDivElement>(null);

  // --- STATE ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // --- EFFECT: Handle URL Parameters ---
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const tagParam = searchParams.get("tag");

    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setSelectedTag(null);
      scrollToResults();
    } else if (tagParam) {
      setSelectedTag(tagParam);
      setSelectedCategory("All");
      scrollToResults();
    }
  }, [searchParams]);

  // --- FILTERING LOGIC ---
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesCategory = true;
    if (selectedCategory !== "All") {
      if (selectedCategory === "Uncategorized") {
        matchesCategory = post.title.toLowerCase().includes("smart breather");
      } else {
        matchesCategory = post.category === selectedCategory;
      }
    }

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesCategory && matchesTag;
  });

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // --- SCROLL HELPER ---
  const scrollToResults = () => {
    if (resultsRef.current) {
      const y = resultsRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // --- HANDLERS ---
  const goToPage = (page: number) => {
    setCurrentPage(page);
    scrollToResults();
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedTag(null);
    setCurrentPage(1);
    setSearchQuery("");
    scrollToResults();
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSelectedCategory("All");
    setCurrentPage(1);
    setSearchQuery("");
    scrollToResults();
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTag(null);
    setCurrentPage(1);
    scrollToResults();
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      
      {/* --- HERO SECTION (Redesigned) --- */}
      <div className="max-w-4xl mb-20 pt-10">
       
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
          Explore the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-brand-green">
            Digital Transformation.
          </span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
          Deep dives into IoT, Web Development, and Enterprise Solutions. Stay ahead of the curve with our expert analysis.
        </p>
      </div>

      {/* --- ACTIVE FILTER BAR --- */}
      {(selectedCategory !== "All" || selectedTag || searchQuery) && (
        <div className="mb-10 flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wide mr-2">Active Filters:</span>
          
          {selectedCategory !== "All" && (
            <button onClick={() => handleCategoryClick("All")} className="px-4 py-2 bg-primary-blue text-white text-sm font-bold rounded-full flex items-center gap-2 hover:bg-primary-blue/90 transition-colors shadow-md shadow-primary-blue/20">
              {selectedCategory} <X size={14}/>
            </button>
          )}

          {selectedTag && (
            <button onClick={() => {setSelectedTag(null); scrollToResults();}} className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-full flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-md">
              #{selectedTag} <X size={14}/>
            </button>
          )}

          {searchQuery && (
            <button onClick={() => {setSearchQuery(""); scrollToResults();}} className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-bold rounded-full flex items-center gap-2 hover:bg-slate-200 transition-colors">
              "{searchQuery}" <X size={14}/>
            </button>
          )}

          <button onClick={clearAllFilters} className="text-sm font-bold text-red-500 hover:text-red-600 hover:underline underline-offset-4 ml-4">
            Reset All
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* --- LEFT COLUMN: BLOG GRID --- */}
        <div className="lg:w-2/3" ref={resultsRef}> 
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
              {currentPosts.map((post) => (
                <VerticalBlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-white rounded-[2.5rem] border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <Filter className="text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500 font-medium mb-6">Try adjusting your search or category.</p>
              <button 
                onClick={clearAllFilters}
                className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary-blue transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* PAGINATION */}
          {filteredPosts.length > ITEMS_PER_PAGE && (
            <div className="mt-16 flex items-center justify-center gap-3">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-primary-blue hover:text-primary-blue disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto max-w-[200px] md:max-w-none">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-8 h-8 rounded-lg text-sm font-bold transition-all shrink-0 relative ${
                      currentPage === page
                        ? "text-primary-blue bg-primary-blue/10"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {page}
                    {currentPage === page && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-blue" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-primary-blue hover:text-primary-blue disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* --- RIGHT COLUMN: STICKY SIDEBAR --- */}
        <aside className="lg:w-1/3 relative">
          <div className="sticky top-32 space-y-8">
            
            {/* 1. Search */}
            <div className="group relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary-blue transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-primary-blue/10 focus:border-primary-blue transition-all shadow-sm"
              />
            </div>

            {/* 2. Categories Widget */}
            <div className="bg-white p-2 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Filter size={18} className="text-primary-blue" />
                  Categories
                </h3>
              </div>
              <nav className="flex flex-col gap-1 p-2">
                <button
                   onClick={() => handleCategoryClick("All")}
                   className={`relative px-5 py-3.5 rounded-2xl text-sm font-bold text-left transition-all flex justify-between items-center ${
                     selectedCategory === "All" 
                       ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20" 
                       : "text-slate-600 hover:bg-slate-50"
                   }`}
                >
                  <span>All Articles</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === "All" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                    {BLOG_POSTS.length}
                  </span>
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => handleCategoryClick(cat.name)}
                    className={`relative px-5 py-3.5 rounded-2xl text-sm font-bold text-left transition-all flex justify-between items-center ${
                      selectedCategory === cat.name 
                       ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/25" 
                       : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === cat.name ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* 3. Tags Cloud */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Hash size={18} className="text-primary-blue" />
                  Popular Tags
                  </h3>
                  {selectedTag && (
                      <button onClick={() => {setSelectedTag(null); scrollToResults();}} className="text-xs text-red-500 font-bold hover:underline">Clear</button>
                  )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-2 border rounded-lg text-xs font-bold transition-all duration-300 ${
                      selectedTag === tag
                      ? "bg-slate-900 text-white border-slate-900 shadow-md transform scale-105"
                      : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:border-primary-blue hover:text-primary-blue hover:shadow-sm"
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </aside>
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sora pt-32 pb-24 selection:bg-primary-blue selection:text-white">
      {/* Decorative Background - Refined */}
      <div className="fixed top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none -z-10" />
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-3xl -z-10" />
      
      {/* Suspense for SearchParams */}
      <Suspense fallback={<div className="container mx-auto px-6 text-center pt-20 text-slate-400 font-bold">Loading news...</div>}>
        <NewsContent />
      </Suspense>
    </main>
  );
}

// --- SUB-COMPONENT: VERTICAL BLOG CARD ---
function VerticalBlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary-blue/10 hover:border-primary-blue/20 transition-all duration-500 overflow-hidden h-full hover:-translate-y-1">
      
      {/* 1. Large Top Image */}
      <div className="w-full h-64 md:h-[260px] relative bg-slate-100 overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-5 left-5">
           <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-[11px] font-black uppercase tracking-wider text-slate-900 shadow-lg shadow-black/5">
             {post.category}
           </span>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="flex flex-col flex-1 p-8">
        
        {/* Meta Data */}
        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-5 uppercase tracking-wide">
          <span className="flex items-center gap-1.5 text-primary-blue">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>{post.author || "ThingsAtWeb"}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-primary-blue transition-colors">
          <Link href={`/news/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-1 font-medium">
          {post.excerpt}
        </p>

        {/* Footer / CTA */}
        <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between group-hover:border-slate-200 transition-colors">
          <Link
            href={`/news/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-primary-blue transition-colors"
          >
            Read Article
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          
          {post.tags.length > 0 && (
            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1.5 rounded-lg group-hover:bg-primary-blue/5 group-hover:text-primary-blue transition-colors">
                #{post.tags[0]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}