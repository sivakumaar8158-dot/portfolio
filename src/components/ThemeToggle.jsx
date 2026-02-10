import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`relative p-3 rounded-full flex items-center justify-center transition-all ${theme === 'dark'
                    ? 'bg-linear-to-br from-indigo-500/20 to-purple-600/20 text-indigo-300 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                    : 'bg-white/90 text-yellow-500 border border-slate-200 shadow-md'
                }`}
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme === 'dark' ? 'moon' : 'sun'}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'dark' ? <HiMoon size={22} /> : <HiSun size={22} />}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggle;
