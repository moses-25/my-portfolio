// src/components/sections/Contact.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Contact: React.FC = () => {
  const { darkMode } = useTheme();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent!');
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} p-8`}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300`}
                    placeholder="moses otieno"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300`}
                    placeholder="moses@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300`}
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300`}
                  placeholder="Hello Moses, I'd like to discuss..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} p-8 mb-8`}>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">mosesotieno8363@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Friday</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} p-8`}>
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/moses.jones.98871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="https://twitter.com/moses_kingstone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/moses-o-311b2235a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href="https://github.com/moses-25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#333] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://instagram.com/moses_kingstone/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;