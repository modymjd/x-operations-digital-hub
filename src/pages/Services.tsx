
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      id: 1,
      title: t('services.mobile'),
      description: t('services.mobileDesc'),
      longDescription: "We develop native and cross-platform mobile applications that deliver exceptional user experiences. Our team uses the latest technologies to create applications that are fast, responsive, and user-friendly. We specialize in iOS and Android development, as well as cross-platform solutions using React Native and Flutter.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12" y2="18"></line>
        </svg>
      ),
    },
    {
      id: 2,
      title: t('services.web'),
      description: t('services.webDesc'),
      longDescription: "Our web development services encompass everything from simple brochure websites to complex web applications. We focus on creating modern, responsive designs that look great on any device. Our solutions are built with scalability and performance in mind, ensuring they can grow with your business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
    },
  ];

  const additionalServices = [
    {
      id: 3,
      title: t('services.integration'),
      description: t('services.integrationDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 3 21 3 21 8"></polyline>
          <line x1="4" y1="20" x2="21" y2="3"></line>
          <polyline points="21 16 21 21 16 21"></polyline>
          <line x1="15" y1="15" x2="21" y2="21"></line>
          <line x1="4" y1="4" x2="9" y2="9"></line>
        </svg>
      ),
    },
    {
      id: 4,
      title: t('services.database'),
      description: t('services.databaseDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: t('services.custom'),
      description: t('services.customDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-24">
      {/* Services Hero */}
      <section className="bg-xblue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl max-w-3xl">{t('services.subtitle')}</p>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-20 bg-white dark:bg-xblue-dark">
        <div className="container mx-auto px-4">
          {mainServices.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index !== mainServices.length - 1 ? 'mb-20' : ''
            }`}>
              <div className={`order-${index % 2 === 0 ? '1' : '2'} md:order-${index % 2 === 0 ? '1' : '2'}`}>
                <div className="glass-card flex items-center justify-center py-12">
                  <div className="text-xorange">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className={`order-${index % 2 === 0 ? '2' : '1'} md:order-${index % 2 === 0 ? '2' : '1'}`}>
                <h2 className="text-3xl font-bold mb-4 text-xblue dark:text-white">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.longDescription}</p>
                <Button className="btn-primary">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-gray-50 dark:bg-xblue-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-xblue dark:text-white">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <div key={service.id} className="card hover:border-xorange transition-all group">
                <div className="rounded-full bg-xorange/10 p-4 inline-flex mb-4 group-hover:bg-xorange/20 transition-all">
                  <div className="text-xorange">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white group-hover:text-xorange transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <Button className="btn-outline w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-20 bg-white dark:bg-xblue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-xblue dark:text-white">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="rounded-full bg-xorange/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xorange text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">Understanding your business needs and objectives</p>
            </div>
            
            <div className="card text-center">
              <div className="rounded-full bg-xorange/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xorange text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white">Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">Defining the scope, timeline, and deliverables</p>
            </div>
            
            <div className="card text-center">
              <div className="rounded-full bg-xorange/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xorange text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white">Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Implementing solutions with regular feedback</p>
            </div>
            
            <div className="card text-center">
              <div className="rounded-full bg-xorange/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xorange text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-xblue dark:text-white">Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-xblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to discuss how X Operations can help transform your business.</p>
          <Button className="bg-xorange hover:bg-xorange-light text-white px-8 py-6 text-lg rounded-md font-medium transition-colors">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
