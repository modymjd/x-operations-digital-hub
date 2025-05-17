
import React from 'react';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Achievements from '@/components/home/Achievements';

const Home = () => {
  return (
    <div>
      <Hero />
      <Achievements />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
