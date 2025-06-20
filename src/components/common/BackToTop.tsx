// src/components/common/BackToTop.tsx
import React from 'react';

interface BackToTopProps {
  darkMode: boolean;
}

const BackToTop: React.FC<BackToTopProps> = ({ darkMode }) => {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full ${darkMode ? 'bg-indigo-600' : 'bg-indigo-600'} text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors z-50`}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;