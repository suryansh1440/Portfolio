import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DecryptedText from '../ReactsBits/DecryptedText';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainPhoto from '../assets/mainPhoto.jpg';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import WelcomeBanner from '../component/WelcomeBanner';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/suryansh1440', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/suryansh-singh-/', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/surya_nsh_14/', label: 'Instagram' }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div id="home" className='flex flex-col bg-black h-[100vh] lg:h-screen w-full overflow-hidden relative'>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-50" />
        
        <div className="absolute w-full h-full flex flex-col lg:flex-row justify-center items-center">
          <div className='h-full lg:w-[65%] w-full flex item-center justify-center text-white font-bold text-4xl flex-col lg:mt-0 mt-10 lg:p-10 p-6'>
            <motion.h1 
              className='lg:text-6xl text-4xl font-bold text-white'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Hello, I'm
            </motion.h1>

            <motion.div
              className='flex flex-row lg:text-8xl text-4xl mt-7 font-bold text-white'
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              <DecryptedText
                text="Suryansh Singh"
                animateOn="view"
                speed={400}
                revealDirection="start"
                className='text-silver-500'
              />
            </motion.div>

            {showAnimation && (
              <motion.div
                className='mt-10 lg:text-6xl text-xl font-bold text-white'
                style={{ fontFamily: 'Space Mono, monospace' }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <TypeAnimation
                  sequence={[
                    'I Am Frontend Developer',
                    1000,
                    'I Am Backend Developer',
                    1000,
                    'I Am UI/UX Designer',
                    1000,
                  ]}
                  speed={60}
                  style={{ fontSize: '1em' }}
                  repeat={Infinity}
                />
              </motion.div>
            )}

            {/* Social Links */}
            <motion.div 
              className="lg:flex gap-6 mt-8 hidden z-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="text-2xl">{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className='h-full lg:w-[35%] w-full flex items-center justify-center'
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Subtle outer glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-md" />
              
              {/* Main container with double border effect */}
              <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10">
                <div className="rounded-full p-1 bg-black">
                  {/* Image container */}
                  <motion.div
                    className="relative rounded-full overflow-hidden"
                    style={{
                      width: window.innerWidth > 768 ? "380px" : "260px",
                      height: window.innerWidth > 768 ? "380px" : "260px",
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-[gradient_3s_ease-in-out_infinite]" />
                    
                    {/* Image */}
                    <motion.img
                      src={MainPhoto}
                      alt="Surya Photo"
                      className="relative w-full h-full object-cover rounded-full"
                      initial={{ scale: 1.2, filter: 'brightness(0.8)' }}
                      animate={{ scale: 1, filter: 'brightness(1)' }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 rounded-full shadow-inner bg-gradient-to-b from-black/10 via-transparent to-black/20" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group z-60 lg:block hidden"
          style={{ opacity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1 group-hover:border-white/50 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full mx-auto group-hover:bg-white/70 transition-colors"
            />
          </motion.div>
        </motion.a>
      </div>

      <WelcomeBanner title="WELCOME TO MY PORTFOLIO" subtitle="LET ME INTRODUCE MYSELF"/>
      <About />
      <WelcomeBanner title="SHOWCASE MY WORK" subtitle="EXPLORE MY PROJECTS"/>
      <Projects />
      <WelcomeBanner title="HAVE A QUESTION?" subtitle="GET IN TOUCH"/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
