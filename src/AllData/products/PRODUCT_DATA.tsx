import { 
  BarChart3, 
  Factory, 
  PieChart, 
  ShoppingBag, 
  Glasses 
} from "lucide-react";

export interface ProductLink {
  label: string;
  href: string;
  type: "primary" | "secondary" | "accent"; 
}

export interface Product {
  id: string;
  category: string;
  name: string; // Changed from 'title' to 'name' to match your components
  tagline: string; // Added this field
  description: string;
  image: string;
  icon: any; // Added for Navbar & Registry
  features: string[]; // Added for Registry
  links: ProductLink[];
}

export const productData: Product[] = [
  {
    id: "value-chart",
    category: "Intelligence Platform",
    tagline: "Business Intelligence",
    name: "Value Chart",
    description: "Enterprise-grade data visualization engine that transforms fragmented metrics into high-fidelity actionable insights for financial leadership.",
    image: "./assets/products/valuechart.png", 
    icon: BarChart3,
    features: ["Real-time KPI Dashboards", "Data Consolidation", "Trend Forecasting"],
    links: [
      { label: "Visit Site", href: "https://www.valueflowsoft.com/", type: "primary" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
  {
    id: "tanlux",
    category: "Industrial ERP",
    tagline: "Manufacturing OS",
    name: "Tanlux",
    description: "A specialized ecosystem for manufacturing workflow optimization, integrating IoT monitoring with core resource planning modules.",
    image: "./assets/products/tanlux.png", 
    icon: Factory,
    features: ["IoT Integration", "Supply Chain Mgmt", "Production Scheduling"],
    links: [
      { label: "Visit Site", href: "https://tanlux.se/", type: "primary" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
  {
    id: "fp-analyzer",
    category: "Financial Analytics",
    tagline: "FinTech Solutions",
    name: "Fp Analyzer",
    description: "Advanced financial planning and analysis tool designed to streamline budgeting, forecasting, and performance management.",
    image: "./assets/products/fpanalyzer.png",
    icon: PieChart,
    features: ["Budgeting Automation", "Variance Analysis", "Scenario Planning"],
    links: [
      { label: "Visit Site", href: "https://www.fpanalyzer.se/", type: "primary" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
  {
    id: "storetech", // Fixed ID to match Navbar check
    category: "Automated Retail",
    tagline: "Retail Automation",
    name: "StoreTech",
    description: "Cloud-native retail infrastructure providing automated checkout solutions and synchronized inventory management.",
    image: "./assets/products/storetech.png",
    icon: ShoppingBag,
    features: ["Self-Checkout", "Inventory Sync", "Payment Gateway"],
    links: [
      { label: "Visit Site", href: "https://store-tech.se/", type: "primary" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
  {
    id: "virtualtour360", // Fixed ID to match Registry check
    category: "Immersive VR Platform",
    tagline: "VR Experiences",
    name: "VirtualTour360",
    description: "Create professional virtual tours in WordPress instantly. Build immersive 360 degree experiences with Apple Vision Pro support.",
    image: "./assets/products/virtualtour.png",
    icon: Glasses,
    features: ["No-Code Builder", "VR Headset Ready", "WordPress Plugin"],
    links: [
      { label: "Visit Site", href: "https://virtualtour360.ai/", type: "primary" },
      { label: "Live Demo", href: "#", type: "accent" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
];