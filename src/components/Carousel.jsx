import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            title: "Master Modern Web Development",
            subtitle: "Learn React, Node.js, and Full-Stack Technologies",
            description: "Build production-ready applications with industry-standard tools and frameworks",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
            stats: { students: "5K+", courses: "50+" }
        },
        {
            title: "AI & Machine Learning",
            subtitle: "Dive into the Future of Technology",
            description: "Master Python, TensorFlow, and cutting-edge AI algorithms",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
            stats: { students: "3K+", courses: "30+" }
        },
        {
            title: "Cloud & DevOps Mastery",
            subtitle: "AWS, Azure, Docker & Kubernetes",
            description: "Learn to deploy, scale, and manage modern cloud infrastructure",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
            stats: { students: "4K+", courses: "40+" }
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-10'
                            }`}
                    >
                        <div className="absolute inset-0">
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
                        </div>
                        <div className="relative z-10 h-full flex items-center">
                            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                                <div className="max-w-3xl">
                                    <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                        }`}>
                                        {slide.title}
                                    </h1>
                                    <h2 className={`text-2xl md:text-3xl text-blue-400 font-semibold mb-6 transform transition-all duration-1000 delay-400 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                        }`}>
                                        {slide.subtitle}
                                    </h2>
                                    <p className={`text-lg md:text-xl text-gray-200 mb-10 leading-relaxed transform transition-all duration-1000 delay-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                        }`}>
                                        {slide.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-6 mb-10 transform transition-all duration-1000 delay-600 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                        }`}>
                                        {Object.entries(slide.stats).map(([key, value]) => (
                                            <div key={key} className="bg-white/10 backdrop-blur-md rounded-xl px-8 py-4 border border-white/20">
                                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                                                <div className="text-sm md:text-base text-gray-300 capitalize">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`transform transition-all duration-1000 delay-700 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                        }`}>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                                            Start Learning Today
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <button onClick={prevSlide} className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30">
                <ChevronLeft className="w-8 h-8" strokeWidth={2.5} />
            </button>
            <button onClick={nextSlide} className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30">
                <ChevronRight className="w-8 h-8" strokeWidth={2.5} />
            </button>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-500 rounded-full ${index === currentSlide ? 'bg-white w-16 h-4 shadow-lg' : 'bg-white/40 hover:bg-white/60 w-4 h-4'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;