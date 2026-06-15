import { cn } from '../../lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import React, { useRef, useState } from 'react'

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: { name: string; link: string }[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 100)
  })

  return (
    <motion.div ref={ref} className={cn('sticky inset-x-0 top-0 z-50 w-full', className)}>
      {/* Brand accent line */}
      <div className="from-brand to-brand h-[3px] w-full bg-gradient-to-r via-sky-400" />

      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child,
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(12px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(3,126,243,0.08), 0 1px 1px rgba(0,0,0,0.04), 0 16px 48px rgba(3,126,243,0.06)'
          : '0 2px 8px rgba(3,126,243,0.06)',
        width: visible ? '90%' : '100%',
        y: visible ? 8 : 0,
        borderRadius: visible ? '16px' : '0px',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start bg-white/90 px-6 py-3 lg:flex',
        visible && 'bg-white/85',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex',
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="hover:text-brand relative px-4 py-2 text-[13.5px] font-medium text-[#3a3a52] transition-colors"
        >
          {hovered === idx && (
            <motion.div layoutId="hovered" className="bg-brand/8 absolute inset-0 rounded-xl" />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(12px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(3,126,243,0.08), 0 16px 48px rgba(3,126,243,0.06)'
          : '0 2px 8px rgba(3,126,243,0.06)',
        width: visible ? '94%' : '100%',
        paddingRight: visible ? '12px' : '0px',
        paddingLeft: visible ? '12px' : '0px',
        borderRadius: visible ? '14px' : '0px',
        y: visible ? 8 : 0,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-1rem)] flex-col items-center justify-between bg-white/90 px-0 py-2 lg:hidden',
        visible && 'bg-white/85',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return (
    <div className={cn('flex w-full flex-row items-center justify-between px-4 py-2', className)}>
      {children}
    </div>
  )
}

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'border-brand/10 absolute inset-x-0 top-full z-50 flex w-full flex-col items-start gap-2 rounded-b-2xl border-t bg-white px-4 py-5 shadow-[0_16px_48px_rgba(3,126,243,0.10)]',
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return isOpen ? (
    <IconX className="cursor-pointer text-[#1a1a2e]" onClick={onClick} size={22} />
  ) : (
    <IconMenu2 className="cursor-pointer text-[#1a1a2e]" onClick={onClick} size={22} />
  )
}

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
} & (React.ComponentPropsWithoutRef<'a'> | React.ComponentPropsWithoutRef<'button'>)) => {
  const base =
    'px-5 py-2.5 rounded-xl text-[13px] font-semibold relative cursor-pointer hover:-translate-y-px transition duration-200 inline-flex items-center justify-center'

  const variants = {
    primary:
      'bg-brand text-white shadow-[0_2px_8px_rgba(3,126,243,0.35)] hover:bg-brand-dark hover:shadow-[0_4px_14px_rgba(3,126,243,0.45)]',
    secondary:
      'bg-transparent text-[#3a3a52] border border-gray-200 hover:border-brand hover:text-brand',
    dark: 'bg-[#1a1a2e] text-white hover:bg-[#252545]',
    gradient:
      'bg-gradient-to-b from-brand to-brand-dark text-white shadow-[0_2px_0_rgba(255,255,255,0.2)_inset]',
  }

  return (
    <Tag href={href ?? undefined} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Tag>
  )
}
