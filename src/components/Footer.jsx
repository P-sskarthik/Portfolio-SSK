
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin, Dribbble } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10 mt-24"> {/* Increased top margin */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          
        </div>
        
      </div>
       <section className="bg-sky-200 text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section: Text + Email + Resume */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold">Get in touch</h2>

          <div className="bg-white text-black px-4 py-2 rounded-md inline-block font-medium">
            saisuryakarthik.p@gmail.com
          </div>

          <div>
            <a
              href="/Resume-Sai-Surya-Karthik.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-800 hover:underline"
            >
              <span role="img" aria-label="chat">💬</span>
              <span className="underline">Resume–Sai-Surya-Karthik.pdf</span>
            </a>
          </div>
        </div>

        {/* Right Section: Animated Social Icons */}
        <motion.div
          className="flex items-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[
            { href: "https://github.com/P-sskarthik", icon: <Github size={22} /> },
            { href: "https://www.linkedin.com/in/sai-surya-karthik-p-a80ba5197/", icon: <Linkedin size={22} /> },
            { href: "https://behance.net/saisuryakarthik", icon: <Dribbble size={22} /> },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-100 transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              aria-label={
                social.href.includes("behance")
                  ? "Behance Profile"
                  : social.href.includes("linkedin")
                  ? "LinkedIn Profile"
                  : "GitHub Profile"
              }
            >
              {social.icon}
            </motion.a>
            
          ))}
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
    </section>

    </footer>
  );
};

export default Footer;
