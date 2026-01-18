import { FaHome, FaShapes, FaCode, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navigation = () => {
    const navItems = [
        { name: 'Home', icon: <FaHome />, href: '#home' },
        { name: 'Skills', icon: <FaShapes />, href: '#skills' },
        { name: 'Projects', icon: <FaCode />, href: '#projects' },
        { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="pointer-events-auto bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-full p-2 flex items-center gap-2"
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/10 flex items-center gap-2 group no-underline"
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span className="hidden md:block transition-all">{item.name}</span>
                    </a>
                ))}

                <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1 hidden md:block"></div>

                <a
                    href="#contact"
                    className="hidden md:flex bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform no-underline"
                >
                    Let's Talk
                </a>
            </motion.nav>
        </div>
    );
};

export default Navigation;
