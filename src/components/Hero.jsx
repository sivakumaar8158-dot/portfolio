import { motion, AnimatePresence } from 'framer-motion';

import { userData } from '../data/user';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">

            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for Work
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        Transforming Ideas into <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
                            Digital Reality
                        </span>
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        I'm a Full Stack Developer passionate about building accessible, pixel-perfect, and performant web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all flex items-center justify-center gap-2"
                        >
                            View Projects
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:border-indigo-500 dark:hover:border-indigo-400 transition-all flex items-center justify-center"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-80 h-80 md:w-100 md:h-100 lg:w-112.5 lg:h-112.5">

                        <div className="absolute inset-0 rounded-full border border-indigo-200 dark:border-indigo-800 animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border border-purple-200 dark:border-purple-800 animate-[spin_15s_linear_infinite_reverse]"></div>


                        <div className="absolute inset-8 overflow-hidden rounded-4xl md:rounded-[3rem] bg-linear-to-br from-indigo-500 to-purple-600 shadow-2xl transition-all duration-500 group">
                            <img
                                src={userData.images.profile}
                                alt={userData.name}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                        </div>


                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700 backdrop-blur-md z-20 flex items-center gap-3 animate-float"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Status</p>
                                <p className="text-sm font-bold text-slate-800 dark:text-white">Fresher</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -top-4 -right-4 md:top-8 md:-right-8 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700 backdrop-blur-md z-20 hidden md:flex items-center gap-2 animate-float-delayed"
                        >
                            <span className="text-2xl">🚀</span>
                            <span className="text-sm font-bold text-slate-800 dark:text-white">Open to Work</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 dark:text-slate-500"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-current rounded-full animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
