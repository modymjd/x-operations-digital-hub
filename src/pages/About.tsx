
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      <section className="bg-xblue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl max-w-3xl">{t('about.subtitle')}</p>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-xblue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-xblue dark:text-white">{t('about.story')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t('about.storyText')}</p>
              <p className="text-gray-600 dark:text-gray-300">
                Founded in 2023, X Operations has quickly established itself as a trusted partner for businesses seeking digital transformation. Our team of experts combines technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            <div className="glass-card">
              <div className="w-full h-64 bg-gradient-to-br from-xorange/30 to-xblue-light/30 rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/22db6b14-a69e-49ae-9b2f-d3c0f75f18e7.png" 
                  alt="X Operations Logo" 
                  className="h-24" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-xblue-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-3xl font-bold mb-6 text-xblue dark:text-white">{t('about.vision')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t('about.visionText')}</p>
              <p className="text-gray-600 dark:text-gray-300">
                We envision a future where Egyptian businesses are at the forefront of technological innovation, leveraging smart solutions to compete globally and drive economic growth.
              </p>
            </div>
            
            <div className="card">
              <h2 className="text-3xl font-bold mb-6 text-xblue dark:text-white">{t('about.mission')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t('about.missionText')}</p>
              <p className="text-gray-600 dark:text-gray-300">
                Every day, we work tirelessly to deliver innovative, high-quality software solutions that address real-world business challenges and create tangible value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-xblue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-xblue dark:text-white">Our Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="card hover:border-xorange transition-all">
              <div className="rounded-full bg-xorange/10 p-4 inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xorange">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-xblue dark:text-white">Excellence</h3>
            </div>
            
            <div className="card hover:border-xorange transition-all">
              <div className="rounded-full bg-xorange/10 p-4 inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xorange">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-xblue dark:text-white">Integrity</h3>
            </div>
            
            <div className="card hover:border-xorange transition-all">
              <div className="rounded-full bg-xorange/10 p-4 inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xorange">
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-xblue dark:text-white">Innovation</h3>
            </div>
            
            <div className="card hover:border-xorange transition-all">
              <div className="rounded-full bg-xorange/10 p-4 inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xorange">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-xblue dark:text-white">Collaboration</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
