import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to work together?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto text-lg">
                        I'm currently available for freelance projects and open to full-time opportunities.
                    </p>
                    <a
                        href="mailto:contact@example.com"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:scale-105 transition-transform shadow-xl shadow-gray-200 dark:shadow-none no-underline"
                    >
                        <FaEnvelope />
                        Say Hello
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-gray-100 dark:border-gray-800">
                    <div className="text-center md:text-left">
                        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Sivakumar<span className="text-blue-600">.</span>
                        </span>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Crafting digital experiences with heart.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { icon: FaGithub, href: 'https://github.com' },
                            { icon: FaLinkedin, href: 'https://linkedin.com' },
                            { icon: FaTwitter, href: 'https://twitter.com' }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="text-center pt-8 text-sm text-gray-400 dark:text-gray-500">
                    <p className="flex items-center justify-center gap-2">
                        © {currentYear} All rights reserved. Made with <FaHeart className="text-red-500 animate-pulse" />
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
