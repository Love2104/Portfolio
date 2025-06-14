import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, Send } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'; // <-- STEP 1: Import the hook

const Hero = () => {
  const { theme } = useTheme(); // <-- STEP 2: Get the current theme
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

  const subtitle = "Full Stack Developer".split(" ");
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // --- STEP 3: Apply conditional styling throughout the component ---
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light pointer-events-none" />
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: yPos }}
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
        initial="hidden"
        animate="visible"
      >
        <div className="mb-4">
          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-3 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
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

          <motion.h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-slate-100 to-slate-400'
                : 'bg-gradient-to-r from-slate-800 to-slate-500'
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
                style={{
                  textShadow: theme === 'dark' ? '0 2px 8px rgba(255,255,255,0.1)' : 'none'
                }}
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
          <div className="h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent ${
            theme === 'dark' ? 'mix-blend-overlay' : ''
          }`} />
        </motion.div>

        <motion.div
          className="text-xl sm:text-2xl mb-8 font-medium"
          initial="hidden"
          animate="visible"
        >
          {subtitle.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-3 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1, y: 0,
                  transition: { delay: i * 0.2 + 1.4, type: "spring", stiffness: 120 }
                }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className={`text-base sm:text-lg mb-12 max-w-2xl leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
        >
          Crafting digital excellence through{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            innovative solutions
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            meticulous code
          </span>
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <motion.a href="#projects" className={`px-8 py-4 rounded-lg flex items-center gap-3 group relative overflow-hidden transition-all ${
            theme === 'dark' 
              ? 'bg-slate-800 hover:bg-slate-700/50' 
              : 'bg-slate-100 hover:bg-slate-200/80'
          }`} whileHover={{ scale: 1.05 }} style={{ boxShadow: theme === 'dark' ? '0 4px 24px rgba(99, 102, 241, 0.15)' : '0 4px 14px rgba(0, 0, 0, 0.05)'}}>
            <span className={theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}>View Projects</span>
            <ArrowRight className="w-5 h-5 text-indigo-500 transition-transform group-hover:translate-x-1" />
            <div className={`absolute inset-0 border rounded-lg pointer-events-none ${
              theme === 'dark' ? 'border-slate-600/50' : 'border-slate-300/50'
            }`} />
          </motion.a>
          
          <motion.a href="#resume" className={`px-8 py-4 rounded-lg flex items-center gap-3 group relative overflow-hidden transition-all ${
            theme === 'dark' 
              ? 'bg-slate-800 hover:bg-slate-700/50' 
              : 'bg-white hover:bg-slate-50'
          }`} whileHover={{ scale: 1.05 }} style={{boxShadow: theme === 'light' ? '0 4px 14px rgba(0, 0, 0, 0.05)' : ''}}>
            <FileText className="w-5 h-5 text-purple-500" />
            <span className={theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}>Resume</span>
            <div className={`absolute inset-0 border rounded-lg pointer-events-none ${
              theme === 'dark' ? 'border-slate-600/50' : 'border-slate-200'
            }`} />
          </motion.a>
          
          <motion.a href="#contact" className={`px-8 py-4 rounded-lg flex items-center gap-3 group relative overflow-hidden transition-all ${
             theme === 'dark'
                ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30'
                : 'bg-transparent hover:bg-slate-100'
          }`} whileHover={{ scale: 1.05 }}>
            <span className={theme === 'dark' ? 'text-slate-100' : 'text-indigo-600'}>Contact Me</span>
            <Send className="w-5 h-5 text-purple-500" />
            <div className={`absolute inset-0 border rounded-lg pointer-events-none ${
              theme === 'dark' ? 'border-indigo-400/20' : 'border-slate-300'
            }`} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator (left commented as per user's code) */}
      </motion.div>
    </section>
  );
}

export default Hero;
