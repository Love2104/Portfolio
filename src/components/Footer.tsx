import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Love2104/' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/love-chourasia/' },
    { icon: <Mail size={20} />, href: 'mailto:lovec23@iitk.ac.in' }
  ];

  return (
    <footer className={`py-10 border-t transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-slate-900 border-slate-700'
        : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Love Chourasia
          </span>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all hover:scale-110 ${
                  theme === 'dark'
                    ? 'text-slate-400 hover:text-blue-400 hover:bg-slate-800'
                    : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} Love Chourasia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;