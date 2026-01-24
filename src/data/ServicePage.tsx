// data/serviceDetails.ts

export type ServiceDetailType = {
  id: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    cta: string;
    images: string[];
  };
  cards: {
    title: string;
    description: string;
    icon: string; 
    cta: string;
    theme: "blue" | "green" | "purple" | "orange"; 
  }[];
  ctaStrip: {
    title: string;
    description: string;
    cta: string;
  };
  sectionHeader: string;
};

export const serviceDetails: Record<string, ServiceDetailType> = {
  "app-development": {
    id: "app-development",
    hero: {
      eyebrow: "App, App, App!",
      title: "Invest Less Time",
      highlight: "Make More Money!",
      description: "Convert your Business ideas into Mobile Application before anyone else does. Get into your customers' mobile phone and your business growth will be unstoppable.",
      cta: "Get Started",
      images: ["../assets/services/app1.png", "../assets/services/app2.png", "../assets/services/app3.png"]
    },
    cards: [
      {
        title: "Smart Consumer Apps",
        description: "Our best In-house Mobile Application developers take your ideas to build a smart app which makes you easy money!",
        icon: "Smartphone", 
        cta: "Get Started",
        theme: "blue"
      },
      {
        title: "Industrial Control Apps",
        description: "We develop simple apps to smart industrial apps which controls the production process and products from your mobile phone.",
        icon: "Factory", // String
        cta: "Get Started",
        theme: "green"
      }
    ],
    ctaStrip: {
      title: "What are you waiting for?",
      description: "Contact us and we will help you get started.",
      cta: "Get Started"
    },
    sectionHeader: "App Services We Offer"
  },

  "web-development": {
    id: "web-development",
    hero: {
      eyebrow: "Web Presence",
      title: "Mobile Friendly",
      highlight: "Websites",
      description: "Mobiles have been widely used to surf the web more than computers recently. We ensure your presence is perfect on every screen.",
      cta: "Get Started",
      images: ["../assets/services/web1.png", "../assets/services/web2.png", "../assets/services/web3.png"]
    },
    cards: [
      {
        title: "Mobile-Friendly Development",
        description: "Are you looking for a mobile-friendly website development company? We build responsive sites that adapt to any device.",
        icon: "Globe",
        cta: "Get Started",
        theme: "blue"
      },
      {
        title: "Customizable & Selling",
        description: "We develop Mobile-friendly websites that is both customizable and selling! Optimized for conversions and growth.",
        icon: "Layout",
        cta: "Get Started",
        theme: "purple"
      }
    ],
    ctaStrip: {
      title: "Ready to go online?",
      description: "Let's build a website that represents your brand perfectly.",
      cta: "Get Started"
    },
    sectionHeader: "Web Development Services We Offer"
  },

  "domain-hosting": {
    id: "domain-hosting",
    hero: {
      eyebrow: "Speed & Security",
      title: "Domain &",
      highlight: "Hosting",
      description: "The choice of domain and hosting service affects the speed and performance of your website! We help you choose the right Domain and Server hosting service as per your business need and customer traffic.",
      cta: "Get Started",
      images: ["../assets/services/domain1.png", "../assets/services/domain2.png", "../assets/services/domain3.png"]
    },
    cards: [
      {
        title: "Affordable Web Hosting",
        description: "If you’re looking for hosting service for a simple blog website with few pictures, suitable for starters.",
        icon: "Server",
        cta: "Get Started",
        theme: "blue"
      },
      {
        title: "High Security & Speed",
        description: "For webshops with high security for payment services and large images. We deliver performance you can trust.",
        icon: "ShieldCheck",
        cta: "Get Started",
        theme: "green"
      },
      {
        title: "Cloud Hosting Services",
        description: "Amazon AWS, Microsoft Azure, Google Cloud gives you the space to create the best cloud solutions for your business.",
        icon: "Cloud",
        cta: "Get Started",
        theme: "orange"
      }
    ],
    ctaStrip: {
      title: "Secure your spot online",
      description: "Fast, secure, and reliable hosting solutions for every business size.",
      cta: "Get Started"
    },
    sectionHeader: "Domain & Hosting that we offer"
  },

  "digital-marketing": {
    id: "digital-marketing",
    hero: {
      eyebrow: "Growth Strategy",
      title: "Digital",
      highlight: "Marketing",
      description: "If you understand the basics of digital marketing, you will learn how to find new customers on the internet. We will make digital marketing easy for your business!",
      cta: "Get Started",
      images: ["../assets/services/digital1.png", "../assets/services/digital2.png", "../assets/services/digital3.png"]
    },
    cards: [
      {
        title: "Marketing Strategy",
        description: "1. Strategy for digital marketing (What do you want to achieve?)\n2. Who is your dream customer?\n3. Think like a customer!",
        icon: "Target",
        cta: "Get Started",
        theme: "blue"
      },
      {
        title: "Reach New Customers",
        description: "We help you identify what social platforms your customers use and create content that makes visitors want to stay.",
        icon: "Megaphone",
        cta: "Get Started",
        theme: "purple"
      }
    ],
    ctaStrip: {
      title: "What are you waiting for?",
      description: "Get help from us, we will help you with strategy, SEO and digital marketing.",
      cta: "Get Started"
    },
    sectionHeader: "Digital Marketing Services We Offer"
  },

  "seo-optimization": {
    id: "seo-optimization",
    hero: {
      eyebrow: "Rank Higher",
      title: "Search Engine",
      highlight: "Optimization",
      description: "Are customers finding your business online? How good is your SEO? We provide free technical SEO analysis and help you rank high on Google without paying for advertising.",
      cta: "Get Started",
      images: ["../assets/services/seo1.png", "../assets/services/seo2.png", "../assets/services/seo3.png"]
    },
    cards: [
      {
        title: "Organic Growth",
        description: "Rank high on Google without paying for advertising. Read how SEO long tail keywords improve your ranking.",
        icon: "LineChart",
        cta: "Get Started",
        theme: "green"
      },
      {
        title: "Optimization",
        description: "Things at Web helps you understand how customers search on Google and how to optimize your website for higher rankings.",
        icon: "Search",
        cta: "Get Started",
        theme: "blue"
      }
    ],
    ctaStrip: {
      title: "What are you waiting for!",
      description: "Do you want to rank higher on Google? Contact us for free advice.",
      cta: "Free Advice"
    },
    sectionHeader: "SEO Services We Offer"
  },

  "iot-solutions": {
    id: "iot-solutions",
    hero: {
      eyebrow: "Smart Tech",
      title: "IoT",
      highlight: "Solutions",
      description: "What is Internet of things (IoT)? It is the network of devices connected through internet. We offer services to make your products smart and enhanced.",
      cta: "Get Started",
      images: ["../assets/services/iot1.png", "../assets/services/iot2.png", "../assets/services/iot2.png"]
    },
    cards: [
      {
        title: "Smart Products",
        description: "Do you want to make your products smart with Internet of things (IoT) technology?",
        icon: "Cpu",
        cta: "Get Started",
        theme: "blue"
      },
      {
        title: "End-to-End Solutions",
        description: "We provide end-to-end solutions to develop the perfect Internet of Things (IoT) solution for you!",
        icon: "Wifi",
        cta: "Get Started",
        theme: "purple"
      }
    ],
    ctaStrip: {
      title: "Connect your world",
      description: "Make your business smarter with our advanced IoT integration services.",
      cta: "Get Started"
    },
    sectionHeader: "IoT Services We Offer"
  }
};