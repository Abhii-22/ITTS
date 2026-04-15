import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';

// Creative Logo Component
const LogoComponent = ({ isScrolled }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`${isScrolled ? 'w-9 h-9' : 'w-11 h-11'} transition-all duration-300`}
        >
            <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
            </defs>

            {/* Main circle background */}
            <circle cx="50" cy="50" r="48" fill="url(#logoGrad)" opacity="0.95" />

            {/* Outer ring accent */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            {/* Tech pyramid - representing growth and learning */}
            <g transform="translate(50, 50)">
                {/* Bottom layer */}
                <rect x="-18" y="8" width="36" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
                {/* Middle layer */}
                <rect x="-12" y="0" width="24" height="6" rx="2" fill="rgba(255,255,255,0.65)" />
                {/* Top layer */}
                <rect x="-6" y="-8" width="12" height="6" rx="2" fill="rgba(255,255,255,1)" />

                {/* Upward arrow accent */}
                <path d="M 0,-14 L 4,-8 L -4,-8 Z" fill="rgba(255,255,255,0.9)" />

                {/* Side accent dots */}
                <circle cx="-22" cy="0" r="2" fill="rgba(255,255,255,0.4)" />
                <circle cx="22" cy="0" r="2" fill="rgba(255,255,255,0.4)" />
            </g>
        </svg>
    );
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const dropdownTimeoutRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Courses',
            path: '/courses',
            hasDropdown: true,
            submenu: [
                { name: 'Web Development', path: '/courses/web-development' },
                { name: 'Data Science', path: '/courses/data-science' },
                { name: 'Data Analytics', path: '/courses/data-analytics' },
                { name: 'AI/ML', path: '/courses/ai-ml' },
                { name: 'DevOps', path: '/courses/devops' },
                { name: 'Cloud Computing', path: '/courses/cloud-computing' },
                { name: 'Python Fullstack', path: '/courses/python-fullstack' },
                { name: 'Java Fullstack', path: '/courses/java-fullstack' },
                { name: 'Frontend Developer', path: '/courses/frontend-developer' },
                { name: 'Backend Developer', path: '/courses/backend-developer' }
            ]
        },
        { name: 'Placements', path: '/placement' },
    ];

    const handleMouseEnter = (itemName) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setOpenDropdown(itemName);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 150);
    };

    const handleNavClick = (e, path) => {
        e.preventDefault();

        setIsMobileMenuOpen(false);
        setOpenDropdown(null);

        if (path.includes('#')) {
            const [route, hash] = path.split('#');
            const targetRoute = route || '/';

            if (location.pathname === targetRoute) {
                const element = document.getElementById(hash);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                navigate(targetRoute + '#' + hash);
            }
        } else {
            navigate(path);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const isActiveLink = (path) => {
        if (path === '/' || path === '#') {
            return location.pathname === '/' && !location.hash;
        }

        if (path.includes('#')) {
            const [route, hash] = path.split('#');
            const targetRoute = route || '/';
            return location.pathname === targetRoute && location.hash === '#' + hash;
        }

        const basePath = path.split('#')[0];
        return location.pathname === basePath || location.pathname.startsWith(basePath + '/');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gradient-to-b from-slate-900/98 to-slate-900/95 backdrop-blur-lg shadow-xl py-2 border-b border-slate-700/50'
                : 'bg-gradient-to-b from-slate-950 to-slate-900 py-4 border-b border-slate-800/50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo - Enhanced */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2.5 group"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        {/* Creative SVG Logo */}
                        <div className="relative">
                            <LogoComponent isScrolled={isScrolled} />

                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Logo Text */}
                        <div className="hidden sm:flex flex-col">
                            <span className={`font-bold leading-tight group-hover:text-blue-400 transition-colors duration-300 ${isScrolled ? 'text-base text-white' : 'text-lg text-white'
                                }`}>
                                ITTS
                            </span>
                            <span className={`font-semibold tracking-wide group-hover:text-blue-300 transition-colors duration-300 ${isScrolled ? 'text-xs text-slate-400' : 'text-xs text-slate-400'
                                }`}>
                                Tech Education
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.hasDropdown ? (
                                        <button
                                            className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1 font-medium text-sm ${isActiveLink(item.path)
                                                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg'
                                                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                                }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                // Don't navigate, just toggle dropdown
                                                if (openDropdown === item.name) {
                                                    setOpenDropdown(null);
                                                } else {
                                                    setOpenDropdown(item.name);
                                                }
                                            }}
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                    ) : (
                                        <a
                                            href={item.path}
                                            onClick={(e) => handleNavClick(e, item.path)}
                                            className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${isActiveLink(item.path)
                                                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg'
                                                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    )}

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && item.submenu && (
                                        <div
                                            className={`absolute left-0 mt-1 w-56 bg-slate-900/95 backdrop-blur-sm rounded-lg shadow-2xl border border-slate-700/50 transition-all duration-200 ${openDropdown === item.name
                                                ? 'opacity-100 visible translate-y-0'
                                                : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                                                }`}
                                            onMouseEnter={() => handleMouseEnter(item.name)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="py-2">
                                                {item.submenu.map((sub, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={sub.path}
                                                        onClick={(e) => handleNavClick(e, sub.path)}
                                                        className={`block px-4 py-2.5 text-sm transition-all duration-150 ${isActiveLink(sub.path)
                                                            ? 'text-white bg-blue-600 mx-1 rounded'
                                                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60 hover:mx-1 hover:rounded'
                                                            }`}
                                                    >
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Section */}
                    <div className="hidden md:flex items-center space-x-3">
                        {/* Phone Button */}
                        <a
                            href="tel:+918888888888"
                            className="hidden xl:flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-slate-800/60 font-medium text-sm"
                        >
                            <Phone className="w-4 h-4" />
                            <span>+91 8888 888 888</span>
                        </a>

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
                        >
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800/60 transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="pb-4 border-t border-slate-700/50 pt-4 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.hasDropdown ? (
                                    <button
                                        onClick={() => {
                                            setOpenDropdown(openDropdown === item.name ? null : item.name);
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActiveLink(item.path)
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                                            }`}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                ) : (
                                    <a
                                        href={item.path}
                                        onClick={(e) => handleNavClick(e, item.path)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActiveLink(item.path)
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                                            }`}
                                    >
                                        <span>{item.name}</span>
                                    </a>
                                )}

                                {/* Mobile Dropdown */}
                                {item.hasDropdown && item.submenu && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openDropdown === item.name
                                            ? 'max-h-64 opacity-100 mt-2'
                                            : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="ml-4 space-y-1 border-l-2 border-slate-700/50 pl-4">
                                            {item.submenu.map((sub, idx) => (
                                                <a
                                                    key={idx}
                                                    href={sub.path}
                                                    onClick={(e) => handleNavClick(e, sub.path)}
                                                    className={`block px-3 py-2 text-sm rounded-lg transition-all duration-150 font-medium ${isActiveLink(sub.path)
                                                        ? 'text-white bg-blue-600'
                                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                                                        }`}
                                                >
                                                    {sub.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="pt-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search courses..."
                                    className="w-full bg-slate-800/60 text-white placeholder-slate-500 px-4 py-3 pl-10 rounded-lg border border-slate-700/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            </div>
                        </form>

                        {/* Mobile CTA Section */}
                        <div className="pt-4 space-y-2">
                            <Link
                                to="/contact"
                                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-blue-500/50 active:scale-95"
                            >
                                Enroll Now
                            </Link>
                            <a
                                href="tel:+918888888888"
                                className="w-full flex items-center justify-center space-x-2 text-slate-300 bg-slate-800/60 px-6 py-3 rounded-lg font-medium hover:bg-slate-700/60 transition-all duration-200 border border-slate-700/50"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+91 8888 888 888</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;