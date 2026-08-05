'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCE } from '@/lib/constants'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-neutral-200 dark:border-neutral-800/60 bg-neutral-100/50 dark:bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Production Engineering Experience
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Building and scaling high-concurrency systems, payment gateways, and enterprise software platforms.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800/90 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Top Row: Role & Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-800/80">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2.5">
                    <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span>{exp.role}</span>
                  </h3>
                  <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">{exp.company}</div>
                </div>

                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">{exp.description}</p>

              {/* Highlights */}
              <div className="mb-6 space-y-2.5">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800/60">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
