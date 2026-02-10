import { motion } from 'framer-motion';
import { userData } from '../data/user';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 relative">

                <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">


                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative max-w-xs md:max-w-sm mx-auto"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group">
                            <img
                                src={userData.images.about}
                                alt="coding workspace"
                                className="w-full h-auto object-cover transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white font-medium">Coding into the late hours ☕</p>
                            </div>
                        </div>

                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-indigo-200 dark:border-indigo-800 rounded-3xl -z-10"></div>
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <h4 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm">About Me</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                                Crafting Digital <br />
                                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
                                    Experiences
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            <p>
                                I'm a passionate Full Stack Developer with a keen eye for design and a drive for writing clean, efficient code. My journey started with a simple 'Hello World' and has evolved into building complex, scalable applications.
                            </p>
                            <p>
                                I specialize in the MERN stack but I'm always exploring new technologies. I believe that great software is not just about code, but about solving real-world problems with elegance and simplicity.
                            </p>
                        </div>




                        <div className="pt-4">
                            <a href="#projects" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-2 group">
                                See My Projects
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
