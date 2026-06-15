import {
  BookOpen,
  Users,
  Trophy,
  Globe,
  Heart,
  Building2,
  FileText,
  Link2,
  CheckCircle,
  Zap,
  MapPin,
  ArrowRight,
  GraduationCap,
  Clock,
} from 'lucide-react'
import { images } from '../assets/images'
import { WorldMap } from '../components/ui/map'

/* ─── Data ──────────────────────────────────────────────────── */

const aboutItems = [
  {
    icon: BookOpen,
    iconBg: 'bg-[rgba(255,171,0,0.08)]',
    iconColor: 'text-gold',
    title: 'What It Is',
    body: "Global Teacher is AIESEC's education-focused volunteer program — connecting passionate young people with schools and community organisations abroad for 6–8 week teaching projects tied directly to UN SDG 4: Quality Education.",
  },
  {
    icon: Users,
    iconBg: 'bg-[rgba(3,126,243,0.08)]',
    iconColor: 'text-brand',
    title: 'Who Can Apply',
    body: "Any university student or recent graduate with enthusiasm for education. You don't need a teaching qualification — you need genuine curiosity, patience, and the desire to make a difference in a child's world.",
  },
  {
    icon: Trophy,
    iconBg: 'bg-[rgba(16,185,129,0.08)]',
    iconColor: 'text-teal',
    title: 'What You Gain',
    body: 'Communication mastery, cross-cultural empathy, real leadership confidence, and the deeply human reward of watching a child understand something for the first time because of you.',
  },
]

const roleCards = [
  {
    icon: BookOpen,
    title: 'Teach English or STEM',
    body: 'Lead engaging English-language lessons or science and math sessions tailored to the local school curriculum. No formal teaching certificate required — just passion and preparation.',
  },
  {
    icon: Users,
    title: 'Mentor Local Youth',
    body: 'Be a role model for children and teenagers who benefit deeply from exposure to global perspectives, diverse experiences, and someone who genuinely believes in their potential.',
  },
  {
    icon: Building2,
    title: 'Collaborate with Local Schools',
    body: 'Work alongside local teachers, develop lesson resources, and integrate into the school community as a valued partner — not just a visiting face.',
  },
]

const schoolBenefits = [
  {
    icon: Globe,
    text: 'Expose your students to international perspectives, diverse accents, and global cultures — right inside your school.',
  },
  {
    icon: GraduationCap,
    text: "Receive a motivated, enthusiastic teacher whose fresh energy and cross-cultural lens re-energises your classrooms.",
  },
  {
    icon: Heart,
    text: "Contribute to SDG 4 through a partnership that's professionally managed, fully supported, and cost-free to your school.",
  },
]

const destinations = [
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇧🇷', name: 'Brazil' },
  { flag: '🇪🇬', name: 'Egypt' },
  { flag: '🇲🇦', name: 'Morocco' },
  { flag: '🇨🇴', name: 'Colombia' },
  { flag: '🇻🇳', name: 'Vietnam' },
]

const steps = [
  {
    num: '1',
    icon: FileText,
    title: 'Apply',
    body: 'Submit your profile on the AIESEC platform — share your teaching interest, preferred destination, and availability.',
  },
  {
    num: '2',
    icon: Link2,
    title: 'Get Matched',
    body: 'Our team connects you with a partner school or NGO in your chosen country based on your skills and timeline.',
  },
  {
    num: '3',
    icon: CheckCircle,
    title: 'Prepare',
    body: 'Attend pre-departure orientation, get your visa sorted, and receive teaching resources to set you up for success.',
  },
  {
    num: '4',
    icon: Zap,
    title: 'Teach & Impact',
    body: "Arrive, settle in, and begin your 6–8 week teaching journey — supported by AIESEC's local committee every step of the way.",
  },
]

const testimonials = [
  {
    badge: 'Global Teacher',
    quote:
      'Teaching English to 8-year-olds in rural India for six weeks reset everything I thought I knew about education, purpose, and what really matters. I came home a completely different person — and a far better communicator.',
    name: 'Sanduni Wickramasinghe',
    role: 'GTE Alumni · India 🇮🇳',
    avatar: images.gtAlumniSanduni,
  },
  {
    badge: 'Global Teacher',
    quote:
      "I was terrified standing in front of a class in Vietnam. By Week 3, those kids were the highlight of my day. Global Teacher didn't just make me a better educator — it made me braver in every room I've walked into since.",
    name: 'Asel Ratnayake',
    role: 'GTE Alumni · Vietnam 🇻🇳',
    avatar: images.gtAlumniAsel,
  },
  {
    badge: 'Global Teacher',
    quote:
      "Our school hosted an AIESEC Global Teacher from Sri Lanka last year. The impact on our students — their confidence, their curiosity, their willingness to speak — was extraordinary. We're hosting again this year without question.",
    name: 'Priya Nair',
    role: 'School Principal · Kochi, India',
    avatar: images.gtSchoolPrincipal,
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export function GlobalTeacherPage() {
  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={images.gtHeroClassroom}
          alt="Global Teacher program — children in classroom"
          className="absolute inset-0 size-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(166.69deg, rgba(26,26,46,0.78) 8.49%, rgba(180,90,0,0.45) 58.3%, rgba(255,171,0,0.25) 91.51%)',
          }}
        />
        {/* Decorative rings */}
        <div className="absolute left-[7%] top-[14%] size-44 rounded-full border-2 border-[rgba(255,171,0,0.6)] opacity-[0.07]" />
        <div className="absolute right-[17%] top-[22%] size-28 rounded-3xl border-2 border-[rgba(255,171,0,0.6)] opacity-[0.09]" />
        <div className="absolute bottom-[18%] left-[12%] size-24 rounded-[50px] border-2 border-[rgba(255,171,0,0.6)] opacity-[0.06]" />
        <div className="absolute bottom-[25%] right-[17%] size-40 rounded-[80px] border-2 border-[rgba(255,171,0,0.6)] opacity-[0.07]" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[664px] px-6 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2">
            <BookOpen size={14} className="shrink-0 text-navy" />
            <span className="text-xs font-extrabold tracking-[1.56px] text-navy uppercase">
              Global Teacher
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(38px,5vw,62px)] font-black leading-[1.1] tracking-[-0.02em] text-white">
            Teach Abroad.
            <br />
            Transform Lives —
            <br />
            Including Yours.
          </h1>

          {/* Sub-text */}
          <p className="mx-auto mt-8 max-w-[600px] text-lg leading-relaxed text-[rgba(255,255,255,0.83)]">
            Join teaching projects around the world and make a real, lasting impact in education
            while discovering your own potential.
          </p>

          {/* CTA Buttons */}
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:colombosouth@aiesec.net"
              className="inline-flex items-center gap-2 rounded-[10px] bg-gold px-9 py-[17px] text-base font-extrabold text-navy shadow-[0_4px_8px_rgba(255,171,0,0.27)] transition-all hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(255,171,0,0.4)]"
            >
              Apply to Teach <ArrowRight size={16} />
            </a>
            <a
              href="mailto:colombosouth@aiesec.net?subject=Host a Teacher"
              className="inline-flex items-center rounded-[10px] border-2 border-[rgba(255,255,255,0.75)] px-9 py-[17px] text-base font-bold text-white transition-all hover:bg-white/10"
            >
              Host a Teacher
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex flex-wrap justify-center gap-x-16 gap-y-4">
            {[
              { val: '20+', label: 'Countries' },
              { val: '6–8', label: 'Week Projects' },
              { val: 'SDG 4', label: 'Quality Education' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black tracking-tight text-gold">{s.val}</p>
                <p className="mt-1 text-xs font-medium tracking-[0.36px] text-[rgba(255,255,255,0.6)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-16 px-8 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.09)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#cc8800] uppercase">
              About the Program
            </span>
            <h2 className="mt-5 text-[40px] font-extrabold leading-[1.2] tracking-[-0.4px] text-navy">
              Education Is the{' '}
              <span className="text-gold">Most Powerful Tool</span>
              <br />
              in the World.
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
                      <p className="text-[15px] font-bold text-navy">{item.title}</p>
                      <p className="mt-1.5 text-sm leading-[1.78] text-[#6b7280]">{item.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* SDG callout */}
            <div className="mt-10 flex items-center gap-4 rounded-xl border border-[rgba(255,171,0,0.27)] bg-[rgba(255,171,0,0.05)] px-5 py-4">
              <span className="text-2xl">📚</span>
              <div>
                <p className="text-[11px] font-bold tracking-[0.88px] text-[#cc8800] uppercase">
                  UN Sustainable Development Goal
                </p>
                <p className="mt-0.5 text-sm font-bold text-navy">SDG 4 — Quality Education</p>
              </div>
            </div>
          </div>

          {/* Right column — image with floating badges */}
          <div className="relative mt-4">
            {/* Floating top-left badge */}
            <div className="absolute -left-5 -top-4 z-10 flex items-center gap-2.5 rounded-2xl border border-[#f0f1f5] bg-white px-4 py-3.5 shadow-[0_8px_14px_rgba(0,0,0,0.12)]">
              <div className="flex size-9 items-center justify-center rounded-[10px] bg-[rgba(255,171,0,0.09)]">
                <MapPin size={18} className="text-gold" />
              </div>
              <div>
                <p className="text-[17px] font-black leading-none text-navy">20+</p>
                <p className="mt-0.5 text-[11px] text-[#9ca3af]">Countries</p>
              </div>
            </div>

            {/* Main image */}
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(255,171,0,0.19),0_8px_24px_rgba(0,0,0,0.1)]">
              <img
                src={images.gtVolunteerTeaching}
                alt="Volunteer teaching children abroad"
                className="aspect-[4/3.3] w-full object-cover"
              />
            </div>

            {/* Floating bottom-right badge */}
            <div className="absolute -bottom-3 right-4 flex items-center gap-2.5 rounded-2xl bg-gold px-5 py-3 shadow-[0_8px_14px_rgba(255,171,0,0.33)]">
              <Clock size={20} className="shrink-0 text-navy" />
              <div>
                <p className="text-xl font-black leading-none text-navy">6–8 wks</p>
                <p className="mt-0.5 text-[11px] font-semibold text-[rgba(26,26,46,0.7)]">
                  Duration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ YOUR ROLE ══════════════════ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[540px] text-center">
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.09)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#cc8800] uppercase">
              Your Role
            </span>
            <h2 className="mt-5 text-[40px] font-extrabold tracking-[-0.4px] text-navy">
              Your Role as a Global Teacher.
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#6b7280]">
              You&apos;re not just a visitor — you&apos;re a contributor, a collaborator, and a
              catalyst for change.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roleCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="flex flex-col gap-4 rounded-[20px] bg-white px-8 py-9 shadow-[0_4px_9px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex size-[60px] items-center justify-center rounded-2xl bg-[rgba(255,171,0,0.1)]">
                    <Icon size={28} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{card.title}</h3>
                  <p className="text-sm leading-[1.8] text-[#6b7280]">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════ FOR SCHOOLS ══════════════════ */}
      <section className="relative overflow-hidden bg-gold py-20">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute right-[-20px] top-[-80px] size-80 rounded-[160px] border-2 border-[rgba(26,26,46,0.08)]" />
        <div className="pointer-events-none absolute bottom-[80px] left-[-20px] size-52 rounded-[110px] border-2 border-[rgba(26,26,46,0.06)]" />
        <div className="pointer-events-none absolute left-[69%] top-[40%] size-2.5 rounded bg-[rgba(26,26,46,0.15)]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-16 px-8 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full bg-[rgba(26,26,46,0.12)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-navy uppercase">
              For Schools &amp; Organisations
            </span>
            <h2 className="mt-5 text-[38px] font-extrabold leading-[1.2] tracking-[-0.38px] text-navy">
              Bring the World Into
              <br />
              Your Classroom.
            </h2>

            <div className="mt-8 space-y-5">
              {schoolBenefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="flex items-start gap-3.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(26,26,46,0.12)]">
                      <Icon size={18} className="text-navy" />
                    </div>
                    <p className="text-[15px] leading-[1.7] text-[rgba(26,26,46,0.85)]">{b.text}</p>
                  </div>
                )
              })}
            </div>

            <a
              href="mailto:colombosouth@aiesec.net?subject=Partner With AIESEC - Host a Teacher"
              className="mt-10 inline-flex items-center gap-2 rounded-[10px] border-2 border-navy px-6 py-3 text-[15px] font-bold text-navy transition-all hover:bg-navy hover:text-gold"
            >
              Partner With Us <ArrowRight size={15} />
            </a>
          </div>

          {/* Right — image */}
          <div className="overflow-hidden rounded-[20px] shadow-[0_24px_64px_rgba(26,26,46,0.2)]">
            <img
              src={images.gtSchoolStudents}
              alt="Students in classroom waiting to learn"
              className="aspect-608/420 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════ DESTINATIONS ══════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-[500px] text-center">
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.09)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#cc8800] uppercase">
              Teaching Destinations
            </span>
            <h2 className="mt-5 text-[40px] font-extrabold tracking-[-0.4px] text-navy">
              Where Will You Teach?
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#6b7280]">
              From classrooms in India to community centres in Colombia — your next adventure is
              waiting.
            </p>
          </div>

          {/* Animated World Map */}
          <WorldMap
            lineColor="#ffab00"
            dots={[
              // Colombo South → India
              {
                start: { lat: 6.9271, lng: 79.8612, label: 'Colombo' },
                end: { lat: 28.6139, lng: 77.209, label: '🇮🇳 India' },
              },
              // Colombo South → Vietnam
              {
                start: { lat: 6.9271, lng: 79.8612, label: 'Colombo' },
                end: { lat: 21.0245, lng: 105.8412, label: '🇻🇳 Vietnam' },
              },
              // Colombo South → Egypt
              {
                start: { lat: 6.9271, lng: 79.8612, label: 'Colombo' },
                end: { lat: 30.0444, lng: 31.2357, label: '🇪🇬 Egypt' },
              },
              // Colombo South → Morocco
              {
                start: { lat: 6.9271, lng: 79.8612, label: 'Colombo' },
                end: { lat: 34.0209, lng: -6.8416, label: '🇲🇦 Morocco' },
              },
              // Colombo South → Colombia
              {
                start: { lat: 6.9271, lng: 79.8612, label: 'Colombo' },
                end: { lat: 4.711, lng: -74.0721, label: '🇨🇴 Colombia' },
              },
              // Colombo South → Brazil
              {
                start: { lat: 6.9271, lng: 79.8612, label: 'Colombo' },
                end: { lat: -15.7975, lng: -47.8919, label: '🇧🇷 Brazil' },
              },
            ]}
          />

          {/* Country flags row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {destinations.map((d) => (
              <div
                key={d.name}
                className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-4 py-2.5 shadow-sm"
              >
                <span className="text-lg">{d.flag}</span>
                <span className="text-[15px] font-semibold text-navy">{d.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-[#6b7280]">
            + 14 more countries across Asia, Africa, and Latin America
          </p>
        </div>
      </section>

      {/* ══════════════════ HOW IT WORKS ══════════════════ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.09)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#cc8800] uppercase">
              The Process
            </span>
            <h2 className="mt-5 text-[40px] font-extrabold tracking-[-0.4px] text-navy">
              How It Works.
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {/* Connecting line (desktop) — sits behind icon circles */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[37px] z-0 hidden h-[3px] rounded bg-[rgba(255,171,0,0.35)] lg:block" />

            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="relative z-10 flex size-[74px] items-center justify-center rounded-[37px] border-2 border-gold bg-surface">
                      <Icon size={28} className="text-gold" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -right-1.5 -top-2 flex size-6 items-center justify-center rounded-xl border-2 border-white bg-navy text-[11px] font-extrabold text-white">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-[15px] font-bold text-navy">{step.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.75] text-[#6b7280]">{step.body}</p>
                </div>
              )
            })}
          </div>

          {/* CTA button */}
          <div className="mt-16 text-center">
            <a
              href="mailto:colombosouth@aiesec.net?subject=Start Application - Global Teacher"
              className="inline-flex items-center gap-2 rounded-[10px] bg-gold px-8 py-3.5 text-[15px] font-extrabold text-navy shadow-[0_4px_9px_rgba(255,171,0,0.27)] transition-all hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(255,171,0,0.4)]"
            >
              Start Your Application <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[675px] text-center">
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.13)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-gold uppercase">
              GTE Alumni &amp; Schools
            </span>
            <h2 className="mt-5 text-[38px] font-extrabold text-white">
              Stories From the Classroom.
            </h2>
            <p className="mt-4 text-base text-text-subtle">
              Real words from teachers who went abroad — and the schools that welcomed them.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-navy-card p-8 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
              >
                {/* Badge */}
                <div className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-[rgba(255,171,0,0.13)] px-3 py-1">
                  <BookOpen size={12} className="text-gold" />
                  <span className="text-[10px] font-bold tracking-[1px] text-gold uppercase">
                    {t.badge}
                  </span>
                </div>

                {/* Opening quote mark */}
                <span className="font-serif text-[64px] font-bold leading-none text-gold opacity-90">
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="mt-1 flex-1 text-[15px] italic leading-[1.85] text-[rgba(255,255,255,0.9)]">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="size-[52px] shrink-0 rounded-full border-2 border-gold object-cover"
                  />
                  <div>
                    <p className="text-[15px] font-bold text-white">{t.name}</p>
                    <p className="mt-0.5 text-[13px] text-text-subtle">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section
        className="relative overflow-hidden py-36"
        style={{
          background:
            'linear-gradient(159.96deg, #ffab00 0%, #f97316 40%, #037ef3 100%)',
        }}
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-16 -top-16 size-60 rounded-[120px] bg-white/10 opacity-[0.08]" />
        <div className="pointer-events-none absolute bottom-[90px] right-[-20px] size-[280px] rounded-[140px] bg-white/10 opacity-[0.07]" />
        <div className="pointer-events-none absolute right-[19%] top-[49%] size-3 rounded-md bg-white/50 opacity-[0.35]" />
        <div className="pointer-events-none absolute bottom-[32%] left-[14%] size-2.5 rounded bg-white/50 opacity-[0.30]" />

        <div className="relative mx-auto max-w-[640px] px-8 text-center">
          {/* Badge pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.18)] px-5 py-2">
            <Globe size={13} className="text-white" />
            <span className="text-[11px] font-bold tracking-[1.1px] text-white uppercase">
              20+ Countries · SDG 4 · 6–8 Weeks
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[48px] font-black leading-[1.15] tracking-[-0.48px] text-white">
            Ready to Make an Impact?
          </h2>

          {/* Sub-text */}
          <p className="mt-6 text-[17px] leading-[1.7] text-[rgba(255,255,255,0.85)]">
            One classroom. Six weeks. A lifetime of meaning.
            <br />
            Your teaching journey starts right here.
          </p>

          {/* Button */}
          <a
            href="mailto:colombosouth@aiesec.net?subject=Apply Now - Global Teacher"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-extrabold text-navy shadow-[0_6px_12px_rgba(0,0,0,0.16)] transition-all hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(0,0,0,0.22)]"
          >
            Apply Now <ArrowRight size={17} />
          </a>

          {/* Fine print */}
          <p className="mt-5 text-[13px] text-[rgba(255,255,255,0.65)]">
            Applications reviewed within 5 business days · No teaching degree required
          </p>
        </div>
      </section>
    </>
  )
}
