'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PERSONAL_INFO, STATS } from '@/lib/constants'
import { ResumeModal } from '@/components/ui/ResumeModal'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'
import { ArrowRight, FileText, Mail } from 'lucide-react'

export function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Name, Accent Bar, Socials */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Recruiter Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-mono font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>Fintech Engineer @ GlobalPay NG</span>
            </div>

            {/* Giant Name Display */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.05] mb-4">
              {PERSONAL_INFO.name}.
            </h1>

            {/* Accent Line Underneath */}
            <div className="h-1.5 w-20 bg-purple-600 dark:bg-purple-500 rounded-full mb-8" />

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900 hover:bg-purple-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900 hover:bg-purple-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 rounded-xl bg-white dark:bg-neutral-900 hover:bg-purple-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-xs"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* CENTER COLUMN: Hero Portrait Image Placeholder */}
          <motion.div
            className="lg:col-span-4 flex justify-center relative my-4 lg:my-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Background Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* Profile Image Wrapper */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-neutral-200/80 dark:border-neutral-800 shadow-2xl bg-neutral-100 dark:bg-neutral-900">
              {/* PHOTO PLACEHOLDER: Replace /profile-placeholder.png with your custom photo */}
              <Image
                src="/profile-placeholder.png"
                alt={PERSONAL_INFO.name}
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Intro Header, Bio & Action Links */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-start pl-0 lg:pl-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Introducing Label */}
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3">
              — Introducing
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white leading-tight mb-4">
              Software Engineer, based in Lagos, Nigeria.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              Specialized in building high-throughput fintech pipelines, payment gateways & enterprise software using ASP.NET Core, C#, React, PostgreSQL, AWS & Docker.
            </p>

            {/* Action Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all shadow-lg shadow-purple-600/20"
              >
                <span>My Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium transition-colors shadow-xs"
              >
                <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Engineering Metrics Compact Strip */}
            <div className="grid grid-cols-2 gap-3 w-full pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
              {STATS.slice(0, 4).map((stat, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/60">
                  <div className="text-sm sm:text-base font-extrabold text-neutral-900 dark:text-white font-mono">{stat.value}</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  )
}
