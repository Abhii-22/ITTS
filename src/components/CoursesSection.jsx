import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight, Filter, TrendingUp, Award, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoursesSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();

    const courses = [
        {
            title: "Data Science",
            duration: "6 Months",
            students: "2,100+",
            rating: 4.9,
            reviews: 267,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            tags: ["SQL", "Tableau", "Python", "Statistics"],
            trending: false,
            completion: "93%",
            route: "/courses/data-science"
        },
        {
            title: "AI & Machine Learning",
            duration: "5 Months",
            students: "1,800+",
            rating: 4.9,
            reviews: 285,
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
            tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
            trending: false,
            completion: "92%",
            route: "/courses/ai-ml"
        },
        {
            title: "Cloud Computing",
            duration: "4 Months",
            students: "1,500+",
            rating: 4.7,
            reviews: 198,
            image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
            tags: ["AWS", "Azure", "Google Cloud", "Serverless"],
            trending: false,
            completion: "88%",
            route: "/courses/cloud-computing"
        },
        {
            title: "DevOps Engineering",
            duration: "4 Months",
            students: "1,500+",
            rating: 4.7,
            reviews: 198,
            image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
            tags: ["Docker", "Kubernetes", "CI/CD", "Jenkins"],
            trending: false,
            completion: "88%",
            route: "/courses/devops"
        },
        {
            title: "Python Full Stack Development",
            duration: "6 Months",
            students: "2,500+",
            rating: 4.8,
            reviews: 320,
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
            tags: ["Python", "Django", "React", "PostgreSQL"],
            trending: false,
            completion: "95%",
            route: "/courses/python-fullstack"
        },
        {
            title: "Java Full Stack Development",
            duration: "6 Months",
            students: "2,200+",
            rating: 4.8,
            reviews: 295,
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
            tags: ["Java", "Spring Boot", "React", "MySQL"],
            trending: false,
            completion: "94%",
            route: "/courses/java-fullstack"
        }
    ];

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
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-300" />
                        <span className="text-indigo-300 text-xs sm:text-sm font-semibold">EXPLORE COURSES</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent px-4">
                        Popular Courses
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Master in-demand skills with our industry-leading programs designed by experts
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1 sm:hover:-translate-y-2"
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
                                </div>

                                                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5 md:p-6">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                                    {course.title}
                                </h3>

                                {/* Stats */}
                                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 flex-wrap">
                                    <span className="flex items-center gap-1 sm:gap-1.5">
                                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-300 flex-shrink-0" />
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
                                            className="bg-slate-700/50 text-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-medium border border-slate-600 hover:border-indigo-400 hover:bg-slate-700 transition-all"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button 
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        navigate(course.route);
                                    }}
                                    className="w-full bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-indigo-500 hover:to-purple-700 text-white py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
                                >
                                    Enroll Now
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-indigo-400/10 to-transparent pointer-events-none transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>
                    ))}
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
