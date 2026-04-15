import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaChartBar, FaDatabase, FaBolt, FaUsers, FaAward, FaBriefcase, FaClock, FaCheckCircle, FaStar, FaBullseye, FaBook, FaRocket, FaShieldAlt, FaMicrochip, FaChartPie, FaChartLine } from 'react-icons/fa';
import dataScienceImage from '../assets/images/datascience.jpg';

const DataScience = () => {
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
        <div className="min-h-screen overflow-x-hidden overflow-y-hidden">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={dataScienceImage}
                        alt="Data Science Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="text-left px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className={`mb-6 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <FaBrain className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                        </div>
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Data Science
                        </h1>
                        <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Master the art of extracting insights from data, building predictive models, and driving data-driven decision making with cutting-edge machine learning techniques
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
                                Enroll Now
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

            {/* Course Curriculum Section - Moved up */}
            <ScrollSection className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Comprehensive Data Science Curriculum
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Master data science through our structured learning path designed by industry experts
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        variants={staggerContainer}
                    >
                        {/* Foundation Track */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
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
                                    <FaDatabase className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Data Foundation</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Python for Data Science</h4>
                                    <p className="text-gray-400 mb-3">Master Python programming, NumPy, Pandas, and data manipulation techniques for handling large datasets efficiently.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Python</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">NumPy</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Pandas</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Statistics & Probability</h4>
                                    <p className="text-gray-400 mb-3">Learn statistical concepts, hypothesis testing, probability distributions, and apply them to real-world data problems.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Descriptive Stats</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Inferential Stats</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Hypothesis Testing</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Data Visualization</h4>
                                    <p className="text-gray-400 mb-3">Create compelling visualizations using Matplotlib, Seaborn, and Tableau to communicate insights effectively.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Matplotlib</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Seaborn</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Tableau</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">SQL & Big Data</h4>
                                    <p className="text-gray-400 mb-3">Master database queries, data warehousing, and work with big data technologies like Hadoop and Spark.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">SQL</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Hadoop</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Spark</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Advanced Track */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
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
                                    <FaBrain className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Machine Learning & AI</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Machine Learning Fundamentals</h4>
                                    <p className="text-gray-400 mb-3">Learn supervised and unsupervised learning, model evaluation, and implement algorithms from scratch.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Regression</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Classification</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Clustering</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Deep Learning & Neural Networks</h4>
                                    <p className="text-gray-400 mb-3">Build neural networks, CNNs, RNNs, and work with TensorFlow and PyTorch for advanced AI applications.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">TensorFlow</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">PyTorch</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">CNN/RNN</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Natural Language Processing</h4>
                                    <p className="text-gray-400 mb-3">Process and analyze text data, build chatbots, sentiment analysis models, and work with transformers.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">NLP</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Transformers</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">BERT</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Computer Vision & AI Ethics</h4>
                                    <p className="text-gray-400 mb-3">Build image recognition systems, understand AI ethics, bias in ML models, and responsible AI practices.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Computer Vision</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">AI Ethics</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Model Deployment</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Benefits Section - Grid Layout */}
            <ScrollSection className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInLeft}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                                Why Learn Data Science?
                            </h2>
                            <p className="text-lg text-gray-400 mb-8">
                                Discover the numerous advantages of becoming a data scientist in today's data-driven world
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
                                        <FaChartLine className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Highest Demand</h3>
                                        <p className="text-gray-400 text-sm">0% unemployment rate with premium salary packages</p>
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
                                        <FaBriefcase className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Industry Agnostic</h3>
                                        <p className="text-gray-400 text-sm">Work across any industry that generates data</p>
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
                                        <FaAward className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Elite Salaries</h3>
                                        <p className="text-gray-400 text-sm">Earn 40% more than other tech roles</p>
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
                                        <FaBolt className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Cutting-Edge Tech</h3>
                                        <p className="text-gray-400 text-sm">Work with AI, ML, and advanced technologies</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700" variants={fadeInRight}>
                            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer}>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">$180B</div>
                                    <div className="text-sm text-gray-400">Market Size</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">2.5M</div>
                                    <div className="text-sm text-gray-400">Job Openings</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">97ZB</div>
                                    <div className="text-sm text-gray-400">Data Daily</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">35%</div>
                                    <div className="text-sm text-gray-400">Annual Growth</div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Tools & Technologies Section - Moved up */}
            <ScrollSection className="py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Master Data Science Tools
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Learn the exact tools and technologies used by data scientists worldwide
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {/* Programming & Analysis */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaMicrochip className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Programming & Analysis</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Python', 'R Programming', 'SQL', 'Excel', 'Jupyter Notebooks', 'Google Colab'].map((tech, index) => (
                                    <motion.div 
                                        key={tech}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg"
                                        variants={fadeInUp}
                                    >
                                        <span className="text-gray-300">{tech}</span>
                                        <FaCheckCircle className="w-5 h-5 text-white" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Machine Learning */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaBrain className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Machine Learning</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Scikit-Learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost', 'OpenCV'].map((tech, index) => (
                                    <motion.div 
                                        key={tech}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg"
                                        variants={fadeInUp}
                                    >
                                        <span className="text-gray-300">{tech}</span>
                                        <FaCheckCircle className="w-5 h-5 text-white" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Big Data & Visualization */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaChartPie className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Big Data & Visualization</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Tableau', 'Power BI', 'Hadoop', 'Spark', 'AWS SageMaker', 'Azure ML'].map((tech, index) => (
                                    <motion.div 
                                        key={tech}
                                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg"
                                        variants={fadeInUp}
                                    >
                                        <span className="text-gray-300">{tech}</span>
                                        <FaCheckCircle className="w-5 h-5 text-white" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>

            {/* Applications & Career Impact - Combined Section */}
            <ScrollSection className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                        variants={staggerContainer}
                    >
                        {/* Applications */}
                        <motion.div variants={fadeInLeft}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                                Real-World Applications
                            </h2>
                            <motion.div className="space-y-6" variants={staggerContainer}>
                                <motion.div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaBrain className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">Predictive Analytics</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Forecast customer behavior, market trends, and business outcomes using advanced statistical models and machine learning algorithms
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaChartLine className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">Healthcare Innovation</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Develop diagnostic models, predict disease outbreaks, personalize treatments, and optimize patient care using medical data
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaChartPie className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">Financial Modeling</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Build risk assessment models, detect fraud, optimize investment strategies, and automate trading decisions
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Career Impact */}
                        <motion.div variants={fadeInRight}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                                Career Transformation
                            </h2>
                            <motion.div className="space-y-6" variants={staggerContainer}>
                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaDatabase className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Master Data Skills</h3>
                                        <p className="text-gray-400">
                                            Learn Python, SQL, statistics, and data visualization to handle any data challenge confidently
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaAward className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Build ML Expertise</h3>
                                        <p className="text-gray-400">
                                            Develop expertise in machine learning, deep learning, and AI to create predictive models
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaBriefcase className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Launch Your Career</h3>
                                        <p className="text-gray-400">
                                            Get placed at top companies with our career support, interview prep, and alumni network
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="mt-8" variants={scaleIn}>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 w-full">
                                        Start Your Data Science Journey
                                    </button>
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
                            Our Data Science Learning Approach
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Experience a revolutionary approach to learning data science through our proven methodology
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                    >
                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaBullseye className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Real-World Projects</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Work on 25+ industry projects including fraud detection, customer segmentation, and predictive maintenance systems.
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaUsers className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Expert Mentorship</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Learn from data scientists working at Google, Amazon, and Microsoft through personalized mentoring sessions.
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaChartBar className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Hands-On Practice</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Access cloud-based Jupyter notebooks, real datasets, and GPU instances for deep learning experiments.
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaRocket className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Career Excellence</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Get Kaggle competition support, portfolio building, and direct referrals to top data science companies.
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
                            Ready to Master Data Science?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Join thousands of successful data scientists who started their journey with our comprehensive program. Your data science career starts here!
                        </p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
                            <motion.button variants={scaleIn} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
                                Enroll Now - Save 25%
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
                                <span>8000+ Students Enrolled</span>
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

export default DataScience;
