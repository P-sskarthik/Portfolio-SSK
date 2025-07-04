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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-12">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="z-10">
  <motion.div
    className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 whitespace-nowrap"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    Hello{" "}
    <motion.span
      className="inline-block"
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
      transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
    >
      👋🏻
    </motion.span>{" "}
    there, I'm
  </motion.div>

 <motion.h1
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold pt-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent transition duration-300 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  Sai Surya Karthik
</motion.h1>


</div>


        <div className="pt-3 max-w-xl">
  <motion.blockquote
    className="italic text-gray-600 pt-3 text-base space-y-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <p>
      I see myself as a full-stack designer because I enjoy blending interaction design, user research, and front-end development.
    </p>
    <p>
      With 3 years of work experience crafting seamless, user-centered designs, I specialize in building clear and intuitive digital solutions for products in finance, e-commerce, and ed-tech.
    </p>
    <p>
      When I’m not working, you’ll find me planning my next trip, humming my favorite melodies, cooking something tasty, or enjoying a well-deserved nap.
    </p>
  </motion.blockquote>
</div>



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
        className="w-full aspect-square pt-12 object-cover transition-transform duration-500 hover:scale-105"


        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-primary/10 shadow-xl group-hover:shadow-2xl transition-shadow duration-400">
          <img
            alt="Abstract design representing UX/UI development"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="/K.JPG"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
