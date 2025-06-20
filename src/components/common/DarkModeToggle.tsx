// src/components/common/DarkModeToggle.tsx
import React from 'react';

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button 
      onClick={toggleDarkMode}
      className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-500'} cursor-pointer`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  );
};

export default DarkModeToggle;