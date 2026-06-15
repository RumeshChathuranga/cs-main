import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './ui/resizable-navbar'
import { Logo } from './ui/Logo'

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Global Volunteer', link: '/programs/global-volunteer' },
  { name: 'Global Talent', link: '/programs/global-talent' },
  { name: 'Global Teacher', link: '/programs/global-teacher' },
  { name: 'Blog', link: '/blog' },
  { name: 'About Us', link: '/about' },
]

export function NavbarSection() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Navbar>
      {/* ── Desktop ── */}
      <NavBody>
        <Logo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton variant="primary" as={NavLink} to="/contact">
            Contact Us
          </NavbarButton>
        </div>
      </NavBody>

      {/* ── Mobile ── */}
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle isOpen={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              end={item.link === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `w-full rounded-xl px-4 py-3 text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'bg-brand/10 text-brand'
                    : 'hover:bg-brand/8 hover:text-brand text-[#3a3a52]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="mt-1 flex w-full flex-col gap-2 border-t border-gray-100 pt-3">
            <NavbarButton
              as={NavLink}
              variant="primary"
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full"
            >
              Contact Us
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
