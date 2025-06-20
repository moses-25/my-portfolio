// src/components/sections/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 z-10 text-center">
        {/* Introductory text */}
        <div className="mb-8">
          <span className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400 tracking-widest">
            HI, I'M
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-2 mb-6 text-gray-800 dark:text-white">
            MOSES
          </h1>
        </div>

        {/* Main title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-700 dark:text-gray-300">
          I'M A <span className="text-indigo-600 dark:text-indigo-400">SOFTWARE ENGINEER</span>
        </h2>

        {/* Description paragraph */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
          A detail-oriented software engineer with a passion for writing clean, efficient code. I'm
          excited to collaborate on projects that make a difference in people's lives. Let's build
          something amazing together!
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-white rounded-full font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 transition-all duration-300">
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
