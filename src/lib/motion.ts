import type { Variants } from 'motion/react'

export const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const

export const DURATION = {
  fast: 0.35,
  normal: 0.55,
} as const

export const viewport = { once: true, margin: '-80px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT, delay },
  }),
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT, delay },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE_OUT, delay },
  }),
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT, delay },
  }),
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT, delay },
  }),
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASE_OUT, delay },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
}

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.fast, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: DURATION.fast, ease: EASE_OUT },
  },
}

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
}

export type MotionVariant = 'fadeUp' | 'fadeDown' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn'

export const variantMap: Record<MotionVariant, Variants> = {
  fadeUp,
  fadeDown,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
}
