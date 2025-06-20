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