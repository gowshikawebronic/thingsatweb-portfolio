// src/app/service/data/types.ts

export interface ServicePageData {
  id: string;

  preview: {
    title: string;
    tagline: string;
    description: string;
    image: string;
    icon: string;
    localIcon?: string;
    points: string[];
    technologies: { name: string; logo: string }[];
  };

  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    features: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };

  overview: {
    badge: string;
    heading: string;
    highlight: string;
    content: string[];
    description?:string;
    differentiators: {
      title: string;
      description: string;
      icon: string;
    }[];
  };

  coreServices: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    cards: {
      title: string;
      desc: string;
      icon: string;
      color?: string;
      bg?: string;
      list?: string[];
      tags?: string[];
      span?: string;
    }[];
    footer: {
      left: { title: string; type: string; content: any };
      right: { title: string; type: string; content: any };
    };
  };

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

  techStack: {
    heading: string;
    description: string;
    frameworks: { name: string; desc: string }[];
    llms: { name: string; desc: string }[];
    mlOps: string[];
    cloudPlatforms: {
      provider: string;
      color: string;
      services: string[];
    }[];
  };

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

  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };

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

  relatedResources: {
    services: { title: string; href: string; icon: string; color: string; bg: string }[];
    columns: { title: string; icon: string; items: { label: string; href: string }[] }[];
  };
}
