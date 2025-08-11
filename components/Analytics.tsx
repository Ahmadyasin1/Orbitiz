'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
    trackEvent: (eventName: string, parameters?: any) => void;
  }
}

export const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 setup
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');

    // Custom event tracking functions
    window.trackEvent = (eventName: string, parameters: any = {}) => {
      gtag('event', eventName, parameters);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

// Event tracking utilities
export const trackCTAClick = (ctaName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaName,
    });
  }
};

export const trackFormSubmit = (formName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formName,
    });
  }
};

export const trackCaseStudyView = (caseStudyTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'case_study_view', {
      event_category: 'engagement',
      event_label: caseStudyTitle,
    });
  }
};