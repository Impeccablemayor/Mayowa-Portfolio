'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/animations'

export function About() {
  const skills = ['Backend Systems', 'Cloud Architecture', 'AI Integration', 'Performance Optimization']

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Content */}
        <div className="space-y-8">
          <motion.div variants={STAGGER_ITEM}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Engineering Excellence Through <span className="text-gradient">Precision & Scale</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m a full-stack engineer passionate about building scalable, production-grade software systems. With expertise spanning backend architecture, cloud technologies, and modern frontend development, I focus on creating solutions that balance performance, reliability, and user experience.
            </p>
          </motion.div>

          <motion.div variants={STAGGER_ITEM} className="space-y-4">
            <h3 className="text-xl font-semibold">My Philosophy</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full flex-shrink-0 mt-1" />
                <p className="text-muted">Write code that scales with business needs, not just technical requirements</p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full flex-shrink-0 mt-1" />
                <p className="text-muted">Build systems that survive production realities and edge cases</p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full flex-shrink-0 mt-1" />
                <p className="text-muted">Design for maintainability and team collaboration from day one</p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full flex-shrink-0 mt-1" />
                <p className="text-muted">Optimize for business impact, not just technical elegance</p>
              </div>
            </div>
          </motion.div>

          {/* Specializations */}
          <motion.div variants={STAGGER_ITEM} className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-2 bg-surface-hover border border-primary/20 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div variants={STAGGER_ITEM} className="space-y-6">
          <h3 className="text-2xl font-bold mb-8">Journey</h3>
          {[
            { year: 'Today', title: 'Senior Engineer', desc: 'Building scalable systems' },
            { year: '2022', title: 'Staff Engineer', desc: 'Leading technical initiatives' },
            { year: '2019', title: 'Senior Developer', desc: 'Backend architecture focus' },
            { year: '2017', title: 'First Role', desc: 'Full-stack development' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8 pb-8 border-l border-primary/20 last:border-l-transparent last:pb-0"
              variants={STAGGER_ITEM}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
              <p className="text-sm font-semibold text-primary">{item.year}</p>
              <p className="text-lg font-semibold mt-1">{item.title}</p>
              <p className="text-muted text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
