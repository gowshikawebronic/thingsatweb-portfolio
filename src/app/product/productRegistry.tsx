import { ServicePageData } from "@/AllData/services/types";


import { STORETECH_DATA } from "@/AllData/services/mainData/STORETECH_DATA";


export const servicesRegistry: Record<string, ServicePageData> = {

  "storetech": STORETECH_DATA,
};

export const getProductData = (category: string | undefined): ServicePageData | null => {
  if (!category) return null;
  return servicesRegistry[category] || null;
};