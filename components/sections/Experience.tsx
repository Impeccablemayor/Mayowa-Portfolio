'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/animations'

const EXPERIENCES = [
  {
    company: 'TechCorp',
    role: 'Senior Full-Stack Engineer',
    period: '2022 - Present',
    description: 'Leading technical initiatives and architecting scalable systems',
    achievements: [
      'Designed and implemented microservices architecture serving 1M+ users',
      'Reduced infrastructure costs by 40% through optimization',
      'Mentored 5+ junior engineers on system design and best practices',
      'Led migration from monolithic to event-driven architecture',
    ],
    technologies: ['.NET Core', 'React', 'AWS', 'Kubernetes', 'PostgreSQL'],
  },
  {
    company: 'StartupXYZ',
    role: 'Full-Stack Engineer',
    period: '2020 - 2022',
    description: 'Built core product from scratch, scaling to production',
    achievements: [
      'Developed REST API serving 100K+ requests/day',
      'Implemented real-time features with WebSocket',
      'Achieved 99.95% uptime in production',
      'Launched mobile app with React Native',
    ],
    technologies: ['Node.js', 'MongoDB', 'React', 'Docker', 'AWS'],
  },
  {
    company: 'Enterprise Solutions Inc',
    role: 'Junior Developer',
    period: '2018 - 2020',
    description: 'Full-stack development on enterprise applications',
    achievements: [
      'Built web applications serving 10K+ users',
      'Implemented database optimizations improving query speed by 60%',
      'Contributed to 5+ projects in various domains',
      'Learned enterprise architecture and best practices',
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Jenkins'],
  },
]

export function Experience() {
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
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            5+ years of experience building scalable systems and leading technical initiatives
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={STAGGER_CONTAINER}
          className="space-y-8 relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={STAGGER_ITEM}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-4 items-center justify-center">
                <div className="w-16 h-16 bg-surface rounded-full border-4 border-primary flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="md:ml-32 p-6 bg-surface rounded-lg border border-primary/20 hover:border-primary/40 transition-all group cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted font-medium flex-shrink-0">{exp.period}</p>
                </div>

                <p className="text-muted mb-4">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {exp.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="text-sm text-muted flex gap-2">
                        <span className="text-primary">→</span>
                        {achievement}
                      </li>
                    ))}
                    {exp.achievements.length > 2 && (
                      <li className="text-sm text-muted italic">
                        +{exp.achievements.length - 2} more achievements
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
