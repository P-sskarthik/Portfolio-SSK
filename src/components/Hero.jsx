import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Dribbble } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-18">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="z-10 text-4xl font-bold sm:text-lg md:text-xl whitespace-nowrap bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm Sai Surya Karthik
        </motion.span>

        <motion.h1
  className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-snug"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  Creative{" "}
  <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
    UX/UI
  </span>{" "}
  Developer
</motion.h1>


       

        <motion.blockquote
          className="italic text-gray-600 text-base border-l-4 border-indigo-400 pl-4 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          "I love three things: Design, Technology, and Adventures. With these in my toolkit, I’m all about creating cool, useful experiences that make a real difference."
        </motion.blockquote>

        <motion.div
          className="flex flex-wrap gap-4 mt-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 1.0 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Button size="lg" onClick={scrollToProjects} className="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-400 text-white hover:bg-blue-500 h-11 rounded-md px-8 group shadow-lg transition-shadow duration-300">
              Explore Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </motion.div>

          {/* <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="flex gap-5 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[
            { href: "https://github.com", icon: <Github size={22} /> },
            { href: "https://linkedin.com", icon: <Linkedin size={22} /> },
            { href: "https://behance.net", icon: <Dribbble size={22} /> }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              whileHover={{ y: -3, scale: 1.1 }}
              aria-label={
                social.href.includes('behance')
                  ? 'Behance Profile'
                  : social.href.includes('linkedin')
                  ? 'LinkedIn Profile'
                  : 'GitHub Profile'
              }
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side – Visual */}
      <motion.div
        className="relative hidden lg:block group"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-primary/10 shadow-xl group-hover:shadow-2xl transition-shadow duration-400">
          <img
            alt="Abstract design representing UX/UI development"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="https://images.unsplash.com/photo-1558655146-d09347e92766"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
