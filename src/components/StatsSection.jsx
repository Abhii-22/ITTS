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
                        <div className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm">
                            <span className="text-xs font-semibold text-indigo-300">Why We're Leading</span>
                        </div>
                    </div>

                    <h2
                        className={`text-4xl md:text-5xl font-black leading-tight mb-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                            Trusted by Thousands
                        </span>
                    </h2>

                    <p
                        className={`text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        Our community spans across the globe, with learners achieving their dreams every single day
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
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
                                <div className="relative group mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-150" />
                                    <div className="relative p-3 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl border border-indigo-500/30 group-hover:border-indigo-400/60 transition-all duration-500 backdrop-blur-sm">
                                        <Icon className="w-8 h-8 text-indigo-300 group-hover:text-indigo-200 transition-all duration-300 group-hover:scale-110" />
                                    </div>
                                </div>

                                {/* Number - Large and Bold */}
                                <div className="mb-2 relative">
                                    <div className="text-5xl md:text-6xl font-black tracking-tight leading-none">
                                        <span className="bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
                                            {displayValue.toLocaleString()}
                                        </span>
                                        <span className="text-3xl md:text-4xl ml-2 bg-gradient-to-r from-indigo-300 to-indigo-200 bg-clip-text text-transparent font-bold">
                                            {stat.suffix}
                                        </span>
                                    </div>
                                </div>

                                {/* Label */}
                                <p className="text-gray-300 text-base md:text-lg font-semibold mb-3">
                                    {stat.label}
                                </p>

                                {/* Divider */}
                                <div className="w-10 h-1 bg-gradient-to-r from-indigo-400 via-indigo-300 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16" />
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