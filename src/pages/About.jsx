import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heroImage from '../assets/images/hero about.jpeg';
import missionImage from '../assets/images/about1.jpg';
import visionImage from '../assets/images/about4.jpg';
import timelineImage2 from '../assets/images/about2.jpg';
import timelineImage3 from '../assets/images/about3.jpg';
import timelineImage5 from '../assets/images/about5.jpg';
import timelineImage6 from '../assets/images/about6.jpg';
import timelineImage7 from '../assets/images/about7.jpg';

import {
  Users, Award, Target, Heart, Globe, Code, Zap, Shield,
  Rocket, Star, Briefcase, ArrowRight, ChevronDown, Mail, Linkedin, Twitter,
  CheckCircle, TrendingUp, BookOpen, Lightbulb, Brain, Handshake, Eye, MapPin,
  Calendar, Clock, GraduationCap, Building, Sparkles, Trophy, Phone
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [expandedStory, setExpandedStory] = useState(null);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState(new Set());
  const [countedStats, setCountedStats] = useState({});
  const timelineRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Counting animation function
  const animateCount = (target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      return Math.floor(current);
    }, 16);
    
    return timer;
  };

  // Handle counting animation when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countedStats[entry.target.dataset.statIndex]) {
            const index = entry.target.dataset.statIndex;
            const statValue = stats[index].value;
            
            // Extract numeric value from stat string
            const numericValue = parseInt(statValue.replace(/[^0-9]/g, ''));
            
            // Start counting animation
            let count = 0;
            const increment = numericValue / 100;
            const timer = setInterval(() => {
              count += increment;
              if (count >= numericValue) {
                count = numericValue;
                clearInterval(timer);
                setCountedStats(prev => ({ ...prev, [index]: true }));
              }
              entry.target.textContent = statValue.includes('+') 
                ? `${Math.floor(count).toLocaleString()}+` 
                : statValue.includes('%')
                ? `${Math.floor(count)}%`
                : Math.floor(count).toLocaleString();
            }, 20);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statElements = document.querySelectorAll('[data-stat-index]');
    statElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [countedStats]);

  const stats = [
    { icon: Users, value: "10,000+", label: "Students Trained" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Globe, value: "25+", label: "Cities Covered" },
    { icon: TrendingUp, value: "85%", label: "Career Placement" }
  ];

  const missionVision = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: Target,
      content: 'To democratize world-class technology education and empower individuals from all backgrounds to build successful careers in the digital economy.',
      details: [
        'Break down barriers to quality tech education',
        'Provide accessible learning for underserved communities',
        'Bridge the gap between education and industry needs',
        'Create pathways to economic mobility through technology'
      ],
      image: missionImage
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: Eye,
      content: 'A world where anyone, regardless of their background or location, can access the education and opportunities needed to thrive in the technology industry.',
      details: [
        'Global network of tech talent and innovators',
        'Education that adapts to industry evolution',
        'Inclusive tech industry representing global diversity',
        'Lifelong learning ecosystem for continuous growth'
      ],
      image: visionImage
    }
  ];

  const story = {
    hero: {
      title: "From Classroom to Global Impact",
      subtitle: "Our journey began with a simple question: Why should world-class tech education be limited to elite institutions?",
      image: heroImage,
      stats: [
        { label: "Founded", value: "2018" },
        { label: "Students Graduated", value: "50,000+" },
        { label: "Career Transitions", value: "35,000+" },
        { label: "Partner Companies", value: "500+" }
      ]
    },
    timeline: [
      {
        year: "2018",
        title: "The Beginning",
        description: "Founded by tech industry veterans who saw the education gap firsthand",
        details: "Started with just 12 students in a small classroom, driven by the belief that quality tech education should be accessible to everyone, not just those at elite universities.",
        image: timelineImage2
      },
      {
        year: "2019",
        title: "First Milestone",
        description: "Reached 1,000 students and launched our online platform",
        details: "Transitioned from physical classrooms to a hybrid model, reaching students across 5 countries. Our first cohort achieved a 95% job placement rate.",
        image: timelineImage3
      },
      {
        year: "2020",
        title: "Global Expansion",
        description: "Went fully remote and expanded to 25 countries during the pandemic",
        details: "When the world changed, we adapted. Our platform became a lifeline for thousands seeking career transitions during uncertain times.",
        image: timelineImage5
      },
      {
        year: "2022",
        title: "Innovation Leap",
        description: "Launched AI-powered personalized learning paths",
        details: "Introduced our proprietary AI system that adapts to each student's learning style, pace, and career goals, improving completion rates by 40%.",
        image: timelineImage6
      },
      {
        year: "2024",
        title: "Industry Leader",
        description: "Recognized as the world's leading online tech education platform",
        details: "Serving 50,000+ students across 120 countries with partnerships with Fortune 500 companies and innovative startups worldwide.",
        image: timelineImage7
      }
    ]
  };

  const values = [
    {
      icon: Heart,
      title: "Student First",
      description: "Every decision is made with our students' success in mind",
      detailedContent: "We prioritize student needs above all else, ensuring personalized learning paths, dedicated mentorship, and comprehensive support systems. Our success is measured by the achievements and career growth of our students."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously evolving our methods and curriculum",
      detailedContent: "We embrace cutting-edge technologies and teaching methodologies to create dynamic, engaging learning experiences. Our curriculum is constantly updated to reflect industry trends and emerging technologies."
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Excellence in everything we do, no compromises",
      detailedContent: "We maintain the highest standards in education delivery, instructor expertise, and student outcomes. Every course, resource, and interaction is designed to deliver exceptional value and measurable results."
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Building trust through transparency and accountability",
      detailedContent: "We operate with complete transparency in our processes, pricing, and promises. Our accountability ensures we take ownership of our commitments and continuously improve based on feedback."
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Creating opportunities for everyone, everywhere",
      detailedContent: "We believe education should be accessible to all regardless of background, location, or circumstances. Our programs are designed to accommodate diverse learning styles and provide equal opportunities for success."
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Adapting quickly to industry changes and needs",
      detailedContent: "We respond rapidly to evolving industry demands and technological advancements. Our flexible approach allows us to pivot quickly and ensure our students always learn the most relevant, in-demand skills."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Former Google Engineering Director with 15+ years building scalable systems. Passionate about making tech education accessible.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      expertise: ["Leadership", "System Design", "Education"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Amazon Principal Engineer specializing in AI and ML platforms. Architect of our adaptive learning system.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      expertise: ["AI/ML", "Cloud Architecture", "Platform Engineering"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Emily Johnson",
      role: "Head of Education",
      bio: "Former Stanford CS professor who designed curricula for 100,000+ students. Expert in making complex concepts simple.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      expertise: ["Curriculum Design", "Pedagogy", "Assessment"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "David Kim",
      role: "VP of Student Success",
      bio: "Career development expert who helped 10,000+ students land their dream tech jobs. Maintains relationships with 500+ hiring managers.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      expertise: ["Career Coaching", "Networking", "Interview Prep"],
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Excellence in Technical Education",
      subtitle: "National Education Excellence Awards 2024",
      description: "Recognized for outstanding contribution to technical education and skill development in India",
      metric: "Best Technical Institute"
    },
    {
      icon: Rocket,
      title: "Innovation in Digital Learning",
      subtitle: "Digital India Initiative",
      description: "Awarded for pioneering hybrid learning model combining online and classroom education",
      metric: "1000+ Students Trained"
    },
    {
      icon: Star,
      title: "Top Placement Performance",
      subtitle: "Industry Skills Assessment 2024",
      description: "Achieved highest placement rate among technical training institutes in the region",
      metric: "95% Placement Rate"
    },
    {
      icon: Award,
      title: "Quality Education Certification",
      subtitle: "ISO 9001:2015 Certified",
      description: "Internationally recognized for maintaining highest standards in education delivery",
      metric: "ISO Certified"
    }
  ];

  const impact = [
    {
      number: "10,000+",
      label: "Students Trained",
      description: "Across 25+ cities in India"
    },
    {
      number: "85%",
      label: "Job Placement",
      description: "Within 3 months of completion"
    },
    {
      number: "₹4.5L",
      label: "Average Starting Salary",
      description: "For entry-level positions"
    },
    {
      number: "500+",
      label: "Company Partnerships",
      description: "With leading tech companies"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleTimelineItems((prev) => new Set(prev).add(index));
            }, index * 200); // Stagger animations
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('[data-timeline-item]');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Education background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl text-center px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
           
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Transforming Lives Through
            <br />
            <span className="text-gray-700">Technology Education</span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12 font-medium"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            We're on a mission to democratize world-class tech education and empower individuals 
            from all backgrounds to build successful careers in the digital economy. 
            <span className="font-bold text-gray-700"> Join 50,000+ students</span> already transforming their futures.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.button
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  variants={fadeInUp}
                >
                  <div className="inline-flex p-4 bg-white border border-gray-300 rounded-full mb-4 group-hover:bg-gray-50 group-hover:border-gray-400 transition-all shadow-sm">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
                  </div>
                  <div 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
                    data-stat-index={index}
                  >
                    {countedStats[index] ? stat.value : '0'}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-lg md:text-xl text-gray-600">Driving change through education and innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {missionVision.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={idx === 0 ? slideInLeft : slideInRight}
                  className={`group relative overflow-hidden rounded-3xl border-2 transition-all duration-500 bg-gray-100 border-gray-300 shadow-lg hover:scale-105`}
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-gray-50/30 to-gray-100/50 opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Background image with overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-10 transition-opacity duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-200/20 to-transparent opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Floating orbs decoration */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gray-200/30 rounded-full blur-xl transition-colors duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-200/30 rounded-full blur-lg transition-colors duration-500"></div>
                  
                  <div className="relative p-8 md:p-10">
                    {/* Icon and title section */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative p-4 rounded-2xl border-2 transition-all duration-500 bg-gray-100 border-gray-300 group-hover:bg-gray-200 group-hover:border-gray-400 group-hover:scale-110">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="h-1 w-16 rounded-full transition-all duration-500 bg-gray-400 opacity-100"></div>
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                      {item.content}
                    </p>
                    
                    {/* Always visible details section */}
                    <div className="pt-6 border-t border-gray-300/50">
                      <h4 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gray-600" />
                        Key Focus Areas
                      </h4>
                      <ul className="space-y-3">
                        {item.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-3 group/item">
                            <div className="mt-1 p-1 rounded-full transition-all duration-300 bg-gray-100 group-hover/item:bg-gray-200">
                              <CheckCircle className="w-4 h-4 text-gray-600" />
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg md:text-xl text-gray-600">From a classroom to global impact</p>
          </motion.div>

          {/* Story Hero */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden mb-16 border border-gray-300 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="relative h-64 md:h-96">
              <img
                src={story.hero.image}
                alt="Our journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{story.hero.title}</h3>
                <p className="text-gray-100 mb-6 max-w-2xl text-lg">{story.hero.subtitle}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {story.hero.stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-300 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-gray-600 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Timeline */}
          <div ref={timelineRef} className="relative max-w-7xl mx-auto" data-timeline>
            {/* Enhanced vertical line with gray/white gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 opacity-80 rounded-full shadow-lg shadow-gray-300/30">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse"></div>
            </div>
            
            {/* Progress indicator line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full transition-all duration-1000 ease-out" 
                 style={{ height: `${(visibleTimelineItems.size / story.timeline.length) * 100}%` }}>
            </div>
            
            {story.timeline.map((event, index) => (
              <motion.div 
                key={index} 
                className="relative flex items-center mb-16" 
                data-timeline-item 
                data-index={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Enhanced center dot with multiple glow layers */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
                    {/* Middle glow ring */}
                    <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur-lg opacity-60 animate-ping"></div>
                    {/* Core dot */}
                    <div className="relative w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full border-4 border-white shadow-2xl shadow-gray-400/50 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    </div>
                    {/* Rotating ring */}
                    <div className="absolute inset-0 w-10 h-10 border-2 border-gray-300 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                  </div>
                </div>
                
                {/* Enhanced Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8 lg:pr-16 text-right' : 'ml-auto pl-8 lg:pl-16'}`}>
                  <motion.div 
                    className={`group relative bg-gradient-to-br ${index % 2 === 0 ? 'from-white via-gray-50 to-blue-50/50' : 'from-white via-gray-50 to-purple-50/50'} backdrop-blur-xl rounded-3xl border-2 ${index % 2 === 0 ? 'border-blue-200 hover:border-blue-400' : 'border-purple-200 hover:border-purple-400'} overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-lg`}
                    whileHover={{ y: -8, rotateY: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500/5 via-purple-400/5 to-cyan-500/5' : 'from-purple-500/5 via-pink-400/5 to-blue-500/5'} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                      

                      {/* Floating particles */}
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:animate-ping"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 group-hover:animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    
                    <div className="p-8 relative">
                      {/* Enhanced title with gradient */}
                      <h3 className={`text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'text-gray-900 group-hover:text-blue-600' : 'text-gray-900 group-hover:text-purple-600'}`}>{event.title}</h3>
                      
                      {/* Enhanced description */}
                      <p className="text-gray-700 mb-6 leading-relaxed text-base group-hover:text-gray-800 transition-colors duration-300">{event.description}</p>
                      
                      {/* Enhanced button with better styling */}
                      <motion.button
                        onClick={() => setExpandedStory(expandedStory === index ? null : index)}
                        className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 text-gray-700 hover:from-gray-200 hover:to-gray-300 hover:border-gray-400 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg border-2`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedStory === index ? (
                          <>
                            <Eye className="w-4 h-4" />
                            Show less
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-4 h-4" />
                            Learn more
                          </>
                        )}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedStory === index ? 'rotate-180' : ''}`} />
                      </motion.button>
                      
                      {/* Enhanced expanded content */}
                      {expandedStory === index && (
                        <motion.div 
                          className="mt-6 pt-6 border-t border-gray-300"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                          <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-50 to-cyan-50' : 'from-purple-50 to-pink-50'} rounded-2xl p-6 border-2 ${index % 2 === 0 ? 'border-blue-200' : 'border-purple-200'} shadow-inner`}>
                            <p className="text-gray-700 leading-relaxed text-base mb-4">{event.details}</p>
                            <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'text-blue-600' : 'text-purple-600'} text-sm font-semibold`}>
                              <Sparkles className="w-4 h-4" />
                              <span>Key milestone in our journey</span>
                              <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-blue-400' : 'bg-purple-400'} animate-pulse`}></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full mb-6">
              <span className="text-blue-700 font-semibold text-sm">Core Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">The fundamental principles that guide our decisions and shape our culture</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              const gradientColors = {
                red: 'from-red-500 to-pink-500',
                yellow: 'from-yellow-500 to-orange-500',
                blue: 'from-blue-500 to-cyan-500',
                green: 'from-green-500 to-emerald-500',
                purple: 'from-purple-500 to-violet-500',
                orange: 'from-orange-500 to-red-500'
              };

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-gray-100 rounded-3xl border border-gray-300 hover:border-gray-400 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-gray-300/20 overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative p-8">
                    {/* Icon with enhanced design */}
                    <div className="relative mb-6 inline-block">
                      <div className="relative p-4 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-8 h-8 text-gray-700" />
                      </div>
                    </div>
                    
                    {/* Enhanced title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:scale-105 transition-transform duration-300">
                      {value.title}
                    </h3>
                    
                    {/* Enhanced description */}
                    <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300 mb-4">
                      {value.description}
                    </p>
                    
                    {/* Additional detailed content */}
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {value.detailedContent}
                    </p>
                    
                    {/* Decorative bottom line */}
                    <div className="mt-6 h-1 w-16 rounded-full bg-gray-400 group-hover:bg-gray-500 group-hover:w-24 transition-all duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      {/* Achievements */}
      <section className="py-16 sm:py-20 md:py-24 bg-blue-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <p className="text-lg md:text-xl text-gray-600">Celebrating our milestones and industry recognition</p>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div key={index} variants={fadeInUp} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-300 hover:border-gray-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-gray-300/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 border border-gray-300 rounded-xl">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{achievement.title}</h3>
                      <p className="text-gray-700 font-semibold mb-2">{achievement.subtitle}</p>
                      <p className="text-gray-600 mb-3">{achievement.description}</p>
                      <div className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg inline-block">
                        {achievement.metric}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-blue-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Career?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join 50,000+ students who have already started their journey to successful tech careers. 
              Your future in technology starts here.
            </p>
            
            <motion.div className="flex justify-center mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => {
                window.location.href = '/contact';
              }}>
                Start Learning Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;