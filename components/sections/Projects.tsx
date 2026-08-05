'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FEATURED_PROJECTS, ProjectCaseStudy } from '@/lib/constants'
import { CaseStudyModal } from '@/components/ui/CaseStudyModal'
import { ArrowUpRight } from 'lucide-react'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null)

  return (
    <section id="projects" className="py-20 border-t border-neutral-200 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
              Production Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Deep dives into payment processing, database query optimization, and enterprise software systems.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="group surface-card p-6 flex flex-col justify-between cursor-pointer bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800/90 shadow-sm"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                    {project.company}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Metrics Pill */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800">
                  {project.impactMetrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">{m.label}</div>
                      <div className="text-sm font-bold font-mono text-purple-600 dark:text-purple-400">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 hover:border-purple-500/40 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Read Engineering Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
