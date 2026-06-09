// src/components/sections/About.tsx
import React, { useEffect, useState } from 'react';

// ─── Typewriter ────────────────────────────────────────────────────────────────
const TITLES = [
  'a Software Engineer',
  'a Full-Stack Developer',
  'a React Enthusiast',
  'a Frontend & Backend specialist',
];

const Typewriter: React.FC = () => {
  const [text, setText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    const target = TITLES[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (text.length < target.length) {
        timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1800);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 200);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setTitleIdx((i) => (i + 1) % TITLES.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, titleIdx]);

  return (
    <span className="text-teal-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// ─── Tech icons ────────────────────────────────────────────────────────────────
const TECH_ICONS = [
 // { name: 'MySQL',       icon: 'fab fa-readme',      label: 'MySQL' },
  //{ name: 'Docker',      icon: 'fab fa-docker',       label: 'Docker' },
  { name: 'React',       icon: 'fab fa-react',         label: 'React' },
  { name: 'Python',      icon: 'fab fa-python',        label: 'Python' },
  { name: 'Git',         icon: 'fab fa-git-alt',       label: 'Git' },
  { name: 'JavaScript',  icon: 'fab fa-js',            label: 'JS' },
  { name: 'Linux',       icon: 'fab fa-linux',         label: 'Linux' },
  { name: 'Flask',       icon: 'fas fa-flask',         label: 'Flask' },
  { name: 'PostgreSQL',  icon: 'fas fa-database',      label: 'PostgreSQL' },
  { name: 'Tailwind CSS',icon: 'fas fa-palette',       label: 'Tailwind' },
  { name: 'HTML5',        icon: 'fab fa-html5',         label: 'HTML5' },
  { name: 'CSS3',        icon: 'fab fa-css3-alt',      label: 'CSS3' },
  { name: 'C++',         icon: 'fas fa-code',          label: 'C++' },
  { name: 'postman',      icon: 'fas fa-paper-plane',   label: 'Postman' },
  { name: 'Figma',       icon: 'fas fa-vector-square', label: 'Figma' },
  { name: 'jira',        icon: 'fas fa-tasks',         label: 'Jira' },
  { name: 'Trello',      icon: 'fas fa-columns',       label: 'Trello' },
];

// ─── Services (right col) ──────────────────────────────────────────────────────
const SERVICES = [
  {
    title: 'Full-Stack Web Development',
    description:
      'Building modern web applications with React, Flask, and PostgreSQL. I create responsive, user-focused applications with clean architectures, reusable components, secure authentication, and scalable backend APIs. Recent projects include donation platforms, portfolio websites, and management systems.',
    images: [
      '/F1.jpg',
      '/F2.jpg',
    ],
  },
  {
    title: 'REST API Development & Integration',
    description:
      'Designing secure and maintainable backend services. Experienced in developing RESTful APIs using Flask, implementing JWT authentication, role-based access control, PostgreSQL database integration, and following MVC architecture for long-term maintainability.',
    images: [
      '/API2.jpg',
      '/API3.jpg',
    ],
  },
  {
    title: 'Database Design & Data Management',
    description:
      'Creating efficient data models that support real-world applications. Skilled in designing relational databases with PostgreSQL, building optimized schemas, managing relationships, and ensuring data integrity for applications involving users, donations, tracking systems, and content management.',
    images: [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    ],
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────
const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen">
      {/*
        Desktop: left col sticky (dark) + right col scrollable (light)
        Mobile:  stacked, dark on top, light below
      */}
      <div className="lg:flex lg:min-h-screen">

        {/* ── LEFT COL ── dark sticky bio ────────────────────────────────── */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen bg-white flex flex-col justify-between px-10 pt-8 pb-6 overflow-hidden">

          <div className="relative z-10 flex flex-col gap-8 flex-1 justify-center">
            {/* Name */}
            <div>
              <p className="text-black text-sm font-heading tracking-[0.15em] uppercase mb-2">
                Moses Otieno
              </p>
              <h2 className="text-3xl lg:text-4xl font-heading text-black leading-snug">
                Hi, I'm <Typewriter />
              </h2>
            </div>

            {/* Bio */}
            <p className="text-gray-700 text-2xl leading-relaxed max-w-md font-accent tracking-wide">
              Aspiring full-stack software engineer focused on building modern web applications with React, Flask, and PostgreSQL. Passionate about creating clean, scalable solutions and continuously improving both technical and problem-solving skills through real-world projects.

            </p>
          </div>

          {/* Tech icon strip — bottom */}
          <div className="relative z-10 pt-10 border-t border-gray-200">
            <p className="text-gray-800 text-xs mb-5 uppercase tracking-[0.2em] font-accent">Tech Stack</p>
            <div className="space-y-4 overflow-hidden">
              <div className="flex gap-6 items-center animate-scroll-left" style={{ width: 'max-content' }}>
                {[...TECH_ICONS.slice(0, 9), ...TECH_ICONS.slice(0, 9)].map((t, i) => (
                  <div key={i} className="group relative flex flex-col items-center flex-shrink-0">
                    <i
                      className={`${t.icon} text-5xl text-gray-700 group-hover:text-teal-600 transition-colors`}
                      title={t.name}
                    />
                    <span className="text-[10px] text-gray-800 group-hover:text-teal-600 transition-colors mt-0.5">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 items-center animate-scroll-right" style={{ width: 'max-content' }}>
                {[...TECH_ICONS.slice(9), ...TECH_ICONS.slice(9)].map((t, i) => (
                  <div key={i} className="group relative flex flex-col items-center flex-shrink-0">
                    <i
                      className={`${t.icon} text-5xl text-gray-700 group-hover:text-teal-600 transition-colors`}
                      title={t.name}
                    />
                    <span className="text-[10px] text-gray-800 group-hover:text-teal-600 transition-colors mt-0.5">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COL ── light scrollable "What I Do" ───────────────────── */}
        <div className="lg:w-1/2 bg-white px-8 lg:px-12 py-20">
          <h3 className="text-3xl font-heading text-gray-900 mb-14">What I Do</h3>

          <div className="flex flex-col gap-16">
            {SERVICES.map((svc) => (
              <div key={svc.title}>
                {/* Title row with teal left-bar accent */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-1.5 w-1 h-4 rounded-full bg-teal-500 shrink-0" />
                  <h4 className="text-lg font-display font-semibold text-gray-900 tracking-wide">{svc.title}</h4>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 pl-4">
                  {svc.description}
                </p>

                {/* 3-col image grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-4">
                  {svc.images.map((src: string, i: number) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200"
                    >
                      <img
                        src={src}
                        alt={`${svc.title} ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;