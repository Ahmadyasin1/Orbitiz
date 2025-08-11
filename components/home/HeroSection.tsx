'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import ParticleField from '@/components/ui/ParticleField';
import { trackCTAClick } from '@/components/Analytics';

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = ['AI', 'Cloud', 'Databases', 'Docker', 'DevOps', 'Automation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (ctaName: string) => {
    trackCTAClick(ctaName);
    // Additional CTA logic here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-brand-blue-900 to-brand-purple-900">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <ParticleField />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element w-64 h-64 bg-gradient-to-r from-brand-primary-500/20 to-brand-purple-500/20 rounded-full blur-3xl top-1/4 left-1/4 morphing-blob"></div>
        <div className="floating-element w-96 h-96 bg-gradient-to-r from-brand-emerald-500/10 to-brand-blue-500/10 rounded-full blur-3xl top-3/4 right-1/4 morphing-blob" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element w-48 h-48 bg-gradient-to-r from-brand-amber-500/15 to-brand-primary-500/15 rounded-full blur-2xl top-1/2 right-1/3 morphing-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-white/90 border border-white/20 mb-8">
              🚀 Transforming Enterprise Technology Since 2020
            </span>
          </motion.div>
          
          <h1 className="text-responsive-xl font-bold text-white mb-8 leading-tight">
            Empowering Businesses with{' '}
            <span className="gradient-text text-glow">
              Cutting-Edge
            </span>
            <br />
            <span className="relative">
              IT & AI Solutions
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-brand-primary-600 to-brand-purple-600 rounded-lg blur opacity-20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Orbitz Technology helps US enterprises{' '}
            <span className="text-brand-emerald-400 font-semibold">ship faster</span>,{' '}
            <span className="text-brand-amber-400 font-semibold">scale smarter</span>, and{' '}
            <span className="text-brand-primary-400 font-semibold">operate securely</span>{' '}
            through innovative technology solutions.
          </motion.p>

          {/* Rotating Technology Marquee */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center mb-12"
          >
            <span className="text-brand-amber-400 text-lg font-medium mr-4 text-glow">
              Specializing in:
            </span>
            <div className="relative h-10 w-40 overflow-hidden glass rounded-full px-4 flex items-center justify-center">
              <motion.div
                key={currentTech}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-lg font-bold gradient-text">
                  {technologies[currentTech]}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="btn-modern text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 focus-visible shadow-glow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCTAClick('Schedule Free IT Audit - Hero')}
            >
              <span>Schedule Free IT Audit</span>
              <ChevronRightIcon className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              className="glass border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center space-x-2 focus-visible backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCTAClick('View Case Studies - Hero')}
            >
              <PlayIcon className="h-5 w-5" />
              <span>View Case Studies</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center glass">
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <p className="text-white/60 text-xs mt-2 font-medium">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;