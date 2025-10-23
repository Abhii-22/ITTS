import React, { useState } from 'react';
import { Zap, Code2, Cloud, Database, Layers, Package, CloudUpload } from 'lucide-react';
import { DiMongodb, DiDocker, DiPython, DiNodejsSmall, DiAws, DiReact, DiJsBadge, DiAngularSimple } from "react-icons/di";

import { SiTensorflow, SiVuedotjs, SiKubernetes, SiPostgresql } from 'react-icons/si';
const TechnologiesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const categories = [
        {
            title: "Frontend",
            icon: Code2,
            color: "from-purple-500 to-pink-500",
            techs: ["React", "Vue.js", "Angular"]
        },
        {
            title: "Backend",
            icon: Layers,
            color: "from-emerald-500 to-teal-500",
            techs: ["Python", "Node.js", "TypeScript"]
        },
        {
            title: "Cloud & DevOps",
            icon: Cloud,
            color: "from-orange-500 to-red-500",
            techs: ["AWS", "Docker", "Kubernetes"]
        },
        {
            title: "Databases",
            icon: Database,
            color: "from-blue-500 to-indigo-500",
            techs: ["MongoDB", "PostgreSQL"]
        },
        {
            title: "AI/ML",
            icon: Zap,
            color: "from-yellow-500 to-orange-500",
            techs: ["TensorFlow"]
        }
    ];

    const allTechs = [
        { name: "React", category: "Frontend", icon: <DiReact className=' text-violet-600 size-12.5' /> },
        { name: "Python", category: "Backend", icon: <DiPython className=' text-slate-500 size-12.5' /> },
        { name: "Node.js", category: "Backend", icon: <DiNodejsSmall className=' text-green-500 size-12.5' /> },
        { name: "AWS", category: "Cloud & DevOps", icon: <DiAws className=' text-amber-500 size-12.5' /> },
        { name: "Docker", category: "Cloud & DevOps", icon: <DiDocker className=' text-blue-500 size-12.5' /> },
        { name: "MongoDB", category: "Databases", icon: <DiMongodb className=' text-green-500 size-12.5' /> },
        { name: "JavaScript", category: "Backend", icon: <DiJsBadge className=' text-yellow-500 size-12.5' /> },
        { name: "TensorFlow", category: "AI/ML", icon: <SiTensorflow className=' text-amber-500 size-12.5' /> },
        { name: "Angular", category: "Frontend", icon: <DiAngularSimple className=' text-red-500 size-12.5' /> },
        { name: "Vue.js", category: "Frontend", icon: <SiVuedotjs className=' text-green-500 size-12.5' /> },
        { name: "Kubernetes", category: "Cloud & DevOps", icon: <SiKubernetes className=' text-blue-500 size-12.5' /> },
        { name: "PostgreSQL", category: "Databases", icon: <SiPostgresql className=' text-blue-500 size-12.5' /> }
    ];

    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                            <Zap size={16} className="text-purple-400" />
                            <span className="text-sm font-semibold text-purple-300">Industry Skills</span>
                        </div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 leading-tight">
                        Master Modern Technologies
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Learn cutting-edge tools and frameworks trusted by Fortune 500 companies
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                                <div className="relative">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>
                                    <div className="space-y-2">
                                        {category.techs.map((tech, i) => (
                                            <div key={i} className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                • {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Technologies Grid */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">All Technologies</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {allTechs.map((tech, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-full">
                                    {/* Animated gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>

                                    {/* Card */}
                                    <div className="relative p-6 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/50 group-hover:border-purple-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col items-center justify-center">
                                        <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                                            {tech.icon}
                                        </div>
                                        <div className="text-white font-semibold text-center text-sm sm:text-base">
                                            {tech.name}
                                        </div>
                                        <div className={`mt-2 h-1 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="inline-block">
                        <button className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                Start Learning Today <Zap size={18} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;