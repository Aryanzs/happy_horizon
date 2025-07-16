import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Phone,
  Calendar,
  ChevronDown,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Sparkles,
  Crown,
} from 'lucide-react';

export default function Navbar() {
  const DESKTOP_BREAKPOINT = 1280; // matches 'xl' in Tailwind

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});

  const servicesRef = useRef(null);
  const timeoutRef = useRef(null);

  const mainNavLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Blogs', href: '#' },
    {
      name: 'What We Offer',
      href: '#',
      hasDropdown: true,
      dropdown: [
        {
          name: 'Programs',
          href: '/programs/Programs',
          hasSubDropdown: true,
          subDropdown: [
            { name: 'Corporate Excellence Accelerator', href: '/programs/Corporate Excellence Accelerator' },
            { name: 'Personal Growth Mastery Program', href: '/programs/Personal Growth Mastery Program' },
            { name: 'Relationship Reconnection Retreat', href: '/programs/Relationship Reconnection Retreat' },
            { name: 'Business Pinnacle Activation for Growth', href: '/programs/Business Pinnacle Activation for Growth' },
            { name: 'Health and Wellness Pinnacle Activation', href: '/programs/Health and Wellness Pinnacle Activation' },
            { name: 'Relationship Dynamics for Leaders', href: '/programs/Relationship Dynamics for Leaders' },
            { name: 'Balanced Life Blueprint', href: '/programs/Balanced Life Blueprint' },
            { name: 'Emotional Intelligence Lab', href: '/programs/Emotional Intelligence Lab' },
            { name: 'Educational Excellence Pinnacle Activation', href: '/programs/Educational Excellence Pinnacle Activation' },
          ],
        },
        { name: 'Courses', href: '/programs/Courses' },
        { name: 'Healing Therapies', href: '/programs/Healing Therapies' },
        { name: 'School Excellence', href: '/programs/School Excellence' },
      ],
    },
    { name: 'Testimonials', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Mental Wellness', href: '#' },
  ];

  // close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // close mobile/tablet menu when crossing into desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setIsOpen(false);
        setMobileDropdownOpen({});
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (fn) => {
    clearTimeout(timeoutRef.current);
    fn();
  };

  const handleMouseLeave = (fn) => {
    timeoutRef.current = setTimeout(fn, 150);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleMobileNavClick = () => {
    setIsOpen(false);
    setMobileDropdownOpen({});
  };

  return (
    <>
      {/* TOP BAR (md+) - Enhanced with glassmorphism */}
      <div className="hidden md:block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-sm py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <a href="#" className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Youtube size={16} />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Mail size={16} />
              <span className="font-medium">info@happyhorizons.info</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/90">
              <Phone size={16} />
              <span className="font-medium">+91-9322341624</span>
            </div>
            <a href="#" className="flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/25 transition-all duration-300 group">
              <Calendar size={16} className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Schedule an Appointment</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR - Enhanced with glassmorphism */}
      <nav className="sticky top-0 z-50  backdrop-blur-lg border-b border-white/20 shadow-lg ">
        <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0 group">
              <div className="h-14 w-auto group-hover:scale-105 transition-transform duration-300 flex items-center">
                <div className="h-12 w-48 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  Happy Horizons
                </div>
              </div>
            </a>

            {/* Desktop Nav (≥1280px) */}
            <div className="hidden xl:flex items-center space-x-8">
              {mainNavLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  ref={link.hasDropdown ? servicesRef : null}
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(() => setServicesOpen(true))}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave(() => { setServicesOpen(false); setActiveSubDropdown(null); })}
                >
                  <a href={link.href} className="flex items-center  hover:text-purple-600 font-semibold text-base transition-all duration-300 py-2 px-3 rounded-lg hover:bg-purple-50 relative group">
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown size={16} className={`ml-1 transform transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>

                  {/* First dropdown - Enhanced */}
                  {link.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 transition-all duration-300 z-50 ${
                        servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                      }`}
                    >
                      <div className="py-3">
                        {link.dropdown.map((item) => (
                          <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => item.hasSubDropdown && handleMouseEnter(() => setActiveSubDropdown(item.name))}
                            onMouseLeave={() => item.hasSubDropdown && handleMouseLeave(() => setActiveSubDropdown(null))}
                          >
                            <a href={item.href} className="flex items-center justify-between px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300 mx-2 rounded-xl group">
                              <span className="font-medium">{item.name}</span>
                              {item.hasSubDropdown && (
                                <ChevronDown size={14} className="ml-2 rotate-90 group-hover:scale-110 transition-transform" />
                              )}
                            </a>
                            {/* Second dropdown - Enhanced */}
                            {item.hasSubDropdown && (
                              <div
                                className={`absolute top-0 left-full ml-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 transition-all duration-300 z-50 ${
                                  activeSubDropdown === item.name
                                    ? 'opacity-100 visible translate-x-0'
                                    : 'opacity-0 invisible -translate-x-4 pointer-events-none'
                                }`}
                              >
                                <div className="py-3">
                                  {item.subDropdown.map((sub) => (
                                    <a
                                      key={sub.name}
                                      href={sub.href}
                                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300 mx-2 rounded-xl font-medium"
                                    >
                                      {sub.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA (≥lg) - Enhanced with premium styling */}
            <div className="hidden xl:block">
              <button className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <Crown size={18} className="group-hover:scale-110 transition-transform" />
                  Book a Consultation
                </span>
              </button>
            </div>

            {/* Mobile/Tablet Toggle (<1280px) - Enhanced */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-purple-600 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300 group"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={24} className="group-hover:scale-110 transition-transform" />
                ) : (
                  <Menu size={24} className="group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu (<1280px) - Enhanced */}
        <div
          className={`xl:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {/* Social & Contact Info - Enhanced */}
            <div className="block md:hidden mb-8 pb-6 border-b border-gradient-to-r from-purple-200 to-pink-200">
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <div className="flex space-x-3">
                  <a href="#" className="p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 hover:scale-110">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 hover:scale-110">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 hover:scale-110">
                    <Youtube size={16} />
                  </a>
                </div>
                <div className="flex items-center space-x-2 font-medium">
                  <Mail size={16} className="text-purple-600" />
                  <span>info@happyhorizons.info</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
                <Phone size={16} className="text-purple-600" />
                <span>+91-9322341624</span>
              </div>
            </div>

            {/* Links - Enhanced */}
            {mainNavLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between">
                  <a
                    href={link.href}
                    onClick={!link.hasDropdown ? handleMobileNavClick : undefined}
                    className="flex-1 text-gray-700 hover:text-purple-600 text-lg font-semibold py-3 transition-all duration-300 hover:bg-purple-50 rounded-xl px-3"
                  >
                    {link.name}
                  </a>
                  {link.hasDropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="p-3 text-gray-500 hover:text-purple-600 transition-all duration-300 hover:bg-purple-50 rounded-xl group"
                      aria-label={`Toggle ${link.name} submenu`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transform transition-transform duration-300 group-hover:scale-110 ${
                          mobileDropdownOpen[link.name] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {link.hasDropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileDropdownOpen[link.name] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="ml-4 mt-3 space-y-2">
                      {link.dropdown.map((item) => (
                        <div key={item.name} className="border-l-2 border-purple-200 pl-4">
                          <div className="flex items-center justify-between">
                            <a
                              href={item.href}
                              onClick={!item.hasSubDropdown ? handleMobileNavClick : undefined}
                              className="flex-1 text-gray-600 hover:text-purple-600 text-base font-medium py-2 transition-all duration-300 hover:bg-purple-50 rounded-lg px-3"
                            >
                              {item.name}
                            </a>
                            {item.hasSubDropdown && (
                              <button
                                onClick={() => toggleMobileDropdown(item.name)}
                                className="p-2 text-gray-400 hover:text-purple-600 transition-all duration-300 hover:bg-purple-50 rounded-lg group"
                                aria-label={`Toggle ${item.name} submenu`}
                              >
                                <ChevronDown
                                  size={16}
                                  className={`transform transition-transform duration-300 group-hover:scale-110 ${
                                    mobileDropdownOpen[item.name] ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                            )}
                          </div>
                          {item.hasSubDropdown && (
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                mobileDropdownOpen[item.name] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="ml-4 mt-2 space-y-1">
                                {item.subDropdown.map((sub) => (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={handleMobileNavClick}
                                    className="block text-gray-500 hover:text-purple-600 text-sm font-medium py-2 transition-all duration-300 border-l-2 border-purple-100 pl-4 hover:bg-purple-50 rounded-lg"
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA - Enhanced */}
            <div className="pt-6 border-t border-gradient-to-r from-purple-200 to-pink-200">
              <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <Crown size={20} className="group-hover:scale-110 transition-transform" />
                  Book a Consultation
                  <Sparkles size={18} className="group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}