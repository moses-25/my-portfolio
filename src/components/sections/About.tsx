// src/components/sections/About.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from '../../assets/moses.jpg';
import { useTheme } from '../../context/ThemeContext';

// Counter with intersection-based reveal and RAF animation
const CounterItem: React.FC<{ label: string; value: number; suffix?: string; duration?: number }>
  = ({ label, value, suffix = '', duration = 1500 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setDisplay(Math.floor(eased * value));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="p-5 rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm text-center hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-shadow">
      <div className="text-3xl sm:text-4xl font-extrabold text-white">
        {display}
        {hasAnimated && value > 0 && display >= value ? suffix : ''}
      </div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
};

const skillIcons = [
  { name: 'JavaScript', icon: 'fab fa-js', color: 'bg-yellow-500' },
  { name: 'React', icon: 'fab fa-react', color: 'bg-sky-500' },
  { name: 'Python', icon: 'fab fa-python', color: 'bg-blue-700' },
  { name: 'HTML5', icon: 'fab fa-html5', color: 'bg-orange-600' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'bg-blue-600' },
  { name: 'Git', icon: 'fab fa-git-alt', color: 'bg-red-600' },
  { name: 'GitHub', icon: 'fab fa-github', color: 'bg-gray-800' },
];

const About: React.FC = () => {
  const { darkMode } = useTheme();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setInView(true);
      });
    }, { threshold: 0.15 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // counters data (tweak values as needed)
  const counters = useMemo(() => ([
    { label: 'Years of Experience', value: 1, suffix: '+' },
    { label: 'Projects Completed', value: 6, suffix: '+' },
    { label: 'Technologies Learned', value: 12, suffix: '+' },
  ]), []);

  return (
    <section id="about" ref={sectionRef} className={`relative py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background glow/gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 w-[36rem] h-[36rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 w-[32rem] h-[32rem] rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`text-center mb-14 ${inView ? 'animate-fade-up' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            About <span className="text-sky-400">Me</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            I’m a <span className="text-sky-300">Software Engineering Student</span> with a passion for
            <span className="text-sky-300"> building digital solutions</span>. I enjoy creating clean, user-focused experiences, collaborating with teams, and learning new technologies every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className={`${inView ? 'animate-slide-in-left' : ''}`}>
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-transform transform hover:-translate-y-0.5">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <div className="font-semibold text-white">Education</div>
                    <div className="text-sm text-gray-300">Certificate in Software Engineering</div>
                    <div className="text-xs text-sky-400">Moringa School • 2025 – Present</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-transform transform hover:-translate-y-0.5">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🌎</div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-sm text-gray-300">Nairobi, Kenya</div>
                    <div className="text-xs text-sky-400">Open to Remote Work</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills icons */}
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skillIcons.map((s) => (
                  <div key={s.name} className="group relative">
                    <div
                      className={`w-12 h-12 ${s.color} rounded-lg grid place-items-center text-white shadow-sm transition-transform transform group-hover:-translate-y-0.5 group-hover:shadow-[0_0_22px_rgba(56,189,248,0.35)]`}
                      title={s.name}
                    >
                      <i className={`${s.icon} text-xl`} />
                    </div>
                    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap rounded bg-gray-900 text-gray-200 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Counters */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {counters.map((c) => (
                <CounterItem key={c.label} label={c.label} value={c.value} suffix={c.suffix} />
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className={`relative ${inView ? 'animate-fade-up delay-300' : ''}`}>
            {/* Image octagon frame with animated glow */}
            <div className="octagon-frame animate-float-soft">
              {/* Image card */}
              <div className="relative group overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm clip-octagon">
                <img
                  src={Image}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-[1.04]"
                />
                {/* Top gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
