import React from 'react';
import { Target, BookOpen, Code, Briefcase } from 'lucide-react';

const LearningPathSection = () => {
    const steps = [
        {
            step: "01",
            title: "Choose Your Course",
            description: "Browse our comprehensive catalog and select the program that aligns with your career goals",
            icon: Target
        },
        {
            step: "02",
            title: "Learn & Practice",
            description: "Engage with interactive lessons, hands-on projects, and real-world assignments",
            icon: BookOpen
        },
        {
            step: "03",
            title: "Build Your Portfolio",
            description: "Create industry-standard projects that showcase your skills to potential employers",
            icon: Code
        },
        {
            step: "04",
            title: "Get Certified & Hired",
            description: "Earn your certification and leverage our job assistance program to land your dream role",
            icon: Briefcase
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-14 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Your Learning Journey</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        A structured path from beginner to professional
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        {steps.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-start group">
                                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-blue-600/20 rounded-xl md:rounded-2xl flex items-center justify-center border-2 border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                                            <span className="text-xl sm:text-2xl font-bold text-blue-400 group-hover:text-white transition-colors">
                                                {item.step}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-slate-800 p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-700 group-hover:border-blue-500 transition-all duration-300 w-full">
                                        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                                            <div className="flex-1 w-full">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
                                            </div>
                                            <div className="p-2.5 sm:p-3 bg-blue-600/10 rounded-lg md:rounded-xl group-hover:bg-blue-600/20 transition-all self-end sm:self-start">
                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningPathSection;