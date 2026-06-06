// src/components/common/Navbar.tsx
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { navItems } from '../../utils/constants';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <>
      {/* Icon Rail */}
      <nav
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div
          className="
            flex flex-col items-center gap-1 py-3 px-2
            backdrop-blur-sm
            border border-white/20
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