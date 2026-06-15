import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import {
  animate,
  motion,
  useAnimationControls,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react'
import { cn } from '../../lib/utils'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const springConfig = {
  stiffness: 100,
  damping: 20,
  mass: 0.5,
}

export function DraggableCardBody({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  const reducedMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  })

  const velocityX = useVelocity(mouseX)
  const velocityY = useVelocity(mouseY)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, -25]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-25, 25]), springConfig)
  const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), springConfig)
  const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), springConfig)

  useEffect(() => {
    const updateConstraints = () => {
      setConstraints({
        top: -window.innerHeight / 2,
        left: -window.innerWidth / 2,
        right: window.innerWidth / 2,
        bottom: window.innerHeight / 2,
      })
    }

    updateConstraints()
    window.addEventListener('resize', updateConstraints)
    return () => window.removeEventListener('resize', updateConstraints)
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return

    const { clientX, clientY } = e
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? { width: 0, height: 0, left: 0, top: 0 }
    mouseX.set(clientX - (left + width / 2))
    mouseY.set(clientY - (top + height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  if (reducedMotion) {
    return (
      <div
        className={cn(
          'relative min-h-72 w-56 overflow-hidden rounded-md bg-white p-4 shadow-2xl md:min-h-80 md:w-72 md:p-6',
          className,
        )}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => {
        document.body.style.cursor = 'grabbing'
      }}
      onDragEnd={(_event, info) => {
        document.body.style.cursor = 'default'

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: { type: 'spring', ...springConfig },
        })

        const currentVelocityX = velocityX.get()
        const currentVelocityY = velocityY.get()
        const velocityMagnitude = Math.sqrt(
          currentVelocityX * currentVelocityX + currentVelocityY * currentVelocityY,
        )
        const bounce = Math.min(0.8, velocityMagnitude / 1000)

        animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: 'spring',
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        })

        animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: 'spring',
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        })
      }}
      style={{ rotateX, rotateY, opacity, willChange: 'transform' }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative min-h-72 w-56 cursor-grab overflow-hidden rounded-md bg-white p-4 shadow-2xl transform-3d active:cursor-grabbing md:min-h-80 md:w-72 md:p-6',
        className,
      )}
    >
      {children}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  )
}

export function DraggableCardContainer({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  return <div className={cn('[perspective:3000px]', className)}>{children}</div>
}
