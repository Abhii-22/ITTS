import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const CoursesSection = () => {
    const courses = [
        {
            title: "Full Stack Web Development",
            duration: "6 Months",
            level: "Beginner to Advanced",
            students: "2,500+",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
            tags: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            title: "Python & AI/ML",
            duration: "5 Months",
            level: "Intermediate",
            students: "1,800+",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
            tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"]
        },
        {
            title: "Cloud DevOps Engineering",
            duration: "4 Months",
            level: "Intermediate to Advanced",
            students: "1,500+",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
            tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Mobile App Development",
            duration: "5 Months",
            level: "Beginner to Advanced",
            students: "1,200+",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
            tags: ["React Native", "Flutter", "iOS", "Android"]
        }
    ];

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">Popular Courses</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Master in-demand skills with our industry-leading programs
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105">
                            <div className="relative h-48 overflow-hidden">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {course.level}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {course.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {course.students}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                                    ))}
                                    <span className="text-gray-400 text-sm ml-2">{course.rating}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {course.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                                    Enroll Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;