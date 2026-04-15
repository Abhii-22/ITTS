import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import homeWebImage from '../assets/images/homeweb.jpeg';
import homeAimlImage from '../assets/images/homeaiml.jpeg';
import homeCloudImage from '../assets/images/homecloud.jpeg';

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
            image: homeWebImage,
            stats: { students: "5K+", courses: "50+" }
        },
        {
            title: "AI & Machine Learning",
            subtitle: "Dive into the Future of Technology",
            description: "Master Python, TensorFlow, and cutting-edge AI algorithms",
            image: homeAimlImage,
            stats: { students: "3K+", courses: "30+" }
        },
        {
            title: "Cloud & DevOps Mastery",
            subtitle: "AWS, Azure, Docker & Kubernetes",
            description: "Learn to deploy, scale, and manage modern cloud infrastructure",
            image: homeCloudImage,
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
                                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight transform transition-all duration-1000 delay-300 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        {slide.title}
                                    </h1>
                                    <h2
                                        className={`text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-300 font-semibold mb-3 sm:mb-4 transform transition-all duration-1000 delay-400 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        {slide.subtitle}
                                    </h2>
                                    <p
                                        className={`text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6 leading-relaxed transform transition-all duration-1000 delay-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        {slide.description}
                                    </p>
                                    <div
                                        className={`grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 transform transition-all duration-1000 delay-600 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        {Object.entries(slide.stats).map(([key, value]) => (
                                            <div
                                                key={key}
                                                className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-white/20 hover:bg-white/20 transition-colors"
                                            >
                                                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
                                                <div className="text-xs text-gray-300 capitalize">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className={`transform transition-all duration-1000 delay-700 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                            }`}
                                    >
                                        <button className="w-full sm:w-auto bg-indigo-400 hover:bg-indigo-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-2xl hover:shadow-indigo-400/50 transform hover:scale-105 transition-all duration-300 active:scale-95" onClick={() => {
                                            const footer = document.querySelector('footer');
                                            if (footer) {
                                                footer.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}>
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
                className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-1.5 sm:p-2 md:p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 active:scale-95"
            >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2} />
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-1.5 sm:p-2 md:p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 active:scale-95"
            >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2} />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-20 sm:bottom-16 left-1/2 -translate-x-1/2 z-40 flex gap-2 sm:gap-3 px-4">
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
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 active:scale-95"
            >
                {isAutoPlaying ? (
                    <Pause className="w-4 h-4 sm:w-6 sm:h-6" />
                ) : (
                    <Play className="w-4 h-4 sm:w-6 sm:h-6" />
                )}
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 text-white text-xs sm:text-sm font-semibold">
                {currentSlide + 1} / {slides.length}
            </div>
        </div>
    );
};

export default Carousel;