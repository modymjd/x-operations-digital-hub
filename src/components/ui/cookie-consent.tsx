// GDPR Cookie Consent Banner Component
import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [accepted, setAccepted] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookie-consent') === 'true';
    setAccepted(hasAccepted);
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setAccepted(true);
  };
  
  if (accepted) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 shadow-lg border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            هذا الموقع يستخدم ملفات تعريف الارتباط لتحسين تجربتك. باستمرارك في استخدام هذا الموقع، فإنك توافق على استخدامنا لملفات تعريف الارتباط وفقًا لسياسة الخصوصية الخاصة بنا.
          </p>
        </div>
        <div className="flex space-x-2 rtl:space-x-reverse">
          <a href="/privacy-policy" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            سياسة الخصوصية
          </a>
          <button 
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
          >
            موافق
          </button>
        </div>
      </div>
    </div>
  );
}
