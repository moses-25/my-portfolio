// src/utils/constants.ts
import { Project, Testimonial, Skill } from '../types';

export const navItems = [
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
  { name: 'HTML5', icon: 'fab fa-html5', color: 'bg-orange-600' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'bg-blue-600' },
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

export const testimonialsData: Testimonial[] = [
  {
    quote: "Moses is an exceptional student with a natural talent for problem-solving. His dedication to writing clean, efficient code sets him apart from his peers.",
    name: "Joseph Wambua",
    role: "TM @ MORINGA SCHOOL",
    image: "https://i.pinimg.com/736x/23/51/1d/23511d80cfaa740c7a9699a3eaa38a26.jpg"
  },
  {
    quote: "Working with Moses on our group project was a great experience. He brings innovative ideas to the table and has a strong commitment to quality.",
    name: "Kelly Koome",
    role: "Fellow Student & Collaborator",
    image: "https://i.pinimg.com/736x/71/83/34/7183348f435c337bcc6deeb7e09e7c95.jpg"
  },
  {
    quote: "Moses quickly grasped complex concepts during his time in MORINGA. He consistently delivered high-quality work and applied them effectively. His ability to learn and adapt is impressive.",
    name: "Lynne Kolli",
    role: "Fellow Student",
    image: "https://i.pinimg.com/736x/92/57/20/9257209aaef8ec0cb97cc24eb9f7750b.jpg"
  }
];

export const socialLinks = [
  { name: 'GitHub', url: '#', icon: 'fab fa-github', color: 'bg-[#333]' },
  { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin-in', color: 'bg-[#0A66C2]' },
  { name: 'Twitter', url: '#', icon: 'fab fa-twitter', color: 'bg-[#1DA1F2]' },
  { name: 'Instagram', url: '#', icon: 'fab fa-instagram', color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]' }
];