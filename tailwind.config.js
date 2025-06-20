module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6366f1',
          600: '#4f46e5',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
