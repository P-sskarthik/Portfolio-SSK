
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10 py-12 mt-24"> {/* Increased top margin */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className=" logo-text bg-gradient from-red-500 to-blue-500 text-edge-outline animate-title font-bold "> {/* Applied logo-text class */}
              SSK
            </h3>
            <p className="text-muted-foreground text-sm">
              Crafting digital experiences with passion.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary/20 hover:text-primary transition-colors duration-300"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
