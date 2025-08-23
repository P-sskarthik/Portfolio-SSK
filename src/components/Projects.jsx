import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Fin-Tastic division',
      description: 'A comprehensive UI/UX design of an educational game, focused on enhancing user engagement, interactivity, and retention through character design, animation, and usability testing.',
      image: '/Game_image.jpg',
      category: 'ux',
      tags: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      link: '',
    },
    {
      id: 2,
      title: 'Japanese restaurants table reservation system',
      description: 'A complete UX Research & UX design of a Japanese-style restaurant reservation app, aimed at enhancing booking efficiency, user satisfaction, and visual appeal through intuitive navigation and culturally-inspired design.',
      image: '/JTable.jpg',
      category: 'ux',
      tags: ['UX Research', 'low and High fidelity prototypes', 'UI Design', 'User persona', 'Wireframes'],
      link: '',
    },
    {
      id: 3,
      title: 'Smartflix',
      description: 'Smartflix is a dynamic web application built with React and Redux, integrating AI to deliver personalized movie recommendations, inspired by Netflix user interface and experience.',
      image: '/S.png',
      category: 'frontend',
      tags: ['React', 'Tailwind CSS', 'Redux', 'GPT-APIs', 'TMDB API', 'Framer Motion', 'Responsive Design'],
      link: 'https://main.d3fcn6oik0lorx.amplifyapp.com/',
    },
    {
      id: 4,
      title: 'ZunoTube',
      description: 'ZunoTube is a YouTube-inspired video streaming app built with React, Redux Toolkit, and Tailwind CSS. It fetches trending and searched videos using the YouTube Data API with dynamic category-based filtering.',
      image: '/ZunoTube.png',
      category: 'frontend',
      tags: ['JavaScript', 'React', 'TailwindCSS', 'useEffect', 'useState'],
      link: 'https://main.d1bee22mnun7bt.amplifyapp.com/',
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <div>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my work in UX/UI design and front-end development. Each project represents my commitment to creating intuitive, engaging, and visually appealing digital experiences.
        </p>
      </motion.div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-secondary/50 bg-gray-100 p-1">
            <TabsTrigger value="all" className="px-6">All</TabsTrigger>
            <TabsTrigger value="ux" className="px-6">UX Projects</TabsTrigger>
            <TabsTrigger value="frontend" className="px-6">Frontend Projects</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      navigate(`/project/${project.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="group bg-card rounded-xl overflow-hidden shadow-lg border border-primary/5 transition-transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-full">
        <img
          alt={project.title}
          className="w-full h-80 object-cover"
          src={project.image}
        />
        <div className="absolute inset-0 bg-black/70 p-4 text-white flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-white/20 rounded-full">{tag}</span>
            ))}
            {project.tags.length > 2 && (
              <span className="text-xs px-2 py-1 bg-white/20 rounded-full">+{project.tags.length - 2}</span>
            )}
          </div>

          <div className="flex gap-3">
            {!project.link && (
              <div className="flex items-center gap-1 text-sm text-white/90">
                <Eye className="h-4 w-4" />
                UX Case Study
              </div>
            )}
            {project.link && (
              <div className="flex items-center gap-1 text-sm text-white/90">
                <ExternalLink className="h-4 w-4" />
                Live Preview
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;