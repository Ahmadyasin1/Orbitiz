'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  CubeIcon,
  CogIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI & ML Engineering',
      description: 'Transform your data into intelligent insights',
      details: [
        'MLOps pipeline implementation',
        'Large Language Model (LLM) integration',
        'Retrieval Augmented Generation (RAG) systems',
        'Model monitoring and optimization',
        'Computer vision and NLP solutions',
        'AI governance and ethics frameworks',
      ],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: CloudIcon,
      title: 'Cloud & DevOps',
      description: 'Scale with confidence in the cloud',
      details: [
        'Infrastructure as Code (Terraform, CloudFormation)',
        'CI/CD pipeline automation',
        'Kubernetes orchestration and management',
        'Multi-cloud strategy and migration',
        'Observability and monitoring solutions',
        'Site reliability engineering (SRE)',
      ],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: CircleStackIcon,
      title: 'Data & Databases',
      description: 'Unlock the power of your data',
      details: [
        'Data lakes and warehouses design',
        'ETL/ELT pipeline development',
        'Database performance optimization',
        'Real-time analytics and dashboards',
        'Data governance and compliance',
        'Migration and modernization services',
      ],
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: CubeIcon,
      title: 'Docker & Containers',
      description: 'Containerize and orchestrate your applications',
      details: [
        'Containerization strategy and implementation',
        'Microservices architecture design',
        'Container security best practices',
        'Registry management and governance',
        'Performance optimization and monitoring',
        'Legacy application modernization',
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: CogIcon,
      title: 'Automation & RPA',
      description: 'Automate processes for maximum efficiency',
      details: [
        'Business process automation',
        'API integration and management',
        'Workflow optimization and design',
        'Robotic Process Automation (RPA)',
        'Custom automation tool development',
        'Change management and training',
      ],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Compliance',
      description: 'Protect your digital assets',
      details: [
        'Application security assessments',
        'Single Sign-On (SSO) implementation',
        'Policy as Code frameworks',
        'Compliance automation (SOC 2, HIPAA, PCI)',
        'Vulnerability management programs',
        'Security training and awareness',
      ],
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-brand-purple-200/30 to-brand-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-brand-emerald-200/30 to-brand-amber-200/30 rounded-full blur-3xl"></div>
      
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
            Comprehensive{' '}
            <span className="gradient-text">
              Technology Services
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From AI and cloud infrastructure to security and automation, we provide 
            end-to-end solutions that drive digital transformation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Tabs */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.title}
                  onClick={() => setActiveService(index)}
                  className={`w-full p-6 rounded-3xl text-left transition-all duration-500 focus-visible modern-card group relative overflow-hidden ${
                    activeService === index
                      ? 'glass shadow-modern-lg scale-105'
                      : 'bg-white/80 shadow-modern hover:shadow-modern-lg'
                  }`}
                  whileHover={{ scale: activeService === index ? 1.05 : 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-glow relative z-10`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {activeService === index && (
                    <motion.div
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-3 h-3 rounded-full modern-gradient shadow-glow"></div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Service Details */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass rounded-3xl p-8 shadow-modern-lg relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} opacity-5`}></div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-5 rounded-2xl bg-gradient-to-r ${services[activeService].color} shadow-glow`}>
                    {(() => {
                      const Icon = services[activeService].icon;
                      return <Icon className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {services[activeService].title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {services[activeService].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {services[activeService].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-colors group"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${services[activeService].color} shadow-glow group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="btn-modern text-white px-8 py-4 rounded-full font-semibold text-lg focus-visible shadow-glow"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About {services[activeService].title}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;