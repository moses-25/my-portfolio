// src/components/common/Navbar.tsx
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import DarkModeToggle from './DarkModeToggle';
import { navItems } from '../../utils/constants';

const Navbar = () => {
  const { darkMode } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const closeNav = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button - top right, mobile only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-[60] md:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 ${
          isOpen
            ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
            : darkMode
              ? 'bg-white/10 text-white/80 backdrop-blur-md border border-white/20'
              : 'bg-white/80 text-gray-700 backdrop-blur-md border border-gray-300/50 shadow-lg'
        }`}
        aria-label="Menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeNav}
          aria-hidden
        />
      )}

        {/* Icon Rail */}
      <nav
        className={`fixed left-0 md:left-4 top-0 md:top-1/2 md:-translate-y-1/2 z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          h-full md:h-auto
        `}
      >
        <div
          className={`
            flex flex-col items-center gap-1 py-3 px-2
            h-full md:h-auto
            ${darkMode
              ? 'bg-black/90 md:bg-transparent md:backdrop-blur-sm border-r border-white/10 md:border md:border-white/20 shadow-xl shadow-black/20'
              : 'bg-white/95 md:bg-transparent md:backdrop-blur-sm border-r border-gray-200 md:border md:border-gray-400/40 shadow-xl shadow-gray-300/40'
            }
            md:rounded-3xl
          `}
        >
          {/* Nav icons */}
          <ul className="flex flex-col gap-1 mt-20 md:mt-0">
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
                        : darkMode
                          ? 'text-white/50 hover:text-white/90 hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300/20'
                      }
                    `}
                  >
                    {item.icon && (
                      <i className={`${item.icon} text-[18px]`} />
                    )}

                    {/* Tooltip */}
                    <span className={`
                      absolute left-full ml-3 px-2.5 py-1
                      ${darkMode ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
                      text-xs font-medium
                      rounded-lg whitespace-nowrap
                      opacity-0 pointer-events-none -translate-x-1
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-150
                      shadow-lg
                    `}>
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Dark mode toggle at bottom */}
          <div className={`mt-3 pt-3 ${darkMode ? 'border-white/10' : 'border-gray-400/20'} border-t w-full flex justify-center`}>
            <DarkModeToggle compact />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
