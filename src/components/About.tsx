import React from 'react';

const techStack = [
  {
    category: 'FRONTEND',
    skills: 'React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion',
  },
  {
    category: 'BACKEND',
    skills: 'Node.js, Express, Python, PostgreSQL, MongoDB, REST APIs, GraphQL',
  },
  {
    category: 'AI / ML',
    skills: 'OpenAI API, LangChain, MediaPipe, Hugging Face, Computer Vision, RAG Pipelines',
  },
  {
    category: 'TOOLS',
    skills: 'Docker, AWS, Firebase, Git, Linux, Puppeteer, Chrome Extensions',
  },
];

const tickerItems = [
  { label: 'Featured Projects', type: 'heading' },
  { label: 'Cricket Shot Recognition System', type: 'item' },
  { label: 'ShopEase – E-commerce Platform', type: 'item' },
  { label: 'Personal Portfolio Website', type: 'item' },
  { label: 'AnC Council, IIT Kanpur', type: 'item' },
  { label: '3D Graphics & Shader Renderer', type: 'item' },
];

const TickerContent = () => (
  <>
    {tickerItems.map((item, i) => (
      <span key={i} className="flex items-center gap-6 mr-14">
        {item.type === 'heading' ? (
          <span
            className="text-slate-900 dark:text-slate-100 text-sm font-medium transition-colors duration-300"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {item.label}
            <span className="text-blue-500">:</span>
          </span>
        ) : (
          <>
            <span className="text-blue-500 text-[10px]">◆</span>
            <span
              className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {item.label}
            </span>
          </>
        )}
      </span>
    ))}
  </>
);

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* TWO-COLUMN MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Bio ── */}
          <div className="flex flex-col gap-10">

            {/* Section heading */}
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>

            {/* Bio paragraphs — large, readable */}
            <div className="flex flex-col gap-6">
              <p className="text-xl md:text-2xl font-semibold leading-snug text-slate-900 dark:text-slate-100 transition-colors duration-300">
                Full Stack Developer based out of IIT Kanpur.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 transition-colors duration-300">
                I've built browser extensions, AI meeting tools, secure code runners, and interview assistants, all solo, all shipped.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 transition-colors duration-300">
                I care about clean architecture, fast products, and code that doesn't break at 2am.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 transition-colors duration-300">
                Looking for full-stack internship roles where I can build real things.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {['Available for Internships', 'Open to Relocate'].map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 px-4 py-2 transition-colors duration-300"
                  style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Tech Stack ── */}
          <div className="flex flex-col gap-10 lg:pt-16">
            {techStack.map(({ category, skills }) => (
              <div key={category} className="flex flex-col gap-3">

                {/* Category label + divider */}
                <div className="flex items-center gap-4">
                  <p
                    className="text-xs font-medium tracking-widest text-slate-400 dark:text-slate-500 flex-shrink-0 uppercase transition-colors duration-300"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {category}
                  </p>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700 transition-colors duration-300" />
                </div>

                {/* Skills text */}
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                  {skills}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── TICKER STRIP ── */}
      <div className="border-t border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 overflow-hidden py-4 transition-colors duration-300">
        <div className="animate-ticker">
          <TickerContent />
          <TickerContent />
          <TickerContent />
          <TickerContent />
        </div>
      </div>

    </section>
  );
};

export default About;