/**
 * Portfolio Data Hub
 * Configured for Senior / Staff Software Engineer (Fintech & Full-Stack)
 */

export const PERSONAL_INFO = {
  name: 'Mayowa Binuyo',
  shortName: 'Mayowa',
  title: 'Software Engineer',
  roleSubtitle: 'Specializing in ASP.NET Core, C#, React, PostgreSQL, AWS & Distributed Systems',
  bio: 'Software Engineer with extensive experience architecting high-throughput fintech infrastructure, payment pipelines, and scalable enterprise platforms at GlobalPay NG. Focused on API performance, data integrity, security, and resilient cloud software.',
  email: 'binuyomayor16@gmail.com',
  location: 'Lagos, Nigeria (Available for Remote Global Roles)',
  availability: 'Open to Senior / Full-Stack / Backend Engineering Roles',
  resumeUrl: '/resume.pdf',
  github: 'https://github.com/Impeccablemayor',
  linkedin: 'https://linkedin.com/in/mayowa-binuyo-63815521b',
  calendly: 'https://linkedin.com/in/mayowa-binuyo-63815521b',
}

export const STATS = [
  { label: 'Production Uptime SLA', value: '99.99%' },
  { label: 'Transactions Processed', value: '15M+' },
  { label: 'Average API Response', value: '<45ms' },
  { label: 'Years Shipping Software', value: '4+ Yrs' },
]

export const NAV_ITEMS = [
  { label: 'Overview', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const TECHNICAL_SKILLS = [
  {
    category: 'Backend & APIs',
    skills: ['ASP.NET Core', 'C#', 'RESTful APIs', 'Microservices', 'JWT Auth / OAuth2', 'EF Core', 'Dapper'],
  },
  {
    category: 'Frontend & Full-Stack',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'State Management'],
  },
  {
    category: 'Databases & Caching',
    skills: ['PostgreSQL', 'SQL Server', 'Redis', 'Database Indexing', 'Query Optimization'],
  },
  {
    category: 'Cloud, DevOps & Infra',
    skills: ['AWS (ECS, S3, RDS)', 'Docker', 'CI/CD Pipelines', 'GitHub Actions', 'Linux / NGINX'],
  },
]

export const EXPERIENCE = [
  {
    id: 'globalpay-ng',
    role: 'Software Engineer (Fintech & Payments)',
    company: 'GlobalPay NG',
    duration: '2023 — Present',
    location: 'Lagos, Nigeria',
    description: 'Leading backend payment processing architectures and core microservices integration for enterprise financial systems.',
    highlights: [
      'Engineered high-concurrency payment webhook consumers in ASP.NET Core, processing over 15M+ transaction events with 99.99% uptime SLA.',
      'Optimized PostgreSQL query execution plans and indexing strategies, reducing API response latencies by 62% across core endpoints.',
      'Implemented robust JWT authentication, RBAC authorization, and HMAC payload validation to ensure PCI-DSS security compliance.',
      'Containerized backend services with Docker and deployed scalable infrastructure on AWS ECS with auto-scaling triggers.',
    ],
    techStack: ['C#', 'ASP.NET Core', 'PostgreSQL', 'AWS', 'Docker', 'Redis', 'JWT'],
  },
  {
    id: 'ibop-enterprise',
    role: 'Full-Stack Software Engineer',
    company: 'Enterprise Internal Platforms (IBOP)',
    duration: '2022 — 2023',
    location: 'Remote',
    description: 'Architected and built an internal business operations platform streamlining multi-department workflows and reporting.',
    highlights: [
      'Designed a multi-tenant React/TypeScript frontend integrated with an ASP.NET Core Web API backend.',
      'Reduced manual reporting operational time by 75% through automated batch jobs and real-time audit logging.',
      'Integrated complex role-based access control (RBAC) handling granular permissions across 500+ internal users.',
    ],
    techStack: ['ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
  },
  {
    id: 'peershelf-platform',
    role: 'Full-Stack Engineer',
    company: 'PeerShelf Distributed Systems',
    duration: '2021 — 2022',
    location: 'Remote',
    description: 'Developed a peer-to-peer resource sharing platform with automated digital cataloging and real-time messaging.',
    highlights: [
      'Built reactive UI components with React and TypeScript backed by structured RESTful APIs.',
      'Implemented Redis caching layer that decreased database read traffic by 40% during peak user activity.',
      'Designed CI/CD pipelines via GitHub Actions for zero-downtime containerized deployments.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
]

export interface ProjectCaseStudy {
  id: string
  title: string
  subtitle: string
  company: string
  summary: string
  problem: string
  solution: string
  architecture: string
  impactMetrics: { label: string; value: string }[]
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  keyFeatures: string[]
}

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'globalpay-gateway',
    title: 'GlobalPay NG Payment Gateway Engine',
    subtitle: 'High-Concurrency Fintech Microservice & Settlement Pipeline',
    company: 'GlobalPay NG',
    summary: 'A resilient payment gateway microservice handling payment processing, webhook distribution, and automated reconciliation.',
    problem: 'Legacy transaction pipeline experienced database bottleneck locks during high-traffic peak hours, causing webhook delays over 8 seconds.',
    solution: 'Re-architected the payment processor using ASP.NET Core background worker services, Redis pub/sub queues, and optimized PostgreSQL row-level locks.',
    architecture: 'ASP.NET Core Web API -> Redis Channel Queue -> Async Worker Pool -> PostgreSQL (Partitioned Tables) -> AWS ECS',
    impactMetrics: [
      { label: 'Latency Reduction', value: '-65%' },
      { label: 'Transactions/Sec', value: '2,500+' },
      { label: 'Uptime SLA', value: '99.99%' },
    ],
    tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'Redis', 'AWS ECS', 'Docker', 'Fintech'],
    githubUrl: 'https://github.com/Impeccablemayor',
    liveUrl: 'https://globalpay.ng',
    keyFeatures: [
      'Idempotent payment webhook processing using Redis locks',
      'HMAC SHA256 signature verification for zero-trust security',
      'Automated daily reconciliation engine producing structured audit logs',
      'Prometheus and Grafana dashboard telemetry',
    ],
  },
  {
    id: 'ibop-platform',
    title: 'IBOP Enterprise Operations Engine',
    subtitle: 'Internal Business Operations & Workflow Automation System',
    company: 'Enterprise Internal System',
    summary: 'Centralized enterprise platform managing organizational workflows, staff authorization, data pipelines, and analytics.',
    problem: 'Siloed data across multiple legacy systems created data inconsistencies and required 40+ hours per week of manual data entries.',
    solution: 'Unified operational tools into a single full-stack web application with strict RBAC, automated data pipelines, and audit trails.',
    architecture: 'React + TypeScript SPA -> ASP.NET Core REST API -> Entity Framework Core -> PostgreSQL -> Docker Container',
    impactMetrics: [
      { label: 'Manual Effort Saved', value: '75%' },
      { label: 'Internal Users', value: '500+' },
      { label: 'Data Processing Speed', value: '4x' },
    ],
    tags: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/Impeccablemayor',
    keyFeatures: [
      'Granular Role-Based Access Control (RBAC) with customizable permissions',
      'Real-time data visualization dashboards powered by SQL aggregation views',
      'Automated PDF export generator for executive compliance reporting',
      'Responsive dark/light glass interface optimized for operational efficiency',
    ],
  },
  {
    id: 'peershelf-app',
    title: 'PeerShelf Distributed Sharing Platform',
    subtitle: 'Peer-to-Peer Cataloging & Asset Distribution Web App',
    company: 'PeerShelf',
    summary: 'A web platform enabling digital asset discovery, peer-to-peer resource sharing, and real-time community engagement.',
    problem: 'Search queries across large inventory datasets suffered from high latency without proper indexing and caching.',
    solution: 'Implemented full-text search indexing on PostgreSQL and cached frequently requested asset metadata in Redis.',
    architecture: 'Next.js Frontend -> Node/TypeScript API -> PostgreSQL + GIN Indexes -> Redis Cache -> AWS S3',
    impactMetrics: [
      { label: 'DB Load Reduction', value: '-40%' },
      { label: 'Search Latency', value: '<20ms' },
      { label: 'Active Catalog Items', value: '50K+' },
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS S3', 'Docker'],
    githubUrl: 'https://github.com/Impeccablemayor',
    liveUrl: 'https://github.com/Impeccablemayor',
    keyFeatures: [
      'PostgreSQL full-text search with fast GIN index lookups',
      'S3 presigned URLs for secure asset uploads and distribution',
      'Optimized image loading pipeline reducing initial payload by 60%',
      'Fully responsive UI adhering to modern Web Content Accessibility Guidelines',
    ],
  },
]

export const ENGINEERING_PHILOSOPHY = [
  {
    title: 'Idempotency & Fault Tolerance',
    description: 'In fintech and distributed systems, network partitions happen. Every payment webhook and API endpoint is built idempotent to guarantee zero duplicate charges and absolute system state consistency.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Database Performance & Query Optimization',
    description: 'Database bottlenecks kill scale. I analyze execution plans, build targeted composite indexes, leverage connection pooling, and separate read/write patterns to achieve sub-50ms query times.',
    icon: 'Database',
  },
  {
    title: 'Clean Architecture & Type Safety',
    description: 'Clear domain boundaries prevent technical debt. I separate core business logic from framework infrastructure using C# Clean Architecture / CQRS patterns and strict TypeScript contracts on the frontend.',
    icon: 'Layers',
  },
  {
    title: 'Zero-Trust Security & RBAC',
    description: 'Security is fundamental. I implement strict JWT token validation, refresh token rotation, payload HMAC validation, parameter sanitization, and principle of least privilege access control.',
    icon: 'Lock',
  },
]
