import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChartBar, FaDatabase, FaBolt, FaUsers, FaAward, FaBriefcase, FaClock, FaCheckCircle, FaStar, FaBullseye, FaBook, FaRocket, FaShieldAlt, FaChartPie, FaChartLine, FaFileExcel, FaTable, FaChartArea } from 'react-icons/fa';

const DataAnalytics = () => {
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
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
                        alt="Data Analytics Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="text-left px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className={`mb-6 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <FaChartBar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                        </div>
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Data Analytics
                        </h1>
                        <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Master the art of turning raw data into actionable insights with cutting-edge analytics tools and techniques
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
                            Why Learn Data Analytics?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Discover the numerous advantages of becoming a data analytics professional in today's data-driven world
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
                                <FaChartLine className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">High Demand</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Data analysts are among the most sought-after professionals with endless job opportunities across industries
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
                                <FaBriefcase className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Career Growth</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Enjoy rapid career progression with opportunities to move into senior analytics and data science roles
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
                                <FaAward className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Lucrative Salaries</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Command competitive salaries with excellent growth potential as you gain experience and expertise
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
                                <FaBolt className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Business Impact</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Drive strategic decision-making and directly influence business outcomes through data-driven insights
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
                                <FaDatabase className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Tool Mastery</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Work with industry-leading tools like Tableau, Power BI, Python, and SQL to analyze complex datasets
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
                                <FaUsers className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Cross-Industry</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Apply your skills across healthcare, finance, retail, tech, and many other high-growth industries
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
                            Real-World Applications
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            See how data analytics powers today's business decisions
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
                                        <FaChartPie className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Business Intelligence</h3>
                                        <p className="text-gray-400">
                                            Create interactive dashboards and reports that help executives make informed strategic decisions
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
                                        <FaChartBar className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Market Analysis</h3>
                                        <p className="text-gray-400">
                                            Analyze market trends, customer behavior, and competitive landscapes to identify growth opportunities
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
                                        <FaUsers className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Customer Analytics</h3>
                                        <p className="text-gray-400">
                                            Understand customer preferences, predict churn, and optimize marketing campaigns with data insights
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
                                        <FaBolt className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Operational Efficiency</h3>
                                        <p className="text-gray-400">
                                            Optimize business processes, reduce costs, and improve productivity through data-driven insights
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="relative" variants={fadeInRight}>
                            <motion.div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                                <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer}>
                                    <motion.div className="bg-gray-900/50 p-4 rounded-lg text-center" variants={scaleIn}>
                                        <div className="text-3xl font-bold text-white mb-1">2.5Q</div>
                                        <div className="text-sm text-gray-400">Data Generated Daily</div>
                                    </motion.div>
                                    <motion.div className="bg-gray-900/50 p-4 rounded-lg text-center" variants={scaleIn}>
                                        <div className="text-3xl font-bold text-white mb-1">$73B</div>
                                        <div className="text-sm text-gray-400">Analytics Market</div>
                                    </motion.div>
                                    <motion.div className="bg-gray-900/50 p-4 rounded-lg text-center" variants={scaleIn}>
                                        <div className="text-3xl font-bold text-white mb-1">85%</div>
                                        <div className="text-sm text-gray-400">Companies Using Analytics</div>
                                    </motion.div>
                                    <motion.div className="bg-gray-900/50 p-4 rounded-lg text-center" variants={scaleIn}>
                                        <div className="text-3xl font-bold text-white mb-1">15M</div>
                                        <div className="text-sm text-gray-400">Job Opportunities</div>
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
                            Transform your career with comprehensive data analytics training
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
                                <FaChartBar className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-4">Build Real Projects</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Create portfolio-worthy projects including business dashboards, market analysis reports, and predictive models
                            </p>
                        </motion.div>

                        <motion.div className="text-center" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaAward className="w-10 h-10 text-white" />
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
                                <FaBriefcase className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-4">Land Your Dream Job</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Access our job placement program and connect with top companies looking for skilled data analysts
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
                            Master data analytics through our structured learning path designed by industry experts
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        variants={staggerContainer}
                    >
                        {/* Fundamentals Track */}
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
                                    <FaDatabase className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Analytics Fundamentals</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 1: Data Foundations</h4>
                                    <p className="text-gray-400 mb-3">Learn data types, sources, quality assessment, and the complete data lifecycle from collection to insights.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Data Types</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Data Quality</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Data Governance</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 2: Excel for Analytics</h4>
                                    <p className="text-gray-400 mb-3">Master advanced Excel functions, pivot tables, Power Query, and create sophisticated analytical models.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Advanced Formulas</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Pivot Tables</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Power Query</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 3: SQL & Database Management</h4>
                                    <p className="text-gray-400 mb-3">Learn SQL for data extraction, manipulation, and analysis across various database systems.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Query Writing</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Joins & Subqueries</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Database Design</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 4: Statistics for Analytics</h4>
                                    <p className="text-gray-400 mb-3">Master descriptive and inferential statistics, hypothesis testing, and statistical analysis techniques.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Descriptive Stats</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Hypothesis Testing</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Regression Analysis</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Advanced Tools Track */}
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
                                    <FaChartArea className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Advanced Analytics Tools</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 1: Tableau Mastery</h4>
                                    <p className="text-gray-400 mb-3">Create stunning interactive dashboards, data visualizations, and share insights with stakeholders.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Dashboard Design</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Data Visualization</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Storytelling</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 2: Power BI & DAX</h4>
                                    <p className="text-gray-400 mb-3">Build business intelligence solutions with Power BI, DAX formulas, and data modeling.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Power Query</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">DAX Functions</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Data Modeling</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 3: Python for Analytics</h4>
                                    <p className="text-gray-400 mb-3">Use Python libraries like Pandas, NumPy, and Matplotlib for advanced data analysis and visualization.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Pandas</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">NumPy</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Data Visualization</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Module 4: Business Analytics</h4>
                                    <p className="text-gray-400 mb-3">Apply analytical techniques to solve real business problems and drive strategic decision-making.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">KPI Development</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">ROI Analysis</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Business Strategy</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Tools & Technologies Section */}
            <ScrollSection className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Master Industry Tools
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Get hands-on experience with the most in-demand data analytics tools and technologies
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaFileExcel className="w-8 h-8 text-white" />
                                <h3 className="text-xl font-bold text-white">Spreadsheet Tools</h3>
                            </div>
                            <motion.div className="space-y-3" variants={staggerContainer}>
                                {['Microsoft Excel', 'Google Sheets', 'Advanced Formulas', 'Power Query'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-gray-300">{tool}</span>
                                        <FaCheckCircle className="w-5 h-5 text-white" />
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
                                <FaTable className="w-8 h-8 text-white" />
                                <h3 className="text-xl font-bold text-white">Database & SQL</h3>
                            </div>
                            <motion.div className="space-y-3" variants={staggerContainer}>
                                {['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-gray-300">{tool}</span>
                                        <FaCheckCircle className="w-5 h-5 text-white" />
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
                                <FaChartArea className="w-8 h-8 text-white" />
                                <h3 className="text-xl font-bold text-white">Visualization Tools</h3>
                            </div>
                            <motion.div className="space-y-3" variants={staggerContainer}>
                                {['Tableau', 'Power BI', 'Qlik Sense', 'Looker Studio'].map((tool, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-gray-300">{tool}</span>
                                        <FaCheckCircle className="w-5 h-5 text-white" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Career Excellence Section */}
            <ScrollSection className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Career Excellence Program
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Beyond technical skills - we prepare you for career success
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
                                <FaBook className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-4">Portfolio Development</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Build a professional portfolio with real-world projects that showcase your analytical skills to employers
                            </p>
                        </motion.div>

                        <motion.div className="text-center" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaRocket className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-4">Interview Preparation</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Master technical interviews, case studies, and analytical problem-solving with our comprehensive prep program
                            </p>
                        </motion.div>

                        <motion.div className="text-center" variants={scaleIn}>
                            <motion.div 
                                className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaShieldAlt className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-3">Career Excellence</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Get portfolio reviews, interview coaching, and direct referrals to top analytics companies
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Final CTA Section */}
            <ScrollSection className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Master Data Analytics?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Join thousands of successful data analysts who started their journey with our comprehensive program. Your analytics career starts here!
                        </p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
                            <motion.button variants={scaleIn} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
                                Enroll Now - Save 20%
                            </motion.button>
                            <motion.button variants={scaleIn} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
                                Download Syllabus
                            </motion.button>
                        </motion.div>
                        <motion.div className="mt-8 flex items-center justify-center gap-6 text-gray-400" variants={staggerContainer}>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <FaClock className="w-5 h-5 text-white" />
                                <span>Limited Time Offer</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <FaUsers className="w-5 h-5 text-white" />
                                <span>10000+ Students Enrolled</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <FaAward className="w-5 h-5 text-white" />
                                <span>Industry Recognized</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>
        </div>
    );
};

export default DataAnalytics;
