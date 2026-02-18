import React from "react";
import { getServiceData } from "@/app/services/data/servicesRegistry";

// Import Universal Components
import UniversalHero from "@/components/services/universal/UniversalHero";
import UniversalOverview from "@/components/services/universal/UniversalOverview";
import UniversalCoreServices from "@/components/services/universal/UniversalCoreServices";
import UniversalTechStack from "@/components/services/universal/UniversalTechStack";
import UniversalProcess from "@/components/services/universal/UniversalProcess";
import UniversalIndustries from "@/components/services/universal/UniversalIndustries";
import UniversalCaseStudies from "@/components/services/universal/UniversalCaseStudies";
import UniversalFAQ from "@/components/services/universal/UniversalFAQ";
import UniversalGetStarted from "@/components/services/universal/UniversalGetStarted";
import UniversalRelatedResources from "@/components/services/universal/UniversalRelatedResources";

// Updated Page Props for Next.js 15 (searchParams is now a Promise)
interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServiceDynamicPage(props: PageProps) {
  // 1. Await the searchParams Promise
  const searchParams = await props.searchParams;
  
  // 2. Get the category safely
  const category = typeof searchParams.category === 'string' ? searchParams.category : "";

  // 3. Fetch Data
  const serviceData = getServiceData(category);

  // 4. Handle Invalid or Missing Category
  if (!serviceData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sora p-10 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Service Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md">
          We couldn't find the service category: <span className="font-mono text-red-500 bg-red-50 px-2 py-1 rounded">{category || "Empty"}</span>
        </p>
        <a href="/" className="px-6 py-3 bg-[#2776ea] text-white rounded-xl font-bold hover:bg-blue-700 transition">
          Return Home
        </a>
      </div>
    );
  }

  // 5. Render the Page dynamically
  return (
    <main className="min-h-screen bg-white selection:bg-[#2776ea] selection:text-white">
      
      {/* 1. Hero */}
      <UniversalHero data={serviceData.hero} />

      {/* 2. Overview */}
      <UniversalOverview data={serviceData.overview} />

      {/* 3. Core Services Cards */}
      <UniversalCoreServices data={serviceData.coreServices} />

      {/* 4. Tech Stack */}
      <UniversalTechStack data={serviceData.techStack} />

      {/* 5. Process Timeline */}
      <UniversalProcess data={serviceData.process} />

      {/* 6. Industry Applications */}
      <UniversalIndustries data={serviceData.industries} />

      {/* 7. Case Studies */}
      <UniversalCaseStudies data={serviceData.caseStudies} />

      {/* 8. FAQ */}
      <UniversalFAQ data={serviceData.faq} />

      {/* 9. CTA / Get Started */}
      <UniversalGetStarted data={serviceData.getStarted} />

      {/* 10. Related Resources */}
      <UniversalRelatedResources data={serviceData.relatedResources} />

    </main>
  );
}