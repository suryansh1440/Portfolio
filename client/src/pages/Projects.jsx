import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sc1 from '../assets/sc1.png';
import sc2 from '../assets/sc2.png';
import sc3 from '../assets/sc3.png';
import sc4 from '../assets/sc4.png';
import sc5 from '../assets/sc5.png';

const projects = [
  {
    id: 1,
    title: "Kid Tutor",
    description: "A full-stack Educational Platform for Kids where they can learn and play games by quiz",
    image: sc1,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/suryansh1440/Kid-tutor",
    live: "https://kid-tutor-5etq.vercel.app",
    color: "#FF6B6B"
  },
  {
    id: 2,
    title: "Real Time Process Monitoring",
    description: "A Real Time Process Monitoring System for monitoring the process of a machine",
    image: sc2,
    technologies: ["React", "Socket.io", "TailwindCSS", "Node.js","Express"],
    github: "https://github.com/suryansh1440/RealTime_ProcessMonitoring",
    live: "",
    color: "#4ECDC4"
  },
  {
    id: 3,
    title: "Ai Grant Writer",
    description: "A AI Grant Writer for writing grant for startup using Gemini api",
    image: sc3,
    technologies: ["React", "Node.js", "Gemini api", "TailwindCSS"],
    github: "https://github.com/suryansh1440/AiGrantWriter",
    live: "",
    color: "#45B7D1"
  },
  {
  id: 4,
  title: "Task Reminder",
  description: "A Task Reminder for reminding the user to do the task. You can add task, edit task, delete task and also set reminder for the task",
  image: sc4,
  technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/suryansh1440/Task_Reminder",
  live: "",
  color: "#45B7D1"
},{
  id: 5,
  title: "Carbon Emmsion Tracker",
  description: "A Carbon Emmsion Tracker for tracking the carbon emmsion of the user.",
  image: sc5,
  technologies: ["Express", "MongoDB", "React", "Three fiver", "Node.js"],
  github: "https://github.com/suryansh1440/Carbon-Emmsion-Tracker",
  live: "",
  color: "#45B7D1"
}

];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub /> GitHub
          </motion.a>
        )}
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative min-h-screen bg-black py-20 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          My Creations
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl -z-10"
          style={{ x }}
        />
      </div>
    </section>
  );
};

export default Projects;