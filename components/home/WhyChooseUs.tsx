'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [animatedValues, setAnimatedValues] = useState({
    downtime: 0,
    savings: 0,
    deploys: 0,
    nps: 0,
  });

  const targetValues = {
    downtime: 40,
    savings: 28,
    deploys: 3,
    nps: 72,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedValues({
          downtime: Math.round(targetValues.downtime * easeOut),
          savings: Math.round(targetValues.savings * easeOut),
          deploys: Math.round(targetValues.deploys * easeOut),
          nps: Math.round(targetValues.nps * easeOut),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [inView]);

  const certifications = [
    { name: 'AWS Certified', level: 'Advanced' },
    { name: 'Azure Partner', level: 'Gold' },
    { name: 'Google Cloud', level: 'Premier' },
    { name: 'SOC 2 Type II', level: 'Compliant' },
    { name: 'ISO 27001', level: 'Certified' },
    { name: 'HIPAA', level: 'Compliant' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-primary-100/50 to-brand-purple-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-emerald-100/50 to-brand-blue-100/50 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Why Enterprise Leaders Choose{' '}
            <span className="gradient-text">
              Orbitz
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We don't just deliver technology solutions—we transform how your business operates, 
            scales, and competes in the digital economy.
          </motion.p>
        </motion.div>

        {/* KPI Section */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-8 glass rounded-3xl modern-card shadow-modern group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/10 to-brand-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-6xl font-bold gradient-text mb-2 relative z-10">
              {animatedValues.downtime}%
            </div>
            <div className="text-gray-800 font-semibold text-lg relative z-10">Downtime Reduction</div>
            <div className="text-sm text-gray-600 mt-2 relative z-10">Average across clients</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 glass rounded-3xl modern-card shadow-modern group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald-500/10 to-brand-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-6xl font-bold gradient-text mb-2 relative z-10">
              {animatedValues.savings}%
            </div>
            <div className="text-gray-800 font-semibold text-lg relative z-10">Cloud Cost Savings</div>
            <div className="text-sm text-gray-600 mt-2 relative z-10">Infrastructure optimization</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 glass rounded-3xl modern-card shadow-modern group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-amber-500/10 to-brand-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-6xl font-bold gradient-text mb-2 relative z-10">
              {animatedValues.deploys}×
            </div>
            <div className="text-gray-800 font-semibold text-lg relative z-10">Faster Deployments</div>
            <div className="text-sm text-gray-600 mt-2 relative z-10">CI/CD automation</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 glass rounded-3xl modern-card shadow-modern group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/10 to-brand-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-6xl font-bold gradient-text mb-2 relative z-10">
              {animatedValues.nps}
            </div>
            <div className="text-gray-800 font-semibold text-lg relative z-10">NPS Score</div>
            <div className="text-sm text-gray-600 mt-2 relative z-10">Client satisfaction</div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center relative"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            Enterprise-Grade Certifications & Compliance
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 glass rounded-2xl modern-card shadow-modern group relative overflow-hidden"
              >
                <div className="absolute inset-0 modern-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="font-bold text-gray-900 text-sm mb-2 relative z-10">
                  {cert.name}
                </div>
                <div className="text-xs text-brand-primary-600 font-semibold relative z-10">
                  {cert.level}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;