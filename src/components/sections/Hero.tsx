// src/components/sections/Hero.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../common/Button';
import ProfileImage from '../../assets/moses.jpg';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import ParticlesContainer from "../ParticlesContainer";

const roles = [
  { label: 'Designer', icon: 'fas fa-pen-ruler' },
  { label: 'Web Developer', icon: 'fas fa-laptop-code' },
];

const Hero: React.FC = () => {
  const { darkMode } = useTheme();
  const { typedText } = useTypingEffect(['Designer', 'Web Developer'], {
    typeSpeed: 10,
    deleteSpeed: 30,
    delayBetween: 1200,
    startDelay: 400,
    loop: true,
  });

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center ${darkMode ? 'bg-black' : 'bg-white'} overflow-hidden`}
    >
      {/* Background: subtle animated blobs + grain */}
      <div className="hero-animated-bg">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Decorative top-left circle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-80 h-80 rounded-full bg-sky-700/80 dark:bg-sky-600/60 blur-2xl"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Particles background */}
        <ParticlesContainer />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            {/* Small arrow and intro */}
            <div className="flex items-center text-sky-500 mb-6">
              <i className="fa-solid fa-arrow-down-left-long mr-2" aria-hidden />
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 animate-fade-up">Freelancer</p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white animate-slide-in-left delay-300">
                Software Engineer
                <span className="text-sky-500 animate-glow-blue">.</span>
              </h1>
              <div className="mt-2 h-8 md:h-9 text-sky-400 font-semibold tracking-wide">
                <span className="inline-block min-w-[9ch] border-r-2 border-sky-400 pr-2 animate-blink">{typedText}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 animate-pop-in delay-600">
              <a href="/resume.pdf" download>
                <Button variant="primary" className="rounded-full px-8 py-3 !bg-sky-600 hover:!bg-sky-700 shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:drop-shadow-[0_10px_18px_rgba(14,165,233,0.35)] active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50">
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-6 text-2xl">
              <a href="https://github.com/moses-25" aria-label="GitHub" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_10px_12px_rgba(14,165,233,0.35)] active:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 rounded-md"><i className="fab fa-github" /></a>
              <a href="https://www.linkedin.com/in/moses-o-311b2235a/" aria-label="LinkedIn" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_10px_12px_rgba(14,165,233,0.35)] active:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 rounded-md"><i className="fab fa-linkedin" /></a>
              <a href="https://x.com/moses_kingstone" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_10px_12px_rgba(14,165,233,0.35)] active:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 rounded-md"><i className="fab fa-twitter" /></a>
              <a href="https://wa.me/" aria-label="WhatsApp" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_10px_12px_rgba(14,165,233,0.35)] active:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 rounded-md"><i className="fab fa-whatsapp" /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mosesotieno8363@gmail.com" aria-label="Email" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_10px_12px_rgba(14,165,233,0.35)] active:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 rounded-md"><i className="fas fa-envelope" /></a>
            </div>
          </div>

          {/* Right imagery */}
          <div className="lg:col-span-6 relative order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            {/* Portrait */}
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              <img
                src={ProfileImage}
                alt="Portrait"
                className="w-full h-auto object-contain rounded-full drop-shadow-[0_20px_50px_rgba(14,165,233,0.25)] animate-bounce-around "
              />
              {/* Name badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 shadow-md">
                <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100">Moses Otieno</span>
              </div>
            </div>

            {/* Vertical role badges */}
            <div className="hidden md:flex flex-col gap-8 absolute right-0 top-1/2 -translate-y-1/2 pr-2">
              {roles.map((role) => (
                <div
                  key={role.label}
                  className="flex items-center gap-3 bg-white/90 dark:bg-gray-900/80 border border-gray-200/60 dark:border-gray-700 rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm"
                >
                  <span className="text-2xl text-sky-600"><i className={role.icon} /></span>
                  <span className="font-semibold text-gray-900 dark:text-white whitespace-nowrap">{role.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
