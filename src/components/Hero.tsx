import { images } from '../assets/images'
import { Button } from './ui/Button'

const heroStats = [
  { value: '70+', label: 'Years of Experience' },
  { value: '1M+', label: 'Alumni Worldwide' },
  { value: '40K+', label: 'Experiences Yearly' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden">
      <img
        src={images.heroBg}
        alt="AIESEC members at a conference"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="from-navy/65 via-navy/55 to-navy/80 absolute inset-0 bg-gradient-to-b via-60%" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
        <span className="border-brand bg-brand/20 text-brand rounded-full border px-5 py-1.5 text-xs font-bold tracking-widest uppercase">
          AIESEC in Colombo South
        </span>

        <h1 className="mt-7 text-4xl leading-tight font-extrabold text-white md:text-5xl lg:text-6xl">
          Develop Your Leadership. <span className="text-brand">Change the World.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
          Join the world&apos;s largest youth-run organization and unlock international exchange
          experiences that transform lives.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="secondary" href="#programs">
            Explore Programs
          </Button>
          <Button variant="outline" href="#contact">
            Join AIESEC
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-auto border-t border-white/10 bg-black/35">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 px-4 py-6">
              <span className="text-4xl font-extrabold text-white">{stat.value}</span>
              <span className="text-[13px] font-medium tracking-wide text-white/75">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
