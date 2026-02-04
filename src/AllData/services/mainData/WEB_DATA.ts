import { ServicePageData } from "../types";

export const WEB_DATA: ServicePageData = {
  id: "web-development",

  // --- NEW PREVIEW SECTION ---
  preview: {
    title: "Web Development",
    tagline: "High-Performance Experiences",
    description: "Build high-performance websites that drive measurable business growth. We deliver solutions that load in under 2 seconds and rank on the first page of Google",
    image: "./assets/webdevelopment.png",
    icon: "Layout",
    localIcon: "./assets/images/Icons/Web Development.svg",
    points: [
      "Next.js & React Applications",
      "Enterprise WordPress",
      "Headless CMS Architecture",
      "High-Conversion E-commerce"
    ],
  technologies: [
        { name: "HTML", logo: "./assets/images/Technology/HTML5_Badge.svg" },
        { name: "CSS", logo: "./assets/images/Technology/CSS3_logo.svg" },
        { name: "Magento", logo: "./assets/images/Technology/Magento.svg" },
        { name: "WordPress", logo: "./assets/images/Technology/Wordpress-Logo.svg" },
        { name: "PHP", logo: "./assets/images/Technology/PHP-logo.svg" },
        { name: "MySQL", logo: "./assets/images/Technology/MySQL_textlogo.svg" },
        { name: "Node.js", logo: "./assets/images/Technology/Node.js_logo.svg" },
        { name: "WooCommerce", logo: "./assets/images/Technology/WooCommerce_Logo_(2015).svg" },
        { name: "jQuery", logo: "./assets/images/Technology/JQuery-Logo.svg" },
      ],
  },

  // 1. HERO SECTION
  hero: {
    badge: "Web Development Services",
    titlePrefix: "High-Performance",
    titleHighlight: "Digital Experiences",
    description: "Your website should work as hard as you do. We build websites that load in under 2 seconds, rank on the first page of Google, and turn visitors into customers",
    features: [
      "Sub-2 second load times",
      "Mobile-first architecture",
      "SEO-optimized structure",
      "Scalable infrastructure"
    ],
    ctaPrimary: "Get Free Consultation",
    ctaSecondary: "View Case Studies"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Our Approach",
    heading: "Performance That Actually",
    highlight: "Matters",
    content: [
      "Most businesses lose customers before they even make contact. A slow website, poor mobile experience, or outdated design sends potential clients straight to your competitors. We optimize every element from image compression to server response times to keep visitors engaged",
      "Whether you need a lightning-fast Next.js application, a content-rich WordPress site, or a complete WooCommerce store, we deliver solutions that generate real results, not just pretty designs"
    ],
    differentiators: [
      {
        title: "Speed First",
        description: "Optimized for sub-2 second load times to prevent user abandonment",
        icon: "Zap"
      },
      {
        title: "SEO Native",
        description: "Semantic HTML and schema markup built-in from day one",
        icon: "Search"
      },
      {
        title: "Mobile Experiences",
        description: "Seamless functionality across every device and screen size",
        icon: "Smartphone"
      },
      {
        title: "Strategic UX",
        description: "User flows mapped specifically to drive conversions",
        icon: "Compass"
      },
      {
        title: "Scalable Scale",
        description: "Architecture that handles traffic spikes without crashing",
        icon: "Server"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core Capabilities",
    titleLine1: "Full-Cycle",
    titleHighlight: "Web Solutions",
    description: "From modern web applications to enterprise content management, we have the right technology for your specific business goals",
    cards: [
      {
        title: "Next.js Development",
        desc: "Modern web applications built for speed and scale. Instant page loads, perfect SEO, and the flexibility to build complex platforms",
        icon: "Code2",
        color: "text-black",
        bg: "bg-gray-100"
      },
      {
        title: "Enterprise WordPress",
        desc: "Custom theme development and block editor integration. Secure, performant, and easy for your team to manage",
        icon: "FileText",
        color: "text-blue-600",
        bg: "bg-blue-50"
      },
      {
        title: "WooCommerce Stores",
        desc: "Turn your site into a complete online store. Inventory tracking, multiple payment gateways, and conversion-optimized checkout",
        icon: "ShoppingCart",
        color: "text-purple-600",
        bg: "bg-purple-50"
      },
      {
        title: "Headless CMS & JAMstack",
        desc: "Decouple your frontend for maximum flexibility. Deliver content to web, mobile, and IoT from a single source",
        icon: "Layers",
        color: "text-orange-600",
        bg: "bg-orange-50"
      },
      {
        title: "Design & UX/UI",
        desc: "Visual appeal combined with strategic UX. Wireframing, prototyping, and mobile-first design that guides users toward action",
        icon: "Palette",
        color: "text-pink-600",
        bg: "bg-pink-50"
      },
      {
        title: "SEO & Performance",
        desc: "Technical SEO foundation, Core Web Vitals optimization, and schema implementation to rank higher and load faster",
        icon: "BarChart",
        color: "text-green-600",
        bg: "bg-green-50"
      }
    ],
    footer: {
      left: {
        title: "Typical Engagement",
        type: "highlight",
        content: "8-12 Weeks"
      },
      right: {
        title: "Deliverables",
        type: "tags",
        content: ["Responsive Design", "Custom Codebase", "CMS Setup", "SEO Optimization"]
      }
    }
  },

  // 4. PROCESS SECTION (Fixed: Added activities and deliverables)
  process: {
    title: "Development Process",
    description: "From initial discovery to post-launch support, our structured approach ensures a seamless build and measurable results",
    phases: [
      {
        phase: "Phase 1",
        title: "Discovery & Planning",
        duration: "1-2 weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Understand business goals & challenges",
          "Identify competitor opportunities",
          "Define technical requirements",
          "Establish project milestones"
        ],
        activities: [
          "Stakeholder interviews",
          "Competitor research",
          "Tech stack selection",
          "Scope definition"
        ],
        deliverables: [
          "Project timeline",
          "Technical specifications",
          "Site architecture map",
          "Detailed project plan"
        ]
      },
      {
        phase: "Phase 2",
        title: "Design & Prototyping",
        duration: "2-3 weeks",
        icon: "PenTool",
        color: "bg-purple-600",
        objectives: [
          "Establish layout and structure",
          "Create visual brand identity",
          "Ensure consistent design system",
          "Validate user experience"
        ],
        activities: [
          "Wireframing layouts",
          "Visual design creation",
          "Interactive prototyping",
          "Design review cycles"
        ],
        deliverables: [
          "High-fidelity mockups",
          "Interactive Figma prototype",
          "Component library",
          "Design system guide"
        ]
      },
      {
        phase: "Phase 3",
        title: "Development",
        duration: "4-6 weeks",
        icon: "Code",
        color: "bg-blue-600",
        objectives: [
          "Build frontend interfaces",
          "Develop backend functionality",
          "Integrate third-party tools",
          "Ensure mobile responsiveness"
        ],
        activities: [
          "Frontend implementation",
          "CMS configuration",
          "API development",
          "Responsive coding"
        ],
        deliverables: [
          "Staging environment",
          "Content management system",
          "Functional features",
          "Source code repository"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & QA",
        duration: "1-2 weeks",
        icon: "CheckCircle",
        color: "bg-green-600",
        objectives: [
          "Verify cross-browser compatibility",
          "Optimize load performance",
          "Validate SEO implementation",
          "Ensure accessibility compliance"
        ],
        activities: [
          "Browser & device testing",
          "Lighthouse performance audits",
          "Security scanning",
          "User acceptance testing"
        ],
        deliverables: [
          "QA report",
          "Performance metrics",
          "Accessibility score",
          "Ready-to-launch build"
        ]
      },
      {
        phase: "Phase 5",
        title: "Launch",
        duration: "1 week",
        icon: "Rocket",
        color: "bg-orange-600",
        objectives: [
          "Ensure secure connection",
          "Configure domain settings",
          "Track visitor analytics",
          "Deploy to production"
        ],
        activities: [
          "DNS propagation",
          "SSL certificate installation",
          "Analytics setup",
          "Final health check"
        ],
        deliverables: [
          "Live website",
          "Admin access credentials",
          "Analytics dashboard",
          "Deployment confirmation"
        ]
      },
      {
        phase: "Phase 6",
        title: "Post-Launch Support",
        duration: "Ongoing",
        icon: "LifeBuoy",
        color: "bg-blue-600",
        objectives: [
          "Maintain optimal performance",
          "Analyze user behavior",
          "Keep content current",
          "Protect against threats"
        ],
        activities: [
          "Performance monitoring",
          "Security patching",
          "Traffic analysis",
          "Feature updates"
        ],
        deliverables: [
          "Monthly status reports",
          "Uptime logs",
          "Security audit logs",
          "Support ticket resolution"
        ]
      }
    ]
  },

  // 5. TECH STACK
  techStack: {
    heading: "Modern Technology Stack",
    description: "We leverage the most reliable and performant tools in the industry to build websites that scale with your business",
    frameworks: [
      { name: "Next.js 14+", desc: "App Router & Server Components for speed" },
      { name: "React 18+", desc: "Interactive UIs with component architecture" },
      { name: "Vue.js", desc: "Progressive framework for flexible apps" },
      { name: "Tailwind CSS", desc: "Utility-first styling for custom designs" },
      { name: "TypeScript", desc: "Type-safe code for reliability" }
    ],
    llms: [
      { name: "WordPress", desc: "Powers 43% of the web, optimized by us" },
      { name: "Contentful", desc: "Cloud-based headless CMS for omnichannel" },
      { name: "Sanity", desc: "Real-time structured content platform" },
      { name: "Strapi", desc: "Open-source Node.js headless CMS" }
    ],
    mlOps: ["Git", "GitHub Actions", "Docker", "Figma", "Lighthouse"],
    cloudPlatforms: [
      {
        provider: "Hosting & Deploy",
        color: "text-black",
        services: ["Vercel", "Netlify", "AWS", "WP Engine", "DigitalOcean"]
      },
      {
        provider: "E-Commerce",
        color: "text-purple-600",
        services: ["WooCommerce", "Shopify", "Stripe", "PayPal"]
      },
      {
        provider: "Performance",
        color: "text-orange-600",
        services: ["Cloudflare", "Redis", "Google Analytics", "GTmetrix"]
      }
    ]
  },

  // 6. INDUSTRIES
  industries: {
    heading: "Industries We Serve",
    description: "Our web solutions are tailored to meet the specific challenges of diverse business sectors",
    items: [
      {
        id: "ecommerce",
        label: "Retail & E-commerce",
        icon: "ShoppingBag",
        theme: "blue",
        description: "High-conversion stores with seamless checkout experiences",
        features: [
          {
            title: "Mobile Shopping",
            desc: "70% of e-commerce is mobile. We optimize for thumb-scrolling",
            icon: "Smartphone",
            caseStudy: {
              title: "Fashion Retailer",
              result: "$180K revenue in 6 months"
            }
          },
          {
            title: "Cart Recovery",
            desc: "Automated systems to recover 10-30% of lost sales",
            icon: "RefreshCw"
          }
        ]
      },
      {
        id: "saas",
        label: "B2B & SaaS",
        icon: "Server",
        theme: "green",
        description: "Professional platforms that build trust and generate qualified leads",
        features: [
          {
            title: "Lead Generation",
            desc: "Strategic funnels and gated resources to capture enterprise leads",
            icon: "Magnet",
            caseStudy: {
              title: "Enterprise SaaS",
              result: "250% traffic increase"
            }
          },
          {
            title: "Performance",
            desc: "Sub-second load times for better ad quality scores",
            icon: "Zap"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES
  caseStudies: {
    heading: "Client Success Stories",
    description: "See how our web development solutions translate into measurable business growth",
    items: [
      {
        id: 1,
        category: "E-Commerce",
        client: "Fashion Retailer",
        title: "Mobile-First Store Launch",
        icon: "ShoppingBag",
        color: "text-pink-600",
        challenge: "Launch a complete online store in 8 weeks with a limited budget. Needed to compete with established retailers while building a brand from scratch",
        solution: "Built a WooCommerce store with custom mobile-first theme, integrated 500 variable products, and implemented abandoned cart recovery",
        implementation: [
          "Custom Mobile-First Theme",
          "Real-time Shipping Rates",
          "Abandoned Cart Recovery",
          "Core Web Vitals Optimization"
        ],
        results: [
          { label: "Revenue (6mo)", value: "$180K" },
          { label: "Conversion Rate", value: "3.2%" },
          { label: "Mobile Traffic", value: "72%" }
        ],
        quote: "Webronic built us a beautiful, fast store that exceeded our expectations. The investment paid for itself in the first quarter",
        author: "Founder, Online Boutique"
      },
      {
        id: 2,
        category: "B2B SaaS",
        client: "Enterprise Software Co",
        title: "Next.js Platform Migration",
        icon: "Code",
        color: "text-blue-600",
        challenge: "Outdated website taking 8+ seconds to load, hurting SEO and brand perception. Difficult for marketing team to update content",
        solution: "Built a Next.js application with Contentful CMS and server-side rendering. Created dynamic product pages and gated resources",
        implementation: [
          "Next.js & Contentful",
          "Server-Side Rendering",
          "HubSpot Integration",
          "Multi-language Support"
        ],
        results: [
          { label: "Load Time", value: "1.2s" },
          { label: "Organic Traffic", value: "+250%" },
          { label: "Lead Gen", value: "+180%" }
        ],
        quote: "The new site transformed our online presence. We're finally showing up on the first page of Google for our target keywords",
        author: "VP of Marketing"
      },
      {
        id: 3,
        category: "Professional Services",
        client: "Mid-size Law Firm",
        title: "SEO-Driven Transformation",
        icon: "Scale",
        color: "text-green-600",
        challenge: "Generic template site with zero local SEO presence. Getting only 50-100 visitors/month and losing leads to competitors",
        solution: "Custom WordPress site with 50+ practice area pages, LocalBusiness schema, and aggressive content strategy",
        implementation: [
          "Local SEO Schema",
          "Practice Area Landing Pages",
          "Google Business Profile Optimization",
          "Content Marketing Strategy"
        ],
        results: [
          { label: "Monthly Visitors", value: "5,000+" },
          { label: "Monthly Leads", value: "100+" },
          { label: "ROI", value: "20x" }
        ],
        quote: "The website has become our number one source of new clients. We've even hired additional attorneys to handle the new client volume",
        author: "Managing Partner"
      }
    ]
  },

  // 8. FAQ
  faq: {
    heading: "Common Questions",
    items: [
      {
        question: "How do I know if I need WordPress or Next.js?",
        answer: "Choose WordPress for ease of content updates and budget-friendliness. Choose Next.js when performance is critical (sub-2s loads), you need complex web app features, or require perfect SEO foundation"
      },
      {
        question: "Can I update website content myself?",
        answer: "Yes. For WordPress, you get an intuitive admin panel. For Next.js, we integrate headless CMSs like Contentful or Sanity. We provide training so you can manage text, images, and pages"
      },
      {
        question: "Will my website work on mobile devices?",
        answer: "Absolutely. We use a mobile-first approach. Every site is tested on real iPhones, Androids, and tablets to ensure 60%+ of your mobile traffic converts seamlessly"
      },
      {
        question: "Do you handle SEO?",
        answer: "We build the technical SEO foundation (Semantic HTML, Schema, Meta Tags, Speed). For ongoing rankings, we offer separate SEO services for keyword strategy and content creation"
      },
      {
        question: "Do I own the website?",
        answer: "Yes, 100%. Upon final payment, you receive full source code, design files, and admin access. No vendor lock-in"
      }
    ]
  },

  // 9. GET STARTED
  getStarted: {
    badge: "Start Building",
    titleLines: ["Ready to upgrade your", "Digital Presence?"],
    description: "Whether you need a high-performance web app or a conversion-focused corporate site, we're ready to build",
    cards: [
      {
        id: "consultation",
        title: "Free Website Consultation",
        description: "Discuss your goals, review competitors, and get a recommended platform approach",
        icon: "MessageSquare",
        theme: "light",
        list: [
          "Technical requirement review",
          "Platform recommendation",
          "Competitor analysis",
          "Rough cost estimation"
        ],
        cta: { text: "Book Consultation", link: "#consultation" }
      },
      {
        id: "proposal",
        title: "Request Detailed Proposal",
        description: "Get a comprehensive project plan including timeline, technical specs, and itemized costs",
        icon: "FileText",
        theme: "dark",
        list: [
          "Detailed scope of work",
          "Project timeline & milestones",
          "Technology stack breakdown",
          "Portfolio samples"
        ],
        cta: { text: "Request Proposal", link: "#proposal" }
      }
    ],
    contact: {
      title: "Contact Our Dev Team",
      subtitle: "Direct access to experts",
      methods: [
        { label: "Email Us", value: "web@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "App Development", href: "/services/app-development", icon: "Smartphone", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "AI Solutions", href: "/services/ai-machine-learning", icon: "Brain", color: "text-blue-500", bg: "bg-blue-50" },
      { title: "Cloud Services", href: "/services/cloud", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" }
    ],
    columns: [
      {
        title: "Guides",
        icon: "BookOpen",
        items: [
          { label: "WordPress vs Custom Dev", href: "#" },
          { label: "E-commerce Platform Comparison", href: "#" }
        ]
      },
      {
        title: "Insights",
        icon: "Lightbulb",
        items: [
          { label: "10 Ways to Improve Performance", href: "#" },
          { label: "SEO Best Practices", href: "#" }
        ]
      }
    ]
  }
};