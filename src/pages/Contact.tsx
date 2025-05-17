
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
      
      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-xblue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-xblue dark:text-white">Visit Us</h2>
          <div className="glass-card overflow-hidden">
            <div className="w-full h-96 bg-gray-200 dark:bg-xblue-light/20 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-xblue-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-xblue dark:text-white">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white">What services do you offer?</h3>
              <p className="text-gray-600 dark:text-gray-300">We offer a range of services including mobile application development, website design and development, custom system integration, database management, and on-demand smart software solutions.</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white">How long does it take to complete a project?</h3>
              <p className="text-gray-600 dark:text-gray-300">Project timelines vary depending on the scope and complexity. Simple websites may take 2-4 weeks, while complex applications might take several months. We provide detailed timelines during the planning phase.</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white">Do you provide support after project completion?</h3>
              <p className="text-gray-600 dark:text-gray-300">Yes, we offer ongoing support and maintenance packages to ensure your software continues to run smoothly after launch. We can also implement updates and new features as needed.</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white">How do we get started?</h3>
              <p className="text-gray-600 dark:text-gray-300">Getting started is easy! Simply contact us through our contact form, email, or phone. We'll schedule an initial consultation to discuss your needs and how we can help.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
