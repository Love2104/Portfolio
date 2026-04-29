import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    title: 'Design Manager',
    company: 'Election Commission',
    location: 'IIT Kanpur',
    period: 'May 2025 - Present',
    description: [
      'Led the visual branding and promotional design for campus-wide elections and initiatives',
      'Designed impactful posters, merchandise, and digital assets to enhance voter engagement',
      'Mentored junior designers and reviewed creative submissions for quality and alignment',
      'Managed design timelines and ensured timely delivery of campaign materials'
    ]
  },
  {
    title: 'Secretary (Web Development)',
    company: 'Academic & Career Council, Society of Civil Engineering',
    location: 'IIT Kanpur',
    period: 'May 2024 - April 2025',
    description: [
      'Developed the Academic & Career Council website with a dynamic structure for annual updates and streamlined maintenance',
      'Managed and regularly updated the Society of Civil Engineering website to showcase events, resources, and announcements',
      'Collaborated with council members to ensure timely, accurate, and user-friendly web content for the student community'
    ]
  },
  {
    title: 'Secretary (Design)',
    company: 'Entrepreneurship Cell',
    location: 'IIT Kanpur',
    period: 'May 2024 - April 2025',
    description: [
      'Led the visual design strategy for campaigns, events, and initiatives across social media and campus outreach',
      'Designed posters, reels, and digital assets using Figma, Canva, and Adobe Suite to engage a wide student audience',
      'Collaborated with content and tech teams to maintain visual consistency and enhance user engagement'
    ]
  },
  {
    title: 'Senior Election Officer (Web Development)',
    company: 'Election Commission',
    location: 'IIT Kanpur',
    period: 'May 2024 - April 2025',
    description: [
      'Developed and maintained the Election Commission website to support transparent and timely student elections',
      'Created interactive web interfaces for candidate info, voting guidelines, and results using modern frameworks',
      'Collaborated with design and operations teams to ensure accurate and accessible election-related content'
    ]
  }
];

const Experience = () => {
  const { theme } = useTheme();
  return (
    <section id="experience" className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="relative">
          <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-200'}`} />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                  <div className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border ${
                    theme === 'dark'
                      ? 'bg-slate-700 border-slate-600 hover:border-blue-500/50'
                      : 'bg-white border-slate-200 hover:border-blue-300'
                  }`}>
                    <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {exp.title}
                    </h3>
                    <h4 className="text-blue-500 font-semibold mb-3">{exp.company}</h4>

                    <div className={`flex flex-col sm:flex-row gap-3 text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className={`space-y-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm flex gap-2">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;