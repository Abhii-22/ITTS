import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, Clock, Briefcase, Target } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: Users,
            title: "Expert Instructors",
            description: "Learn from industry professionals with 10+ years of real-world experience"
        },
        {
            icon: BookOpen,
            title: "Comprehensive Curriculum",
            description: "Structured courses covering everything from basics to advanced concepts"
        },
        {
            icon: Trophy,
            title: "Industry Certifications",
            description: "Earn recognized certifications that boost your career prospects"
        },
        {
            icon: Clock,
            title: "Flexible Learning",
            description: "Study at your own pace with lifetime access to course materials"
        },
        {
            icon: Briefcase,
            title: "Job Assistance",
            description: "Get career guidance, resume reviews, and interview preparation"
        },
        {
            icon: Target,
            title: "Hands-on Projects",
            description: "Build real-world projects to showcase in your portfolio"
        }
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div 
                    className="text-center mb-10 md:mb-14 lg:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Why Choose Us?</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        We provide everything you need to succeed in your tech career
                    </p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    transition={{ duration: 0.6 }}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div 
                                key={index} 
                                className="bg-slate-900 p-6 sm:p-7 md:p-8 rounded-xl md:rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105"
                                variants={scaleIn}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.div 
                                    className="inline-flex p-3 md:p-4 bg-blue-600/10 rounded-lg md:rounded-xl mb-4 md:mb-6 group-hover:bg-blue-600/20 transition-all"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                                </motion.div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;