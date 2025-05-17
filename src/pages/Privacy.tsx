
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Privacy Policy Hero */}
      <section className="bg-xblue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('privacy.title')}</h1>
          <p className="text-xl max-w-3xl">{t('privacy.subtitle')}</p>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="py-16 bg-white dark:bg-xblue-dark">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <h2>{t('privacy.dataCollection')}</h2>
            <p>{t('privacy.dataCollectionDesc')}</p>
            
            <h2>{t('privacy.dataUse')}</h2>
            <p>{t('privacy.dataUseDesc')}</p>
            
            <h2>{t('privacy.cookies')}</h2>
            <p>{t('privacy.cookiesDesc')}</p>
            
            <h2>{t('privacy.thirdParty')}</h2>
            <p>{t('privacy.thirdPartyDesc')}</p>
            
            <h2>{t('privacy.rights')}</h2>
            <p>{t('privacy.rightsDesc')}</p>
            
            <h2>{t('privacy.security')}</h2>
            <p>{t('privacy.securityDesc')}</p>
            
            <h2>{t('privacy.changes')}</h2>
            <p>{t('privacy.changesDesc')}</p>
            
            <h2>{t('privacy.contact')}</h2>
            <p>{t('privacy.contactDesc')}</p>
            
            <div className="mt-12">
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('privacy.lastUpdated')}: 2025-05-17</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              className="btn-primary"
              onClick={() => window.open("https://wa.me/201015175618", "_blank", "noopener,noreferrer")}
            >
              {t('privacy.contact')} <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
