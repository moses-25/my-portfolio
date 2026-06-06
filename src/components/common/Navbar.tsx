// src/components/common/Navbar.tsx
import React, { useState, useRef, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { navItems } from '../../utils/constants';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[60] md:hidden bg-amber-500 text-white p-2 rounded-xl hover:bg-amber-600 transition-colors shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Icon Rail */}
      <nav
        ref={navRef}
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ease-in-out
          md:translate-x-0 md:flex
          ${isOpen ? 'translate-x-0' : '-translate-x-[calc(100%+1rem)] md:translate-x-0'}
        `}
      >
        <div
          className="
            flex flex-col items-center gap-1 py-3 px-2
            border border-white/20 dark:border-white/10
            rounded-3xl
            shadow-xl shadow-black/20
          "
        >
          {/* Hamburger Menu Icon */}
          <div className="mb-3 pb-3 border-b border-white/10 w-full flex justify-center">
            <button
              className="w-11 h-11 flex items-center justify-center text-white/90 hover:text-white transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Nav icons */}
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.sectionId}>
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    title={item.label}
                    aria-label={item.label}
                    className={`
                      group relative w-11 h-11 flex items-center justify-center rounded-2xl
                      transition-all duration-200
                      ${isActive
                        ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30'
                        : 'text-white/50 hover:text-white/90 hover:bg-white/10'
                      }
                    `}
                  >
                    {item.icon && (
                      <i className={`${item.icon} text-[18px]`} />
                    )}

                    {/* Tooltip label */}
                    <span className="
                      absolute left-full ml-3 px-2.5 py-1
                      bg-gray-900 dark:bg-gray-800 text-white text-xs font-medium
                      rounded-lg whitespace-nowrap
                      opacity-0 pointer-events-none -translate-x-1
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-150
                      shadow-lg
                    ">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Dark mode toggle at bottom */}
          <div className="mt-3 pt-3 border-t border-white/10 w-full flex justify-center">
            <DarkModeToggle compact />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;