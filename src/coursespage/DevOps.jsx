import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaChartBar, FaDatabase, FaBolt, FaUsers, FaAward, FaBriefcase, FaClock, FaCheckCircle, FaStar, FaBullseye, FaBook, FaRocket, FaShieldAlt, FaMicrochip, FaChartPie, FaChartLine } from 'react-icons/fa';
import devopsImage from '../assets/images/devops.jpg';

const DevOps = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);
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
                        src={devopsImage}
                        alt="DevOps Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="text-left px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className={`mb-6 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <FaRocket className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                        </div>
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            DevOps Engineering
                        </h1>
                        <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            Master the art of continuous integration, deployment, and infrastructure automation to build scalable, reliable software systems and accelerate development cycles
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <a 
                                href="https://register.medinitechnologies.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 cursor-pointer inline-block"
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
            <ScrollSection className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Comprehensive DevOps Curriculum
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Master DevOps through our structured learning path designed by industry experts
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
                                <h3 className="text-2xl font-bold text-white">DevOps Foundation</h3>
                            </div>

                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Linux & Shell Scripting</h4>
                                    <p className="text-gray-400 mb-3">Master Linux administration, shell scripting, and command-line operations for DevOps environments.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Linux</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Bash</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Shell Scripting</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Version Control with Git</h4>
                                    <p className="text-gray-400 mb-3">Learn Git workflows, branching strategies, and collaborative development practices.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Git</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">GitHub</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">GitLab</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Networking Fundamentals</h4>
                                    <p className="text-gray-400 mb-3">Understand TCP/IP, DNS, load balancing, and network security for DevOps infrastructure.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">TCP/IP</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">DNS</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Load Balancing</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Containerization Basics</h4>
                                    <p className="text-gray-400 mb-3">Learn container concepts, Docker fundamentals, and container orchestration principles.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Docker</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Containers</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Docker Compose</span>
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
                                <h3 className="text-2xl font-bold text-white">Advanced DevOps & Cloud</h3>
                            </div>

                            <motion.div className="space-y-4" variants={staggerContainer}>
                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">CI/CD Pipelines</h4>
                                    <p className="text-gray-400 mb-3">Build automated CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Jenkins</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">GitLab CI</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">GitHub Actions</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Kubernetes & Orchestration</h4>
                                    <p className="text-gray-400 mb-3">Master Kubernetes architecture, deployments, services, and advanced orchestration.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Kubernetes</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">K8s Architecture</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Helm</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Cloud Platforms</h4>
                                    <p className="text-gray-400 mb-3">Deploy and manage applications on AWS, Azure, and Google Cloud Platform.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">AWS</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Azure</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">GCP</span>
                                    </div>
                                </motion.div>

                                <motion.div className="bg-gray-900/50 p-4 rounded-lg" variants={fadeInUp}>
                                    <h4 className="text-lg font-semibold text-white mb-2">Infrastructure as Code</h4>
                                    <p className="text-gray-400 mb-3">Automate infrastructure provisioning using Terraform, CloudFormation, and Ansible.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Terraform</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">CloudFormation</span>
                                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Ansible</span>
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
                                Why Learn DevOps?
                            </h2>
                            <p className="text-lg text-gray-400 mb-8">
                                Discover the numerous advantages of becoming a DevOps engineer in today's cloud-native world
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
                                        <h3 className="text-lg font-bold text-white mb-2">High Demand Skills</h3>
                                        <p className="text-gray-400 text-sm">DevOps engineers are among the most sought-after professionals</p>
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
                                        <h3 className="text-lg font-bold text-white mb-2">Universal Application</h3>
                                        <p className="text-gray-400 text-sm">DevOps practices apply across all industries and company sizes</p>
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
                                        <p className="text-gray-400 text-sm">DevOps engineers command premium salaries in the tech industry</p>
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
                                        <p className="text-gray-400 text-sm">Work with the latest cloud and automation technologies</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700" variants={fadeInRight}>
                            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer}>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">$300B</div>
                                    <div className="text-sm text-gray-400">DevOps Market Size</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">2.8M</div>
                                    <div className="text-sm text-gray-400">DevOps Jobs by 2025</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">85%</div>
                                    <div className="text-sm text-gray-400">Adoption Rate</div>
                                </motion.div>
                                <motion.div className="text-center" variants={scaleIn}>
                                    <div className="text-3xl font-bold text-white mb-2">45%</div>
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
                            Master DevOps Tools
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Learn the exact tools and technologies used by DevOps engineers worldwide
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {/* CI/CD & Automation */}
                        <motion.div
                            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300"
                            variants={scaleIn}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)"
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaRocket className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">CI/CD & Automation</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI', 'Azure DevOps', 'Bamboo'].map((tech, index) => (
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

                        {/* Container & Orchestration */}
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
                                <h3 className="text-2xl font-bold text-white">Container & Orchestration</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Docker', 'Kubernetes', 'Docker Swarm', 'Helm', 'OpenShift', 'Nomad'].map((tech, index) => (
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

                        {/* Infrastructure & Monitoring */}
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
                                <h3 className="text-2xl font-bold text-white">Infrastructure & Monitoring</h3>
                            </div>
                            <motion.div className="space-y-4" variants={staggerContainer}>
                                {['Terraform', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack', 'Nagios'].map((tech, index) => (
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
                                Real-World DevOps Applications
                            </h2>
                            <motion.div className="space-y-6" variants={staggerContainer}>
                                <motion.div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaRocket className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">Cloud Infrastructure</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Design and manage scalable cloud infrastructure on AWS, Azure, and GCP with automated provisioning
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaChartLine className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">Microservices Architecture</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Build and deploy microservices with container orchestration and service mesh technologies
                                    </p>
                                </motion.div>

                                <motion.div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" variants={fadeInUp}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaChartPie className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-bold text-white">DevSecOps</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        Integrate security practices into DevOps pipelines and implement automated security testing
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
                                        <h3 className="text-lg font-bold text-white mb-2">Master DevOps Skills</h3>
                                        <p className="text-gray-400">
                                            Learn automation, containerization, and infrastructure management to handle modern deployments
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaAward className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Build Cloud Expertise</h3>
                                        <p className="text-gray-400">
                                            Develop expertise in cloud platforms and infrastructure as code for scalable solutions
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaBriefcase className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Launch DevOps Career</h3>
                                        <p className="text-gray-400">
                                            Get placed at top tech companies with our career support and industry connections
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="mt-8" variants={scaleIn}>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 w-full">
                                        Start Your DevOps Journey
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
                            Our DevOps Learning Approach
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Experience a revolutionary approach to learning DevOps through our proven methodology
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
                                Build 25+ DevOps projects including CI/CD pipelines, Kubernetes clusters, and cloud infrastructure
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaUsers className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Expert Mentorship</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Learn from DevOps engineers working at Google, Netflix, and Amazon through personalized sessions
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaChartLine className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Hands-On Practice</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Access cloud labs, real infrastructure, and enterprise tools for practical experience
                            </p>
                        </motion.div>

                        <motion.div className="text-center group" variants={scaleIn}>
                            <div className="w-20 h-20 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaRocket className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Career Excellence</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Get certification support, interview prep, and direct referrals to top DevOps companies
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
                            Ready to Master DevOps Engineering?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Join thousands of successful DevOps engineers who started their journey with our comprehensive program. Your DevOps career starts here!
                        </p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
                            <motion.a 
                                href="https://register.medinitechnologies.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                variants={scaleIn} 
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 cursor-pointer inline-block"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Enroll Now - Save 25%
                            </motion.a>
                        </motion.div>
                        <motion.div className="mt-8 flex items-center justify-center gap-6 text-gray-400" variants={staggerContainer}>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <FaClock className="w-5 h-5 text-white" />
                                <span>Limited Time Offer</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                                <FaUsers className="w-5 h-5 text-white" />
                                <span>9000+ Students Enrolled</span>
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

export default DevOps;
