import React, { useState } from 'react';
import { Github, ExternalLink, Plus } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type Category = 'All' | 'Web App' | 'Graphics Engine' | 'AI / ML';


const projects = [
  {
    title: 'ShopEase - Eccomerce Website',
    category: 'Web App',
    description: 'A full-stack e-commerce web application built with React and Node.js. Features include user authentication, product management, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/Love2104/Portfolio',
    live: 'https://shopease-india.web.app/',
    image: '/image.png',
    featured: true
  },
  {
    title: 'Cricket Shot Detection System',
    category: 'AI / ML',
    description: 'A computer vision-based system that detects and classifies cricket shots from video input. Built using deep learning and pose estimation techniques, it analyzes player movements and predicts shot types with an interactive Streamlit interface for real-time visualization.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow / PyTorch', 'Streamlit'],
    github: 'https://github.com/Love2104/EE655-course-project',
    live: 'https://ee655-course-project-c9efqxthqhilxiadfqxnb3.streamlit.app/',
    image: '/image copy.png',
    featured: true
  },
  {
    title: 'Academics and Career Council, IIT Kanpur (Domain expired)',
    category: 'Web App',
    description: 'A full-stack web application built with React and Node.js. Features include real-time updates, user authentication, and responsive design.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/Love2104/AnCWebsite',
    live: 'https://www.anciitk.co.in/',
    image: '/project1.png',
    featured: true
  },
  {
    title: '3D Graphics & Shader Renderer',
    category: 'Graphics Engine',
    description: 'A real-time 3D rendering engine built with C++, OpenGL, and ImGui. Features include multiple light types, post-processing effects, and an interactive scene UI.',
    technologies: ['C++', 'OpenGL', 'GLFW', 'GLM', 'ImGui'],
    github: 'https://github.com/Love2104/GameDev-Summer-Project',
    live: '',
    image: '/project2.png',
    featured: true
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const { theme } = useTheme();
  const categories: Category[] = ['All', 'Web App', 'AI / ML', 'Graphics Engine'];

  const filteredProjects = projects.filter(project =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore my latest work and creative endeavors. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : theme === 'dark'
                  ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-blue-400'
                  : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-xl overflow-hidden border transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${project.featured ? 'md:col-span-2' : ''
                } ${theme === 'dark'
                  ? 'bg-slate-800 border-slate-700 hover:border-blue-500/50'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-md'
                }`}
            >
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold group-hover:text-blue-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                    {project.category}
                  </span>
                </div>

                <p className={`mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark'
                        ? 'bg-slate-700 text-slate-300'
                        : 'bg-slate-100 text-slate-600'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${theme === 'dark'
                      ? 'bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white'
                      }`}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all group border ${theme === 'dark'
              ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400'
              : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
              }`}
          >
            <Plus size={20} className="group-hover:rotate-180 transition-transform duration-300" />
            <span>View More Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;