import { ServicePageData } from "../types";

export const SOFTWARE_DATA: ServicePageData = {
  id: "software-development",

  // --- PREVIEW SECTION ---
  preview: {
    title: "Custom Software",
    tagline: "Enterprise Engineering",
    description: "Custom software development for web, mobile, and desktop. Full stack development, API-first integration, and legacy modernization using Agile methodology",
    image: "./assets/services/software-dev.png", // Ensure path exists
    icon: "Code",
    points: [
      "Full-Stack Web & Mobile",
      "Cloud-Native Architecture",
      "Legacy System Modernization",
      "API-First Integration"
    ],
    technologies: [
      { name: "React", logo: "/tech/react.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
      { name: "Python", logo: "/tech/python.svg" },
      { name: "Flutter", logo: "/tech/flutter.svg" },
      { name: "AWS", logo: "/tech/aws.svg" }
    ]
  },

  // 1. HERO SECTION
  hero: {
    badge: "Custom Software Development Services",
    titlePrefix: "Build Enterprise-Grade Applications",
    titleHighlight: "Tailored to Your Needs",
    description: "Webronic Industries specializes in developing enterprise-grade custom applications that solve complex business challenges. Build exactly what you need with architecture that supports current needs while accommodating future growth",
    features: [
      "Full-stack development expertise (web, mobile, desktop)",
      "Agile methodology with 2-week sprint cycles",
      "98% on-time delivery across 1000+ projects",
      "Dedicated teams with domain expertise"
    ],
    ctaPrimary: "Discuss Your Project",
    ctaSecondary: "View Development Portfolio"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Service Overview",
    heading: "Solving Complex Challenges with",
    highlight: "Custom Solutions",
    content: [
      "Every business has unique requirements that off-the-shelf software cannot fully address. Custom software development allows you to build applications precisely matching your business processes, competitive differentiators, and strategic objectives",
      "With 15+ years of experience, we recommend the best technology stack for your requirements, not just technologies we prefer. Our relationships don’t end at deployment; we provide ongoing support, maintenance, and strategic guidance as your needs evolve"
    ],
    differentiators: [
      {
        title: "Perfect Fit",
        description: "Build exactly what you need. Solutions match your workflows, terminology, and business rules precisely",
        icon: "Maximize"
      },
      {
        title: "Competitive Advantage",
        description: "Proprietary software creates differentiation and capabilities competitors cannot easily replicate",
        icon: "TrendingUp"
      },
      {
        title: "Scalability",
        description: "Scale from 100 to 1 million users without rebuilding. Architecture designed for future growth",
        icon: "Scaling"
      },
      {
        title: "Integration",
        description: "Unified data flow. Seamlessly connect with existing systems, databases, and third-party services",
        icon: "Link"
      },
      {
        title: "Ownership",
        description: "Complete control. No per-user licensing fees, no vendor lock-in, modify and extend as needed",
        icon: "Key"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core Development Services",
    titleLine1: "End-to-End",
    titleHighlight: "Development Capabilities",
    description: "From modern web apps to legacy modernization, we cover the full spectrum of software engineering",
    cards: [
      {
        title: "Web Application Development",
        desc: "Build sophisticated web apps serving millions. Expertise in React, Angular, Vue, Node.js, and Python for scalable SaaS and enterprise platforms",
        icon: "Layout",
        color: "text-blue-600",
        bg: "bg-blue-50"
      },
      {
        title: "Mobile App Development",
        desc: "Native (iOS/Android) and Cross-Platform (Flutter/React Native) solutions. Features include biometric auth, offline sync, and AR integration",
        icon: "Smartphone",
        color: "text-purple-600",
        bg: "bg-purple-50"
      },
      {
        title: "Desktop App Development",
        desc: "Cross-platform solutions using Electron.js and .NET. Ideal for business productivity tools, IDEs, and high-performance control systems",
        icon: "Monitor",
        color: "text-gray-700",
        bg: "bg-gray-50"
      },
      {
        title: "API First Development",
        desc: "Robust RESTful and GraphQL APIs that power mobile apps and enable partner ecosystems. Includes Swagger documentation and rate limiting",
        icon: "Webhook",
        color: "text-green-600",
        bg: "bg-green-50"
      },
      {
        title: "Database Design",
        desc: "Optimized data architecture using PostgreSQL, MongoDB, and Redis. Schema design, performance tuning, and encryption at rest",
        icon: "Database",
        color: "text-orange-600",
        bg: "bg-orange-50"
      },
      {
        title: "Legacy Modernization",
        desc: "Breathe new life into old systems. Strategies include API wrappers, database migration, cloud replatforming, or complete phased rewrites",
        icon: "RefreshCw",
        color: "text-red-600",
        bg: "bg-red-50"
      }
    ],
    footer: {
      left: {
        title: "Typical Engagement",
        type: "highlight",
        content: "4-8 Months"
      },
      right: {
        title: "Key Deliverables",
        type: "tags",
        content: ["Source Code", "CI/CD Pipeline", "API Documentation", "QA Reports"]
      }
    }
  },

  // 4. PROCESS SECTION
  process: {
    title: "Agile Development Process",
    description: "Our iterative approach ensures transparency and quality",
    phases: [
      {
        phase: "Phase 1",
        title: "Discovery & Design",
        duration: "2-3 weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Requirements gathering",
          "User persona development",
          "Wireframing and mockups",
          "Technical architecture design"
        ],
        activities: [
          "Stakeholder workshops",
          "Interactive prototyping",
          "Tech stack selection",
          "Scope definition"
        ],
        deliverables: [
          "Functional specifications",
          "UI/UX designs",
          "Project roadmap",
          "Architecture diagram"
        ]
      },
      {
        phase: "Phase 2",
        title: "Development (Sprints)",
        duration: "8-16 weeks",
        icon: "Code",
        color: "bg-indigo-600",
        objectives: [
          "Agile sprint-based execution",
          "Frontend & Backend coding",
          "Weekly builds for testing",
          "Feedback incorporation"
        ],
        activities: [
          "Daily standups",
          "Code reviews",
          "Continuous integration",
          "Sprint reviews"
        ],
        deliverables: [
          "Working software increments",
          "Source code commits",
          "Unit test reports",
          "Sprint demos"
        ]
      },
      {
        phase: "Phase 3",
        title: "Testing & QA",
        duration: "2-4 weeks",
        icon: "CheckCircle",
        color: "bg-purple-600",
        objectives: [
          "Functional validation",
          "Performance optimization",
          "Security auditing",
          "User acceptance testing"
        ],
        activities: [
          "Automated regression testing",
          "Load testing",
          "Vulnerability scanning",
          "UAT sessions"
        ],
        deliverables: [
          "QA sign-off report",
          "Performance metrics",
          "Security audit report",
          "Bug fix verification"
        ]
      },
      {
        phase: "Phase 4",
        title: "Launch",
        duration: "1-2 weeks",
        icon: "Rocket",
        color: "bg-green-600",
        objectives: [
          "Production deployment",
          "App store submission",
          "Monitoring setup",
          "User onboarding"
        ],
        activities: [
          "Blue-green deployment",
          "DNS configuration",
          "Analytics integration",
          "Final health check"
        ],
        deliverables: [
          "Live application",
          "Admin credentials",
          "User manuals",
          "Monitoring dashboards"
        ]
      },
      {
        phase: "Phase 5",
        title: "Post-Launch Support",
        duration: "Ongoing",
        icon: "LifeBuoy",
        color: "bg-orange-600",
        objectives: [
          "Bug fixes and patches",
          "Performance monitoring",
          "Feature enhancements",
          "OS update compatibility"
        ],
        activities: [
          "SLA-based support",
          "Traffic analysis",
          "Security patching",
          "Backlog grooming"
        ],
        deliverables: [
          "Monthly health reports",
          "Patch releases",
          "New feature deployment",
          "Optimization recommendations"
        ]
      }
    ]
  },

  // 5. TECH STACK SECTION
  techStack: {
    heading: "Technology Expertise",
    description: "We use a modern, diverse stack to build robust solutions. ",
    frameworks: [
      { name: "React / Next.js", desc: "Component-based UI with SSR capabilities" },
      { name: "Angular", desc: "Enterprise-ready framework with TypeScript" },
      { name: "Flutter", desc: "Cross-platform mobile from a single codebase" },
      { name: "Electron", desc: "Cross-platform desktop applications" },
      { name: "Spring Boot", desc: "Enterprise-grade Java backend" }
    ],
    llms: [
      { name: "Node.js", desc: "High-concurrency backend runtime" },
      { name: "Python", desc: "Data-intensive and AI-powered apps" },
      { name: "PostgreSQL", desc: "Advanced open-source relational DB" },
      { name: "MongoDB", desc: "Flexible document-oriented NoSQL DB" }
    ],
    mlOps: ["Docker", "Kubernetes", "Jenkins", "Terraform", "GitLab CI"],
    cloudPlatforms: [
      {
        provider: "Cloud Infrastructure",
        color: "text-orange-500",
        services: ["AWS EC2", "Azure Functions", "Google Cloud", "DigitalOcean"]
      },
      {
        provider: "Integrations",
        color: "text-blue-500",
        services: ["Stripe", "Auth0", "Twilio", "SendGrid"]
      },
      {
        provider: "DevOps",
        color: "text-purple-500",
        services: ["Docker", "Kubernetes", "GitHub Actions", "ELK Stack"]
      }
    ]
  },

  // 6. INDUSTRIES SECTION
  industries: {
    heading: "Industry Solutions",
    description: "Software tailored to specific industry regulations and operational needs",
    items: [
      {
        id: "healthcare",
        label: "Healthcare",
        icon: "Activity",
        theme: "blue",
        description: "HIPAA-compliant patient portals and telehealth solutions",
        features: [
          {
            title: "Patient Portal",
            desc: "Self-service scheduling and prescription refills",
            icon: "Users",
            caseStudy: {
              title: "Medical Group",
              result: "$250K Annual Savings"
            }
          },
          {
            title: "Telehealth",
            desc: "Secure video consultations",
            icon: "Video"
          }
        ]
      },
      {
        id: "retail",
        label: "Retail & E-commerce",
        icon: "ShoppingBag",
        theme: "green",
        description: "High-performance platforms with real-time inventory",
        features: [
          {
            title: "Performance",
            desc: "0.8s page load times driving conversion",
            icon: "Zap",
            caseStudy: {
              title: "Fashion Retailer",
              result: "45% Revenue Increase"
            }
          },
          {
            title: "Scalability",
            desc: "Auto-scaling for flash sales",
            icon: "TrendingUp"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES SECTION
  caseStudies: {
    heading: "Project Success Stories",
    description: "Real-world examples of how our custom software solves business problems",
    items: [
      {
        id: 1,
        category: "E-commerce",
        client: "Fashion Retailer",
        title: "Modern E-commerce Platform",
        icon: "ShoppingBag",
        color: "text-pink-600",
        challenge: "Legacy monolithic application with slow load times (5-7s) and frequent outages during sales",
        solution: "Built modern React/Node.js microservices platform with MongoDB/Redis and AWS auto-scaling",
        implementation: [
          "Microservices Architecture",
          "Next.js Frontend",
          "Redis Caching",
          "AWS Auto-scaling"
        ],
        results: [
          { label: "Page Load", value: "0.8s" },
          { label: "Conversion", value: "+78%" },
          { label: "Revenue", value: "+45%" }
        ],
        quote: "Development velocity increased 3x. We handled our biggest sale ever with zero downtime",
        author: "CTO, Fashion Retailer"
      },
      {
        id: 2,
        category: "Healthcare",
        client: "Medical Group",
        title: "Patient Portal App",
        icon: "Activity",
        color: "text-blue-600",
        challenge: "High administrative costs with 60% of calls for scheduling. No patient self-service capabilities",
        solution: "Developed HIPAA-compliant web and mobile portal (Flutter + Python Django) integrated with EHR",
        implementation: [
          "Flutter Mobile Apps",
          "HIPAA Compliance",
          "EHR Integration (HL7)",
          "Telehealth Video"
        ],
        results: [
          { label: "Adoption", value: "65%" },
          { label: "Call Reduction", value: "60%" },
          { label: "Savings", value: "$250K/yr" }
        ],
        quote: "Patients love the app, and our staff is no longer overwhelmed by phone calls",
        author: "Medical Director"
      },
      {
        id: 3,
        category: "Manufacturing",
        client: "Industrial Manufacturer",
        title: "ERP Modernization",
        icon: "Factory",
        color: "text-orange-600",
        challenge: "25-year-old mainframe ERP with green screens, no mobile access, and high maintenance costs ($400K/yr)",
        solution: "Phased modernization using API wrappers  followed by migration to Java Spring Boot and Angular",
        implementation: [
          "API Wrapper Layer",
          "Web-based UI",
          "Cloud Migration",
          "Mobile Access"
        ],
        results: [
          { label: "Maintenance", value: "-55%" },
          { label: "Productivity", value: "+40%" },
          { label: "Inventory", value: "98% Acc" }
        ],
        quote: "Our production managers can now access the system from the factory floor on tablets",
        author: "Operations Manager"
      }
    ]
  },

  // 8. FAQ SECTION
  faq: {
    heading: "Software Development FAQs",
    items: [
      {
        question: "How long does custom software development take?",
        answer: "Timelines vary by complexity. We use Agile methodology to deliver working software in 2-week sprints, so you see progress continuously rather than waiting until the end"
      },
      {
        question: "Will we own the source code?",
        answer: "Yes. Upon final payment, complete source code ownership transfers to you with all documentation. There are no licensing restrictions or vendor lock-in"
      },
      {
        question: "How do you handle changing requirements?",
        answer: "Agile embraces change. The backlog can be reprioritized each sprint, allowing new features to be added or scope adjusted transparently"
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes. We offer SLAs for bug fixes, performance monitoring, security updates, and feature enhancements after launch"
      },
      {
        question: "Can you work with our in-house team?",
        answer: "Absolutely. We offer team augmentation, collaborative development, and knowledge transfer to work seamlessly with your internal developers"
      }
    ]
  },

  // 9. GET STARTED SECTION
  getStarted: {
    badge: "Start Your Project",
    titleLines: ["Ready to Build", "Your Solution?"],
    description: "Whether you need a full development team or a feasibility consultation, we are ready to help",
    cards: [
      {
        id: "consultation",
        title: "Free Project Consultation",
        description: "1-hour session to discuss requirements, feasibility, and architecture recommendations",
        icon: "MessageSquare",
        theme: "light",
        list: [
          "Requirements discussion",
          "Technical feasibility check",
          "Effort estimation",
          "Tech stack suggestion"
        ],
        cta: { text: "Schedule Consultation", link: "#consultation" }
      },
      {
        id: "proposal",
        title: "Request Detailed Proposal",
        description: "Receive a comprehensive document with timeline, scope, team composition, and pricing",
        icon: "FileText",
        theme: "dark",
        list: [
          "Detailed specifications",
          "Project timeline",
          "Team composition",
          "Pricing terms"
        ],
        cta: { text: "Request Proposal", link: "#proposal" }
      }
    ],
    contact: {
      title: "Contact Dev Team",
      subtitle: "Direct access to engineers",
      methods: [
        { label: "Email Us", value: "development@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "Mobile App Dev", href: "/services/mobile-app-development", icon: "Smartphone", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Cloud Services", href: "/services/cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "AI & Machine Learning", href: "/services/ai-machine-learning", icon: "Brain", color: "text-blue-500", bg: "bg-blue-50" }
    ],
    columns: [
      {
        title: "Insights",
        icon: "Lightbulb",
        items: [
          { label: "Agile Methodology Guide", href: "#" },
          { label: "Legacy Modernization Strategies", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "Project Cost Estimator", href: "#" },
          { label: "Tech Stack Selector", href: "#" }
        ]
      }
    ]
  }
};