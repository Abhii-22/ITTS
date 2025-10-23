import React, { useState, useEffect, useRef } from 'react';
import {
    HiMenu, HiX, HiChevronDown, HiSearch, HiPhone, HiMail,
    HiLocationMarker, HiClock, HiSparkles, HiBadgeCheck,
    HiUserGroup, HiHome, HiUsers, HiBookOpen, HiCalendar,
    HiOfficeBuilding, HiTrendingUp, HiLightningBolt, HiChip,
    HiCloud, HiCog, HiGlobe, HiChartBar, HiCube, HiBriefcase,
    HiStar, HiAcademicCap, HiCheckCircle,
    
} from 'react-icons/hi';
import { Target } from 'lucide-react';
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showQuickInfo, setShowQuickInfo] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showAnnouncement, setShowAnnouncement] = useState(true);
    const [hoveredItem, setHoveredItem] = useState(null);
    const headerRef = useRef(null);
    const dropdownTimerRef = useRef(null);
    const searchInputRef = useRef(null);

    // Mouse tracking for interactive effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (headerRef.current) {
                const rect = headerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20;
            setIsScrolled(scrolled);
            if (window.scrollY > 100) {
                setShowQuickInfo(false);
            } else {
                setShowQuickInfo(true);
            }
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

    // Auto-hide announcement after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnnouncement(false);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    // Auto-focus search input when opened
    useEffect(() => {
        if (showSearchBar && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [showSearchBar]);

    // Close dropdown with delay for better UX
    const handleMouseLeave = () => {
        dropdownTimerRef.current = setTimeout(() => {
            setOpenDropdown(null);
            setHoveredItem(null);
        }, 150);
    };

    const handleMouseEnter = (itemName) => {
        if (dropdownTimerRef.current) {
            clearTimeout(dropdownTimerRef.current);
        }
        setOpenDropdown(itemName);
        setHoveredItem(itemName);
    };

    const navItems = [
        {
            name: 'Home',
            path: '/',
            icon: HiHome,
            description: 'Back to homepage'
        },
        {
            name: 'About',
            path: '/about',
            icon: HiUsers,
            description: 'Learn about us',
            hasDropdown: true,
            submenu: [
                {
                    name: 'Our Mission',
                    path: '/about#mission',
                    icon: Target,
                    description: 'Our goals and vision'
                },
                {
                    name: 'Team',
                    path: '/about#team',
                    icon: HiUserGroup,
                    description: 'Meet our experts'
                },
                {
                    name: 'Testimonials',
                    path: '/about#testimonials',
                    icon: HiStar,
                    description: 'Student success stories'
                },
                {
                    name: 'Career',
                    path: '/about#career',
                    icon: HiBriefcase,
                    description: 'Join our team'
                }
            ]
        },
        {
            name: 'Courses',
            path: '/courses',
            icon: HiBookOpen,
            description: 'Explore our courses',
            hasDropdown: true,
            submenu: [
                {
                    name: 'Web Development',
                    path: '/courses#web-dev',
                    icon: HiGlobe,
                    tag: 'Popular',
                    tagColor: 'from-blue-500 to-cyan-500',
                    description: 'Full-stack development'
                },
                {
                    name: 'Data Science',
                    path: '/courses#data-science',
                    icon: HiChartBar,
                    tag: 'Trending',
                    tagColor: 'from-green-500 to-emerald-500',
                    description: 'Analytics & ML'
                },
                {
                    name: 'AI/ML',
                    path: '/courses#ai-ml',
                    icon: HiChip,
                    tag: 'Hot',
                    tagColor: 'from-red-500 to-orange-500',
                    description: 'Artificial Intelligence'
                },
                {
                    name: 'DevOps',
                    path: '/courses#devops',
                    icon: HiCog,
                    description: 'CI/CD & Automation'
                },
                {
                    name: 'Cloud Computing',
                    path: '/courses#cloud',
                    icon: HiCloud,
                    description: 'AWS, Azure, GCP'
                }
            ]
        },
        {
            name: 'Batches',
            path: '/batches',
            icon: HiCalendar,
            description: 'Upcoming batches'
        },
        {
            name: 'Branches',
            path: '#',
            icon: HiOfficeBuilding,
            description: 'Our locations',
            hasDropdown: true,
            submenu: [
                {
                    name: 'Delhi',
                    path: '/branches/delhi',
                    icon: HiOfficeBuilding,
                    description: 'National Capital'
                },
                {
                    name: 'Mumbai',
                    path: '/branches/mumbai',
                    icon: HiOfficeBuilding,
                    description: 'Financial Hub'
                },
                {
                    name: 'Bangalore',
                    path: '/branches/bangalore',
                    icon: HiOfficeBuilding,
                    description: 'Tech Capital'
                },
                {
                    name: 'Pune',
                    path: '/branches/pune',
                    icon: HiOfficeBuilding,
                    description: 'Education City'
                },
                {
                    name: 'Hyderabad',
                    path: '/branches/hyderabad',
                    icon: HiOfficeBuilding,
                    description: 'Cyberabad'
                }
            ]
        },
        {
            name: 'Placements',
            path: '/placement',
            icon: HiBadgeCheck,
            description: 'Career success'
        },
    ];

    const quickStats = [
        { icon: HiUserGroup, label: '10K+ Students', color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
        { icon: HiBadgeCheck, label: '95% Placement', color: 'text-green-400', bgColor: 'bg-green-500/10' },
        { icon: HiAcademicCap, label: '50+ Courses', color: 'text-purple-400', bgColor: 'bg-purple-500/10' }
    ];

    const handleNavClick = (path) => {
        // Simulate navigation
        console.log('Navigating to:', path);
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
        setShowSearchBar(false);
    };

    const isActiveLink = (path) => {
        // Simulate active link detection
        return path === '/';
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            setSearchQuery('');
            setShowSearchBar(false);
        }
    };

    return (
        <div className="relative">
            {/* Announcement Bar */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-center py-2.5 text-sm font-medium transition-all duration-500 ${showAnnouncement ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >
                <div className="flex items-center justify-center space-x-2">
                    <HiSparkles className="w-4 h-4 animate-pulse" />
                    <span className="animate-pulse">🎉 New Batch Starting Soon! Limited Seats Available - Enroll Now & Get 20% Off!</span>
                    <HiSparkles className="w-4 h-4 animate-pulse" />
                </div>
                <button
                    onClick={() => setShowAnnouncement(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-all duration-200 hover:rotate-90"
                    aria-label="Close announcement"
                >
                    <HiX className="w-4 h-4" />
                </button>
            </div>

            {/* Quick Info Bar */}
            <div
                className={`fixed left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-500 ${showQuickInfo && !showAnnouncement
                        ? 'translate-y-0 opacity-100'
                        : showAnnouncement
                            ? 'translate-y-10'
                            : '-translate-y-full opacity-0'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-2.5 text-xs">
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="mailto:info@edutech.com" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer group">
                                <HiMail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                                <span>info@edutech.com</span>
                            </a>
                            <a href="tel:+918888888888" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer group">
                                <HiPhone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                                <span>+91 8888 888 888</span>
                            </a>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <HiClock className="w-3.5 h-3.5" />
                                <span>Mon-Sat: 9AM - 7PM</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            {quickStats.map((stat, idx) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div
                                        key={idx}
                                        className={`flex items-center space-x-1.5 ${stat.color} hover:scale-105 transition-transform cursor-pointer px-2 py-1 rounded-lg ${stat.bgColor}`}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        <span className="font-semibold">{stat.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header
                ref={headerRef}
                className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${showAnnouncement ? 'top-10' : 'top-0'
                    } ${isScrolled
                        ? 'bg-slate-950/98 shadow-2xl py-3 backdrop-blur-xl border-b border-purple-500/10'
                        : showQuickInfo
                            ? 'bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 py-5 mt-8'
                            : 'bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 py-5'
                    }`}
                style={{
                    background: isScrolled
                        ? undefined
                        : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Enhanced Logo */}
                        <button onClick={() => handleNavClick('/')} className="flex items-center space-x-3 group">
                            <div className="relative w-12 h-12">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 animate-pulse"></div>
                                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                    <span className="group-hover:scale-125 transition-transform duration-500">E</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-white font-bold text-xl block leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                    EduTech Academy
                                </span>
                                <span className="text-purple-400 text-xs font-semibold tracking-wide group-hover:text-pink-400 transition-colors duration-300 flex items-center space-x-1">
                                    <HiSparkles className="w-3 h-3" />
                                    <span>Excellence in Education</span>
                                </span>
                            </div>
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center space-x-1">
                                {navItems.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <li
                                            key={item.name}
                                            className="relative group"
                                            onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <button
                                                onClick={() => !item.hasDropdown && handleNavClick(item.path)}
                                                className={`px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center space-x-2 relative group/link ${isActiveLink(item.path)
                                                        ? 'text-white bg-gradient-to-r from-purple-600/30 to-pink-600/30 shadow-lg'
                                                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                                                    }`}
                                            >
                                                <IconComponent className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                                                <span className="font-medium text-sm">{item.name}</span>
                                                {item.hasDropdown && (
                                                    <HiChevronDown
                                                        className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                )}
                                                <span
                                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-full ${isActiveLink(item.path) || hoveredItem === item.name
                                                            ? 'w-full opacity-100'
                                                            : 'w-0 opacity-0 group-hover/link:w-full group-hover/link:opacity-100'
                                                        }`}
                                                ></span>
                                            </button>

                                            {/* Enhanced Dropdown Menu */}
                                            {item.hasDropdown && item.submenu && (
                                                <div
                                                    className={`absolute left-0 mt-2 w-72 bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 transition-all duration-300 transform origin-top overflow-hidden ${openDropdown === item.name
                                                            ? 'opacity-100 visible translate-y-0 scale-100'
                                                            : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'
                                                        }`}
                                                >
                                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
                                                    <div className="py-2">
                                                        {item.submenu.map((sub, idx) => {
                                                            const SubIcon = sub.icon;
                                                            return (
                                                                <button
                                                                    key={idx}
                                                                    onClick={() => handleNavClick(sub.path)}
                                                                    className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-200 group/item"
                                                                >
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="flex items-center space-x-3">
                                                                            <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-purple-500/20 group-hover/item:to-pink-500/20 transition-all">
                                                                                <SubIcon className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                                                                            </div>
                                                                            <div>
                                                                                <div className="font-medium">{sub.name}</div>
                                                                                {sub.description && (
                                                                                    <div className="text-xs text-gray-500 group-hover/item:text-gray-400">
                                                                                        {sub.description}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        {sub.tag && (
                                                                            <span className={`px-2 py-0.5 text-xs bg-gradient-to-r ${sub.tagColor || 'from-purple-500 to-pink-500'} rounded-full font-semibold text-white shadow-lg`}>
                                                                                {sub.tag}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Right Section */}
                        <div className="hidden md:flex items-center space-x-3">
                            {/* Enhanced Search */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowSearchBar(!showSearchBar)}
                                    className={`text-gray-300 hover:text-white transition-all duration-300 p-2.5 rounded-xl hover:bg-slate-800/80 backdrop-blur-sm group relative ${showSearchBar ? 'bg-slate-800/80 text-white' : ''
                                        }`}
                                    aria-label="Search"
                                >
                                    <HiSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
                                </button>
                                <div
                                    className={`absolute right-0 mt-2 transition-all duration-300 ${showSearchBar
                                            ? 'opacity-100 visible translate-y-0'
                                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <form onSubmit={handleSearch} className="relative">
                                        <input
                                            ref={searchInputRef}
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search courses..."
                                            className="w-72 bg-slate-900/95 backdrop-blur-xl text-white placeholder-gray-400 px-4 py-3 pl-10 pr-10 rounded-xl border border-purple-500/30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 shadow-xl"
                                        />
                                        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        {searchQuery && (
                                            <button
                                                type="button"
                                                onClick={() => setSearchQuery('')}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                <HiX className="w-4 h-4" />
                                            </button>
                                        )}
                                    </form>
                                </div>
                            </div>

                            {/* Phone Button */}
                            <a
                                href="tel:+918888888888"
                                className="hidden xl:flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 backdrop-blur-sm group border border-transparent hover:border-purple-500/30"
                            >
                                <HiPhone className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-sm font-medium">+91 8888 888 888</span>
                            </a>

                            {/* CTA Button */}
                            <button
                                onClick={() => handleNavClick('/contact')}
                                className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transform hover:scale-105 overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center space-x-2">
                                    <span>Enroll Now</span>
                                    <HiSparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                                </div>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-white p-2.5 rounded-xl hover:bg-slate-800/80 transition-all duration-300 relative"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <HiMenu
                                    className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                                        }`}
                                />
                                <HiX
                                    className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav
                        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? 'max-h-[700px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="pb-4 border-t border-slate-700/50 pt-4 space-y-2">
                            {navItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={item.name}
                                        className="transition-all duration-300"
                                        style={{
                                            transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                                            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                            opacity: isMobileMenuOpen ? 1 : 0
                                        }}
                                    >
                                        <button
                                            onClick={() => {
                                                if (item.hasDropdown) {
                                                    setOpenDropdown(openDropdown === item.name ? null : item.name);
                                                } else {
                                                    handleNavClick(item.path);
                                                }
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${isActiveLink(item.path)
                                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                                    : 'text-gray-300 hover:bg-slate-800/80 hover:text-white backdrop-blur-sm'
                                                }`}
                                        >
                                            <span className="flex items-center space-x-3">
                                                <IconComponent className="w-5 h-5" />
                                                <span className="font-medium">{item.name}</span>
                                            </span>
                                            {item.hasDropdown && (
                                                <HiChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            )}
                                        </button>

                                        {/* Mobile Dropdown */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${item.hasDropdown && openDropdown === item.name
                                                    ? 'max-h-96 opacity-100 mt-2'
                                                    : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            {item.hasDropdown && item.submenu && (
                                                <div className="ml-4 space-y-1 border-l-2 border-purple-500/30 pl-4">
                                                    {item.submenu.map((sub, idx) => {
                                                        const SubIcon = sub.icon;
                                                        return (
                                                            <button
                                                                key={idx}
                                                                onClick={() => handleNavClick(sub.path)}
                                                                className="w-full text-left px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200 group"
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center space-x-2">
                                                                        <SubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                                        <div>
                                                                            <div>{sub.name}</div>
                                                                            {sub.description && (
                                                                                <div className="text-xs text-gray-600 group-hover:text-gray-500">
                                                                                    {sub.description}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    {sub.tag && (
                                                                        <span className={`px-2 py-0.5 text-xs bg-gradient-to-r ${sub.tagColor || 'from-purple-500 to-pink-500'} rounded-full font-semibold`}>
                                                                            {sub.tag}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Mobile Search */}
                            <form onSubmit={handleSearch} className="pt-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search courses..."
                                        className="w-full bg-slate-800/80 backdrop-blur-sm text-white placeholder-gray-400 px-4 py-3 pl-10 pr-10 rounded-xl border border-slate-700/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                    />
                                    <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <HiX className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </form>

                            {/* Mobile Quick Stats */}
                            <div className="pt-3 space-y-2">
                                {quickStats.map((stat, idx) => {
                                    const IconComponent = stat.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className={`flex items-center space-x-2 px-4 py-2.5 bg-slate-800/50 rounded-lg ${stat.color} ${stat.bgColor} backdrop-blur-sm hover:scale-[1.02] transition-transform`}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                            <span className="text-sm font-semibold">{stat.label}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Mobile CTA Section */}
                            <div className="pt-4 space-y-2">
                                <button
                                    onClick={() => handleNavClick('/contact')}
                                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                                >
                                    <span>Enroll Now</span>
                                    <HiSparkles className="w-4 h-4" />
                                </button>
                                <a
                                    href="tel:+918888888888"
                                    className="w-full flex items-center justify-center space-x-2 text-gray-300 bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/30"
                                >
                                    <HiPhone className="w-4 h-4" />
                                    <span>+91 8888 888 888</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Spacer to prevent content from hiding under fixed header */}
            <div className={`${showAnnouncement ? 'h-32' : 'h-24'} ${showQuickInfo ? 'lg:h-36' : 'lg:h-24'}`}></div>
        </div>
    );
};

export default Header;