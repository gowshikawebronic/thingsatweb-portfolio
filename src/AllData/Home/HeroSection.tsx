import {
  CheckCircle2,
  Globe,
  Layers,
  Users,
} from "lucide-react"

export const CAROUSEL_DATA = [
  {
    id: "slide1",
    title: "StoreTech",
    headline: "Autonomous Retail Technology",
    description:
      "Cloud-native cross-platform solution powering 150+ unmanned stores with AI checkout, IoT inventory management, and integrated loyalty systems. Proven with 50M+ transactions and a 99.7% success rate",
    stats: ["60% Cost Reduction", "99.7% Success Rate", "50M+ Transactions"],
    cta: "Explore StoreTech",
    img: "./assets/images/storetech-logo-black.png",
    url: "https://vasanthwebronic-oss.github.io/storetech-portfolio/",
  },
  {
    id: "slide2",
    title: "Tanlux",
    headline: "Tanning Studio Automation",
    description:
      "Comprehensive ERP enabling 24/7 unmanned tanning studio operations with mobile booking, automated bed management, smart access control, and integrated retail",
    stats: [
      "70% Labor Cost Reduction",
      "24/7 Operations",
      "Multi-tenant Scalability",
    ],
    cta: "Explore Tanlux",
    img: "./assets/images/tanluxlogo.png",
    url: "https://tanlux.se/",
  },
  {
    id: "slide3",
    title: "Value Charts",
    headline: "Visual Collaboration Platform",
    description:
      "AI-powered cross-platform diagramming and workflow visualization solution that transforms complex business processes into intelligent, interactive diagrams with enterprise-grade collaboration capabilities",
    stats: [
      "Intelligent Mapping",
      "Real-time Collaboration",
      "Workflow Automation",
    ],
    cta: "Explore Value Charts",
    img: "./assets/images/valuechart.png",
    url: "https://www.valueflowsoft.com/",
  },
  {
    id: "slide4",
    title: "FP Analyzer",
    headline: "Manufacturing Intelligence",
    description:
      "Real-time cross-platform IoT monitoring solution that tracks OEE (Overall Equipment Effectiveness), eliminates downtime, and optimizes production workflows through predictive maintenance alerts",
    stats: [
      "Real-time OEE Tracking",
      "Predictive Maintenance",
      "Downtime Elimination",
    ],
    cta: "Explore FP Analyzer",
    img: "./assets/images/fpanalyzer.png",
    url: "https://www.fpanalyzer.se/",
  },
  {
    id: "slide5",
    title: "VirtualTour360",
    headline: "Immersive VR Platform",
    description:
      "Create professional virtual tours in WordPress instantly. Build immersive 360 degree experiences with Apple Vision Pro and Meta Quest support without writing a single line of code",
    stats: [
      "Apple Vision Pro Ready",
      "Meta Quest Support",
      "No-Code Builder",
    ],
    cta: "Explore VirtualTour360",
    img: "./assets/images/liveTourimg.png",
    url: "https://virtualtour360.ai/",
  },
];

export const TRUST_INDICATORS = [
  { target: 500, suffix: "+", label: "Clients", icon: Users },
  { target: 15, suffix: "+", label: "Years", icon: Layers },
  { target: 50, suffix: "+", label: "Countries", icon: Globe },
  { target: 99, suffix: "%", label: "Success", icon: CheckCircle2 },
];