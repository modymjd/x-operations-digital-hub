
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('services.mobile'),
      description: t('services.mobileDesc'),
      icon: (
        <div className="relative w-14 h-20">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl"></div>
          <div className="absolute inset-1 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-lg"></div>
          <div className="absolute inset-x-3 inset-y-4 bg-white rounded-sm"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      ),
    },
    {
      id: 2,
      title: t('services.web'),
      description: t('services.webDesc'),
      icon: (
        <div className="relative w-20 h-16">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-md"></div>
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gray-600 rounded-t-md flex items-center px-1">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-red-500 rounded-full"></div>
              <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-1.5 inset-x-0 bottom-0 bg-gradient-to-br from-blue-50 to-blue-100 m-0.5 rounded-b-sm"></div>
        </div>
      ),
    },
    {
      id: 3,
      title: t('services.integration'),
      description: t('services.integrationDesc'),
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute left-1 top-1 w-6 h-6 bg-blue-500 rounded"></div>
          <div className="absolute right-1 top-1 w-6 h-6 bg-green-500 rounded"></div>
          <div className="absolute left-1 bottom-1 w-6 h-6 bg-yellow-500 rounded"></div>
          <div className="absolute right-1 bottom-1 w-6 h-6 bg-red-500 rounded"></div>
          <div className="absolute inset-4 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: t('services.database'),
      description: t('services.databaseDesc'),
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-x-2 top-1 h-3 bg-blue-500 rounded-t-full"></div>
          <div className="absolute inset-x-2 top-4 h-3 bg-blue-400 opacity-90"></div>
          <div className="absolute inset-x-2 top-7 h-3 bg-blue-300 opacity-80"></div>
          <div className="absolute inset-x-2 top-10 h-3 bg-blue-200 opacity-70 rounded-b-full"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-1/2"></div>
          <div className="absolute inset-y-1 left-0 w-2 bg-gray-700 rounded-l-full"></div>
        </div>
      ),
    },
    {
      id: 5,
      title: t('services.custom'),
      description: t('services.customDesc'),
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600"></div>
          <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
            <div className="w-8 h-8 text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="section bg-gray-50 dark:bg-xblue-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">{t('services.title')}</h2>
        <p className="section-subtitle text-center">{t('services.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card hover:border-xorange transition-all group animate-scale-in" style={{ animationDelay: `${service.id * 0.1}s` }}>
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-xorange/10 p-4 inline-flex group-hover:bg-xorange/20 transition-all">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white group-hover:text-xorange transition-colors text-center">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
