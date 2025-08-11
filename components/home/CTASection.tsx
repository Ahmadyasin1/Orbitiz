'use client';

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { trackCTAClick } from '@/components/Analytics';

const CTASection = () => {
  const benefits = [
    'Comprehensive IT infrastructure assessment',
    'Security vulnerability analysis',
    'Performance optimization recommendations',
    'Cloud cost reduction opportunities',
    'Scalability and modernization roadmap',
    'Compliance and governance review',
  ];

  const handleScheduleAudit = useCallback(() => {
    trackCTAClick('Schedule Free IT Audit - CTA Section');
    // Add scheduling logic here (e.g., open a modal or redirect)
    alert('Thank you for your interest! We will contact you soon.');
  }, []);

  const handleDownloadGuide = useCallback(() => {
    trackCTAClick('Download Capabilities Guide - CTA Section');
    window.open('/capabilities-guide.pdf', '_blank');
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-brand-blue-900 to-brand-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mesh-gradient opacity-20"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element w-64 h-64 bg-gradient-to-r from-brand-primary-500/20 to-brand-purple-500/20 rounded-full blur-3xl top-1/4 left-1/4 morphing-blob"></div>
        <div className="floating-element w-96 h-96 bg-gradient-to-r from-brand-emerald-500/10 to-brand-blue-500/10 rounded-full blur-3xl top-3/4 right-1/4 morphing-blob" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-white/90 border border-white/20 mb-8">
                🎯 Ready to Transform Your Business?
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform{' '}
              <span className="gradient-text text-glow">
                Your Business?
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Get started with a comprehensive IT audit that reveals optimization 
              opportunities and provides a clear roadmap for digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-3xl p-8 mb-8 border border-white/20 shadow-modern-lg"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Your Free IT Health Check Includes:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-2 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-brand-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-blue-100 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                className="btn-modern text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 focus-visible shadow-glow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScheduleAudit}
              >
                <span>Schedule Your Free IT Audit</span>
                <ArrowRightIcon className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                className="glass border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus-visible backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadGuide}
              >
                Download Our Capabilities Guide
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 text-sm text-blue-200"
            >
              <p>
                ⏱️ <strong className="text-brand-amber-400">Get Your Report in 24 Hours</strong> - We deliver actionable insights fast
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 border border-white/20 shadow-modern-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="space-y-6">
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 modern-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-4xl">🔍</span>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Comprehensive Analysis
                  </h3>
                  <p className="text-blue-100">
                    Deep dive into your current infrastructure, security posture, 
                    and optimization opportunities
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '☁️', label: 'Cloud Assessment' },
                    { icon: '🔒', label: 'Security Review' },
                    { icon: '📊', label: 'Performance Analysis' },
                    { icon: '💰', label: 'Cost Optimization' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="glass rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 modern-card"
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <div className="text-white font-semibold">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-brand-emerald-400 rounded-full shadow-glow"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-amber-400 rounded-full shadow-glow"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-4 h-4 bg-white rounded-full shadow-glow"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CTASection);