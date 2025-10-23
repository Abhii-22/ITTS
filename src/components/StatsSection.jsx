import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({ students: 0, courses: 0, success: 0, countries: 0 });
    const sectionRef = useRef(null);

    const stats = [
        { icon: Users, value: 15000, label: "Active Students", suffix: "+" },
        { icon: BookOpen, value: 120, label: "Courses Offered", suffix: "+" },
        { icon: Award, value: 95, label: "Success Rate", suffix: "%" },
        { icon: Globe, value: 50, label: "Countries", suffix: "+" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2500;
        const startTime = Date.now();

        const animateCounter = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
                students: Math.floor(stats[0].value * easeOut),
                courses: Math.floor(stats[1].value * easeOut),
                success: Math.floor(stats[2].value * easeOut),
                countries: Math.floor(stats[3].value * easeOut)
            });

            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            }
        };

        requestAnimationFrame(animateCounter);
    }, [isVisible]);

    const displayValues = [counts.students, counts.courses, counts.success, counts.countries];

    return (
        <section
            ref={sectionRef}
            className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
        >
            {/* Dynamic animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="relative container mx-auto px-6 z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <div
                        className={`inline-block mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                    >
                        <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
                            <span className="text-sm font-semibold text-blue-400">Why We're Leading</span>
                        </div>
                    </div>

                    <h2
                        className={`text-6xl md:text-7xl font-black leading-tight mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Trusted by Thousands
                        </span>
                    </h2>

                    <p
                        className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        Our community spans across the globe, with learners achieving their dreams every single day
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const delay = index * 150;
                        const displayValue = displayValues[index];

                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${delay + 300}ms` }}
                            >
                                {/* Icon Box */}
                                <div className="relative group mb-8">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-150" />
                                    <div className="relative p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-500 backdrop-blur-sm">
                                        <Icon className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110" />
                                    </div>
                                </div>

                                {/* Number - Large and Bold */}
                                <div className="mb-3 relative">
                                    <div className="text-7xl md:text-8xl font-black tracking-tight leading-none">
                                        <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                                            {displayValue.toLocaleString()}
                                        </span>
                                        <span className="text-4xl md:text-5xl ml-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                                            {stat.suffix}
                                        </span>
                                    </div>
                                </div>

                                {/* Label */}
                                <p className="text-gray-300 text-lg md:text-xl font-semibold mb-4">
                                    {stat.label}
                                </p>

                                {/* Divider */}
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-20" />
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default StatsSection;