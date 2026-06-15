import { useState } from 'react'
import {
  Globe,
  Heart,
  BookOpen,
  Briefcase,
  Home,
  Recycle,
  Handshake,
  ClipboardList,
  UserCheck,
  Plane,
  Zap,
  Users,
  Lightbulb,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react'
import { images } from '../assets/images'

/* ─── Data ──────────────────────────────────────────────────── */

const aboutItems = [
  {
    icon: Globe,
    iconBg: 'bg-[rgba(3,126,243,0.08)]',
    iconColor: 'text-brand',
    title: 'What It Is',
    body: "Global Volunteer is AIESEC's flagship short-term volunteering program, connecting university students with partner NGOs and community organizations around the world for 6–8 week projects tied to the UN SDGs.",
  },
  {
    icon: Users,
    iconBg: 'bg-[rgba(0,191,165,0.08)]',
    iconColor: 'text-teal-gv' as const,
    title: "Who It's For",
    body: 'Any university student or recent graduate who wants to make a real contribution while stepping outside their comfort zone. No prior experience needed — only genuine curiosity and the willingness to grow.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-[rgba(245,158,11,0.08)]',
    iconColor: 'text-amber',
    title: 'What You Gain',
    body: 'Intercultural intelligence, adaptive leadership, global networks, and lived experience that transforms your perspective — and makes your CV stand out in any room.',
  },
]

const sdgProjects = [
  {
    sdg: 'SDG 3',
    color: '#4c9f38',
    bg: 'bg-[rgba(76,159,56,0.06)]',
    border: 'border-l-[#4c9f38]',
    icon: Heart,
    iconColor: 'text-[#4c9f38]',
    title: 'Good Health & Well-Being',
    body: 'Support community health initiatives, mental wellness campaigns, and public health education across developing regions.',
  },
  {
    sdg: 'SDG 4',
    color: '#c5192d',
    bg: 'bg-[rgba(197,25,45,0.06)]',
    border: 'border-l-[#c5192d]',
    icon: BookOpen,
    iconColor: 'text-[#c5192d]',
    title: 'Quality Education',
    body: 'Teach English, digital skills, and critical thinking to underserved communities and help build lasting educational capacity.',
  },
  {
    sdg: 'SDG 8',
    color: '#a21942',
    bg: 'bg-[rgba(162,25,66,0.06)]',
    border: 'border-l-[#a21942]',
    icon: Briefcase,
    iconColor: 'text-[#a21942]',
    title: 'Decent Work & Growth',
    body: 'Empower youth with entrepreneurship skills, job readiness programs, and economic inclusion projects.',
  },
  {
    sdg: 'SDG 11',
    color: '#fd9d24',
    bg: 'bg-[rgba(253,157,36,0.06)]',
    border: 'border-l-[#fd9d24]',
    icon: Home,
    iconColor: 'text-[#fd9d24]',
    title: 'Sustainable Communities',
    body: 'Build safer, more inclusive urban environments through community development, urban planning, and social innovation projects.',
  },
  {
    sdg: 'SDG 12',
    color: '#bf8b2e',
    bg: 'bg-[rgba(191,139,46,0.06)]',
    border: 'border-l-[#bf8b2e]',
    icon: Recycle,
    iconColor: 'text-[#bf8b2e]',
    title: 'Responsible Consumption',
    body: 'Drive sustainability programs, waste reduction campaigns, and responsible consumption education in local communities.',
  },
  {
    sdg: 'SDG 17',
    color: '#19486a',
    bg: 'bg-[rgba(25,72,106,0.06)]',
    border: 'border-l-[#19486a]',
    icon: Handshake,
    iconColor: 'text-[#19486a]',
    title: 'Partnerships for Goals',
    body: 'Build cross-border collaborations that amplify impact across communities.',
  },
]

const journeySteps = [
  {
    num: '1',
    icon: ClipboardList,
    title: 'Apply Online',
    body: 'Fill in your profile, choose your destination, SDG focus area, and project timeline on the AIESEC platform.',
  },
  {
    num: '2',
    icon: UserCheck,
    title: 'Get Matched',
    body: 'Our team reviews your application and connects you with a partner NGO or organization abroad that fits your goals.',
  },
  {
    num: '3',
    icon: Plane,
    title: 'Prepare & Travel',
    body: 'Attend our pre-departure preparation sessions, secure your visa, and take the flight that changes everything.',
  },
  {
    num: '4',
    icon: Zap,
    title: 'Make an Impact',
    body: 'Deliver your 6–8 week volunteer project, grow as a leader, and return to Sri Lanka with a global perspective.',
  },
]

const hostBenefits = [
  {
    icon: Users,
    text: 'Access motivated, globally-minded young talent from 126 countries ready to contribute to your mission.',
  },
  {
    icon: Lightbulb,
    text: 'Advance your CSR commitments and SDG impact through structured volunteer partnerships.',
  },
  {
    icon: Globe,
    text: "Bring fresh international perspectives, skills, and energy to your organization's projects.",
  },
]

const testimonials = [
  {
    quote:
      "Six weeks in Egypt taught me more about leadership, resilience, and cultural empathy than three years of university. Going on GV was the single best decision I've ever made.",
    name: 'Nethmi Perera',
    role: 'GV Alumni · Egypt 🇪🇬',
    avatar: images.gvAlumniNethmi,
  },
  {
    quote:
      'I volunteered in Brazil with absolutely zero Portuguese and zero idea what to expect. AIESEC prepared me so thoroughly that by Week 2 I was running sessions solo. That confidence never left me.',
    name: 'Asel Ratnayake',
    role: 'GV Alumni · Brazil 🇧🇷',
    avatar: images.gvAlumniAsel,
  },
  {
    quote:
      'Working with children in Morocco reshaped how I see the world. The AIESEC network gave me not just an experience, but a family of like-minded changemakers across every continent.',
    name: 'Sithara Perera',
    role: 'GV Alumni · Morocco 🇲🇦',
    avatar: images.gvAlumniSithara,
  },
]

const faqs = [
  {
    q: 'How much does it cost to join the program?',
    a: 'The program fee covers AIESEC membership, matching support, pre-departure preparation, and in-country support throughout your exchange. Costs vary by destination — contact us for a personalised quote.',
  },
  {
    q: 'What kind of projects are available?',
    a: 'Projects span six SDG areas: health, education, economic empowerment, sustainable communities, responsible consumption, and partnerships. Each project is tied to a real community need and a verified NGO partner.',
  },
  {
    q: 'Do I need prior volunteer experience to apply?',
    a: 'No prior experience is required. We look for curiosity, commitment, and the willingness to step outside your comfort zone. Our pre-departure preparation ensures you arrive ready to contribute from day one.',
  },
  {
    q: 'How does AIESEC support me during my exchange?',
    a: 'AIESEC has a local committee in every host country. They assist with airport pick-up, accommodation guidance, cultural orientation, and are your emergency point of contact throughout your stay.',
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export function GlobalVolunteerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={images.gvHeroBg}
          alt="Global Volunteer program — young volunteers abroad"
          className="absolute inset-0 size-full object-cover"
        />

        {/* Gradient overlay — deep blue → black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(146.99deg, rgba(2,80,160,0.75) 0%, rgba(0,0,0,0.6) 100%)',
          }}
        />

        {/* Decorative floating dots */}
        <div className="pointer-events-none absolute top-[150px] left-[123px] size-[10px] rounded-[5px] bg-teal-gv opacity-30" />
        <div className="pointer-events-none absolute top-[250px] right-[161px] size-[7px] rounded-[3.5px] bg-teal-gv opacity-25" />
        <div className="pointer-events-none absolute bottom-[208px] left-[215px] size-[6px] rounded-[3px] bg-teal-gv opacity-20" />
        <div className="pointer-events-none absolute right-[135px] bottom-[313px] size-[12px] rounded-[6px] bg-teal-gv opacity-20" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[684px] px-6 text-center">
          {/* Badge */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2"
            style={{ background: '#00bfa5' }}
          >
            <Globe size={14} className="shrink-0 text-white" />
            <span className="text-xs font-bold tracking-[1.44px] text-white uppercase">
              Global Volunteer
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.1] font-black tracking-[-0.02em] text-white">
            Make an Impact.
            <br />
            See the World.
          </h1>

          {/* Sub-text */}
          <p className="mx-auto mt-7 max-w-[620px] text-[20px] leading-[1.65] text-[rgba(255,255,255,0.85)]">
            Join a 6–8 week volunteer project abroad and contribute to the UN Sustainable
            Development Goals while discovering who you really are.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:colombosouth@aiesec.net?subject=Apply Now - Global Volunteer"
              className="inline-flex items-center gap-2 rounded-[10px] px-10 py-[17px] text-base font-bold text-white transition-all hover:-translate-y-px"
              style={{
                background: '#00bfa5',
                boxShadow: '0 4px 8px rgba(0,191,165,0.3)',
              }}
            >
              Apply Now
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-[10px] border-2 border-[rgba(255,255,255,0.75)] px-10 py-[17px] text-base font-bold text-white transition-all hover:bg-white/10"
            >
              How It Works
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-14 flex flex-col items-center gap-1.5 opacity-55">
            <div className="h-10 w-px bg-[rgba(255,255,255,0.6)]" />
            <span className="text-[10px] font-normal tracking-[1px] text-white uppercase">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-16 px-8 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <span className="inline-block rounded-full bg-[rgba(0,191,165,0.1)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-teal-gv uppercase">
              What is Global Volunteer?
            </span>
            <h2 className="text-navy mt-5 text-[40px] leading-[1.2] font-extrabold tracking-[-0.4px]">
              Volunteer Across
              <br />
              <span className="text-brand">126 Countries</span>
            </h2>

            <div className="mt-8 space-y-6">
              {aboutItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                    >
                      <Icon size={20} className={item.iconColor} />
                    </div>
                    <div>
                      <p className="text-navy text-[15px] font-bold">{item.title}</p>
                      <p className="mt-1.5 text-sm leading-[1.75] text-[#6b7280]">{item.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats bar */}
            <div className="mt-10 flex items-center gap-8 border-t border-[#f0f1f5] pt-8">
              {[
                { val: '126', label: 'Countries' },
                { val: '6–8', label: 'Week Projects' },
                { val: '5,000+', label: 'Sri Lankan Alumni' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-brand text-[26px] font-black leading-none">{s.val}</p>
                  <p className="mt-1 text-xs font-medium text-[#9ca3af]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — 3-photo collage */}
          <div className="relative mt-4">
            {/* Left tall photo */}
            <div className="absolute top-0 left-0 h-[414px] w-[47%] overflow-hidden rounded-2xl">
              <img
                src={images.gvVolunteer1}
                alt="Volunteer working with community"
                className="size-full object-cover"
              />
            </div>

            {/* Top-right photo */}
            <div className="absolute top-0 right-0 h-[200px] w-[49%] overflow-hidden rounded-2xl">
              <img
                src={images.gvVolunteer2}
                alt="Volunteers engaging with locals"
                className="size-full object-cover"
              />
            </div>

            {/* Bottom-right photo */}
            <div className="absolute right-0 bottom-0 h-[200px] w-[49%] overflow-hidden rounded-2xl">
              <img
                src={images.gvVolunteer3}
                alt="Group of volunteers outdoors"
                className="size-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-4 left-[calc(47%-60px)] z-10 flex flex-col items-center justify-center rounded-2xl p-5"
              style={{
                background: 'linear-gradient(152.86deg, #00bfa5 0%, #037ef3 100%)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                width: 151,
                height: 151,
              }}
            >
              <p className="text-3xl font-black leading-none text-white">128</p>
              <p className="mt-1 text-center text-[11px] leading-[1.4] text-[rgba(255,255,255,0.85)]">
                Sri Lankan
                <br />
                Volunteers This Year
              </p>
            </div>

            {/* Spacer so parent has height */}
            <div className="h-[430px]" />
          </div>
        </div>
      </section>

      {/* ══════════════════ PROJECTS THAT MATTER ══════════════════ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="inline-block rounded-full bg-[rgba(0,191,165,0.1)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-teal-gv uppercase">
              SDG-Aligned Opportunities
            </span>
            <h2 className="text-navy mt-5 text-[40px] font-extrabold tracking-[-0.4px]">
              Projects That Matter.
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#6b7280]">
              Every Global Volunteer project is tied to a UN Sustainable Development Goal. Choose
              the cause you care about most.
            </p>
          </div>

          {/* SDG cards grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sdgProjects.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.sdg}
                  className={`flex gap-4 rounded-2xl border-l-4 ${p.border} ${p.bg} p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]`}
                >
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
                  >
                    <Icon size={22} className={p.iconColor} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-bold tracking-[0.88px] uppercase"
                      style={{ color: p.color }}
                    >
                      {p.sdg}
                    </span>
                    <p className="text-navy mt-0.5 text-[15px] font-bold">{p.title}</p>
                    <p className="mt-1.5 text-[13px] leading-[1.75] text-[#6b7280]">{p.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════ HOW IT WORKS ══════════════════ */}
      <section id="how-it-works" className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-[rgba(0,191,165,0.1)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-teal-gv uppercase">
              For Students
            </span>
            <h2 className="text-navy mt-5 text-[40px] font-extrabold tracking-[-0.4px]">
              Your Journey in 4 Steps.
            </h2>
          </div>

          {/* Steps row */}
          <div className="relative grid grid-cols-2 gap-y-12 gap-x-6 lg:grid-cols-4">
            {/* Gradient connecting line — desktop only */}
            <div
              className="pointer-events-none absolute top-9 right-[12.5%] left-[12.5%] z-0 hidden h-[3px] rounded lg:block"
              style={{
                background: 'linear-gradient(to right, #037ef3, #00bfa5)',
              }}
            />

            {journeySteps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div
                      className="flex size-[72px] items-center justify-center rounded-[36px] shadow-[0_8px_12px_rgba(3,126,243,0.3)]"
                      style={{
                        background: 'linear-gradient(135deg, #037ef3 0%, #00bfa5 100%)',
                      }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 flex size-[22px] items-center justify-center rounded-[11px] border-2 border-white bg-navy text-[11px] font-extrabold text-white">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-navy text-[16px] font-bold">{step.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.7] text-[#6b7280]">{step.body}</p>
                </div>
              )
            })}
          </div>

          {/* CTA button */}
          <div className="mt-16 flex justify-center">
            <a
              href="mailto:colombosouth@aiesec.net?subject=Start Application - Global Volunteer"
              className="inline-flex items-center gap-2 rounded-[10px] px-10 py-[15px] text-[15px] font-bold text-white shadow-[0_4px_9px_rgba(3,126,243,0.3)] transition-all hover:-translate-y-px"
              style={{ background: '#037ef3' }}
            >
              Start Your Application <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ HOST A VOLUNTEER ══════════════════ */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: '#00bfa5' }}
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-20 right-[1296px] size-[320px] rounded-[160px] bg-[rgba(255,255,255,0.07)]" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 size-[200px] rounded-[100px] bg-[rgba(255,255,255,0.05)]" />

        <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-8 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <span className="inline-block rounded-full bg-[rgba(255,255,255,0.18)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-white uppercase">
              For Organizations
            </span>
            <h2 className="mt-5 text-[38px] font-extrabold leading-[1.2] text-white">
              Host a Global Volunteer
            </h2>

            <div className="mt-7 space-y-5">
              {hostBenefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(255,255,255,0.18)]">
                      <Icon size={18} className="text-white" />
                    </div>
                    <p className="text-[15px] leading-[1.65] text-[rgba(255,255,255,0.9)]">
                      {b.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <a
              href="mailto:colombosouth@aiesec.net?subject=Partner With Us - Global Volunteer"
              className="mt-9 inline-flex items-center gap-2 rounded-[10px] border-2 border-[rgba(255,255,255,0.85)] px-8 py-[14px] text-[15px] font-bold text-white transition-all hover:bg-white/10"
            >
              Partner With Us <ArrowRight size={15} />
            </a>
          </div>

          {/* Right — image */}
          <div className="overflow-hidden rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.25)]">
            <img
              src={images.gvHostImage}
              alt="Organisation hosting AIESEC Global Volunteers"
              className="aspect-3/2 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[700px] text-center">
            <span className="inline-block rounded-full bg-[rgba(0,191,165,0.15)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-teal-gv uppercase">
              GV Alumni Voices
            </span>
            <h2 className="mt-5 text-[38px] font-extrabold text-white">
              Stories From Our Volunteers
            </h2>
            <p className="text-text-subtle mt-4 text-base">
              Real words from young leaders who dared to go global.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-navy-card flex flex-col gap-6 rounded-[20px] border border-[rgba(255,255,255,0.06)] px-[33px] py-[37px] shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
              >
                {/* Opening quote mark */}
                <span
                  className="font-serif text-[64px] leading-none font-bold opacity-90"
                  style={{ color: '#00bfa5', fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="flex-1 text-[15px] leading-[1.8] text-[rgba(255,255,255,0.9)] italic">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="size-[52px] shrink-0 rounded-full border-2 object-cover"
                    style={{ borderColor: '#00bfa5' }}
                  />
                  <div>
                    <p className="text-[15px] font-bold text-white">{t.name}</p>
                    <p className="text-text-subtle mt-0.5 text-[13px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[768px] px-8">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-[rgba(0,191,165,0.1)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-teal-gv uppercase">
              Support
            </span>
            <h2 className="text-navy mt-5 text-[38px] font-extrabold tracking-[-0.4px]">
              Common Questions.
            </h2>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-[#e5e7eb]">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} className="py-px">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="text-navy pr-8 text-[16px] font-semibold">{faq.q}</span>
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-surface">
                      {isOpen ? (
                        <ChevronUp size={16} className="text-[#1a1a2e]" />
                      ) : (
                        <ChevronDown size={16} className="text-[#1a1a2e]" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-[15px] leading-[1.75] text-[#6b7280]">{faq.a}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background:
            'linear-gradient(159.9deg, #00bfa5 0%, #037ef3 50%, #0250a0 100%)',
        }}
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute top-[-60px] left-[-60px] size-[240px] rounded-[120px] bg-[rgba(255,255,255,0.06)]" />
        <div className="pointer-events-none absolute right-0 bottom-[90px] size-[280px] rounded-[140px] bg-[rgba(255,255,255,0.05)]" />
        {/* Decorative dots */}
        <div className="pointer-events-none absolute right-[259px] top-[169px] size-[8px] rounded-[4px] bg-[rgba(255,255,255,0.4)]" />
        <div className="pointer-events-none absolute left-[230px] bottom-[96px] size-[10px] rounded-[5px] bg-[rgba(255,255,255,0.3)]" />

        <div className="relative z-10 mx-auto max-w-[640px] px-8 text-center">
          {/* Top badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.15)] px-5 py-2">
            <Globe size={13} className="shrink-0 text-white" />
            <span className="text-[11px] font-bold tracking-[1.1px] text-white uppercase">
              126 Countries · Unlimited Possibilities
            </span>
          </div>

          <h2 className="text-[48px] font-black leading-[1.15] tracking-[-0.48px] text-white">
            Ready to Volunteer Abroad?
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.7] text-[rgba(255,255,255,0.85)]">
            Take the step that thousands of alumni say changed everything.
            <br />
            Your project. Your country. Your story.
          </p>

          <a
            href="mailto:colombosouth@aiesec.net?subject=Apply Now - Global Volunteer"
            className="mt-10 inline-flex items-center gap-2 rounded-[12px] bg-white px-10 py-[18px] text-[16px] font-extrabold shadow-[0_6px_12px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-px hover:shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
            style={{ color: '#037ef3' }}
          >
            Apply Now <ArrowRight size={17} />
          </a>

          <p className="mt-6 text-[13px] text-[rgba(255,255,255,0.65)]">
            Applications reviewed within 5 business days
          </p>
        </div>
      </section>
    </>
  )
}
