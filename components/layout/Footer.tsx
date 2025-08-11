'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const quickLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'AI & ML Engineering',
    'Cloud & DevOps',
    'Data & Databases',
    'Docker & Containers',
    'Automation & RPA',
    'Security & Compliance',
  ];

  const partners = [
    'AWS Partner',
    'Microsoft Azure',
    'Google Cloud',
    'Docker Certified',
    'Kubernetes',
    'Snowflake',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-xl font-bold">Orbitz Technology</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering US enterprises with cutting-edge IT and AI solutions. We help businesses ship faster, scale smarter, and operate securely.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <PhoneIcon className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <EnvelopeIcon className="h-4 w-4" />
                <span>hello@orbitztechnology.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPinIcon className="h-4 w-4" />
                <span>Austin, TX | San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-amber-400 transition-colors text-sm focus-visible"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest insights on enterprise technology trends.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm"
              />
              <motion.button
                className="w-full bg-brand-blue-600 text-white px-4 py-2 rounded-lg hover:bg-brand-blue-700 transition-colors text-sm font-medium flex items-center justify-center space-x-2 focus-visible"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Subscribe</span>
                <ArrowRightIcon className="h-4 w-4" />
              </motion.button>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-400">Trusted Partners</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                {partners.map((partner) => (
                  <span key={partner}>{partner}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors focus-visible">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors focus-visible">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors focus-visible">
              Cookie Policy
            </Link>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Orbitz Technology. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;