// src/utils/constants.ts
import { Project, Skill, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', sectionId: 'home', icon: 'fas fa-home' },
  { label: 'About', sectionId: 'about', icon: 'fas fa-user' },
  { label: 'Skills', sectionId: 'skills', icon: 'fas fa-code' },
  { label: 'Projects', sectionId: 'projects', icon: 'fas fa-project-diagram' },
  { label: 'Contact', sectionId: 'contact', icon: 'fas fa-envelope' },
];

export const skillsData: Skill[] = [
  { name: 'JavaScript', icon: 'fab fa-js', color: 'bg-yellow-500' },
  { name: 'React', icon: 'fab fa-react', color: 'bg-blue-500' },
  { name: 'Python', icon: 'fab fa-python', color: 'bg-blue-700' },
  { name: 'Flask', icon: 'fas fa-flask', color: 'bg-emerald-600' },
  { name: 'Figma', icon: 'fab fa-figma', color: 'bg-pink-600' },
  { name: 'TypeScript', icon: 'fas fa-code', color: 'bg-blue-700' },
  { name: 'Git', icon: 'fab fa-git-alt', color: 'bg-red-600' },
  { name: 'GitHub', icon: 'fab fa-github', color: 'bg-gray-800' },
  { name: 'SQL', icon: 'fas fa-database', color: 'bg-green-600' },
  { name: 'Linux', icon: 'fab fa-linux', color: 'bg-yellow-700' }
];

export const projectsData: Project[] = [
  {
    title: 'E-Commerce Platform',
    image: 'https://i.pinimg.com/736x/28/43/f7/2843f7ef7f0596f72b4b2088ece925fc.jpg',
    description: 'A full-featured coffee store e-commerce platform with payment integration.',
    tech: ['HTML', 'CSS', 'JAVASC', 'REACT'],
    github: 'https://github.com/moses-25',
    demo: '#'
  },
  {
    title: 'GreenThumb',
    image: '/project2.png',
    description: 'Your personal plant management app. Track your plants, set reminders, and grow your garden with ease.',
    tech: ['React', 'CSS3', 'Tailwind CSS', 'PYTHON'],
    github: 'https://github.com/moses-25',
    demo: 'https://github.com/moses-25/Green-Thumb'
  },
  {
    title: 'Weather Dashboard',
    image: 'https://i.pinimg.com/736x/ef/79/80/ef7980f2aa1e0a0e28e81c53c679cade.jpg',
    description: 'Real-time weather information with 5-day forecast, location search, and interactive maps.',
    tech: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
    github: 'https://github.com/moses-25',
    demo: '#'
  }
];
