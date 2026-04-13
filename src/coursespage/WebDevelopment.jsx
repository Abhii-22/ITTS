import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Monitor, Globe, Zap, Users, Award, TrendingUp, Briefcase, Clock, CheckCircle, Star, Target, BookOpen, Rocket, Shield, Database, Palette, Terminal, Smartphone } from 'lucide-react';

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
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80"
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
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
                                Enroll Now
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
                                View Curriculum
                            </button>
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

            {/* Benefits Section */}
            <ScrollSection className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Learn Web Development?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Discover the numerous advantages of becoming a web developer in today's digital world
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">High Demand</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Web developers are among the most sought-after professionals with endless job opportunities across industries
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Flexible Work</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Enjoy the freedom of remote work, freelance opportunities, and flexible working arrangements
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Lucrative Salaries</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Command competitive salaries with excellent growth potential as you gain experience
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Constant Innovation</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Work with cutting-edge technologies and be at the forefront of digital innovation
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Create applications that reach millions of users worldwide and make a real difference
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Creative Expression</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Combine technical skills with creativity to bring innovative ideas to life
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Modern Uses Section */}
            <ScrollSection className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Modern Applications
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            See how web development powers today's digital landscape
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInLeft}>
                            <motion.div className="space-y-6" variants={staggerContainer}>
                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <motion.div 
                                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                                        }}
                                    >
                                        <Monitor className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Progressive Web Apps</h3>
                                        <p className="text-gray-400">
                                            Build app-like experiences that work offline, load instantly, and engage users with push notifications
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <motion.div 
                                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                                        }}
                                    >
                                        <Globe className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">E-Commerce Platforms</h3>
                                        <p className="text-gray-400">
                                            Create powerful online stores with secure payment processing, inventory management, and customer analytics
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <motion.div 
                                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                                        }}
                                    >
                                        <Users className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Social Networks</h3>
                                        <p className="text-gray-400">
                                            Develop engaging social platforms with real-time messaging, content sharing, and community features
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <motion.div 
                                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                                        }}
                                    >
                                        <Zap className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">SaaS Solutions</h3>
                                        <p className="text-gray-400">
                                            Build scalable software-as-a-service applications with subscription billing and multi-tenant architecture
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="relative" variants={fadeInRight}>
                            <motion.div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                                <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer}>
                                    <motion.div className="bg-gray-900/50 p-4 rounded-lg text-center" variants={scaleIn}>
                                        <div className="text-3xl font-bold text-white mb-1">5.2B</div>
                                        <div className="text-sm text-gray-400">Internet Users</div>
                                    </motion.div>
                                    <motion.div className="bg-gray-900/50 p-4 rounded-lg text-center" variants={scaleIn}>
                                        <div className="text-3xl font-bold text-white mb-1">1.8B</div>
                                        <div className="text-sm text-gray-400">Websites</div>
                                    </motion.div>
                                    <motion.div className="bg-gray-900/50 p-4 rounded-lg text-center" variants={scaleIn}>
                                        <div className="text-3xl font-bold text-white mb-1">$7T</div>
                                        <div className="text-sm text-gray-400">E-Commerce Market</div>
                                    </motion.div>
                                    <motion.div className="bg-gray-900/50 p-4 rounded-lg text-center" variants={scaleIn}>
                                        <div className="text-3xl font-bold text-white mb-1">27M</div>
                                        <div className="text-sm text-gray-400">Developers</div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* How It Helps Section */}
            <ScrollSection className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            How This Course Helps You
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Transform your career with comprehensive web development training
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        <motion.div className="text-center" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Code className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-4">Build Real Projects</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Create portfolio-worthy projects including e-commerce sites, social media platforms, and business applications
                            </p>
                        </motion.div>

                        <motion.div className="text-center" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Award className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-4">Get Certified</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Earn industry-recognized certificates that validate your skills and boost your employability
                            </p>
                        </motion.div>

                        <motion.div className="text-center" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Briefcase className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-4">Land Your Dream Job</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Access our job placement program and connect with top tech companies looking for skilled developers
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div className="mt-16 text-center" variants={scaleIn}>
                        <motion.button 
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Journey Today
                        </motion.button>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Course Curriculum Section */}
            <ScrollSection className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Comprehensive Curriculum
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Master web development through our structured learning path designed by industry experts
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        variants={staggerContainer}
                    >
                        {/* Frontend Track */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={fadeInLeft}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                    <Palette className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 1: HTML5 & Semantic Markup</h4>
                                    <p className="text-gray-400 mb-3">Learn modern HTML5 features, semantic elements, accessibility standards, and SEO best practices for creating well-structured web pages.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Semantic HTML</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Accessibility</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">SEO</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 2: Advanced CSS3 & Responsive Design</h4>
                                    <p className="text-gray-400 mb-3">Master CSS3 animations, Flexbox, Grid, custom properties, and create responsive designs that work perfectly across all devices and screen sizes.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Flexbox & Grid</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Animations</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Responsive Design</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 3: JavaScript ES6+ & DOM Manipulation</h4>
                                    <p className="text-gray-400 mb-3">Dive deep into modern JavaScript, async programming, DOM manipulation, event handling, and build interactive web applications.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">ES6+ Features</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Async/Await</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">DOM API</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 4: React.js & Modern Frameworks</h4>
                                    <p className="text-gray-400 mb-3">Learn React.js, component-based architecture, state management, hooks, and build scalable single-page applications.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">React Hooks</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">State Management</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">SPA Development</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Backend Track */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={fadeInRight}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                    <Database className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Backend Development</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 1: Node.js & Express.js</h4>
                                    <p className="text-gray-400 mb-3">Build robust server-side applications with Node.js, create RESTful APIs, handle authentication, and manage server-side routing.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">REST APIs</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Express.js</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Authentication</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 2: Database Management</h4>
                                    <p className="text-gray-400 mb-3">Master SQL and NoSQL databases, design efficient schemas, implement data relationships, and optimize database performance.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">MongoDB</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">PostgreSQL</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Redis</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 3: API Development & Integration</h4>
                                    <p className="text-gray-400 mb-3">Design and implement RESTful and GraphQL APIs, handle third-party integrations, and ensure API security and performance.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">GraphQL</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">API Security</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Webhooks</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 4: Cloud Deployment & DevOps</h4>
                                    <p className="text-gray-400 mb-3">Deploy applications to cloud platforms, implement CI/CD pipelines, manage containers with Docker, and monitor application performance.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">AWS/Azure</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Docker</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">CI/CD</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Learning Methodology Section */}
            <ScrollSection className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Our Learning Methodology
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Experience a revolutionary approach to learning web development through our proven methodology
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                    >
                        <motion.div className="text-center group" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Target className="w-10 h-10 text-blue-400" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-3">Project-Based Learning</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Build 20+ real-world projects including e-commerce platforms, social networks, and enterprise applications that showcase your skills to employers.
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Users className="w-10 h-10 text-green-400" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-3">Mentor-Led Training</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Get personalized guidance from industry experts with 10+ years of experience through 1-on-1 sessions, code reviews, and career coaching.
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Terminal className="w-10 h-10 text-purple-400" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-3">Hands-On Coding</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Spend 80% of your time writing actual code in our cloud-based IDE with instant feedback, automated testing, and collaborative coding environments.
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Rocket className="w-10 h-10 text-orange-400" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-3">Career Acceleration</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Access our exclusive job network, participate in hackathons, attend tech talks, and get guaranteed interview opportunities with top companies.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Tools & Technologies Section */}
            <ScrollSection className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Master Industry-Standard Tools
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Learn the exact technologies and tools used by top tech companies worldwide
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {/* Frontend Tools */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Smartphone className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Frontend Stack</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['HTML5/CSS3', 'JavaScript ES6+', 'React.js', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-gray-300">{tool}</span>
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Backend Stack</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-gray-300">{tool}</span>
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">DevOps & Tools</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Git & GitHub', 'Docker', 'AWS', 'Vercel/Netlify', 'Jest/Cypress', 'Webpack/Vite'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-gray-300">{tool}</span>
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            
            {/* Final CTA Section */}
            <ScrollSection className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Start Your Web Development Journey?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Join thousands of successful developers who started their careers with our comprehensive web development course. Your future in tech starts here!
                        </p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
                            <motion.button 
                                variants={scaleIn} 
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Enroll Now - Save 20%
                            </motion.button>
                            <motion.button 
                                variants={scaleIn} 
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Syllabus
                            </motion.button>
                        </motion.div>
                        <motion.div className="mt-8 flex items-center justify-center gap-6 text-gray-400" variants={staggerContainer}>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <Clock className="w-5 h-5 text-white" />
                                <span>Limited Time Offer</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <Users className="w-5 h-5 text-white" />
                                <span>5000+ Students Enrolled</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <Award className="w-5 h-5 text-white" />
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
