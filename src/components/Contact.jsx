import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form handling logic here
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
            <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-bold tracking-wider uppercase mb-4">
                        Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <Row className="justify-center">
                    <Col lg={11} xl={10}>
                        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
                            <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 p-10 md:p-12 text-white md:w-2/5 flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                                    <p className="text-blue-100 mb-10 text-lg leading-relaxed">Fill up the form and I will get back to you within 24 hours.</p>

                                    <div className="flex flex-col gap-8">
                                        <div className="flex items-start gap-4 group cursor-pointer">
                                            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                                                <FaPhone className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-blue-200 mb-1 font-medium">Phone</p>
                                                <span className="text-lg font-semibold">+91 6383263789</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 group cursor-pointer">
                                            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                                                <FaEnvelope className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-blue-200 mb-1 font-medium">Email</p>
                                                <span className="text-lg font-semibold">sivakumaar8158@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 group cursor-pointer">
                                            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                                                <FaMapMarkerAlt className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-blue-200 mb-1 font-medium">Location</p>
                                                <span className="text-lg font-semibold">Kanchipuram, Tamil Nadu</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 md:mt-0 relative z-10">
                                    <div className="flex gap-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all cursor-pointer hover:scale-110 flex items-center justify-center">
                                                {/* Social Icons would go here */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 md:p-12 md:w-3/5 bg-white dark:bg-gray-800">
                                <Form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
                                    <Row className="mb-6">
                                        <Col md={6} className="mb-6 md:mb-0">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Name</label>
                                                <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Sivakumar" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Email</label>
                                                <input type="email" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="sivakumaar8158@gmail.com" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="flex flex-col gap-2 mb-6">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Subject</label>
                                        <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Project Discussion" />
                                    </div>
                                    <div className="flex flex-col gap-2 mb-8">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Message</label>
                                        <textarea rows="4" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none" placeholder="Your message..."></textarea>
                                    </div>

                                    <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all transform active:scale-95">
                                        Send Message
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
