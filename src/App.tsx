// src/App.tsx
import React, { useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import BackToTop from './components/common/BackToTop';
import { useTheme } from './context/ThemeContext';

const App: React.FC = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    const glow = document.createElement('div');
    glow.className = 'glow-cursor';
    document.body.appendChild(glow);

    const isInteractive = (el: Element | null) => !!el && (el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('a,button'));
    const findInteractive = (el: Element | null) => (el && (el.closest('a,button') as HTMLElement)) || null;

    const onMove = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const active = findInteractive(target);
      if (active) {
        glow.classList.add('is-visible');
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      } else {
        glow.classList.remove('is-visible');
      }
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const active = findInteractive(target);
      if (!active) return;
      const rect = active.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      // Position ripple at cursor relative to element
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      // Ensure container clips
      active.classList.add('hover-glow-base');
      active.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      glow.remove();
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
