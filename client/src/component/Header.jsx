import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-20 py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="flex items-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-20 h-20 object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative group "
                whileHover={{ scale: 1.1 }}
              >
                <a
                  href={item.path}
                  className="px-4 py-2 font-medium text-gray-100 hover:text-white duration-300 relative focus:outline-[#00B8D9] focus:outline-2 focus:outline-offset-2 transition-all rounded-xl"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 origin-left scale-x-0"
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

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-gray-100 hover:text-white rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.path}
                      className="text-gray-100 hover:text-white px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all group"
                      whileHover={{ 
                        x: 10,
                        transition: { type: 'spring', stiffness: 300 }
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </div>
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