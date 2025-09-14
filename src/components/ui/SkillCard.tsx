// src/components/ui/SkillCard.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { darkMode } = useTheme();
  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}>
      <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center text-white mb-4`}>
        <i className={`${skill.icon} text-xl`}></i>
      </div>
      <h3 className="text-lg font-semibold">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;