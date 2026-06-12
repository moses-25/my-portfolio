import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm font-semibold tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="h-32 w-auto brightness-0 invert" />
          <p>&copy; 2026 All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/moses-25" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-base">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/moses-o-311b2235a" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-base">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/moses_kingstone/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-base">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;