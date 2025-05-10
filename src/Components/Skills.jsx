
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Figma, 
  Code, 
  PenTool, 
  Users, 
  Layers, 
  Smartphone, 
  Palette, 
  Cpu, 
  Database
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'UX Design',
      icon: <Users className="h-6 w-6" />,
      skills: ['User Research,', 'Wireframing,', 'Prototyping,', 'Usability Testing,', 'Information Architecture'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'UI Design',
      icon: <PenTool className="h-6 w-6" />,
      skills: ['Visual Design,','Design Systems,', 'Typography,', 'Color Theory,', 'Interaction Design'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      skills: ['HTML/CSS,','JavaScript,','React,','Vite,','Tailwind CSS'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Tools & Software',
      icon: <Figma className="h-6 w-6" />,
      skills: ['Figma,','VS Code,','Git,','Adobe XD,', 'Sketch,', 'Miro,', 'Adobe Firefly,', 'Wordpress,','Unity,' ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const technicalSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'UI Design', level: 90 },
    { name: 'UX Research', level: 80 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Figma', level: 90 },
    { name: 'Tailwind CSS', level: 85 }
  ];

  return (
    <div>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical abilities and expertise in UX/UI design and frontend development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-card border border-primary/5 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="skill-pill bg-secondary/70"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-card border border-primary/5 rounded-xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-6 text-center">Technical Proficiency</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${index % 4 === 0 ? 'from-blue-500 to-cyan-400' : 
                    index % 4 === 1 ? 'from-purple-500 to-pink-500' : 
                    index % 4 === 2 ? 'from-amber-500 to-orange-500' : 
                    'from-green-500 to-emerald-500'}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      
    </div>
  );
};

export default Skills;
