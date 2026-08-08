'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

export interface BadgeProps extends HTMLMotionProps<"div"> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const variants: Record<string, string> = {
      primary: 'bg-primary/20 text-primary border border-primary/30',
      secondary: 'bg-secondary/20 text-secondary border border-secondary/30',
      accent: 'bg-accent/20 text-accent border border-accent/30',
      success: 'bg-success/20 text-success border border-success/30',
      warning: 'bg-warning/20 text-warning border border-warning/30',
      error: 'bg-error/20 text-error border border-error/30',
    }

    const sizes: Record<string, string> = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    }

    return (
      <motion.div
        ref={ref}
        className={`inline-flex items-center gap-2 rounded-full font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children as React.ReactNode}</span>
      </motion.div>
    )
  }
)

Badge.displayName = 'Badge'
