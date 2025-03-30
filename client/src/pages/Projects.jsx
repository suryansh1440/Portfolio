import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Environment, Float, PerspectiveCamera, useScroll } from '@react-three/drei';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sc1 from '../assets/sc1.png';
import sc2 from '../assets/sc2.png';
import sc3 from '../assets/sc3.png';
import StarryBackground from '../component/StarryBackground';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
    image: sc1,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
    color: "#FF6B6B"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using DALL-E API",
    image: sc2,
    technologies: ["React", "OpenAI", "TailwindCSS", "Node.js"],
    github: "https://github.com/yourusername/ai-generator",
    live: "https://ai-generator-demo.com",
    color: "#4ECDC4"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Real-time social media analytics dashboard",
    image: sc3,
    technologies: ["React", "Firebase", "D3.js", "TailwindCSS"],
    github: "https://github.com/yourusername/dashboard",
    live: "https://dashboard-demo.com",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
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