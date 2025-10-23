import React, { useState } from 'react';
import {
  Users, Award, Target, Heart, Globe, Code, Zap, Shield,
  Rocket, Star, Briefcase, ArrowRight, ChevronDown, Mail, Linkedin, Twitter,
  CheckCircle, TrendingUp, BookOpen, Lightbulb, Brain, Handshake
} from 'lucide-react';

const About = () => {
  const [activeTeam, setActiveTeam] = useState(null);
  const [expandedValue, setExpandedValue] = useState(null);
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  const stats = [
    { icon: Users, value: "15K+", label: "Active Students" },
    { icon: Award, value: "98%", label: "Satisfaction Rate" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: TrendingUp, value: "87%", label: "Job Placement" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We democratize quality tech education, making professional-grade learning accessible to everyone, everywhere.",
      details: "We believe talent is universal, but opportunity isn't. Our mission is to level the playing field and empower the next generation of tech leaders regardless of background or geography."
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Your success is our measure of success. We design every course, feature, and support system around student outcomes.",
      details: "From personalized learning paths to 1-on-1 mentoring, career coaching, and lifetime community access, we're invested in your journey long after graduation."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of industry trends with AI-powered learning, emerging tech specializations, and cutting-edge curriculum.",
      details: "Our curriculum is updated quarterly in partnership with leading tech companies to ensure you're learning what employers actually need right now."
    },
    {
      icon: Shield,
      title: "Rigorous Quality",
      description: "Expert instructors, hands-on projects, and industry partnerships ensure world-class education standards.",
      details: "Every course is peer-reviewed, taught by active industry professionals, and backed by real-world case studies from Fortune 500 companies."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Founded with Vision",
      description: "Started by Silicon Valley tech veterans who saw a critical gap",
      details: "Our founders—a former Google Tech Lead, Amazon Architect, and Microsoft Principal Engineer—identified that traditional education was failing to keep pace with tech industry evolution. They created TechLearn to bridge this gap with practical, industry-relevant education."
    },
    {
      year: "2019",
      title: "Reached 1,000+ Students",
      description: "First major milestone achieved ahead of schedule",
      details: "Our community grew faster than expected as word spread about our unique hands-on approach. Students loved the focus on real projects over theory, leading to 4.9/5 average ratings across all courses."
    },
    {
      year: "2020",
      title: "Pandemic Pivot & Growth",
      description: "Scaled to support remote learners globally",
      details: "When the world went remote, we evolved our platform for seamless online learning. We introduced live mentoring sessions, peer learning groups, and async-friendly content that actually works for global audiences across all time zones."
    },
    {
      year: "2021",
      title: "Expanded to 25+ Countries",
      description: "Launched localized programs and partnerships",
      details: "We established regional partnerships, translated content into 12 languages, and created region-specific career pathways. Our Indian cohorts saw 92% job placement within 3 months of graduation."
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Won Best EdTech Platform Award and featured in top publications",
      details: "Recognized by TechCrunch as a Top 10 Coding Bootcamp and awarded by EdTech Innovation Summit. Our AI-assisted learning platform became industry standard for personalized education."
    },
    {
      year: "2024",
      title: "15K+ Community Milestone",
      description: "Built a thriving global learning ecosystem",
      details: "We're now serving 15,000+ students across 50 countries with 87% job placement rate, 5,000+ successful career transitions, and a vibrant alumni network of tech leaders at companies like Google, Meta, Apple, and emerging startups worldwide."
    }
  ];

  const team = [
    {
      name: "Dr. Anjali Mehta",
      role: "Founder & CEO",
      description: "Former Tech Lead at Google with 15+ years building scalable education systems and mentoring thousands of engineers",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      expertise: ["Leadership", "EdTech", "Engineering Management"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Rohan Kumar",
      role: "CTO & Co-Founder",
      description: "Ex-Amazon architect with expertise in ML-powered platforms serving millions. Led learning platform infrastructure at scale.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      expertise: ["AI/ML", "Architecture", "Cloud Systems"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Priya Desai",
      role: "Head of Curriculum",
      description: "Former Microsoft Principal Engineer who's designed courses for 50,000+ learners. Expert in making complex concepts accessible.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      expertise: ["Curriculum Design", "Full-Stack Dev", "Teaching"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Vikram Patel",
      role: "Director of Student Success",
      description: "Career counselor who's guided 3,000+ students into their dream tech roles. Maintains relationships with 200+ hiring managers.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      expertise: ["Career Dev", "Mentoring", "Recruiting"],
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const achievements = [
    { icon: Award, title: "Best Online Learning Platform", subtitle: "EdTech Awards 2023", detail: "Recognized for innovation in personalized learning" },
    { icon: Rocket, title: "Top 10 Coding Bootcamps", subtitle: "TechCrunch Rankings 2024", detail: "Only remote-first bootcamp in top rankings" },
    { icon: Star, title: "Excellence in EdTech", subtitle: "Industry Innovation Awards 2024", detail: "AI-powered learning platform recognized globally" },
    { icon: Users, title: "Most Trusted EdTech Brand", subtitle: "Customer Choice Awards", detail: "98% satisfaction rate, 4.9/5 average review" }
  ];

  const whyChoose = [
    {
      title: "Industry-Expert Instructors",
      description: "Learn from active professionals at Google, Amazon, Meta, and leading startups. Not retired teachers—people building the future."
    },
    {
      title: "Real-World Projects",
      description: "Build actual applications you can show employers. Our projects are based on real problems solved by our hiring partners."
    },
    {
      title: "Guaranteed Job Support",
      description: "87% placement rate within 6 months. Get interview prep, resume review, and connections with 500+ hiring companies."
    },
    {
      title: "Flexible Learning Paths",
      description: "Self-paced or mentor-led. Full-time, part-time, or accelerated. Learn how it works for your life."
    },
    {
      title: "Lifetime Community Access",
      description: "Your learning doesn't end at graduation. Stay connected with alumni, get updates on new content, and continue growing."
    },
    {
      title: "Career Pivot Support",
      description: "Switching to tech? We have specialized tracks for career changers with extra mentoring and professional development."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-blue-400 font-semibold text-sm">Welcome to TechLearn</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight bg-clip-text">
              Empowering Tech Leaders Worldwide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              We transform passionate learners into job-ready professionals by combining world-class instruction, real projects, and guaranteed career support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-bold transition-all">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer transform hover:scale-105 transition-transform">
                  <div className="inline-flex p-4 bg-slate-900 border border-slate-700 rounded-full mb-4 group-hover:bg-blue-500/20 group-hover:border-blue-400 transition-all">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{stat.value}</div>
                  <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">Why Choose TechLearn?</h2>
            <p className="text-xl text-gray-400">What sets us apart in the crowded EdTech space</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all group">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl w-full border border-slate-600 shadow-2xl"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-5xl font-bold text-white">Our Story</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  In 2018, our founders—tech veterans from Google, Amazon, and Microsoft—witnessed firsthand how traditional education was failing the industry. Students were learning outdated tools, irrelevant frameworks, and theories without practical application.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  They decided to build the education they wished existed: hands-on, current, and directly tied to job readiness. Every course is taught by active engineers solving real problems, ensuring students learn what actually matters.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Today, our 15,000+ graduates are shipping features at startups, architecting systems at Fortune 500s, and building the future of technology. We're just getting started.
                </p>
                <div className="pt-4 flex gap-8">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">5K+</div>
                    <div className="text-gray-400">Career Transitions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">87%</div>
                    <div className="text-gray-400">6-Month Placement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">$65K</div>
                    <div className="text-gray-400">Avg. First Salary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">Principles that guide every decision</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isExpanded = expandedValue === index;
              return (
                <div
                  key={index}
                  onClick={() => setExpandedValue(isExpanded ? null : index)}
                  className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 cursor-pointer transition-all transform hover:scale-105"
                >
                  <div className="inline-flex p-4 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6 group-hover:bg-blue-500/20 transition-all">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{value.description}</p>
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-700 animate-in fade-in duration-300">
                      <p className="text-gray-200 text-sm leading-relaxed">{value.details}</p>
                    </div>
                  )}
                  <div className="text-blue-400 font-semibold flex items-center gap-2 mt-4">
                    {isExpanded ? 'Show less' : 'Learn more'}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">Major milestones in our growth story</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                  className="cursor-pointer"
                >
                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center pt-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-4 border-slate-800 shadow-lg"></div>
                      {index < milestones.length - 1 && (
                        <div className="w-1 h-32 bg-gradient-to-b from-blue-500 to-transparent mt-3"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-sm font-bold text-blue-400 mb-1">{milestone.year}</div>
                            <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${expandedMilestone === index ? 'rotate-180' : ''}`} />
                        </div>
                        <p className="text-gray-400 mb-3">{milestone.description}</p>
                        {expandedMilestone === index && (
                          <div className="pt-3 border-t border-slate-700 animate-in fade-in duration-300">
                            <p className="text-gray-300 leading-relaxed">{milestone.details}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-400">Industry veterans committed to your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveTeam(index)}
                onMouseLeave={() => setActiveTeam(null)}
                className="group"
              >
                <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105">
                  <div className="relative h-80 overflow-hidden bg-slate-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <div className="text-blue-400 font-semibold text-sm mb-3">{member.role}</div>

                    {activeTeam === index ? (
                      <div className="space-y-4 animate-in fade-in duration-300">
                        <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-500/15 border border-blue-500/40 text-blue-300 text-xs rounded-full font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3 pt-2">
                          <button className="p-2 bg-slate-900 hover:bg-blue-500/20 border border-slate-600 hover:border-blue-400 rounded-lg transition-all">
                            <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                          </button>
                          <button className="p-2 bg-slate-900 hover:bg-blue-500/20 border border-slate-600 hover:border-blue-400 rounded-lg transition-all">
                            <Twitter className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm line-clamp-2">Hover to see full profile</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-32 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-400">Recognized globally for educational excellence</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-900/80 transition-all group transform hover:scale-105">
                  <div className="inline-flex p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg mb-4 group-hover:bg-blue-500/20 transition-all">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-medium mb-2">{item.subtitle}</p>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Rocket className="w-20 h-20 text-white mx-auto mb-8" />
            <h2 className="text-6xl font-bold text-white mb-8">Building Careers, Changing Lives</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              From career transitions to first tech jobs, our 15,000+ graduates are solving real problems, building innovative products, and driving technology forward across the globe. They're at Google, Meta, Apple, Amazon, and leading startups everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all text-lg shadow-lg">
                Join Our Community
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all text-lg">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-400">Questions? We'd love to hear from you</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 hover:bg-slate-800/80 transition-all text-center transform hover:scale-105">
                <div className="inline-flex p-4 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p className="text-gray-400 mb-2">hello@techlearn.com</p>
                <p className="text-gray-500 text-sm">Response within 24 hours</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 hover:bg-slate-800/80 transition-all text-center transform hover:scale-105">
                <div className="inline-flex p-4 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                <p className="text-gray-400 mb-2">Join our Discord server</p>
                <p className="text-gray-500 text-sm">15,000+ active members</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 hover:bg-slate-800/80 transition-all text-center transform hover:scale-105">
                <div className="inline-flex p-4 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Social Media</h3>
                <p className="text-gray-400 mb-2">Twitter, LinkedIn, Instagram</p>
                <p className="text-gray-500 text-sm">Daily tech insights & updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
            <p className="text-lg text-gray-400 mb-10">
              Join 15,000+ students building successful tech careers. Start with a free trial, no credit card required.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 inline-flex items-center gap-3 shadow-lg">
              Start Learning Today <Rocket className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
