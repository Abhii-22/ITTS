import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaChartBar, FaDatabase, FaBolt, FaUsers, FaAward, FaBriefcase, FaClock, FaCheckCircle, FaStar, FaBullseye, FaBook, FaRocket, FaShieldAlt, FaMicrochip, FaChartPie, FaChartLine } from 'react-icons/fa';
import aiandmlImage from '../assets/images/aiandml.jpg';

const AIandML = () => {
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
                        src={aiandmlImage}
                        alt="AI & ML Background"
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
                            AI & Machine Learning
                        </h1>
                        <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Master artificial intelligence and machine learning to build intelligent systems, create neural networks, and develop cutting-edge AI applications that transform industries
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
                            Comprehensive AI & ML Curriculum
                        </h2>
                        <p className="text-lg text-black max-w-2xl mx-auto">
                            Master artificial intelligence through our structured learning path designed by industry experts
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        variants={staggerContainer}
                    >
                        {/* Foundation Track */}
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
                                    <FaDatabase className="w-6 h-6 text-gray-900" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">AI Foundation</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Python for AI</h4>
                                    <p className="text-black mb-3">Master Python programming, NumPy, Pandas, and essential libraries for AI development.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Python</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">NumPy</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Pandas</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Mathematics for ML</h4>
                                    <p className="text-black mb-3">Learn linear algebra, calculus, probability, and statistics essential for machine learning.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Linear Algebra</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Calculus</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Probability</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Preprocessing</h4>
                                    <p className="text-black mb-3">Master data cleaning, feature engineering, and preparation techniques for ML models.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Data Cleaning</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Feature Engineering</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Normalization</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">ML Fundamentals</h4>
                                    <p className="text-black mb-3">Understand core ML concepts, supervised vs unsupervised learning, and model evaluation.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Supervised Learning</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Unsupervised Learning</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Model Evaluation</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Advanced Track */}
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
                                    <FaBrain className="w-6 h-6 text-gray-900" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Deep Learning & AI</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Neural Networks</h4>
                                    <p className="text-black mb-3">Build and train neural networks, understand backpropagation, and implement deep learning architectures.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Backpropagation</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Activation Functions</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Optimization</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Computer Vision</h4>
                                    <p className="text-black mb-3">Master CNNs, image recognition, object detection, and advanced computer vision techniques.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">CNNs</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Object Detection</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Image Recognition</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural Language Processing</h4>
                                    <p className="text-black mb-3">Process and understand human language, build chatbots, and work with transformers.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">NLP</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Transformers</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">BERT</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-white/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced AI Applications</h4>
                                    <p className="text-black mb-3">Explore reinforcement learning, GANs, transfer learning, and cutting-edge AI research.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Reinforcement Learning</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">GANs</span>
                                        <span className="px-3 py-1 bg-white/10 text-gray-900 rounded-full text-sm">Transfer Learning</span>
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
                                Why Learn AI & Machine Learning?
                            </h2>
                            <p className="text-lg text-black mb-8">
                                Discover the numerous advantages of becoming an AI engineer in today's technology-driven world
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
                                        <FaChartLine className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Future-Proof Career</h3>
                                        <p className="text-black text-sm">AI is the future of technology with limitless growth potential</p>
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
                                        <FaBriefcase className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Universal Applications</h3>
                                        <p className="text-black text-sm">Apply AI across healthcare, finance, automotive, and more</p>
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
                                        <FaAward className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Salaries</h3>
                                        <p className="text-black text-sm">AI engineers earn among the highest salaries in tech</p>
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
                                        <FaBolt className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Cutting-Edge Innovation</h3>
                                        <p className="text-black text-sm">Work on revolutionary technology shaping the future</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="bg-gray-50/50 p-8 rounded-xl border border-gray-700" variants={fadeInRight}>
                            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer}>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">$500B</div>
                                    <div className="text-sm text-black">AI Market Size</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">3.5M</div>
                                    <div className="text-sm text-black">AI Jobs by 2025</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">175ZB</div>
                                    <div className="text-sm text-black">Data by 2025</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
                                    <div className="text-sm text-black">Annual Growth</div>
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
                            Master AI & ML Tools
                        </h2>
                        <p className="text-lg text-black max-w-2xl mx-auto">
                            Learn the exact tools and technologies used by AI engineers worldwide
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {/* Programming & Frameworks */}
                        <motion.div 
                            className="bg-gray-50/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaMicrochip className="w-8 h-8 text-gray-900" />
                                <h3 className="text-2xl font-bold text-gray-900">Programming & Frameworks</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Python', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-Learn', 'Jupyter Notebooks'].map((tech, index) => (
                                    <motion.div 
                                        key={tech}
                                        className="flex items-center justify-between p-3 bg-white/50 rounded-lg"
                                        variants={fadeInUp}
                                    >
                                        <span className="text-black">{tech}</span>
                                        <FaCheckCircle className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Deep Learning */}
                        <motion.div 
                            className="bg-gray-50/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaBrain className="w-8 h-8 text-gray-900" />
                                <h3 className="text-2xl font-bold text-gray-900">Deep Learning</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['CNNs', 'RNNs', 'Transformers', 'GANs', 'Autoencoders', 'Transfer Learning'].map((tech, index) => (
                                    <motion.div 
                                        key={tech}
                                        className="flex items-center justify-between p-3 bg-white/50 rounded-lg"
                                        variants={fadeInUp}
                                    >
                                        <span className="text-black">{tech}</span>
                                        <FaCheckCircle className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* AI Applications */}
                        <motion.div 
                            className="bg-gray-50/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaChartPie className="w-8 h-8 text-gray-900" />
                                <h3 className="text-2xl font-bold text-gray-900">AI Applications</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Computer Vision', 'NLP', 'Speech Recognition', 'Reinforcement Learning', 'AWS SageMaker', 'Google Cloud AI'].map((tech, index) => (
                                    <motion.div 
                                        key={tech}
                                        className="flex items-center justify-between p-3 bg-white/50 rounded-lg"
                                        variants={fadeInUp}
                                    >
                                        <span className="text-black">{tech}</span>
                                        <FaCheckCircle className="w-5 h-5 text-gray-900" />
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
                                Real-World AI Applications
                            </h2>
                            <motion.div className="space-y-6" variants={staggerContainer}>
                                <motion.div className="bg-gray-50/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaBrain className="w-6 h-6 text-gray-900" />
                                        <h3 className="text-xl font-bold text-gray-900">Autonomous Systems</h3>
                                    </div>
                                    <p className="text-black">
                                        Build self-driving cars, drones, and robotics systems that perceive and navigate the world independently
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaChartLine className="w-6 h-6 text-gray-900" />
                                        <h3 className="text-xl font-bold text-gray-900">Healthcare AI</h3>
                                    </div>
                                    <p className="text-black">
                                        Develop diagnostic AI, drug discovery systems, and personalized treatment recommendations
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-50/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaChartPie className="w-6 h-6 text-gray-900" />
                                        <h3 className="text-xl font-bold text-gray-900">Financial AI</h3>
                                    </div>
                                    <p className="text-black">
                                        Create algorithmic trading systems, fraud detection, and risk assessment models
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
                                        <FaDatabase className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Master AI Technologies</h3>
                                        <p className="text-black">
                                            Learn neural networks, deep learning, and advanced AI algorithms to solve complex problems
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaAward className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Build AI Expertise</h3>
                                        <p className="text-black">
                                            Develop expertise in computer vision, NLP, and reinforcement learning
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaBriefcase className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Launch AI Career</h3>
                                        <p className="text-black">
                                            Get placed at top AI companies with our career support and industry connections
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="mt-8" variants={scaleIn}>
                                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 w-full">
                                        Start Your AI Journey
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
                            Our AI & ML Learning Approach
                        </h2>
                        <p className="text-lg text-black max-w-2xl mx-auto">
                            Experience a revolutionary approach to learning AI through our proven methodology
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                    >
                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaBullseye className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-World Projects</h3>
                            <p className="text-black leading-relaxed">
                                Build 30+ AI projects including self-driving cars, medical diagnosis, and intelligent chatbots
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaUsers className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mentorship</h3>
                            <p className="text-black leading-relaxed">
                                Learn from AI researchers working at Google, OpenAI, and DeepMind through personalized sessions
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaChartLine className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Practice</h3>
                            <p className="text-black leading-relaxed">
                                Access GPU clusters, cloud AI platforms, and real datasets for training advanced models
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaRocket className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Career Excellence</h3>
                            <p className="text-black leading-relaxed">
                                Get research paper support, Kaggle competitions, and direct referrals to top AI labs
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
                            Ready to Master AI & Machine Learning?
                        </h2>
                        <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                            Join thousands of successful AI engineers who started their journey with our comprehensive program. Your AI career starts here!
                        </p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
                            <motion.a 
                                href="https://register.medinitechnologies.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                variants={scaleIn} 
                                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 cursor-pointer inline-block"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Enroll Now 
                            </motion.a>
                        </motion.div>
                        <motion.div className="mt-8 flex items-center justify-center gap-6 text-black" variants={staggerContainer}>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <FaClock className="w-5 h-5 text-gray-900" />
                                <span>Limited Time Offer</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <FaUsers className="w-5 h-5 text-gray-900" />
                                <span>10000+ Students Enrolled</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <FaAward className="w-5 h-5 text-gray-900" />
                                <span>Industry Recognized</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </ScrollSection>
        </div>
    );
};

export default AIandML;
