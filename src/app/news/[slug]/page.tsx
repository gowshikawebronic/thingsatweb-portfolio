import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ChevronLeft, ChevronRight, User, Clock, Tag, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/BlogpageData";
import BlogSidebar from "@/section/components/BlogSidebar";
import LeaveReplyForm from "@/components/common/EnquiryForm";


// Generate static paths
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Params is a Promise in Next.js 15+
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;

  // 1. Find the specific blog post
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return notFound();
  }

  const post = BLOG_POSTS[currentIndex];

  // 2. Navigation Logic
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sora pt-32 pb-24 selection:bg-brand-green selection:text-white">
      
      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-transparent -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        
        {/* --- BACK NAVIGATION --- */}
        <div className="mb-10">
          <Link 
            href="/news" 
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-bold shadow-sm hover:shadow-md hover:border-brand-green hover:text-brand-green transition-all duration-300"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: MAIN CONTENT --- */}
          <article className="lg:w-2/3 min-w-0">
            
            {/* 1. HEADER SECTION */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                 <span className="px-4 py-1.5 rounded-lg bg-brand-green text-white text-[11px] font-black uppercase tracking-widest shadow-md shadow-brand-green/20">
                    {post.category}
                 </span>
                 <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wide">
                    <Clock size={14} /> 5 min read
                 </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] mb-8 tracking-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 border-l-4 border-brand-green pl-4">
                 <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-0.5">Written by</span>
                    <span className="text-slate-900 font-bold flex items-center gap-2">
                       <User size={16} className="text-brand-green" /> {post.author}
                    </span>
                 </div>
                 <div className="w-px h-8 bg-slate-200 mx-2" />
                 <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-0.5">Published on</span>
                    <span className="text-slate-900 font-bold flex items-center gap-2">
                       <Calendar size={16} className="text-brand-green" /> {post.date}
                    </span>
                 </div>
              </div>
            </header>

            {/* 2. FULL WIDTH IMAGE (No Cropping) */}
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 mb-12 border border-slate-100 bg-white p-2">
               <div className="relative w-full rounded-[2rem] overflow-hidden">
                 <Image
                   src={post.image}
                   alt={post.title}
                   width={1200}
                   height={800}
                   className="w-full h-auto object-contain"
                   priority
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                 />
               </div>
            </div>

            {/* 3. RICH TEXT CONTENT */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm mb-12">
               <div className="prose prose-lg md:prose-xl prose-slate max-w-none 
                  prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 
                  prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                  prose-a:text-brand-green prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 prose-strong:font-black
                  prose-li:text-slate-600 prose-li:marker:text-brand-green">
                  
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
               </div>
            </div>

            {/* 4. TAGS FOOTER */}
            <div className="mb-16">
               <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Tag size={18} className="text-brand-green" /> Related Topics
               </h4>
               <div className="flex flex-wrap gap-2">
                 {post.tags.map(tag => (
                   <Link 
                     key={tag} 
                     href={`/news?tag=${encodeURIComponent(tag)}`}
                     className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 text-sm font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                   >
                     #{tag}
                   </Link>
                 ))}
               </div>
            </div>

            {/* 5. PREVIOUS / NEXT NAVIGATION */}
            <div className="grid md:grid-cols-2 gap-6 mb-24">
               {prevPost ? (
                 <Link 
                   href={`/news/${prevPost.slug}`}
                   className="group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-brand-green hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-300 relative overflow-hidden"
                 >
                    <div className="relative z-10">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 block group-hover:text-brand-green flex items-center gap-2">
                           <ChevronLeft size={14} strokeWidth={3} /> Previous Article
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-brand-green transition-colors line-clamp-2">
                           {prevPost.title}
                        </h4>
                    </div>
                 </Link>
               ) : <div />}

               {nextPost ? (
                 <Link 
                   href={`/news/${nextPost.slug}`}
                   className="group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-brand-green hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-300 relative overflow-hidden text-right"
                 >
                    <div className="relative z-10 flex flex-col items-end">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 block group-hover:text-brand-green flex items-center gap-2">
                           Next Article <ChevronRight size={14} strokeWidth={3} />
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-brand-green transition-colors line-clamp-2">
                           {nextPost.title}
                        </h4>
                    </div>
                 </Link>
               ) : <div />}
            </div>

            {/* 6. LEAVE A REPLY */}
            <LeaveReplyForm />
          </article>

          {/* --- RIGHT COLUMN: STICKY SIDEBAR --- */}
          <aside className="lg:w-1/3 relative hidden lg:block">
             <div className="sticky top-32 space-y-8">
               <div className="bg-brand-green/5 rounded-[2rem] p-8 border border-brand-green/10 mb-8">
                  <h4 className="font-black text-slate-900 text-lg mb-2">Need Help?</h4>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Looking for expert advice on IoT or Digital Marketing? We are here to help.
                  </p>
                  <Link href="/contact" className="inline-block w-full py-3 bg-brand-green text-white font-bold text-center rounded-xl hover:bg-[#3b7ddd] transition-colors shadow-lg shadow-brand-green/20">
                    Contact Us
                  </Link>
               </div>
               <BlogSidebar />
             </div>
          </aside>

        </div>
      </div>
    </main>
  );
}