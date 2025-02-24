import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Work', path: '/' },
    { name: 'Contact', path: '/' },
  ];

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: { 
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.3 }
    },
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 w-full bg-gray-900/5 backdrop-blur-xs z-50"
    >
      <nav className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo on Left */}
        <div
          className="flex items-center gap-2"
        >
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            <img src={logo} alt="" className='lg:w-[25%] w-[45%]'/>
          </span>
        </div>

        {/* Desktop Navigation - Right Aligned */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="relative group"
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={item.path}
                className="px-3 py-2 font-bold  text-gray-100 hover:text-white transition-colors duration-300 relative"
              >
                {item.name}
                <motion.div
                  className="absolute  bottom-0 left-0 w-full h-0.5 bg-blue-400 origin-left scale-x-0"
                  initial={{ scaleX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button - Right Aligned */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 text-gray-100 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-16 left-0 w-full bg-black/85 backdrop-blur-sm border-b border-gray-700/50"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.path}
                      className="text-gray-100 hover:text-white px-3 py-2 border-l-4 border-transparent hover:border-blue-400 transition-all group"
                      whileHover={{ 
                        x: 10,
                        transition: { type: 'spring', stiffness: 300 }
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      <div className="w-0 h-0.5 bg-blue-400 mt-1 group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;