export interface ProductLink {
  label: string;
  href: string;
  type: "primary" | "secondary" | "accent"; // Controls button style
}

export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  links: ProductLink[];
}

export const productData: Product[] = [
  {
    id: "value-chart",
    category: "Intelligence Platform",
    title: "Value Chart",
    description: "Enterprise-grade data visualization engine that transforms fragmented metrics into high-fidelity actionable insights for financial leadership.",
    image: "./assets/products/valuechart.png", // Dummy Path
    links: [
      { label: "Visit Site", href: "https://www.valueflowsoft.com/", type: "primary" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
  {
    id: "tanlux",
    category: "Industrial ERP",
    title: "Tanlux",
    description: "A specialized ecosystem for manufacturing workflow optimization, integrating IoT monitoring with core resource planning modules.",
    image: "./assets/products/tanlux.png", // Dummy Path
    links: [
      { label: "Visit Site", href: "https://tanlux.se/", type: "primary" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
  {
    id: "fp-analyzer",
    category: "Financial Analytics",
    title: "Fp Analyzer",
    description: "Advanced financial planning and analysis tool designed to streamline budgeting, forecasting, and performance management.",
    image: "./assets/products/fpanalyzer.png", // Dummy Path
    links: [
      { label: "Visit Site", href: "https://www.fpanalyzer.se/", type: "primary" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
  {
    id: "store-tech",
    category: "Automated Retail",
    title: "StoreTech",
    description: "Cloud-native retail infrastructure providing automated checkout solutions and synchronized inventory management across global storefronts.",
    image: "./assets/products/storetech.png", // Dummy Path
    links: [
      { label: "Visit Site", href: "https://store-tech.se/", type: "primary" },
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
  {
    id: "virtual-tour-360",
    category: "Immersive VR Platform",
    title: "VirtualTour360",
    description: "Create professional virtual tours in WordPress instantly. Build immersive 360 degree experiences with Apple Vision Pro and Meta Quest support without writing a single line of code.",
    image: "./assets/products/virtualtour.png", // Dummy Path
    links: [
      { label: "Visit Site", href: "https://virtualtour360.ai/", type: "primary" },
      { label: "Live Demo", href: "#", type: "accent" }, // Highlighted button
      { label: "View Specs", href: "#", type: "secondary" },
    ],
  },
];