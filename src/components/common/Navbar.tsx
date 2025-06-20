// src/components/common/Navbar.tsx
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900/90 backdrop-blur-sm border-gray-800' : 'bg-white/90 backdrop-blur-sm border-gray-200'} border-b transition-colors duration-300`}>
      {/* Navbar content */}
    </nav>
  );
};

export default Navbar;