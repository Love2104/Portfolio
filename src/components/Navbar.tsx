import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Define the profile image path once to use everywhere
  const profileImagePath = "/lovec.jpg"; // <-- Make sure this path is correct

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = (isOpen || showProfileModal) ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, showProfileModal]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl rounded-lg border ${
              theme === 'dark' 
                ? 'border-slate-700 bg-slate-800/95' 
                : 'border-slate-200 bg-white/95'
            } backdrop-blur-md shadow-sm`}
          >
            <div className="absolute inset-0 rounded-lg pointer-events-none border border-slate-300/20 dark:border-slate-600/20" />
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-14">
                <div className="flex-shrink-0 flex items-center gap-3">
                  <img
                    src={profileImagePath}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-slate-400 shadow cursor-pointer hover:scale-110 transition-all"
                    onClick={() => setShowProfileModal(true)}
                  />
                  <a href="#" className="text-lg font-medium">
                    <span className={theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}>
                      Portfolio
                    </span>
                  </a>
                </div>

                {/* --- DESKTOP NAVIGATION RESTORED --- */}
                <div className="hidden md:flex items-center space-x-4">
                  <div className="flex items-center space-x-4">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`relative px-3 py-1.5 text-sm font-medium rounded-md ${
                          theme === 'dark' 
                            ? 'text-slate-300 hover:bg-slate-700 hover:text-slate-100' 
                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                        } transition-colors`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  <div className="w-px h-6 mx-1 bg-slate-300 dark:bg-slate-600" />

                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-md ${
                      theme === 'dark' 
                        ? 'hover:bg-slate-700 text-slate-300' 
                        : 'hover:bg-slate-100 text-slate-700'
                    } transition-colors`}
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </button>
                </div>
                
                {/* --- MOBILE CONTROLS RESTORED --- */}
                <div className="md:hidden flex items-center gap-1">
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-md ${
                      theme === 'dark' 
                        ? 'hover:bg-slate-700 text-slate-300' 
                        : 'hover:bg-slate-100 text-slate-700'
                    } transition-colors`}
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-2 rounded-md ${
                      theme === 'dark' 
                        ? 'hover:bg-slate-700 text-slate-300' 
                        : 'hover:bg-slate-100 text-slate-700'
                    } transition-colors`}
                    aria-label="Toggle menu"
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- MOBILE MENU RESTORED --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed inset-0 z-[60] ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <img
                    src={profileImagePath}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-slate-400 shadow cursor-pointer"
                    onClick={() => {
                      setShowProfileModal(true);
                      setIsOpen(false);
                    }}
                  />
                  <span className={`text-lg font-medium ${theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}>
                    Portfolio
                  </span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className={`p-2 rounded-md ${
                    theme === 'dark' 
                      ? 'hover:bg-slate-800 text-slate-300' 
                      : 'hover:bg-slate-100 text-slate-700'
                  } transition-colors`}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-1 p-4 flex-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={`px-4 py-4 rounded-lg text-left text-lg font-medium ${
                      theme === 'dark' 
                        ? 'hover:bg-slate-800 text-slate-100' 
                        : 'hover:bg-slate-100 text-slate-800'
                    } transition-colors`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- PROFILE PICTURE MODAL (CORRECTED) --- */}
      <AnimatePresence>
        {showProfileModal && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProfileModal(false)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={profileImagePath}
                alt="Profile Large"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/90 shadow-2xl"
              />
              <button
                onClick={() => setShowProfileModal(false)}
                className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Close profile view"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
