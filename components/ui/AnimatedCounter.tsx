'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

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
  const [count, setCount] = useState(0)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return

    let startTimestamp: number | null = null
    const durationMs = duration * 1000

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [isInView, target, duration])

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
        <span>{prefix}{count}{suffix}</span>
      </div>
      <p className="text-sm text-muted font-medium">{label}</p>
    </motion.div>
  )
}
