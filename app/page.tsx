'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import TrustLogos from '@/components/home/TrustLogos';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesSection from '@/components/home/ServicesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import PartnersSection from '@/components/home/PartnersSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <TrustLogos />
      <WhyChooseUs />
      <ServicesSection />
      <CaseStudiesSection />
      <PartnersSection />
      <CTASection />
    </motion.div>
  );
}