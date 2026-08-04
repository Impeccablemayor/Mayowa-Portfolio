'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAV_ITEMS, PERSONAL_INFO } from '@/lib/constants'
import { useScroll, useDevice } from '@/lib/hooks'
import { Button } from '@/components/ui/Button'
import { MenuIcon, CloseIcon } from '@/components/ui/Icons'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { y } = useScroll()
  const { isMobile } = useDevice()

  useEffect(() => {
    setIsScrolled(y > 50)
    
    // Calculate scroll progress safely
    if (typeof window !== 'undefined') {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? y / scrollHeight : 0
      setScrollProgress(progress)
    }
  }, [y])

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50"
        style={{
          scaleX: scrollProgress,
          transformOrigin: '0%',
        }}
      />

      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                YN
              </div>
              {!isMobile && (
                <span className="font-display font-bold text-lg hidden sm:block">
                  {PERSONAL_INFO.name}
                </span>
              )}
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="hidden md:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-foreground hover:bg-surface-hover transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            )}

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <motion.a
                href={PERSONAL_INFO.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" size="sm">
                  Get in Touch
                </Button>
              </motion.a>

              {/* Mobile Menu Toggle */}
              {isMobile && (
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg hover:bg-surface-hover transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <motion.div
          className="fixed top-16 left-0 right-0 bg-surface border-b border-white/10 z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col p-4 gap-2">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-surface-hover transition-colors"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 8 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={PERSONAL_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="primary" size="md" className="w-full">
                Get in Touch
              </Button>
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  )
}
