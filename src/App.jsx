
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from "@/components/ui/toaster";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';



const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const offset = 200;
        
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background blobs */}
      
      
      <Navbar activeSection={activeSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section id="home">
              <Hero />
            </section>
            
            <section id="projects" className="py-20">
              <Projects />
            </section>
            
            <section id="skills" className="py-20">
              <Skills />
            </section>
            
            <section id="contact" className="py-20">
              <Contact />
            </section>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
