import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/Medini white  logo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    const mainNavItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Course', path: '/courses', hasDropdown: true },
        { name: 'Contact', path: '/contact' },
    ];

    const courses = [
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
    ];

    const handleNavClick = (e, path) => {
        e.preventDefault();
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Header - Exact Color #214C56 */}
            <div className="bg-[#214C56]">
                <div className="w-full">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center pl-15"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <img 
                                src={logo} 
                                alt="Medini Technologies" 
                                className="h-14 w-auto"
                            />
                        </Link>

                        {/* Empty Right Section */}
                        <div></div>
                    </div>
                </div>
            </div>

            {/* Second Navigation Bar - Exact Color #2E6A80 */}
            <div className="bg-[#4A7D7C]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        {/* Left Navigation Items */}
                        <nav className="hidden md:block">
                            <ul className="flex items-center">
                                {mainNavItems.map((item) => (
                                    <li key={item.name} className="relative">
                                        {item.hasDropdown ? (
                                            <button 
                                                className="text-white hover:text-teal-200 px-6 py-4 text-lg font-medium flex items-center space-x-1 transition-colors"
                                                onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                onClick={(e) => handleNavClick(e, item.path)}
                                                className={`text-white hover:text-teal-200 px-6 py-4 text-lg font-medium transition-colors ${isActiveLink(item.path) ? 'text-teal-200' : ''
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                        {item.hasDropdown && openDropdown === item.name && (
                                            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                                <div className="py-2">
                                                    {courses.map((course) => (
                                                        <Link
                                                            key={course.name}
                                                            to={course.path}
                                                            onClick={(e) => {
                                                                handleNavClick(e, course.path);
                                                                setOpenDropdown(null);
                                                            }}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                                                        >
                                                            {course.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2 rounded-md hover:bg-teal-600 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav
                    className={`md:hidden transition-all duration-300 bg-teal-700 ${isMobileMenuOpen ? 'max-h-screen overflow-y-auto' : 'max-h-0 overflow-hidden'
                        }`}
                >
                    <div className="px-4 py-2 space-y-1">
                        {mainNavItems.map((item) => (
                            <div key={item.name}>
                                {item.hasDropdown ? (
                                    <div>
                                        <button 
                                            className="w-full text-left text-white hover:text-teal-200 px-4 py-3 text-base font-medium flex items-center justify-between transition-colors"
                                            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openDropdown === item.name && (
                                            <div className="bg-teal-600 border-t border-teal-500">
                                                <div className="py-2">
                                                    {courses.map((course) => (
                                                        <Link
                                                            key={course.name}
                                                            to={course.path}
                                                            onClick={(e) => {
                                                                handleNavClick(e, course.path);
                                                                setOpenDropdown(null);
                                                            }}
                                                            className="block px-8 py-2 text-sm text-white hover:bg-teal-700 transition-colors"
                                                        >
                                                            {course.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={(e) => handleNavClick(e, item.path)}
                                        className={`block text-white hover:text-teal-200 px-4 py-3 text-base font-medium transition-colors ${isActiveLink(item.path) ? 'text-teal-200' : ''
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;