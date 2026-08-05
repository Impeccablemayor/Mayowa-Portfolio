'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCaseStudy } from '@/lib/constants'
import { GithubIcon } from '@/components/ui/Icons'
import { X, ExternalLink, CheckCircle2, Server, Database, Shield, Zap } from 'lucide-react'

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null
  onClose: () => void
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#121215] border border-neutral-800 rounded-2xl shadow-2xl z-10 text-neutral-100 p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-800/60 hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 border-b border-neutral-800 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {project.company}
              </span>
              <span className="text-xs text-neutral-400">Engineering Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-neutral-400 text-sm sm:text-base">{project.subtitle}</p>
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.impactMetrics.map((metric, i) => (
              <div key={i} className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 text-center">
                <div className="text-xl sm:text-3xl font-extrabold text-purple-400 mb-1">{metric.value}</div>
                <div className="text-xs sm:text-sm text-neutral-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/50">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-red-400 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" /> The Challenge
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/50">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Architecture Solution
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Diagram Flow */}
          <div className="mb-8 p-5 rounded-xl bg-neutral-900/90 border border-neutral-800">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400" /> System Dataflow Pipeline
            </h3>
            <div className="font-mono text-xs text-purple-300 bg-neutral-950 p-4 rounded-lg border border-neutral-800/80 overflow-x-auto">
              {project.architecture}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-3">Key Technical Implementation Details</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-neutral-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
              >
                <GithubIcon size={16} /> View Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Visit Production System
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
