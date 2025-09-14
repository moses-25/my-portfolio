# Moses Otieno - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my skills, projects, and professional journey as a Software Engineering student.

## 🚀 Features

  - Clean, professional layout
  - Dark/light mode toggle
  - Responsive on all devices
  - Smooth animations and transitions

- **Sections**
  - Hero section with typing animation
  - About me with skills visualization
  - Projects showcase with interactive cards
  - Contact form with validation
  - Testimonials section

- **Technical Highlights**
  - TypeScript for type safety
  - Tailwind CSS for utility-first styling
  - Vite for fast development
  - ECharts for skills visualization
  - React hooks for state management

## 🛠️ Technologies Used

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - ECharts
  - Framer Motion (for animations)

- **Build Tools**
  - Vite
  - PostCSS
  - npm

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-portfolio.git
src/
├── assets/
│   ├── images/          # Store all images here
│   └── styles/          # Additional CSS files if needed
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button.tsx
│   │   ├── DarkModeToggle.tsx
│   │   └── Navbar.tsx
│   ├── sections/        # Page sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Testimonials.tsx
│   └── ui/             # UI-specific components
│       ├── SkillCard.tsx
│       ├── ProjectCard.tsx
│       └── TestimonialCard.tsx
├── hooks/              # Custom hooks
│   ├── useDarkMode.ts
│   └── useTypingEffect.ts
├── types/              # TypeScript types
│   └── index.ts
├── utils/              # Utility functions
│   ├── constants.ts
│   └── helpers.ts
├── App.tsx             # Main App component
└── index.tsx           # Entry point
