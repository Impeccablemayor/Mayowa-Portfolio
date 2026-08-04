'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'

interface AnimatedCounterProps {
  target: number
  duration?: number
  label: string
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({
  target,
  duration = 2,
  label,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const countRef = useRef({ value: 0 })
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView || !ref.current) return

    const displayValue = ref.current.querySelector('[data-value]')
    if (!displayValue) return

    gsap.to(countRef.current, {
      value: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        displayValue.textContent = `${prefix}${Math.floor(countRef.current.value)}${suffix}`
      },
    })
  }, [isInView, target, duration, prefix, suffix])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient">
        <span data-value>0</span>
      </div>
      <p className="text-sm text-muted font-medium">{label}</p>
    </motion.div>
  )
}
