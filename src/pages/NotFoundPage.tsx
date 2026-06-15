import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { motion } from 'motion/react'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import { EASE_OUT } from '../lib/motion'

export function NotFoundPage() {
  return (
    <section className="bg-navy relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24">
      <motion.div
        className="bg-brand/15 pointer-events-none absolute top-[12%] right-[10%] size-48 rounded-full blur-2xl"
        animate={{ y: [0, -12, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: EASE_OUT }}
      />
      <motion.div
        className="bg-brand/10 pointer-events-none absolute bottom-[15%] left-[8%] size-32 rounded-full blur-xl"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: EASE_OUT, delay: 0.5 }}
      />

      <Stagger inView={false} className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <StaggerItem>
          <p className="text-brand text-[120px] leading-none font-black tracking-tighter md:text-[160px]">
            404
          </p>
        </StaggerItem>

        <StaggerItem>
          <h1 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">Page Not Found</h1>
        </StaggerItem>

        <StaggerItem>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s
            get you back on track.
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="bg-brand hover:bg-brand-dark inline-flex items-center gap-2 rounded-[10px] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <Home size={16} />
              Back to Home
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-[10px] border-2 border-white/30 px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  )
}
