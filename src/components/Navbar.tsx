
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-xblue-dark/90 shadow-lg backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/22db6b14-a69e-49ae-9b2f-d3c0f75f18e7.png" 
            alt="X Operations Logo" 
            className="h-10" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/about" className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/services" className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors">
            {t('nav.services')}
          </Link>
          <Link to="/testimonials" className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors">
            {t('nav.testimonials')}
          </Link>
          <Link to="/contact" className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors">
            {t('nav.contact')}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-md bg-xblue text-white hover:bg-xblue-light transition-colors"
          >
            {t('nav.language')}
          </button>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-xblue" />}
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md bg-xblue text-white hover:bg-xblue-light transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-xblue-dark shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services" 
              className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/testimonials" 
              className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.testimonials')}
            </Link>
            <Link 
              to="/contact" 
              className="text-xblue dark:text-white hover:text-xorange dark:hover:text-xorange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
