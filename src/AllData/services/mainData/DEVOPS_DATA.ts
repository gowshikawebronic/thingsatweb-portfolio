import { ServicePageData } from "../types";

export const DEVOPS_DATA: ServicePageData = {
  id: "devops",

  // --- PREVIEW SECTION ---
  preview: {
    title: "DevOps & SRE",
    tagline: "Accelerate Delivery",
    description: "DevOps consulting and implementation: CI/CD pipelines, infrastructure as code, Kubernetes, Docker, automated testing, monitoring. Accelerate deployment, improve reliability",
    image: "./assets/images/Service Images/DevOps.png", // Ensure path exists
    icon: "Infinity",
    localIcon: "./assets/images/Icons/DevOps & SRE.svg",
    points: [
      "Automated CI/CD Pipelines",
      "Infrastructure as Code",
      "Kubernetes & Docker",
      "Site Reliability Engineering"
    ],
   technologies: [
      { name: "Jenkins", logo: "./assets/images/Technology/Jenkins_logo_with_title.svg" },
      { name: "Kubernetes", logo: "./assets/images/Technology/Kubernetes_logo_without_workmark.svg" },
      { name: "Terraform", logo: "./assets/images/Technology/Terraform_Logo.svg" },
      { name: "Docker", logo: "./assets/images/Technology/Docker_Logo.svg" },
      { name: "AWS", logo: "./assets/images/Technology/Amazon_Web_Services_Logo.svg" }
    ]
  },

  // 1. HERO SECTION
  hero: {
    badge: "DevOps & SRE Services",
    titlePrefix: "Accelerate Software",
    titleHighlight: "Delivery & Reliability",
    description: "Deploy 10x more frequently with 60x faster recovery. We implement automated pipelines and SRE best practices to break down silos between development and operations",
    features: [
      "Deploy 10x more frequently",
      "90% reduction in deployment time",
      "Infrastructure as Code implementation",
      "99.9%+ uptime via SRE practices"
    ],
    ctaPrimary: "Schedule Assessment",
    ctaSecondary: "View Case Studies"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "The DevOps Imperative",
    heading: "From Manual Operations to",
    highlight: "Automated Excellence",
    content: [
      "DevOps represents a fundamental shift in how organizations develop, deploy, and operate software. By breaking down silos between development and operations teams, automating manual processes, and implementing continuous delivery practices, DevOps enables organizations to ship software faster while maintaining high reliability",
      "We've implemented DevOps transformations for 100+ organizations, helping them achieve daily deployments, 90% reduction in lead time, and 95% faster incident recovery. Our SRE approach applies software engineering practices to infrastructure, ensuring systems are scalable and maintainable"
    ],
    differentiators: [
      {
        title: "Deployment Speed",
        description: "From monthly to daily/hourly deployments with automated pipelines",
        icon: "Zap"
      },
      {
        title: "Reliability (SRE)",
        description: "99.9%+ uptime through error budgets and SLO management",
        icon: "ShieldCheck"
      },
      {
        title: "Infrastructure as Code",
        description: "Consistent, reproducible environments using Terraform and Ansible",
        icon: "Code2"
      },
      {
        title: "Fast Recovery",
        description: "95% faster mean time to recovery (MTTR) via automated rollback",
        icon: "RefreshCcw"
      },
      {
        title: "Security Integrated",
        description: "DevSecOps approach with automated security scanning in pipelines",
        icon: "Lock"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core Services",
    titleLine1: "Comprehensive",
    titleHighlight: "DevOps Capabilities",
    description: "From pipeline automation to cultural transformation, we provide the technical and strategic services needed to modernize your software delivery",
    cards: [
      {
        title: "CI/CD Pipelines",
        desc: "Automate build, test, and deployment. Implement Blue-Green and Canary strategies to deploy code with zero downtime",
        icon: "GitMerge",
        color: "text-blue-600",
        bg: "bg-blue-50"
      },
      {
        title: "Infrastructure as Code",
        desc: "Manage infrastructure using Terraform and CloudFormation. Eliminate configuration drift and enable rapid disaster recovery",
        icon: "Server",
        color: "text-indigo-600",
        bg: "bg-indigo-50"
      },
      {
        title: "Container Orchestration",
        desc: "Manage containerized applications with Kubernetes (EKS, AKS, GKE) and Docker. Auto-scaling and self-healing infrastructure",
        icon: "Box",
        color: "text-purple-600",
        bg: "bg-purple-50"
      },
      {
        title: "Monitoring & Observability",
        desc: "Gain deep insights with Prometheus, Grafana, and ELK. Track metrics, logs, and distributed traces to identify bottlenecks",
        icon: "Activity",
        color: "text-orange-600",
        bg: "bg-orange-50"
      },
      {
        title: "Site Reliability Engineering",
        desc: "Apply software engineering to operations. Define SLOs, manage error budgets, and reduce toil through automation",
        icon: "TrendingUp",
        color: "text-green-600",
        bg: "bg-green-50"
      },
      {
        title: "DevOps Culture",
        desc: "Break down silos. Transform your organization with shared responsibility, blameless post-mortems, and a continuous learning mindset",
        icon: "Users",
        color: "text-pink-600",
        bg: "bg-pink-50"
      }
    ],
    footer: {
      left: {
        title: "Typical Transformation",
        type: "highlight",
        content: "6-12 Months"
      },
      right: {
        title: "Key Metrics",
        type: "tags",
        content: ["Deployment Frequency", "Lead Time", "Change Failure Rate", "MTTR"]
      }
    }
  },

  // 4. PROCESS SECTION (Mapped from "DevOps Culture Transformation" phases)
  process: {
    title: "Transformation Framework",
    description: "Our proven methodology guides your organization from assessment to full-scale DevOps maturity",
    phases: [
      {
        phase: "Phase 1",
        title: "Assessment",
        duration: "2-4 weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Current state maturity analysis",
          "Identify bottlenecks & pain points",
          "Analyze team structure",
          "Inventory tools and tech"
        ],
        activities: [
          "Stakeholder interviews",
          "Value stream mapping",
          "Technical audit",
          "Culture assessment"
        ],
        deliverables: [
          "Maturity report",
          "Gap analysis",
          "Transformation roadmap",
          "Quick win identification"
        ]
      },
      {
        phase: "Phase 2",
        title: "Strategy & Design",
        duration: "4-6 weeks",
        icon: "Map",
        color: "bg-indigo-600",
        objectives: [
          "Define target state",
          "Select toolchain",
          "Design CI/CD architecture",
          "Define metrics (DORA)"
        ],
        activities: [
          "Architecture design",
          "Tool selection workshops",
          "Pipeline design",
          "Security integration planning"
        ],
        deliverables: [
          "Architecture blueprints",
          "Tool selection report",
          "CI/CD strategy",
          "Metric definitions"
        ]
      },
      {
        phase: "Phase 3",
        title: "Pilot Implementation",
        duration: "2-3 months",
        icon: "PlayCircle",
        color: "bg-purple-600",
        objectives: [
          "Implement in pilot team",
          "Validate processes",
          "Demonstrate value",
          "Train core team"
        ],
        activities: [
          "Build pilot pipelines",
          "Implement IaC for pilot",
          "Team training sessions",
          "Measure initial improvements"
        ],
        deliverables: [
          "Working pilot pipeline",
          "Documented runbooks",
          "Initial success metrics",
          "Case study for internal use"
        ]
      },
      {
        phase: "Phase 4",
        title: "Scale & Optimize",
        duration: "6-12 months",
        icon: "TrendingUp",
        color: "bg-green-600",
        objectives: [
          "Roll out to all teams",
          "Refine processes",
          "Establish Platform Engineering",
          "Continuous improvement"
        ],
        activities: [
          "Enterprise-wide rollout",
          "Platform team establishment",
          "Internal developer portal",
          "SRE implementation"
        ],
        deliverables: [
          "Standardized pipelines",
          "Self-service platform",
          "Organization-wide dashboards",
          "SRE handbook"
        ]
      }
    ]
  },

  // 5. TECH STACK SECTION
  techStack: {
    heading: "DevOps Toolchain",
    description: "We integrate best-in-class tools to build robust, automated, and secure delivery pipelines",
    frameworks: [
      { name: "Jenkins", desc: "Flexible automation server with vast plugin ecosystem" },
      { name: "GitLab CI", desc: "Integrated DevOps platform for source to prod" },
      { name: "GitHub Actions", desc: "Native workflow automation for GitHub repositories" },
      { name: "CircleCI", desc: "Cloud-native CI/CD for speed and scale" },
      { name: "ArgoCD", desc: "Declarative GitOps continuous delivery for Kubernetes" }
    ],
    // Using 'llms' key for IaC & Config Management
    llms: [
      { name: "Terraform", desc: "Infrastructure as Code for multi-cloud provisioning" },
      { name: "Ansible", desc: "Agentless configuration management and automation" },
      { name: "CloudFormation", desc: "AWS-native infrastructure definition" },
      { name: "Pulumi", desc: "Modern IaC using general-purpose languages" }
    ],
    // Using 'mlOps' key for Containers & Orchestration
    mlOps: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus", "Grafana", "ELK Stack"],
    cloudPlatforms: [
      {
        provider: "Cloud Providers",
        color: "text-orange-500",
        services: ["AWS", "Azure", "Google Cloud", "DigitalOcean"]
      },
      {
        provider: "Monitoring",
        color: "text-blue-500",
        services: ["Datadog", "New Relic", "PagerDuty", "Splunk"]
      },
      {
        provider: "Security",
        color: "text-red-500",
        services: ["SonarQube", "Snyk", "Vault", "Checkmarx"]
      }
    ]
  },

  // 6. INDUSTRIES SECTION
  industries: {
    heading: "Industry Applications",
    description: "DevOps solutions tailored to high-scale and compliance-heavy sectors",
    items: [
      {
        id: "ecommerce",
        label: "Retail & E-commerce",
        icon: "ShoppingBag",
        theme: "blue",
        description: "Handling massive traffic spikes with auto-scaling infrastructure",
        features: [
          {
            title: "Black Friday Scale",
            desc: "Handled 10x traffic with auto-scaling Kubernetes",
            icon: "TrendingUp",
            caseStudy: {
              title: "Online Retailer",
              result: "99.95% Uptime"
            }
          },
          {
            title: "Deployment Speed",
            desc: "Deployed multiple times daily to stay competitive",
            icon: "Zap"
          }
        ]
      },
      {
        id: "finance",
        label: "Financial Services",
        icon: "Landmark",
        theme: "green",
        description: "Ensuring reliability and compliance with SRE practices",
        features: [
          {
            title: "Reliability",
            desc: "Reduced incidents by 85% using SRE error budgets",
            icon: "ShieldCheck",
            caseStudy: {
              title: "Banking Platform",
              result: "SOC 2 Certified"
            }
          },
          {
            title: "Compliance",
            desc: "Automated security scanning and audit trails",
            icon: "Lock"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES SECTION
  caseStudies: {
    heading: "DevOps Success Stories",
    description: "See how we've helped organizations accelerate delivery and improve reliability",
    items: [
      {
        id: 1,
        category: "E-commerce",
        client: "Online Retailer",
        title: "DevOps Transformation",
        icon: "ShoppingBag",
        color: "text-blue-600",
        challenge: "Deployments every 2 weeks were manual and error-prone (30% failure rate). Unable to scale during peak traffic",
        solution: "Implemented Jenkins CI/CD, Dockerized microservices on AWS EKS, and Terraform for IaC",
        implementation: [
          "Jenkins CI/CD Pipeline",
          "Kubernetes on AWS EKS",
          "Terraform IaC",
          "Prometheus Monitoring"
        ],
        results: [
          { label: "Lead Time", value: "-99%" },
          { label: "Failure Rate", value: "30% to 5%" },
          { label: "MTTR", value: "15 mins" }
        ],
        quote: "We went from painful bi-weekly deployments to shipping code multiple times a day with confidence",
        author: "VP of Engineering"
      },
      {
        id: 2,
        category: "FinTech",
        client: "Banking Platform",
        title: "SRE Implementation",
        icon: "Landmark",
        color: "text-green-600",
        challenge: "Frequent outages, no defined SLOs, manual incident response, and team burnout from 24/7 firefighting",
        solution: "Defined SLOs and Error Budgets, implemented full observability stack, and automated incident response runbooks",
        implementation: [
          "SLO/Error Budget Framework",
          "Automated Runbooks",
          "Blameless Post-Mortems",
          "SOC 2 Compliance"
        ],
        results: [
          { label: "Uptime", value: "99.95%" },
          { label: "Incidents", value: "-85%" },
          { label: "MTTR", value: "12 mins" }
        ],
        quote: "On-call burnout is gone. We now spend our time engineering reliability instead of fighting fires",
        author: "Head of Infrastructure"
      }
    ]
  },

  // 8. FAQ SECTION (Synthesized from Overview & Value Props as none provided in text)
  faq: {
    heading: "DevOps & SRE FAQs",
    items: [
      {
        question: "What is the difference between DevOps and SRE?",
        answer: "DevOps is the culture and philosophy of breaking down silos. SRE (Site Reliability Engineering) is the prescriptive way to do DevOps, applying software engineering to operations with concepts like SLOs and Error Budgets"
      },
      {
        question: "How long does a DevOps transformation take?",
        answer: "Initial assessment and strategy take 4-6 weeks. A pilot implementation typically takes 2-3 months, while scaling to the entire enterprise is a 6-12 month journey"
      },
      {
        question: "What tools do you use?",
        answer: "We are tool-agnostic but have deep expertise in industry standards like Jenkins, GitLab CI, Terraform, Kubernetes, Docker, Prometheus, and Grafana on AWS, Azure, and GCP"
      },
      {
        question: "Will DevOps improve our security?",
        answer: "Yes. We implement 'DevSecOps', integrating automated security scanning, vulnerability assessments, and compliance checks directly into the CI/CD pipeline"
      },
      {
        question: "What are the key metrics you track?",
        answer: "We focus on the DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Mean Time to Recovery (MTTR)"
      }
    ]
  },

  // 9. GET STARTED SECTION
  getStarted: {
    badge: "Start Your Transformation",
    titleLines: ["Accelerate Your", "Software Delivery"],
    description: "Whether you need a maturity assessment or full SRE implementation, we're ready to help",
    cards: [
      {
        id: "assessment",
        title: "Free DevOps Assessment",
        description: "Evaluate your current maturity, identify bottlenecks, and get actionable improvement recommendations",
        icon: "BarChart",
        theme: "light",
        list: [
          "Current state evaluation",
          "Bottleneck identification",
          "Tool inventory check",
          "Roadmap recommendation"
        ],
        cta: { text: "Schedule Assessment", link: "#assessment" }
      },
      {
        id: "consultation",
        title: "SRE Consultation",
        description: "Discuss how Site Reliability Engineering can improve your uptime and reduce operational toil",
        icon: "Shield",
        theme: "dark",
        list: [
          "SLO/SLI definition",
          "Error budget strategy",
          "Incident management review",
          "Observability check"
        ],
        cta: { text: "Contact SRE Team", link: "#consultation" }
      }
    ],
    contact: {
      title: "Contact DevOps Team",
      subtitle: "Direct access to engineers",
      methods: [
        { label: "Email Us", value: "devops@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "Cloud Services", href: "/services/cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "Software Development", href: "/services/software-development", icon: "Code", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Cybersecurity", href: "/services/cybersecurity", icon: "Shield", color: "text-red-500", bg: "bg-red-50" }
    ],
    columns: [
      {
        title: "Insights",
        icon: "Lightbulb",
        items: [
          { label: "Guide to CI/CD", href: "#" },
          { label: "SRE Best Practices", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "DORA Metrics Tracker", href: "#" },
          { label: "Kubernetes Cost Calc", href: "#" }
        ]
      }
    ]
  }
};