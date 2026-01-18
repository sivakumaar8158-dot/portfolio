import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiNextdotjs } from 'react-icons/si';
import profileimg from '../assets/Gemini_Generated_Image_oetcu8oetcu8oetc (1).png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-24 pb-12 px-4">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[180px]">

                {/* 1. Main Intro - Spans 2 cols, 2 rows */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-2 md:row-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-500/20"></div>

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            AVAILABLE FOR WORK
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                            Crafting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Magic</span>
                        </h1>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg mt-4 max-w-sm">
                        I'm Sivakumar, a backend wizard turning caffeine into smooth, interactive web experiences.
                    </p>
                </motion.div>

                {/* 2. Avatar Card - 2 cols, 2 rows (Square-ish) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="col-span-1 md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl relative overflow-hidden flex items-center justify-center min-h-[300px]"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <motion.img
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        src={profileimg}
                        alt="Profile"
                        className="w-100 h-100 object-contain relative z-10 drop-shadow-2xl"
                    />
                </motion.div>

                {/* 3. Tech Stack - 2 cols, 1 row */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-1 md:col-span-2 bg-gray-900 dark:bg-white rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden"
                >
                    <div className="flex justify-between items-center gap-4 text-gray-400 dark:text-gray-600">
                        <FaReact size={40} className="text-blue-400 dark:text-gray-800 animate-spin-slow" />
                        <SiNextdotjs size={40} className="text-white dark:text-black" />
                        <SiTailwindcss size={40} className="text-cyan-400 dark:text-cyan-600" />
                        <SiJavascript size={40} className="text-yellow-400 dark:text-yellow-500" />
                        <FaNodeJs size={40} className="text-green-500 dark:text-green-600" />
                    </div>
                </motion.div>

                {/* 4. Social & Contact - 1 col, 1 row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1 bg-white dark:bg-gray-800 rounded-3xl p-6 flex items-center justify-center gap-4 border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-colors cursor-pointer group"
                >
                    <a href="https://github.com/sivakumaar8158-dot" className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-all"><FaGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/siva-kumar-b1a20a2aa" className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-all"><FaLinkedin size={24} /></a>
                    <a href="https://twitter.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-all"><FaTwitter size={24} /></a>
                </motion.div>

                {/* 5. CTA - 1 col, 1 row */}
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="col-span-1 bg-yellow-400 hover:bg-yellow-300 rounded-3xl p-6 flex flex-col items-center justify-center text-gray-900 font-bold text-xl transition-colors no-underline cursor-pointer group"
                >
                    <span>Let's Talk</span>
                    <span className="text-3xl group-hover:-rotate-45 transition-transform duration-300">↗</span>
                </motion.a>

            </div>
        </section>
    );
};

export default Hero;
