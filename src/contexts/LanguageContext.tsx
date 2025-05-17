
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact Us',
    'nav.language': 'العربية',
    
    // Hero Section
    'hero.slogan': 'Your Egyptian Partner for Smart Digital Transformation',
    'hero.cta': 'Get Started',
    'hero.learnMore': 'Learn More',
    
    // About Section
    'about.title': 'About X Operations',
    'about.subtitle': 'We help businesses embrace digital transformation, improve operational efficiency, and boost productivity.',
    'about.story': 'Company Story',
    'about.storyText': 'X Operations is an Egyptian software startup founded with a mission to provide smart and customized software solutions that enable businesses to thrive in the digital age.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To be the leading digital transformation enabler in Egypt and the Middle East, delivering innovative solutions that drive business excellence.',
    'about.mission': 'Our Mission',
    'about.missionText': 'To empower businesses with cutting-edge software solutions that optimize operations, enhance productivity, and facilitate sustainable growth.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive software solutions tailored to meet your business needs',
    'services.mobile': 'Mobile Application Development',
    'services.mobileDesc': 'Native and cross-platform mobile applications that deliver exceptional user experiences',
    'services.web': 'Website Design & Development',
    'services.webDesc': 'Modern, responsive websites and web applications built with the latest technologies',
    'services.integration': 'Custom System Integration',
    'services.integrationDesc': 'Seamless integration of different software systems to create unified workflows',
    'services.database': 'Database Management',
    'services.databaseDesc': 'Efficient database design, development, and management for optimal performance',
    'services.custom': 'On-demand Smart Solutions',
    'services.customDesc': 'Tailored software solutions designed to address specific business challenges',
    
    // Testimonials Section
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What our clients say about our services',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.social': 'Social Media',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.testimonials': 'آراء العملاء',
    'nav.contact': 'اتصل بنا',
    'nav.language': 'English',
    
    // Hero Section
    'hero.slogan': 'شريكك المصري للتحول الرقمي الذكي',
    'hero.cta': 'ابدأ الآن',
    'hero.learnMore': 'اعرف المزيد',
    
    // About Section
    'about.title': 'عن X Operations',
    'about.subtitle': 'نساعد الشركات على تبني التحول الرقمي وتحسين كفاءة العمليات وزيادة الإنتاجية.',
    'about.story': 'قصتنا',
    'about.storyText': 'X Operations هي شركة مصرية ناشئة في مجال البرمجيات تأسست بهدف تقديم حلول برمجية ذكية ومخصصة تمكن الشركات من الازدهار في العصر الرقمي.',
    'about.vision': 'رؤيتنا',
    'about.visionText': 'أن نكون الشركة الرائدة في التحول الرقمي في مصر والشرق الأوسط، من خلال تقديم حلول مبتكرة تدفع التميز في الأعمال.',
    'about.mission': 'مهمتنا',
    'about.missionText': 'تمكين الشركات من خلال حلول برمجية متطورة تعمل على تحسين العمليات، وتعزيز الإنتاجية، وتسهيل النمو المستدام.',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم حلول برمجية شاملة مصممة لتلبية احتياجات عملك',
    'services.mobile': 'تطوير تطبيقات الموبايل',
    'services.mobileDesc': 'تطبيقات موبايل أصلية ومتعددة المنصات تقدم تجارب استخدام استثنائية',
    'services.web': 'تصميم وتطوير المواقع',
    'services.webDesc': 'مواقع وتطبيقات ويب حديثة ومتجاوبة مبنية بأحدث التقنيات',
    'services.integration': 'تكامل الأنظمة المخصصة',
    'services.integrationDesc': 'دمج سلس لأنظمة البرمجيات المختلفة لإنشاء سير عمل موحد',
    'services.database': 'إدارة قواعد البيانات',
    'services.databaseDesc': 'تصميم وتطوير وإدارة قواعد البيانات بكفاءة للحصول على الأداء الأمثل',
    'services.custom': 'حلول ذكية حسب الطلب',
    'services.customDesc': 'حلول برمجية مخصصة مصممة لمعالجة تحديات الأعمال المحددة',
    
    // Testimonials Section
    'testimonials.title': 'آراء العملاء',
    'testimonials.subtitle': 'ماذا يقول عملاؤنا عن خدماتنا',
    
    // Contact Section
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.social': 'التواصل الاجتماعي',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
