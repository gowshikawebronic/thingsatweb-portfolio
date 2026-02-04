import { 
  Users, Globe, Briefcase, Star, Search, ArrowRight, Sparkles,
  Cpu, TrendingUp, Zap, GitMerge, HeartHandshake, 
  Heart, Rocket, Award, ShieldCheck, Scale, MessageCircle, Eye, Globe2, Smile, Monitor, Coffee,
  Wallet, GraduationCap, Clock, Umbrella,
  FileText, Phone, Code2, UserCheck, Gift, MessageSquare, Ghost, CheckCircle,
  Brain, Cloud, Quote,
  Layout, Shield, Terminal
} from "lucide-react";

// --- TYPES ---
export interface Job {
  id: string;
  category: string;
  title: string;
  location: string;
  experience: string;
  salary?: string;
  skills: string[];
  description: string;
  details: {
    whatYouWillDo: string[];
    niceToHave?: string[];
    projects?: string;
    conversion?: string;
  };
}

export interface CareersPageData {
  hero: {
    badge: string;
    titleLines: string[];
    subHeadline: string;
    ctas: { label: string; href: string; primary: boolean }[];
    stats: { value: string; label: string; icon: any }[];
  };
  whyWebronic: {
    header: { badge: string; title: string; highlight: string; description: string };
    features: { id: number; title: string; description: string; icon: any; color: "blue" | "green"; details: string[] }[];
  };
  culture: {
    header: { badge: string; title: string; highlight: string; description: string };
    coreValues: { title: string; description: string; icon: any; color: "blue" | "green"; fullWidth?: boolean }[];
    environment: { title: string; items: { title: string; desc: string; icon: any }[] };
  };
  benefits: {
    header: { badge: string; title: string; highlight: string; description: string };
    categories: { id: string; title: string; icon: any; color: "blue" | "green"; subsections: { title: string; items: string[] }[] }[];
  };
  openPositions: {
    header: { badge: string; title: string; description: string };
    categories: string[];
    jobs: Job[];
  };
  hiringProcess: {
    header: { badge: string; title: string; description: string };
    totalTimeline: string;
    steps: { step: string; title: string; duration: string; icon: any; description: string; details?: string[]; subSections?: { heading: string; items: string[] }[] }[];
    commitments: { title: string; desc: string; icon: any }[];
  };
  lifeAtWebronic: {
    header: { badge: string; title: string; description: string };
    stories: { name: string; role: string; tenure: string; icon: any; color: "blue" | "green"; content: string; love: string }[];
    testimonials: { text: string; author: string; role: string; icon: any }[];
  };
}

// --- DATA ---
export const CAREERS_DATA: CareersPageData = {
  hero: {
    badge: "Build Your Career",
    titleLines: ["Shape the Future of", "Technology"],
    subHeadline: "Join a team of 200+ innovators delivering cutting-edge solutions to 500+ clients across 50+ countries. Work on real-world problems using AI, Cloud, IoT, and emerging technologies",
    ctas: [
      { label: "View Open Positions", href: "#open-positions", primary: true },
      { label: "General Application", href: "/careers/general-application", primary: false }
    ],
    stats: [
      { value: "200+", label: "Team Members", icon: Users },
      { value: "15+", label: "Years Innovation", icon: Briefcase },
      { value: "50+", label: "Countries", icon: Globe },
      { value: "4.8", label: "Glassdoor", icon: Star }
    ]
  },
  whyWebronic: {
    header: {
      badge: "Why Webronic?",
      title: "More Than Just a Job",
      highlight: "A Career Journey",
      description: "At Webronic Industries, we don't just build software. We solve real-world problems that impact millions of lives. From autonomous retail stores to real-time manufacturing optimization"
    },
    features: [
      {
        id: 1,
        title: "Cutting-Edge Tech",
        description: "We don't maintain legacy systems. We build the future with TensorFlow, PyTorch, React, Kubernetes, and Cloud Platforms",
        icon: Cpu,
        color: "blue",
        details: ["AI & Deep Learning", "Cloud-Native & Serverless", "Industrial IoT & Edge", "Web3 & Blockchain"]
      },
      {
        id: 2,
        title: "Real Impact",
        description: "Your work directly impacts businesses. We measure success in quantifiable outcomes like 68% downtime reduction",
        icon: TrendingUp,
        color: "green",
        details: ["Powering manufacturing", "Predicting equipment failures", "Serving 100k+ daily users", "Critical 24/7 monitoring"]
      },
      {
        id: 3,
        title: "Global & Local",
        description: "Headquartered in Chennai with offices in Madurai, Salem, and Sweden. Work on international projects with a vibrant local culture",
        icon: Globe2,
        color: "blue",
        details: ["Clients across 4 continents", "Global collaboration", "International exposure", "Multi-city offices"]
      },
      {
        id: 4,
        title: "Innovation First",
        description: "We encourage experimentation. We sponsor tech conferences and provide financial support for certifications",
        icon: Zap,
        color: "green",
        details: ["20% Innovation Time", "Quarterly Hackathons", "Weekly Tech Talks", "Certification Sponsorship"]
      },
      {
        id: 5,
        title: "Career Growth",
        description: "Clear career progression paths promoting from within. Many senior leaders started as developers",
        icon: GitMerge,
        color: "blue",
        details: ["Defined Technical Track", "Management Opportunities", "Subject Matter Experts", "Internal Promotions"]
      },
      {
        id: 6,
        title: "Work-Life Balance",
        description: "Technology is demanding, but burnout helps no one. We offer a supportive environment where emergencies are rare",
        icon: HeartHandshake,
        color: "green",
        details: ["Hybrid Work Model", "Generous Paid Leave", "Sabbatical Program", "Flexible Core Hours"]
      }
    ]
  },
  culture: {
    header: {
      badge: "Our Culture",
      title: "Built on Trust,",
      highlight: "Driven by Excellence",
      description: "We don't just deliver projects. We deliver outcomes. Our culture is the foundation of every solution we build"
    },
    coreValues: [
      { title: "Customer Obsession", description: "We measure success by our clients' success. A 30% cost reduction for them is our achievement", icon: Heart, color: "blue" },
      { title: "Innovation", description: "We question the status quo. 'That’s how it’s always been done' isn’t an acceptable answer", icon: Rocket, color: "green" },
      { title: "Excellence", description: "Good enough isn't good enough. We write clean code, document thoroughly, and test rigorously", icon: Award, color: "blue" },
      { title: "Collaboration", description: "We succeed together. Knowledge hoarding is discouraged. Helping teammates is celebrated", icon: Users, color: "green" },
      { title: "Ownership", description: "Take ownership. If you write it, you own it. If it breaks, you fix it. We trust you to decide", icon: ShieldCheck, color: "blue" },
      { title: "Learning", description: "Technology evolves. Yesterday’s expert is today’s student. We embrace career-long learning", icon: Zap, color: "green" },
      { title: "Integrity", description: "We do the right thing even when no one’s watching. Honest timelines, respected confidentiality", icon: Scale, color: "blue", fullWidth: true }
    ],
    environment: {
      title: "Our Work Environment",
      items: [
        { title: "Open Communication", desc: "Flat hierarchy, accessible leadership", icon: MessageCircle },
        { title: "Transparent Decisions", desc: "Understand the 'why' behind decisions", icon: Eye },
        { title: "Diverse & Inclusive", desc: "30% women in tech, 8+ states represented", icon: Globe2 },
        { title: "Fun & Engaging", desc: "Outings, parties, and tournaments", icon: Smile },
        { title: "Modern Workspace", desc: "Ergonomic, high-speed, latest gear", icon: Monitor },
        { title: "Healthy Living", desc: "Healthy meals and fitness partners", icon: Coffee }
      ]
    }
  },
  benefits: {
    header: {
      badge: "Perks",
      title: "Comprehensive Package",
      highlight: "For Your Life",
      description: "We invest in our people. From financial security to physical well-being and professional growth"
    },
    categories: [
      {
        id: "financial", title: "Financial", icon: Wallet, color: "blue",
        subsections: [
          { title: "Compensation", items: ["Top-tier salaries", "Annual bonuses (10-25%)", "Stock options (Senior)", "Referral bonuses"] },
          { title: "Allowances", items: ["Housing & Transport", "Internet Reimbursement", "WFH Setup Allowance"] }
        ]
      },
      {
        id: "health", title: "Wellness", icon: Heart, color: "green",
        subsections: [
          { title: "Insurance", items: ["Family Cover (₹10L)", "Dental & Vision", "Mental Health Support", "Annual Checkups"] },
          { title: "Programs", items: ["Gym Reimbursement", "On-site Yoga", "Ergonomic Assessments"] }
        ]
      },
      {
        id: "growth", title: "Growth", icon: GraduationCap, color: "blue",
        subsections: [
          { title: "Learning", items: ["100% Cert Sponsorship", "Udemy/Coursera", "Conf. Attendance", "Mentorship"] },
          { title: "Career", items: ["Quarterly Reviews", "Internal Job Priority", "Leadership Training"] }
        ]
      },
      {
        id: "timeoff", title: "Time Off", icon: Clock, color: "green",
        subsections: [
          { title: "Leave", items: ["24 Annual Days", "12 Public Holidays", "Parental Leave", "Bereavement"] },
          { title: "Flexibility", items: ["Hybrid Model", "Flexible Hours", "Work from Anywhere", "Paid Sabbatical"] }
        ]
      },
      {
        id: "lifestyle", title: "Lifestyle", icon: Coffee, color: "blue",
        subsections: [
          { title: "Culture", items: ["Monthly Outings", "Festival Bonuses", "Birthday Offs"] },
          { title: "Office", items: ["Subsidized Food", "Game Room (PS5)", "Shuttle Service"] }
        ]
      },
      {
        id: "future", title: "Future", icon: Umbrella, color: "green",
        subsections: [
          { title: "Family", items: ["Childcare Allowance", "Scholarships", "Relocation Help"] },
          { title: "Planning", items: ["EPF & Gratuity", "NPS Options", "Life Insurance"] }
        ]
      }
    ]
  },
  openPositions: {
    header: {
      badge: "Hiring",
      title: "Join Our Team",
      description: "Active roles in Chennai, Madurai, and Salem. Hybrid options available"
    },
    categories: ["All", "Software Development", "AI & ML", "Cloud & DevOps", "Cybersecurity", "UI/UX Design", "Freshers"],
    jobs: [
      {
        id: "soft-1", category: "Software Development", title: "Full Stack Developer", location: "Chennai", experience: "2-5 years", skills: ["Node.js", "React", "AWS"], description: "Build scalable web apps",
        details: { whatYouWillDo: ["Build scalable apps", "Design APIs", "Mentor juniors"], niceToHave: ["TypeScript", "Docker"], projects: "E-commerce, SaaS" }
      },
      {
        id: "ai-1", category: "AI & ML", title: "ML Engineer", location: "Chennai", experience: "3-7 years", salary: "₹12-25 LPA", skills: ["Python", "TensorFlow", "MLOps"], description: "Develop and deploy ML models",
        details: { whatYouWillDo: ["Develop models", "Deploy to prod", "MLOps pipelines"], niceToHave: ["Computer Vision", "NLP"], projects: "Quality inspection" }
      },
      {
        id: "cloud-1", category: "Cloud & DevOps", title: "DevOps Engineer", location: "Chennai", experience: "3-6 years", skills: ["K8s", "Docker", "AWS"], description: "Manage CI/CD and infrastructure",
        details: { whatYouWillDo: ["CI/CD pipelines", "Manage K8s", "IaC"], niceToHave: ["Istio", "GitOps"], projects: "Microservices" }
      },
      {
        id: "intern-1", category: "Freshers", title: "Software Intern", location: "All Locations", experience: "Fresher", salary: "₹15k-25k/mo", skills: ["Java/Python", "SQL"], description: "6-month internship with conversion potential",
        details: { whatYouWillDo: ["Real projects", "Agile process", "Mentorship"], conversion: "Full-time offer potential" }
      }
    ]
  },
  hiringProcess: {
    header: { badge: "Process", title: "Transparent & Efficient", description: "We value your time" },
    totalTimeline: "2-3 weeks",
    steps: [
      { step: "01", title: "Apply", duration: "1-3 days", icon: FileText, description: "Submit your CV" },
      { step: "02", title: "Screening", duration: "30 mins", icon: Phone, description: "Intro chat with HR" },
      { step: "03", title: "Tech Task", duration: "1-2 hours", icon: Code2, description: "Practical skills assessment" },
      { step: "04", title: "Interview", duration: "1 hour", icon: Users, description: "Deep dive with the team" },
      { step: "05", title: "Culture", duration: "45 mins", icon: HeartHandshake, description: "Values alignment check" },
      { step: "06", title: "Offer", duration: "1-2 days", icon: Gift, description: "Welcome aboard!" }
    ],
    commitments: [
      { title: "Respectful", desc: "Timely responses", icon: MessageSquare },
      { title: "No Ghosting", desc: "Closure for all", icon: Ghost },
      { title: "Feedback", desc: "Available on request", icon: CheckCircle },
      { title: "Transparent", desc: "No surprises", icon: Eye }
    ]
  },
  lifeAtWebronic: {
    header: { badge: "Life Here", title: "A Day in the Life", description: "Hear from the team" },
    stories: [
      { name: "Rajesh", role: "Sr. Developer", tenure: "3 Years", icon: Code2, color: "blue", content: "Flexible hours, great code reviews, and fun team outings. I learn something new every day", love: "Real impact & smart people" },
      { name: "Priya", role: "ML Engineer", tenure: "1.5 Years", icon: Brain, color: "green", content: "Smooth transition from research to industry. Supportive team helped me learn Docker and K8s", love: "Work-life balance" },
      { name: "Arun", role: "DevOps", tenure: "4 Years", icon: Cloud, color: "blue", content: "Started as a junior, now managing K8s clusters. The growth support here is real", love: "Career growth" }
    ],
    testimonials: [
      { text: "Best place for freshers to learn cutting-edge tech", author: "Divya", role: "ML Engineer", icon: Zap },
      { text: "Actual work-life balance, not just a buzzword", author: "Karthik", role: "Backend Dev", icon: Clock },
      { text: "Transparent management and smart colleagues", author: "Sneha", role: "Project Manager", icon: Smile }
    ]
  }
};