'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TECHNICAL_SKILLS } from '@/lib/constants'
import { Code, Server, Database, Cloud } from 'lucide-react'

const categoryIcons = [
  <Server key="0" className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  <Code key="1" className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  <Database key="2" className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  <Cloud key="3" className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
]

export function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-neutral-200 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Core Competencies & Stack
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Technologies actively used to architect production backend APIs, databases, microservices, and frontends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_SKILLS.map((group, index) => (
            <motion.div
              key={group.category}
              className="p-6 rounded-2xl bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800/90 shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                  {categoryIcons[index % categoryIcons.length]}
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white tracking-tight">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
