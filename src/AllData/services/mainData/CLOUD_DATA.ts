import { ServicePageData } from "../types";

export const CLOUD_DATA: ServicePageData = {
  id: "cloud-services",

  // --- NEW PREVIEW SECTION ---
  preview: {
    title: "Cloud Services",
    tagline: "Scalable Infrastructure",
    description: "Enterprise cloud solutions across AWS, Azure, and Google Cloud. Cloud migration, cloud-first development, multi-cloud management, and hybrid cloud architecture",
    image: "./assets/images/Service Images/Cloud Services.png", // Ensure this path exists
    icon: "Cloud",
    points: [
      "Seamless Cloud Migration",
      "Multi-Cloud Expertise",
      "Cost Optimization",
      "24/7 Operations Support"
    ],
   technologies: [
      { name: "AWS", logo: "./assets/images/Technology/Amazon_Web_Services_Logo.svg" },
      { name: "Azure", logo: "./assets/images/Technology/Microsoft_Azure.svg" },
      { name: "Google Cloud", logo: "./assets/images/Technology/Google_Cloud_logo.svg" },
      { name: "Kubernetes", logo: "./assets/images/Technology/Kubernetes_logo_without_workmark.svg" },
      { name: "Terraform", logo: "./assets/images/Technology/Terraform_Logo.svg" }
    ]
  },

  // 1. HERO SECTION
  hero: {
    badge: "Enterprise Cloud Computing",
    titlePrefix: "Accelerate Digital Transformation with",
    titleHighlight: "Scalable Infrastructure",
    description: "Webronic Industries delivers comprehensive cloud services guiding organizations through every stage of their cloud journey. Achieve faster time-to-market, enhanced security, and significant cost advantages",
    features: [
      "Seamless cloud migration with zero downtime",
      "Multi-cloud expertise (AWS, Azure, Google Cloud)",
      "Cost optimization reducing spend by 30-40%",
      "24/7 cloud operations and support"
    ],
    ctaPrimary: "Get Cloud Assessment",
    ctaSecondary: "View Case Studies"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Service Overview",
    heading: "Cloud Computing as a",
    highlight: "Business Imperative",
    content: [
      "Cloud computing has evolved from a technology trend into a fundamental business imperative. Organizations leveraging cloud infrastructure achieve faster time-to-market, improved scalability, enhanced security, and significant cost advantages over traditional on-premises deployments",
      "Webronic Industries delivers comprehensive cloud services that guide organizations through every stage of their cloud journey from initial strategy and migration planning through implementation, optimization, and ongoing management. We've successfully migrated over 500 applications to the cloud and manage multi-cloud environments processing billions of transactions monthly"
    ],
    differentiators: [
      {
        title: "Strategic Consulting",
        description: "Aligning cloud initiatives with business objectives to maximize ROI",
        icon: "Lightbulb"
      },
      {
        title: "Expert Implementation",
        description: "Leveraging cloud-native services and best practices for optimal performance",
        icon: "CheckCircle"
      },
      {
        title: "Continuous Optimization",
        description: "Ensuring maximum value from cloud investments through ongoing tuning",
        icon: "TrendingUp"
      },
      {
        title: "Certified Partnerships",
        description: "Advanced status with AWS, Azure, and Google Cloud Platform",
        icon: "Award"
      },
      {
        title: "Multi-Cloud Focus",
        description: "Expertise preventing vendor lock-in across all major providers",
        icon: "Globe"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core Services",
    titleLine1: "Comprehensive",
    titleHighlight: "Cloud Capabilities",
    description: "Whether you're migrating legacy applications, building cloud-native solutions, or optimizing existing environments, we provide strategic guidance and technical execution",
    cards: [
      {
        title: "Cloud Strategy & Consulting",
        desc: "Navigate the complex cloud landscape. We provide readiness assessments, TCO analysis, and architectural design to align technology with business goals",
        icon: "Compass",
        color: "text-blue-600",
        bg: "bg-blue-50"
      },
      {
        title: "Cloud Migration Services",
        desc: "Seamless transitions with minimal risk. We utilize Rehost, Replatform, and Refactor strategies to ensure zero data loss and minimal downtime",
        icon: "ArrowRightLeft",
        color: "text-indigo-600",
        bg: "bg-indigo-50"
      },
      {
        title: "Cloud Native Development",
        desc: "Build scalable applications using microservices, containerization (Kubernetes), and serverless computing for maximum agility",
        icon: "Code2",
        color: "text-purple-600",
        bg: "bg-purple-50"
      },
      {
        title: "Multi-Cloud & Hybrid",
        desc: "Avoid vendor lock-in. Optimize workload placement across AWS, Azure, and GCP while integrating seamlessly with on-premises infrastructure",
        icon: "Network",
        color: "text-green-600",
        bg: "bg-green-50"
      },
      {
        title: "Cost Optimization",
        desc: "Reduce cloud spending by 30-50%. We implement right-sizing, reserved instances, and auto-scaling to maximize efficiency",
        icon: "DollarSign",
        color: "text-emerald-600",
        bg: "bg-emerald-50"
      },
      {
        title: "Security & Compliance",
        desc: "Enterprise-grade security. Identity management, encryption, and compliance with GDPR, HIPAA, PCI DSS, and SOC 2",
        icon: "ShieldCheck",
        color: "text-red-600",
        bg: "bg-red-50"
      }
    ],
    footer: {
      left: {
        title: "Typical Migration",
        type: "highlight",
        content: "3-6 Months"
      },
      right: {
        title: "Key Deliverables",
        type: "tags",
        content: ["Migration Roadmap", "Cloud Architecture", "TCO/ROI Models", "Security Framework"]
      }
    }
  },

  // 4. PROCESS SECTION
  process: {
    title: "Webronic Cloud Transformation Framework",
    description: "Our proven migration methodology ensures seamless transitions with minimal risk and disruption, guiding you from assessment to ongoing optimization",
    phases: [
      {
        phase: "Phase 1",
        title: "Assess",
        duration: "Weeks 1-4",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Application discovery and inventory",
          "Dependency mapping",
          "Performance baselining",
          "Cost analysis & Risk assessment"
        ],
        activities: [
          "Technical dependencies analysis",
          "Data volume assessment",
          "Compliance review",
          "Team capability analysis"
        ],
        deliverables: [
          "Readiness report",
          "Risk assessment",
          "Current cost analysis",
          "Initial roadmap"
        ]
      },
      {
        phase: "Phase 2",
        title: "Plan",
        duration: "Weeks 5-10",
        icon: "Map",
        color: "bg-indigo-600",
        objectives: [
          "Migration strategy definition",
          "Wave planning",
          "Architecture design",
          "Test strategy development"
        ],
        activities: [
          "Detailed migration approach",
          "Resource allocation",
          "Timeline development",
          "Design reference architecture"
        ],
        deliverables: [
          "Migration project plan",
          "Target architecture design",
          "Rollback procedures",
          "Test plans"
        ]
      },
      {
        phase: "Phase 3",
        title: "Pilot",
        duration: "Weeks 11-18",
        icon: "PlayCircle",
        color: "bg-purple-600",
        objectives: [
          "Pilot application migration",
          "Process validation",
          "Performance testing",
          "Team training"
        ],
        activities: [
          "Migrate representative apps",
          "Validate performance & cost",
          "Refine migration process",
          "Stakeholder training"
        ],
        deliverables: [
          "Pilot migration report",
          "Refined runbooks",
          "Validated performance metrics",
          "Training documentation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Migrate",
        duration: "Months 5-12",
        icon: "Server",
        color: "bg-green-600",
        objectives: [
          "Wave-based migration execution",
          "Data synchronization",
          "Testing and validation",
          "Final cutover"
        ],
        activities: [
          "Execute migration waves",
          "Perform data cutover",
          "Validate application function",
          "Maintain rollback capability"
        ],
        deliverables: [
          "Migrated applications",
          "Production environment",
          "Migration logs",
          "Sign-off documentation"
        ]
      },
      {
        phase: "Phase 5",
        title: "Optimize",
        duration: "Ongoing",
        icon: "TrendingUp",
        color: "bg-emerald-600",
        objectives: [
          "Cost optimization",
          "Performance tuning",
          "Security hardening",
          "Continuous improvement"
        ],
        activities: [
          "Right-sizing resources",
          "Implement auto-scaling",
          "Security monitoring",
          "Monthly cost reviews"
        ],
        deliverables: [
          "Monthly optimization reports",
          "Security audit logs",
          "Cost saving analysis",
          "Performance recommendations"
        ]
      }
    ]
  },

  // 5. TECH STACK SECTION
  techStack: {
    heading: "Cloud Platforms Expertise",
    description: "We hold advanced partnership status with all major cloud providers and bring deep expertise across their ecosystems",
    frameworks: [
      { name: "Kubernetes", desc: "EKS, AKS, GKE for container orchestration" },
      { name: "Docker", desc: "Containerization standard for cloud-native apps" },
      { name: "Terraform", desc: "Infrastructure as Code for multi-cloud management" },
      { name: "Serverless", desc: "Lambda, Azure Functions, Cloud Functions" },
      { name: "Kafka", desc: "Event streaming and message queues" }
    ],
    llms: [
      { name: "Amazon RDS", desc: "Managed relational database services" },
      { name: "Cosmos DB", desc: "Azure's globally distributed database" },
      { name: "BigQuery", desc: "Serverless enterprise data warehouse" },
      { name: "Redshift", desc: "Petabyte-scale data warehousing" }
    ],
    mlOps: ["Datadog", "New Relic", "CloudHealth", "Prometheus", "Grafana"],
    cloudPlatforms: [
      {
        provider: "AWS",
        color: "text-orange-500",
        services: ["EC2", "S3", "Lambda", "Aurora", "SageMaker", "CloudFront"]
      },
      {
        provider: "Microsoft Azure",
        color: "text-blue-500",
        services: ["Virtual Machines", "Azure SQL", "AKS", "Azure Functions", "Synapse"]
      },
      {
        provider: "Google Cloud",
        color: "text-red-500",
        services: ["Compute Engine", "BigQuery", "GKE", "Cloud Spanner", "Vertex AI"]
      }
    ]
  },

  // 6. INDUSTRIES SECTION
  industries: {
    heading: "Industries We Transform",
    description: "Cloud solutions tailored to the unique regulatory and operational needs of key sectors",
    items: [
      {
        id: "retail",
        label: "Retail & E-commerce",
        icon: "ShoppingBag",
        theme: "blue",
        description: "Scalable infrastructure for peak traffic events like Black Friday",
        features: [
          {
            title: "Auto-Scaling",
            desc: "Scaled from 5K to 50K concurrent users seamlessly",
            icon: "TrendingUp",
            caseStudy: {
              title: "Retail Giant",
              result: "47% Cost Reduction"
            }
          },
          {
            title: "Global CDN",
            desc: "Reduced page load time from 3.2s to 0.8s",
            icon: "Globe"
          }
        ]
      },
      {
        id: "healthcare",
        label: "Healthcare",
        icon: "Activity",
        theme: "green",
        description: "HIPAA-compliant platforms for patient engagement",
        features: [
          {
            title: "Compliance",
            desc: "Full HIPAA compliance with encryption and access controls",
            icon: "ShieldCheck",
            caseStudy: {
              title: "HealthTech Startup",
              result: "4 Month Launch"
            }
          },
          {
            title: "Data Security",
            desc: "Secure patient data management with DynamoDB",
            icon: "Lock"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES SECTION
  caseStudies: {
    heading: "Cloud Success Stories",
    description: "Real-world examples of cloud migration and optimization driving business value",
    items: [
      {
        id: 1,
        category: "Cloud Migration",
        client: "Multi-brand Retail Company",
        title: "E-commerce Platform Migration",
        icon: "ShoppingBag",
        color: "text-orange-600",
        challenge: "Legacy on-premise infrastructure limited scalability, costing $800K annually with frequent outages during peak sales",
        solution: "Migrated to AWS microservices architecture with auto-scaling, Aurora PostgreSQL, and Global CloudFront CDN",
        implementation: [
          "Microservices Architecture",
          "Auto-scaling Implementation",
          "Database Migration to Aurora",
          "CI/CD Pipeline Deployment"
        ],
        results: [
          { label: "Cost Reduction", value: "47%" },
          { label: "Availability", value: "99.97%" },
          { label: "Load Time", value: "0.8s" }
        ],
        quote: "We scaled from 5K to 50K concurrent users seamlessly on Black Friday while cutting our infrastructure bill in half",
        author: "CTO, Retail Brand"
      },
      {
        id: 2,
        category: "Cloud Native",
        client: "Healthcare Tech Startup",
        title: "SaaS Patient Platform",
        icon: "Activity",
        color: "text-blue-600",
        challenge: "Build a scalable, HIPAA-compliant patient engagement platform serving 500K+ patients",
        solution: "Built cloud-native architecture on AWS using Serverless Lambda, API Gateway, and encrypted DynamoDB",
        implementation: [
          "Serverless Backend",
          "Infrastructure as Code",
          "HIPAA Compliance Controls",
          "Automated Scaling"
        ],
        results: [
          { label: "Time to Market", value: "4 Months" },
          { label: "Uptime", value: "99.99%" },
          { label: "Cost Efficiency", value: "80% Savings" }
        ],
        quote: "Launching in 4 months instead of 12 gave us a massive competitive advantage. The platform scales automatically with our growth",
        author: "VP of Engineering"
      },
      {
        id: 3,
        category: "Cost Optimization",
        client: "Financial Services Firm",
        title: "Multi-Cloud Cost Optimization",
        icon: "DollarSign",
        color: "text-green-600",
        challenge: "Rapid, uncontrolled cloud cost growth reaching $2.5M annually without visibility",
        solution: "Comprehensive audit followed by right-sizing, reserved instances, and automated resource lifecycle management",
        implementation: [
          "Right-sizing Analysis",
          "Reserved Instance Strategy",
          "Storage Tiering",
          "Automated Shutdowns"
        ],
        results: [
          { label: "Annual Savings", value: "$920K" },
          { label: "Compute Savings", value: "42%" },
          { label: "Storage Savings", value: "35%" }
        ],
        quote: "We reduced our cloud spend by nearly a million dollars annually without sacrificing a single bit of performance",
        author: "CFO, Financial Services"
      }
    ]
  },

  // 8. FAQ SECTION
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "How long does cloud migration take?",
        answer: "Timeline depends on complexity. Small migrations (10-20 apps) typically take 3-6 months, while large enterprise migrations can take 12-24 months. We use phased approaches to deliver value early"
      },
      {
        question: "Will migration cause downtime?",
        answer: "Most migrations are executed with zero or minimal downtime using strategies like blue-green deployment. Critical applications typically experience less than 4 hours of downtime during the final cutover"
      },
      {
        question: "How much will cloud migration cost?",
        answer: "Migration costs typically range from 10-20% of annual infrastructure spend. However, post-migration savings usually recover this investment within 12-18 months"
      },
      {
        question: "Is cloud more secure than on-premise?",
        answer: "Yes, provided it is configured correctly. Cloud platforms offer enterprise-grade security tools. We implement comprehensive security controls and Shared Responsibility Models to ensure high security"
      },
      {
        question: "Can we migrate back to on-premise if needed?",
        answer: "Yes, though it is rare. We design architectures to avoid vendor lock-in where possible, but reversing a migration can be complex depending on the cloud-native services used"
      }
    ]
  },

  // 9. GET STARTED SECTION
  getStarted: {
    badge: "Start Your Journey",
    titleLines: ["Accelerate Your", "Cloud Transformation"],
    description: "Receive a complimentary analysis including current infrastructure cost analysis, cloud projections, and migration complexity assessment",
    cards: [
      {
        id: "assessment",
        title: "Free Cloud Assessment",
        description: "A comprehensive analysis of your current infrastructure and cloud readiness",
        icon: "BarChart",
        theme: "light",
        list: [
          "Infrastructure cost analysis",
          "Cloud cost projections",
          "Migration complexity score",
          "Recommended approach"
        ],
        cta: { text: "Request Assessment", link: "#assessment" }
      },
      {
        id: "workshop",
        title: "Cloud Readiness Workshop",
        description: "Half-day interactive session with our architects to define your strategy",
        icon: "Users",
        theme: "dark",
        list: [
          "Cloud platform comparison",
          "Migration strategy deep-dive",
          "Architecture best practices",
          "Q&A with experts"
        ],
        cta: { text: "Schedule Workshop", link: "#workshop" }
      }
    ],
    contact: {
      title: "Contact Cloud Team",
      subtitle: "Direct access to architects",
      methods: [
        { label: "Email Us", value: "cloud@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES SECTION
  relatedResources: {
    services: [
      { title: "DevOps Services", href: "/services/devops", icon: "Terminal", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Cybersecurity", href: "/services/cybersecurity", icon: "Shield", color: "text-red-500", bg: "bg-red-50" },
      { title: "AI & Machine Learning", href: "/services/ai-machine-learning", icon: "Brain", color: "text-blue-500", bg: "bg-blue-50" }
    ],
    columns: [
      {
        title: "White Papers",
        icon: "FileText",
        items: [
          { label: "Cloud Migration Guide", href: "#" },
          { label: "Multi-Cloud Strategy", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "TCO Calculator", href: "#" },
          { label: "Readiness Checklist", href: "#" }
        ]
      }
    ]
  }
};