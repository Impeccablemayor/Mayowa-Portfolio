/**
 * Animation Presets and Configurations
 * Reusable Framer Motion and GSAP animation definitions
 */

import type { Variants } from 'framer-motion'

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const FADE_IN_DOWN = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const FADE_IN_RIGHT = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

export const SCALE_IN_SPRING = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    duration: 0.5,
  },
}

export const STAGGER_CONTAINER: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const STAGGER_ITEM: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export const HOVER_SCALE = {
  whileHover: { scale: 1.05 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
}

export const HOVER_LIFT = {
  whileHover: { y: -8 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
}

export const TAP_SCALE = {
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
}

export const TILT_3D = {
  whileHover: {
    rotateX: 5,
    rotateY: -5,
  },
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
}

export const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}

export const FLOAT_ANIMATION = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export const PULSE_GLOW = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(37, 99, 235, 0.2)',
      '0 0 40px rgba(37, 99, 235, 0.4)',
      '0 0 20px rgba(37, 99, 235, 0.2)',
    ],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export const SHIMMER = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 0%'],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'linear',
  },
}

/**
 * Easing Functions
 */
export const EASING = {
  ease: [0.25, 0.46, 0.45, 0.94],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
}

/**
 * Transition Timing
 */
export const TRANSITION = {
  fast: { duration: 0.15 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
  verySlow: { duration: 0.8 },
  spring: {
    type: 'spring' as const,
    stiffness: 260,
    damping: 20,
  },
  springBouncy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 10,
  },
}
