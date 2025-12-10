import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

// --- Resume Data Extraction ---
const RESUME_PROJECTS = [
    {
        title: "Voice-First Banking App",
        description: "Accessible mobile banking application using React Native. Features voice-driven navigation and custom NLP command parsing for visually impaired users.",
        tags: ["React Native", "AssemblyAI", "NLP", "Expo"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        github: "https://github.com/Yashsingh1224/Mobile-Banking-App-Working",
        demo: null
    },
    {
        title: "Voila - AI Slide Generator",
        description: "GenAI platform converting PDFs to editable PPT slides. Uses Google Gemini for text generation and a custom GRU model for document parsing.",
        tags: ["React", "Python", "Google Gemini", "Deep Learning"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
        github: "https://github.com/Yashsingh1224/AI-PPT-Generator",
        demo: null
    },
    {
        // UPDATED IMAGE - Cybernetic/Robotic Eye for Computer Vision
        title: "Neural Image Captioner",
        description: "End-to-end GAN system utilizing DenseNet201 for visual feature extraction and LSTM for linguistically coherent caption generation.",
        tags: ["TensorFlow", "Flask", "Python", "Computer Vision"],
        image: "https://www.intoo.com/wp-content/uploads/sites/5/2025/07/AdobeStock_1030611882.jpeg",
        github: "https://github.com/Yashsingh1224/Image-caption-generator",
        demo: null
    },
    {
        title: "Smart Music Recommender",
        description: "Music streaming platform with SQL database integration. Implements content-based and collaborative filtering for personalized song suggestions.",
        tags: ["Java", "MySQL", "JavaFX", "Algorithms"],
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1470&auto=format&fit=crop",
        github: "https://github.com/Yashsingh1224/Java-Music-Player",
        demo: null
    }
];

const ProjectCard = ({ project, index }) => {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-96 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border overflow-hidden cursor-pointer group perspective-1000"
        >
            {/* Image Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
            >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
            </div>

            {/* Content Overlay */}
            <div
                className="absolute inset-0 p-6 flex flex-col justify-end translate-z-20"
                style={{ transform: "translateZ(20px)" }}
            >
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono bg-primary/20 text-blue-200 border border-primary/30 px-2 py-1 rounded backdrop-blur-md">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Buttons - Conditional Rendering based on Resume Data */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 transition-colors"
                            title="View Code"
                        >
                            <Github size={20} />
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-primary hover:bg-primary/80 text-white backdrop-blur-sm border border-primary/50 transition-colors"
                            title="Live Demo"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-black">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Projects</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
                <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl">
                    A selection of my work in <span className="font-mono text-primary">Full Stack Development</span> and <span className="font-mono text-primary">Artificial Intelligence</span>.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 perspective-2000 max-w-6xl mx-auto">
                {RESUME_PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            {/* Call to Action for more */}
            <div className="mt-12 text-center">
                <a
                    href="https://github.com/Yashsingh1224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                    View more on GitHub <ArrowUpRight size={18} />
                </a>
            </div>
        </section>
    );
};

export default Projects;