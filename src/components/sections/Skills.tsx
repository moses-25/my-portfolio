// src/components/sections/Skills.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import SkillCard from '../ui/SkillCard';
import { skillsData } from '../../utils/constants';
import { useTheme } from '../../context/ThemeContext';

const levelsByName: Record<string, number> = {
  JavaScript: 50,
  React: 55,
  Python: 50,
  Flask: 50,
  Figma: 45,
  TypeScript: 55,
  Git: 70,
  GitHub: 75,
  SQL: 50,
  Linux: 60,
};

const Skills: React.FC = () => {
  const { darkMode } = useTheme();
  const [animate, setAnimate] = useState(false);
  const metersRef = useRef<HTMLDivElement>(null);

  // Build meters from available skills + defined levels
  const meters = useMemo(() => {
    return skillsData
      .filter((s) => levelsByName[s.name] !== undefined)
      .map((s) => ({ ...s, level: levelsByName[s.name] }))
      .sort((a, b) => b.level - a.level);
  }, []);

  useEffect(() => {
    if (!metersRef.current) return;
    const el = metersRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            A snapshot of the technologies I use, with experience represented by animated meters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Animated meters (replaces chart) */}
          <div ref={metersRef} className="space-y-6">
            {meters.map((skill) => (
              <div
                key={skill.name}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sky-500 text-xl"><i className={skill.icon} /></span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-sm text-sky-400 font-medium tabular-nums">{skill.level}%</span>
                </div>

                <div className={`relative h-3 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]`}
                    style={{
                      width: animate ? `${skill.level}%` : '0%',
                      transition: 'width 1200ms cubic-bezier(.2,.7,.3,1)',
                    }}
                  />

                  {/* subtle moving sheen */}
                  <div
                    className="absolute inset-y-0 left-0 w-1/3 bg-white/10 mix-blend-overlay"
                    style={{
                      transform: animate ? `translateX(${skill.level}%)` : 'translateX(0%)',
                      transition: 'transform 1400ms cubic-bezier(.2,.7,.3,1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Keep skill cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
