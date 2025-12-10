import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { services } from '../constants';

const Services = () => {
    const [activeId, setActiveId] = useState(services[0].id);

    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-dark-bg">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    System <span className="text-primary">Modules</span>
                </h2>
                <p className="mt-2 text-gray-500 font-mono text-sm">// available_services</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        layout
                        onClick={() => setActiveId(service.id)}
                        onHoverStart={() => setActiveId(service.id)}
                        className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-gray-200 dark:border-dark-border
              ${activeId === service.id
                                ? 'flex-[3] bg-gray-900 dark:bg-dark-card shadow-2xl'
                                : 'flex-[1] bg-gray-100 dark:bg-[#111] hover:bg-gray-200 dark:hover:bg-[#1a1a1a]'
                            }`}
                    >
                        {/* Background Gradient for Active Card */}
                        {activeId === service.id && (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                        )}

                        <div className="h-full p-8 flex flex-col justify-between relative z-10">

                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <span className={`text-xl font-mono font-bold ${activeId === service.id ? 'text-primary' : 'text-gray-400'}`}>
                                    {service.id}
                                </span>
                                <ArrowUpRight className={`${activeId === service.id ? 'text-white' : 'text-gray-500'} transition-colors`} />
                            </div>

                            {/* Title - Rotated when inactive on desktop */}
                            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-max">
                                {activeId !== service.id && (
                                    <h3 className="text-xl font-bold text-gray-500 lg:-rotate-90 whitespace-nowrap hidden lg:block">
                                        {service.title}
                                    </h3>
                                )}
                                {/* Mobile Title for inactive */}
                                {activeId !== service.id && (
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-400 mt-4 lg:hidden">
                                        {service.title}
                                    </h3>
                                )}
                            </div>

                            {/* Expanded Content */}
                            {activeId === service.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                                <CheckCircle2 size={18} className="text-primary" />
                                                <span className="text-sm font-mono">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;