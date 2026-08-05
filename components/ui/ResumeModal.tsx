'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'
import { X, Download, FileText, ExternalLink, CheckCircle } from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className="relative w-full max-w-xl bg-[#121215] border border-neutral-800 rounded-2xl shadow-2xl z-10 text-neutral-100 p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-800/60 hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{PERSONAL_INFO.name}&apos;s Executive Resume</h2>
              <p className="text-xs text-neutral-400">Software Engineer (ASP.NET Core, C#, React, PostgreSQL, AWS)</p>
            </div>
          </div>

          <div className="space-y-4 mb-8 bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/80">
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Qualifications At A Glance</h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>Production fintech experience at GlobalPay NG</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>ASP.NET Core microservices & high-throughput webhooks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>PostgreSQL indexing, Redis caching, AWS ECS deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>React, TypeScript & modern full-stack web applications</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-colors"
            >
              <Download className="w-4 h-4" /> Download Resume PDF
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition-colors border border-neutral-700/50"
            >
              <ExternalLink className="w-4 h-4" /> View LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
