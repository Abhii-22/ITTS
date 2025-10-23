import React, { useState } from 'react';
import { Zap, Code2, Cloud, Database, Layers, Package, Star, Users, Clock, ArrowRight } from 'lucide-react';
import { DiMongodb, DiDocker, DiPython, DiNodejsSmall, DiAws, DiReact, DiJsBadge, DiAngularSimple } from "react-icons/di";
import { SiTensorflow, SiVuedotjs, SiKubernetes, SiPostgresql } from 'react-icons/si';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = ["All", "Frontend", "Backend", "Cloud & DevOps", "Databases", "AI/ML"];

  const courseData = [
    {
      id: 1,
      title: "React Fundamentals",
      category: "Frontend",
      level: "Beginner",
      duration: "6 weeks",
      students: 2450,
      rating: 4.8,
      price: "$49",
      icon: <DiReact className='text-violet-400 size-8' />,
      description: "Master React basics, hooks, and component architecture",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Python Backend Development",
      category: "Backend",
      level: "Intermediate",
      duration: "8 weeks",
      students: 1890,
      rating: 4.7,
      price: "$59",
      icon: <DiPython className='text-blue-400 size-8' />,
      description: "Build scalable APIs with Python and Flask",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "AWS Cloud Architecture",
      category: "Cloud & DevOps",
      level: "Advanced",
      duration: "10 weeks",
      students: 1623,
      rating: 4.9,
      price: "$79",
      icon: <DiAws className='text-orange-400 size-8' />,
      description: "Design and deploy scalable cloud solutions on AWS",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Docker & Containerization",
      category: "Cloud & DevOps",
      level: "Intermediate",
      duration: "5 weeks",
      students: 1234,
      rating: 4.6,
      price: "$44",
      icon: <DiDocker className='text-cyan-400 size-8' />,
      description: "Master Docker for modern application deployment",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 5,
      title: "MongoDB Mastery",
      category: "Databases",
      level: "Intermediate",
      duration: "6 weeks",
      students: 1456,
      rating: 4.7,
      price: "$49",
      icon: <DiMongodb className='text-green-400 size-8' />,
      description: "Build NoSQL applications with MongoDB",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Vue.js Advanced Patterns",
      category: "Frontend",
      level: "Advanced",
      duration: "8 weeks",
      students: 987,
      rating: 4.8,
      price: "$69",
      icon: <SiVuedotjs className='text-emerald-400 size-8' />,
      description: "Advanced Vue.js concepts and performance optimization",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 7,
      title: "Node.js Real-time Applications",
      category: "Backend",
      level: "Intermediate",
      duration: "7 weeks",
      students: 2101,
      rating: 4.7,
      price: "$59",
      icon: <DiNodejsSmall className='text-green-400 size-8' />,
      description: "Build real-time applications with Node.js and WebSockets",
      color: "from-green-500 to-cyan-500"
    },
    {
      id: 8,
      title: "TensorFlow Deep Learning",
      category: "AI/ML",
      level: "Advanced",
      duration: "12 weeks",
      students: 654,
      rating: 4.9,
      price: "$99",
      icon: <SiTensorflow className='text-amber-400 size-8' />,
      description: "Build neural networks with TensorFlow and Keras",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 9,
      title: "Kubernetes Orchestration",
      category: "Cloud & DevOps",
      level: "Advanced",
      duration: "9 weeks",
      students: 876,
      rating: 4.8,
      price: "$79",
      icon: <SiKubernetes className='text-blue-400 size-8' />,
      description: "Master container orchestration with Kubernetes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 10,
      title: "PostgreSQL Database Design",
      category: "Databases",
      level: "Intermediate",
      duration: "7 weeks",
      students: 1345,
      rating: 4.6,
      price: "$49",
      icon: <SiPostgresql className='text-blue-400 size-8' />,
      description: "Design and optimize relational databases with PostgreSQL",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 11,
      title: "Angular Enterprise Apps",
      category: "Frontend",
      level: "Advanced",
      duration: "10 weeks",
      students: 1123,
      rating: 4.7,
      price: "$74",
      icon: <DiAngularSimple className='text-red-400 size-8' />,
      description: "Build enterprise-scale applications with Angular",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 12,
      title: "JavaScript Modern Practices",
      category: "Backend",
      level: "Beginner",
      duration: "6 weeks",
      students: 3214,
      rating: 4.9,
      price: "$39",
      icon: <DiJsBadge className='text-yellow-400 size-8' />,
      description: "Learn modern JavaScript ES6+ and best practices",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const filteredCourses = selectedCategory === "All"
    ? courseData
    : courseData.filter(course => course.category === selectedCategory);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <Zap size={16} className="text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Featured Courses</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 leading-tight">
            Learn In-Demand Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive courses designed by industry experts to accelerate your tech career
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${selectedCategory === cat
                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-full"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl flex flex-col backdrop-blur-sm">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                  </div>

                  {/* Badge and Title Row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all line-clamp-2 flex-1">
                      {course.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                      {course.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-1">
                    {course.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-500" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span>{course.rating} rating</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-slate-700/0 via-slate-700/50 to-slate-700/0 mb-4"></div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {course.price}
                    </span>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold text-sm transition-all flex items-center gap-2 group/btn">
                      Enroll
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block">
            <button className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                View All Courses <Zap size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;