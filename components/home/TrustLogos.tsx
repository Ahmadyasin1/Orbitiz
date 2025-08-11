'use client';

import { motion } from 'framer-motion';

const TrustLogos = () => {
  const logos = [
    { name: 'AWS', icon: '🔶' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Google Cloud', icon: '🌥️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Snowflake', icon: '❄️' },
    { name: 'Databricks', icon: '🧱' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <p className="text-gray-600 text-sm font-medium mb-8 uppercase tracking-wider">
            Trusted by enterprises, powered by industry leaders
          </p>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                variants={itemVariants}
                className="flex flex-col items-center space-y-2 group"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl transition-transform group-hover:scale-110">
                  {logo.icon}
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLogos;