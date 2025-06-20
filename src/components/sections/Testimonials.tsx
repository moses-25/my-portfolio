// src/components/sections/Testimonials.tsx
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonialsData } from '../../utils/constants';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            What my mentors and colleagues have to say about my work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;