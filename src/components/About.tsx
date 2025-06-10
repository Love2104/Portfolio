import React from 'react';
import { Code2, Briefcase } from 'lucide-react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
];

const stats = [
  { icon: <Code2 className="w-6 h-6" />, value: '10+', label: 'Projects Completed' },
  { icon: <Briefcase className="w-6 h-6" />, value: '2.5+', label: 'Years Experience' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Journey</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of experience
                in building web applications. I specialize in creating elegant solutions
                to complex problems and am constantly learning new technologies to stay
                at the forefront of web development.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                >
                  <div className="text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl transform hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-1000 ease-out group-hover:scale-x-105"
                      style={ { width: `${skill.level}%` } }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center text-blue-400">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'HTML5', 'CSS3', 'Git', 'MongoDB', 'PostgreSQL', 'REST APIs',
              'GraphQL', 'Docker', 'AWS', 'Firebase', 'Redux', 'Material-UI'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;