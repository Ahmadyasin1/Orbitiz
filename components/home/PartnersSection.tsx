'use client';

import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    { name: 'Amazon Web Services', logo: '🔶', category: 'Cloud Infrastructure' },
    { name: 'Microsoft Azure', logo: '☁️', category: 'Cloud Platform' },
    { name: 'Google Cloud Platform', logo: '🌥️', category: 'Cloud Services' },
    { name: 'Docker', logo: '🐳', category: 'Containerization' },
    { name: 'Kubernetes', logo: '⚙️', category: 'Orchestration' },
    { name: 'Terraform', logo: '🛠️', category: 'Infrastructure as Code' },
    { name: 'PostgreSQL', logo: '🐘', category: 'Database' },
    { name: 'MongoDB', logo: '🍃', category: 'NoSQL Database' },
    { name: 'Redis', logo: '🔴', category: 'Caching' },
    { name: 'Snowflake', logo: '❄️', category: 'Data Warehouse' },
    { name: 'Databricks', logo: '🧱', category: 'Analytics Platform' },
    { name: 'Jenkins', logo: '👨‍🔧', category: 'CI/CD' },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powered by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-600 to-brand-emerald-500">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with the world's leading technology companies to deliver 
            cutting-edge solutions that scale with your business needs.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Partners */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-8 py-8"
            animate={{
              x: [0, -100 * partners.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: 'fit-content' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 min-w-[200px]">
                  <div className="text-center space-y-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {partner.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-gray-500">{partner.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>

      {/* Partnership Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Expertise</h3>
            <p className="text-gray-600">
              Our team holds advanced certifications from all major cloud providers 
              and technology partners, ensuring best-in-class implementations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-brand-emerald-500 to-brand-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Latest Technologies</h3>
            <p className="text-gray-600">
              Access to beta programs, early releases, and cutting-edge features 
              that give your business a competitive advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-brand-amber-500 to-brand-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Support</h3>
            <p className="text-gray-600">
              Direct access to vendor support channels and priority assistance 
              for mission-critical issues and escalations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;