
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Security headers setup
const setupSecurityHeaders = () => {
  // This is client-side only - actual headers should be set on the server
  // But we can demonstrate the concept here
  console.info('Security headers should be set on the server:');
  console.info('Content-Security-Policy: default-src \'self\'; script-src \'self\' https://www.google.com https://www.gstatic.com; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data: https:; connect-src \'self\' https://api.example.com;');
  console.info('X-Content-Type-Options: nosniff');
  console.info('X-Frame-Options: DENY');
  console.info('X-XSS-Protection: 1; mode=block');
  
  // Force HTTPS in production (would actually be done on server)
  if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
    window.location.href = window.location.href.replace('http:', 'https:');
  }
};

const App = () => {
  useEffect(() => {
    setupSecurityHeaders();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
              <CookieConsent />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
