// src/components/ui/ProjectCard.tsx
import React from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}>
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        
        <p className="mb-4 text-black-600 dark:text-black-400">{project.description}</p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={project.github} 
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-medium flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github mr-2"></i>
            GitHub
          </a>
          <a 
            href={project.demo} 
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;