import { ServicePageData } from "../types";

export const ANALYTICS_DATA: ServicePageData = {
  id: "data-analytics",

  // --- PREVIEW SECTION ---
  preview: {
    title: "Data Analytics",
    tagline: "Actionable Insights",
    description: "Data analytics and business intelligence services: data warehousing, BI dashboards, advanced analytics, big data processing, and data governance",
    image: "./assets/images/Service Images/Data Analytics.png", 
    icon: "BarChart3",
    points: [
      "Modern Data Warehousing",
      "BI Dashboards & Reporting",
      "ETL/ELT Pipelines",
      "Predictive Analytics (AI/ML)"
    ],
   technologies: [
      { name: "Snowflake", logo: "./assets/images/Technology/Snowflake_Logo.svg" },
      { name: "Tableau", logo: "./assets/images/Technology/Tableau_Logo.png" },
      { name: "Power BI", logo: "./assets/images/Technology/New_Power_BI_Logo.svg" },
      { name: "Python", logo: "./assets/images/Technology/Python-logo-notext.svg" },
      { name: "Spark", logo: "./assets/images/Technology/Apache_Spark_logo.svg" }
    ]
  },

  // 1. HERO SECTION
  hero: {
    badge: "Data Analytics & BI Services",
    titlePrefix: "Transform Data into",
    titleHighlight: "Strategic Insights",
    description: "Most organizations are data-rich but insights-poor. We consolidate data from multiple sources, analyze it efficiently, and deliver insights through intuitive dashboards that drive better business outcomes",
    features: [
      "Real-time dashboards for data-driven decisions",
      "Scalable warehouses processing billions of records",
      "Advanced analytics with AI/ML predictive models",
      "Self-service BI empowering business users"
    ],
    ctaPrimary: "Schedule Analytics Consultation",
    ctaSecondary: "View Analytics Portfolio"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "The Analytics Challenge",
    heading: "From Data Silos to",
    highlight: "Unified Intelligence",
    content: [
      "Data is your organization's most valuable asset, but only if you can transform it into actionable insights. Many businesses struggle with data trapped in silos (ERP, CRM, spreadsheets), manual reporting bottlenecks, and scalability issues",
      "Our modern approach utilizes cloud-native data warehouses like Snowflake and BigQuery to handle massive scale efficiently. We implement unified data platforms with automated ETL pipelines, empowering users with self-service BI and advanced predictive analytics"
    ],
    differentiators: [
      {
        title: "Modern Architecture",
        description: "Cloud-native warehouses (Snowflake, Redshift) for massive scale and cost efficiency",
        icon: "Database"
      },
      {
        title: "Unified Platform",
        description: "Consolidate all data sources into a single source of truth with automated pipelines",
        icon: "Merge"
      },
      {
        title: "Self-Service BI",
        description: "Empower business users to create reports without IT dependency",
        icon: "UserCheck"
      },
      {
        title: "Advanced Analytics",
        description: "Go beyond descriptive reporting to predictive AI/ML insights",
        icon: "BrainCircuit"
      },
      {
        title: "Proven ROI",
        description: "Helping clients achieve ROI within 12-18 months with faster decision making",
        icon: "TrendingUp"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core Analytics Services",
    titleLine1: "End-to-End",
    titleHighlight: "Data Solutions",
    description: "From raw data ingestion to advanced visualization, we cover the entire data lifecycle",
    cards: [
      {
        title: "Data Warehousing",
        desc: "Modern cloud warehouses (Snowflake, Redshift, BigQuery) optimized for analytical queries and massive scale",
        icon: "Server",
        color: "text-blue-600",
        bg: "bg-blue-50"
      },
      {
        title: "BI Dashboards",
        desc: "Interactive dashboards using Tableau, Power BI, and Looker. Visualizing KPIs for executives, sales, and operations",
        icon: "LayoutDashboard",
        color: "text-purple-600",
        bg: "bg-purple-50"
      },
      {
        title: "ETL/ELT Pipelines",
        desc: "Automated data movement using Airflow, Fivetran, and dbt. Transforming raw data into analysis-ready models",
        icon: "Workflow",
        color: "text-orange-600",
        bg: "bg-orange-50"
      },
      {
        title: "Advanced Analytics",
        desc: "Predictive modeling for sales forecasting, churn prediction, and fraud detection using Python and ML",
        icon: "LineChart",
        color: "text-green-600",
        bg: "bg-green-50"
      },
      {
        title: "Big Data Processing",
        desc: "Handling massive volumes and velocity with Apache Spark, Kafka, and Data Lakes for real-time insights",
        icon: "HardDrive",
        color: "text-teal-600",
        bg: "bg-teal-50"
      },
      {
        title: "Data Governance",
        desc: "Ensuring data quality, security, and compliance (GDPR, HIPAA). Data catalogs and lineage tracking",
        icon: "ShieldCheck",
        color: "text-red-600",
        bg: "bg-red-50"
      }
    ],
    footer: {
      left: {
        title: "Typical Setup",
        type: "highlight",
        content: "12-16 Weeks"
      },
      right: {
        title: "Key Deliverables",
        type: "tags",
        content: ["Data Warehouse", "Automated Pipelines", "BI Dashboards", "Data Strategy"]
      }
    }
  },

  // 4. PROCESS SECTION (Mapped from Data Warehouse Implementation phases)
  process: {
    title: "Analytics Implementation Process",
    description: "A structured approach to building a robust data platform, from requirements to deployment",
    phases: [
      {
        phase: "Phase 1",
        title: "Requirements",
        duration: "2-3 weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Gather business requirements",
          "Identify data sources",
          "Analyze reporting needs",
          "Define performance goals"
        ],
        activities: [
          "Stakeholder interviews",
          "Source system audit",
          "KPI definition workshops",
          "Security requirement review"
        ],
        deliverables: [
          "Requirements document",
          "Source-to-target mapping",
          "KPI catalog",
          "Architecture proposal"
        ]
      },
      {
        phase: "Phase 2",
        title: "Design",
        duration: "3-4 weeks",
        icon: "PenTool",
        color: "bg-indigo-600",
        objectives: [
          "Design data models (Star/Snowflake)",
          "Design ETL/ELT processes",
          "Define security model",
          "Plan performance strategy"
        ],
        activities: [
          "Dimensional modeling",
          "Pipeline architecture design",
          "Access control design",
          "Tool selection"
        ],
        deliverables: [
          "Data model (ERD)",
          "ETL specifications",
          "Security framework",
          "Technical design doc"
        ]
      },
      {
        phase: "Phase 3",
        title: "Build",
        duration: "6-12 weeks",
        icon: "Code",
        color: "bg-purple-600",
        objectives: [
          "Provision data warehouse",
          "Develop ETL pipelines",
          "Validate data accuracy",
          "Load initial history"
        ],
        activities: [
          "Infrastructure setup",
          "Pipeline development (dbt/Airflow)",
          "Data quality testing",
          "Historical data load"
        ],
        deliverables: [
          "Functional data warehouse",
          "Automated pipelines",
          "Data validation reports",
          "Data dictionary"
        ]
      },
      {
        phase: "Phase 4",
        title: "Deploy & Visualize",
        duration: "2-3 weeks",
        icon: "Rocket",
        color: "bg-green-600",
        objectives: [
          "Build dashboards",
          "User acceptance testing",
          "Performance tuning",
          "Go-live"
        ],
        activities: [
          "Dashboard creation (Tableau/PowerBI)",
          "UAT sessions",
          "Query optimization",
          "User training"
        ],
        deliverables: [
          "Live dashboards",
          "Training materials",
          "Access credentials",
          "Support documentation"
        ]
      }
    ]
  },

  // 5. TECH STACK SECTION
  techStack: {
    heading: "Modern Data Stack",
    description: "We leverage best-in-class tools for every layer of the data stack to ensure scalability and performance. ",
    frameworks: [
      { name: "dbt", desc: "SQL-based data transformation in the warehouse" },
      { name: "Airflow", desc: "Workflow orchestration for complex pipelines" },
      { name: "Spark", desc: "Unified engine for large-scale data processing" },
      { name: "Kafka", desc: "Distributed event streaming platform" },
      { name: "Python", desc: "Advanced analytics and ML scripting" }
    ],
    // Using 'llms' key for Data Warehouses
    llms: [
      { name: "Snowflake", desc: "Cloud-native warehouse with separate compute/storage" },
      { name: "BigQuery", desc: "Serverless, highly scalable data warehouse" },
      { name: "Redshift", desc: "AWS-native warehouse with deep integration" },
      { name: "Databricks", desc: "Unified data analytics platform" }
    ],
    // Using 'mlOps' key for BI & Visualization
    mlOps: ["Tableau", "Power BI", "Looker", "Metabase", "Superset"],
    cloudPlatforms: [
      {
        provider: "ETL / Integration",
        color: "text-orange-500",
        services: ["Fivetran", "Matillion", "Talend", "Glue"]
      },
      {
        provider: "Governance",
        color: "text-blue-500",
        services: ["Collibra", "Alation", "Atlan", "Amundsen"]
      },
      {
        provider: "Storage",
        color: "text-purple-500",
        services: ["S3", "Azure Data Lake", "GCS", "HDFS"]
      }
    ]
  },

  // 6. INDUSTRIES SECTION
  industries: {
    heading: "Industry Analytics",
    description: "Tailored data solutions addressing specific analytical challenges in retail and manufacturing",
    items: [
      {
        id: "retail",
        label: "Retail Analytics",
        icon: "ShoppingBag",
        theme: "blue",
        description: "Unified view of sales, inventory, and customers across channels",
        features: [
          {
            title: "Inventory Opt",
            desc: "30% reduction in excess inventory",
            icon: "TrendingDown",
            caseStudy: {
              title: "Multi-channel Retailer",
              result: "$5M Opportunity Found"
            }
          },
          {
            title: "Sales Insights",
            desc: "Real-time revenue tracking",
            icon: "DollarSign"
          }
        ]
      },
      {
        id: "manufacturing",
        label: "Manufacturing Analytics",
        icon: "Factory",
        theme: "green",
        description: "Predictive maintenance and equipment health monitoring. ",
        features: [
          {
            title: "Predictive Maint",
            desc: "87% failure prediction accuracy",
            icon: "Activity",
            caseStudy: {
              title: "Equipment Mfr",
              result: "$6.8M Annual Savings"
            }
          },
          {
            title: "Downtime Red",
            desc: "68% reduction in equipment downtime",
            icon: "Clock"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES SECTION
  caseStudies: {
    heading: "Analytics Success Stories",
    description: "Real-world examples of how data transformation drives measurable business value",
    items: [
      {
        id: 1,
        category: "Retail",
        client: "Multi-channel Retailer",
        title: "Unified Analytics Platform",
        icon: "ShoppingBag",
        color: "text-blue-600",
        challenge: "Data silos across POS, ERP, and e-commerce led to 40 hours/week of manual reporting and no unified view",
        solution: "Implemented Snowflake warehouse with Fivetran for ELT and Tableau for dashboards",
        implementation: [
          "Snowflake Data Warehouse",
          "Fivetran Connectors",
          "dbt Transformations",
          "Tableau Dashboards"
        ],
        results: [
          { label: "Reporting Time", value: "-95%" },
          { label: "Inventory", value: "-30% Excess" },
          { label: "ROI", value: "14 Months" }
        ],
        quote: "We reduced reporting time from 40 hours to 2 hours a week and found $5M in revenue opportunities",
        author: "VP of Operations"
      },
      {
        id: 2,
        category: "Manufacturing",
        client: "Industrial Equipment Mfr",
        title: "Predictive Maintenance",
        icon: "Factory",
        color: "text-green-600",
        challenge: "Equipment failures causing significant downtime and $10M in annual losses. Only reactive maintenance available",
        solution: "Deployed IoT sensors collecting data into Spark for ML-based failure prediction models",
        implementation: [
          "IoT Sensor Data",
          "Apache Spark Processing",
          "ML Prediction Models",
          "Real-time Alerts"
        ],
        results: [
          { label: "Downtime", value: "-68%" },
          { label: "Maint. Cost", value: "-32%" },
          { label: "Annual Savings", value: "$6.8M" }
        ],
        quote: "Our prediction accuracy is 87%, allowing us to fix machines before they break and saving millions",
        author: "Plant Manager"
      }
    ]
  },

  // 8. FAQ SECTION
  faq: {
    heading: "Analytics FAQs",
    items: [
      {
        question: "What is the difference between ETL and ELT?",
        answer: "ETL transforms data before loading it (good for legacy on-prem systems). ELT loads raw data first and then transforms it in the warehouse (better for modern cloud warehouses like Snowflake)"
      },
      {
        question: "How long does it take to build a data warehouse?",
        answer: "A typical implementation takes 12-16 weeks. We use a phased approach: Requirements (2-3 weeks), Design (3-4 weeks), Build (6-12 weeks), and Deploy (2-3 weeks)"
      },
      {
        question: "Which BI tool should we use?",
        answer: "It depends on your ecosystem. Tableau is great for deep visual exploration. Power BI is best if you use Microsoft/Azure. Looker is excellent for embedded analytics and data modeling"
      },
      {
        question: "How do you ensure data security?",
        answer: "We implement Role-Based Access Control (RBAC), encryption at rest and in transit, and data masking for sensitive fields to ensure compliance with GDPR and HIPAA"
      },
      {
        question: "Can business users create their own reports?",
        answer: "Yes. Our 'Self-Service BI' approach involves creating clean, user-friendly data models so business users can drag-and-drop to create reports without needing SQL knowledge"
      }
    ]
  },

  // 9. GET STARTED SECTION
  getStarted: {
    badge: "Unlock Your Data",
    titleLines: ["Ready to Become", "Data Driven?"],
    description: "Start with a free workshop to assess your data maturity and define a roadmap",
    cards: [
      {
        id: "workshop",
        title: "Free Data Strategy Workshop",
        description: "A collaborative session to assess current state and design a high-level architecture",
        icon: "Lightbulb",
        theme: "light",
        list: [
          "Data maturity assessment",
          "Architecture review",
          "Roadmap development",
          "Tool recommendations"
        ],
        cta: { text: "Schedule Workshop", link: "#workshop" }
      },
      {
        id: "consultation",
        title: "Analytics Consultation",
        description: "Discuss specific challenges like slow reporting, data silos, or predictive needs",
        icon: "MessageSquare",
        theme: "dark",
        list: [
          "Problem deep-dive",
          "Solution exploration",
          "Pricing estimation",
          "Implementation timeline"
        ],
        cta: { text: "Contact Analytics Team", link: "#consultation" }
      }
    ],
    contact: {
      title: "Contact Analytics Team",
      subtitle: "Direct access to data architects",
      methods: [
        { label: "Email Us", value: "analytics@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "AI & Machine Learning", href: "/services/ai-machine-learning", icon: "Brain", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Cloud Services", href: "/services/cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "IoT Solutions", href: "/services/iot-solutions", icon: "Wifi", color: "text-orange-500", bg: "bg-orange-50" }
    ],
    columns: [
      {
        title: "Insights",
        icon: "BookOpen",
        items: [
          { label: "Modern Data Stack Guide", href: "#" },
          { label: "Data Governance Checklist", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "Warehouse Cost Estimator", href: "#" },
          { label: "BI Tool Comparison", href: "#" }
        ]
      }
    ]
  }
};