import type { LucideIcon } from 'lucide-react'
import {
  Star,
  ShieldCheck,
  Zap,
  Leaf,
  Globe,
  Smile,
} from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'

interface Value {
  icon: LucideIcon
  iconColor: string
  iconBg: string
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: Star,
    iconColor: 'text-brand',
    iconBg: 'bg-brand/10',
    title: 'Striving for Excellence',
    description:
      'We constantly push beyond boundaries to deliver the highest quality results in everything we do.',
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-600/10',
    title: 'Demonstrating Integrity',
    description:
      'We act consistently in an honest, open and ethical manner in everything we say and do.',
  },
  {
    icon: Zap,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
    title: 'Activating Leadership',
    description:
      'We lead by example, inspiring others and taking responsibility for the world around us.',
  },
  {
    icon: Leaf,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-600/10',
    title: 'Acting Sustainably',
    description:
      'We act in a way that is sustainable for our organization and society as a whole.',
  },
  {
    icon: Globe,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-600/10',
    title: 'Living Diversity',
    description:
      "We learn from each other's differences by embracing diverse perspectives and cultures globally.",
  },
  {
    icon: Smile,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-500/10',
    title: 'Enjoying Participation',
    description:
      'We create a joyful, motivating environment where every member feels valued and engaged.',
  },
]

export function Values() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="What We Stand For"
          title="Our Values"
          description="The six values that guide every AIESEC member in their journey."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <article
                key={value.title}
                className="group flex flex-col items-center rounded-2xl bg-white px-7 py-9 text-center shadow-[0_4px_10px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex size-[72px] items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${value.iconBg}`}
                >
                  <Icon size={30} className={value.iconColor} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {value.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
