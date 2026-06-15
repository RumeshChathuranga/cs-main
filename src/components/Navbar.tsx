import { useState } from 'react'
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
  { name: 'Home', link: '#' },
  { name: 'Global Volunteer', link: '#programs' },
  { name: 'Global Talent', link: '#programs' },
  { name: 'Global Teacher', link: '#programs' },
  { name: 'Blog', link: '#blog' },
  { name: 'About Us', link: '#about' },
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
          <NavbarButton variant="secondary" href="#about">
            Join Us
          </NavbarButton>
          <NavbarButton variant="primary" href="#contact">
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
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="hover:bg-brand/8 hover:text-brand w-full rounded-xl px-4 py-3 text-[14px] font-medium text-[#3a3a52] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="mt-1 flex w-full flex-col gap-2 border-t border-gray-100 pt-3">
            <NavbarButton
              as="button"
              variant="secondary"
              onClick={() => setMobileOpen(false)}
              className="w-full"
            >
              Join Us
            </NavbarButton>
            <NavbarButton
              as="button"
              variant="primary"
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
