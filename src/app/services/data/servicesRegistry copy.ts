import { ServicePageData } from "@/AllData/services/types";
import { AI_DATA } from "@/AllData/services/mainData/AI_DATA";
import { WEB_DATA } from "@/AllData/services/mainData/WEB_DATA";
import { CLOUD_DATA } from "@/AllData/services/mainData/CLOUD_DATA";
import { DIGITAL_TRANSFORMATION_DATA } from "@/AllData/services/mainData/DIGITAL_TRANSFORMATION_DATA";
import { DEVOPS_DATA } from "@/AllData/services/mainData/DEVOPS_DATA";
import { IOT_DATA } from "@/AllData/services/mainData/IOT_DATA";
import { ANALYTICS_DATA } from "@/AllData/services/mainData/ANALYTICS_DATA";
import { STORETECH_DATA } from "@/AllData/services/mainData/STORETECH_DATA";



export const servicesRegistry: Record<string, ServicePageData> = {
  "web-development" : WEB_DATA,
  "ai-machine-learning": AI_DATA,
  "cloud-services" : CLOUD_DATA,
  "digital-transformation" : DIGITAL_TRANSFORMATION_DATA,
  "devops" : DEVOPS_DATA,
  "iot-solutions" : IOT_DATA,
  "data-analytics" : ANALYTICS_DATA,
  "storetech" : STORETECH_DATA,

};

export const getServiceData = (category: string | undefined): ServicePageData | null => {
  if (!category) return null;
  return servicesRegistry[category] || null;
};