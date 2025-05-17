
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Open WhatsApp
  const openWhatsApp = () => {
    window.open("https://wa.me/201015175618", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-xblue to-xblue-dark opacity-90"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/22db6b14-a69e-49ae-9b2f-d3c0f75f18e7.png" 
              alt="X Operations Logo" 
              className="h-32 mb-6 mx-auto" 
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">XOperations</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-8">
              {t('hero.slogan')}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="btn-primary" size="lg" onClick={openWhatsApp}>
                {t('hero.cta')}
              </Button>
              <Button 
                className="btn-outline" 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('services')}
              >
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
