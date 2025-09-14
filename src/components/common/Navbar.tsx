// src/components/common/Navbar.tsx
import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">My Portfolio</h1>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;