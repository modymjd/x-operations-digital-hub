
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Contact from '@/components/home/Contact';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Contact Hero */}
      <section className="bg-xblue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl max-w-3xl">{t('contact.subtitle')}</p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <Contact />
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-xblue-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-xblue dark:text-white">{t('contact.faq')}</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white">{t('faq.services')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('faq.servicesAnswer')}</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white">{t('faq.timeline')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('faq.timelineAnswer')}</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white">{t('faq.support')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('faq.supportAnswer')}</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white">{t('faq.getStarted')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('faq.getStartedAnswer')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
