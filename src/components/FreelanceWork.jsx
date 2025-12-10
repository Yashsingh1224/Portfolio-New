import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, ShieldCheck, MessageSquare, ShoppingBag, Leaf, PieChart } from 'lucide-react';
import FrinzoImg from "../assets/frinzo-img.png"

// --- Data extracted from Resume ---
const CLIENTS = [
    {
        id: "desitana",
        name: "Desitana",
        url: "https://desitana.com",
        role: "Freelance Full Stack Engineer", // [cite: 21]
        period: "Aug 2025", // [cite: 22]
        description: "A high-performance e-commerce platform dedicated to ethnic wear (Sarees). Engineered to handle complex inventory and secure transactions.", // 
        // Specific achievements from resume [cite: 23, 24, 25]
        achievements: [
            { icon: TrendingUp, text: "Increased user engagement by 30%" },
            { icon: ShieldCheck, text: "Secure Auth for Admin & Customers" },
            { icon: ShoppingBag, text: "Comprehensive Admin Dashboard" }
        ],
        theme: "from-pink-500 to-rose-500", // Fashion Theme
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop" // Saree/Fashion visual
    },
    {
        id: "frinzo",
        name: "Frinzo",
        url: "https://frinzo.in",
        role: "Freelance Web Developer", // [cite: 14]
        period: "Nov 2025", // [cite: 17]
        description: "A modern D2C website for a natural beverage brand. Focused on 'Palm Nectar' showcasing with an engaging UI that highlights health benefits.", // [cite: 18, 19]
        // Specific achievements from resume [cite: 19, 20]
        achievements: [
            { icon: Leaf, text: "Visual Hierarchy for Product Discovery" },
            { icon: TrendingUp, text: "Optimized Structure & UX" },
            { icon: PieChart, text: "Brand-Centric UI Design" }
        ],
        theme: "from-green-500 to-emerald-600", // Nature Theme
        image: FrinzoImg  // Nature/Beverage visual
    },
    {
        id: "truesamp",
        name: "TrueSamp",
        url: "https://truesamp.com",
        role: "Web Developer", // [cite: 37]
        period: "Aug 2024 - Nov 2024", // [cite: 38]
        description: "A corporate web solution for a marketing research company. Delivered a responsive interface with real-time customer support integration.", // [cite: 39]
        // Specific achievements from resume [cite: 40, 41]
        achievements: [
            { icon: MessageSquare, text: "Real-time Chatbot (Tawk API)" },
            { icon: ShieldCheck, text: "Finance-Grade Responsiveness" },
            { icon: TrendingUp, text: "Core Functionalities Delivered" }
        ],
        theme: "from-blue-600 to-indigo-600", // Finance Theme
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop" // Finance/Data visual
    }
];

const WorkItem = ({ client, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center mb-32 last:mb-0`}
        >
            {/* Visual Side - Browser Mockup */}
            <div className="w-full lg:w-3/5 group perspective-1000">
                <motion.div
                    whileHover={{ rotateY: isEven ? 2 : -2, rotateX: 2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800"
                >
                    {/* Browser Toolbar */}
                    <div className="h-8 bg-gray-800 flex items-center px-4 gap-2 border-b border-gray-700">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <div className="ml-4 flex-1 h-5 bg-gray-900/50 rounded text-[10px] text-gray-500 flex items-center px-3 font-mono">
                            {client.url.replace('https://', '')}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${client.theme} opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10`} />
                        <img
                            src={client.image}
                            alt={client.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/5 space-y-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className={`h-px w-8 bg-gradient-to-r ${client.theme}`} />
                        <span className={`text-sm font-bold bg-gradient-to-r ${client.theme} bg-clip-text text-transparent uppercase tracking-wider`}>
                            {client.period}
                        </span>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{client.name}</h3>
                    <p className="text-gray-500 font-mono text-sm border-l-2 border-gray-300 dark:border-gray-700 pl-3">
                        {client.role}
                    </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {client.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-3">
                    {client.achievements.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${client.theme} bg-opacity-10 text-white shadow-sm`}>
                                <item.icon size={18} />
                            </div>
                            <span className="text-sm font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>

                <div className="pt-4">
                    <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-all hover:gap-4"
                    >
                        Visit Website <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const FreelanceWork = () => {
    return (
        <section className="py-24 px-6 lg:px-20 bg-gray-50 dark:bg-dark-bg overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Client <span className="text-primary">Success Stories</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                        Delivering high-impact digital solutions for real-world businesses.
                        From <span className="text-green-500 font-semibold">D2C brands</span> to <span className="text-pink-500 font-semibold">E-commerce platforms</span>.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {CLIENTS.map((client, index) => (
                        <WorkItem key={client.id} client={client} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FreelanceWork;