// src/components/common/DarkModeToggle.tsx
import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => toggleDarkMode(!isDarkMode)}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-sm text-gray-900 dark:text-white shadow"
    >
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
