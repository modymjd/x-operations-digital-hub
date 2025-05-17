
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient min-h-screen flex items-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-xblue to-xblue-dark opacity-90"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 animate-fade-in">
            <img 
              src="/lovable-uploads/22db6b14-a69e-49ae-9b2f-d3c0f75f18e7.png" 
              alt="X Operations Logo" 
              className="h-24 mb-6" 
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">XOperations</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8">
              {t('hero.slogan')}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" size="lg">
                {t('hero.cta')}
              </Button>
              <Button className="btn-outline" size="lg" variant="outline">
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in">
            <div className="glass-card rounded-2xl">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-xorange/30 to-xblue-light/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="rounded-full bg-white/20 p-6 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <p className="mt-4 text-lg font-medium">Smart Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
