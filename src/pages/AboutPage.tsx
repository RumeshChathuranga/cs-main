import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowRight,
  Trophy,
  TrendingUp,
  Award,
  Globe,
  Building2,
  LocateFixed,
  Star,
  ShieldCheck,
  Zap,
  Leaf,
  Smile,
} from 'lucide-react'
import { images } from '../assets/images'
import { Reveal } from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

// ─── About Hero ──────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col overflow-hidden">
      <img
        src={images.aboutHeroBg}
        alt="AIESEC in Colombo South — team"
        className="absolute inset-0 size-full object-cover object-center"
      />
      {/* gradient overlay */}
      <div className="from-navy/50 via-navy/60 to-navy/90 absolute inset-0 bg-linear-to-b" />

      {/* Content — grows to fill space and centers the text block */}
      <Stagger
        inView={false}
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center lg:px-8"
      >
        <StaggerItem>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <MapPin size={13} className="text-brand" />
            <span className="text-xs font-semibold tracking-widest text-white/90 uppercase">
              Est. 1995 · University of Moratuwa
            </span>
          </div>
        </StaggerItem>

        <StaggerItem>
          <h1 className="max-w-3xl text-5xl leading-[1.12] font-extrabold text-white md:text-6xl lg:text-7xl">
            We Are AIESEC
            <br />
            <span className="text-brand italic">in Colombo South.</span>
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-white/80">
            A community of young leaders building a better world — one exchange, one idea, and one
            friendship at a time.
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/programs/global-volunteer"
              className="bg-brand hover:bg-brand-dark inline-flex items-center gap-2 rounded-[10px] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              Explore Programs
              <ArrowRight size={16} />
            </Link>
            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-[10px] border-2 border-white/70 px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-white/10"
            >
              Meet the Team
            </a>
          </div>
        </StaggerItem>
      </Stagger>

      {/* Stats bar — pinned to hero bottom */}
      <div className="relative z-10 mt-auto border-t border-white/15 bg-black/40 backdrop-blur-sm">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/20 px-6 lg:px-8">
          {[
            { value: '30+', label: 'Years Active' },
            { value: '1,000+', label: 'Members' },
            { value: '500+', label: 'Exchanges' },
          ].map((s) => (
            <StaggerItem key={s.label} className="flex flex-col items-center gap-1 px-4 py-5">
              <span className="text-3xl font-extrabold tracking-tight text-white">{s.value}</span>
              <span className="text-[13px] font-medium text-white/70">{s.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

// ─── Our History ─────────────────────────────────────────────────────────────

const timelineEvents = [
  { year: '1995', event: 'Founded at University of Moratuwa', highlight: true },
  { year: '2005', event: '100th exchange achieved' },
  { year: '2015', event: 'Best Entity Award — AIESEC Sri Lanka' },
  { year: '2020', event: 'Went fully digital through the pandemic' },
  { year: '2025', event: '30 years of impact · 1,000+ alumni', highlight: true },
]

const awards = [
  { icon: Trophy, label: 'Best Entity Award', sub: 'AIESEC Sri Lanka' },
  { icon: TrendingUp, label: 'Fastest Growing LC', sub: 'South Asia Region' },
  { icon: Award, label: '10+ National Awards', sub: 'Since 2000' },
]

function OurHistory() {
  return (
    <Reveal as="section" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-16 text-center">
          <span className="bg-brand/10 text-brand inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Our History
          </span>
          <h2 className="text-text-primary mt-4 text-4xl font-extrabold md:text-5xl">
            30 Years of Leadership.
          </h2>
        </header>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — text + awards */}
          <div className="flex flex-col gap-6">
            <div className="text-text-secondary space-y-6 text-[16px] leading-[1.85]">
              <p>
                AIESEC in Colombo South was founded in 1995 at the University of Moratuwa — Sri
                Lanka&apos;s leading technical university. In those early years a small group of
                students dared to connect their campus to the world, sending the first international
                exchange participants and planting the seeds of a legacy that now spans three
                decades.
              </p>
              <p>
                Over three decades, AIESEC CS has facilitated over 500 international exchanges,
                developed more than 1,000 young leaders, and earned recognition at both national and
                regional levels. From winning the Best Entity Award at AIESEC Sri Lanka to being
                named the Fastest Growing Local Committee in the South Asia region, our track record
                speaks to the quality and commitment of every member who has passed through our
                doors.
              </p>
              <p>
                Today, AIESEC in Colombo South continues its mission with the same energy that
                started it all — connecting ambitious university students with global exchange
                opportunities that develop real leadership, real empathy, and real impact. The
                chapter remains a vibrant home for changemakers at the University of Moratuwa.
              </p>
            </div>

            {/* Award badges */}
            <Stagger className="mt-4 flex flex-wrap gap-4">
              {awards.map((a) => {
                const Icon = a.icon
                return (
                  <StaggerItem key={a.label}>
                    <div className="bg-surface flex min-w-[170px] flex-1 items-center gap-3 rounded-xl px-4 py-4 shadow-sm">
                    <div className="bg-brand/10 flex size-10 shrink-0 items-center justify-center rounded-lg">
                      <Icon size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-text-primary text-[13px] leading-tight font-bold">
                        {a.label}
                      </p>
                      <p className="text-text-muted mt-0.5 text-[12px]">{a.sub}</p>
                    </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>

          {/* Right — vertical timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-3 bottom-3 left-[11px] w-0.5 bg-gray-200" />

            <Stagger className="space-y-8">
              {timelineEvents.map((item) => (
                <StaggerItem key={item.year}>
                  <div className="relative flex gap-6 pl-8">
                  {/* Dot */}
                  <div
                    className={`absolute top-1 left-0 flex size-6 shrink-0 items-center justify-center rounded-full border-2 ${
                      item.highlight ? 'border-brand bg-brand' : 'border-gray-300 bg-white'
                    }`}
                  >
                    {item.highlight && <div className="size-2 rounded-full bg-white" />}
                  </div>
                  {/* Content */}
                  <div>
                    <p
                      className={`text-[17px] font-extrabold ${
                        item.highlight ? 'text-brand' : 'text-text-primary'
                      }`}
                    >
                      {item.year}
                    </p>
                    <p className="text-text-secondary mt-0.5 text-[15px]">{item.event}</p>
                  </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

// ─── About Stats Bar ─────────────────────────────────────────────────────────

const aboutStats = [
  { value: '30+', label: 'Years of Impact' },
  { value: '1,000+', label: 'Members Developed' },
  { value: '500+', label: 'Exchanges Completed' },
  { value: '10+', label: 'National Awards' },
]

function AboutStatsBar() {
  return (
    <section className="bg-brand py-16">
      <Stagger className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/25 px-6 lg:grid-cols-4 lg:px-8">
        {aboutStats.map((s) => (
          <StaggerItem key={s.label} className="flex flex-col items-center gap-2 px-4 py-4 text-center">
            <span className="text-5xl font-extrabold tracking-tight text-white">{s.value}</span>
            <span className="text-[15px] font-medium text-white/85">{s.label}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}

// ─── Core Values ─────────────────────────────────────────────────────────────

const coreValues = [
  {
    icon: Zap,
    color: 'text-brand',
    bg: 'bg-brand/10',
    title: 'Activating Leadership',
    description:
      'We lead by example, inspiring others and taking responsibility for the world around us.',
  },
  {
    icon: ShieldCheck,
    color: 'text-violet-600',
    bg: 'bg-violet-600/10',
    title: 'Demonstrating Ethics',
    description:
      'We act honestly and openly in everything we say and do, building trust at every step.',
  },
  {
    icon: Globe,
    color: 'text-pink-600',
    bg: 'bg-pink-600/10',
    title: 'Living Diversity',
    description:
      'We embrace different cultures and perspectives, learning from one another across borders.',
  },
  {
    icon: Smile,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    title: 'Enjoying Participation',
    description:
      'We create a joyful environment where every member feels valued, included, and engaged.',
  },
  {
    icon: Star,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    title: 'Striving for Excellence',
    description:
      'We constantly push beyond boundaries to deliver the highest quality in everything we do.',
  },
  {
    icon: Leaf,
    color: 'text-emerald-600',
    bg: 'bg-emerald-600/10',
    title: 'Acting Sustainably',
    description: 'We act in a way that is sustainable for our organisation and society as a whole.',
  },
]

function CoreValues() {
  return (
    <Reveal as="section" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mb-14 text-center">
          <span className="bg-brand/10 text-brand inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Core Values
          </span>
          <h2 className="text-text-primary mt-4 text-4xl font-extrabold md:text-5xl">
            What We Stand For.
          </h2>
          <p className="text-text-muted mx-auto mt-4 max-w-xl text-base leading-relaxed">
            AIESEC&apos;s six core values are the compass every member carries — guiding decisions,
            shaping culture, and defining the kind of leaders we aspire to be.
          </p>
        </header>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v) => {
            const Icon = v.icon
            return (
              <StaggerItem key={v.title}>
                <article
                  className="group flex flex-col items-center rounded-2xl bg-white px-7 py-9 text-center shadow-[0_4px_10px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                <div
                  className={`flex size-[68px] items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${v.bg}`}
                >
                  <Icon size={28} className={v.color} strokeWidth={1.8} />
                </div>
                <h3 className="text-text-primary mt-5 text-[16px] font-bold">{v.title}</h3>
                <p className="text-text-muted mt-3 text-sm leading-relaxed">{v.description}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </Reveal>
  )
}

// ─── Team Section ─────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: 'Nethmi Perera',
    role: 'Local Committee President',
    image: images.teamNethmi,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Kavinda Rajapaksa',
    role: 'Vice President · Outgoing GT',
    image: images.teamKavinda,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Dilani Fernando',
    role: 'Vice President · Outgoing GV',
    image: images.teamDilani,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ravindu Silva',
    role: 'Vice President · Finance',
    image: images.teamRavindu,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sithara Mendis',
    role: 'Vice President · Marketing',
    image: images.teamSithara,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Asel Wickramasinghe',
    role: 'Vice President · Incoming GT',
    image: images.teamAsel,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Danidu Bandara',
    role: 'Vice President · Talent Management',
    image: images.teamDanidu,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Hiruni Jayawardena',
    role: 'Vice President · Business Development',
    image: images.teamHiruni,
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Tharindu Liyanage',
    role: 'Vice President · Partnerships',
    image: images.teamTharindu,
    linkedin: 'https://linkedin.com',
  },
]

function TeamSection() {
  return (
    <Reveal as="section" id="team" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mb-4 text-center">
          <span className="bg-brand/10 text-brand inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Leadership
          </span>
          <h2 className="text-text-primary mt-4 text-4xl font-extrabold md:text-5xl">
            The Team Behind It All.
          </h2>
          <p className="text-text-muted mx-auto mt-3 max-w-lg text-base">
            2025–2026 Executive Board
          </p>
        </header>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
              {/* Photo */}
              <div className="relative aspect-302/220 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* LinkedIn overlay on hover */}
                <div className="bg-brand/70 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="size-9"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-xs font-semibold text-white">View LinkedIn</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-4 py-4">
                <h3 className="text-text-primary text-[15px] font-bold">{member.name}</h3>
                <p className="text-text-muted mt-0.5 text-[13px]">{member.role}</p>
              </div>

              {/* Bottom accent bar */}
              <div className="bg-brand/0 group-hover:bg-brand h-[3px] w-full transition-all duration-300" />
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="text-text-muted mt-8 text-center text-sm">
          Hover over any card to connect on LinkedIn
        </p>
      </div>
    </Reveal>
  )
}

// ─── Global Structure ─────────────────────────────────────────────────────────

const hierarchy = [
  {
    icon: Globe,
    title: 'AIESEC Global',
    description:
      "The world's largest youth-run organisation, operating across 126 countries and territories. AIESEC Global sets the mission, values, and standards that every local chapter upholds.",
  },
  {
    icon: Building2,
    title: 'AIESEC in Sri Lanka',
    description:
      'The national chapter of AIESEC in Sri Lanka coordinates more than 10 local committees across universities, including Colombo, Peradeniya, Moratuwa, and beyond.',
  },
  {
    icon: LocateFixed,
    title: 'AIESEC in Colombo South',
    description:
      'Our Local Committee, based at the University of Moratuwa, is one of the most active entities in Sri Lanka — driving exchanges, developing leaders, and creating impact every semester.',
  },
]

function GlobalStructure() {
  return (
    <Reveal as="section" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — hierarchy list */}
          <div>
            <span className="bg-brand/10 text-brand inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
              Our Place in AIESEC
            </span>
            <h2 className="text-text-primary mt-4 text-4xl font-extrabold md:text-5xl">
              Part of a Global Movement.
            </h2>

            <div className="mt-10 space-y-8">
              {hierarchy.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="bg-brand/10 mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl">
                      <Icon size={18} className="text-brand" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-text-primary text-[16px] font-bold">{item.title}</h3>
                        {i === 2 && (
                          <span className="bg-brand rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                            Us
                          </span>
                        )}
                      </div>
                      <p className="text-text-muted mt-1.5 text-[14px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — layered hierarchy funnel */}
          <div className="relative flex flex-col items-center">
            {/* Decorative background glow */}
            <div className="bg-brand/8 pointer-events-none absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

            <div className="relative w-full max-w-md space-y-0">
              {/* Tier 1 — Global */}
              <div className="relative z-10">
                <div className="border-brand/15 relative overflow-hidden rounded-2xl border bg-white/80 px-6 py-5 shadow-[0_8px_32px_rgba(3,126,243,0.08)] backdrop-blur-sm">
                  <div className="from-brand/5 pointer-events-none absolute inset-0 bg-linear-to-br to-transparent" />
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand/10 flex size-11 items-center justify-center rounded-xl">
                        <Globe size={20} className="text-brand" />
                      </div>
                      <div>
                        <p className="text-text-primary text-[15px] font-bold">AIESEC Global</p>
                        <p className="text-text-muted text-[12px]">
                          World&apos;s largest youth-run org
                        </p>
                      </div>
                    </div>
                    <span className="bg-brand/10 text-brand shrink-0 rounded-full px-3 py-1 text-[12px] font-bold">
                      126 Countries
                    </span>
                  </div>
                </div>
                {/* Connector */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-brand/25 h-6 w-px" />
                    <div className="border-brand/30 bg-brand/10 size-2 rotate-45 border" />
                    <div className="bg-brand/25 h-6 w-px" />
                  </div>
                </div>
              </div>

              {/* Tier 2 — Sri Lanka */}
              <div className="relative z-20 -mt-1 px-4">
                <div className="border-brand/25 relative overflow-hidden rounded-2xl border bg-white px-6 py-5 shadow-[0_12px_40px_rgba(3,126,243,0.12)]">
                  <div className="from-brand/8 pointer-events-none absolute inset-0 bg-linear-to-br to-transparent" />
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand/15 flex size-11 items-center justify-center rounded-xl">
                        <Building2 size={20} className="text-brand" />
                      </div>
                      <div>
                        <p className="text-text-primary text-[15px] font-bold">AIESEC Sri Lanka</p>
                        <p className="text-text-muted text-[12px]">National chapter</p>
                      </div>
                    </div>
                    <span className="bg-brand/15 text-brand shrink-0 rounded-full px-3 py-1 text-[12px] font-bold">
                      10+ Entities
                    </span>
                  </div>
                </div>
                {/* Connector */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-brand/35 h-6 w-px" />
                    <div className="border-brand/50 bg-brand/20 size-2.5 rotate-45 border" />
                    <div className="bg-brand/35 h-6 w-px" />
                  </div>
                </div>
              </div>

              {/* Tier 3 — Colombo South (highlighted) */}
              <div className="relative z-30 -mt-1 px-8">
                <div className="border-brand bg-brand relative overflow-hidden rounded-2xl border-2 px-6 py-6 shadow-[0_16px_48px_rgba(3,126,243,0.35)]">
                  {/* Subtle pattern overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-10">
                    <div className="absolute -top-8 -right-8 size-32 rounded-full bg-white/30" />
                    <div className="absolute -bottom-6 -left-6 size-24 rounded-full bg-white/20" />
                  </div>
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-white/20">
                        <LocateFixed size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-[16px] font-bold text-white">AIESEC Colombo South</p>
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
                            You
                          </span>
                        </div>
                        <p className="text-[12px] text-white/75">University of Moratuwa</p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-2xl font-extrabold text-white">30+</p>
                      <p className="text-[11px] font-medium text-white/70">Years of impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reach indicator */}
            <div className="mt-10 flex items-center gap-3 text-[13px]">
              <div className="bg-brand/15 h-px w-12" />
              <span className="text-text-muted font-medium">
                From <span className="text-brand font-bold">126 countries</span> to{' '}
                <span className="text-brand font-bold">your campus</span>
              </span>
              <div className="bg-brand/15 h-px w-12" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

// ─── About CTA ───────────────────────────────────────────────────────────────

function AboutCTA() {
  return (
    <Reveal variant="scaleIn" as="section" className="relative overflow-hidden bg-white py-28 text-center">
      {/* Decorative blobs */}
      <div className="bg-brand/8 absolute -top-20 -left-20 size-[320px] rounded-full blur-3xl" />
      <div className="bg-brand/6 absolute -right-16 -bottom-16 size-[280px] rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Badge */}
        <div className="border-brand/25 bg-brand/8 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
          <Star size={13} className="text-brand" />
          <span className="text-brand text-xs font-bold tracking-widest uppercase">
            Join the Community
          </span>
        </div>

        <h2 className="text-text-primary text-4xl font-extrabold md:text-5xl lg:text-6xl">
          Be Part of Something Bigger.
        </h2>

        <p className="text-text-muted mx-auto mt-6 max-w-lg text-[16px] leading-[1.8]">
          Whether you&apos;re looking to travel, grow professionally, or give back — AIESEC in
          Colombo South has a path for you. Every journey starts with a single step.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/programs/global-volunteer"
            className="bg-brand shadow-brand/30 hover:bg-brand-dark inline-flex items-center gap-2 rounded-[10px] px-8 py-4 text-[15px] font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            Apply to Join
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/programs/global-talent"
            className="border-brand/40 text-brand hover:border-brand hover:bg-brand/5 inline-flex items-center gap-2 rounded-[10px] border-2 px-8 py-4 text-[15px] font-bold transition-all duration-200"
          >
            Learn About Programs
            <ArrowRight size={16} />
          </Link>
        </div>

        <p className="text-text-faint mt-6 text-[13px]">
          Open to all University of Moratuwa students · No experience required
        </p>
      </div>
    </Reveal>
  )
}

// ─── Page Composition ────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurHistory />
      <AboutStatsBar />
      <CoreValues />
      <TeamSection />
      <GlobalStructure />
      <AboutCTA />
    </>
  )
}
