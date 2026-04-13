import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaChartBar, FaDatabase, FaBolt, FaUsers, FaAward, FaBriefcase, FaClock, FaCheckCircle, FaStar, FaBullseye, FaBook, FaRocket, FaShieldAlt, FaMicrochip, FaChartPie, FaChartLine, FaPython } from 'react-icons/fa';

const PythonFullstack = () => {
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
                        src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1920&q=80"
                        alt="Python Fullstack Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="text-left px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className={`mb-6 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <FaPython className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                        </div>
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Python Fullstack Development
                        </h1>
                        <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Master end-to-end web development with Python, from frontend interfaces to backend APIs and databases, to build complete, scalable web applications
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

            {/* Course Curriculum Section - Moved up */}
            <ScrollSection className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Comprehensive Python Fullstack Curriculum
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Master Python fullstack development through our structured learning path designed by industry experts
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
                                <h3 className="text-2xl font-bold text-white">Frontend & Python Basics</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">HTML5 & CSS3</h4>
                                    <p className="text-gray-400 mb-3">Master modern HTML5, CSS3, responsive design, and frontend frameworks.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">HTML5</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">CSS3</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Bootstrap</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">JavaScript & React</h4>
                                    <p className="text-gray-400 mb-3">Learn JavaScript ES6+, React, state management, and component-based development.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">JavaScript</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">React</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Redux</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Python Fundamentals</h4>
                                    <p className="text-gray-400 mb-3">Master Python programming, data structures, OOP, and advanced Python concepts.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Python</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">OOP</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Data Structures</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Version Control</h4>
                                    <p className="text-gray-400 mb-3">Learn Git, GitHub workflows, and collaborative development practices.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Git</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">GitHub</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Git Flow</span>
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
                                    <FaMicrochip className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Backend & Advanced Development</h3>
                            </div>
                            
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Django & Flask</h4>
                                    <p className="text-gray-400 mb-3">Master Django framework, Flask microframework, and RESTful API development.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Django</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Flask</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">REST API</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Databases & ORM</h4>
                                    <p className="text-gray-400 mb-3">Learn SQL, NoSQL databases, Django ORM, and database design principles.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">PostgreSQL</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">MongoDB</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Django ORM</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Authentication & Security</h4>
                                    <p className="text-gray-400 mb-3">Implement user authentication, JWT tokens, security best practices, and authorization.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">JWT</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">OAuth</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Security</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Deployment & DevOps</h4>
                                    <p className="text-gray-400 mb-3">Deploy applications to cloud platforms, Docker containerization, and CI/CD pipelines.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Docker</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">AWS</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">CI/CD</span>
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
                                Why Learn Python Fullstack?
                            </h2>
                            <p className="text-lg text-gray-400 mb-8">
                                Discover the numerous advantages of becoming a Python fullstack developer in today's tech world
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
                                        <h3 className="text-lg font-bold text-white mb-2">Versatile Skills</h3>
                                        <p className="text-gray-400 text-sm">Build complete applications from frontend to backend</p>
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
                                        <h3 className="text-lg font-bold text-white mb-2">High Demand</h3>
                                        <p className="text-gray-400 text-sm">Fullstack developers are among the most sought-after professionals</p>
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
                                        <h3 className="text-lg font-bold text-white mb-2">Excellent Salaries</h3>
                                        <p className="text-gray-400 text-sm">Python fullstack developers command premium salaries</p>
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
                                        <h3 className="text-lg font-bold text-white mb-2">Python Ecosystem</h3>
                                        <p className="text-gray-400 text-sm">Access to powerful frameworks and libraries</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700" variants={fadeInRight}>
                            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer}>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">$150B</div>
                                    <div className="text-sm text-gray-400">Python Market Size</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">3.2M</div>
                                    <div className="text-sm text-gray-400">Fullstack Jobs</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">85%</div>
                                    <div className="text-sm text-gray-400">Python Adoption</div>
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
                            Master Python Fullstack Tools
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Learn the exact tools and technologies used by Python fullstack developers worldwide
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {/* Frontend Technologies */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaChartBar className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Frontend Technologies</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['HTML5 & CSS3', 'JavaScript ES6+', 'React', 'Redux', 'Bootstrap', 'Tailwind CSS'].map((tech, index) => (
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

                        {/* Backend Technologies */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaPython className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Backend Technologies</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Python', 'Django', 'Flask', 'FastAPI', 'REST APIs', 'GraphQL'].map((tech, index) => (
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

                        {/* Database & DevOps */}
                        <motion.div 
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300" 
                            variants={scaleIn}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" 
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaDatabase className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Database & DevOps</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Nginx'].map((tech, index) => (
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
                                        <FaRocket className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">Web Applications</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Build scalable web applications from frontend UI to backend APIs and database integration
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaChartLine className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">E-commerce Platforms</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Create full-featured e-commerce sites with payment processing and inventory management
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaChartPie className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">SaaS Applications</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Develop software-as-a-service platforms with multi-tenancy and subscription models
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
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaDatabase className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Master Fullstack Skills</h3>
                                        <p className="text-gray-400">
                                            Learn end-to-end development to handle complete application development cycles
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaAward className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Build Portfolio Projects</h3>
                                        <p className="text-gray-400">
                                            Create impressive fullstack projects to showcase your development skills
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaBriefcase className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Launch Fullstack Career</h3>
                                        <p className="text-gray-400">
                                            Get placed at top tech companies with our career support and interview prep
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="mt-8" variants={scaleIn}>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 w-full">
                                        Start Your Fullstack Journey
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
                            Our Python Fullstack Learning Approach
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Experience a revolutionary approach to learning fullstack development through our proven methodology
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
                                Build 20+ fullstack projects including e-commerce sites, social media apps, and SaaS platforms
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaUsers className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Expert Mentorship</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Learn from fullstack developers working at Google, Facebook, and top startups
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaChartLine className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Hands-On Practice</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Access coding labs, real projects, and collaborative development environments
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaRocket className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Career Excellence</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Get portfolio reviews, interview coaching, and direct referrals to tech companies
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
                            Ready to Master Python Fullstack Development?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Join thousands of successful fullstack developers who started their journey with our comprehensive program. Your fullstack career starts here!
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

export default PythonFullstack;
