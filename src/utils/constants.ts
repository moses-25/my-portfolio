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
    title: 'Charity & Donation Platform',
    image: '/src/assets/Tuinue Wasichana.png',
    description: 'A platform connecting donors with verified charities, enabling seamless donations and impact tracking.',
    tech: ['HTML', 'CSS', 'JAVASC', 'REACT', 'FLASK', 'PYTHON', 'POSTGRESQL'],
    github: 'https://github.com/moses-25',
    demo: '#'
  },
  {
    title: 'GreenThumb',
    image: '/project2.png',
    description: 'Your personal plant management app. Track your plants, set reminders, and grow your garden with ease.',
    tech: [' HTML5', 'React', 'CSS3', 'Flask', 'PYTHON'],
    github: 'https://github.com/HermannMike/green-thumb/tree/moses2',
    demo: 'https://green-thumb-six.vercel.app/'
  },
  {
    title: 'HealthTrack CLI Application',
    image: '/src/assets/Health.png',
    description: 'A powerful command-line tool designed to help users manage their nutrition goals, track daily food intake, and plan weekly meals. Perfect for busy professionals and developer students striving for a healthier lifestyle.',
    tech: ['Python', 'Typer', 'SQLAlchemy ORM', 'pytest', 'POSTGRESQL'],
    github: 'https://github.com/moses-25',
    demo: 'https://github.com/moses-25/Health_simplified_CLI_app/tree/main'
  }
];
