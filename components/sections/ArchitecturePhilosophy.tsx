'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ENGINEERING_PHILOSOPHY } from '@/lib/constants'
import { ShieldCheck, Database, Layers, Lock, Cpu } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
  Database: <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
  Layers: <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
  Lock: <Lock className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
}

export function ArchitecturePhilosophy() {
  return (
    <section id="architecture" className="py-20 border-t border-neutral-200 dark:border-neutral-800/60 bg-neutral-100/50 dark:bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Systems Architecture & Philosophy
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Core design patterns and architectural tradeoffs enforced when building backend APIs and enterprise applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {ENGINEERING_PHILOSOPHY.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800/80 shadow-sm relative overflow-hidden group hover:border-purple-500/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-5">
                {iconMap[item.icon] || <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
