
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      text: "Honestly, these guys are super professional. They delivered our mobile app fast and flawless.",
      name: "Ahmed Hassan",
      company: "TechCairo",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text: "Amazing service and support! Highly recommended for any startup out there.",
      name: "Heba Mahmoud",
      company: "GrowEgypt",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "They built our company website with outstanding quality. We were truly impressed!",
      name: "Omar Kamal",
      company: "NileFurniture",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 4,
      text: "Never thought digital transformation could change our workflow that much. X Operations made it happen!",
      name: "Amal Sharif",
      company: "MedTech Egypt",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
      id: 5,
      text: "Very organized team. They walk with you step by step. Thank you, X Ops!",
      name: "Tarek Gomaa",
      company: "AgriSolutions",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return (
    <section id="testimonials" className="section bg-white dark:bg-xblue-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">{t('testimonials.title')}</h2>
        <p className="section-subtitle text-center">{t('testimonials.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-bold text-xblue dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">"{testimonial.text}"</p>
              <div className="mt-4 flex">
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
  );
};

export default Testimonials;
