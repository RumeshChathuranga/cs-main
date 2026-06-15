import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { EASE_OUT } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function parseStatValue(value: string): { target: number; suffix: string; useGrouping: boolean } {
  const match = value.match(/^([\d,]+)(.*)$/)
  if (!match) return { target: 0, suffix: value, useGrouping: false }
  const digits = match[1]
  return {
    target: Number(digits.replace(/,/g, '')),
    suffix: match[2],
    useGrouping: digits.includes(','),
  }
}

function formatCount(value: number, suffix: string, useGrouping: boolean): string {
  const rounded = Math.round(value)
  const formatted = useGrouping ? rounded.toLocaleString('en-US') : String(rounded)
  return `${formatted}${suffix}`
}

interface CountUpProps {
  value: string
  className?: string
  delay?: number
  duration?: number
}

export function CountUp({ value, className, delay = 0, duration = 1.1 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const reducedMotion = useReducedMotion()
  const { target, suffix, useGrouping } = parseStatValue(value)
  const [display, setDisplay] = useState(() =>
    reducedMotion ? value : formatCount(0, suffix, useGrouping),
  )

  useEffect(() => {
    if (!isInView) return

    if (reducedMotion) {
      setDisplay(value)
      return
    }

    let timeoutId: ReturnType<typeof setTimeout>
    let controls: ReturnType<typeof animate> | undefined

    timeoutId = setTimeout(() => {
      controls = animate(0, target, {
        duration,
        ease: EASE_OUT,
        onUpdate: (latest) => setDisplay(formatCount(latest, suffix, useGrouping)),
      })
    }, delay * 1000)

    return () => {
      clearTimeout(timeoutId)
      controls?.stop()
    }
  }, [isInView, target, suffix, useGrouping, value, reducedMotion, delay, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
