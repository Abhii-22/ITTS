import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';

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

    // Handle hash navigation on mount and location change
    useEffect(() => {
        if (location.hash) {
            // Wait for page to render
            setTimeout(() => {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 80; // Account for fixed header
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
        {
            name: 'About',
            path: '/about',
            hasDropdown: true,
            submenu: [
                { name: 'Our Mission', path: '/about#mission' },
                { name: 'Team', path: '/about#team' },
                { name: 'Testimonials', path: '/about#testimonials' },
                { name: 'Career', path: '/about#career' }
            ]
        },
        {
            name: 'Courses',
            path: '/courses',
            hasDropdown: true,
            submenu: [
                { name: 'Web Development', path: '/courses#web-dev' },
                { name: 'Data Science', path: '/courses#data-science' },
                { name: 'AI/ML', path: '/courses#ai-ml' },
                { name: 'DevOps', path: '/courses#devops' },
                { name: 'Cloud Computing', path: '/courses#cloud' }
            ]
        },
        { name: 'Batches', path: '/batches' },
        {
            name: 'Branches',
            path: '#',
            hasDropdown: true,
            submenu: [
                { name: 'Delhi', path: '/branches/delhi' },
                { name: 'Mumbai', path: '/branches/mumbai' },
                { name: 'Bangalore', path: '/branches/bangalore' },
                { name: 'Pune', path: '/branches/pune' },
                { name: 'Hyderabad', path: '/branches/hyderabad' }
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

        // Close mobile menu and dropdown
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);

        if (path.includes('#')) {
            const [route, hash] = path.split('#');
            const targetRoute = route || '/';

            if (location.pathname === targetRoute) {
                // Same page, just scroll to section
                const element = document.getElementById(hash);
                if (element) {
                    const headerOffset = 80; // Account for fixed header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Different page, navigate then scroll
                navigate(targetRoute + '#' + hash);
            }
        } else {
            // Regular navigation without hash
            navigate(path);
            // Scroll to top for new page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const isActiveLink = (path) => {
        if (path === '/' || path === '#') {
            return location.pathname === '/' && !location.hash;
        }

        // Handle hash links
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
                ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800'
                : 'bg-slate-950 py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <div className="relative">
                            <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-md group-hover:shadow-lg group-hover:bg-blue-700 transition-all duration-300">
                                E
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-white font-bold text-xl block leading-tight group-hover:text-blue-400 transition-colors duration-300">
                                EduTech Academy
                            </span>
                            <span className="text-slate-400 text-xs font-medium tracking-wide">
                                Excellence in Education
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
                                            className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1 ${isActiveLink(item.path)
                                                ? 'text-white bg-blue-600'
                                                : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                                }`}
                                            onClick={(e) => {
                                                if (item.path !== '#') {
                                                    handleNavClick(e, item.path);
                                                }
                                            }}
                                        >
                                            <span className="font-medium text-sm">{item.name}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                    ) : (
                                        <a
                                            href={item.path}
                                            onClick={(e) => handleNavClick(e, item.path)}
                                            className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center ${isActiveLink(item.path)
                                                ? 'text-white bg-blue-600'
                                                : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                                }`}
                                        >
                                            <span className="font-medium text-sm">{item.name}</span>
                                        </a>
                                    )}

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && item.submenu && (
                                        <div
                                            className={`absolute left-0 mt-1 w-56 bg-slate-900 rounded-lg shadow-xl border border-slate-800 transition-all duration-200 ${openDropdown === item.name
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
                                                                ? 'text-white bg-blue-600'
                                                                : 'text-slate-300 hover:text-white hover:bg-slate-800'
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
                            className="hidden xl:flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-200 px-4 py-2 rounded-lg hover:bg-slate-800"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">+91 8888 888 888</span>
                        </a>

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 active:scale-95"
                        >
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-all duration-200"
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
                    <div className="pb-4 border-t border-slate-800 pt-4 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.hasDropdown ? (
                                    <button
                                        onClick={() => {
                                            setOpenDropdown(openDropdown === item.name ? null : item.name);
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${isActiveLink(item.path)
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                            }`}
                                    >
                                        <span className="font-medium">{item.name}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                ) : (
                                    <a
                                        href={item.path}
                                        onClick={(e) => handleNavClick(e, item.path)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${isActiveLink(item.path)
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                            }`}
                                    >
                                        <span className="font-medium">{item.name}</span>
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
                                        <div className="ml-4 space-y-1 border-l-2 border-slate-700 pl-4">
                                            {item.submenu.map((sub, idx) => (
                                                <a
                                                    key={idx}
                                                    href={sub.path}
                                                    onClick={(e) => handleNavClick(e, sub.path)}
                                                    className={`block px-3 py-2 text-sm rounded-lg transition-all duration-150 ${isActiveLink(sub.path)
                                                            ? 'text-white bg-blue-600'
                                                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
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
                                    className="w-full bg-slate-800 text-white placeholder-slate-400 px-4 py-3 pl-10 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            </div>
                        </form>

                        {/* Mobile CTA Section */}
                        <div className="pt-4 space-y-2">
                            <Link
                                to="/contact"
                                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95"
                            >
                                Enroll Now
                            </Link>
                            <a
                                href="tel:+918888888888"
                                className="w-full flex items-center justify-center space-x-2 text-slate-300 bg-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-200 border border-slate-700"
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