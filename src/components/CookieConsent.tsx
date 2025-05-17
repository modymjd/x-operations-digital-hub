
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-xblue-dark shadow-lg z-50 p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 dark:text-gray-300 md:mr-4">
          {t('cookies.message')} 
          <Link to="/privacy" className="underline text-xblue dark:text-xorange ml-1">
            {t('cookies.privacyPolicy')}
          </Link>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            {t('cookies.decline')}
          </Button>
          <Button className="bg-xorange hover:bg-xorange-light" size="sm" onClick={handleAccept}>
            {t('cookies.accept')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
