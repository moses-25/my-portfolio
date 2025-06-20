// src/components/sections/About.tsx
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6">
              I'm a <span className="text-indigo-600">Software Engineering Student</span> with a passion for building digital solutions
            </h3>
            
            <p className="mb-6 text-lg leading-relaxed">
              I'm currently pursuing my degree in Software Engineering, where I've developed a strong foundation in both front-end and back-end technologies. My journey in tech started with a curiosity about how digital products work, which evolved into a passion for creating them myself.
            </p>
            
            <p className="mb-8 text-lg leading-relaxed">
              Beyond coding, I enjoy solving complex problems, collaborating with diverse teams, and continuously learning new technologies. I believe in writing clean, maintainable code and creating intuitive user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <i className="fas fa-user-graduate text-indigo-600 mr-2"></i>
                  Education
                </h4>
                <p>BSc in Software Engineering</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <i className="fas fa-map-marker-alt text-indigo-600 mr-2"></i>
                  Location
                </h4>
                <p>Nairobi, Kenya</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Open to Remote Work</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">JavaScript</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Python</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">SQL</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Flask</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Git</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://i.pinimg.com/736x/42/59/a8/4259a8e260f3d7016e56064860591373.jpg" 
                  alt="Moses working" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-indigo-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">2+</div>
                  <div className="text-sm">Years of Experience</div>
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