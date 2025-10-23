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
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const startTime = Date.now();

        const animateCounter = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            setCounts({
                students: Math.floor(stats[0].value * progress),
                courses: Math.floor(stats[1].value * progress),
                success: Math.floor(stats[2].value * progress),
                countries: Math.floor(stats[3].value * progress)
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
            className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative container mx-auto px-6 z-10">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2
                        className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent mb-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Our Impact
                    </h2>
                    <p
                        className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Join thousands of learners transforming their careers
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const delay = index * 100;

                        return (
                            <div
                                key={index}
                                className={`group transition-all duration-1000 transform ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    transitionDelay: `${delay}ms`
                                }}
                            >
                                <div className="relative h-full">
                                    {/* Glowing background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

                                    {/* Card */}
                                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
                                        {/* Icon Container */}
                                        <div className="inline-flex p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl mb-6 group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-300 transform group-hover:scale-110">
                                            <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                                        </div>

                                        {/* Value with animation */}
                                        <div className="relative mb-3">
                                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                {displayValues[index].toLocaleString()}
                                                <span className="text-blue-400">{stat.suffix}</span>
                                            </div>
                                        </div>

                                        {/* Label */}
                                        <div className="text-gray-400 text-lg font-medium group-hover:text-gray-300 transition-colors duration-300">
                                            {stat.label}
                                        </div>

                                        {/* Bottom accent line */}
                                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl w-0 group-hover:w-full transition-all duration-500" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    );
};

export default StatsSection;