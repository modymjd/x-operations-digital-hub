
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
    'testimonials.clientSay': 'What Our Clients Say',
    'testimonials.trustedBy': 'Trusted By',
    'testimonials.clientLogo': 'Client Logo',
    'testimonials.ready': 'Ready to Join Our Success Stories?',
    'testimonials.readyDesc': 'Contact us today to discuss how we can help your business achieve its digital transformation goals.',
    'testimonials.getStarted': 'Get Started',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.company': 'About Us',
    'contact.online': 'X Operations is a 100% online tech partner – proudly serving clients across Egypt and beyond.',
    'contact.phone': 'Contact Information',
    'contact.social': 'Social Media',
    'contact.faq': 'Frequently Asked Questions',
    
    // FAQ Section
    'faq.services': 'What services do you offer?',
    'faq.servicesAnswer': 'We offer a range of services including mobile application development, website design and development, custom system integration, database management, and on-demand smart software solutions.',
    'faq.timeline': 'How long does it take to complete a project?',
    'faq.timelineAnswer': 'Project timelines vary depending on the scope and complexity. Simple websites may take 2-4 weeks, while complex applications might take several months. We provide detailed timelines during the planning phase.',
    'faq.support': 'Do you provide support after project completion?',
    'faq.supportAnswer': 'Yes, we offer ongoing support and maintenance packages to ensure your software continues to run smoothly after launch. We can also implement updates and new features as needed.',
    'faq.getStarted': 'How do we get started?',
    'faq.getStartedAnswer': 'Getting started is easy! Simply contact us through our contact form, email, or phone. We\'ll schedule an initial consultation to discuss your needs and how we can help.',
    
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
    'testimonials.clientSay': 'ماذا يقول عملاؤنا',
    'testimonials.trustedBy': 'يثق بنا',
    'testimonials.clientLogo': 'شعار العميل',
    'testimonials.ready': 'هل أنت مستعد للانضمام إلى قصص نجاحنا؟',
    'testimonials.readyDesc': 'اتصل بنا اليوم لمناقشة كيف يمكننا مساعدة عملك على تحقيق أهداف التحول الرقمي الخاصة به.',
    'testimonials.getStarted': 'ابدأ الآن',
    
    // Contact Section
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.company': 'عن الشركة',
    'contact.online': 'X Operations هي شريك تقني 100% عبر الإنترنت - تخدم العملاء بفخر في جميع أنحاء مصر وخارجها.',
    'contact.phone': 'معلومات الاتصال',
    'contact.social': 'وسائل التواصل الاجتماعي',
    'contact.faq': 'الأسئلة الشائعة',
    
    // FAQ Section
    'faq.services': 'ما هي الخدمات التي تقدمونها؟',
    'faq.servicesAnswer': 'نقدم مجموعة من الخدمات تشمل تطوير تطبيقات الموبايل، تصميم وتطوير المواقع الإلكترونية، تكامل الأنظمة المخصصة، إدارة قواعد البيانات، وحلول برمجية ذكية حسب الطلب.',
    'faq.timeline': 'كم من الوقت يستغرق إنجاز المشروع؟',
    'faq.timelineAnswer': 'تختلف الجداول الزمنية للمشاريع اعتمادًا على النطاق والتعقيد. قد تستغرق المواقع البسيطة 2-4 أسابيع، بينما قد تستغرق التطبيقات المعقدة عدة أشهر. نقدم جداول زمنية مفصلة خلال مرحلة التخطيط.',
    'faq.support': 'هل تقدمون الدعم بعد اكتمال المشروع؟',
    'faq.supportAnswer': 'نعم، نقدم حزم دعم وصيانة مستمرة لضمان استمرار عمل البرمجيات الخاصة بك بسلاسة بعد الإطلاق. يمكننا أيضًا تنفيذ التحديثات والميزات الجديدة حسب الحاجة.',
    'faq.getStarted': 'كيف نبدأ؟',
    'faq.getStartedAnswer': 'البدء سهل! ما عليك سوى الاتصال بنا من خلال نموذج الاتصال أو البريد الإلكتروني أو الهاتف. سنحدد موعدًا للاستشارة الأولية لمناقشة احتياجاتك وكيف يمكننا المساعدة.',
    
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
