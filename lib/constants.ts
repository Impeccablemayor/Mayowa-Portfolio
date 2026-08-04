/**
 * Portfolio Constants
 * Central hub for all static content, configuration, and metadata
 */

// Personal Information
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Full-Stack Engineer',
  description: 'Building scalable software that solves real problems',
  bio: 'I design and engineer modern software experiences using .NET, Java, Cloud Technologies, AI integrations, and modern frontend frameworks.',
  email: 'your.email@example.com',
  phone: '+1 (234) 567-8900',
  location: 'San Francisco, CA',
  availability: true,
  resumeUrl: '/resume.pdf',
  calendly: 'https://calendly.com/yourhandle',
}

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourhandle',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
  email: 'mailto:your.email@example.com',
  calendly: 'https://calendly.com/yourhandle',
}

// Navigation
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

// Skills by Category
export const SKILLS_CATEGORIES = {
  backend: {
    name: 'Backend',
    skills: [
      { name: '.NET Core', level: 90 },
      { name: 'ASP.NET', level: 90 },
      { name: 'Entity Framework', level: 85 },
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 75 },
      { name: 'Microservices', level: 85 },
    ],
  },
  frontend: {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  cloud: {
    name: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 75 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'CI/CD', level: 90 },
      { name: 'Terraform', level: 70 },
    ],
  },
  databases: {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'SQL Server', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 80 },
    ],
  },
  tools: {
    name: 'Tools & Utilities',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Swagger', level: 85 },
    ],
  },
}

// Featured Projects
export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    image: '/projects/ecommerce.jpg',
    tags: ['.NET', 'React', 'PostgreSQL', 'AWS'],
    problem: 'Legacy system unable to handle peak traffic during sales events',
    solution: 'Redesigned with microservices architecture and async processing',
    impact: '99.99% uptime, 3x throughput increase',
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    slug: 'ai-analytics-dashboard',
    description: 'Real-time analytics with machine learning predictions',
    image: '/projects/analytics.jpg',
    tags: ['Node.js', 'React', 'TensorFlow', 'AWS'],
    problem: 'Manual reporting process taking 40+ hours per week',
    solution: 'Automated dashboard with ML-powered forecasting',
    impact: '80% time savings, real-time insights',
  },
  {
    id: 3,
    title: 'Multi-Tenant SaaS',
    slug: 'multitenant-saas',
    description: 'Scalable multi-tenant architecture supporting 500+ customers',
    image: '/projects/saas.jpg',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes'],
    problem: 'Needed to support rapid customer acquisition',
    solution: 'Implemented multi-tenant database design with horizontal scaling',
    impact: 'Scaled to 500+ customers, reduced costs by 40%',
  },
]

// Experience
export const EXPERIENCE = [
  {
    id: 1,
    title: 'Senior Backend Engineer',
    company: 'Tech Company',
    duration: 'Jan 2022 - Present',
    description:
      'Leading backend architecture and development for microservices platform',
    achievements: [
      'Architected and deployed microservices handling 10M+ daily requests',
      'Reduced API response time by 70% through optimization',
      'Mentored 5 junior engineers and established coding standards',
    ],
    technologies: ['.NET Core', 'AWS', 'Kubernetes', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Full Stack Engineer',
    company: 'StartUp Inc',
    duration: 'Jul 2020 - Dec 2021',
    description: 'Developed full-stack features for SaaS platform from concept to production',
    achievements: [
      'Built real-time collaboration features with WebSockets',
      'Implemented authentication system serving 100K+ users',
      'Improved application performance by 50% through code optimization',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
  },
  {
    id: 3,
    title: 'Software Developer',
    company: 'Enterprise Corp',
    duration: 'Jun 2018 - Jun 2020',
    description: 'Developed and maintained enterprise applications for large organization',
    achievements: [
      'Maintained 99.9% system uptime across production systems',
      'Developed CLI tools improving developer workflow by 25%',
      'Led migration from monolith to microservices architecture',
    ],
    technologies: ['C#', 'SQL Server', 'ASP.NET', 'Azure'],
  },
]

// Education
export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    year: '2018',
    gpa: '3.8/4.0',
    highlights: ['Dean&apos;s List', 'Scholarship Recipient'],
  },
]

// Certifications
export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: '#',
  },
  {
    id: 2,
    title: 'Kubernetes Application Developer',
    issuer: 'Linux Foundation',
    date: '2022',
    credentialUrl: '#',
  },
]

// Blog Categories
export const BLOG_CATEGORIES = ['Engineering', 'Cloud', 'Career', 'AI', 'Tutorials']

// Services
export const SERVICES = [
  {
    title: 'Backend Development',
    description: 'Building scalable, maintainable backend systems',
    icon: 'Code',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end application development',
    icon: 'Layers',
  },
  {
    title: 'Cloud Architecture',
    description: 'Designing cloud-native solutions',
    icon: 'Cloud',
  },
  {
    title: 'Performance Optimization',
    description: 'Improving application speed and efficiency',
    icon: 'Zap',
  },
  {
    title: 'AI Integration',
    description: 'Integrating AI/ML into applications',
    icon: 'Brain',
  },
  {
    title: 'Technical Consulting',
    description: 'Providing expert guidance on technical decisions',
    icon: 'Briefcase',
  },
]

// Engineering Metrics
export const ENGINEERING_METRICS = {
  yearsOfExperience: 5,
  projectsCompleted: 25,
  apisBuilt: 40,
  cloudDeployments: 50,
  technologiesMastered: 20,
  openSourceContributions: 15,
  articlesPublished: 8,
  uptime: 99.99,
}

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'John Doe',
    title: 'CTO',
    company: 'Tech Company',
    text: 'Exceptional engineer with deep expertise in building scalable systems.',
    image: '/testimonials/1.jpg',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    title: 'Product Manager',
    company: 'StartUp Inc',
    text: 'Great collaborator who understands both technical and business needs.',
    image: '/testimonials/2.jpg',
    rating: 5,
  },
]

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
