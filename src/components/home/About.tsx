
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section bg-white dark:bg-xblue-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">{t('about.title')}</h2>
        <p className="section-subtitle text-center">{t('about.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Company Story */}
          <div className="card animate-scale-in">
            <div className="rounded-full bg-xorange/10 dark:bg-xorange/20 p-4 inline-flex mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xorange">
                <path d="M18 6V4H6v2"></path>
                <path d="M6 12v-2h12v2"></path>
                <path d="M18 18v2H6v-2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white">{t('about.story')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.storyText')}</p>
          </div>
          
          {/* Vision */}
          <div className="card animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-full bg-xorange/10 dark:bg-xorange/20 p-4 inline-flex mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xorange">
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white">{t('about.vision')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.visionText')}</p>
          </div>
          
          {/* Mission */}
          <div className="card animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="rounded-full bg-xorange/10 dark:bg-xorange/20 p-4 inline-flex mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xorange">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white">{t('about.mission')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.missionText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
