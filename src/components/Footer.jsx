import React, { useState } from 'react';
import { Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

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
        <footer className="bg-white border-t border-gray-200">
            
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-8 lg:gap-6 mb-8 sm:mb-10">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
                            Stay Connected
                        </h3>
                        <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 leading-relaxed">
                            Empowering the next generation of tech professionals with cutting-edge courses and hands-on learning experiences.
                        </p>

                        {/* Contact Info */}
                        

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a 
                                href="https://www.instagram.com/medinitechnologies/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 cursor-pointer group"
                            >
                                <FaInstagram size={18} className="text-gray-300 group-hover:text-white sm:w-5 sm:h-5" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/medinitechnologies/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer group"
                            >
                                <Linkedin size={18} className="text-gray-300 group-hover:text-white sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-black font-bold mb-3 sm:mb-4 text-base sm:text-lg">Our Courses</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                { name: 'Web Development', path: '/courses/web-development' },
                                { name: 'Data Science', path: '/courses/data-science' },
                                { name: 'Cloud Computing', path: '/courses/cloud-computing' },
                                { name: 'Frontend Developer', path: '/courses/frontend-developer' },
                                { name: 'Backend Developer', path: '/courses/backend-developer' },
                                { name: 'Python Fullstack', path: '/courses/python-fullstack' },
                                { name: 'Java Fullstack', path: '/courses/java-fullstack' },
                                { name: 'Data Analytics', path: '/courses/data-analytics' },
                                { name: 'AI & Machine Learning', path: '/courses/ai-ml' },
                                { name: 'DevOps', path: '/courses/devops' }
                            ].map((course) => (
                                <li key={course.name}>
                                    <a 
                                        href={course.path}
                                        className="text-black hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base"
                                    >
                                                                                <span className="leading-tight">{course.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-black font-bold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Placement', path: '/placement' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.path}
                                        className="text-black hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base"
                                    >
                                                                                <span className="leading-tight">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                    <p className="text-black text-xs sm:text-sm text-center md:text-left">
                        2025 TechAcademy. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-black">
                        <div className="text-black hover:text-blue-400 transition-colors cursor-pointer">Sitemap</div>
                        <div className="text-black hover:text-blue-400 transition-colors cursor-pointer">Accessibility</div>
                        <div className="text-black hover:text-blue-400 transition-colors cursor-pointer">Cookie Policy</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;