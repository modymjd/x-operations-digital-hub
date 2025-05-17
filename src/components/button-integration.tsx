// Integration of button components into App.tsx
import { useEffect } from 'react';
import { LearnMoreButton } from '@/components/ui/learn-more-button';
import { GetStartedButton } from '@/components/ui/get-started-button';
import { SocialMediaLinks } from '@/components/ui/social-media-links';
import { CookieConsent } from '@/components/ui/cookie-consent';

// Add CSS for smooth scrolling to the entire document
document.documentElement.style.scrollBehavior = 'smooth';

// Add WhatsApp number from environment variables
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '201015175618';

// Update the footer or header component to include social media links
export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">X Operations Digital Hub</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">تواصل معنا عبر وسائل التواصل الاجتماعي</p>
          </div>
          
          <SocialMediaLinks 
            facebookId="xoperationsdigitalhub"
            youtubeId="xoperationsdigitalhub"
            whatsappNumber={whatsappNumber}
            className="mt-4 md:mt-0"
          />
        </div>
      </div>
    </footer>
  );
}

// Example of using the LearnMoreButton in a hero section
export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">مرحباً بك في X Operations Digital Hub</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">نقدم حلولاً رقمية متكاملة لتطوير أعمالك ومساعدتك على النمو في العالم الرقمي</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <LearnMoreButton targetId="services" className="w-full sm:w-auto" />
          <GetStartedButton 
            phoneNumber={whatsappNumber} 
            message="مرحباً، أود معرفة المزيد عن خدماتكم" 
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

// Add CookieConsent to the main App component
export function App() {
  return (
    <>
      {/* Your existing app content */}
      <CookieConsent />
    </>
  );
}
