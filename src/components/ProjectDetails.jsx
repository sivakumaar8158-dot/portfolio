import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 pb-12 px-6 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
        >
            <div className="container mx-auto max-w-4xl">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
                >
                    <FaArrowLeft className="mr-2" /> Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                    >
                        {project.title}
                    </motion.h1>
                    <div className="flex flex-wrap gap-4 items-center text-sm">
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full font-medium">
                            {project.category}
                        </span>
                        <div className="flex gap-4 ml-auto">
                            {project.github && project.github !== '#' && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                                >
                                    <FaGithub size={20} /> <span className="hidden sm:inline">Source Code</span>
                                </a>
                            )}
                            {project.live && project.live !== '#' && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                                >
                                    <FaExternalLinkAlt size={18} /> <span className="hidden sm:inline">Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Image & Tech */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        <div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Built With</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.05 }}
                                        className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 font-medium shadow-sm"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Description & Details */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
                        >
                            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">About the Project</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Placeholder for more detailed content that might be added later */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-slate-900 dark:text-white">Key Features</h4>
                                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                    <li>Responsive Design by default</li>
                                    <li>Modern UI/UX principles applied</li>
                                    <li>Optimized performance and SEO</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;
