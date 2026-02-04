import {
  Factory,
  ShoppingBag,
  Landmark,
  HeartPulse,
  Zap,
  Radio,
} from "lucide-react";
import { IndustryCardProps } from "@/components/home/IndustryCard"; 

export const INDUSTRIES: IndustryCardProps[] = [
  {
    title: "Manufacturing & Industrial",
    description:
      "Industry 4.0 transformation, smart factory solutions, and predictive maintenance systems",
    features: [
      "Industry 4.0 transformation",
      "Smart factory solutions",
      "Predictive maintenance systems",
    ],
    icon: Factory,
    color: "#2776ea",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Omnichannel platforms, AI-powered checkout, and customer analytics",
    features: [
      "Omnichannel platforms",
      "AI-powered checkout",
      "Customer analytics",
    ],
    icon: ShoppingBag,
    color: "#76ea27",
  },
  {
    title: "Banking & Financial Services",
    description:
      "Digital banking, fintech development, and AI-driven fraud detection",
    features: [
      "Digital banking",
      "Fintech development",
      "AI-driven fraud detection",
    ],
    icon: Landmark,
    color: "#2776ea",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Telemedicine platforms, medical imaging AI, and healthcare IT solutions",
    features: [
      "Telemedicine platforms",
      "Medical imaging AI",
      "Healthcare IT solutions",
    ],
    icon: HeartPulse,
    color: "#76ea27",
  },
  {
    title: "Energy & Utilities",
    description:
      "Smart grid solutions, asset management, and energy analytics",
    features: [
      "Smart grid solutions",
      "Asset management",
      "Energy analytics",
    ],
    icon: Zap,
    color: "#2776ea",
  },
  {
    title: "Telecommunications",
    description:
      "Network optimization, 5G integration, and customer experience platforms",
    features: [
      "Network optimization",
      "5G integration",
      "Customer experience platforms",
    ],
    icon: Radio,
    color: "#76ea27",
  },
];