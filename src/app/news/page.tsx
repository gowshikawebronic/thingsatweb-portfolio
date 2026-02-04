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

  // --- EFFECT: Handle URL Parameters from Individual Blog Pages ---
  // This ensures that if you come from a blog post clicking "IoT", this page filters to "IoT"
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
    // 1. Search Filter
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Category Filter
    let matchesCategory = true;
    if (selectedCategory !== "All") {
      if (selectedCategory === "Uncategorized") {
        matchesCategory = post.title.toLowerCase().includes("smart breather");
      } else {
        matchesCategory = post.category === selectedCategory;
      }
    }

    // 3. Tag Filter
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
      
      {/* --- HERO SECTION --- */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-brand-green shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          Insights & Updates
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
          Explore the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
            Digital Transformation.
          </span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
          Deep dives into IoT, Web Development, and Enterprise Solutions. Stay ahead of the curve with our expert analysis.
        </p>
      </div>

      {/* --- ACTIVE FILTER BAR --- */}
      {(selectedCategory !== "All" || selectedTag || searchQuery) && (
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">Filters:</span>
          
          {selectedCategory !== "All" && (
            <button onClick={() => handleCategoryClick("All")} className="px-3 py-1 bg-brand-green text-white text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-slate-900 transition-colors">
              {selectedCategory} <X size={14}/>
            </button>
          )}

          {selectedTag && (
            <button onClick={() => {setSelectedTag(null); scrollToResults();}} className="px-3 py-1 bg-slate-800 text-white text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-slate-900 transition-colors">
              #{selectedTag} <X size={14}/>
            </button>
          )}

          {searchQuery && (
            <button onClick={() => {setSearchQuery(""); scrollToResults();}} className="px-3 py-1 bg-slate-200 text-slate-600 text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-slate-300 transition-colors">
              "{searchQuery}" <X size={14}/>
            </button>
          )}

          <button onClick={clearAllFilters} className="text-sm font-bold text-red-500 hover:text-red-600 hover:underline underline-offset-4 ml-2">
            Reset
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
            <div className="flex flex-col items-center justify-center py-24 bg-white rounded-[2rem] border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <Filter className="text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500 font-medium mb-6">Try adjusting your search or category.</p>
              <button 
                onClick={clearAllFilters}
                className="px-6 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand-green transition-colors"
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
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-brand-green hover:text-brand-green disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all shadow-sm"
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
                        ? "text-brand-green bg-brand-green/10"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {page}
                    {currentPage === page && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-green" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-brand-green hover:text-brand-green disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all shadow-sm"
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
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-brand-green transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all shadow-sm"
              />
            </div>

            {/* 2. Categories Widget */}
            <div className="bg-white p-2 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="px-6 pt-6 pb-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Filter size={18} className="text-brand-green" />
                  Categories
                </h3>
              </div>
              <nav className="flex flex-col gap-1 p-2">
                <button
                   onClick={() => handleCategoryClick("All")}
                   className={`relative px-4 py-3 rounded-xl text-sm font-bold text-left transition-all flex justify-between items-center ${
                     selectedCategory === "All" 
                       ? "bg-slate-900 text-white shadow-md" 
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
                    className={`relative px-4 py-3 rounded-xl text-sm font-bold text-left transition-all flex justify-between items-center ${
                      selectedCategory === cat.name 
                       ? "bg-brand-green text-white shadow-md shadow-brand-green/20" 
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
                  <Hash size={18} className="text-brand-green" />
                  Popular Tags
                  </h3>
                  {selectedTag && (
                      <button onClick={() => {setSelectedTag(null); scrollToResults();}} className="text-xs text-red-500 font-bold hover:underline">Clear Tag</button>
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
                      : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:border-brand-green hover:text-brand-green hover:shadow-sm"
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
    <main className="min-h-screen bg-[#F8FAFC] font-sora pt-32 pb-24 selection:bg-brand-green selection:text-white">
      {/* Decorative Background */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none z-0" />
      
      {/* Suspense is required for using useSearchParams in Client Components */}
      <Suspense fallback={<div className="container mx-auto px-6 text-center pt-20">Loading news...</div>}>
        <NewsContent />
      </Suspense>
    </main>
  );
}

// --- SUB-COMPONENT: VERTICAL BLOG CARD ---
function VerticalBlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-green/30 transition-all duration-500 overflow-hidden h-full">
      
      {/* 1. Large Top Image */}
      <div className="w-full h-64 md:h-[260px] relative bg-slate-100 overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Placeholder if image is missing/loading */}
        <div className="absolute  bg-slate-100" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
           <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-[11px] font-black uppercase tracking-wider text-slate-900 shadow-md">
             {post.category}
           </span>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        
        {/* Meta Data */}
        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wide">
          <span className="flex items-center gap-1.5 text-brand-green">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>{post.author || "ThingsAtWeb"}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-green transition-colors">
          <Link href={`/news/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Footer / CTA */}
        <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/news/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-brand-green transition-colors"
          >
            Read Article
            <ArrowUpRight size={16} />
          </Link>
          
          {/* Optional: Show first tag as a mini indicator */}
          {post.tags.length > 0 && (
            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                #{post.tags[0]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}