'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleScheduleAudit = useCallback(() => {
      alert('Thank you for your interest! We will contact you soon.');
    }, []);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'Partners', href: '/partners' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-modern-lg border-b border-white/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-12 h-12 modern-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-glow">
              <span className="text-white font-bold text-xl relative z-10">O</span>
              <div className="absolute inset-0 modern-gradient rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'gradient-text' : 'text-white text-glow'
            }`}>
              Orbitz Technology
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 focus-visible hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-brand-primary-600' 
                    : 'text-white/90 hover:text-white hover:text-glow'
                } ${pathname === item.href ? 'text-brand-primary-600' : ''}`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 modern-gradient rounded-full shadow-glow"
                    layoutId="activeNavItem"
                  />
                )}
              </Link>
            ))}
            
            <motion.button
              className="btn-modern text-white px-6 py-3 rounded-full font-medium focus-visible shadow-modern"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleAudit}
            >
              Schedule Free IT Audit
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl glass hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className={`h-6 w-6 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Bars3Icon className={`h-6 w-6 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass-dark shadow-modern-lg border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-brand-primary-400 font-medium py-2 focus-visible transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full btn-modern text-white px-6 py-3 rounded-full font-medium">
                Schedule Free IT Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default React.memo(Navigation);