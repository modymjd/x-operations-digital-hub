
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-xblue-dark px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 text-xorange">404</h1>
        <p className="text-2xl text-xblue dark:text-white mb-8">Oops! Page not found</p>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="btn-primary">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
