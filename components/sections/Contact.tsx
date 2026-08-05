'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'
import { Copy, Check, Calendar, ArrowUpRight } from 'lucide-react'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="py-24 border-t border-neutral-200 dark:border-neutral-800/60 bg-neutral-100/60 dark:bg-neutral-950/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-mono font-medium mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Available for Engineering Roles & Projects</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let&apos;s Build Resilient Software Together.
        </motion.h2>

        <motion.p
          className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Looking to discuss backend architectures, fintech pipelines, ASP.NET Core microservices, or full-stack engineering opportunities? Reach out directly.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all shadow-lg shadow-purple-600/20"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Email Address Copied!' : PERSONAL_INFO.email}</span>
          </button>

          {/* Schedule Meeting */}
          <a
            href={PERSONAL_INFO.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Book A Technical Chat</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon size={16} /> GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon size={16} /> LinkedIn <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
