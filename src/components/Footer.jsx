import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone, Send } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
            {/* Newsletter Section */}
            <div className="border-b border-slate-800 bg-slate-900/50">
                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Stay Updated</h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 px-4">Subscribe to our newsletter for the latest courses and tech insights</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base whitespace-nowrap"
                            >
                                {subscribed ? (
                                    <>✓ Subscribed!</>
                                ) : (
                                    <>
                                        Subscribe <Send size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-8 lg:gap-6 mb-8 sm:mb-10">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3 sm:mb-4">
                            TechAcademy
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                            Empowering the next generation of tech professionals with cutting-edge courses and hands-on learning experiences.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                                <Mail size={16} className="text-blue-500 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                                <span className="text-sm sm:text-base break-all">contact@techacademy.com</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                                <Phone size={16} className="text-blue-500 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                                <MapPin size={16} className="text-blue-500 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                                <span className="text-sm sm:text-base">Bengaluru, IN</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer group">
                                <Facebook size={18} className="text-gray-300 group-hover:text-white sm:w-5 sm:h-5" />
                            </div>
                            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer group">
                                <Linkedin size={18} className="text-gray-300 group-hover:text-white sm:w-5 sm:h-5" />
                            </div>
                            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer group">
                                <Twitter size={18} className="text-gray-300 group-hover:text-white sm:w-5 sm:h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Popular Courses</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Web Development', 'Data Science', 'Cloud Computing', 'Mobile Development', 'AI & Machine Learning'].map((course) => (
                                <li key={course}>
                                    <div className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group cursor-pointer text-sm sm:text-base">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all flex-shrink-0"></span>
                                        <span className="leading-tight">{course}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['About Us', 'Instructors', 'Careers', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <div className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group cursor-pointer text-sm sm:text-base">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all flex-shrink-0"></span>
                                        <span className="leading-tight">{item}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Support</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Help Center', 'Terms of Service', 'Privacy Policy', 'Refund Policy', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <div className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group cursor-pointer text-sm sm:text-base">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all flex-shrink-0"></span>
                                        <span className="leading-tight">{item}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                    <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                        © 2025 TechAcademy. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                        <div className="hover:text-blue-400 transition-colors cursor-pointer">Sitemap</div>
                        <div className="hover:text-blue-400 transition-colors cursor-pointer">Accessibility</div>
                        <div className="hover:text-blue-400 transition-colors cursor-pointer">Cookie Policy</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;