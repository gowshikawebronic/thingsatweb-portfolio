// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { 
//   ArrowRight, 
//   Smartphone, 
//   Layers, 
//   Cpu, 
//   CheckCircle2 
// } from "lucide-react";

// export default function AppDevelopment() {
//   return (
//     <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
//       {/* --- Background Decorative Blobs --- */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
//           {/* --- Left Column: Visuals (Modern Card Style) --- */}
//           <div className="relative order-2 lg:order-1 group">
//             {/* Backing Pattern */}
//             <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[40px] opacity-10 blur-lg group-hover:opacity-15 transition-opacity duration-500" />
            
//             {/* Main Image Card */}
//             <div className="relative rounded-[32px] overflow-hidden bg-white shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 aspect-[4/5] lg:aspect-square transform transition-transform duration-700 hover:scale-[1.01]">
//               <Image
//                 src="./assets/images/adddev.png" // Ensure this path is correct in your project
//                 alt="Mobile App Development"
//                 fill
//                 className="object-cover object-center"
//               />
              
//               {/* Modern Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
//             </div>

//             {/* Floating 'Stat' Card 1: Platform Support */}
//             <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-4 animate-float">
//               <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
//                 <Smartphone size={24} strokeWidth={2.5} />
//               </div>
//               <div>
//                 <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Solutions</p>
//                 <p className="text-lg font-bold text-slate-900">iOS & Android</p>
//               </div>
//             </div>

//             {/* Floating 'Stat' Card 2: Tech Stack (New Visual Element) */}
//             <div className="absolute top-10 -left-6 lg:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 hidden md:flex flex-col gap-2 animate-float-delayed">
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
//                 <span className="text-sm font-bold text-slate-700">Native App</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse delay-75" />
//                 <span className="text-sm font-bold text-slate-700">Hybrid App</span>
//               </div>
//             </div>
//           </div>

//           {/* --- Right Column: Content --- */}
//           <div className="order-1 lg:order-2">
//             {/* Section Tag */}
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
//               <span className="w-2 h-2 rounded-full bg-blue-600" />
//               Digital Transformation
//             </div>

//             {/* Heading */}
//             <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
//               App <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Development</span>
//             </h2>

//             {/* Content Block 1 */}
//             <div className="space-y-6">
//               <div className="flex gap-4 items-start">
//                 <div className="mt-1 shrink-0 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-blue-600">
//                   <Layers size={18} />
//                 </div>
//                 <p className="text-slate-600 text-lg leading-relaxed">
//                   We build apps with great <strong className="text-slate-900 font-semibold">UI/UX Design</strong> and cross platform support in mind. Our team comprises a bunch of knowledgeable iOS App and Android App Developers having a good skill set in building mobile applications. We expertise in creating Native App, Hybrid App and Web App development.
//                 </p>
//               </div>

//               {/* Content Block 2 */}
//               <div className="flex gap-4 items-start">
//                 <div className="mt-1 shrink-0 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-indigo-600">
//                   <Cpu size={18} />
//                 </div>
//                 <p className="text-slate-600 text-lg leading-relaxed">
//                   On demand our application developers combine <strong className="text-slate-900 font-semibold">artificial intelligence</strong> to the mobile application to automate and scale the growth of your Business. You can rely on us to change your business into a digital product, as we take care of everything from developing Mobile Apps to Deploying them in iOS App stores and Google Play Store.
//                 </p>
//               </div>

//               {/* Key Features List (Extracted from text for visual appeal) */}
//               <div className="pl-12 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
//                 {['End-to-End Services', 'Customized UX Design', 'Scalable Growth'].map((item, index) => (
//                   <div key={index} className="flex items-center gap-2 text-slate-800 font-medium">
//                     <CheckCircle2 size={18} className="text-green-500" />
//                     {item}
//                   </div>
//                 ))}
//               </div>

//               {/* Closing Sentence */}
//               <p className="pl-12 text-slate-500 italic text-sm border-l-2 border-blue-200 pl-4 py-1">
//                 Our expert app developers help entrepreneurs and enterprises grow their business ideas into profitable Android and iOS Mobile Applications.
//               </p>
//             </div>

//             {/* CTA Button */}
//             <div className="mt-10 pl-12">
//               <Link 
//                 href="/services/app-development" 
//                 className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1"
//               >
//                 <span className="relative z-10 font-bold">View More</span>
//                 <ArrowRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                
//                 {/* Button Shine Effect */}
//                 <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Styles for custom animations */}
//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 5s ease-in-out infinite 1s;
//         }
//       `}</style>
//     </section>
//   );
// }