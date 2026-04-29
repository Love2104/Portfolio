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

  const profileImagePath = "/lovec.jpg";

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
    return () => { document.body.style.overflow = 'auto'; };
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
            className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl rounded-xl border backdrop-blur-md shadow-lg ${theme === 'dark'
                ? 'border-slate-700 bg-slate-900/95'
                : 'border-blue-100 bg-white/95'
              }`}
          >
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-14">
                <div className="flex-shrink-0 flex items-center gap-3">
                  <img
                    src={profileImagePath}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-blue-400 shadow cursor-pointer hover:scale-110 transition-all"
                    onClick={() => setShowProfileModal(true)}
                  />
                  <a href="#" className="text-lg font-bold">
                    <span className="text-blue-500">
                      Love Chourasia
                    </span>
                  </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${theme === 'dark'
                          ? 'text-slate-300 hover:bg-slate-800 hover:text-blue-400'
                          : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className={`w-px h-6 mx-2 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`} />

                  {/* Dark Mode Toggle */}
                  <button
                    onClick={toggleTheme}
                    className={`relative w-14 h-7 rounded-full transition-colors duration-300 flex items-center px-1 ${theme === 'dark' ? 'bg-blue-600' : 'bg-slate-200'
                      }`}
                    aria-label="Toggle theme"
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full bg-white shadow flex items-center justify-center"
                      animate={{ x: theme === 'dark' ? 28 : 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      {theme === 'dark'
                        ? <Moon className="w-3 h-3 text-blue-600" />
                        : <Sun className="w-3 h-3 text-yellow-500" />
                      }
                    </motion.div>
                  </button>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 ${theme === 'dark' ? 'bg-blue-600' : 'bg-slate-200'
                      }`}
                    aria-label="Toggle theme"
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full bg-white shadow flex items-center justify-center"
                      animate={{ x: theme === 'dark' ? 24 : 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      {theme === 'dark'
                        ? <Moon className="w-2.5 h-2.5 text-blue-600" />
                        : <Sun className="w-2.5 h-2.5 text-yellow-500" />
                      }
                    </motion.div>
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-2 rounded-lg ${theme === 'dark'
                        ? 'hover:bg-slate-800 text-slate-300'
                        : 'hover:bg-blue-50 text-slate-700'
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

      {/* Mobile Menu */}
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
              <div className={`flex justify-between items-center p-4 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-blue-100'}`}>
                <span className="text-lg font-bold text-blue-500">
                  Portfolio
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 text-slate-700'} transition-colors`}
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
                    className={`px-4 py-4 rounded-xl text-left text-lg font-medium ${theme === 'dark'
                        ? 'hover:bg-slate-800 text-slate-100'
                        : 'hover:bg-blue-50 text-slate-800 hover:text-blue-600'
                      } transition-colors`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Picture Modal */}
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
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl"
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
