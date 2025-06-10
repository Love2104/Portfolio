import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, Send } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";
  const [index, setIndex] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  const gradientTextStyle = {
    backgroundImage: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-6 relative"
          initial={ { scale: 0 } }
          animate={ { scale: 1 } }
          transition={ {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          } }
        >
          {/* <motion.div
            className="w-32 h-32 rounded-full bg-blue-500/20 absolute -top-6 -left-6"
            animate={ {
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            } }
            transition={ {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            } }
          /> */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white relative"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span style={gradientTextStyle}>
              Love Chourasia
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-400 mb-8 h-[40px]"
          variants={itemVariants}
        >
          <motion.span
            animate={controls}
            className="inline-block"
          >
            {text}
            <motion.span
              animate={ { opacity: [0, 1] } }
              transition={ { duration: 0.5, repeat: Infinity } }
            >
              |
            </motion.span>
          </motion.span>
        </motion.div>

        <motion.p
          className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-12"
          variants={itemVariants}
          initial={ { opacity: 0, x: -50 } }
          animate={ { opacity: 1, x: 0 } }
          transition={ { duration: 0.5, delay: 1 } }
        >
          I build exceptional digital experiences that make people's lives easier.
          Specializing in modern web technologies and user-centric design.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 relative overflow-hidden group"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap={ { scale: 0.95 } }
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={ { x: '-100%' } }
              whileHover={ { x: '100%' } }
              transition={ { duration: 0.5 } }
            />
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1_-PdFUv1FQQCfKcojpEBn2VQTsV-QSb9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800/50 hover:bg-slate-800/70 text-white rounded-lg flex items-center gap-2 group"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap={ { scale: 0.95 } }
          >
            <FileText size={20} className="group-hover:rotate-6 transition-transform" />
            <span>Resume</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all flex items-center gap-2"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap={ { scale: 0.95 } }
          >
            Contact Me
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;