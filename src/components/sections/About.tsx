// src/components/sections/About.tsx
import React from 'react';
import Image from '../../assets/moses.jpg'; // Adjust the path as necessary
import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              I'm a <span className="text-primary-500">Software Engineering Student</span> with a passion for building digital solutions
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With over one years of experience in software development and solutions, I've honed my skills in creating innovative digital products that meet organizational and personal objectives. I'm passionate about software development, always eager to learn new concepts, and possess a collaborative spirit, with a focus on detail and leadership in developing solutions that drive results.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond coding, I enjoy solving complex problems, collaborating with diverse teams, and continuously learning new technologies. I believe in writing clean, maintainable code and creating intuitive user experiences.
            </p>

            {/* Education & Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {/* Education Card */}
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-md bg-primary-100 dark:bg-primary-900/30 mr-3">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Education</h4>
                </div>
                <div className="space-y-1 pl-11">
                  <p className="text-gray-700 dark:text-gray-200">Certificate in Software Engineering</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2025 - Present</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Moringa School</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-md bg-primary-100 dark:bg-primary-900/30 mr-3">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                </div>
                <div className="space-y-1 pl-11">
                  <p className="text-gray-700 dark:text-gray-200">Nairobi, Kenya</p>
                  <p className="text-sm text-primary-500 dark:text-primary-400">Open to Remote Work</p>
                </div>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Technical Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Python', 'HTML5', 'CSS3', 'Git', 'GitHub'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image and Badge */}
          <div className="relative h-full flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              {/* Profile Image */}
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">

                <img
                  src={Image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-5 -left-5 bg-primary-500 text-white px-6 py-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">1+</div>
                  <div className="text-sm">Year of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
