import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Full Stack Developer at Google",
            content: "The instructors are phenomenal! I landed my dream job at Google within 3 months of completing the Full Stack course. The hands-on projects were invaluable.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
        },
        {
            name: "Rahul Verma",
            role: "ML Engineer at Microsoft",
            content: "Best investment in my career. The AI/ML course was comprehensive and the instructors were always available for doubt clearing. Highly recommended!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
        },
        {
            name: "Sneha Patel",
            role: "DevOps Engineer at Amazon",
            content: "The practical approach to teaching made all the difference. I went from zero DevOps knowledge to deploying production applications in just 4 months.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
        },
        {
            name: "Amit Kumar",
            role: "React Developer at Meta",
            content: "The React course exceeded my expectations. The real-world projects and mentorship helped me secure a position at Meta. Thank you for the amazing journey!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
        },
        {
            name: "Neha Gupta",
            role: "Data Scientist at Netflix",
            content: "From zero to data scientist in 6 months! The curriculum is industry-relevant and the placement support is outstanding. I'm now working at my dream company.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80"
        },
        {
            name: "Vikram Singh",
            role: "Cloud Architect at AWS",
            content: "The cloud computing course transformed my career. The hands-on experience with AWS services and expert guidance made all the difference.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
        },
        {
            name: "Anjali Reddy",
            role: "Mobile Developer at Apple",
            content: "The mobile development course was fantastic! I learned both iOS and Android development, which helped me land my dream job at Apple.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=200&q=80"
        },
        {
            name: "Rohit Mehta",
            role: "Cybersecurity Analyst at IBM",
            content: "The cybersecurity course provided me with the skills and confidence to transition into this field. Now I'm protecting critical infrastructure at IBM.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 2000); // Rotate every 2 seconds for continuous movement

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const getVisibleCards = () => {
        const cards = [];
        const totalCards = testimonials.length;
        
        // Show 3 cards at a time
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % totalCards;
            cards.push(testimonials[index]);
        }
        return cards;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-14 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Student Success Stories</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Hear from our graduates who transformed their careers
                    </p>
                </div>
                
                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-700 hover:bg-slate-600 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 -ml-4 sm:-ml-6"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-700 hover:bg-slate-600 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 -mr-4 sm:-mr-6"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Rotating Cards */}
                    <div className="flex gap-4 sm:gap-6 md:gap-8 overflow-hidden">
                        {getVisibleCards().map((testimonial, index) => (
                            <div
                                key={`${currentIndex}-${index}`}
                                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-slate-900 p-6 sm:p-7 md:p-8 rounded-xl md:rounded-2xl border border-slate-700 hover:border-indigo-400 transition-all duration-500 transform hover:scale-105"
                                style={{
                                    animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0" />
                                    <div className="min-w-0">
                                        <div className="font-semibold text-white text-sm sm:text-base truncate">{testimonial.name}</div>
                                        <div className="text-xs sm:text-sm text-gray-400 truncate">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-indigo-400 w-6'
                                    : 'bg-slate-600 hover:bg-slate-500'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;