
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const resumePath = '/ssk-resume.pdf'; // Placeholder path

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
        <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
    SSK
  </span>
</motion.div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navLinks.length + 0.3, duration: 0.4 }}
            >
              <Button variant="outline" size="sm" asChild>
                <a href={resumePath} download="ssk-resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>


          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
             <Button variant="ghost" size="icon" asChild className="mr-2 text-foreground/80 hover:text-foreground">
               <a href={resumePath} download="ssk-resume.pdf" aria-label="Download Resume">
                 <Download size={20} />
               </a>
             </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-foreground/80 hover:text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatedMobileMenu 
        isOpen={isOpen} 
        navLinks={navLinks} 
        activeSection={activeSection} 
        onLinkClick={scrollToSection}
        resumePath={resumePath}
      />
    </motion.header>
  );
};

const AnimatedMobileMenu = ({ isOpen, navLinks, activeSection, onLinkClick, resumePath }) => {
  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <motion.div
      className="md:hidden overflow-hidden"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <div className="bg-background/95 backdrop-blur-md px-4 py-5 shadow-lg">
        <nav className="flex flex-col space-y-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              variants={itemVariants}
              className={`nav-link text-lg w-full text-left py-3 ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => onLinkClick(link.id)}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.button>
          ))}
           <motion.a
              href={resumePath}
              download="ssk-resume.pdf"
              variants={itemVariants}
              className="nav-link text-lg w-full text-left py-3 inline-flex items-center"
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </motion.a>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
