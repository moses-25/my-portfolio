// src/components/common/Navbar.tsx
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { navItems } from '../../utils/constants';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-gray-900 dark:bg-black text-white z-50 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <img 
          src="/logo.svg" 
          alt="Logo" 
          className="h-12 w-auto brightness-0 invert scale-[4]"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex-1 py-6 space-y-2 px-4">
        {navItems.map((item) => (
          <li key={item.sectionId}>
            <button
              onClick={() => scrollToSection(item.sectionId)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                activeSection === item.sectionId
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.icon && <i className={`${item.icon} text-lg`} />}
              <span className="font-medium">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle at Bottom */}
      <div className="p-6 border-t border-gray-800">
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
