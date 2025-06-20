// src/components/sections/Skills.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import SkillCard from '../ui/SkillCard';
import { skillsData } from '../../utils/constants';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillsChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsChartRef.current) {
      const chart = echarts.init(skillsChartRef.current);
      
      const option = {
        /* Chart options */
      };
      
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
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Skills content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
};

export default Skills;