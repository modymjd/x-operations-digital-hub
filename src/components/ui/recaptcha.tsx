// ReCAPTCHA component for form protection
import { useEffect, useState } from 'react';

interface ReCAPTCHAProps {
  onVerify: (token: string) => void;
}

export function ReCAPTCHA({ onVerify }: ReCAPTCHAProps) {
  const [loaded, setLoaded] = useState(false);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    // Load the reCAPTCHA script
    if (!document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setLoaded(true);
      document.head.appendChild(script);
    } else {
      setLoaded(true);
    }

    return () => {
      // Cleanup if needed
    };
  }, [siteKey]);

  useEffect(() => {
    if (loaded && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(siteKey, { action: 'submit' }).then((token: string) => {
          onVerify(token);
        });
      });
    }
  }, [loaded, onVerify, siteKey]);

  return (
    <div className="g-recaptcha-container">
      <div 
        className="g-recaptcha" 
        data-sitekey={siteKey}
        data-size="invisible"
      ></div>
    </div>
  );
}

// Add to global window type
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
