import { NavbarSection as Navbar } from './components/Navbar'

import { Hero } from './components/Hero'
import { About } from './components/About'
import { StatsBar } from './components/StatsBar'
import { Values } from './components/Values'
import { Programs } from './components/Programs'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="font-poppins text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsBar />
        <Values />
        <Programs />
        <Testimonials />
        <Blog />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
