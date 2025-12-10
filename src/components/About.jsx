import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Code, Brain, Database, Layout } from 'lucide-react';
import Photo from "../assets/profile.jpeg";

// --- Skills Data from Resume ---
const RESUME_SKILLS = [
    { name: "Frontend (React/Native)", level: 90, icon: Layout },
    { name: "Backend (Node/Flask)", level: 85, icon: Database },
    { name: "AI/ML (Python/TensorFlow)", level: 80, icon: Brain },
    { name: "Core (Java/DSA)", level: 75, icon: Code }
];

const About = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-white dark:bg-dark-bg overflow-hidden" id="about">
            <div className="flex flex-col lg:flex-row items-center gap-16">

                {/* 1. The Photo Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    <div className="relative w-72 h-96 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-dark-border bg-gray-100 dark:bg-dark-card z-10">
                        <img
                            src={Photo}
                            alt="Yash Profile"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />

                        {/* Scanner Animation */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-full h-[10px] animate-float opacity-0 group-hover:opacity-100 pointer-events-none" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 -left-4 w-72 h-96 border-2 border-primary/30 rounded-2xl -z-0" />
                    <div className="absolute -bottom-4 -right-4 w-72 h-96 bg-gray-100 dark:bg-dark-card rounded-2xl -z-10" />
                </motion.div>

                {/* 2. The Text & Skills */}
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Behind the <span className="text-primary">Code</span>
                        </h2>

                        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            [cite_start]I am a final-year Computer Science undergraduate at the <strong className="text-gray-900 dark:text-white">University of Petroleum and Energy Studies</strong>[cite: 5].
                            <br /><br />
                            My passion lies in the convergence of Full Stack Engineering and Artificial Intelligence.
                            [cite_start]From building accessible banking apps [cite: 50] [cite_start]to architecting AI-powered content generators[cite: 56],
                            I strive to bridge the gap between complex <span className="text-primary font-mono">AI models</span> and <span className="text-accent font-mono">intuitive UIs</span>.
                        </p>

                        {/* Resume Download Button */}
                        <div className="mt-6">
                            {/* UPDATED: Direct link to public folder file */}
                            <a
                                href="/Yash_Resume.pdf"
                                download="Yash_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg hover:shadow-primary/20"
                            >
                                <FileDown size={20} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Skill Bars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {RESUME_SKILLS.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 dark:bg-dark-card p-4 rounded-lg border border-gray-100 dark:border-dark-border hover:border-primary/50 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <skill.icon className="text-primary" size={20} />
                                    <span className="font-semibold dark:text-white">{skill.name}</span>
                                </div>
                                <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-primary to-accent"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;