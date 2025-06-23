// src/components/sections/Footer.tsx
import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Moses Otieno</h3>
            <p className="mb-4 text-gray-400">
              Software Engineering Student from Moringa School .
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/moses-25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://linkedin.com/in/moses-o-311b2235a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://twitter.com/moses_kingstone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://facebook.com/moses.jones.98871" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-white transition-colors">Skills</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition-colors">Projects</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-indigo-400"></i>
                <span>mosesotieno8363@gmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-indigo-400"></i>
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-indigo-400"></i>
                <span>Available on request</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Moses Otieno. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built by <span className="text-red-500">🔅</span>OCHIENG MOSES OTIENO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;