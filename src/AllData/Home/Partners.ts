export type IntegrationItem = {
  name: string;
  description: string;
  image: string;
  link: string;
  color: string;
};

export const ITEMS: IntegrationItem[] = [
  { 
    name: "24SJU", 
    description: "Healthcare simplified. Digital solutions for modern patient care", 
    image: "./assets/24sju-se.png", 
    link: "https://24-sju.se/",
    color: "#2776ea" 
  },
  { 
    name: "ValueFlow", 
    description: "AI-powered cross-platform diagramming and workflow visualization", 
    image: "./assets/images/valuechart.png", 
    link: "https://www.valueflowsoft.com/",
    color: "#76ea27" 
  },
  { 
    name: "Tanlux", 
    description: "Comprehensive ERP enabling 24/7 unmanned tanning studio operations", 
    image: "./assets/images/tanluxlogo.png", 
    link: "https://tanlux.se/",
    color: "#2776ea" 
  },
  { 
    name: "FP Analyzer", 
    description: "Real-time IoT monitoring tracking OEE and optimizing production", 
    image: "./assets/images/fpanalyzer.png", 
    link: "https://www.fpanalyzer.se/",
    color: "#76ea27"
  },
  { 
    name: "StoreTech", 
    description: "Cloud-native solution powering 150+ unmanned stores with AI checkout", 
    image: "./assets/images/storetech-logo1.png", 
    link: "https://store-tech.se/",
    color: "#2776ea"
  },
  { 
    name: "ThingsAtWeb", 
    description: "The Internet of Things, realized. Connecting devices smarter", 
    image: "./assets/images/thingsatweb.png", 
    link: "https://www.thingsatweb.com/",
    color: "#76ea27"
  },
];