import ServicesSection from "@/section/ServicesSection";
// import AppDevelopment from "@/section/App";
import Hero from "@/section/Hero";
import Testimonials from "@/section/Testimonals";
import FreeWebsiteSection from "@/section/FreeServicesSection";
import BlogSection from "@/section/BlogSection";



export default function page() {
  return (
    <div>
      <Hero />
      {/* <AppDevelopment /> */}
      <ServicesSection />
      <Testimonials />
      <FreeWebsiteSection />
      <BlogSection />

    </div>
  );
}
