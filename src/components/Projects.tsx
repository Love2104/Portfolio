import React, { useState } from 'react';
import { Github, ExternalLink, Plus } from 'lucide-react';

type Category = 'All' | 'Web App' | 'Mobile' | 'UI/UX';

const projects = [
  {
    title: 'Project 1',
    category: 'Web App',
    description: 'A full-stack web application built with React and Node.js. Features include real-time updates, user authentication, and responsive design.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project1.jpg',
    featured: true
  },
  // ... rest of the projects array remains the same
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories: Category[] = ['All', 'Web App', 'Mobile', 'UI/UX'];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my latest work and creative endeavors. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden backdrop-blur-sm 
                transform transition-all duration-500 hover:scale-[1.02]
                ${project.featured ? 'md:col-span-2' : ''}`}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300"
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
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-all"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all group"
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