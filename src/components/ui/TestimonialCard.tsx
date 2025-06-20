// src/components/ui/TestimonialCard.tsx
import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  darkMode: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, darkMode }) => {
  return (
    <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-all duration-300 shadow-lg`}>
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="relative">
        <i className="fas fa-quote-left text-4xl text-indigo-200 absolute -top-4 -left-2 opacity-50"></i>
        <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;