import React, { useState } from 'react';
import { Briefcase, TrendingUp, Award, Building2, DollarSign, Users, ChevronRight, MapPin, Calendar, Target, Sparkles, CheckCircle2 } from 'lucide-react';

const Placement = () => {
  const [activeTab, setActiveTab] = useState('companies');

  const stats = [
    { icon: Briefcase, label: 'Placement Rate', value: '96%', color: 'from-blue-500 to-cyan-500' },
    { icon: Building2, label: 'Partner Companies', value: '500+', color: 'from-purple-500 to-pink-500' },
    { icon: DollarSign, label: 'Highest Package', value: '₹45 LPA', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, label: 'Average Package', value: '₹8.5 LPA', color: 'from-orange-500 to-red-500' }
  ];

  const topCompanies = [
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&q=80', positions: 45, package: '₹35-45 LPA' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&q=80', positions: 38, package: '₹30-42 LPA' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&q=80', positions: 52, package: '₹28-40 LPA' },
    { name: 'Meta', logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&q=80', positions: 28, package: '₹32-45 LPA' },
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=100&q=80', positions: 22, package: '₹35-43 LPA' },
    { name: 'Netflix', logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=100&q=80', positions: 18, package: '₹30-38 LPA' },
    { name: 'Adobe', logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&q=80', positions: 25, package: '₹25-35 LPA' },
    { name: 'Salesforce', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&q=80', positions: 30, package: '₹22-32 LPA' }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
      role: 'Senior Software Engineer',
      company: 'Google',
      package: '₹42 LPA',
      course: 'Full Stack Development',
      testimonial: 'The placement support was exceptional. Mock interviews and resume workshops prepared me perfectly for top tech companies.'
    },
    {
      name: 'Rahul Verma',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
      role: 'ML Engineer',
      company: 'Microsoft',
      package: '₹38 LPA',
      course: 'AI/ML Specialization',
      testimonial: 'From zero coding knowledge to landing my dream job - this journey has been transformative!'
    },
    {
      name: 'Ananya Patel',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
      role: 'DevOps Engineer',
      company: 'Amazon',
      package: '₹35 LPA',
      course: 'Cloud DevOps',
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

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">CAREER SUCCESS</span>
          </div>
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Placement Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of successful graduates who landed their dream jobs at top tech companies
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('companies')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'companies'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800 text-gray-400 hover:text-white border border-slate-700'
              }`}
          >
            Top Recruiters
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'stories'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800 text-gray-400 hover:text-white border border-slate-700'
              }`}
          >
            Success Stories
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'process'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800 text-gray-400 hover:text-white border border-slate-700'
              }`}
          >
            Our Process
          </button>
        </div>

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topCompanies.map((company, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{company.name}</h3>
                    <p className="text-gray-500 text-sm">Tech Giant</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Open Positions</span>
                    <span className="text-white font-semibold">{company.positions}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Package Range</span>
                    <span className="text-green-400 font-semibold">{company.package}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
                  View Details
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === 'stories' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{story.name}</h3>
                    <p className="text-blue-400 font-semibold">{story.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-700">
                    <div>
                      <p className="text-gray-400 text-sm">Company</p>
                      <p className="text-white font-semibold">{story.company}</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-gray-400 text-sm">Package</p>
                      <p className="text-green-400 font-bold text-lg">{story.package}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 text-sm">{story.course}</span>
                  </div>
                  <p className="text-gray-400 text-sm italic">"{story.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placementProcess.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2 group relative">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mt-2">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <CheckCircle2 className="w-5 h-5 text-green-400 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our placement program and get guaranteed interview opportunities with top companies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Get Placement Support
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;