import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-white hover:bg-brand-dark shadow-sm',
  secondary:
    'bg-white text-brand hover:bg-white/90 shadow-md',
  outline:
    'border-2 border-white/80 text-white hover:bg-white/10',
  ghost:
    'text-brand hover:text-brand-dark',
  white:
    'bg-white text-brand hover:bg-white/90 shadow-md',
}

export function Button({
  children,
  variant = 'primary',
  href = '#',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-[10px] px-8 py-3.5 text-[15px] font-bold transition-all duration-200'

  return (
    <a href={href} className={`${base} ${variantStyles[variant]} ${className}`}>
      {children}
    </a>
  )
}
