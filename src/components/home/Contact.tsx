
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';
import { useGoogleReCaptcha } from '@/hooks/useGoogleReCaptcha';

const Contact = () => {
  const { t } = useLanguage();
  const { executeReCaptcha, isLoaded } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to sanitize input
  const sanitizeInput = (input: string): string => {
    // Remove potentially dangerous characters
    return input
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[^\w\s@.,?!()]/gi, '') // Allow only safe characters
      .trim();
  };

  // Helper function to validate email
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Sanitize the input before storing in state
    setFormData(prev => ({ ...prev, [name]: sanitizeInput(value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t('contact.errorAllFields'));
      return;
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      toast.error(t('contact.errorInvalidEmail'));
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Execute reCAPTCHA when available
      let recaptchaToken = null;
      if (isLoaded && executeReCaptcha) {
        recaptchaToken = await executeReCaptcha('contactFormSubmit');
        
        if (!recaptchaToken) {
          toast.error(t('contact.errorRecaptcha'));
          setIsSubmitting(false);
          return;
        }
      }
      
      // Simulate form submission with rate limiting
      setTimeout(() => {
        toast.success(t('contact.successMessage'));
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1500);
      
    } catch (error) {
      toast.error(t('contact.errorGeneric'));
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-xblue-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">{t('contact.title')}</h2>
        <p className="section-subtitle text-center">{t('contact.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  maxLength={100}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.email')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  maxLength={100}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                  maxLength={1000}
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 text-xblue dark:text-white">{t('contact.company')}</h3>
              <p className="text-gray-600 dark:text-gray-300">X Operations is a 100% online tech partner – proudly serving clients across Egypt and beyond.</p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 text-xblue dark:text-white">{t('contact.phone')}</h3>
              <p className="text-gray-600 dark:text-gray-300">+20 123 456 7890</p>
              <p className="text-gray-600 dark:text-gray-300">info@xoperations.com</p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 text-xblue dark:text-white">{t('contact.social')}</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/share/1CDjAGZb9U/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-xblue text-white hover:bg-xorange transition-colors p-3 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@xoperations.official?si=KGF3tNrDX7A4Lwch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-xblue text-white hover:bg-xorange transition-colors p-3 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a
                  href="https://wa.me/201015175618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white hover:bg-green-600 transition-colors p-3 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
