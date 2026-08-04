'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/animations'

const SKILL_CATEGORIES = [
  {
    name: 'Backend',
    skills: [
      { name: '.NET Core', level: 95, years: '5+' },
      { name: 'Java/Spring', level: 90, years: '4+' },
      { name: 'Node.js', level: 85, years: '3+' },
      { name: 'REST APIs', level: 95, years: '5+' },
      { name: 'Microservices', level: 88, years: '3+' },
      { name: 'Authentication', level: 90, years: '5+' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 92, years: '4+' },
      { name: 'TypeScript', level: 90, years: '3+' },
      { name: 'Next.js', level: 88, years: '2+' },
      { name: 'Tailwind CSS', level: 95, years: '3+' },
      { name: 'Performance', level: 90, years: '4+' },
      { name: 'Web Standards', level: 92, years: '5+' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 88, years: '4+' },
      { name: 'Docker', level: 90, years: '3+' },
      { name: 'Kubernetes', level: 82, years: '2+' },
      { name: 'CI/CD', level: 92, years: '4+' },
      { name: 'Monitoring', level: 85, years: '3+' },
      { name: 'Infrastructure', level: 88, years: '3+' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 93, years: '5+' },
      { name: 'MongoDB', level: 87, years: '3+' },
      { name: 'Redis', level: 88, years: '3+' },
      { name: 'Query Optimization', level: 91, years: '4+' },
      { name: 'Schema Design', level: 92, years: '5+' },
      { name: 'Caching', level: 89, years: '3+' },
    ],
  },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

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
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Deep expertise across full-stack development, cloud architecture, and modern engineering practices
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={STAGGER_ITEM} className="flex flex-wrap gap-2 mb-12 justify-center">
          {SKILL_CATEGORIES.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === idx
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-surface-hover text-foreground hover:bg-surface-hover/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={STAGGER_ITEM}
              className="p-4 bg-surface rounded-lg border border-primary/10 hover:border-primary/30 transition-all group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{skill.name}</h4>
                  <p className="text-xs text-muted">{skill.years} years</p>
                </div>
                <Badge>{skill.level}%</Badge>
              </div>
              {/* Proficiency Bar */}
              <div className="w-full bg-surface-hover rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={STAGGER_ITEM}
          className="mt-16 p-6 bg-surface-elevated border border-primary/10 rounded-lg"
        >
          <h3 className="font-semibold mb-4">Current Focus</h3>
          <div className="flex flex-wrap gap-2">
            {['AI Integration', 'System Design', 'Performance Optimization', 'Cloud Architecture'].map(
              (item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
