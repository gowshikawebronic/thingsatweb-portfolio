
import { Brain, Globe, Trophy, Infinity, LucideIcon } from "lucide-react";

export const FEATURES = [
  {
    id: 1,
    title: "AI-First Innovation",
    description:
      "Unlike traditional IT companies, we embed artificial intelligence and machine learning across all our services, ensuring your solutions are future-ready and intelligent from day one",
    icon: Brain,
    color: "#2776ea",
  },
  {
    id: 2,
    title: "Global-Local Advantage",
    description:
      "With operations in India and Europe (through Thingsatweb Sweden AB), we combine Indian innovation excellence with European quality standards, delivering world-class solutions at competitive pricing",
    icon: Globe,
    color: "#76ea27",
  },
  {
    id: 3,
    title: "Proven Track Record",
    description:
      "Over 15 years of delivering successful projects across 50+ countries, serving clients from startups to Fortune 500 enterprises with consistent 99.9% satisfaction ratings",
    icon: Trophy,
    color: "#2776ea",
  },
  {
    id: 4,
    title: "End-to-End Solutions",
    description:
      "From initial strategy and consulting through development, deployment, and ongoing support, we provide comprehensive technology services that evolve with your business needs",
    icon: Infinity,
    color: "#76ea27",
  },
];

export type WhyChooseCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};