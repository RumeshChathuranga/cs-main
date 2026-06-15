import { Button } from './ui/Button'

export function CTABanner() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="bg-brand relative overflow-hidden px-8 py-14 text-center md:px-12">
        <div className="absolute -top-10 -right-10 size-[200px] rounded-full bg-white/6" />
        <div className="absolute -bottom-5 -left-5 size-40 rounded-full bg-white/5" />

        <div className="relative z-10 mx-auto max-w-md">
          <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-[11px] font-bold tracking-widest text-white uppercase">
            For Students
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-white">Ready for Your Exchange?</h2>
          <p className="mt-4 text-[15px] leading-6 text-white/85">
            Take the leap — explore our exchange programs and begin your leadership journey with
            AIESEC in Colombo South.
          </p>
          <Button variant="white" href="#programs" className="mt-8">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="bg-navy relative overflow-hidden px-8 py-14 text-center md:px-12">
        <div className="bg-brand/6 absolute -top-8 -left-12 size-[200px] rounded-full" />
        <div className="bg-brand/5 absolute right-10 -bottom-4 size-40 rounded-full" />

        <div className="relative z-10 mx-auto max-w-md">
          <span className="bg-brand/20 text-brand inline-block rounded-full px-3.5 py-1 text-[11px] font-bold tracking-widest uppercase">
            For Companies
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-white">Looking for Global Talent?</h2>
          <p className="mt-4 text-[15px] leading-6 text-white/70">
            Partner with AIESEC to access motivated, globally-minded young professionals from 126
            countries ready to contribute to your team.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-[10px] border-2 border-white/70 px-8 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}
