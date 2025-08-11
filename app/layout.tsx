import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Orbitz Technology - Empowering Businesses with Cutting-Edge IT & AI Solutions',
  description: 'Orbitz Technology helps US enterprises ship faster, scale smarter, and operate securely through AI, Cloud, DevOps, and Automation solutions.',
  keywords: 'AI, Cloud, DevOps, Automation, Enterprise IT, Docker, Kubernetes, Database Solutions',
  openGraph: {
    title: 'Orbitz Technology - Enterprise IT & AI Solutions',
    description: 'Empowering businesses with cutting-edge technology solutions',
    url: 'https://orbitztechnology.com',
    siteName: 'Orbitz Technology',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}