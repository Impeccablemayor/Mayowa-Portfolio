
/**
 * Portfolio Constants
 * Central hub for all static content, configuration, and metadata
 */

// Personal Information
export const PERSONAL_INFO = {
  name: 'Mayowa Binuyo',
  title: 'Full-Stack Software Engineer',
  description: 'I build reliable software products that solve real-world problems.',
  bio: 'I’m a Computer Science graduate and Full-Stack Software Engineer focused on building practical, scalable applications. I work across .NET and Java backends, modern frontend technologies, databases, APIs, authentication, cloud deployment, and AI integrations.',
  email: 'binuyomayor16@gmail.com',
  phone: '+234 705 083 5448',
  location: 'Lagos, Nigeria',
  availability: true,
  resumeUrl: '/resume.pdf',
  calendly: '',
  github: 'https://github.com/Impeccablemayor',
  linkedin: 'https://linkedin.com/in/mayowa-binuyo-63815521b',
}

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/Impeccablemayor',
  linkedin: 'https://linkedin.com/in/mayowa-binuyo-63815521b',
  twitter: '',
  email: 'mailto:binuyomayor16@gmail.com',
  calendly: '',
}

// Navigation
export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

// Skills by Category
export const SKILLS_CATEGORIES = {
  backend: {
    name: 'Backend',
    skills: [
      { name: 'C# / .NET', level: 90 },
      { name: 'ASP.NET Core', level: 90 },
      { name: 'Entity Framework Core', level: 85 },
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 85 },
    ],
  },

  frontend: {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 75 },
      { name: 'Responsive UI', level: 90 },
    ],
  },

  cloud: {
    name: 'Cloud & Deployment',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'CI/CD', level: 75 },
      { name: 'Railway', level: 75 },
      { name: 'Render', level: 75 },
      { name: 'Vercel', level: 75 },
      { name: 'Netlify', level: 70 },
    ],
  },

  databases: {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'SQL Server', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 70 },
    ],
  },

  tools: {
    name: 'Tools & Engineering',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 90 },
      { name: 'Swagger / OpenAPI', level: 90 },
      { name: 'Postman', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
  },
}

export interface ProjectCaseStudy {
  id: number | string;
  title: string;
  subtitle: string;
  company: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  impactMetrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
}

// Featured Projects
export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'agrobaba',
    title: 'AgroBaba',
    subtitle: 'Agricultural marketplace connecting farmers and buyers',
    company: 'Personal Project',
    summary:
      'A marketplace platform designed to connect farmers with buyers and make agricultural products easier to discover and trade.',
    description:
      'AgroBaba is a full-stack agricultural marketplace built around real-world marketplace workflows, including authentication, product management, demands, and user interactions.',
    image: '/projects/agrobaba.jpg',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    problem:
      'Farmers and buyers need a more direct digital platform for discovering agricultural products and connecting around supply and demand.',
    solution:
      'Built a full-stack marketplace with a Spring Boot REST API, JWT-based authentication, product and demand workflows, and a modern frontend.',
    architecture:
      'React Frontend → REST API → Spring Boot → PostgreSQL',
    keyFeatures: [
      'User authentication',
      'Product management',
      'Agricultural demands',
      'REST API architecture',
      'JWT authorization',
      'Swagger/OpenAPI documentation',
      'Dockerized backend',
    ],
    impactMetrics: [
      { label: 'Architecture', value: 'Full Stack' },
      { label: 'Backend', value: 'Spring Boot' },
      { label: 'Database', value: 'PostgreSQL' },
    ],
    githubUrl: 'https://github.com/AgroBaba/Agro-baba-backend.git',
    liveUrl: '',
  },

  {
    id: 'peershelf',
    title: 'PeerShelf',
    subtitle: 'Digital marketplace for university students',
    company: 'Personal Project',
    summary:
      'A platform built for students to discover, share, and exchange resources within a university community.',
    description:
      'PeerShelf is a full-stack platform focused on creating a more accessible digital marketplace for university students, with a .NET backend and PostgreSQL database.',
    image: '/projects/peershelf.jpg',
    tags: ['.NET', 'ASP.NET Core', 'PostgreSQL', 'React', 'Cloudinary'],
    problem:
      'Students often rely on fragmented channels to find academic resources and items from other students.',
    solution:
      'Built a centralized platform with structured listings, authentication, media uploads, and a backend API designed around student marketplace workflows.',
    architecture:
      'React → ASP.NET Core API → Entity Framework Core → PostgreSQL',
    keyFeatures: [
      'Student marketplace',
      'Authentication',
      'Resource listings',
      'Image uploads',
      'Cloudinary integration',
      'PostgreSQL persistence',
      'REST APIs',
    ],
    impactMetrics: [
      { label: 'Backend', value: '.NET' },
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'Media', value: 'Cloudinary' },
    ],
    githubUrl: 'https://github.com/Impeccablemayor/ResourceSharingBackend.git',
    liveUrl: '',
  },

  {
    id: 'ibop',
    title: 'IBOP',
    subtitle: 'Internal Business Operations Platform',
    company: 'Personal Project',
    summary:
      'A business operations platform designed to centralize internal workflows and operational data.',
    description:
      'IBOP is a full-stack business operations platform built with a .NET backend, React frontend, PostgreSQL database, and containerized development environment.',
    image: '/projects/ibop.jpg',
    tags: ['.NET', 'React', 'PostgreSQL', 'Docker', 'Swagger'],
    problem:
      'Internal business processes can become fragmented when operational workflows are handled across disconnected tools.',
    solution:
      'Designed a centralized platform with a structured API architecture, database persistence, authentication, and a modern web interface.',
    architecture:
      'React + Vite → ASP.NET Core API → Entity Framework Core → PostgreSQL',
    keyFeatures: [
      'Business operations management',
      'REST APIs',
      'Authentication',
      'PostgreSQL database',
      'Swagger documentation',
      'Docker support',
      'Responsive frontend',
    ],
    impactMetrics: [
      { label: 'Architecture', value: 'Full Stack' },
      { label: 'Backend', value: '.NET' },
      { label: 'Frontend', value: 'React' },
    ],
    githubUrl: '',
    liveUrl: '',
  },

  {
    id: 'buildwm',
    title: 'BuildWM',
    subtitle: 'Modern e-commerce platform',
    company: 'Personal Project',
    summary:
      'A modern e-commerce application focused on creating a clean shopping experience and maintainable backend architecture.',
    description:
      'BuildWM is an e-commerce project built with ASP.NET Core MVC and Tailwind CSS, combining server-side application architecture with a modern responsive interface.',
    image: '/projects/buildwm.jpg',
    tags: ['.NET', 'ASP.NET Core MVC', 'C#', 'Tailwind CSS', 'SQL'],
    problem:
      'Traditional e-commerce interfaces can become difficult to maintain when the application structure and user experience are not designed together.',
    solution:
      'Built the platform around a structured MVC architecture with reusable components, database-driven content, and a responsive Tailwind interface.',
    architecture:
      'ASP.NET Core MVC → Entity Framework Core → SQL Database',
    keyFeatures: [
      'Product management',
      'E-commerce workflows',
      'Responsive interface',
      'MVC architecture',
      'Database integration',
      'Reusable UI components',
    ],
    impactMetrics: [
      { label: 'Architecture', value: 'MVC' },
      { label: 'Backend', value: 'ASP.NET Core' },
      { label: 'UI', value: 'Tailwind CSS' },
    ],
    githubUrl: 'https://github.com/Impeccablemayor/BuildWM.git',
    liveUrl: '',
  },

  {
    id: 'artisan-marketplace',
    title: 'Virtual Marketplace for Local Artisans',
    subtitle: 'Final-year software engineering project',
    company: 'University of Ilorin',
    summary:
      'A digital marketplace designed to help local artisans showcase their products and connect with potential customers.',
    description:
      'A full-stack marketplace concept created as a final-year Computer Science project, focused on helping local artisans participate in the digital economy.',
    image: '/projects/artisan-marketplace.jpg',
    tags: ['.NET', 'React', 'Tailwind CSS', 'MongoDB'],
    problem:
      'Many local artisans have limited access to digital platforms where they can showcase their products and reach customers.',
    solution:
      'Designed a marketplace where artisans can create product listings while customers can discover and interact with available products.',
    architecture:
      'React → Backend API → Database',
    keyFeatures: [
      'Artisan profiles',
      'Product listings',
      'Marketplace browsing',
      'User authentication',
      'Responsive interface',
    ],
    impactMetrics: [
      { label: 'Project Type', value: 'Final Year Project' },
      { label: 'Focus', value: 'Digital Marketplace' },
    ],
    githubUrl: '',
    liveUrl: '',
  },
]

// Professional Experience
export const EXPERIENCE = [
  {
    id: 1,
    role: 'NYSC Software Engineering / Technology Role',
    company: 'Globalpay NG Limited',
    location: 'Lagos, Nigeria',
    duration: '2025 - Present',
    description:
      'Working in a professional technology environment while contributing to software development and gaining hands-on experience with production-oriented engineering workflows.',
    highlights: [
      'Work with software engineering technologies and development workflows',
      'Contribute to backend and full-stack development tasks',
      'Work with APIs, databases, debugging, and application development',
      'Gain practical experience working within a professional engineering environment',
    ],
    techStack: ['C#', '.NET', 'Java', 'Spring Boot', 'React', 'PostgreSQL'],
  },
]

// Education
export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Ilorin',
    year: '2025',
    gpa: 'Second Class Upper',
    highlights: [
      'Computer Science',
      'Final Year Project: Virtual Marketplace for Local Artisans',
    ],
  },
]

// Certifications
// Only include certifications that have actually been earned.
export const CERTIFICATIONS = []

// Blog Categories
export const BLOG_CATEGORIES = [
  'Software Engineering',
  'Backend Development',
  '.NET',
  'Java',
  'Cloud & DevOps',
  'AI',
  'Career',
  'Tutorials',
]

// Services
export const SERVICES = [
  {
    title: 'Full-Stack Development',
    description:
      'Building complete web applications from backend APIs and databases to modern responsive interfaces.',
    icon: 'Layers',
  },
  {
    title: 'Backend Development',
    description:
      'Designing reliable APIs and backend systems with .NET, C#, Java, and Spring Boot.',
    icon: 'Code',
  },
  {
    title: 'API Development',
    description:
      'Building structured REST APIs with authentication, authorization, documentation, and database integration.',
    icon: 'Globe',
  },
  {
    title: 'Database Engineering',
    description:
      'Designing and working with relational and NoSQL databases for reliable application data.',
    icon: 'Database',
  },
  {
    title: 'Cloud & Deployment',
    description:
      'Containerizing and deploying applications using Docker and modern cloud deployment platforms.',
    icon: 'Cloud',
  },
  {
    title: 'AI Integration',
    description:
      'Exploring practical ways to integrate AI capabilities into modern software products.',
    icon: 'Brain',
  },
]

// Engineering Metrics
// Keep these intentionally conservative and verifiable.
export const ENGINEERING_METRICS = {
  yearsOfExperience: 1,
  projectsCompleted: 5,
  apisBuilt: 10,
  cloudDeployments: 5,
  technologiesUsed: 15,
  openSourceContributions: 0,
  articlesPublished: 0,
  uptime: null,
}

// Testimonials
// Add real testimonials only after receiving permission from the people involved.
export const TESTIMONIALS = []

// Animation Timing
export const ANIMATION_TIMING = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
}

// Breakpoints
export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// Stats for Hero
export const STATS = [
  { label: 'Projects Built', value: '5+' },
  { label: 'Backend Technologies', value: '2+' },
  { label: 'Primary Stack', value: '.NET + Java' },
  { label: 'Based In', value: 'Nigeria' },
]

// Engineering Philosophy
export const ENGINEERING_PHILOSOPHY = [
  {
    title: 'Solve the Real Problem',
    description:
      'Technology should make a process easier, faster, or more accessible—not simply make an application more complicated.',
    icon: 'Target',
  },
  {
    title: 'Build for Maintainability',
    description:
      'I value clear architecture, reusable components, readable code, and systems that are easier to understand and evolve.',
    icon: 'Layers',
  },
  {
    title: 'Security Matters',
    description:
      'Authentication, authorization, validation, and sensible security practices should be considered from the beginning.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Keep Learning',
    description:
      'Software engineering changes quickly, so I continuously experiment with technologies and apply what I learn to real projects.',
    icon: 'BookOpen',
  },
]

// Technical Skills
export const TECHNICAL_SKILLS = [
  {
    category: 'Backend',
    skills: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'Entity Framework Core',
      'Java',
      'Spring Boot',
      'REST APIs',
      'JWT',
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    category: 'Databases',
    skills: [
      'PostgreSQL',
      'SQL Server',
      'MySQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'CI/CD',
      'Railway',
      'Render',
      'Vercel',
      'Netlify',
    ],
  },
  {
    category: 'Engineering',
    skills: [
      'REST API Design',
      'Authentication',
      'Authorization',
      'Swagger / OpenAPI',
      'Postman',
      'MVC',
      'Microservices',
    ],
  },
]