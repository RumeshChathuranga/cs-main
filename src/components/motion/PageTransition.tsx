import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { pageTransition } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div>{children}</div>
  }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}
