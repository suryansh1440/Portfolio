import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobeaftereffects, SiAdobelightroom, SiFigma } from 'react-icons/si';
import { MdSchool, MdWork, MdInterests } from 'react-icons/md';

const skills = [
  { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#339933' },
  { name: 'JavaScript', icon: <FaJs />, level: 90, color: '#F7DF1E' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
  { name: 'Database', icon: <FaDatabase />, level: 80, color: '#336791' },
  { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' }
];

const designTools = [
  { name: 'Photoshop', icon: <SiAdobephotoshop />, color: '#31A8FF' },
  { name: 'Illustrator', icon: <SiAdobeillustrator />, color: '#FF9A00' },
  { name: 'InDesign', icon: <SiAdobeindesign />, color: '#FF3366' },
  { name: 'After Effects', icon: <SiAdobeaftereffects />, color: '#9999FF' },
  { name: 'Lightroom', icon: <SiAdobelightroom />, color: '#31A8FF' },
  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' }
];

const interests = ['Photography', 'Traveling', 'Art', 'Music', 'Movie'];

const About = () => {
  return (
    <section id="about" className='min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden'>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.h1
          className='text-6xl font-bold mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className='text-xl text-gray-300 leading-relaxed space-y-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Hi, I'm Suryansh Singh, you can call me Surya. I'm currently a second-year student majoring in Computer Science Engineering. As someone who appreciates art and technology, I am constantly refining my skills and learning through various projects.
              </p>
              <p>
                I always seek to combine creativity and functionality to create accessible solutions that meet the needs of users and clients alike. My passion lies in creating beautiful, intuitive interfaces that provide exceptional user experiences.
              </p>
              <p>
                Outside of work, I enjoy e-sport gaming, music, and finding inspiration in everyday moments. Let's collaborate and create something truly amazing together!
              </p>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="mt-12 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 text-xl font-semibold">
                <MdSchool className="text-pink-500 text-2xl" />
                <h3>Education</h3>
              </div>
              <div className="ml-9 space-y-2">
                <p className="text-lg font-medium">Computer Science Engineering</p>
                <p className="text-gray-400">2022 - Present</p>
                <p className="text-gray-400">GPA: 8.5/10</p>
              </div>
            </motion.div>

            {/* Interests Section */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 text-xl font-semibold mb-4">
                <MdInterests className="text-pink-500 text-2xl" />
                <h3>Interests</h3>
              </div>
              <div className="flex flex-wrap gap-3 ml-9">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="px-4 py-2 rounded-full border border-gray-700 hover:border-pink-500 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills & Tools */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Development Skills */}
            <div className="space-y-6">
              <motion.h2
                className='text-2xl font-bold'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Development Skills
              </motion.h2>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="text-lg group-hover:text-pink-500 transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div className="space-y-6">
              <motion.h2
                className='text-2xl font-bold'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Design Tools
              </motion.h2>

              <motion.div 
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {designTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-3xl" style={{ color: tool.color }}>{tool.icon}</span>
                    <span className="text-sm text-gray-300">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
