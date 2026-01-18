import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact size={50} color="#61DAFB" /> },
    { name: 'JavaScript', icon: <FaJs size={50} color="#F7DF1E" /> },
    { name: 'HTML5', icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} color="#06B6D4" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={50} color="#7952B3" /> },
    { name: 'Vite', icon: <SiVite size={50} color="#646CFF" /> },
    { name: 'Git', icon: <FaGitAlt size={50} color="#F05032" /> },
];

const Skills = () => {
    // Duplicate skills to ensure seamless looping
    const marqueeSkills = [...skills, ...skills, ...skills];

    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter uppercase">
                        Tech Arsenal
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        The tools I use to craft digital realities.
                    </p>
                </motion.div>

                <div className="relative w-full overflow-hidden mask-linear-fade">
                    {/* Gradient Masks for fade effect */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>

                    <div className="flex overflow-hidden py-10">
                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {marqueeSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-colors cursor-pointer group whitespace-nowrap"
                                >
                                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {React.cloneElement(skill.icon, { size: 24, className: "filter group-hover:brightness-110" })}
                                    </div>
                                    <span className="font-bold text-gray-700 dark:text-gray-200 text-lg">{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {/* Duplicate for visual continuity if needed, but the first mapping with triple skill array usually suffices for standard widths.
                                 Actually, a better approach for infinite loop in framer motion is to map a sufficiently large array and translate -50%.
                                 The array above `[...skills, ...skills, ...skills]` combined with `x: "-50%"` and logic might need 2 sets of children seamlessly.
                                 Let's simplify: Just one wrapper moving is tricky if width isn't exact.
                                 Standard Marquee trick: 2 identical lists side by side.
                             */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
