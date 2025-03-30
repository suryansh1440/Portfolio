import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Environment, Float, PerspectiveCamera, useScroll } from '@react-three/drei';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sc1 from '../assets/sc1.png';
import sc2 from '../assets/sc2.png';
import sc3 from '../assets/sc3.png';
import sc4 from '../assets/sc4.png';
import sc5 from '../assets/sc5.png';
import StarryBackground from '../component/StarryBackground';

// Sample project data - replace with your actual projects
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

// 3D Scene Components
const ProjectCard = ({ position, scale, rotation, project, onClick, isHovered }) => {
  const mesh = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    if (isHovered) {
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh
        ref={mesh}
        scale={scale}
        rotation={rotation}
        onClick={onClick}
      >
        <boxGeometry args={[1, 1.5, 0.1]} />
        <meshStandardMaterial
          color={project.color}
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
};

const Scene = ({ scrollProgress = 0 }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.z = -scrollProgress * 10;
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
    }
  });

  return (
    <group ref={groupRef}>
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          position={[
            (index - 1) * 2.5,
            Math.sin(index * Math.PI * 2 / projects.length) * 1,
            0
          ]}
          scale={hoveredProject === project.id ? [1.2, 1.2, 1.2] : [1, 1, 1]}
          rotation={[0, 0, 0]}
          isHovered={hoveredProject === project.id}
          onClick={() => setHoveredProject(project.id)}
        />
      ))}
    </group>
  );
};

// Main Component
const Projects = () => {
  const containerRef = useRef();
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const scrollRef = useRef();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollData = useScroll({
    container: scrollRef,
    offset: ['start', 'end'],
    smooth: 0.5,
  });

  useEffect(() => {
    if (scrollData && scrollData.offset !== undefined) {
      setScrollProgress(scrollData.offset);
    }
  }, [scrollData]);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <StarryBackground />
          <Environment preset="night" />
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-50" />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text text-center"
        >
          Featured Projects
        </motion.h1>

        {/* Project Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group backdrop-blur-sm bg-white/5 rounded-xl border border-white/10"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div
                className="relative overflow-hidden rounded-xl aspect-video"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 