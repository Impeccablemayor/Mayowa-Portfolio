'use client'

import React from 'react'
import { PERSONAL_INFO } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-100 dark:bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">{PERSONAL_INFO.name}</span>
          <span>© {new Date().getFullYear()} — Production Software Engineering Portfolio</span>
        </div>

        <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400 font-mono text-[11px]">
          <span>ASP.NET Core</span>
          <span>•</span>
          <span>PostgreSQL</span>
          <span>•</span>
          <span>AWS</span>
          <span>•</span>
          <span>React</span>
        </div>
      </div>
    </footer>
  )
}
