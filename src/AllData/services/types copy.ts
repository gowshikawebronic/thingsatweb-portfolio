// src/app/service/data/types.ts

export interface ServicePageData {
  id: string; // Used for the URL slug

  // --- NEW: Data specifically for the Services Listing Page Card ---
  preview: {
    title: string;
    tagline: string;
    description: string;
    image: string; // Path to the floating 3D image
    icon: string;  // String name for the DynamicIcon
    points: string[]; // The list of checks
    technologies: { name: string; logo: string }[]; // Mini logos for the toggle
  };
  
  // 1. Hero Section
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    features: string[]; // The checkmark list
    ctaPrimary: string;
    ctaSecondary: string;
  };

  // 2. Overview Section
  overview: {
    badge: string;
    heading: string;
    highlight: string;
    content: string[]; // Array of paragraphs
    differentiators: {
      title: string;
      description: string;
      icon: string; // String name for Lucide icon
    }[];
  };

  // 3. Core Services (The main cards)
  coreServices: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    cards: {
      title: string;
      desc: string;
      icon: string;
      color?: string; // e.g., "text-[#2776ea]"
      bg?: string;    // e.g., "bg-[#2776ea]/10"
      list?: string[];
      tags?: string[];
      span?: string; // Layout helper like "md:col-span-2"
    }[];
    footer: {
      left: { title: string; type: string; content: any };
      right: { title: string; type: string; content: any };
    };
  };

  // 4. Development Process
  process: {
    title: string;
    description: string;
    phases: {
      phase: string;
      title: string;
      duration: string;
      icon: string;
      color: string;
      objectives: string[];
      activities: string[];
      deliverables: string[];
    }[];
  };

  // 5. Tech Stack
  techStack: {
    heading: string;
    description: string;
    frameworks: { name: string; desc: string }[];
    llms: { name: string; desc: string }[];
    mlOps: string[]; // Tags
    cloudPlatforms: {
      provider: string;
      color: string;
      services: string[];
    }[];
  };

  // 6. Industries
  industries: {
    heading: string;
    description: string;
    items: {
      id: string;
      label: string;
      icon: string;
      theme: "blue" | "green";
      description: string;
      features: {
        title: string;
        desc: string;
        icon: string;
        caseStudy?: { title: string; result: string };
      }[];
    }[];
  };

  // 7. Case Studies
  caseStudies: {
    heading: string;
    description: string;
    items: {
      id: number;
      category: string;
      client: string;
      title: string;
      icon: string;
      color: string;
      challenge: string;
      solution: string;
      implementation: string[];
      results: { label: string; value: string }[];
      quote: string;
      author: string;
    }[];
  };

  // 8. FAQ
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };

  // 9. Get Started
  getStarted: {
    badge: string;
    titleLines: string[];
    description: string;
    cards: {
      id: string;
      title: string;
      description: string;
      icon: string;
      theme: "light" | "dark";
      list: string[];
      cta: { text: string; link: string };
    }[];
    contact: {
      title: string;
      subtitle: string;
      methods: {
        label: string;
        value: string;
        icon: string;
        iconColor: string;
      }[];
    };
  };

  // 10. Related Resources
  relatedResources: {
    services: { title: string; href: string; icon: string; color: string; bg: string }[];
    columns: { title: string; icon: string; items: { label: string; href: string }[] }[];
  };
}