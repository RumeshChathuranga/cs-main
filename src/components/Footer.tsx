import { MapPin, Mail, Phone } from 'lucide-react'
import { Logo } from './ui/Logo'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[16px]">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[16px]">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[16px]">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Join Us', href: '#contact' },
]

const programLinks = [
  { label: 'Global Volunteer', href: '#programs' },
  { label: 'Global Talent', href: '#programs' },
  { label: 'Global Teacher', href: '#programs' },
]

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/6 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Logo + about + social */}
          <div>
            <Logo variant="white" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Developing the leadership potential of youth since 1948. AIESEC in
              Colombo South — the local chapter at the University of Moratuwa,
              Sri Lanka.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/70 transition-all hover:bg-brand hover:border-brand hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-[15px] font-bold tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div>
            <h4 className="text-[15px] font-bold tracking-wide text-white">
              Programs
            </h4>
            <ul className="mt-5 space-y-3">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact Info */}
          <div>
            <h4 className="text-[15px] font-bold tracking-wide text-white">
              Contact Info
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-sm leading-relaxed text-white/55">
                  University of Moratuwa,
                  <br />
                  Katubedda, Moratuwa 10400, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-brand" />
                <a
                  href="mailto:colombosouth@aiesec.net"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  colombosouth@aiesec.net
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-brand" />
                <a
                  href="tel:+94700000000"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  +94 70 000 0000
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/8 py-5 text-center">
        <p className="text-[13px] text-white/35">
          © 2026 AIESEC in Colombo South. All rights reserved. | University of
          Moratuwa, Sri Lanka
        </p>
      </div>
    </footer>
  )
}
