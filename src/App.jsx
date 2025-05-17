import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from "./components/ui/toaster";


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
    <div className="min-h-screen bg-[#e6f0f8] text-gray-900 antialiased font-sans leading-relaxed relative overflow-hidden">
      {/* Animated 3D effect blobs */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full blur-3xl opacity-40 animate-float-slow" />
  <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-gradient-to-br from-cyan-200 to-indigo-300 rounded-full blur-2xl opacity-30 animate-float" />
  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] bg-gradient-to-br from-sky-200 to-purple-200 rounded-full blur-2xl opacity-20 animate-float-slow" />
</div>


      <Navbar activeSection={activeSection} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
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