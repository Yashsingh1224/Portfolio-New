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

            {/* Container: Vertical stack on mobile, Horizontal row on desktop */}
            <div className="flex flex-col lg:flex-row gap-4 lg:h-[500px]">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        layout
                        onClick={() => setActiveId(service.id)}
                        // Hover logic only for desktop to prevent weird mobile behavior
                        onHoverStart={() => window.innerWidth >= 1024 && setActiveId(service.id)}
                        className={`
                            relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-gray-200 dark:border-dark-border
                            /* Mobile Styling: Active gets auto height, Inactive gets fixed small height */
                            ${activeId === service.id
                                ? 'h-auto lg:h-auto lg:flex-[3] bg-gray-900 dark:bg-dark-card shadow-2xl'
                                : 'h-[80px] lg:h-auto lg:flex-[1] bg-gray-100 dark:bg-[#111] hover:bg-gray-200 dark:hover:bg-[#1a1a1a]'
                            }
                        `}
                    >
                        {/* Background Gradient for Active Card */}
                        {activeId === service.id && (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                        )}

                        <div className="h-full p-6 lg:p-8 flex flex-col justify-between relative z-10">

                            {/* Header Section */}
                            <div className="flex justify-between items-start w-full">
                                <div className="flex items-center gap-4 lg:block">
                                    <span className={`text-xl font-mono font-bold ${activeId === service.id ? 'text-primary' : 'text-gray-400'}`}>
                                        {service.id}
                                    </span>

                                    {/* Mobile: Show Title next to ID when collapsed */}
                                    {activeId !== service.id && (
                                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 lg:hidden">
                                            {service.title}
                                        </h3>
                                    )}
                                </div>
                                <ArrowUpRight className={`${activeId === service.id ? 'text-white' : 'text-gray-500'} transition-colors`} />
                            </div>

                            {/* Desktop: Vertical Text for Collapsed Cards */}
                            <div className="hidden lg:block lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-max pointer-events-none">
                                {activeId !== service.id && (
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-xl font-bold text-gray-500 lg:-rotate-90 whitespace-nowrap"
                                    >
                                        {service.title}
                                    </motion.h3>
                                )}
                            </div>

                            {/* Expanded Content */}
                            {activeId === service.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-6 lg:mt-0"
                                >
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base max-w-md">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                                <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
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