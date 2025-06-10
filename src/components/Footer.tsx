import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Love2104/' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/love-chourasia/' },
   
    { icon: <Mail size={20} />, href: 'mailto:lovec23@iitk.ac.in' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-slate-800/50 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Love Chourasia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;