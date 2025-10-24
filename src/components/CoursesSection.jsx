import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight, Filter, TrendingUp, Award, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const CoursesSection = () => {
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [hoveredCard, setHoveredCard] = useState(null);

    const courses = [
        {
            title: "Full Stack Web Development",
            duration: "6 Months",
            level: "Beginner",
            students: "2,500+",
            rating: 4.8,
            reviews: 320,
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            price: "$499",
            trending: true,
            completion: "95%"
        },
        {
            title: "Python & AI/ML",
            duration: "5 Months",
            level: "Intermediate",
            students: "1,800+",
            rating: 4.9,
            reviews: 285,
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
            tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
            price: "$599",
            trending: true,
            completion: "92%"
        },
        {
            title: "Cloud DevOps Engineering",
            duration: "4 Months",
            level: "Advanced",
            students: "1,500+",
            rating: 4.7,
            reviews: 198,
            image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
            tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
            price: "$699",
            trending: false,
            completion: "88%"
        },
        {
            title: "Mobile App Development",
            duration: "5 Months",
            level: "Beginner",
            students: "1,200+",
            rating: 4.8,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
            tags: ["React Native", "Flutter", "iOS", "Android"],
            price: "$549",
            trending: false,
            completion: "90%"
        },
        {
            title: "Data Science & Analytics",
            duration: "6 Months",
            level: "Intermediate",
            students: "2,100+",
            rating: 4.9,
            reviews: 267,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            tags: ["SQL", "Tableau", "Python", "Statistics"],
            price: "$579",
            trending: true,
            completion: "93%"
        },
        {
            title: "Cybersecurity Specialist",
            duration: "5 Months",
            level: "Advanced",
            students: "980+",
            rating: 4.8,
            reviews: 142,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
            tags: ["Security", "Ethical Hacking", "Network", "Cryptography"],
            price: "$749",
            trending: false,
            completion: "87%"
        }
    ];

    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    const filteredCourses = selectedLevel === 'All'
        ? courses
        : courses.filter(course => course.level === selectedLevel);

    return (
        <section className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10 sm:opacity-15 md:opacity-20">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                        <span className="text-blue-400 text-xs sm:text-sm font-semibold">EXPLORE COURSES</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent px-4">
                        Popular Courses
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Master in-demand skills with our industry-leading programs designed by experts
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-4">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${selectedLevel === level
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700'
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 sm:hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                                {/* Badges */}
                                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start gap-2">
                                    {course.trending && (
                                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                            <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                            <span className="hidden xs:inline">TRENDING</span>
                                            <span className="xs:hidden">HOT</span>
                                        </div>
                                    )}
                                    <div className="bg-blue-600/90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold ml-auto shadow-lg">
                                        {course.level}
                                    </div>
                                </div>

                                {/* Price Tag */}
                                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-slate-900/90 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg border border-slate-700">
                                    {course.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5 md:p-6">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {course.title}
                                </h3>

                                {/* Stats */}
                                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 flex-wrap">
                                    <span className="flex items-center gap-1 sm:gap-1.5">
                                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                                        <span className="whitespace-nowrap">{course.duration}</span>
                                    </span>
                                    <span className="flex items-center gap-1 sm:gap-1.5">
                                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                                        <span className="whitespace-nowrap">{course.students}</span>
                                    </span>
                                    <span className="flex items-center gap-1 sm:gap-1.5">
                                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                                        <span className="whitespace-nowrap">{course.completion}</span>
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < Math.floor(course.rating)
                                                        ? 'text-yellow-400 fill-yellow-400'
                                                        : 'text-gray-600'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-white font-semibold text-sm sm:text-base">{course.rating}</span>
                                    <span className="text-gray-500 text-xs sm:text-sm">({course.reviews})</span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                                    {course.tags.slice(0, 4).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-slate-700/50 text-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-medium border border-slate-600 hover:border-blue-500 hover:bg-slate-700 transition-all"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                                    Enroll Now
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center px-4">
                    <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 border border-slate-700 hover:border-blue-500 inline-flex items-center gap-2 group">
                        View All Courses
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                @media (min-width: 475px) {
                    .xs\:inline {
                        display: inline;
                    }
                    .xs\:hidden {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default CoursesSection;
