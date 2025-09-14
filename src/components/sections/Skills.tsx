// src/components/sections/Skills.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import SkillCard from '../ui/SkillCard';
import { skillsData } from '../../utils/constants';
import { useTheme } from '../../context/ThemeContext';
import { generateChartOptions } from '../../utils/helpers';

const Skills: React.FC = () => {
  const { darkMode } = useTheme();
  const skillsChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsChartRef.current) {
      const chart = echarts.init(skillsChartRef.current);
      
      const option = generateChartOptions(darkMode);
      
      chart.setOption(option);
      
      const handleResize = () => {
        chart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [darkMode]);

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            I have experience with the following technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={skillsChartRef} style={{ width: '100%', height: '400px' }}></div>
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