'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { trackCaseStudyView } from '@/components/Analytics';

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: 'Fortune 500 Retailer Cloud Migration',
      industry: 'Retail',
      challenge: 'Legacy infrastructure causing 40% revenue loss during peak seasons',
      solution: 'Multi-cloud architecture with auto-scaling and disaster recovery',
      results: {
        metric1: { value: '99.99%', label: 'Uptime Achieved' },
        metric2: { value: '60%', label: 'Cost Reduction' },
        metric3: { value: '300%', label: 'Performance Boost' },
      },
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: {
        quote: "Orbitz transformed our entire infrastructure. We now handle Black Friday traffic without breaking a sweat.",
        author: "Sarah Johnson",
        position: "CTO, RetailCorp"
      }
    },
    {
      title: 'Healthcare AI Diagnostic Platform',
      industry: 'Healthcare',
      challenge: 'Manual diagnostic processes taking 72 hours per patient analysis',
      solution: 'AI-powered diagnostic platform with real-time image analysis',
      results: {
        metric1: { value: '15min', label: 'Analysis Time' },
        metric2: { value: '94%', label: 'Accuracy Rate' },
        metric3: { value: '10x', label: 'Faster Diagnosis' },
      },
      technologies: ['Python', 'TensorFlow', 'Docker', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: {
        quote: "The AI platform has revolutionized our diagnostic capabilities and improved patient outcomes significantly.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, HealthTech Solutions"
      }
    },
    {
      title: 'Financial Services DevOps Transformation',
      industry: 'Financial Services',
      challenge: 'Manual deployments taking weeks with high error rates',
      solution: 'Complete CI/CD pipeline with automated testing and compliance checks',
      results: {
        metric1: { value: '30min', label: 'Deployment Time' },
        metric2: { value: '95%', label: 'Error Reduction' },
        metric3: { value: '5x', label: 'Release Frequency' },
      },
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: {
        quote: "Our development velocity has increased dramatically while maintaining the highest security standards.",
        author: "Robert Martinez",
        position: "VP of Engineering, FinanceFirst"
      }
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const handleViewCaseStudy = (title: string) => {
    trackCaseStudyView(title);
    // Additional logic for viewing case study
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-600 to-brand-emerald-500">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped enterprise clients achieve measurable success 
            through innovative technology solutions.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12 space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-brand-blue-100 text-brand-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {caseStudies[activeCase].industry}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {caseStudies[activeCase].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      <strong>Challenge:</strong> {caseStudies[activeCase].challenge}
                    </p>
                    <p className="text-gray-600">
                      <strong>Solution:</strong> {caseStudies[activeCase].solution}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6">
                    {Object.values(caseStudies[activeCase].results).map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-brand-blue-600 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudies[activeCase].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-brand-blue-50 p-6 rounded-2xl">
                    <p className="text-gray-700 italic mb-4">
                      "{caseStudies[activeCase].testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {caseStudies[activeCase].testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {caseStudies[activeCase].testimonial.position}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className="bg-brand-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-brand-blue-700 transition-colors flex items-center space-x-2 focus-visible"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewCaseStudy(caseStudies[activeCase].title)}
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRightIcon className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={caseStudies[activeCase].image}
                    alt={caseStudies[activeCase].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevCase}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow focus-visible"
              aria-label="Previous case study"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeCase ? 'bg-brand-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow focus-visible"
              aria-label="Next case study"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="text-center mt-12">
            <motion.button
              className="bg-brand-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-amber-600 transition-colors focus-visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Case Studies
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;