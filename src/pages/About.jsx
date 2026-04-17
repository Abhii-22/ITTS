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
      color: "red"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously evolving our methods and curriculum",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Excellence in everything we do, no compromises",
      color: "blue"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Building trust through transparency and accountability",
      color: "green"
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Creating opportunities for everyone, everywhere",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Adapting quickly to industry changes and needs",
      color: "orange"
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
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slat5e-900 via-blue-900/20 to-slate-900"></div>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Education background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-blue-400 font-semibold text-sm">About ITTS</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Transforming Lives Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Technology Education</span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            We're on a mission to make world-class tech education accessible to everyone, 
            everywhere. Join 50,000+ students building their dream careers.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Journey <Rocket className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-800 border-t border-slate-700 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
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
                  <div className="inline-flex p-4 bg-slate-900 border border-slate-700 rounded-full mb-4 group-hover:bg-blue-500/20 group-hover:border-blue-400 transition-all">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                  </div>
                  <div 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors"
                    data-stat-index={index}
                  >
                    {countedStats[index] ? stat.value : '0'}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 md:py-24 bg-black px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Purpose</h2>
            <p className="text-lg md:text-xl text-gray-400">Driving change through education and innovation</p>
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
                  className={`group relative overflow-hidden rounded-3xl border-2 transition-all duration-500 ${
                    item.id === 'mission' 
                      ? 'border-blue-500 bg-gradient-to-br from-slate-800 via-blue-900/20 to-slate-800 shadow-2xl shadow-blue-500/20' 
                      : 'border-cyan-500 bg-gradient-to-br from-slate-800 via-cyan-900/20 to-slate-800 shadow-2xl shadow-cyan-500/20'
                  } hover:scale-105`}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.id === 'mission' ? 'from-blue-600/10 via-cyan-500/5 to-blue-600/10' : 'from-cyan-600/10 via-teal-500/5 to-cyan-600/10'} opacity-50 transition-opacity duration-500`}></div>
                  
                  {/* Background image with overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-10 transition-opacity duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.id === 'mission' ? 'from-blue-900/20 to-transparent' : 'from-cyan-900/20 to-transparent'} opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Floating orbs decoration */}
                  <div className={`absolute top-4 right-4 w-20 h-20 ${item.id === 'mission' ? 'bg-blue-500/10' : 'bg-cyan-500/10'} rounded-full blur-xl transition-colors duration-500`}></div>
                  <div className={`absolute bottom-4 left-4 w-16 h-16 ${item.id === 'mission' ? 'bg-cyan-500/10' : 'bg-cyan-500/10'} rounded-full blur-lg transition-colors duration-500`}></div>
                  
                  <div className="relative p-8 md:p-10">
                    {/* Icon and title section */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`relative p-4 rounded-2xl border-2 transition-all duration-500 ${
                        item.id === 'mission' 
                          ? 'bg-blue-500/20 border-blue-400 group-hover:bg-blue-500/30 group-hover:border-blue-300 group-hover:scale-110' 
                          : 'bg-cyan-500/20 border-cyan-400 group-hover:bg-cyan-500/30 group-hover:border-cyan-300 group-hover:scale-110'
                      }`}>
                        <Icon className={`w-6 h-6 md:w-8 md:h-8 ${item.id === 'mission' ? 'text-blue-300' : 'text-cyan-300'}`} />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className={`h-1 w-16 rounded-full transition-all duration-500 ${
                          item.id === 'mission' ? 'bg-blue-400' : 'bg-cyan-400'
                        } opacity-100`}></div>
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <p className="text-gray-200 mb-6 leading-relaxed text-lg group-hover:text-gray-100 transition-colors duration-300">
                      {item.content}
                    </p>
                    
                    {/* Always visible details section */}
                    <div className="pt-6 border-t border-slate-700/50">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        Key Focus Areas
                      </h4>
                      <ul className="space-y-3">
                        {item.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-3 group/item">
                            <div className={`mt-1 p-1 rounded-full transition-all duration-300 ${
                              item.id === 'mission' 
                                ? 'bg-blue-500/30 group-hover/item:bg-blue-500/40' 
                                : 'bg-cyan-500/30 group-hover/item:bg-cyan-500/40'
                            }`}>
                              <CheckCircle className={`w-4 h-4 ${item.id === 'mission' ? 'text-blue-300' : 'text-cyan-300'}`} />
                            </div>
                            <span className="text-gray-200 text-sm leading-relaxed group-hover/item:text-gray-100 transition-colors duration-300">
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

      {/* Our Story */}
      <section className="py-16 sm:py-20 md:py-24 bg-black border-t border-slate-700 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-blue-400 font-semibold text-sm">Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">From a small classroom to transforming thousands of careers through technology education</p>
          </motion.div>

          {/* Story Hero */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden mb-16 border border-slate-700 shadow-2xl"
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{story.hero.title}</h3>
                <p className="text-gray-300 mb-6 max-w-2xl text-lg">{story.hero.subtitle}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {story.hero.stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Timeline */}
          <div ref={timelineRef} className="relative max-w-6xl mx-auto" data-timeline>
            {/* Enhanced vertical line with glow effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-500 to-cyan-400 opacity-50"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-300 shadow-lg shadow-blue-500/50"></div>
            
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
                {/* Enhanced center dot with glow */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-800 shadow-xl shadow-blue-500/50">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                    </div>
                    <div className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full blur-xl opacity-50 animate-ping"></div>
                  </div>
                </div>
                
                {/* Enhanced Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'ml-auto pl-12'}`}>
                  <motion.div 
                    className={`group relative bg-gradient-to-br ${index % 2 === 0 ? 'from-slate-800/90 to-blue-900/30' : 'from-slate-800/90 to-purple-900/30'} backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden hover:border-blue-500/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}
                    whileHover={{ y: -5 }}
                  >
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500/10 via-purple-400/10 to-cyan-500/10' : 'from-purple-500/10 via-pink-400/10 to-blue-500/10'} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                      
                      {/* Enhanced year badge with glow */}
                      <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 backdrop-blur-md rounded-full shadow-xl shadow-blue-500/40 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{event.year}</span>
                      </div>
                      
                      {/* Enhanced icon indicator */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-500/40 group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                        <Calendar className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                      </div>
                    </div>
                    
                    <div className="p-6 relative">
                      {/* Enhanced title with gradient */}
                      <h3 className={`text-xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'text-white group-hover:text-blue-300' : 'text-white group-hover:text-purple-300'}`}>{event.title}</h3>
                      
                      {/* Enhanced description */}
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">{event.description}</p>
                      
                      {/* Enhanced button */}
                      <motion.button
                        onClick={() => setExpandedStory(expandedStory === index ? null : index)}
                        className={`inline-flex items-center gap-2 px-4 py-2 ${index % 2 === 0 ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400' : 'bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400'} rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedStory === index ? 'Show less' : 'Learn more'}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedStory === index ? 'rotate-180' : ''}`} />
                      </motion.button>
                      
                      {/* Enhanced expanded content */}
                      {expandedStory === index && (
                        <motion.div 
                          className="mt-4 pt-4 border-t border-slate-700"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 border ${index % 2 === 0 ? 'border-blue-500/30' : 'border-purple-500/30'}`}>
                            <p className="text-gray-300 leading-relaxed text-sm mb-3">{event.details}</p>
                            <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'text-blue-400' : 'text-purple-400'} text-xs`}>
                              <Sparkles className="w-3 h-3" />
                              <span>Key milestone in our journey</span>
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
      <section className="py-16 sm:py-20 md:py-24 bg-black px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-blue-400 font-semibold text-sm">Core Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">The fundamental principles that guide our decisions and shape our culture</p>
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
                  className="group relative bg-gray-800 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/20 overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative p-8">
                    {/* Icon with enhanced design */}
                    <div className="relative mb-6 inline-block">
                      <div className="relative p-4 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Enhanced title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                      {value.title}
                    </h3>
                    
                    {/* Enhanced description */}
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                      {value.description}
                    </p>
                    
                    {/* Decorative bottom line */}
                    <div className="mt-6 h-1 w-16 rounded-full bg-gray-700 group-hover:bg-gray-500 group-hover:w-24 transition-all duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      {/* Achievements */}
      <section className="py-16 sm:py-20 md:py-24 bg-black px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Achievements & Recognition</h2>
            <p className="text-lg md:text-xl text-gray-400">Celebrating our milestones and industry recognition</p>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div key={index} variants={fadeInUp} className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-900 border border-gray-600 rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                      <p className="text-gray-300 font-semibold mb-2">{achievement.subtitle}</p>
                      <p className="text-gray-400 mb-3">{achievement.description}</p>
                      <div className="text-sm font-semibold text-gray-200 bg-gray-900 px-3 py-1 rounded-lg inline-block">
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

      {/* Impact Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black border-t border-slate-700 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-lg md:text-xl text-gray-400">Numbers that tell our story of transformation</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {impact.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{item.number}</div>
                <div className="text-xl font-bold text-white mb-1">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-black px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Join 50,000+ students who have already started their journey to successful tech careers. 
              Your future in technology starts here.
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 flex items-center justify-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Start Learning Today <Rocket className="w-5 h-5" />
              </motion.button>
              <motion.button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-bold transition-all" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Talk to an Advisor
              </motion.button>
            </motion.div>
            
            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeInUp} className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-gray-400 text-sm">hello@itts.com</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-gray-400 text-sm">+1 (555) 123-4567</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-gray-400 text-sm">Global Campuses</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;