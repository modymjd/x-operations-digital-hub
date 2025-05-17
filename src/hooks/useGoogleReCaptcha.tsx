
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // This is Google's test key, replace with real key in production

export const useGoogleReCaptcha = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If reCAPTCHA script is already added, don't add it again
    if (document.querySelector('script[src*="recaptcha"]')) {
      setIsLoaded(true);
      return;
    }

    // Add the reCAPTCHA script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      window.grecaptcha?.ready(() => {
        setIsLoaded(true);
      });
    };

    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      // Don't remove the script as it might be used by other components
    };
  }, []);

  const executeReCaptcha = async (action: string): Promise<string | null> => {
    if (!isLoaded) return null;
    
    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  };

  return { isLoaded, executeReCaptcha };
};
