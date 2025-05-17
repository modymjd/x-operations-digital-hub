
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Facebook, Youtube, Phone } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Social Media Links */}
      <div className="fixed top-1/2 transform -translate-y-1/2 left-4 z-30 hidden md:flex flex-col gap-4">
        <a 
          href="https://www.facebook.com/share/1CDjAGZb9U/?mibextid=wwXIfr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-xblue hover:bg-xblue-light text-white rounded-full transition-all hover:scale-110"
          aria-label="Facebook"
        >
          <Facebook size={20} />
        </a>
        <a 
          href="https://youtube.com/@xoperations.official?si=KGF3tNrDX7A4Lwch" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-xorange hover:bg-xorange-light text-white rounded-full transition-all hover:scale-110"
          aria-label="YouTube"
        >
          <Youtube size={20} />
        </a>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/201015175618" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default Layout;
