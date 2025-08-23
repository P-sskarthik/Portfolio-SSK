// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Figma,
//   Code,
//   PenTool,
//   Users
// } from 'lucide-react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'UX Design',
//       icon: <Users className="h-6 w-6" />,
//       skills: [
//         'Conducted user interviews and surveys for Fin-tastic app & Oishii app.',
//         'Created wireframes and task flows based on personas.',
//         'Ran usability tests and iterated based on feedback.',
//         'Designed information architecture for complex user journeys.'
//       ],
//       color: 'from-blue-500 to-cyan-400'
//     },
//     {
//       title: 'UI Design',
//       icon: <PenTool className="h-6 w-6" />,
//       skills: [
//         'Designed responsive UI screens using Figma.',
//         'Built design systems for consistent visual identity.',
//         'Applied color theory and typography best practices.',
//         'Created interactive prototypes for usability testing.'
//       ],
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       title: 'Frontend Development',
//       icon: <Code className="h-6 w-6" />,
//       skills: [
//         'Developed responsive web apps using React and Tailwind CSS.',
//         'Built reusable UI components with clean and scalable code.',
//         'Used Vite for fast project bundling and development.',
//         'Implemented dynamic interactions with JavaScript.'
//       ],
//       color: 'from-amber-500 to-orange-500'
//     },
//     {
//       title: 'Tools & Software',
//       icon: <Figma className="h-6 w-6" />,
//       skills: [
//         'Figma – for UI/UX design and prototyping.',
//         'VS Code – main development environment.',
//         'Git & GitHub – version control and collaboration.',
//         'Miro & Sketch – ideation and early concepting.',
//         'Adobe XD & Firefly – additional design exploration.',
//         'Unity – used for interactive UI in game design.',
//         'WordPress – basic CMS-based site management.'
//       ],
//       color: 'from-green-500 to-emerald-500'
//     }
//   ];

//   return (
//     <div>
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           My <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
//         </h2>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           A detailed overview of my hands-on experience across UX research, UI design, and frontend development.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {skillCategories.map((category, index) => (
//           <motion.div
//             key={index}
//             className="bg-card border border-primary/5 rounded-xl p-6 shadow-lg"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ y: -5 }}
//           >
//             <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
//               {category.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
//             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
//               {category.skills.map((skill, i) => (
//                 <li key={i}>{skill}</li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
