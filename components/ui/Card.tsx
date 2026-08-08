'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { HOVER_LIFT, SCALE_IN } from '@/lib/animations'

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'glass' | 'surface' | 'elevated'
  hover?: boolean
  animated?: boolean
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      hover = true,
      animated = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const variants: Record<string, string> = {
      default: 'bg-surface border border-white/10 rounded-xl p-6',
      glass: 'glass rounded-xl p-6',
      surface: 'bg-surface-elevated border border-white/5 rounded-xl p-6',
      elevated: 'bg-surface-elevated shadow-lg rounded-xl p-6',
    }

    const hoverClasses = hover ? 'hover:border-white/20 transition-all duration-300' : ''

    const motionProps = animated
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          whileHover: HOVER_LIFT.whileHover,
          transition: { type: 'spring' as const, stiffness: 400, damping: 10 },
        }
      : {
          whileHover: hover ? HOVER_LIFT.whileHover : {},
          transition: { type: 'spring' as const, stiffness: 400, damping: 10 },
        }

    return (
      <motion.div
        ref={ref}
        className={`${variants[variant]} ${hoverClasses} ${className}`}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'
