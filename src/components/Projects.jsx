import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'E-Commerce Dashboard',
        description: 'A responsive admin dashboard with data visualization and charts.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Chart.js', 'Tailwind'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Social Media App',
        description: 'Real-time social platform with messaging and notifications.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Firebase', 'Bootstrap'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website showing skills and projects.',
        image: 'https://images.unsplash.com/photo-1545665277-59374f04374f?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Framer Motion', 'Tailwind'],
        github: '#',
        demo: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
            <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>

            <Container className="relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-left mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter uppercase relative z-10">
                        Selected<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Works</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-8 md:gap-32">
                    {projects.map((project, index) => (
                        <div key={index} className="sticky top-24 md:top-32 self-start w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ margin: "-100px" }}
                                className="relative group perspective-1000"
                            >
                                <div className={`relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white dark:bg-gray-800 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* Text Content */}
                                    <div className="flex-1 w-full text-center md:text-left">
                                        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex gap-4 justify-center md:justify-start">
                                            <a href={project.github} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all">
                                                <FaGithub /> Source
                                            </a>
                                            <a href={project.demo} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                                                <FaExternalLinkAlt /> Live Demo
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image Content */}
                                    <div className="flex-1 w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 relative group/image">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover/image:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/image:opacity-100 transition-opacity"></div>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
