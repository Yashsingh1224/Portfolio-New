import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../constants';

const Certificates = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-dark-bg/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
                    <Award className="text-accent" /> Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.a
                            href={cert.link}
                            key={index}
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                {cert.name}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                                Issued by {cert.issuer}
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xs font-mono text-gray-400">{cert.date}</span>
                                <ExternalLink size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;