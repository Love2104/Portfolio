import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, Send } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const lineOneText = "Hi, I'm".split("");
  const lineTwoText = "Love Chourasia".split("");

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 120 },
    }),
  };

  const subtitle = ['Full Stack Developer', '·', 'AI / ML'].join(' ').split(' ');
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      {/* Subtle grid background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{ y: yPos }}
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:32px_32px]" />
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
        initial="hidden"
        animate="visible"
      >
        <div className="mb-4">
          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-3 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
            initial="hidden"
            animate="visible"
            aria-label="Hi, I'm"
          >
            {lineOneText.map((char, i) => (
              <motion.span key={`line1-${i}`} custom={i} variants={charVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Name — plain white/dark, no gradient, no blue */}
          <motion.h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold ${
              theme === 'dark' ? 'text-[#F5F5F5]' : 'text-slate-900'
            }`}
            initial="hidden"
            animate="visible"
            aria-label="Love Chourasia"
          >
            {lineTwoText.map((char, i) => (
              <motion.span
                key={`line2-${i}`}
                custom={i + lineOneText.length}
                variants={charVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div
          className="relative mb-8"
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ delay: 1.2, duration: 1, ease: 'circOut' }}
        >
          <div className={`h-[1px] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`} />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="flex items-center justify-center gap-3 text-xl sm:text-2xl mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, type: 'spring', stiffness: 120 }}
        >
          <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>
            Full Stack Developer
          </span>
          <span className="text-blue-500">·</span>
          <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>
            Building with AI
          </span>
        </motion.div>

        {/* Description — no highlighted words */}
        <motion.p
          className={`text-base sm:text-lg mb-12 max-w-2xl leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
        >
          Crafting digital excellence through innovative solutions and meticulous code.
        </motion.p>

        {/* CTA Buttons — all outlined, same style */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          {/* View Projects */}
          <motion.a
            href="#projects"
            className={`px-8 py-4 rounded-lg flex items-center gap-3 group border transition-all duration-200 ${
              theme === 'dark'
                ? 'border-white/30 text-white bg-transparent hover:bg-white hover:text-black hover:border-white'
                : 'border-slate-800 text-slate-800 bg-transparent hover:bg-slate-900 hover:text-white'
            }`}
            whileHover={{ scale: 1.03 }}
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* Resume */}
          <motion.a
            href="https://drive.google.com/file/d/1f54ZE21uDnm2pbMtHTtopO5yNKUi9Qzj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-lg flex items-center gap-3 group border transition-all duration-200 ${
              theme === 'dark'
                ? 'border-white/30 text-white bg-transparent hover:bg-white hover:text-black hover:border-white'
                : 'border-slate-800 text-slate-800 bg-transparent hover:bg-slate-900 hover:text-white'
            }`}
            whileHover={{ scale: 1.03 }}
          >
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </motion.a>

          {/* Contact */}
          <motion.a
            href="#contact"
            className={`px-8 py-4 rounded-lg flex items-center gap-3 group border transition-all duration-200 ${
              theme === 'dark'
                ? 'border-white/30 text-white bg-transparent hover:bg-white hover:text-black hover:border-white'
                : 'border-slate-800 text-slate-800 bg-transparent hover:bg-slate-900 hover:text-white'
            }`}
            whileHover={{ scale: 1.03 }}
          >
            <span>Contact Me</span>
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
