// src/types/index.ts
export interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
  }
  
  export interface Skill {
    name: string;
    icon: string;
    color: string;
  }
  
  export interface NavItem {
    label: string;
    sectionId: string;
    icon?: string;
  }
