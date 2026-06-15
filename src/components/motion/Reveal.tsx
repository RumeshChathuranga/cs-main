import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import {
  type MotionVariant,
  reducedMotionVariants,
  variantMap,
  viewport as defaultViewport,
} from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type RevealElement = 'div' | 'section' | 'article' | 'header' | 'footer' | 'span' | 'h1' | 'h2' | 'h3' | 'p'

interface RevealProps {
  children: ReactNode
  variant?: MotionVariant
  delay?: number
  as?: RevealElement
  className?: string
  style?: React.CSSProperties
  id?: string
  inView?: boolean
  viewport?: typeof defaultViewport
}

export function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  as = 'div',
  className,
  style,
  id,
  inView = true,
  viewport = defaultViewport,
}: RevealProps) {
  const reducedMotion = useReducedMotion()
  const Component = motion[as]
  const variants = reducedMotion ? reducedMotionVariants : variantMap[variant]

  return (
    <Component
      variants={variants}
      initial="hidden"
      {...(inView
        ? { whileInView: 'visible', viewport }
        : { animate: 'visible' })}
      custom={delay}
      className={className}
      style={style}
      id={id}
    >
      {children}
    </Component>
  )
}
