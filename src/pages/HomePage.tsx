import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { StatsBar } from '../components/StatsBar'
import { Values } from '../components/Values'
import { Programs } from '../components/Programs'
import { Testimonials } from '../components/Testimonials'
import { Blog } from '../components/Blog'
import { CTABanner } from '../components/CTABanner'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <StatsBar />
      <Values />
      <Programs />
      <Testimonials />
      <Blog />
      <CTABanner />
    </>
  )
}
