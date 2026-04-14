import React, { useState, useMemo } from 'react';
import { Zap, Code2, Cloud, Database, Layers, Search, X } from 'lucide-react';
import { DiMongodb, DiDocker, DiPython, DiNodejsSmall, DiAws, DiReact, DiJsBadge, DiAngularSimple } from "react-icons/di";
import { SiTensorflow, SiVuedotjs, SiKubernetes, SiPostgresql } from 'react-icons/si';

const TechnologiesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

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
        { name: "React", category: "Frontend", icon: <DiReact className='text-violet-600 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "Python", category: "Backend", icon: <DiPython className='text-slate-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "Node.js", category: "Backend", icon: <DiNodejsSmall className='text-green-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "AWS", category: "Cloud & DevOps", icon: <DiAws className='text-amber-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "Docker", category: "Cloud & DevOps", icon: <DiDocker className='text-blue-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "MongoDB", category: "Databases", icon: <DiMongodb className='text-green-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "JavaScript", category: "Backend", icon: <DiJsBadge className='text-yellow-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "TensorFlow", category: "AI/ML", icon: <SiTensorflow className='text-amber-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "Angular", category: "Frontend", icon: <DiAngularSimple className='text-red-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "Vue.js", category: "Frontend", icon: <SiVuedotjs className='text-green-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "Kubernetes", category: "Cloud & DevOps", icon: <SiKubernetes className='text-blue-500 w-12 h-12 sm:w-14 sm:h-14' /> },
        { name: "PostgreSQL", category: "Databases", icon: <SiPostgresql className='text-blue-500 w-12 h-12 sm:w-14 sm:h-14' /> }
    ];

    const filteredTechs = useMemo(() => {
        return allTechs.filter(tech => {
            const matchesCategory = selectedCategory === 'All' || tech.category === selectedCategory;
            const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const handleCategoryClick = (categoryTitle) => {
        setSelectedCategory(selectedCategory === categoryTitle ? 'All' : categoryTitle);
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                            <Zap size={14} className="text-purple-400 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm font-semibold text-purple-300">Industry Skills</span>
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight px-4">
                        Master Modern Technologies
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        Learn cutting-edge tools and frameworks trusted by Fortune 500 companies
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8 sm:mb-12">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                            type="text"
                            placeholder="Search technologies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all text-sm sm:text-base"
                        />
                        {searchQuery && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12 sm:mb-16">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isSelected = selectedCategory === category.title;
                        return (
                            <button
                                key={idx}
                                onClick={() => handleCategoryClick(category.title)}
                                className={`group relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border transition-all duration-300 hover:shadow-xl active:scale-95 ${isSelected
                                        ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                                        : 'border-slate-700/50 hover:border-slate-600'
                                    }`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl sm:rounded-2xl transition-opacity duration-300 ${isSelected ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
                                    }`}></div>
                                <div className="relative">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform ${isSelected ? 'scale-110' : ''
                                        }`}>
                                        <Icon size={20} className="text-white sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3">{category.title}</h3>
                                    <div className="space-y-1 sm:space-y-2">
                                        {category.techs.map((tech, i) => (
                                            <div key={i} className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                • {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Active Filter Display */}
                {(selectedCategory !== 'All' || searchQuery) && (
                    <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 justify-center">
                        <span className="text-xs sm:text-sm text-gray-400">Active filters:</span>
                        {selectedCategory !== 'All' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs sm:text-sm text-purple-300">
                                {selectedCategory}
                                <button onClick={() => setSelectedCategory('All')} className="hover:text-white transition-colors">
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        )}
                        {searchQuery && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs sm:text-sm text-cyan-300">
                                "{searchQuery}"
                                <button onClick={clearSearch} className="hover:text-white transition-colors">
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        )}
                    </div>
                )}

                {/* Technologies Grid */}
                <div className="mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
                        {selectedCategory === 'All' ? 'All Technologies' : `${selectedCategory} Technologies`}
                        <span className="ml-2 text-base sm:text-lg text-gray-400">({filteredTechs.length})</span>
                    </h3>

                    {filteredTechs.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                            {filteredTechs.map((tech, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative h-full">
                                        {/* Animated gradient background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                                        {/* Card */}
                                        <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/50 group-hover:border-purple-500/50 transition-all duration-300 transform group-hover:scale-105 active:scale-95 group-hover:shadow-2xl h-full flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]">
                                            <div className="mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </div>
                                            <div className="text-white font-semibold text-center text-xs sm:text-sm lg:text-base">
                                                {tech.name}
                                            </div>
                                            <div className="mt-2 h-0.5 sm:h-1 w-6 sm:w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 sm:py-16">
                            <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                            <p className="text-base sm:text-lg text-gray-400">No technologies found</p>
                            <p className="text-xs sm:text-sm text-gray-500 mt-2">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12 sm:mt-16">
                    <div className="inline-block">
                        <button className="relative px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-white overflow-hidden group active:scale-95 transition-transform text-sm sm:text-base">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                Start Learning Today <Zap size={16} className="sm:w-5 sm:h-5" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
