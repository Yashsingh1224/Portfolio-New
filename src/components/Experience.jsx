import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../constants';

const TimelineCard = ({ exp, index, total, progress }) => {
    // --- LOGIC FIX FOR LAST CARD ---
    // Standard spacing is 0 to 1.
    // BUT, if it is the last card, we force the target to 0.9 (90%).
    // This ensures it lights up BEFORE the scroll hits the absolute limit.
    let position = index / (total - 1);
    if (index === total - 1) {
        position = 0.90;
    }

    // Define the glow zone
    // Start glowing slightly before the dot arrives (position - 0.05)
    // Fully glow exactly when the dot arrives (position)
    const start = Math.max(0, position - 0.05);
    const end = position;

    // --- TRANSFORMS ---
    const grayscale = useTransform(progress, [start, end], ["100%", "0%"]);
    const opacity = useTransform(progress, [start, end], [0.5, 1]);

    const borderColor = useTransform(
        progress,
        [start, end],
        ["rgba(255, 255, 255, 0)", "rgba(59, 130, 246, 1)"]
    );

    const boxShadow = useTransform(
        progress,
        [start, end],
        ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 10px 30px -10px rgba(59, 130, 246, 0.5)"]
    );

    const iconBg = useTransform(
        progress,
        [start, end],
        ["#374151", "#3b82f6"]
    );

    const iconScale = useTransform(progress, [start, end], [0.8, 1.2]);

    return (
        <div className={`relative flex items-center justify-between md:justify-normal mb-24 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>

            {/* 1. THE REACTIVE DOT */}
            <motion.div
                style={{ backgroundColor: iconBg, scale: iconScale }}
                className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-dark-bg transform -translate-x-1/2 z-20 shadow-md flex items-center justify-center"
            >
                {/* Inner Glow Aura */}
                <motion.div
                    style={{ opacity: useTransform(progress, [start, end], [0, 1]) }}
                    className="absolute w-8 h-8 rounded-full bg-blue-500/50 blur-md"
                />
            </motion.div>

            {/* Spacer */}
            <div className="hidden md:block w-5/12" />

            {/* 2. THE CARD */}
            <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <motion.div
                    style={{
                        filter: useTransform(grayscale, val => `grayscale(${val})`),
                        opacity: opacity,
                        borderColor: borderColor,
                        boxShadow: boxShadow,
                        borderWidth: '1px'
                    }}
                    className="p-6 bg-white dark:bg-dark-card rounded-xl relative overflow-hidden transition-colors duration-200"
                >
                    {/* Connector Line */}
                    <div className={`absolute top-1/2 w-8 h-[2px] bg-gray-200 dark:bg-gray-800 ${index % 2 === 0 ? '-left-8' : '-right-8 hidden md:block'
                        } hidden md:block`} />

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <Briefcase size={16} className="text-primary" />
                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                {exp.year}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                            {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Start tracking when the top of the section is in the middle
        // End tracking when the bottom of the section is at the bottom of the screen
        offset: ["start center", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-20 px-6 lg:px-20 bg-white dark:bg-dark-bg relative overflow-hidden">

            <div className="mb-24 text-center relative z-10">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Career <span className="text-primary">Timeline</span>
                </h2>
                <div className="mt-2 text-gray-500 text-sm font-mono">
          // executing_trace_route...
                </div>
            </div>

            <div ref={containerRef} className="relative max-w-5xl mx-auto min-h-[800px] pb-24">

                {/* === THE LASER LINE SYSTEM === */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-border transform -translate-x-1/2" />

                <motion.div
                    style={{ scaleY: smoothProgress }}
                    className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-blue-600 origin-top transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                >
                    {/* The Laser Tip */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
                        <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
                        <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-50" />
                    </div>
                </motion.div>

                {/* === EXPERIENCE CARDS === */}
                <div className="relative z-10">
                    {experiences.map((exp, index) => (
                        <TimelineCard
                            key={index}
                            exp={exp}
                            index={index}
                            total={experiences.length}
                            progress={smoothProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;