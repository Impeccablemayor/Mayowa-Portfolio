'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { Badge } from '@/components/ui/Badge'
import { PERSONAL_INFO, SOCIAL_LINKS, ENGINEERING_METRICS } from '@/lib/constants'
import { FADE_IN_UP, STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/animations'
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDownIcon } from '@/components/ui/Icons'
import gsap from 'gsap'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        gsap.to(containerRef.current, {
          '--mouse-x': `${x * 100}px`,
          '--mouse-y': `${y * 100}px`,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    { icon: GithubIcon, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: MailIcon, href: SOCIAL_LINKS.email, label: 'Email' },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      } as React.CSSProperties}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          variants={STAGGER_CONTAINER}
          initial="initial"
          animate="animate"
        >
          {/* Status Badge */}
          <motion.div
            className="flex justify-center"
            variants={STAGGER_ITEM}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-hover border border-primary/20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-muted">Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={STAGGER_ITEM} className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
              <span className="text-gradient">Building Scalable</span>
              <br />
              <span>Software That</span>
              <br />
              <span className="text-gradient">Solves Real Problems</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={STAGGER_ITEM}
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed"
          >
            I design and engineer modern software experiences using .NET, Java, Cloud Technologies,
            AI integrations, and modern frontend frameworks. Let{`'`}s build something extraordinary
            together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={STAGGER_ITEM}
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          >
            <motion.a href="#work" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" size="lg">
                Download Resume
              </Button>
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="accent" size="lg">
                Let{`'`}s Work Together
              </Button>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={STAGGER_ITEM}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface-hover rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={STAGGER_ITEM}
            className="pt-12 border-t border-white/10 mt-12"
          >
            <p className="text-sm text-muted mb-8">Impact & Expertise</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter
                target={ENGINEERING_METRICS.yearsOfExperience}
                label="Years Experience"
                suffix="+"
              />
              <AnimatedCounter
                target={ENGINEERING_METRICS.projectsCompleted}
                label="Projects Built"
                suffix="+"
              />
              <AnimatedCounter
                target={ENGINEERING_METRICS.technologiesMastered}
                label="Technologies"
                suffix="+"
              />
              <AnimatedCounter
                target={99}
                label="Uptime Average"
                suffix=".9%"
              />
            </div>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            variants={STAGGER_ITEM}
            className="pt-8 space-y-4"
          >
            <p className="text-sm text-muted">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['.NET', 'React', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'].map(
                (tech) => (
                  <Badge key={tech} variant="secondary" size="md">
                    {tech}
                  </Badge>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted">Scroll to explore</span>
          <div className="text-primary">
            <ChevronDownIcon />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
