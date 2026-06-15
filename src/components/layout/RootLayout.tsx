import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { NavbarSection } from '../Navbar'
import { Footer } from '../Footer'

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
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
