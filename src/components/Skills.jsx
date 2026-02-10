
import React from 'react';
import { motion } from 'framer-motion';
import { techSkills } from '../data/skills';
import { IoRocket } from 'react-icons/io5';

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5 }}
            
            style={{ '--hover-color': skill.color }}
            className="group relative flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-(--hover-color)] dark:hover:border-(--hover-color)] transition-all duration-300 shadow-sm hover:shadow-lg"
        >
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                {skill.name === 'Antigravity' ? (
                    <div className="w-12 h-12 flex items-center justify-center bg-linear-to-br from-fuchsia-600 to-purple-600 rounded-xl text-white shadow-lg transform group-hover:rotate-12 transition-transform">
                        <IoRocket size={24} />
                    </div>
                ) : (
                    <i className={`devicon-${skill.icon} colored drop-shadow-md`}></i>
                )}
            </div>

            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-(--hover-color)] transition-colors">
                {skill.name}
            </h3>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            My Technical <span className="text-indigo-600 dark:text-indigo-400">Toolkit</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            I leverage a comprehensive stack of modern technologies to build scalable, high-performance applications.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 transition-all font-medium group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download CV
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {techSkills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
