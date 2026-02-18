
import { ServicePageData } from "../types";

export const AI_DATA: ServicePageData = {
  id: "ai-machine-learning",

  // --- NEW PREVIEW SECTION ---
  preview: {
    title: "AI & Machine Learning",
    tagline: "Enterprise Intelligence",
    description: "Transform your business with intelligent solutions. We architect, build, and deploy custom AI systems that drive measurable value and competitive advantage",
    image: "./assets/images/Service Images/AI & Machine Learning.png", 
    icon: "Brain", 
    points: [
      "Custom LLM Integration",
      "Predictive Analytics",
      "Computer Vision",
      "Automated Workflows"
    ],
    technologies: [
      { name: "Python", logo: "./assets/images/Technology/Python-logo-notext.svg" },
      { name: "TensorFlow", logo: "./assets/images/Technology/TensorFlow_logo.svg" },
      { name: "OpenAI", logo: "./assets/images/Technology/OpenAI_Logo.svg" },
      { name: "PyTorch", logo: "./assets/images/Technology/Pytorch_logo.png" },
      { name: "AWS", logo: "./assets/images/Technology/Amazon_Web_Services_Logo.svg" }
    ]
  },

  // 1. HERO SECTION
  hero: {
    badge: "AI & Machine Learning",
    titlePrefix: "Enterprise AI &",
    titleHighlight: "Machine Learning",
    description: "Transform Business with Intelligent Automation and Predictive Intelligence. We architect, build, and deploy custom AI systems that drive measurable value",
    features: [
      "Custom AI models trained on your data",
      "Production-ready ML solutions",
      "Enterprise-grade AI infrastructure",
      "24/7 AI operations support"
    ],
    ctaPrimary: "Schedule AI Consultation",
    ctaSecondary: "View Case Studies"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Service Overview",
    heading: "Driving Competitive Advantage in the",
    highlight: "Data-Driven Economy",
    content: [
      "In today's data-driven economy, artificial intelligence and machine learning have evolved from emerging technologies into essential business capabilities that drive competitive advantage. Webronic Industries delivers enterprise grade AI and machine learning solutions that transform how organizations operate, make decisions, and serve customers",
      "Our AI practice combines deep technical expertise in machine learning algorithms with extensive industry knowledge across manufacturing, retail, financial services, and healthcare"
    ],
    differentiators: [
      {
        title: "AI-First Methodology",
        description: "Embedded across all solutions for maximum efficiency",
        icon: "BrainCircuit"
      },
      {
        title: "Global Scale",
        description: "100+ successful AI implementations across 50+ countries",
        icon: "Globe2"
      },
      {
        title: "Deep Expertise",
        description: "Cross-industry knowledge spanning 15+ complex sectors",
        icon: "Layers"
      },
      {
        title: "Strategic Partnerships",
        description: "Direct collaboration with OpenAI, Google Cloud, and NVIDIA",
        icon: "Network"
      },
      {
        title: "Proprietary Accelerators",
        description: "Pre-built AI frameworks that reduce time-to-market by 40%",
        icon: "Cpu"
      }
    ]
  },

  // 3. CORE SERVICES (Extracted from allServicesData)
  coreServices: {
    badge: "Core Capabilities",
    titleLine1: "AI Strategy &",
    titleHighlight: "Consulting Services",
    description: "Beginning your AI journey requires a clear roadmap aligned with business objectives. Our AI consulting services help you navigate the complex landscape of artificial intelligence",
    cards: [
      { 
        title: "AI Readiness Assessment", 
        desc: "Evaluate your organization’s data infrastructure, technical capabilities, and organizational readiness for AI adoption", 
        icon: "ClipboardCheck", 
        color: "text-[#2776ea]", 
        bg: "bg-[#2776ea]/10" 
      },
      { 
        title: "Use Case Identification", 
        desc: "Discover high-value AI opportunities across your business processes through structured workshops and data analysis", 
        icon: "Lightbulb", 
        color: "text-[#76ea27]", 
        bg: "bg-[#76ea27]/10" 
      },
      { 
        title: "Architecture Design", 
        desc: "Choose the right AI platforms, frameworks, and tools. Our architects design scalable AI infrastructure", 
        icon: "Layers", 
        color: "text-[#2776ea]", 
        bg: "bg-[#2776ea]/10" 
      },
      { 
        title: "ROI Modeling", 
        desc: "Quantify expected benefits and create compelling business cases for AI investments", 
        icon: "TrendingUp", 
        color: "text-[#76ea27]", 
        bg: "bg-[#76ea27]/10" 
      },
      { 
        title: "Implementation Roadmap", 
        desc: "Develop phased plans that balance quick wins with strategic initiatives typically spanning 12-24 months", 
        icon: "Map", 
        color: "text-[#2776ea]", 
        bg: "bg-[#2776ea]/10" 
      },
      { 
        title: "Governance Framework", 
        desc: "Establish responsible AI practices, ethics guidelines, and compliance protocols", 
        icon: "ShieldCheck", 
        color: "text-[#76ea27]", 
        bg: "bg-[#76ea27]/10" 
      }
    ],
    footer: {
      left: { 
        title: "Typical Engagement", 
        type: "highlight", 
        content: "6-8 Weeks" 
      },
      right: { 
        title: "Deliverables", 
        type: "tags", 
        content: ["AI strategy document", "Prioritized use cases", "Technical architecture", "ROI models"] 
      }
    }
  },

  // 4. PROCESS SECTION (from AI_PROCESS_PHASES)
  process: {
    title: "AI Development Process",
    description: "From initial discovery to continuous optimization, our structured approach ensures successful AI implementation and measurable business value",
    phases: [
      {
        phase: "Phase 1",
        title: "Discovery & Assessment",
        duration: "2-4 weeks",
        icon: "Search",
        color: "bg-[#2776ea]",
        objectives: [
          "Understand business requirements and success criteria",
          "Evaluate data availability and quality",
          "Assess technical infrastructure",
          "Define project scope and timeline"
        ],
        activities: [
          "Stakeholder interviews and workshops",
          "Data audit and exploratory analysis",
          "Technical feasibility assessment"
        ],
        deliverables: [
          "Project charter",
          "Data assessment report",
          "Technical architecture proposal"
        ]
      },
      {
        phase: "Phase 2",
        title: "Data Preparation",
        duration: "3-6 weeks",
        icon: "Database",
        color: "bg-[#76ea27]",
        objectives: [
          "Collect and consolidate data from multiple sources",
          "Clean and preprocess data",
          "Engineer relevant features"
        ],
        activities: [
          "Data extraction and integration",
          "Data quality improvement",
          "Feature engineering and selection"
        ],
        deliverables: [
          "Clean, processed datasets",
          "Feature engineering documentation",
          "Data pipeline code"
        ]
      },
      {
        phase: "Phase 3",
        title: "Model Development",
        duration: "4-8 weeks",
        icon: "Brain",
        color: "bg-[#2776ea]",
        objectives: [
          "Design and implement ML models",
          "Train models on prepared data",
          "Optimize for performance"
        ],
        activities: [
          "Algorithm selection and baseline modeling",
          "Iterative model development",
          "Hyperparameter tuning"
        ],
        deliverables: [
          "Trained models",
          "Performance benchmarks",
          "Model documentation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Evaluation & Testing",
        duration: "2-3 weeks",
        icon: "ClipboardCheck",
        color: "bg-[#76ea27]",
        objectives: [
          "Validate model performance on unseen data",
          "Conduct bias and fairness testing",
          "Perform error analysis"
        ],
        activities: [
          "Comprehensive testing on holdout data",
          "A/B testing preparation",
          "Bias detection and mitigation"
        ],
        deliverables: [
          "Test results and metrics",
          "Error analysis report",
          "Bias assessment"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        duration: "2-4 weeks",
        icon: "Rocket",
        color: "bg-[#2776ea]",
        objectives: [
          "Deploy models to production environment",
          "Integrate with existing systems",
          "Implement monitoring and logging"
        ],
        activities: [
          "Production environment setup",
          "Model deployment and integration",
          "API development"
        ],
        deliverables: [
          "Production deployment",
          "API documentation",
          "Monitoring dashboards"
        ]
      },
      {
        phase: "Phase 6",
        title: "Monitoring & Optimization",
        duration: "Ongoing",
        icon: "LineChart",
        color: "bg-[#76ea27]",
        objectives: [
          "Monitor model performance in production",
          "Detect and address model drift",
          "Continuously improve accuracy"
        ],
        activities: [
          "Performance monitoring",
          "Data drift detection",
          "Model retraining scheduling"
        ],
        deliverables: [
          "Monthly performance reports",
          "Model updates and improvements",
          "Optimization recommendations"
        ]
      }
    ]
  },

  // 5. TECH STACK (from TECH_STACK_DATA)
  techStack: {
    heading: "Enterprise-Grade Technology Stack",
    description: "We leverage a robust ecosystem of cutting-edge frameworks, cloud platforms, and MLOps tools to build scalable, production-ready AI solutions",
    frameworks: [
      { name: "TensorFlow & Keras", desc: "Google’s comprehensive deep learning platform" },
      { name: "PyTorch", desc: "Preferred framework for research and production ML" },
      { name: "scikit-learn", desc: "Industry-standard library for classical machine learning" },
      { name: "XGBoost", desc: "Gradient boosting frameworks for structured data problems" },
      { name: "Hugging Face", desc: "Access to thousands of pre-trained language models" }
    ],
    llms: [
      { name: "OpenAI GPT-4", desc: "Advanced language models for complex reasoning" },
      { name: "Anthropic Claude", desc: "Constitutional AI for safe interactions" },
      { name: "Google PaLM/Gemini", desc: "Multimodal AI capabilities handling text and images" },
      { name: "Llama 2 / Mistral", desc: "Open-source models for efficient inference" }
    ],
    mlOps: ["MLflow", "Kubeflow", "Apache Airflow", "Docker", "Kubernetes"],
    cloudPlatforms: [
      {
        provider: "AWS AI Services",
        color: "text-[#2776ea]",
        services: ["SageMaker", "Rekognition", "Comprehend", "Textract"]
      },
      {
        provider: "Google Cloud AI",
        color: "text-[#76ea27]",
        services: ["Vertex AI", "Vision AI", "Natural Language AI", "Document AI"]
      },
      {
        provider: "Azure AI",
        color: "text-blue-600",
        services: ["Azure Machine Learning", "Cognitive Services", "Azure OpenAI"]
      }
    ]
  },

  // 6. INDUSTRIES (from INDUSTRIES)
  industries: {
    heading: "Industry Applications",
    description: "Discover how we apply intelligent technology to solve specific challenges across diverse sectors",
    items: [
      {
        id: "manufacturing",
        label: "Manufacturing",
        icon: "Factory",
        theme: "blue",
        description: "Driving efficiency with computer vision and predictive maintenance",
        features: [
          {
            title: "Quality Inspection Automation",
            desc: "Computer vision systems that inspect products for defects with 99%+ accuracy",
            icon: "ScanEye",
            caseStudy: {
              title: "Automotive Parts Manufacturer",
              result: "Reduced defect escape rate from 2.3% to 0.1%"
            }
          },
          {
            title: "Predictive Maintenance",
            desc: "ML models analyzing sensor data to predict equipment failures 2-4 weeks in advance",
            icon: "Zap",
            caseStudy: {
              title: "Steel Manufacturing Plant",
              result: "Reduced unplanned downtime by 68%"
            }
          }
        ]
      },
      {
        id: "retail",
        label: "Retail & E-commerce",
        icon: "ShoppingBag",
        theme: "green",
        description: "Personalizing customer experiences and optimizing supply chains",
        features: [
          {
            title: "Demand Forecasting",
            desc: "Advanced ML models predicting demand at SKU/store level with 85-90% accuracy",
            icon: "TrendingUp"
          },
          {
            title: "Customer Personalization",
            desc: "Clustering models identifying customer segments to increase conversion rates",
            icon: "Users"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES (from CASE_STUDIES)
  caseStudies: {
    heading: "Real World Success",
    description: "See how our AI solutions translate into measurable business value and ROI for industry leaders",
    items: [
      {
        id: 1,
        category: "Manufacturing AI",
        client: "Global Electronics Manufacturer",
        title: "Computer Vision Quality Inspection",
        icon: "Factory",
        color: "text-[#2776ea]",
        challenge: "Manual quality inspection missing 3-5% of defects, leading to costly warranty claims and brand damage",
        solution: "Deployed computer vision system using custom-trained CNN models to inspect circuit boards for 47 different defect types",
        implementation: [
          "Collected and labeled 500,000 training images",
          "Trained custom ResNet-based architecture",
          "Integrated with production line cameras"
        ],
        results: [
          { label: "Defect Detection", value: "99.2%" },
          { label: "Inspection Speed", value: "4x Faster" },
          { label: "Annual Savings", value: "$8.5M" }
        ],
        quote: "The computer vision system has transformed our quality control. We’re catching defects we never saw before and doing it 4x faster",
        author: "Director of Manufacturing Operations"
      },
      {
        id: 2,
        category: "Predictive Maintenance",
        client: "Chemical Processing Plant",
        title: "Predictive Maintenance for Chemical Plant",
        icon: "FlaskConical",
        color: "text-[#76ea27]",
        challenge: "Unplanned equipment failures causing average 120 hours downtime yearly, costing $2.5M in lost production",
        solution: "Implemented ML-powered predictive maintenance system using IoT sensor data",
        implementation: [
          "Installed 250 IoT sensors on critical equipment",
          "Collected 18 months of operational data",
          "Developed ensemble models (XGBoost + LSTM)"
        ],
        results: [
          { label: "Downtime Reduced", value: "72%" },
          { label: "Maintenance Cost", value: "-28%" },
          { label: "Annual Savings", value: "$2.1M" }
        ],
        quote: "We now fix equipment before it breaks. The system paid for itself in the first year through reduced downtime alone",
        author: "Plant Operations Manager"
      }
    ]
  },

  // 8. FAQ (from FAQ_DATA)
  faq: {
    heading: "Everything you need to know about our process",
    items: [
      {
        question: "How much data do I need to build a custom AI model?",
        answer: "The data requirements vary significantly based on the problem complexity. For simple classification tasks, you might achieve good results with 1,000-10,000 labeled examples. Computer vision applications typically require 10,000-100,000 images"
      },
      {
        question: "How long does it take to develop and deploy an AI solution?",
        answer: "Timelines depend on project scope and complexity. A simple predictive model might be deployed in 6-8 weeks, while complex computer vision systems can take 4-6 months. Our typical project timeline is 3-5 months"
      },
      {
        question: "What ROI can I expect from AI implementation?",
        answer: "ROI varies by use case, but our clients typically see returns within 6-18 months. Common benefits include: 20-40% cost reduction in automated processes and 15-30% improvement in prediction accuracy"
      },
      {
        question: "How do you ensure AI models remain accurate over time?",
        answer: "We implement comprehensive MLOps practices including continuous monitoring, automated drift detection, and scheduled retraining. We typically retrain models quarterly or when performance drops below thresholds"
      }
    ]
  },

  // 9. GET STARTED (from GET_STARTED_DATA)
  getStarted: {
    badge: "Take the Next Step",
    titleLines: ["Ready to start your", "AI Journey?"],
    description: "Whether you're exploring possibilities or ready to build, we have the right engagement model for you",
    cards: [
      {
        id: "assessment",
        title: "Free AI Readiness Assessment",
        description: "Not sure where to start with AI? Our complimentary assessment helps you identify high-value AI use cases",
        icon: "Rocket",
        theme: "light",
        list: [
          "Identify high-value AI use cases",
          "Evaluate your data readiness",
          "Understand technical requirements",
          "Estimate potential ROI"
        ],
        cta: { text: "Request Your Free Assessment", link: "#assessment" }
      },
      {
        id: "workshop",
        title: "AI Strategy Workshop",
        description: "Join our AI solution architects for a half-day workshop to explore AI applications in your industry",
        icon: "Users",
        theme: "dark",
        list: [
          "Review your specific challenges",
          "Brainstorm potential solutions",
          "Develop preliminary business cases",
          "Outline next steps"
        ],
        cta: { text: "Schedule Workshop", link: "#workshop" }
      }
    ],
    contact: {
      title: "Contact Our AI Team",
      subtitle: "Direct access to experts",
      methods: [
        { label: "Email Us", value: "ai@webronic.com", icon: "Mail", iconColor: "text-[#2776ea]" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-[#76ea27]" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "Data Analytics", href: "/services/data-analytics", icon: "BarChart3", color: "text-blue-500", bg: "bg-blue-50" },
      { title: "Cloud Computing", href: "/services/cloud", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "IoT Solutions", href: "/services/iot", icon: "Cpu", color: "text-emerald-500", bg: "bg-emerald-50" }
    ],
    columns: [
      {
        title: "White Papers",
        icon: "FileText",
        items: [
          { label: "The Executive’s Guide to AI", href: "#" },
          { label: "Measuring ROI from AI", href: "#" }
        ]
      },
      {
        title: "Case Studies",
        icon: "Layers",
        items: [
          { label: "Manufacturing AI Success Stories", href: "#" },
          { label: "Retail AI Transformation", href: "#" }
        ]
      }
    ]
  }
};