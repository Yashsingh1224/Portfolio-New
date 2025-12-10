import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { Code2, BrainCircuit, ChevronRight, Github, Linkedin, Terminal } from 'lucide-react';

const Hero = () => {
    // Data extracted from Yash_Resume_updated.pdf
    const profile = {
        name: "Yash",
        roles: [
            "// Full Stack Engineer", // [cite: 21]
            "// AI Developer",        // [cite: 31]
            "// Web Developer"        // [cite: 37]
        ],
        links: {
            github: "https://github.com/Yashsingh1224", // [cite: 4]
            linkedin: "https://linkedin.com/in/Yash"     // [cite: 2]
        }
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-20 lg:pt-0 px-6 lg:px-20">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none dark:opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Text Content */}
            <div className="relative z-10 w-full lg:w-1/2 space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-4">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Hire
                    </span>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                        Hi, I'm {profile.name}. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Designing Intelligence.
                        </span>
                    </h1>

                    <div className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mt-4 font-mono space-y-1">
                        {profile.roles.map((role, index) => (
                            <div key={index}>{role}</div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <button className="group relative px-6 py-3 font-semibold text-white bg-primary rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex items-center gap-2">
                                View Projects <ChevronRight size={18} />
                            </span>
                        </button>

                        {/* Added Social Links from Resume */}
                        <div className="flex gap-3">
                            <a href={profile.links.github} target="_blank" rel="noopener noreferrer"
                                className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <Github size={20} className="text-gray-600 dark:text-gray-300" />
                            </a>
                            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
                                className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <Linkedin size={20} className="text-gray-600 dark:text-gray-300" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack Icons - Updated based on Technical Skills  */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-6 text-gray-400 dark:text-gray-500 pt-8"
                >
                    <div className="flex items-center gap-2">
                        <Code2 size={20} />
                        <span className="text-sm font-mono">React/Next.js</span> {/* [cite: 72] */}
                    </div>
                    <div className="flex items-center gap-2">
                        <BrainCircuit size={20} />
                        <span className="text-sm font-mono">TensorFlow/Keras</span> {/* [cite: 69] */}
                    </div>
                    <div className="flex items-center gap-2">
                        <Terminal size={20} />
                        <span className="text-sm font-mono">Python/Node.js</span> {/* [cite: 71, 72] */}
                    </div>
                </motion.div>
            </div>

            {/* 3D Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex justify-center items-center relative z-10"
            >
                <Hero3D />
            </motion.div>
        </section>
    );
};

export default Hero;