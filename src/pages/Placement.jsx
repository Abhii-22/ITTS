import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users, Award, Target, Briefcase, Building2, TrendingUp, DollarSign,
  ArrowRight, ChevronDown, CheckCircle, Globe, MapPin, Clock,
  Calendar, Zap, Shield, Rocket, Sparkles, Trophy, Phone, Mail,
  Linkedin, Twitter, Filter, Search, X
} from 'lucide-react';

const Placement = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterHiring, setFilterHiring] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [countedStats, setCountedStats] = useState({});

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

  // Handle counting animation when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countedStats[entry.target.dataset.statIndex]) {
            const index = entry.target.dataset.statIndex;
            const statValue = placementStats[index].value;
            
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
                : statValue.includes('LPA')
                ? `₹${Math.floor(count)}LPA`
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

  const placementStats = [
    { icon: Users, value: "10,000+", label: "Students Placed" },
    { icon: Building2, value: "500+", label: "Partner Companies" },
    { icon: Award, value: "96%", label: "Success Rate" },
    { icon: TrendingUp, value: "8.5LPA", label: "Average Package" }
  ];

  const topCompanies = [
    { 
      name: 'Google', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    { 
      name: 'Meta', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
    },
    { 
      name: 'Apple', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    { 
      name: 'Netflix', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg'
    },
    { 
      name: 'Adobe', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Adobe_Corporate_logo.svg'
    },
    { 
      name: 'Salesforce', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'
    },
    { 
      name: 'IBM', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
    },
    { 
      name: 'Oracle', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Oracle_logo.svg'
    },
    { 
      name: 'Intel', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg'
    },
    { 
      name: 'Cisco', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg'
    }
  ];

  const placementProcess = [
    { 
      step: 1, 
      title: 'Resume Building', 
      description: 'Professional resume creation with ATS optimization', 
      icon: Award,
      details: 'Industry-specific templates, keyword optimization, and professional formatting'
    },
    { 
      step: 2, 
      title: 'Skill Assessment', 
      description: 'Technical and soft skills evaluation', 
      icon: Target,
      details: 'Comprehensive testing and personalized feedback on core competencies'
    },
    { 
      step: 3, 
      title: 'Mock Interviews', 
      description: 'Practice sessions with industry experts', 
      icon: Users,
      details: 'Real interview simulations with detailed performance analysis'
    },
    { 
      step: 4, 
      title: 'Company Matching', 
      description: 'AI-powered job matching algorithm', 
      icon: Sparkles,
      details: 'Smart matching based on skills, preferences, and company requirements'
    },
    { 
      step: 5, 
      title: 'Interview Prep', 
      description: 'Company-specific preparation guides', 
      icon: Briefcase,
      details: 'Tailored preparation materials and insider tips for each company'
    },
    { 
      step: 6, 
      title: 'Offer Support', 
      description: 'Salary negotiation and offer evaluation', 
      icon: TrendingUp,
      details: 'Expert guidance on compensation packages and career decisions'
    }
  ];

  const placementFeatures = [
    {
      icon: Target,
      title: 'Career Counseling',
      description: 'Personalized career guidance based on your skills and interests',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Industry Mentors',
      description: '1-on-1 mentorship from professionals at top companies',
      color: 'purple'
    },
    {
      icon: Briefcase,
      title: 'Internship Opportunities',
      description: 'Guaranteed internship placements with stipend',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Industry-recognized certifications to boost your profile',
      color: 'yellow'
    },
    {
      icon: Building2,
      title: 'Campus Recruitment',
      description: 'Regular campus drives with 100+ companies',
      color: 'red'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous support for career advancement',
      color: 'orange'
    }
  ];

  const filteredCompanies = topCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-green-400 font-semibold text-sm">CAREER SUCCESS</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Placement
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Excellence</span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Join thousands of successful graduates who landed their dream jobs at top tech companies
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
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
            {placementStats.map((stat, index) => {
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

      {/* Tab Navigation */}
      <section className="py-16 sm:py-20 bg-slate-900 border-t border-slate-700 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Explore Opportunities</h2>
            <p className="text-lg md:text-xl text-gray-400">Discover your path to success</p>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4 mb-12 flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {['companies', 'process', 'features'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-slate-800/50 backdrop-blur-sm text-gray-400 hover:text-white border border-slate-700 hover:border-slate-600'
                }`}
                whileHover={{ scale: activeTab === tab ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab === 'companies' && <Users className="w-5 h-5" />}
                {tab === 'process' && <Sparkles className="w-5 h-5" />}
                {tab === 'features' && <Target className="w-5 h-5" />}
                {tab === 'companies' && 'Top Recruiters'}
                {tab === 'process' && 'Our Process'}
                {tab === 'features' && 'Placement Features'}
              </motion.button>
            ))}
          </motion.div>

          {/* Companies Tab */}
          {activeTab === 'companies' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {/* Search and Filter */}
              <div className="flex justify-center mb-8 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCompanies.map((company, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {company.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredCompanies.length === 0 && (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <Building2 className="w-20 h-20 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg mb-2">No companies found</p>
                  <p className="text-gray-500 text-sm">Try adjusting your search criteria</p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Process Tab */}
          {activeTab === 'process' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {placementProcess.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      <div className="w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
                      <p className="text-gray-500 text-xs italic">{item.details}</p>
                      <CheckCircle className="w-5 h-5 text-green-400 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Process Timeline */}
              <motion.div 
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Journey Timeline</h3>
                <div className="flex items-center justify-between max-w-4xl mx-auto">
                  {placementProcess.slice(0, 6).map((item, idx) => (
                    <React.Fragment key={idx}>
                      <motion.div 
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {item.step}
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-center max-w-[80px]">{item.title}</p>
                      </motion.div>
                      {idx < 5 && (
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-2"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {placementFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Company Modal */}
      {selectedCompany && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCompany(null)}
        >
          <motion.div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full p-8 border border-slate-700 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src={selectedCompany.logo} 
                    alt={selectedCompany.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCompany.name}</h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCompany(null)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-1">Open Positions</p>
                <p className="text-white text-2xl font-bold">{selectedCompany.positions}</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-1">Package Range</p>
                <p className="text-green-400 text-2xl font-bold">{selectedCompany.package}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button 
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
              </motion.button>
              <motion.button 
                className="flex-1 bg-slate-700 text-white py-3 rounded-xl font-bold hover:bg-slate-600 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Placement;