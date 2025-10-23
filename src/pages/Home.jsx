import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, Code, Brain, Rocket, TrendingUp, Award,
  Users, BookOpen, Trophy, Clock, CheckCircle, Star, ArrowRight,
  Briefcase, Target, Zap, Globe
} from 'lucide-react';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import CoursesSection from '../components/CoursesSection';  
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import LearningPathSection from '../components/LearningPathSection';
import TechnologiesSection from '../components/TechnologiesSection';
import FAQSection from '../components/FAQSection';
import Carousel from '../components/Carousel';
// Carousel Component
// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const slides = [
//     {
//       title: "Master Modern Web Development",
//       subtitle: "Learn React, Node.js, and Full-Stack Technologies",
//       description: "Build production-ready applications with industry-standard tools and frameworks",
//       image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
//       stats: { students: "5K+", courses: "50+" }
//     },
//     {
//       title: "AI & Machine Learning",
//       subtitle: "Dive into the Future of Technology",
//       description: "Master Python, TensorFlow, and cutting-edge AI algorithms",
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
//       stats: { students: "3K+", courses: "30+" }
//     },
//     {
//       title: "Cloud & DevOps Mastery",
//       subtitle: "AWS, Azure, Docker & Kubernetes",
//       description: "Learn to deploy, scale, and manage modern cloud infrastructure",
//       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
//       stats: { students: "4K+", courses: "40+" }
//     }
//   ];

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, slides.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {slides.map((slide, index) => {
//         const isActive = index === currentSlide;
//         return (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-10'
//               }`}
//           >
//             <div className="absolute inset-0">
//               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
//             </div>
//             <div className="relative z-10 h-full flex items-center">
//               <div className="container mx-auto px-6 md:px-12 lg:px-24">
//                 <div className="max-w-3xl">
//                   <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
//                     }`}>
//                     {slide.title}
//                   </h1>
//                   <h2 className={`text-2xl md:text-3xl text-blue-400 font-semibold mb-6 transform transition-all duration-1000 delay-400 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
//                     }`}>
//                     {slide.subtitle}
//                   </h2>
//                   <p className={`text-lg md:text-xl text-gray-200 mb-10 leading-relaxed transform transition-all duration-1000 delay-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
//                     }`}>
//                     {slide.description}
//                   </p>
//                   <div className={`flex flex-wrap gap-6 mb-10 transform transition-all duration-1000 delay-600 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
//                     }`}>
//                     {Object.entries(slide.stats).map(([key, value]) => (
//                       <div key={key} className="bg-white/10 backdrop-blur-md rounded-xl px-8 py-4 border border-white/20">
//                         <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
//                         <div className="text-sm md:text-base text-gray-300 capitalize">{key}</div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className={`transform transition-all duration-1000 delay-700 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
//                     }`}>
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
//                       Start Learning Today
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <button onClick={prevSlide} className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30">
//         <ChevronLeft className="w-8 h-8" strokeWidth={2.5} />
//       </button>
//       <button onClick={nextSlide} className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30">
//         <ChevronRight className="w-8 h-8" strokeWidth={2.5} />
//       </button>
//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`transition-all duration-500 rounded-full ${index === currentSlide ? 'bg-white w-16 h-4 shadow-lg' : 'bg-white/40 hover:bg-white/60 w-4 h-4'
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Main Home Component
// const Home = () => {
//   const features = [
//     {
//       icon: Users,
//       title: "Expert Instructors",
//       description: "Learn from industry professionals with 10+ years of real-world experience"
//     },
//     {
//       icon: BookOpen,
//       title: "Comprehensive Curriculum",
//       description: "Structured courses covering everything from basics to advanced concepts"
//     },
//     {
//       icon: Trophy,
//       title: "Industry Certifications",
//       description: "Earn recognized certifications that boost your career prospects"
//     },
//     {
//       icon: Clock,
//       title: "Flexible Learning",
//       description: "Study at your own pace with lifetime access to course materials"
//     },
//     {
//       icon: Briefcase,
//       title: "Job Assistance",
//       description: "Get career guidance, resume reviews, and interview preparation"
//     },
//     {
//       icon: Target,
//       title: "Hands-on Projects",
//       description: "Build real-world projects to showcase in your portfolio"
//     }
//   ];

//   const courses = [
//     {
//       title: "Full Stack Web Development",
//       duration: "6 Months",
//       level: "Beginner to Advanced",
//       students: "2,500+",
//       rating: 4.8,
//       image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
//       tags: ["React", "Node.js", "MongoDB", "Express"]
//     },
//     {
//       title: "Python & AI/ML",
//       duration: "5 Months",
//       level: "Intermediate",
//       students: "1,800+",
//       rating: 4.9,
//       image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
//       tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"]
//     },
//     {
//       title: "Cloud DevOps Engineering",
//       duration: "4 Months",
//       level: "Intermediate to Advanced",
//       students: "1,500+",
//       rating: 4.7,
//       image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
//       tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]
//     },
//     {
//       title: "Mobile App Development",
//       duration: "5 Months",
//       level: "Beginner to Advanced",
//       students: "1,200+",
//       rating: 4.8,
//       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
//       tags: ["React Native", "Flutter", "iOS", "Android"]
//     }
//   ];

//   const stats = [
//     { icon: Users, value: "15,000+", label: "Active Students" },
//     { icon: BookOpen, value: "120+", label: "Courses Offered" },
//     { icon: Award, value: "95%", label: "Success Rate" },
//     { icon: Globe, value: "50+", label: "Countries" }
//   ];

//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       role: "Full Stack Developer at Google",
//       content: "The instructors are phenomenal! I landed my dream job at Google within 3 months of completing the Full Stack course. The hands-on projects were invaluable.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
//     },
//     {
//       name: "Rahul Verma",
//       role: "ML Engineer at Microsoft",
//       content: "Best investment in my career. The AI/ML course was comprehensive and the instructors were always available for doubt clearing. Highly recommended!",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
//     },
//     {
//       name: "Sneha Patel",
//       role: "DevOps Engineer at Amazon",
//       content: "The practical approach to teaching made all the difference. I went from zero DevOps knowledge to deploying production applications in just 4 months.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Carousel */}
//       <Carousel />

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={index} className="text-center group">
//                   <div className="inline-flex p-6 bg-blue-600/10 rounded-2xl mb-4 group-hover:bg-blue-600/20 transition-all duration-300">
//                     <Icon className="w-12 h-12 text-blue-400" />
//                   </div>
//                   <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
//                   <div className="text-gray-400 text-lg">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-slate-800">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               We provide everything you need to succeed in your tech career
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105">
//                   <div className="inline-flex p-4 bg-blue-600/10 rounded-xl mb-6 group-hover:bg-blue-600/20 transition-all">
//                     <Icon className="w-8 h-8 text-blue-400" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
//                   <p className="text-gray-400 leading-relaxed">{feature.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Popular Courses */}
//       <section className="py-20 bg-slate-900">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Popular Courses</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Master in-demand skills with our industry-leading programs
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {courses.map((course, index) => (
//               <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105">
//                 <div className="relative h-48 overflow-hidden">
//                   <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     {course.level}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
//                   <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
//                     <span className="flex items-center gap-1">
//                       <Clock className="w-4 h-4" />
//                       {course.duration}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Users className="w-4 h-4" />
//                       {course.students}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-1 mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
//                     ))}
//                     <span className="text-gray-400 text-sm ml-2">{course.rating}</span>
//                   </div>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {course.tags.slice(0, 3).map((tag, i) => (
//                       <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
//                     Enroll Now
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-slate-800">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Student Success Stories</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Hear from our graduates who transformed their careers
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
//                 <div className="flex items-center gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
//                 <div className="flex items-center gap-4">
//                   <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
//                   <div>
//                     <div className="font-semibold text-white">{testimonial.name}</div>
//                     <div className="text-sm text-gray-400">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
//           <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//             Join thousands of students who have transformed their careers with our expert-led courses
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300">
//               Browse All Courses
//             </button>
//             <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
//               Talk to an Advisor
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Learning Path Section */}
//       <section className="py-20 bg-slate-900">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Your Learning Journey</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               A structured path from beginner to professional
//             </p>
//           </div>
//           <div className="max-w-4xl mx-auto">
//             <div className="space-y-8">
//               {[
//                 {
//                   step: "01",
//                   title: "Choose Your Course",
//                   description: "Browse our comprehensive catalog and select the program that aligns with your career goals",
//                   icon: Target
//                 },
//                 {
//                   step: "02",
//                   title: "Learn & Practice",
//                   description: "Engage with interactive lessons, hands-on projects, and real-world assignments",
//                   icon: BookOpen
//                 },
//                 {
//                   step: "03",
//                   title: "Build Your Portfolio",
//                   description: "Create industry-standard projects that showcase your skills to potential employers",
//                   icon: Code
//                 },
//                 {
//                   step: "04",
//                   title: "Get Certified & Hired",
//                   description: "Earn your certification and leverage our job assistance program to land your dream role",
//                   icon: Briefcase
//                 }
//               ].map((item, index) => {
//                 const Icon = item.icon;
//                 return (
//                   <div key={index} className="flex gap-8 items-start group">
//                     <div className="flex-shrink-0">
//                       <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center border-2 border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
//                         <span className="text-2xl font-bold text-blue-400 group-hover:text-white transition-colors">
//                           {item.step}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex-1 bg-slate-800 p-8 rounded-2xl border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
//                       <div className="flex items-start gap-4">
//                         <div className="flex-1">
//                           <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
//                           <p className="text-gray-400 leading-relaxed">{item.description}</p>
//                         </div>
//                         <div className="p-3 bg-blue-600/10 rounded-xl group-hover:bg-blue-600/20 transition-all">
//                           <Icon className="w-6 h-6 text-blue-400" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technologies Section */}
//       <section className="py-20 bg-slate-800">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Technologies We Teach</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Master the most in-demand technologies in the industry
//             </p>
//           </div>
//           <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
//             {[
//               { name: "React", color: "from-blue-400 to-cyan-400" },
//               { name: "Python", color: "from-yellow-400 to-blue-500" },
//               { name: "Node.js", color: "from-green-400 to-green-600" },
//               { name: "AWS", color: "from-orange-400 to-orange-600" },
//               { name: "Docker", color: "from-blue-500 to-blue-700" },
//               { name: "MongoDB", color: "from-green-500 to-green-700" },
//               { name: "TypeScript", color: "from-blue-600 to-blue-800" },
//               { name: "TensorFlow", color: "from-orange-500 to-yellow-500" },
//               { name: "Angular", color: "from-red-500 to-red-700" },
//               { name: "Vue.js", color: "from-green-400 to-emerald-600" },
//               { name: "Kubernetes", color: "from-blue-400 to-indigo-600" },
//               { name: "PostgreSQL", color: "from-blue-600 to-blue-800" }
//             ].map((tech, index) => (
//               <div key={index} className="group">
//                 <div className={`bg-gradient-to-br ${tech.color} p-8 rounded-2xl text-center transform group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
//                   <div className="text-white font-bold text-lg">{tech.name}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-slate-900">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Everything you need to know about our courses
//             </p>
//           </div>
//           <div className="max-w-3xl mx-auto space-y-4">
//             {[
//               {
//                 question: "Do I need prior programming experience?",
//                 answer: "No! Our beginner courses start from the basics and gradually build up your skills. We have courses for all levels."
//               },
//               {
//                 question: "What is the duration of the courses?",
//                 answer: "Course duration varies from 3 to 6 months depending on the program. You can learn at your own pace with lifetime access."
//               },
//               {
//                 question: "Will I get a certificate after completion?",
//                 answer: "Yes! You'll receive an industry-recognized certificate upon successfully completing the course and projects."
//               },
//               {
//                 question: "Do you provide job placement assistance?",
//                 answer: "Absolutely! We offer resume reviews, mock interviews, and connections with our hiring partners to help you land your dream job."
//               },
//               {
//                 question: "Can I access course materials after completion?",
//                 answer: "Yes! You get lifetime access to all course materials, including updates and new content added in the future."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
//                 <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-400 leading-relaxed pl-9">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Carousel */}
      <Carousel />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Popular Courses */}
      <CoursesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Learning Path Section */}
      <LearningPathSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;