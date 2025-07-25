import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const resumePath = '/Sai_Surya_Karthik_Resume.pdf';

  // Track page scroll to style navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle scroll from navigation state or sessionStorage
  useEffect(() => {
    const target = location.state?.scrollTo || sessionStorage.getItem('scrollTarget');

    if (target) {
      const tryScroll = () => {
        const el = document.getElementById(target);
        if (el) {
          scrollToSection(target);
          sessionStorage.removeItem('scrollTarget');
        } else {
          setTimeout(() => {
            const retryEl = document.getElementById(target);
            if (retryEl) {
              scrollToSection(target);
              sessionStorage.removeItem('scrollTarget');
            }
          }, 300); // Retry if not ready
        }
      };

      setTimeout(tryScroll, 300); // Initial delay for DOM to load
    }
  }, [location]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => setIsOpen(false), 400); // Delay closing menu
    } else {
      setIsOpen(false);
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname === '/') {
      scrollToSection(id);
    } else {
      sessionStorage.setItem('scrollTarget', id); // Store scroll target
      setIsOpen(false);
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-lg shadow-sm' : 'bg-gray-500/5 backdrop-blur-lg'
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
             <button onClick={() => navigate('/')} aria-label="Go to Home">
  <img
    src="/Logo.png"
    alt="SSK Logo"
    className="h-31 w-auto object-contain"
  />
</button>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
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
                <a href={resumePath} download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="mr-2 text-foreground/80 hover:text-foreground"
            >
              <a href={resumePath} download aria-label="Download Resume">
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

      <AnimatedMobileMenu
        isOpen={isOpen}
        navLinks={navLinks}
        activeSection={activeSection}
        onLinkClick={handleNavClick}
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
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1, when: 'afterChildren' },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { y: { stiffness: 1000 } },
    },
  };

  return (
    <motion.div
      className="md:hidden overflow-hidden"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
    >
      <div className="bg-background/95 backdrop-blur-md px-4 py-5 shadow-lg">
        <nav className="flex flex-col space-y-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              variants={itemVariants}
              className={`nav-link text-lg w-full text-left py-3 ${
                activeSection === link.id ? 'active' : ''
              }`}
              onClick={() => onLinkClick(link.id)}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.a
            href={resumePath}
            download
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
