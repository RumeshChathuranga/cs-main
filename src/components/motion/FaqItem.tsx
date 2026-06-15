import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { EASE_OUT } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="py-px">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-navy pr-8 text-[16px] font-semibold">{question}</span>
        <div className="bg-surface flex size-8 shrink-0 items-center justify-center rounded-2xl">
          {isOpen ? (
            <ChevronUp size={16} className="text-[#1a1a2e]" />
          ) : (
            <ChevronDown size={16} className="text-[#1a1a2e]" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={reducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-[1.75] text-[#6b7280]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
