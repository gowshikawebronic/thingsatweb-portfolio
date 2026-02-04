import { ServicePageData } from "../types";

export const DIGITAL_TRANSFORMATION_DATA: ServicePageData = {
  id: "digital-transformation",

  // --- PREVIEW SECTION ---
  preview: {
    title: "Digital Transformation",
    tagline: "Business Evolution",
    description: "End-to-end digital transformation services. Strategy consulting, process automation, customer experience redesign, and change management for enterprise digital evolution",
    image: "./assets/images/Service Images/Digital Transforamtion.png", // Ensure path exists
    icon: "RefreshCw",
    points: [
      "Digital Strategy & Roadmap",
      "Process Automation (RPA)",
      "Customer Experience Design",
      "Change Management"
    ],
 technologies: [
        { name: "Google Ads", logo: "./assets/images/Technology/Google_Ads_logo.svg" },
        { name: "Google Analytics", logo: "./assets/images/Technology/Logo_Google_Analytics.svg" },
        { name: "Bing Ads", logo: "./assets/images/Technology/Bing_Fluent_Logo_Text.svg" },
        { name: "Facebook Ads", logo: "./assets/images/Technology/2023_Facebook_icon.svg" },
        { name: "LinkedIn Ads", logo: "./assets/images/Technology/LinkedIn_icon.svg" },
        { name: "Instagram", logo: "./assets/images/Technology/Instagram_logo_2022.svg" },
        { name: "YouTube", logo: "./assets/images/Technology/YouTube_2024.svg" },
        {
          name: "Google Business Profile",
          logo: "./assets/images/Technology/Google-My-Business_logo.svg",
        },
      ],
  },

  // 1. HERO SECTION
  hero: {
    badge: "Digital Transformation Services",
    titlePrefix: "Transform Your Business for the",
    titleHighlight: "Digital Age",
    description: "Comprehensive transformation strategy and execution. We adopt a technology-agnostic approach focused on business outcomes, backed by a proven methodology across 200+ transformations",
    features: [
      "Comprehensive strategy and execution",
      "Proven methodology (200+ projects)",
      "Business-outcome focused",
      "Sustainable change management"
    ],
    ctaPrimary: "Start Your Journey",
    ctaSecondary: "Download Framework"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Service Overview",
    heading: "Reimagining Business for the",
    highlight: "Modern Era",
    content: [
      "Digital transformation is a fundamental business imperative. Organizations that successfully transform achieve faster growth, higher profitability, and improved employee engagement. However, 70% of initiatives fail due to lack of vision or poor execution",
      "Webronic's approach is built on 15+ years of experience. We start with business objectives revenue growth, cost reduction, customer satisfaction and work backward to technology solutions. "
    ],
    differentiators: [
      {
        title: "Business Outcomes First",
        description: "Technology serves business goals, not the reverse",
        icon: "Target"
      },
      {
        title: "Proven Methodology",
        description: "Battle-tested framework guiding 200+ successful transformations",
        icon: "CheckCircle"
      },
      {
        title: "Technology Agnostic",
        description: "We recommend the best solutions for you, not just what we resell",
        icon: "Layers"
      },
      {
        title: "Change Management",
        description: "Embedded throughout to ensure stakeholder buy-in and adoption",
        icon: "Users"
      },
      {
        title: "End-to-End Partnership",
        description: "From strategy through implementation and ongoing optimization",
        icon: "Infinity"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core Capabilities",
    titleLine1: "Holistic",
    titleHighlight: "Transformation Services",
    description: "We navigate the complexity of digital evolution by addressing strategy, process, experience, and technology simultaneously",
    cards: [
      {
        title: "Digital Strategy & Consulting",
        desc: "Define your digital future. We help articulate vision, identify priorities, and create actionable roadmaps aligned with business objectives",
        icon: "Compass",
        color: "text-blue-600",
        bg: "bg-blue-50"
      },
      {
        title: "Business Process Transformation",
        desc: "Reimagine how work gets done. We redesign processes to be customer-centric and automate repetitive tasks using RPA and AI",
        icon: "Settings",
        color: "text-indigo-600",
        bg: "bg-indigo-50"
      },
      {
        title: "Customer Experience Redesign",
        desc: "Put customers at the center. Transform touchpoints across web, mobile, and physical channels for seamless, personalized journeys",
        icon: "Heart",
        color: "text-pink-600",
        bg: "bg-pink-50"
      },
      {
        title: "Digital Operating Model",
        desc: "Transform how you work. Evolve organizational structures and adopt Agile/DevOps methodologies to support innovation",
        icon: "GitMerge",
        color: "text-purple-600",
        bg: "bg-purple-50"
      },
      {
        title: "Change Management",
        desc: "Ensure transformation sticks. Our approach ensures stakeholder buy-in, smooth adoption, and sustained culture change",
        icon: "Users",
        color: "text-green-600",
        bg: "bg-green-50"
      },
      {
        title: "Technology Modernization",
        desc: "Modernize your foundation. Transform legacy landscapes into cloud-native, API-driven architectures",
        icon: "Server",
        color: "text-orange-600",
        bg: "bg-orange-50"
      }
    ],
    footer: {
      left: {
        title: "Typical Journey",
        type: "highlight",
        content: "18-24 Months"
      },
      right: {
        title: "Key Deliverables",
        type: "tags",
        content: ["Maturity Assessment", "Transformation Roadmap", "Operating Model", "Change Strategy"]
      }
    }
  },

  // 4. PROCESS SECTION
  process: {
    title: "Webronic Digital Transformation Framework",
    description: "Our proven 6-phase methodology ensures a structured path from vision to value realization",
    phases: [
      {
        phase: "Phase 1",
        title: "Envision",
        duration: "Weeks 1-4",
        icon: "Eye",
        color: "bg-blue-600",
        objectives: [
          "Assess digital maturity",
          "Develop vision workshops",
          "Align stakeholders",
          "Define success metrics"
        ],
        activities: [
          "Current state analysis",
          "Executive interviews",
          "Market benchmarking",
          "Vision statement creation"
        ],
        deliverables: [
          "Maturity assessment report",
          "Digital vision statement",
          "High-level goals"
        ]
      },
      {
        phase: "Phase 2",
        title: "Strategy",
        duration: "Weeks 5-10",
        icon: "Map",
        color: "bg-indigo-600",
        objectives: [
          "Identify initiatives",
          "Develop business cases",
          "Prioritize roadmap",
          "Design governance"
        ],
        activities: [
          "Opportunity identification",
          "ROI modeling",
          "Roadmap sequencing",
          "Governance charter design"
        ],
        deliverables: [
          "Transformation roadmap",
          "Business cases",
          "Change management strategy"
        ]
      },
      {
        phase: "Phase 3",
        title: "Design",
        duration: "Months 3-5",
        icon: "PenTool",
        color: "bg-purple-600",
        objectives: [
          "Redesign processes",
          "Architect technology",
          "Design customer experience",
          "Define operating model"
        ],
        activities: [
          "Process mapping",
          "Architecture blueprinting",
          "UX prototyping",
          "Org structure design"
        ],
        deliverables: [
          "Process documentation",
          "Architecture blueprints",
          "Experience prototypes"
        ]
      },
      {
        phase: "Phase 4",
        title: "Build",
        duration: "Months 6-12",
        icon: "Code",
        color: "bg-pink-600",
        objectives: [
          "Implement technology",
          "Develop automation",
          "Integrate systems",
          "Create training content"
        ],
        activities: [
          "Agile development",
          "RPA implementation",
          "Data migration",
          "Training material creation"
        ],
        deliverables: [
          "Working systems",
          "Automated processes",
          "Integrated data",
          "Training materials"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deploy",
        duration: "Months 13-18",
        icon: "Rocket",
        color: "bg-orange-600",
        objectives: [
          "Execute pilots",
          "Manage change",
          "Deliver training",
          "Full-scale rollout"
        ],
        activities: [
          "Pilot launches",
          "User training sessions",
          "Go-live support",
          "Adoption tracking"
        ],
        deliverables: [
          "Production systems",
          "Trained users",
          "Support processes",
          "Adoption metrics"
        ]
      },
      {
        phase: "Phase 6",
        title: "Optimize",
        duration: "Ongoing",
        icon: "TrendingUp",
        color: "bg-green-600",
        objectives: [
          "Monitor performance",
          "Incorporate feedback",
          "Pipeline innovation",
          "Continuous improvement"
        ],
        activities: [
          "KPI monitoring",
          "User feedback loops",
          "New feature release",
          "Tech debt reduction"
        ],
        deliverables: [
          "Optimization reports",
          "Enhancement releases",
          "Innovation roadmap"
        ]
      }
    ]
  },

  // 5. TECH STACK SECTION
  techStack: {
    heading: "Transformation Ecosystem",
    description: "We leverage a modern, diverse technology stack to drive digital excellence across the enterprise. ",
    frameworks: [
      { name: "Agile & Scrum", desc: "Iterative delivery methodologies" },
      { name: "SAFe", desc: "Scaled Agile Framework for enterprise" },
      { name: "DevOps", desc: "CI/CD and infrastructure automation" },
      { name: "RPA", desc: "Robotic Process Automation" },
      { name: "Design Thinking", desc: "User-centric problem solving" }
    ],
    llms: [
      { name: "ServiceNow", desc: "Digital workflow automation" },
      { name: "Salesforce", desc: "Customer relationship management" },
      { name: "SAP S/4HANA", desc: "Intelligent enterprise ERP" },
      { name: "Pega", desc: "Business process management" }
    ],
    mlOps: ["Jenkins", "Docker", "Kubernetes", "Terraform", "GitLab"],
    cloudPlatforms: [
      {
        provider: "Cloud Infrastructure",
        color: "text-orange-500",
        services: ["AWS", "Azure", "Google Cloud", "Hybrid Cloud"]
      },
      {
        provider: "Data & Analytics",
        color: "text-blue-500",
        services: ["Tableau", "PowerBI", "Snowflake", "Databricks"]
      },
      {
        provider: "Integration",
        color: "text-purple-500",
        services: ["MuleSoft", "Apigee", "Dell Boomi", "Kafka"]
      }
    ]
  },

  // 6. INDUSTRIES SECTION
  industries: {
    heading: "Industry Transformations",
    description: "Tailored digital strategies addressing specific challenges in manufacturing, retail, finance, and healthcare",
    items: [
      {
        id: "manufacturing",
        label: "Manufacturing",
        icon: "Factory",
        theme: "blue",
        description: "Industry 4.0 implementation with IoT and predictive maintenance",
        features: [
          {
            title: "Smart Factory",
            desc: "IoT sensor networks and digital twins",
            icon: "Cpu",
            caseStudy: {
              title: "Auto Manufacturer",
              result: "28% Productivity Increase"
            }
          },
          {
            title: "Quality Control",
            desc: "AI-driven inspection reducing defects",
            icon: "ScanEye"
          }
        ]
      },
      {
        id: "retail",
        label: "Retail & E-commerce",
        icon: "ShoppingBag",
        theme: "green",
        description: "Unified omnichannel experiences and inventory management",
        features: [
          {
            title: "Omnichannel",
            desc: "Seamless buy online, pick up in store",
            icon: "Smartphone",
            caseStudy: {
              title: "Regional Chain",
              result: "35% Online Revenue Growth"
            }
          },
          {
            title: "Personalization",
            desc: "Customer data platforms driving loyalty",
            icon: "UserCheck"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES SECTION
  caseStudies: {
    heading: "Real World Impact",
    description: "See how our digital transformation strategies translate into measurable business value",
    items: [
      {
        id: 1,
        category: "Manufacturing",
        client: "Global Auto Parts Mfr",
        title: "Industry 4.0 Transformation",
        icon: "Factory",
        color: "text-blue-600",
        challenge: "High quality defect rates (4.5%), limited supply chain visibility, and siloed operations impacting delivery",
        solution: "Implemented Cloud ERP (SAP), IoT sensors on 200+ machines, and AI-driven quality inspection",
        implementation: [
          "Cloud ERP Implementation",
          "IoT Sensor Network",
          "AI Quality Inspection",
          "Agile Operating Model"
        ],
        results: [
          { label: "Defect Rate", value: "4.5% to 0.8%" },
          { label: "Productivity", value: "+28%" },
          { label: "Annual Savings", value: "$12M" }
        ],
        quote: "The transformation paid for itself in 2.1 years. We now have real-time visibility into every aspect of production",
        author: "Chief Operating Officer"
      },
      {
        id: 2,
        category: "Retail",
        client: "Regional Retail Chain",
        title: "Omnichannel Evolution",
        icon: "ShoppingBag",
        color: "text-green-600",
        challenge: "Declining foot traffic, no e-commerce presence, and fragmented customer data facing competition from online giants",
        solution: "Launched Shopify Plus platform, mobile app, and unified inventory system with a customer data platform",
        implementation: [
          "E-commerce Platform",
          "Unified Inventory",
          "Customer Data Platform",
          "Mobile POS"
        ],
        results: [
          { label: "Online Rev", value: "35% of Total" },
          { label: "Inventory Turns", value: "+40%" },
          { label: "Retention", value: "+18%" }
        ],
        quote: "We went from zero online presence to a seamless omnichannel retailer in 18 months",
        author: "CEO"
      },
      {
        id: 3,
        category: "Finance",
        client: "Regional Bank",
        title: "Digital Banking Overhaul",
        icon: "Landmark",
        color: "text-purple-600",
        challenge: "Losing customers to digital-first banks due to 30-minute account opening process and limited mobile capabilities",
        solution: "Developed new mobile app, automated account opening, and implemented AI chatbots for service",
        implementation: [
          "Mobile App Dev",
          "Account Automation",
          "AI Chatbot",
          "Cloud Migration"
        ],
        results: [
          { label: "Acct Opening", value: "3 Mins" },
          { label: "Digital Adoption", value: "68%" },
          { label: "Cost-to-Serve", value: "-52%" }
        ],
        quote: "Our customer satisfaction NPS jumped 22 points. We are acquiring customers faster than ever",
        author: "VP of Digital"
      }
    ]
  },

  // 8. FAQ SECTION
  faq: {
    heading: "Transformation FAQs",
    items: [
      {
        question: "How long does digital transformation take?",
        answer: "Timelines vary by scope, but typically 18-36 months for enterprise transformation. We use phased approaches (Envision, Strategy, Build, Deploy) to deliver value incrementally throughout the journey"
      },
      {
        question: "Do we need to replace all our systems?",
        answer: "Not necessarily. Our approach is to keep systems providing value, integrate legacy systems via APIs, and replace only when necessary. We favor gradual migration over 'rip and replace'"
      },
      {
        question: "How do you ensure employee adoption?",
        answer: "Change management is embedded from day one. We use early stakeholder involvement, comprehensive role-based training, super-user networks, and continuous support to ensure the culture shifts alongside the technology"
      },
      {
        question: "Can we transform incrementally?",
        answer: "Yes. We recommend a phased transformation starting with high-value, lower-risk initiatives to build momentum (quick wins) before expanding scope to core transformation initiatives"
      },
      {
        question: "How do you measure success?",
        answer: "We track metrics across four dimensions: Business (Revenue, Cost), Customer (NPS, Retention), Operational (Productivity, Quality), and Financial (ROI, Payback Period)"
      }
    ]
  },

  // 9. GET STARTED SECTION
  getStarted: {
    badge: "Start Your Evolution",
    titleLines: ["Ready to Transform", "Your Business?"],
    description: "Whether you need a maturity assessment or a full transformation roadmap, we have the right engagement model",
    cards: [
      {
        id: "assessment",
        title: "Free Maturity Assessment",
        description: "Evaluate your current state across technology, process, and culture dimensions",
        icon: "BarChart2",
        theme: "light",
        list: [
          "Current state evaluation",
          "Maturity scoring",
          "Priority opportunities",
          "High-level roadmap"
        ],
        cta: { text: "Request Assessment", link: "#assessment" }
      },
      {
        id: "workshop",
        title: "Transformation Workshop",
        description: "Intensive 3-5 day engagement to define your vision and strategy",
        icon: "Users",
        theme: "dark",
        list: [
          "Digital vision & strategy",
          "Detailed roadmap",
          "Business case & ROI",
          "Implementation plan"
        ],
        cta: { text: "Schedule Workshop", link: "#workshop" }
      }
    ],
    contact: {
      title: "Contact Transformation Team",
      subtitle: "Expert guidance available",
      methods: [
        { label: "Email Us", value: "transformation@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "AI & Machine Learning", href: "/services/ai-machine-learning", icon: "Brain", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Cloud Services", href: "/services/cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "Cybersecurity", href: "/services/cybersecurity", icon: "Shield", color: "text-red-500", bg: "bg-red-50" }
    ],
    columns: [
      {
        title: "Insights",
        icon: "Lightbulb",
        items: [
          { label: "Transformation Framework", href: "#" },
          { label: "Change Management Guide", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "Maturity Calculator", href: "#" },
          { label: "ROI Estimator", href: "#" }
        ]
      }
    ]
  }
};