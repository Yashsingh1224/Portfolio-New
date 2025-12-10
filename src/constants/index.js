// src/constants/index.js
import { Code2, Brain, Rocket, Trophy } from 'lucide-react';

export const projects = [
  {
    title: "AI Image Generator",
    description: "A full-stack application using OpenAI's DALL-E API. Users can generate, share, and download AI images. Built with MERN stack.",
    tags: ["React", "Node.js", "OpenAI API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with interactive charts and market analysis tools using CoinGecko API.",
    tags: ["Next.js", "TypeScript", "Recharts", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Smart Home OS",
    description: "IoT interface for managing smart devices. Features 3D visualization of the home and real-time state management.",
    tags: ["React Three Fiber", "Socket.io", "Zustand"],
    image: "https://images.unsplash.com/photo-1558002038-109177381792?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

export const skills = [
  { name: "Frontend", icon: Code2, level: 90 },
  { name: "AI/ML", icon: Brain, level: 85 },
  { name: "Backend", icon: Rocket, level: 80 },
  { name: "Architecture", icon: Trophy, level: 75 },
];
// Add these exports to your existing file

export const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Aagati Server Pvt. Ltd.",
    year: "2025 - Present",
    description: "Architecting scalable microservices and leading the migration to Next.js 14. Reduced server costs by 30%.",
  },
  {
    role: "AI/ML Developer",
    company: "Freelance",
    year: "2023 - 2025",
    description: "Developed computer vision models for automated quality control. Integrated Python flask APIs with React dashboards.",
  },
  {
    role: "Frontend Developer",
    company: "Truesamp",
    year: "2022 - 2023",
    description: "Built pixel-perfect responsive websites for high-profile clients using React and GSAP animations.",
  }
];

export const certificates = [
  {
    name: "Machine Learning",
    issuer: "Amazon Web Services",
    date: "2025",
    link: "https://drive.google.com/file/d/1aHhbpR7PFZXzBRffmfg2dU8X_BsRHIFP/view?usp=sharing"
  },
  {
    name: "Gen AI Professional",
    issuer: "Oracle",
    date: "2025",
    link: "https://drive.google.com/file/d/1laXE0c1EY3zPrafostBuYGvElosOMlYj/view?usp=sharing"
  },
  {
    name: "Cybersecurity Fundamentals",
    issuer: "CISCO",
    date: "2025",
    link: "https://drive.google.com/file/d/1g9_imNFnUAnC8i-YM5tSJ1u5Ktb6NO5n/view?usp=sharing"
  }
];

// Add these to your existing constants file

export const services = [
  {
    id: "01",
    title: "Full Stack Architecture",
    description: "Building scalable, fault-tolerant web applications using MERN/Next.js. I design systems that can handle high traffic with microservices architecture.",
    features: ["System Design", "Database Optimization", "API Development"]
  },
  {
    id: "02",
    title: "AI Model Integration",
    description: "Bridging the gap between Python AI models and web interfaces. I deploy TensorFlow/PyTorch models via FastAPI and connect them to React frontends.",
    features: ["Predictive Analytics", "NLP Chatbots", "Computer Vision"]
  },
  {
    id: "03",
    title: "Performance Engineering",
    description: "Optimizing existing applications for speed and SEO. I use advanced caching strategies, lazy loading, and code splitting to ensure <1s load times.",
    features: ["Core Web Vitals", "Server Side Rendering", "Caching Strategies"]
  }
];

export const reviews = [
  {
    name: "Alex Morgan",
    role: "CTO, TechStart",
    content: "He transformed our MVP into a production-ready platform. The AI integration was seamless and the code quality is top-tier."
  },
  {
    name: "Sarah Chen",
    role: "Product Lead",
    content: "One of the few developers who understands both the math behind machine learning and the intricacies of React state management."
  },
  {
    name: "James Wilson",
    role: "Founder, DataFlow",
    content: "The system architecture he designed reduced our server costs by 40%. Highly recommended for complex backend work."
  },
  {
    name: "Emily Davis",
    role: "Director of Engineering",
    content: "Incredible attention to detail. The animations and UI interactions added a level of polish we didn't expect."
  }
];