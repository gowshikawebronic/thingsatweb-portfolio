import ServiceDetailSection from "@/components/servicespage/ServiceDetailSection";
import { serviceDetails } from "@/data/ServicePage";

export default function AppDevelopmentPage() {
  const data = serviceDetails["seo-optimization"]; // Select specific service data
  
  return (
    <main>
       <ServiceDetailSection data={data} />
    </main>
  )
}