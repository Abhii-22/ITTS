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
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">Your Learning Journey</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A structured path from beginner to professional
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {steps.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex gap-8 items-start group">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center border-2 border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                                            <span className="text-2xl font-bold text-blue-400 group-hover:text-white transition-colors">
                                                {item.step}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-slate-800 p-8 rounded-2xl border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                            </div>
                                            <div className="p-3 bg-blue-600/10 rounded-xl group-hover:bg-blue-600/20 transition-all">
                                                <Icon className="w-6 h-6 text-blue-400" />
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
