import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  TrendingUp,
  Award,
  Building2,
  DollarSign,
  Users,
  ChevronRight,
  Target,
  Sparkles,
  CheckCircle2,
  Calendar,
  MapPin,
  Clock,
  ArrowUpRight,
  Star,
  Download,
  Filter,
  Search,
  X
} from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Placement Rate', value: '96%', color: 'from-blue-500 to-cyan-500', suffix: '%' },
  { icon: Building2, label: 'Partner Companies', value: '500', color: 'from-purple-500 to-pink-500', suffix: '+' },
  { icon: DollarSign, label: 'Highest Package', value: '45', color: 'from-green-500 to-emerald-500', suffix: ' LPA', prefix: '₹' },
  { icon: TrendingUp, label: 'Average Package', value: '8.5', color: 'from-orange-500 to-red-500', suffix: ' LPA', prefix: '₹' }
];

const topCompanies = [
  { name: 'Google', category: 'Tech Giant', positions: 45, package: '₹35-45 LPA', hiring: true, remote: true },
  { name: 'Microsoft', category: 'Tech Giant', positions: 38, package: '₹30-42 LPA', hiring: true, remote: true },
  { name: 'Amazon', category: 'E-Commerce', positions: 52, package: '₹28-40 LPA', hiring: true, remote: false },
  { name: 'Meta', category: 'Social Media', positions: 28, package: '₹32-45 LPA', hiring: false, remote: true },
  { name: 'Apple', category: 'Tech Giant', positions: 22, package: '₹35-43 LPA', hiring: true, remote: false },
  { name: 'Netflix', category: 'Streaming', positions: 18, package: '₹30-38 LPA', hiring: true, remote: true },
  { name: 'Adobe', category: 'Software', positions: 25, package: '₹25-35 LPA', hiring: true, remote: true },
  { name: 'Salesforce', category: 'Cloud', positions: 30, package: '₹22-32 LPA', hiring: false, remote: true }
];

const successStories = [
  {
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
    role: 'Senior Software Engineer',
    company: 'Google',
    package: '₹42 LPA',
    course: 'Full Stack Development',
    rating: 5,
    duration: '6 months',
    testimonial: 'The placement support was exceptional. Mock interviews and resume workshops prepared me perfectly for top tech companies.'
  },
  {
    name: 'Rahul Verma',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    role: 'ML Engineer',
    company: 'Microsoft',
    package: '₹38 LPA',
    course: 'AI/ML Specialization',
    rating: 5,
    duration: '8 months',
    testimonial: 'From zero coding knowledge to landing my dream job - this journey has been transformative!'
  },
  {
    name: 'Ananya Patel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
    role: 'DevOps Engineer',
    company: 'Amazon',
    package: '₹35 LPA',
    course: 'Cloud DevOps',
    rating: 5,
    duration: '5 months',
    testimonial: 'The hands-on projects and industry mentorship gave me the confidence to crack interviews at top companies.'
  }
];

const placementProcess = [
  { step: 1, title: 'Resume Building', description: 'Professional resume creation with ATS optimization', icon: Award },
  { step: 2, title: 'Mock Interviews', description: 'Practice sessions with industry experts', icon: Users },
  { step: 3, title: 'Skill Assessment', description: 'Technical and soft skills evaluation', icon: Target },
  { step: 4, title: 'Company Matching', description: 'AI-powered job matching algorithm', icon: Sparkles },
  { step: 5, title: 'Interview Prep', description: 'Company-specific preparation guides', icon: Briefcase },
  { step: 6, title: 'Offer Support', description: 'Salary negotiation and offer evaluation', icon: TrendingUp }
];

const AnimatedStat = ({ icon: Icon, value, label, color, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseFloat(value);
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        start = numericValue;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <div ref={ref} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 group">
      <div className={`w-14 h-14 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-4xl font-bold text-white mb-2">
        {prefix}{count.toFixed(value.includes('.') ? 1 : 0)}{suffix}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
    </div>
  );
};

const Placement = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterHiring, setFilterHiring] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const filteredCompanies = topCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterHiring || company.hiring;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm hover:bg-green-500/20 transition-all">
            <Briefcase className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-semibold tracking-wider">CAREER SUCCESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Placement Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful graduates who landed their dream jobs at top tech companies
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} {...stat} />
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('companies')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'companies'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
              : 'bg-slate-800/50 backdrop-blur-sm text-gray-400 hover:text-white border border-slate-700 hover:border-slate-600'
              }`}
          >
            <Users className="w-5 h-5" />
            Top Recruiters
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'stories'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
              : 'bg-slate-800/50 backdrop-blur-sm text-gray-400 hover:text-white border border-slate-700 hover:border-slate-600'
              }`}
          >
            <Star className="w-5 h-5" />
            Success Stories
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'process'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
              : 'bg-slate-800/50 backdrop-blur-sm text-gray-400 hover:text-white border border-slate-700 hover:border-slate-600'
              }`}
          >
            <Sparkles className="w-5 h-5" />
            Our Process
          </button>
        </div>

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <div className="mb-12">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
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
              <button
                onClick={() => setFilterHiring(!filterHiring)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${filterHiring
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-gray-400 hover:text-white'
                  }`}
              >
                <Filter className="w-5 h-5" />
                Actively Hiring
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCompanies.map((company, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer"
                  onClick={() => setSelectedCompany(company)}
                >
                  {company.hiring && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      Hiring
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-blue-600">
                        {company.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{company.category}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Open Positions</span>
                      <span className="text-white font-semibold bg-slate-700 px-2 py-1 rounded">{company.positions}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Package Range</span>
                      <span className="text-green-400 font-semibold">{company.package}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {company.remote && (
                        <span className="flex items-center gap-1 text-purple-400">
                          <MapPin className="w-3 h-3" />
                          Remote
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="w-full bg-slate-700 hover:bg-blue-600 text-white py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {filteredCompanies.length === 0 && (
              <div className="text-center py-12">
                <Building2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No companies found matching your criteria</p>
              </div>
            )}
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === 'stories' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Placed
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{story.name}</h3>
                    <p className="text-blue-300 font-medium">{story.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-700">
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Company</p>
                      <p className="text-white font-semibold">{story.company}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Package</p>
                      <p className="text-green-400 font-bold text-lg">{story.package}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Clock className="w-3 h-3" />
                      {story.duration}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 text-sm">{story.course}</span>
                  </div>
                  <p className="text-gray-400 text-sm italic leading-relaxed">"{story.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placementProcess.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 group relative"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mt-2 shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  <CheckCircle2 className="w-5 h-5 text-green-400 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Process Timeline */}
            <div className="mt-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Journey Timeline</h3>
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                {placementProcess.slice(0, 6).map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {item.step}
                      </div>
                      <p className="text-xs text-gray-400 mt-2 text-center max-w-[80px]">{item.title}</p>
                    </div>
                    {idx < 5 && (
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Company Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setSelectedCompany(null)}>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full p-8 border border-slate-700 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">{selectedCompany.name.charAt(0)}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCompany.name}</h3>
                  <p className="text-gray-400">{selectedCompany.category}</p>
                </div>
              </div>
              <button onClick={() => setSelectedCompany(null)} className="text-gray-400 hover:text-white transition-colors">
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
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                Apply Now
              </button>
              <button className="flex-1 bg-slate-700 text-white py-3 rounded-xl font-bold hover:bg-slate-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};





export default Placement;