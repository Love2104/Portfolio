import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

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
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-900" />

          {/* Experience items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-0' : 'md:mr-auto md:pr-8 md:pl-0'}`}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-blue-500 font-semibold mb-2">{exp.company}</h4>
                    
                    <div className={`flex flex-col sm:flex-row gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">
                          • {item}
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