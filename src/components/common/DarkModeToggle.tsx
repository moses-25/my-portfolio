// src/components/common/DarkModeToggle.tsx
import { useTheme } from '../../context/ThemeContext';

interface DarkModeToggleProps {
  compact?: boolean;
}

const DarkModeToggle = ({ compact = false }: DarkModeToggleProps) => {
  const { darkMode, toggleDarkMode } = useTheme();

  if (compact) {
    return (
      <button
        onClick={toggleDarkMode}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        className={`
          group relative w-11 h-11 flex items-center justify-center rounded-2xl
          transition-all duration-200
          ${darkMode 
            ? 'text-white/50 hover:text-white/90 hover:bg-white/10' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300/20'
          }
        `}
      >
        {darkMode ? (
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}

        {/* Tooltip */}
        <span className={`
          absolute left-full ml-3 px-2.5 py-1
          ${darkMode ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
          text-xs font-medium
          rounded-lg whitespace-nowrap
          opacity-0 pointer-events-none -translate-x-1
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-150 shadow-lg
        `}>
          {darkMode ? 'Light mode' : 'Dark mode'}
        </span>
      </button>
    );
  }

  // Full-size variant (used anywhere outside the icon rail)
  return (
    <button
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`
        flex items-center gap-2.5 px-4 py-2.5 rounded-xl
        text-sm font-medium
        transition-all duration-200
        backdrop-blur-sm
        ${darkMode
          ? 'bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/25 text-white/80 hover:text-white'
          : 'bg-gray-300/20 hover:bg-gray-300/30 border border-gray-400/30 hover:border-gray-400/40 text-gray-700 hover:text-gray-900'
        }
      `}
    >
      {darkMode ? (
        <>
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          Light mode
        </>
      ) : (
        <>
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          Dark mode
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;