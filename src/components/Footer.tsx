
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-xblue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <img 
              src="/lovable-uploads/22db6b14-a69e-49ae-9b2f-d3c0f75f18e7.png" 
              alt="X Operations Logo" 
              className="h-12 mb-4" 
            />
            <p className="text-gray-300">
              X Operations - {t('hero.slogan')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-xorange transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-xorange transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-xorange transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-xorange transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact.title')}</h3>
            <p className="mb-2">
              <strong>{t('contact.email')}:</strong> info@xoperations.com
            </p>
            <p className="mb-4">
              <strong>{t('contact.phone')}:</strong> +20 123 456 7890
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-xblue hover:bg-xorange hover:text-white transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-xblue hover:bg-xorange hover:text-white transition-colors p-2 rounded-full"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-700" />
        
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} X Operations. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
