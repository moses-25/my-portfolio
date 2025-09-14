// src/components/common/Navbar.tsx
import React, { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { navItems } from '../../utils/constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for fixed navbar
    window.scrollTo({ top: y, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'backdrop-blur bg-white/70 dark:bg-black/40 border-b border-gray-200/40 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900 dark:text-white">My Portfolio</span>
        </div>

        {/* Nav links (desktop) */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className="text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i className="fas fa-bars" />
          </button>
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/70 backdrop-blur">
          <ul className="container py-3 grid gap-2">
            {navItems.map((item) => (
              <li key={item.sectionId}>
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="w-full text-left px-2 py-2 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {item.icon && <i className={`${item.icon} mr-2 text-sky-500`} />}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
