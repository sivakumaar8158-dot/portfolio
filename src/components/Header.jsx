
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-indigo-100 dark:border-indigo-900/30 shadow-lg py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
                >
                    Portfolio.
                </motion.a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <motion.a
                        whileHover={{ y: -2 }}
                        href="https://github.com/sivakumaar8158-dot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -2 }}
                        href="https://www.linkedin.com/in/siva-kumar-b1a20a2aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        <FaLinkedin size={20} />
                    </motion.a>
                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden p-2 text-slate-700 dark:text-slate-200"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-950 border-b border-indigo-100 dark:border-indigo-900/30 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <ThemeToggle />
                                <span className="text-sm text-slate-500">Switch Theme</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
