import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <a href="#home" className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-600">
                        Portfolio.
                    </a>

                    <ul className="flex flex-wrap justify-center gap-8 text-slate-500 dark:text-slate-400 font-medium">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-4">
                        <a href="https://github.com/sivakumaar8158-dot" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/siva-kumar-b1a20a2aa/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="mailto:sivakumaar8158@gmail.com" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                    </div>

                    <p className="text-sm text-slate-400 dark:text-slate-600 mt-8">
                        © {new Date().getFullYear()} Your Name. Built with React, Tailwind CSS & Framer Motion.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
