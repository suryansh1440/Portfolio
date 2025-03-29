import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import TiltedCard from '../ReactsBits/TiltedCard';
import DecryptedText from '../ReactsBits/DecryptedText';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainPhoto from '../assets/MainPhoto.jpg';
import animationLogo from '../assets/animationLogo.png';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div id="home" className='flex flex-col bg-black min-h-[100vh] w-full overflow-hidden relative'>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-50" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="absolute w-full h-full lg:flex-row flex-col flex justify-center items-center">
          <div className='h-full lg:w-[65%] w-full ml-5 flex item-center justify-center text-white font-bold text-4xl flex-col lg:mt-0 mt-50 lg:p-10'>
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
                className='text-sliver-500'
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
              className="flex gap-6 mt-8"
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
            className='h-full lg:w-[35%] w-[100%] flex items-center justify-left'
            initial={{ x: 200, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <TiltedCard
              imageSrc={MainPhoto}
              altText="Surya Photo"
              captionText="Admin"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={13}
              scaleOnHover={1.3}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={null}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group outline-none focus:outline-none focus:ring-0 border-0"
          style={{ opacity }}
          onClick={handleScrollClick}
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
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white/50 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll to About
          </span>
        </motion.button>
      </div>

      {/* Welcome Banner */}
      <div className='about h-[15vh] w-full bg-black z-10 overflow-hidden relative'>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div
          className='flex items-center font-bold whitespace-nowrap p-8 relative'
          style={{
            animation: 'marquee 20s linear infinite',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <p className='mr-5 text-4xl text-white'>WELCOME TO MY PORTFOLIO </p>
              <img src={animationLogo} alt="logo" className='w-[4%] mr-5 animate-pulse' />
              <p className='mr-5 text-4xl text-white'>LET ME INTRODUCE MYSELF</p>
              <img src={animationLogo} alt="logo" className='w-[4%] mr-5 animate-pulse' />
            </React.Fragment>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>

      {/* About Section */}
      <About />

       {/* Welcome Banner */}
       <div className='about h-[15vh] w-full bg-black z-10 overflow-hidden relative'>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div
          className='flex items-center font-bold whitespace-nowrap p-8 relative'
          style={{
            animation: 'marquee 20s linear infinite',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <p className='mr-5 text-4xl text-white'>WELCOME TO MY PORTFOLIO </p>
              <img src={animationLogo} alt="logo" className='w-[4%] mr-5 animate-pulse' />
              <p className='mr-5 text-4xl text-white'>LET ME INTRODUCE MYSELF</p>
              <img src={animationLogo} alt="logo" className='w-[4%] mr-5 animate-pulse' />
            </React.Fragment>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>


      {/* Projects Section */}
      <Projects />

       {/* Welcome Banner */}
       <div className='about h-[15vh] w-full bg-black z-10 overflow-hidden relative'>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div
          className='flex items-center font-bold whitespace-nowrap p-8 relative'
          style={{
            animation: 'marquee 20s linear infinite',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <p className='mr-5 text-4xl text-white'>WELCOME TO MY PORTFOLIO </p>
              <img src={animationLogo} alt="logo" className='w-[4%] mr-5 animate-pulse' />
              <p className='mr-5 text-4xl text-white'>LET ME INTRODUCE MYSELF</p>
              <img src={animationLogo} alt="logo" className='w-[4%] mr-5 animate-pulse' />
            </React.Fragment>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>


      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
