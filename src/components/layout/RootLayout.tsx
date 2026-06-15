import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'motion/react'
import { NavbarSection } from '../Navbar'
import { Footer } from '../Footer'
import { PageTransition } from '../motion/PageTransition'

export function RootLayout() {
  const { pathname } = useLocation()

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="font-poppins text-text-primary">
      <NavbarSection />
      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
