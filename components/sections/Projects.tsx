'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/animations'

const PROJECTS = [
  {
    title: 'High-Performance Trading Dashboard',
    description: 'Real-time financial data platform handling 100K+ concurrent users with sub-50ms latency',
    image: '/projects/trading-dashboard.png',
    role: 'Lead Backend Engineer',
    technologies: ['.NET Core', 'WebSocket', 'PostgreSQL', 'Redis', 'AWS'],
    achievements: [
      '70% reduction in query time through optimization',
      '99.99% uptime SLA maintained',
      'Real-time data processing for 50M+ events/day',
    ],
    problem: 'Legacy system couldn\'t handle peak load, causing data delivery delays and poor UX',
    solution: 'Rebuilt architecture with async processing, caching layer, and connection pooling',
    link: '#',
    github: '#',
  },
  {
    title: 'E-Commerce Platform Migration',
    description: 'Migrated monolithic application to microservices, increasing scalability and deployment frequency',
    image: '/projects/ecommerce-platform.png',
    role: 'Senior Full-Stack Engineer',
    technologies: ['Node.js', 'React', 'Docker', 'Kubernetes', 'MongoDB'],
    achievements: [
      'Deployment time reduced from 4 hours to 15 minutes',
      'Service independence enabled 50+ deployments/day',
      'Cost reduced by 40% through optimization',
    ],
    problem: 'Monolithic architecture prevented independent scaling and caused frequent full deployments',
    solution: 'Decomposed into 12 independently deployable services with event-driven communication',
    link: '#',
    github: '#',
  },
  {
    title: 'AI-Powered Analytics Engine',
    description: 'Machine learning pipeline for predictive analytics with real-time model serving',
    image: '/projects/ai-analytics.png',
    role: 'Full-Stack Engineer',
    technologies: ['Python', 'FastAPI', 'React', 'AWS SageMaker', 'PostgreSQL'],
    achievements: [
      '85% prediction accuracy for business metrics',
      'Model serving at <100ms P99 latency',
      'Automated retraining pipeline saving 20 hours/week',
    ],
    problem: 'Manual analytics and reporting couldn\'t keep up with business demands',
    solution: 'Built end-to-end ML pipeline with automated training, serving, and monitoring',
    link: '#',
    github: '#',
  },
]

export function Projects() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={STAGGER_ITEM} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Case studies demonstrating technical expertise and business impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={STAGGER_ITEM}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-all">
                {/* Project Header */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted">{project.description}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button variant="secondary" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        GitHub
                      </Button>
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 py-6 border-y border-primary/10">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                      <p className="text-sm text-muted">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-2">Solution</h4>
                      <p className="text-sm text-muted">{project.solution}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted">
                          <span className="text-primary font-bold">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={STAGGER_ITEM} className="mt-16 text-center">
          <p className="text-muted mb-4">Want to see more projects?</p>
          <Button size="lg">View Full Portfolio</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
