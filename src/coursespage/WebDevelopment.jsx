import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Monitor, Globe, Zap, Users, Award, TrendingUp, Briefcase, Clock, CheckCircle, Star, Target, BookOpen, Rocket, Shield, Database, Palette, Terminal, Smartphone } from 'lucide-react';
import webDevelopmentImage from '../assets/images/webdeelopment.jpeg';

const WebDevelopment = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut",
                whileInView: { opacity: 1 }
            } 
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut",
                whileInView: { opacity: 1 }
            } 
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut",
                whileInView: { opacity: 1 }
            } 
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut",
                whileInView: { opacity: 1 }
            } 
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    // Scroll-triggered section component
    const ScrollSection = ({ children, variants = fadeInUp, className = "" }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false, margin: "-100px" });

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                className={className}
            >
                {children}
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden overflow-y-hidden pt-20 md:pt-17">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={webDevelopmentImage}
                        alt="Web Development Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="text-left px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className={`mb-6 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <Code className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                        </div>
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Web Development
                        </h1>
                        <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Master the art of building modern, responsive web applications with cutting-edge technologies and industry best practices
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <a 
                                href="https://register.medinitechnologies.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-gray-500/50 transform hover:scale-105 cursor-pointer inline-block"
                            >
                                Enroll Now
                            </a>
                                                    </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Course Curriculum Section - Moved up */}
            <ScrollSection className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Comprehensive Web Development Curriculum
                        </h2>
                        <p className="text-lg text-black max-w-2xl mx-auto">
                            Master web development through our structured learning path designed by industry experts
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        variants={staggerContainer}
                    >
                        {/* Frontend Track */}
                        <motion.div 
                            className="bg-gray-50/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={fadeInLeft}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                            whileInView={{ 
                                y: 0, 
                                opacity: 1 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                    <Palette className="w-6 h-6 text-gray-900" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Frontend Development</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">HTML5 & Semantic Markup</h4>
                                    <p className="text-black mb-3">Learn modern HTML5 features, semantic elements, accessibility standards, and SEO best practices for creating well-structured web pages.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Semantic HTML</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Accessibility</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">SEO</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced CSS3 & Responsive Design</h4>
                                    <p className="text-black mb-3">Master CSS3 animations, Flexbox, Grid, custom properties, and create responsive designs that work perfectly across all devices and screen sizes.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Flexbox & Grid</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Animations</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Responsive Design</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">JavaScript ES6+ & DOM Manipulation</h4>
                                    <p className="text-black mb-3">Dive deep into modern JavaScript, async programming, DOM manipulation, event handling, and build interactive web applications.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">ES6+ Features</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Async/Await</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">DOM API</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">React.js & Modern Frameworks</h4>
                                    <p className="text-black mb-3">Learn React.js, component-based architecture, state management, hooks, and build scalable single-page applications.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">React Hooks</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">State Management</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">SPA Development</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Backend Track */}
                        <motion.div 
                            className="bg-gray-50/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={fadeInRight}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                            whileInView={{ 
                                y: 0, 
                                opacity: 1 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                    <Database className="w-6 h-6 text-gray-900" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Backend Development</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Node.js & Express.js</h4>
                                    <p className="text-black mb-3">Build robust server-side applications with Node.js, create RESTful APIs, handle authentication, and manage server-side routing.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">REST APIs</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Express.js</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Authentication</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Database Management</h4>
                                    <p className="text-black mb-3">Master SQL and NoSQL databases, design efficient schemas, implement data relationships, and optimize database performance.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">MongoDB</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">PostgreSQL</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Redis</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">API Development & Integration</h4>
                                    <p className="text-black mb-3">Design and implement RESTful and GraphQL APIs, handle third-party integrations, and ensure API security and performance.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">GraphQL</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">API Security</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Webhooks</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Cloud Deployment & DevOps</h4>
                                    <p className="text-black mb-3">Deploy applications to cloud platforms, implement CI/CD pipelines, manage containers with Docker, and monitor application performance.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">AWS/Azure</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Docker</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">CI/CD</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Benefits Section - Grid Layout */}
            <ScrollSection className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInLeft}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Why Learn Web Development?
                            </h2>
                            <p className="text-lg text-black mb-8">
                                Discover the numerous advantages of becoming a web developer in today's digital world
                            </p>
                            
                            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={staggerContainer}>
                                <motion.div 
                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300" 
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileInView={{ 
                                        opacity: 1,
                                        x: 0
                                    }}
                                >
                                    <motion.div 
                                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(147, 51, 234, 0.3)"
                                        }}
                                    >
                                        <TrendingUp className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">High Demand</h3>
                                        <p className="text-black text-sm">Web developers are among the most sought-after professionals</p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300" 
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileInView={{ 
                                        opacity: 1,
                                        x: 0
                                    }}
                                >
                                    <motion.div 
                                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(147, 51, 234, 0.3)"
                                        }}
                                    >
                                        <Briefcase className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Work</h3>
                                        <p className="text-black text-sm">Enjoy remote work and freelance opportunities</p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300" 
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileInView={{ 
                                        opacity: 1,
                                        x: 0
                                    }}
                                >
                                    <motion.div 
                                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(147, 51, 234, 0.3)"
                                        }}
                                    >
                                        <Award className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Lucrative Salaries</h3>
                                        <p className="text-black text-sm">Command competitive salaries with growth potential</p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300" 
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileInView={{ 
                                        opacity: 1,
                                        x: 0
                                    }}
                                >
                                    <motion.div 
                                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(147, 51, 234, 0.3)"
                                        }}
                                    >
                                        <Zap className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Constant Innovation</h3>
                                        <p className="text-black text-sm">Work with cutting-edge technologies</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="bg-gray-50/50 p-8 rounded-xl border border-gray-700" variants={fadeInRight}>
                            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer}>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">5.2B</div>
                                    <div className="text-sm text-black">Internet Users</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">1.8B</div>
                                    <div className="text-sm text-black">Websites</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">$7T</div>
                                    <div className="text-sm text-black">E-Commerce Market</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">27M</div>
                                    <div className="text-sm text-black">Developers</div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Tools & Technologies Section - Moved up */}
            <ScrollSection className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Master Industry-Standard Tools
                        </h2>
                        <p className="text-lg text-black max-w-2xl mx-auto">
                            Learn the exact technologies and tools used by top tech companies worldwide
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {/* Frontend Tools */}
                        <motion.div 
                            className="bg-gray-50/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Smartphone className="w-8 h-8 text-gray-900" />
                                <h3 className="text-2xl font-bold text-gray-900">Frontend Stack</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['HTML5/CSS3', 'JavaScript ES6+', 'React.js', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-black">{tool}</span>
                                        <CheckCircle className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Backend Tools */}
                        <motion.div 
                            className="bg-gray-50/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="w-8 h-8 text-gray-900" />
                                <h3 className="text-2xl font-bold text-gray-900">Backend Stack</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-black">{tool}</span>
                                        <CheckCircle className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* DevOps Tools */}
                        <motion.div 
                            className="bg-gray-50/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="w-8 h-8 text-gray-900" />
                                <h3 className="text-2xl font-bold text-gray-900">DevOps & Tools</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Git & GitHub', 'Docker', 'AWS', 'Vercel/Netlify', 'Jest/Cypress', 'Webpack/Vite'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-black">{tool}</span>
                                        <CheckCircle className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Applications & Career Impact - Combined Section */}
            <ScrollSection className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                        variants={staggerContainer}
                    >
                        {/* Applications */}
                        <motion.div variants={fadeInLeft}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                Real-World Web Applications
                            </h2>
                            <motion.div className="space-y-6" variants={staggerContainer}>
                                <motion.div className="bg-gray-50/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Monitor className="w-6 h-6 text-gray-900" />
                                        <h3 className="text-xl font-bold text-gray-900">Progressive Web Apps</h3>
                                    </div>
                                    <p className="text-black">
                                        Build app-like experiences that work offline, load instantly, and engage users with push notifications
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Globe className="w-6 h-6 text-gray-900" />
                                        <h3 className="text-xl font-bold text-gray-900">E-Commerce Platforms</h3>
                                    </div>
                                    <p className="text-black">
                                        Create powerful online stores with secure payment processing, inventory management, and customer analytics
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Users className="w-6 h-6 text-gray-900" />
                                        <h3 className="text-xl font-bold text-gray-900">Social Networks</h3>
                                    </div>
                                    <p className="text-black">
                                        Develop engaging social platforms with real-time messaging, content sharing, and community features
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Zap className="w-6 h-6 text-gray-900" />
                                        <h3 className="text-xl font-bold text-gray-900">SaaS Solutions</h3>
                                    </div>
                                    <p className="text-black">
                                        Build scalable software-as-a-service applications with subscription billing and multi-tenant architecture
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Career Impact */}
                        <motion.div variants={fadeInRight}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                Career Transformation
                            </h2>
                            <motion.div className="space-y-6" variants={staggerContainer}>
                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Code className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Build Real Projects</h3>
                                        <p className="text-black">
                                            Create portfolio-worthy projects including e-commerce sites, social media platforms, and business applications
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Award className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Get Certified</h3>
                                        <p className="text-black">
                                            Earn industry-recognized certificates that validate your skills and boost your employability
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Briefcase className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Land Your Dream Job</h3>
                                        <p className="text-black">
                                            Access our job placement program and connect with top tech companies looking for skilled developers
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="mt-8" variants={scaleIn}>
                                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-gray-500/50 transform hover:scale-105 w-full">
                                        Start Your Web Development Journey
                                    </button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Learning Methodology Section */}
            <ScrollSection className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Web Development Learning Approach
                        </h2>
                        <p className="text-lg text-black max-w-2xl mx-auto">
                            Experience a revolutionary approach to learning web development through our proven methodology
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                    >
                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Project-Based Learning</h3>
                            <p className="text-black leading-relaxed">
                                Build 20+ real-world projects including e-commerce platforms, social networks, and enterprise applications
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Mentor-Led Training</h3>
                            <p className="text-black leading-relaxed">
                                Get personalized guidance from industry experts with 10+ years of experience through 1-on-1 sessions
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Terminal className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Coding</h3>
                            <p className="text-black leading-relaxed">
                                Spend 80% of your time writing actual code in our cloud-based IDE with instant feedback and testing
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Rocket className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Career Acceleration</h3>
                            <p className="text-black leading-relaxed">
                                Access our exclusive job network, participate in hackathons, and get guaranteed interview opportunities
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            
            {/* Final CTA Section */}
            <ScrollSection className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Start Your Web Development Journey?
                        </h2>
                        <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                            Join thousands of successful developers who started their careers with our comprehensive web development course. Your future in tech starts here!
                        </p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
                            <motion.a 
                                href="https://register.medinitechnologies.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                variants={scaleIn} 
                                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-gray-500/50 transform hover:scale-105 cursor-pointer inline-block"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Enroll Now
                            </motion.a>
                        </motion.div>
                        <motion.div className="mt-8 flex items-center justify-center gap-6 text-black" variants={staggerContainer}>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <Clock className="w-5 h-5 text-gray-900" />
                                <span>Limited Time Offer</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <Users className="w-5 h-5 text-gray-900" />
                                <span>5000+ Students Enrolled</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <Award className="w-5 h-5 text-gray-900" />
                                <span>Industry Recognized</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>
        </div>
    );
};

export default WebDevelopment;
