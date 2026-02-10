import { motion } from 'framer-motion';

import { userData } from '../data/user';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
                        >
                            Let's Work <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">
                                Together.
                            </span>
                        </motion.h2>

                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            I'm currently available for freelance projects and full-time opportunities.
                        </p>

                        <div className="space-y-6 pt-8">
                            <a href="mailto:sivakumaar8158@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="block text-sm font-medium text-slate-500 dark:text-slate-500">Email Me</span>
                                    <span className="text-lg font-semibold text-slate-900 dark:text-white">sivakumaar8158@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+91 6383263789" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="block text-sm font-medium text-slate-500 dark:text-slate-500">Call Me</span>
                                    <span className="text-lg font-semibold text-slate-900 dark:text-white">+91 6383263789</span>
                                </div>
                            </a>

                            <div className="flex gap-4 pt-4">
                                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                                    <a
                                        key={social}
                                        href={userData.socials[social.toLowerCase()] || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all transform hover:-translate-y-1"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-shadow" placeholder="Sivakumar" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-shadow" placeholder="sivakumaar8158@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-shadow" placeholder="+91 6383263789" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-shadow resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:scale-[1.02] transition-all">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
