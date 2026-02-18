import { ServicePageData } from "../types";

export const IOT_DATA: ServicePageData = {
  id: "iot-solutions",

  // --- PREVIEW SECTION ---
  preview: {
    title: "IoT Solutions",
    tagline: "Intelligent Connectivity",
    description: "Enterprise IoT solutions for manufacturing, retail, and healthcare. Industrial IoT, smart buildings, asset tracking, and predictive maintenance with real-time analytics",
    image: "./assets/images/Service Images/IoT - Webronic Industires Private Limited.png", // Ensure path exists
    icon: "Wifi",
    localIcon: "./assets/images/Icons/IoT.svg",
    points: [
      "Industrial IoT (IIoT)",
      "Smart Building Automation",
      "Predictive Maintenance",
      "Asset Tracking"
    ],
   technologies: [
        { name: "Raspberry Pi", logo: "./assets/images/Technology/Raspberry_Pi_Logo.svg" },
        { name: "TensorFlow", logo: "./assets/images/Technology/TensorFlow_logo.svg" },
        { name: "NodeMCU", logo: "./assets/images/Technology/nodemcu.png" },
        { name: "Arduino", logo: "./assets/images/Technology/Arduino_Logo_Registered.svg" },
        { name: "OpenCV", logo: "./assets/images/Technology/OpenCV_logo_black.svg" },
        { name: "OpenVINO", logo: "./assets/images/Technology/OpenVINO_logo.svg" },
        { name: "PyTorch", logo: "./assets/images/Technology/Pytorch_logo.png" },
      ],
  },

  // 1. HERO SECTION
  hero: {
    badge: "IoT Solutions & Services",
    titlePrefix: "Connect, Monitor, and Optimize with",
    titleHighlight: "Intelligent IoT Ecosystems",
    description: "Transform your business by connecting physical devices to digital systems. We provide end-to-end implementation from sensors to cloud, enabling real-time monitoring and automation",
    features: [
      "End-to-end implementation (Sensors to Cloud)",
      "Real-time monitoring & predictive analytics",
      "Industrial IoT expertise (Industry 4.0)",
      "Proven platforms: AWS IoT, Azure IoT, Google Cloud"
    ],
    ctaPrimary: "Schedule IoT Consultation",
    ctaSecondary: "View IoT Case Studies"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Service Overview",
    heading: "The IoT Opportunity:",
    highlight: "Visibility & Control",
    content: [
      "The Internet of Things (IoT) is transforming industries by connecting physical devices to digital systems, enabling real-time monitoring, automation, and data-driven decision-making. From manufacturing equipment to smart buildings, IoT creates unprecedented visibility",
      "Webronic Industries specializes in designing enterprise-grade IoT solutions. With our proprietary platforms processing data from thousands of connected devices globally, we bring proven expertise to every engagement. "
    ],
    differentiators: [
      {
        title: "Real-Time Visibility",
        description: "Monitor assets and processes instantly. Know exactly what's happening at any moment",
        icon: "Eye"
      },
      {
        title: "Predictive Intelligence",
        description: "Move from reactive to proactive. Predict equipment failures before they impact operations",
        icon: "BrainCircuit"
      },
      {
        title: "Full-Stack Capability",
        description: "We handle every layer: Device, Edge, Network, Cloud, and Application",
        icon: "Layers"
      },
      {
        title: "Security-First",
        description: "Built-in security from device authentication to encrypted cloud communication",
        icon: "ShieldCheck"
      },
      {
        title: "Proven Platforms",
        description: "Experience managing 150+ locations and 500+ production machines",
        icon: "Server"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core IoT Services",
    titleLine1: "End-to-End",
    titleHighlight: "IoT Solutions",
    description: "We deliver comprehensive IoT services ranging from industrial automation to smart environmental monitoring",
    cards: [
      {
        title: "Industrial IoT (IIoT)",
        desc: "Transform manufacturing with Industry 4.0. Connect legacy equipment, enable OEE tracking, and automate quality control",
        icon: "Factory",
        color: "text-orange-600",
        bg: "bg-orange-50"
      },
      {
        title: "Smart Buildings",
        desc: "Optimize operations and comfort. HVAC optimization, smart lighting, occupancy sensing, and energy management",
        icon: "Building",
        color: "text-blue-600",
        bg: "bg-blue-50"
      },
      {
        title: "Asset Tracking",
        desc: "Real-time visibility of physical assets. Indoor positioning (BLE/WiFi) and outdoor fleet tracking (GPS/Cellular)",
        icon: "MapPin",
        color: "text-green-600",
        bg: "bg-green-50"
      },
      {
        title: "Predictive Maintenance",
        desc: "Condition-based monitoring using vibration and thermal analysis to predict failures before they occur",
        icon: "Activity",
        color: "text-red-600",
        bg: "bg-red-50"
      },
      {
        title: "Environmental Monitoring",
        desc: "Deploy sensor networks for air quality, water safety, and soil conditions to ensure compliance and safety",
        icon: "Droplets",
        color: "text-teal-600",
        bg: "bg-teal-50"
      },
      {
        title: "IoT Platform Dev",
        desc: "Custom IoT platforms for unique requirements. Scalable device management, data ingestion, and analytics engines",
        icon: "Cpu",
        color: "text-purple-600",
        bg: "bg-purple-50"
      }
    ],
    footer: {
      left: {
        title: "Typical Pilot",
        type: "highlight",
        content: "6-12 Weeks"
      },
      right: {
        title: "Key Deliverables",
        type: "tags",
        content: ["IoT Architecture", "Sensor Network", "Analytics Dashboard", "Mobile App"]
      }
    }
  },

  // 4. PROCESS SECTION
  process: {
    title: "Implementation Process",
    description: "A structured approach to IoT adoption, moving from initial assessment to full-scale enterprise rollout",
    phases: [
      {
        phase: "Phase 1",
        title: "Assessment & Design",
        duration: "3-4 weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Define business objectives",
          "Assess current infrastructure",
          "Select sensor technology",
          "Design IoT architecture"
        ],
        activities: [
          "Use case identification",
          "Connectivity evaluation",
          "Security requirement analysis",
          "Protocol selection"
        ],
        deliverables: [
          "Solution architecture doc",
          "Bill of Materials (BOM)",
          "Implementation plan",
          "ROI projections"
        ]
      },
      {
        phase: "Phase 2",
        title: "Pilot Implementation",
        duration: "4-8 weeks",
        icon: "PlayCircle",
        color: "bg-purple-600",
        objectives: [
          "Deploy sensors in limited scope",
          "Configure edge gateways",
          "Validate data flow",
          "Test dashboards"
        ],
        activities: [
          "Sensor installation",
          "Cloud platform setup",
          "Data quality verification",
          "User feedback collection"
        ],
        deliverables: [
          "Working pilot system",
          "Data validation report",
          "Refined requirements",
          "User training"
        ]
      },
      {
        phase: "Phase 3",
        title: "Full Deployment",
        duration: "2-6 months",
        icon: "Server",
        color: "bg-green-600",
        objectives: [
          "Rollout across all assets",
          "System integration",
          "Performance testing",
          "Security hardening"
        ],
        activities: [
          "Mass sensor deployment",
          "Network configuration",
          "ERP/MES integration",
          "Failover testing"
        ],
        deliverables: [
          "Production IoT system",
          "Integrated analytics",
          "Operational manuals",
          "Security audit"
        ]
      },
      {
        phase: "Phase 4",
        title: "Optimization",
        duration: "Ongoing",
        icon: "TrendingUp",
        color: "bg-orange-600",
        objectives: [
          "Monitor system performance",
          "Refine ML models",
          "Expand use cases",
          "Continuous improvement"
        ],
        activities: [
          "Data analysis for insights",
          "Model retraining",
          "Firmware updates",
          "Feature expansion"
        ],
        deliverables: [
          "Optimization reports",
          "Predictive model updates",
          "New feature releases",
          " ROI tracking"
        ]
      }
    ]
  },

  // 5. TECH STACK SECTION
  techStack: {
    heading: "IoT Technology Stack",
    description: "We utilize a robust stack of protocols, hardware, and cloud platforms to build scalable and secure IoT ecosystems",
    frameworks: [
      { name: "MQTT", desc: "Lightweight publish-subscribe protocol for telemetry" },
      { name: "CoAP", desc: "RESTful protocol for resource-constrained devices" },
      { name: "LoRaWAN", desc: "Long-range, low-power wide-area networking" },
      { name: "WebSocket", desc: "Real-time bidirectional data for dashboards" },
      { name: "NB-IoT", desc: "Cellular protocol for wide coverage" }
    ],
    // Using 'llms' key for Hardware & Sensors
    llms: [
      { name: "ESP32 / STM32", desc: "Microcontrollers for edge devices" },
      { name: "Raspberry Pi", desc: "Edge gateways and local processing" },
      { name: "Industrial PLCs", desc: "Siemens, Allen-Bradley integration" },
      { name: "MEMS Sensors", desc: "Vibration, temperature, and motion" }
    ],
    // Using 'mlOps' key for Edge & Analytics
    mlOps: ["AWS Greengrass", "Azure IoT Edge", "TensorFlow Lite", "InfluxDB", "Grafana"],
    cloudPlatforms: [
      {
        provider: "Cloud IoT",
        color: "text-orange-500",
        services: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT", "Device Shadow"]
      },
      {
        provider: "Connectivity",
        color: "text-blue-500",
        services: ["WiFi", "Bluetooth LE", "4G LTE/5G", "Zigbee"]
      },
      {
        provider: "Data & Storage",
        color: "text-purple-500",
        services: ["DynamoDB", "TimescaleDB", "Data Lake", "Kinesis"]
      }
    ]
  },

  // 6. INDUSTRIES SECTION
  industries: {
    heading: "Industry Applications",
    description: "IoT solutions tailored to specific operational needs in manufacturing, buildings, and logistics",
    items: [
      {
        id: "manufacturing",
        label: "Manufacturing (Industry 4.0)",
        icon: "Factory",
        theme: "blue",
        description: "Predictive maintenance and OEE tracking for smart factories. ",
        features: [
          {
            title: "Predictive Maint",
            desc: "Vibration analysis predicting bearing failures 2 weeks in advance",
            icon: "Activity",
            caseStudy: {
              title: "Auto Parts Mfr",
              result: "68% Downtime Reduction"
            }
          },
          {
            title: "OEE Tracking",
            desc: "Real-time production visibility vs targets",
            icon: "BarChart"
          }
        ]
      },
      {
        id: "logistics",
        label: "Logistics & Fleet",
        icon: "Truck",
        theme: "green",
        description: "Real-time asset tracking and route optimization. ",
        features: [
          {
            title: "Fleet Tracking",
            desc: "GPS/OBD-II tracking reducing fuel costs by 22%",
            icon: "MapPin",
            caseStudy: {
              title: "Logistics Co",
              result: "$340K Annual Savings"
            }
          },
          {
            title: "Cold Chain",
            desc: "Temperature monitoring for sensitive cargo",
            icon: "Thermometer"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES SECTION
  caseStudies: {
    heading: "IoT Success Stories",
    description: "Real-world examples of how connected ecosystems drive efficiency and ROI",
    items: [
      {
        id: 1,
        category: "Manufacturing",
        client: "Automotive Parts Mfr",
        title: "Predictive Maintenance",
        icon: "Factory",
        color: "text-orange-600",
        challenge: "Frequent unplanned downtime (5 hrs/week/machine) costing $8M annually with no visibility into machine health",
        solution: "Implemented IIoT system with vibration/temp sensors on 200 machines, Edge processing, and AWS IoT Core analytics",
        implementation: [
          "Vibration & Temp Sensors",
          "Edge Computing Gateways",
          "ML Failure Prediction",
          "SAP Integration"
        ],
        results: [
          { label: "Downtime", value: "-68%" },
          { label: "Maint. Costs", value: "-32%" },
          { label: "Annual Savings", value: "$5.4M" }
        ],
        quote: "We prevented a catastrophic spindle failure that would have cost $200k. The system paid for itself in 8 months",
        author: "Plant Manager"
      },
      {
        id: 2,
        category: "Smart Buildings",
        client: "Corporate HQ",
        title: "Energy Management",
        icon: "Building",
        color: "text-blue-600",
        challenge: "High energy costs ($850K/yr), manual HVAC schedules, and frequent occupant comfort complaints",
        solution: "Deployed 1000+ sensors for occupancy-based HVAC and smart lighting, integrated with Azure IoT Hub",
        implementation: [
          "Occupancy Sensors",
          "Smart Lighting Control",
          "Zone-based HVAC",
          "Real-time Dashboard"
        ],
        results: [
          { label: "Energy Cost", value: "-34%" },
          { label: "Lighting usage", value: "-52%" },
          { label: "Savings", value: "$289K/yr" }
        ],
        quote: "Not only did we save nearly $300k, but employee comfort complaints dropped significantly",
        author: "Facilities Director"
      },
      {
        id: 3,
        category: "Logistics",
        client: "Logistics Company",
        title: "Fleet Asset Tracking",
        icon: "Truck",
        color: "text-green-600",
        challenge: "No real-time visibility, inefficient routing, high fuel costs, and inability to provide accurate ETAs",
        solution: "GPS-based fleet tracking with OBD-II integration, route optimization software, and driver mobile app",
        implementation: [
          "GPS/OBD-II Trackers",
          "Route Optimization",
          "Driver Behavior Monitor",
          "Geofencing"
        ],
        results: [
          { label: "Fuel Costs", value: "-22%" },
          { label: "Delivery Time", value: "-27%" },
          { label: "Unauthorized Use", value: "0%" }
        ],
        quote: "We reduced miles driven by 18% and can finally give customers accurate arrival times",
        author: "Fleet Operations VP"
      }
    ]
  },

  // 8. FAQ SECTION
  faq: {
    heading: "IoT Frequently Asked Questions",
    items: [
      {
        question: "What is the typical ROI for IoT projects?",
        answer: "Most projects achieve positive ROI within 2 years. Payback varies based on scale and asset criticality, with predictive maintenance often showing ROI in under 12 months"
      },
      {
        question: "How secure is your IoT solution?",
        answer: "Security is critical. We implement device authentication, encrypted communication (TLS/SSL), network segmentation, and regular security updates, following standards like IEC 62443"
      },
      {
        question: "What happens if internet connectivity is lost?",
        answer: "Our edge computing solutions store data locally during outages and automatically sync when connectivity is restored. Critical alerts can be sent via backup channels"
      },
      {
        question: "Can you integrate with existing legacy equipment?",
        answer: "Yes. We use retrofit sensors and gateways to connect legacy machines without replacing them, enabling smart features on older equipment"
      },
      {
        question: "Do I need IT staff to manage the system?",
        answer: "Not necessarily. We offer fully managed services including monitoring, updates, and troubleshooting, or we can train your existing team"
      }
    ]
  },

  // 9. GET STARTED SECTION
  getStarted: {
    badge: "Connect Your Business",
    titleLines: ["Ready to Deploy", "Intelligent IoT?"],
    description: "Start with a risk-free assessment or a rapid Proof of Concept to validate ROI",
    cards: [
      {
        id: "assessment",
        title: "Free IoT Assessment",
        description: "Identify high-value use cases and get a technical feasibility analysis for your facility",
        icon: "ClipboardCheck",
        theme: "light",
        list: [
          "Use case identification",
          "Feasibility analysis",
          "ROI estimation",
          "Architecture recommendation"
        ],
        cta: { text: "Request Assessment", link: "#assessment" }
      },
      {
        id: "poc",
        title: "IoT Proof of Concept",
        description: "A limited 8-12 week pilot deployment to demonstrate value with real data",
        icon: "Zap",
        theme: "dark",
        list: [
          "Sensor deployment",
          "Dashboard setup",
          "Data validation",
          "Performance report"
        ],
        cta: { text: "Discuss POC", link: "#poc" }
      }
    ],
    contact: {
      title: "Contact IoT Team",
      subtitle: "Direct access to solution architects",
      methods: [
        { label: "Email Us", value: "iot@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "AI & Machine Learning", href: "/services/ai-machine-learning", icon: "Brain", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Cloud Services", href: "/services/cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "Data Analytics", href: "/services/data-analytics", icon: "BarChart", color: "text-blue-500", bg: "bg-blue-50" }
    ],
    columns: [
      {
        title: "Platforms",
        icon: "Layout",
        items: [
          { label: "FP Analyzer (Manufacturing)", href: "#" },
          { label: "StoreTech (Retail)", href: "#" }
        ]
      },
      {
        title: "Insights",
        icon: "Lightbulb",
        items: [
          { label: "Guide to Industry 4.0", href: "#" },
          { label: "IoT Security Checklist", href: "#" }
        ]
      }
    ]
  }
};