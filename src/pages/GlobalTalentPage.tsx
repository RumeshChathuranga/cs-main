import {
  Briefcase,
  Globe,
  Users,
  TrendingUp,
  Award,
  Building2,
  Lightbulb,
  DollarSign,
  Heart,
  ClipboardList,
  UserCheck,
  Handshake,
  PlayCircle,
  FileText,
  UsersRound,
  Star,
  GraduationCap,
  Megaphone,
  Code2,
  BookOpen,
  BarChart3,
  Landmark,
  Monitor,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { images } from '../assets/images'

/* ─── Data ──────────────────────────────────────────────────── */

const aboutItems = [
  {
    icon: Briefcase,
    iconBg: 'bg-[rgba(107,78,255,0.08)]',
    iconColor: 'text-violet',
    title: 'What It Is',
    body: "Global Talent is AIESEC's professional internship program connecting young professionals with companies and organisations abroad for structured 3–18 month work experiences. Every role is real, every project matters.",
  },
  {
    icon: UserCheck,
    iconBg: 'bg-[rgba(3,126,243,0.08)]',
    iconColor: 'text-brand',
    title: 'Who Qualifies',
    body: 'University students in their final two years and recent graduates (within 2 years) with demonstrable skills in their field. No prior international experience required — ambition and a strong profile are what count.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-[rgba(13,148,136,0.08)]',
    iconColor: 'text-teal',
    title: 'What You Gain',
    body: 'Real professional output, international references, language immersion, and a global career network that follows you for life. GT alumni consistently outperform peers in hiring rounds at top employers.',
  },
]

const internBenefits = [
  {
    icon: Globe,
    title: 'International Experience',
    body: 'Work inside a real company abroad and build cross-cultural professional skills that local experience simply cannot replicate.',
  },
  {
    icon: UsersRound,
    title: 'Global Professional Network',
    body: "Connect with peers, managers, and industry professionals across 126 countries through AIESEC's worldwide alumni community.",
  },
  {
    icon: TrendingUp,
    title: 'CV & Career Boost',
    body: 'Stand out in every interview — international internship experience is one of the most valued signals on any graduate CV.',
  },
  {
    icon: Award,
    title: 'Cultural Immersion',
    body: 'Live, work, and grow in a new country. The cultural intelligence you develop becomes a career-long superpower.',
  },
]

const orgBenefits = [
  {
    icon: Building2,
    title: 'Access Global Talent',
    body: 'Tap into a pool of ambitious, vetted young professionals from 126 countries — at zero recruitment agency cost.',
  },
  {
    icon: Lightbulb,
    title: 'Fresh Perspectives',
    body: 'International interns bring outside-in thinking, multilingual skills, and diverse problem-solving approaches.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Internships',
    body: 'Structured short-to-medium term engagements designed to deliver real value while remaining budget-friendly.',
  },
  {
    icon: Heart,
    title: 'CSR & Youth Development',
    body: 'Align your organisation with meaningful SDG goals and invest in the next generation of global leaders.',
  },
]

const internSteps = [
  {
    num: '1',
    icon: ClipboardList,
    title: 'Apply Online',
    body: 'Create your AIESEC profile and submit your internship application with your skills, goals, and preferred country.',
  },
  {
    num: '2',
    icon: UserCheck,
    title: 'Profile Reviewed',
    body: 'Our team reviews your profile and matches your skills to relevant partner companies abroad within 5–7 business days.',
  },
  {
    num: '3',
    icon: Handshake,
    title: 'Get Matched',
    body: 'Interview with your matched company, accept the offer, and begin your pre-departure preparation with AIESEC support.',
  },
  {
    num: '4',
    icon: PlayCircle,
    title: 'Start Internship',
    body: "Travel, settle in, and begin your internship — with AIESEC's local committee ready to support you throughout your stay.",
  },
]

const companySteps = [
  {
    num: '1',
    icon: FileText,
    title: 'Post Opportunity',
    body: 'Submit your internship role on the AIESEC platform — specify skills, department, duration, and requirements.',
  },
  {
    num: '2',
    icon: ClipboardList,
    title: 'Review Applicants',
    body: 'Browse a curated shortlist of pre-screened candidates matched to your opportunity by our team.',
  },
  {
    num: '3',
    icon: Star,
    title: 'Select Your Intern',
    body: 'Interview and select your preferred candidate. AIESEC handles the visa support, travel logistics, and onboarding guidance.',
  },
  {
    num: '4',
    icon: UsersRound,
    title: 'Host & Mentor',
    body: 'Welcome your intern, assign meaningful work, and mentor them — while our team remains your point of contact throughout.',
  },
]

const fields = [
  {
    icon: Megaphone,
    label: 'Marketing & Comms',
    color: 'text-violet',
    bg: 'bg-[rgba(107,78,255,0.09)]',
  },
  { icon: Code2, label: 'IT & Technology', color: 'text-brand', bg: 'bg-[rgba(3,126,243,0.09)]' },
  { icon: BookOpen, label: 'Education', color: 'text-amber', bg: 'bg-[rgba(217,119,6,0.09)]' },
  {
    icon: BarChart3,
    label: 'Finance & Business',
    color: 'text-teal',
    bg: 'bg-[rgba(13,148,136,0.09)]',
  },
  { icon: Landmark, label: 'NGO & Development', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: Monitor, label: 'Engineering', color: 'text-purple', bg: 'bg-[rgba(124,58,237,0.09)]' },
]

const testimonials = [
  {
    badge: 'Intern',
    badgeColor: 'bg-[rgba(107,78,255,0.18)] text-[#a78bff]',
    quote:
      'My internship at a Berlin fintech startup through AIESEC Global Talent was the most transformative 6 months of my career. I came back to Sri Lanka with real product management experience, a European network, and a completely new level of professional confidence.',
    name: 'Ravindu Jayasinghe',
    role: 'GT Alumni · Germany 🇩🇪',
    avatar: images.gtaAlumniRavindu,
  },
  {
    badge: 'Intern',
    badgeColor: 'bg-[rgba(107,78,255,0.18)] text-[#a78bff]',
    quote:
      "I never imagined I'd be presenting strategy to a Dutch leadership team at 23. AIESEC matched me with a role that was genuinely challenging — and that challenge made me the professional I am today.",
    name: 'Mihara Weerasinghe',
    role: 'GT Alumni · Netherlands 🇳🇱',
    avatar: images.gtaAlumniMihara,
  },
  {
    badge: 'Company',
    badgeColor: 'bg-[rgba(3,126,243,0.18)] text-[#60a5fa]',
    quote:
      'We hosted three AIESEC Global Talent interns across two years. Each one brought energy and a fresh lens to our team. The ROI on our CSR investment was far beyond what we expected — and two of them are now full-time hires.',
    name: 'Dilshan Perera',
    role: 'HR Director · TechBridge Solutions',
    avatar: images.gtaAlumniDilshan,
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export function GlobalTalentPage() {
  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative flex min-h-[85vh] flex-col overflow-hidden">
        {/* Background image */}
        <img
          src={images.gtaHeroBg}
          alt="Global Talent program — young professionals in office"
          className="absolute inset-0 size-full object-cover"
        />

        {/* Gradient overlay — navy → violet → brand-blue */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(146.99deg, rgba(26,26,46,0.82) 0%, rgba(107,78,255,0.58) 60%, rgba(3,126,243,0.52) 100%)',
          }}
        />

        {/* Decorative rotated rounded rectangles */}
        <div
          className="pointer-events-none absolute top-[13%] left-[7%] size-[120px] rounded-2xl border-2 border-[rgba(255,255,255,0.5)] opacity-[0.06]"
          style={{ transform: 'rotate(20deg)' }}
        />
        <div
          className="pointer-events-none absolute top-[22%] right-[12%] size-[80px] rounded-2xl border-2 border-[rgba(255,255,255,0.5)] opacity-[0.08]"
          style={{ transform: 'rotate(45deg)' }}
        />
        <div
          className="pointer-events-none absolute bottom-[18%] left-[12%] size-[60px] rounded-2xl border-2 border-[rgba(255,255,255,0.5)] opacity-[0.07]"
          style={{ transform: 'rotate(15deg)' }}
        />
        <div
          className="pointer-events-none absolute right-[9%] bottom-[22%] size-[100px] rounded-2xl border-2 border-[rgba(255,255,255,0.5)] opacity-[0.05]"
          style={{ transform: 'rotate(30deg)' }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[664px] flex-1 flex-col items-center justify-center px-6 py-24 text-center">
          {/* Badge */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full px-6 py-2"
            style={{
              background: '#6b4eff',
              boxShadow: '0 4px 8px rgba(107,78,255,0.35)',
            }}
          >
            <Briefcase size={14} className="shrink-0 text-white" />
            <span className="text-xs font-extrabold tracking-[1.56px] text-white uppercase">
              Global Talent
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(38px,5vw,64px)] leading-[1.1] font-black tracking-[-0.02em] text-white">
            Kickstart Your Career
            <br />
            Internationally.
          </h1>

          {/* Sub-text */}
          <p className="mx-auto mt-8 max-w-[600px] text-lg leading-[1.65] text-[rgba(255,255,255,0.83)]">
            Professional internships abroad — gain real work experience, global exposure, and a
            career edge that sets you apart for life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:colombosouth@aiesec.net?subject=Apply as an Intern - Global Talent"
              className="inline-flex items-center gap-2 rounded-[10px] px-9 py-[17px] text-base font-extrabold text-white transition-all hover:-translate-y-px"
              style={{
                background: '#6b4eff',
                boxShadow: '0 4px 8px rgba(107,78,255,0.35)',
              }}
            >
              Apply as an Intern <ArrowRight size={16} />
            </a>
            <a
              href="mailto:colombosouth@aiesec.net?subject=Hire Global Talent"
              className="inline-flex items-center rounded-[10px] border-2 border-[rgba(255,255,255,0.75)] px-9 py-[17px] text-base font-bold text-white transition-all hover:bg-white/10"
            >
              Hire Global Talent
            </a>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10 bg-black/35">
          <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { value: '70+', label: 'Countries' },
              { value: '6–12', label: 'Month Internships' },
              { value: '500+', label: 'Partner Companies' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 px-4 py-6">
                <span className="text-4xl font-extrabold text-white">{stat.value}</span>
                <span className="text-[13px] font-medium tracking-wide text-white/75">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT THE PROGRAM ══════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-16 px-8 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <span className="inline-block rounded-full border border-[rgba(107,78,255,0.3)] bg-[rgba(107,78,255,0.06)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#6b4eff] uppercase">
              About the Program
            </span>
            <h2 className="text-navy mt-5 text-[40px] leading-[1.2] font-extrabold tracking-[-0.4px]">
              Work Abroad. <span className="text-violet">Grow Professionally.</span>
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
                      <p className="mt-1.5 text-sm leading-[1.78] text-[#6b7280]">{item.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats bar */}
            <div className="mt-10 flex items-center gap-8 border-t border-[#f0f1f5] pt-8">
              {[
                { val: '70+', label: 'Countries' },
                { val: '6–12mo', label: 'Duration' },
                { val: '500+', label: 'Companies' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-violet text-2xl font-black tracking-tight">{s.val}</p>
                  <p className="mt-0.5 text-xs font-medium text-[#9ca3af]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image with floating badges */}
          <div className="relative mt-4">
            {/* Floating top-right badge */}
            <div
              className="absolute -top-4 -right-4 z-10 flex items-center gap-2.5 rounded-xl px-4 py-3"
              style={{ background: '#6b4eff', boxShadow: '0 8px 14px rgba(107,78,255,0.3)' }}
            >
              <Clock size={18} className="shrink-0 text-white" />
              <div>
                <p className="text-base leading-none font-black text-white">6–12mo</p>
                <p className="mt-0.5 text-[11px] font-semibold text-[rgba(255,255,255,0.75)]">
                  Duration
                </p>
              </div>
            </div>

            {/* Main image */}
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(107,78,255,0.18),0_8px_24px_rgba(0,0,0,0.1)]">
              <img
                src={images.gtaProfessionals}
                alt="Young professionals working together at a whiteboard"
                className="aspect-[4/3.2] w-full object-cover"
              />
            </div>

            {/* Floating bottom-left badge */}
            <div className="absolute -bottom-4 -left-4 z-10 flex items-center gap-3 rounded-2xl border border-[#f0f1f5] bg-white px-4 py-3.5 shadow-[0_8px_14px_rgba(0,0,0,0.12)]">
              <div className="flex size-9 items-center justify-center rounded-[10px] bg-[rgba(3,126,243,0.09)]">
                <Globe size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-navy text-[17px] leading-none font-black">70+</p>
                <p className="mt-0.5 text-[11px] text-[#9ca3af]">Countries Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY GLOBAL TALENT? ══════════════════ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[600px] text-center">
            <span className="text-brand inline-block rounded-full border border-[rgba(3,126,243,0.3)] bg-[rgba(3,126,243,0.06)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] uppercase">
              Why Global Talent?
            </span>
            <h2 className="text-navy mt-5 text-[40px] font-extrabold tracking-[-0.4px]">
              Built for Both Sides of the Table.
            </h2>
          </div>

          {/* Two benefit cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* For Interns */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
              {/* Card header */}
              <div
                className="flex items-center gap-4 px-8 py-6"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.2)]">
                  <Users size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[1.1px] text-[rgba(255,255,255,0.75)] uppercase">
                    For Interns
                  </p>
                  <p className="text-lg font-extrabold text-white">
                    Students &amp; Young Professionals
                  </p>
                </div>
              </div>
              {/* Benefit list */}
              <div className="divide-y divide-[#f3f4f6] px-8 py-2">
                {internBenefits.map((b) => {
                  const Icon = b.icon
                  return (
                    <div key={b.title} className="flex gap-4 py-5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(29,78,216,0.07)]">
                        <Icon size={18} className="text-[#1d4ed8]" />
                      </div>
                      <div>
                        <p className="text-navy text-[14px] font-bold">{b.title}</p>
                        <p className="mt-1 text-[13px] leading-[1.75] text-[#6b7280]">{b.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* For Organisations */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
              {/* Card header */}
              <div
                className="flex items-center gap-4 px-8 py-6"
                style={{ background: 'linear-gradient(135deg, #6b4eff, #8b5cf6)' }}
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.2)]">
                  <Building2 size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[1.1px] text-[rgba(255,255,255,0.75)] uppercase">
                    For Organisations
                  </p>
                  <p className="text-lg font-extrabold text-white">Companies &amp; Partners</p>
                </div>
              </div>
              {/* Benefit list */}
              <div className="divide-y divide-[#f3f4f6] px-8 py-2">
                {orgBenefits.map((b) => {
                  const Icon = b.icon
                  return (
                    <div key={b.title} className="flex gap-4 py-5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(107,78,255,0.07)]">
                        <Icon size={18} className="text-violet" />
                      </div>
                      <div>
                        <p className="text-navy text-[14px] font-bold">{b.title}</p>
                        <p className="mt-1 text-[13px] leading-[1.75] text-[#6b7280]">{b.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ HOW IT WORKS ══════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="text-violet inline-block rounded-full border border-[rgba(107,78,255,0.3)] bg-[rgba(107,78,255,0.06)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] uppercase">
              The Process
            </span>
            <h2 className="text-navy mt-5 text-[40px] font-extrabold tracking-[-0.4px]">
              How It Works.
            </h2>
          </div>

          {/* For Interns row */}
          <div className="mb-16">
            {/* Row label */}
            <div className="mb-8 flex items-center gap-4">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}
              >
                <GraduationCap size={14} className="text-white" />
                <span className="text-[11px] font-bold tracking-[0.88px] text-white uppercase">
                  For Interns
                </span>
              </div>
              <div className="h-px flex-1 bg-[#e5e7eb]" />
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
              {/* Connecting line */}
              <div className="absolute top-[37px] right-[12.5%] left-[12.5%] z-0 hidden h-[2px] rounded bg-[rgba(29,78,216,0.2)] lg:block" />
              {internSteps.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="relative z-10 flex flex-col items-center text-center"
                  >
                    <div className="relative mb-6">
                      <div className="relative z-10 flex size-[74px] items-center justify-center rounded-full border-2 border-[#1d4ed8] bg-white">
                        <Icon size={28} className="text-[#1d4ed8]" />
                      </div>
                      <div
                        className="absolute -top-2 -right-1.5 flex size-6 items-center justify-center rounded-full border-2 border-white text-[11px] font-extrabold text-white"
                        style={{ background: '#1d4ed8' }}
                      >
                        {step.num}
                      </div>
                    </div>
                    <h3 className="text-navy text-[15px] font-bold">{step.title}</h3>
                    <p className="mt-2.5 text-[13.5px] leading-[1.75] text-[#6b7280]">
                      {step.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* For Companies row */}
          <div>
            {/* Row label */}
            <div className="mb-8 flex items-center gap-4">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'linear-gradient(135deg, #6b4eff, #8b5cf6)' }}
              >
                <Building2 size={14} className="text-white" />
                <span className="text-[11px] font-bold tracking-[0.88px] text-white uppercase">
                  For Companies
                </span>
              </div>
              <div className="h-px flex-1 bg-[#e5e7eb]" />
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
              {/* Connecting line */}
              <div className="absolute top-[37px] right-[12.5%] left-[12.5%] z-0 hidden h-[2px] rounded bg-[rgba(107,78,255,0.2)] lg:block" />
              {companySteps.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="relative z-10 flex flex-col items-center text-center"
                  >
                    <div className="relative mb-6">
                      <div className="relative z-10 flex size-[74px] items-center justify-center rounded-full border-2 border-[#6b4eff] bg-white">
                        <Icon size={28} className="text-violet" />
                      </div>
                      <div
                        className="absolute -top-2 -right-1.5 flex size-6 items-center justify-center rounded-full border-2 border-white text-[11px] font-extrabold text-white"
                        style={{ background: '#6b4eff' }}
                      >
                        {step.num}
                      </div>
                    </div>
                    <h3 className="text-navy text-[15px] font-bold">{step.title}</h3>
                    <p className="mt-2.5 text-[13.5px] leading-[1.75] text-[#6b7280]">
                      {step.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ INTERNSHIP FIELDS ══════════════════ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[600px] text-center">
            <span className="text-violet inline-block rounded-full border border-[rgba(107,78,255,0.3)] bg-[rgba(107,78,255,0.06)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] uppercase">
              Opportunities
            </span>
            <h2 className="text-navy mt-5 text-[40px] font-extrabold tracking-[-0.4px]">
              Internship Fields.
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#6b7280]">
              From startups to multinationals — find a role that matches your skills and drives your
              ambition.
            </p>
          </div>

          {/* Field cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {fields.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-4 rounded-2xl bg-white px-4 py-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
                >
                  <div className={`flex size-14 items-center justify-center rounded-2xl ${f.bg}`}>
                    <Icon size={26} className={f.color} />
                  </div>
                  <p className="text-navy text-center text-[13px] font-bold">{f.label}</p>
                </div>
              )
            })}
          </div>

          {/* Footer note */}
          <p className="mt-8 text-center text-sm text-[#9ca3af]">
            Don&apos;t see your field?{' '}
            <a
              href="mailto:colombosouth@aiesec.net?subject=Custom Field Inquiry - Global Talent"
              className="text-violet font-semibold hover:underline"
            >
              Contact us
            </a>{' '}
            — we may have a match for you.
          </p>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[675px] text-center">
            <span className="inline-block rounded-full border border-[rgba(107,78,255,0.4)] bg-[rgba(107,78,255,0.13)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#a78bff] uppercase">
              GT Alumni &amp; Partners
            </span>
            <h2 className="mt-5 text-[38px] font-extrabold text-white">
              Words From Our Community.
            </h2>
            <p className="text-text-subtle mt-4 text-base">
              Real stories from interns who went global — and companies who hosted them.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-navy-card relative flex flex-col rounded-[20px] border border-[rgba(255,255,255,0.06)] p-8 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
              >
                {/* Badge — top right */}
                <div
                  className={`absolute top-6 right-6 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.8px] uppercase ${t.badgeColor}`}
                >
                  {t.badge}
                </div>

                {/* Opening quote mark */}
                <span className="text-violet font-serif text-[56px] leading-none font-bold opacity-90">
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="mt-1 flex-1 text-[14.5px] leading-[1.85] text-[rgba(255,255,255,0.88)] italic">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="size-[52px] shrink-0 rounded-full border-2 border-[#6b4eff] object-cover"
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

      {/* ══════════════════ CTA SPLIT ══════════════════ */}
      <section className="flex flex-col lg:flex-row">
        {/* Left — For Students */}
        <div
          className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-10 py-20 text-center"
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)' }}
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-10 -left-10 size-48 rounded-full bg-white opacity-[0.06]" />
          <div className="pointer-events-none absolute right-[-20px] bottom-10 size-40 rounded-full bg-white opacity-[0.05]" />
          <div className="pointer-events-none absolute top-[20%] left-[30%] size-20 rounded-full bg-white opacity-[0.04]" />

          <div className="relative z-10 max-w-[340px]">
            <span className="mb-5 inline-flex items-center rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.15)] px-4 py-1.5 text-[11px] font-bold tracking-[0.88px] text-white uppercase">
              For Students
            </span>
            <h2 className="text-[38px] leading-[1.2] font-extrabold text-white">Intern Abroad</h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-[rgba(255,255,255,0.85)]">
              Build the career you&apos;ve always envisioned — from a desk in Berlin, Seoul, or São
              Paulo.
            </p>
            <a
              href="mailto:colombosouth@aiesec.net?subject=Apply Now - Global Talent Intern"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-[15px] font-extrabold text-[#1d4ed8] shadow-[0_4px_12px_rgba(0,0,0,0.16)] transition-all hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(0,0,0,0.22)]"
            >
              Apply Now <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Right — For Companies */}
        <div
          className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-10 py-20 text-center"
          style={{ background: 'linear-gradient(135deg, #6b4eff 0%, #8b5cf6 100%)' }}
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-10 -right-10 size-56 rounded-full bg-white opacity-[0.05]" />
          <div className="pointer-events-none absolute bottom-14 left-[-20px] size-36 rounded-full bg-white opacity-[0.06]" />
          <div className="pointer-events-none absolute top-[18%] right-[28%] size-16 rounded-full bg-white opacity-[0.04]" />

          <div className="relative z-10 max-w-[340px]">
            <span className="mb-5 inline-flex items-center rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.15)] px-4 py-1.5 text-[11px] font-bold tracking-[0.88px] text-white uppercase">
              For Companies
            </span>
            <h2 className="text-[38px] leading-[1.2] font-extrabold text-white">Hire an Intern</h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-[rgba(255,255,255,0.85)]">
              Access ambitious, pre-vetted young talent from around the world — ready to contribute
              from day one.
            </p>
            <a
              href="mailto:colombosouth@aiesec.net?subject=Contact Us - Hire Global Talent"
              className="text-violet mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-[15px] font-extrabold shadow-[0_4px_12px_rgba(0,0,0,0.16)] transition-all hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(0,0,0,0.22)]"
            >
              Contact Us <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
