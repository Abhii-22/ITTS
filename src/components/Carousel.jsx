import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

    // Handle window resize for responsiveness
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play effect
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    // Touch handlers for swipe functionality
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
        handleSwipe();
    };

    const handleSwipe = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

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

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    return (
        <div
            className="relative w-full min-h-screen md:h-screen overflow-hidden bg-gray-900"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Slides */}
            {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-10'
                            }`}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40"></div>
                        </div>
                        <div className="relative z-10 h-full flex items-center justify-center md:justify-start">
                            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 md:py-0">
                                <div className="max-w-full sm:max-w-2xl md:max-w-3xl">
                                    <h1
                                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight transform transition-all duration-1000 delay-300 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        {slide.title}
                                    </h1>
                                    <h2
                                        className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-400 font-semibold mb-4 sm:mb-6 transform transition-all duration-1000 delay-400 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        {slide.subtitle}
                                    </h2>
                                    <p
                                        className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-10 leading-relaxed transform transition-all duration-1000 delay-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        {slide.description}
                                    </p>
                                    <div
                                        className={`grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-10 transform transition-all duration-1000 delay-600 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        {Object.entries(slide.stats).map(([key, value]) => (
                                            <div
                                                key={key}
                                                className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-white/20 hover:bg-white/20 transition-colors"
                                            >
                                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                                                <div className="text-xs sm:text-sm md:text-base text-gray-300 capitalize">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className={`transform transition-all duration-1000 delay-700 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 active:scale-95">
                                            Start Learning Today
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-3 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 active:scale-95"
            >
                <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={2.5} />
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-3 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 active:scale-95"
            >
                <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={2.5} />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 px-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`transition-all duration-500 rounded-full ${index === currentSlide
                                ? 'bg-white w-12 sm:w-16 h-3 sm:h-4 shadow-lg'
                                : 'bg-white/40 hover:bg-white/60 w-3 sm:w-4 h-3 sm:h-4 active:bg-white/80'
                            }`}
                    />
                ))}
            </div>

            {/* Play/Pause Button */}
            <button
                onClick={toggleAutoPlay}
                aria-label={isAutoPlaying ? "Pause autoplay" : "Play autoplay"}
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 active:scale-95"
            >
                {isAutoPlaying ? (
                    <Pause className="w-4 h-4 sm:w-6 sm:h-6" />
                ) : (
                    <Play className="w-4 h-4 sm:w-6 sm:h-6" />
                )}
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-30 text-white text-xs sm:text-sm font-semibold">
                {currentSlide + 1} / {slides.length}
            </div>
        </div>
    );
};

export default Carousel;