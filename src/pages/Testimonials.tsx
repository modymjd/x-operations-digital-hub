
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { UserRound } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      text: "Honestly, these guys are super professional. They delivered our mobile app fast and flawless.",
      name: "Ahmed Hassan",
      company: "TechCairo",
      rating: 5,
      project: "Mobile App Development",
      gender: "male"
    },
    {
      id: 2,
      text: "Amazing service and support! Highly recommended for any startup out there.",
      name: "Heba Mahmoud",
      company: "GrowEgypt",
      rating: 5,
      project: "Website Redesign",
      gender: "female"
    },
    {
      id: 3,
      text: "They built our company website with outstanding quality. We were truly impressed!",
      name: "Omar Kamal",
      company: "NileFurniture",
      rating: 5,
      project: "E-commerce Development",
      gender: "male"
    },
    {
      id: 4,
      text: "Never thought digital transformation could change our workflow that much. X Operations made it happen!",
      name: "Amal Sharif",
      company: "MedTech Egypt",
      rating: 5,
      project: "Custom System Integration",
      gender: "female"
    },
    {
      id: 5,
      text: "Very organized team. They walk with you step by step. Thank you, X Ops!",
      name: "Tarek Gomaa",
      company: "AgriSolutions",
      rating: 5,
      project: "Database Management",
      gender: "male"
    },
    {
      id: 6,
      text: "Working with X Operations was a game-changer for our business. Their expertise in mobile app development helped us reach new customers and streamline our operations.",
      name: "Sara Ahmed",
      company: "LocalMarket",
      rating: 5,
      project: "Mobile App Development",
      gender: "female"
    },
    {
      id: 7,
      text: "The team at X Operations delivered our project ahead of schedule and exceeded our expectations. Their attention to detail and commitment to quality is unmatched.",
      name: "Mahmoud Khalil",
      company: "EduTech Solutions",
      rating: 5,
      project: "Educational Platform",
      gender: "male"
    },
    {
      id: 8,
      text: "X Operations transformed our outdated systems into a modern, efficient solution. Their team was professional, responsive, and truly understood our business needs.",
      name: "Laila Hashem",
      company: "Cairo Logistics",
      rating: 5,
      project: "System Modernization",
      gender: "female"
    },
  ];

  return (
    <div className="pt-24">
      {/* Testimonials Hero */}
      <section className="bg-xblue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('testimonials.title')}</h1>
          <p className="text-xl max-w-3xl">{t('testimonials.subtitle')}</p>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="py-20 bg-white dark:bg-xblue-dark">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full border-4 border-xorange mx-auto bg-gray-100 dark:bg-xblue-light/30 flex items-center justify-center">
                  <UserRound size={64} className="text-xblue dark:text-white" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-xl mb-6 italic text-gray-600 dark:text-gray-300">"{testimonials[0].text}"</p>
                <div>
                  <h3 className="text-xl font-bold text-xblue dark:text-white">{testimonials[0].name}</h3>
                  <p className="text-xorange">{testimonials[0].company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Project: {testimonials[0].project}</p>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="text-xorange"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-xblue-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-xblue dark:text-white">{t('testimonials.clientSay')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-xblue-light/30 mr-4 flex items-center justify-center">
                    <UserRound size={32} className="text-xblue dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xblue dark:text-white">{testimonial.name}</h4>
                    <p className="text-xorange text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Project: {testimonial.project}</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="text-xorange"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-20 bg-white dark:bg-xblue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-xblue dark:text-white">{t('testimonials.trustedBy')}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((logo) => (
              <div key={logo} className="flex items-center justify-center">
                <div className="bg-gray-200 dark:bg-xblue-light/30 rounded-lg p-6 h-24 w-full flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-bold">{t('testimonials.clientLogo')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-xblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('testimonials.ready')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('testimonials.readyDesc')}</p>
          <a 
            href="/contact" 
            className="bg-xorange hover:bg-xorange-light text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            {t('testimonials.getStarted')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
