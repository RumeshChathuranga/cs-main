import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import {
  reducedMotionVariants,
  staggerContainer,
  staggerItem,
  viewport as defaultViewport,
} from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface StaggerProps {
  children: ReactNode
  className?: string
  inView?: boolean
  viewport?: typeof defaultViewport
  as?: 'div' | 'section' | 'ul'
}

export function Stagger({
  children,
  className,
  inView = true,
  viewport = defaultViewport,
  as = 'div',
}: StaggerProps) {
  const reducedMotion = useReducedMotion()
  const Component = motion[as]
  const variants = reducedMotion ? reducedMotionVariants : staggerContainer

  return (
    <Component
      variants={variants}
      initial="hidden"
      {...(inView ? { whileInView: 'visible', viewport } : { animate: 'visible' })}
      className={className}
    >
      {children}
    </Component>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}

export function StaggerItem({ children, className, as = 'div' }: StaggerItemProps) {
  const reducedMotion = useReducedMotion()
  const Component = motion[as]
  const variants = reducedMotion ? reducedMotionVariants : staggerItem

  return (
    <Component variants={variants} className={className}>
      {children}
    </Component>
  )
}
