import React from 'react';

const TechnologiesSection = () => {
    const technologies = [
        { name: "React", color: "from-blue-400 to-cyan-400" },
        { name: "Python", color: "from-yellow-400 to-blue-500" },
        { name: "Node.js", color: "from-green-400 to-green-600" },
        { name: "AWS", color: "from-orange-400 to-orange-600" },
        { name: "Docker", color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", color: "from-green-500 to-green-700" },
        { name: "TypeScript", color: "from-blue-600 to-blue-800" },
        { name: "TensorFlow", color: "from-orange-500 to-yellow-500" },
        { name: "Angular", color: "from-red-500 to-red-700" },
        { name: "Vue.js", color: "from-green-400 to-emerald-600" },
        { name: "Kubernetes", color: "from-blue-400 to-indigo-600" },
        { name: "PostgreSQL", color: "from-blue-600 to-blue-800" }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-14 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Technologies We Teach</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Master the most in-demand technologies in the industry
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {technologies.map((tech, index) => (
                        <div key={index} className="group">
                            <div className={`bg-gradient-to-br ${tech.color} p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl text-center transform group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                                <div className="text-white font-bold text-sm sm:text-base md:text-lg">{tech.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;