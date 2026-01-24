import ServiceDetailSection from "@/section/components/servicespage/ServiceDetailSection";
import { serviceDetails } from "@/data/ServicePage";

export default function AppDevelopmentPage() {
  const data = serviceDetails["app-development"]; // Select specific service data
  
  return (
    <main>
       <ServiceDetailSection data={data} />
    </main>
  )
}