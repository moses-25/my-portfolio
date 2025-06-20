// src/components/sections/Hero.tsx
import React from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { typedText } = useTypingEffect();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Hero content */}
    </section>
  );
};

export default Hero;