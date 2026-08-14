'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { NAV_ITEMS, PERSONAL_INFO } from '@/lib/constants'
import { ResumeModal } from '@/components/ui/ResumeModal'
import { Sun, Moon, FileText, Menu, X, ArrowUpRight } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('isDark')
    if (saved !== null) {
      setIsDarkMode(saved === 'true')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('isDark', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('isDark', 'false')
    }
  }, [isDarkMode, mounted])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <Image
              src="/profile-user.jpg"
              alt="Mayowa Binuyo"
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl object-cover ring-1 ring-white/10 shadow-md group-hover:scale-105 transition-all duration-300"
            />
            <span className="font-semibold text-sm sm:text-base tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {PERSONAL_INFO.name} <span className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">/ Software Engineer</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-200/80 dark:bg-neutral-900/60 border border-neutral-300/80 dark:border-neutral-800/80 rounded-full px-3 py-1.5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-300/60 dark:hover:bg-neutral-800/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2.5">
            {/* Dark/Light Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-200/80 dark:bg-neutral-900/60 border border-neutral-300/80 dark:border-neutral-800/80 hover:bg-neutral-300/80 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle dark/light theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-600" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-800 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-30 bg-white dark:bg-[#121215] border-b border-neutral-200 dark:border-neutral-800 p-4 md:hidden flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false)
              setIsResumeOpen(true)
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg bg-neutral-900 dark:bg-neutral-800 text-white"
          >
            <FileText className="w-4 h-4 text-purple-400" /> View Resume
          </button>
        </div>
      )}

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  )
}
