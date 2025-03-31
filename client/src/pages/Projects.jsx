import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sc1 from '../assets/sc1.png';
import sc2 from '../assets/sc2.png';
import sc3 from '../assets/sc3.png';
import sc4 from '../assets/sc4.png';
import sc5 from '../assets/sc5.png';
import StarryBackground from '../component/StarryBackground';

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
  description: "A Carbon Emmsion Tracker for tracking the carbon emmsion of the user. You can add carbon emmsion, edit carbon emmsion, delete carbon emmsion and also set reminder for the carbon emmsion",
  image: sc5,
  technologies: ["Express", "MongoDB", "React", "Three fiver", "Node.js"],
  github: "https://github.com/suryansh1440/Carbon-Emmsion-Tracker",
  live: "",
  color: "#45B7D1"
}

];


const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-[400px]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-0.5 shadow-2xl">
        <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 overflow-hidden">
          <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          <motion.div
            className="absolute bottom-6 left-6 right-6"
            animate={isHovered ? { y: -10 } : { y: 0 }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 transition-all">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-105"
                >
                  <FaGithub className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-all hover:scale-105"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
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
      className="relative min-h-screen overflow-hidden bg-black"
    >
  <div className="fixed inset-0 z-0">
        <Canvas>
          <StarryBackground />
          <Environment preset="night" />
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          My Creations
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
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