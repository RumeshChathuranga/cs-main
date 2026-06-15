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
import { Reveal } from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
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
    text: 'Receive a motivated, enthusiastic teacher whose fresh energy and cross-cultural lens re-energises your classrooms.',
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
      <section className="relative flex min-h-[85vh] flex-col overflow-hidden">
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
        <div className="absolute top-[14%] left-[7%] size-44 rounded-full border-2 border-[rgba(255,171,0,0.6)] opacity-[0.07]" />
        <div className="absolute top-[22%] right-[17%] size-28 rounded-3xl border-2 border-[rgba(255,171,0,0.6)] opacity-[0.09]" />
        <div className="absolute bottom-[18%] left-[12%] size-24 rounded-[50px] border-2 border-[rgba(255,171,0,0.6)] opacity-[0.06]" />
        <div className="absolute right-[17%] bottom-[25%] size-40 rounded-[80px] border-2 border-[rgba(255,171,0,0.6)] opacity-[0.07]" />

        <Stagger
          inView={false}
          className="relative z-10 mx-auto flex w-full max-w-[664px] flex-1 flex-col items-center justify-center px-6 py-24 text-center"
        >
          <StaggerItem>
            <div className="bg-gold mb-8 inline-flex items-center gap-2 rounded-full px-6 py-2">
              <BookOpen size={14} className="text-navy shrink-0" />
              <span className="text-navy text-xs font-extrabold tracking-[1.56px] uppercase">
                Global Teacher
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-[clamp(38px,5vw,62px)] leading-[1.1] font-black tracking-[-0.02em] text-white">
              Teach Abroad.
              <br />
              Transform Lives —
              <br />
              Including Yours.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-8 max-w-[600px] text-lg leading-relaxed text-[rgba(255,255,255,0.83)]">
              Join teaching projects around the world and make a real, lasting impact in education
              while discovering your own potential.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:colombosouth@aiesec.net"
                className="bg-gold text-navy inline-flex items-center gap-2 rounded-[10px] px-9 py-[17px] text-base font-extrabold shadow-[0_4px_8px_rgba(255,171,0,0.27)] transition-all hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(255,171,0,0.4)]"
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
          </StaggerItem>
        </Stagger>

        <div className="relative z-10 border-t border-white/10 bg-black/35">
          <Stagger className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { value: '20+', label: 'Countries' },
              { value: '6–8', label: 'Week Projects' },
              { value: 'SDG 4', label: 'Quality Education' },
            ].map((stat) => (
              <StaggerItem
                key={stat.label}
                className="flex flex-col items-center gap-1.5 px-4 py-6"
              >
                <span className="text-4xl font-extrabold text-white">{stat.value}</span>
                <span className="text-[13px] font-medium tracking-wide text-white/75">
                  {stat.label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <Reveal as="section" className="bg-white py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-16 px-8 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.09)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#cc8800] uppercase">
              About the Program
            </span>
            <h2 className="text-navy mt-5 text-[40px] leading-[1.2] font-extrabold tracking-[-0.4px]">
              Education Is the <span className="text-gold">Most Powerful Tool</span>
              <br />
              in the World.
            </h2>

            <Stagger className="mt-8 space-y-6">
              {aboutItems.map((item) => {
                const Icon = item.icon
                return (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4">
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
                  </StaggerItem>
                )
              })}
            </Stagger>

            {/* SDG callout */}
            <div className="mt-10 flex items-center gap-4 rounded-xl border border-[rgba(255,171,0,0.27)] bg-[rgba(255,171,0,0.05)] px-5 py-4">
              <span className="text-2xl">📚</span>
              <div>
                <p className="text-[11px] font-bold tracking-[0.88px] text-[#cc8800] uppercase">
                  UN Sustainable Development Goal
                </p>
                <p className="text-navy mt-0.5 text-sm font-bold">SDG 4 — Quality Education</p>
              </div>
            </div>
          </div>

          {/* Right column — image with floating badges */}
          <div className="relative mt-4">
            {/* Floating top-left badge */}
            <div className="absolute -top-4 -left-5 z-10 flex items-center gap-2.5 rounded-2xl border border-[#f0f1f5] bg-white px-4 py-3.5 shadow-[0_8px_14px_rgba(0,0,0,0.12)]">
              <div className="flex size-9 items-center justify-center rounded-[10px] bg-[rgba(255,171,0,0.09)]">
                <MapPin size={18} className="text-gold" />
              </div>
              <div>
                <p className="text-navy text-[17px] leading-none font-black">20+</p>
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
            <div className="bg-gold absolute right-4 -bottom-3 flex items-center gap-2.5 rounded-2xl px-5 py-3 shadow-[0_8px_14px_rgba(255,171,0,0.33)]">
              <Clock size={20} className="text-navy shrink-0" />
              <div>
                <p className="text-navy text-xl leading-none font-black">6–8 wks</p>
                <p className="mt-0.5 text-[11px] font-semibold text-[rgba(26,26,46,0.7)]">
                  Duration
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════ YOUR ROLE ══════════════════ */}
      <Reveal as="section" className="bg-surface py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[540px] text-center">
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.09)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#cc8800] uppercase">
              Your Role
            </span>
            <h2 className="text-navy mt-5 text-[40px] font-extrabold tracking-[-0.4px]">
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
                  <h3 className="text-navy text-lg font-bold">{card.title}</h3>
                  <p className="text-sm leading-[1.8] text-[#6b7280]">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>

      {/* ══════════════════ FOR SCHOOLS ══════════════════ */}
      <Reveal as="section" className="bg-gold relative overflow-hidden py-20">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute top-[-80px] right-[-20px] size-80 rounded-[160px] border-2 border-[rgba(26,26,46,0.08)]" />
        <div className="pointer-events-none absolute bottom-[80px] left-[-20px] size-52 rounded-[110px] border-2 border-[rgba(26,26,46,0.06)]" />
        <div className="pointer-events-none absolute top-[40%] left-[69%] size-2.5 rounded bg-[rgba(26,26,46,0.15)]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-16 px-8 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-navy inline-block rounded-full bg-[rgba(26,26,46,0.12)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] uppercase">
              For Schools &amp; Organisations
            </span>
            <h2 className="text-navy mt-5 text-[38px] leading-[1.2] font-extrabold tracking-[-0.38px]">
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
              className="border-navy text-navy hover:bg-navy hover:text-gold mt-10 inline-flex items-center gap-2 rounded-[10px] border-2 px-6 py-3 text-[15px] font-bold transition-all"
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
      </Reveal>

      {/* ══════════════════ DESTINATIONS ══════════════════ */}
      <Reveal as="section" className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-[500px] text-center">
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.09)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#cc8800] uppercase">
              Teaching Destinations
            </span>
            <h2 className="text-navy mt-5 text-[40px] font-extrabold tracking-[-0.4px]">
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
                <span className="text-navy text-[15px] font-semibold">{d.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-[#6b7280]">
            + 14 more countries across Asia, Africa, and Latin America
          </p>
        </div>
      </Reveal>

      {/* ══════════════════ HOW IT WORKS ══════════════════ */}
      <Reveal as="section" className="bg-surface py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-[rgba(255,171,0,0.09)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] text-[#cc8800] uppercase">
              The Process
            </span>
            <h2 className="text-navy mt-5 text-[40px] font-extrabold tracking-[-0.4px]">
              How It Works.
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {/* Connecting line (desktop) — sits behind icon circles */}
            <div className="absolute top-[37px] right-[12.5%] left-[12.5%] z-0 hidden h-[3px] rounded bg-[rgba(255,171,0,0.35)] lg:block" />

            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="border-gold bg-surface relative z-10 flex size-[74px] items-center justify-center rounded-[37px] border-2">
                      <Icon size={28} className="text-gold" />
                    </div>
                    {/* Step number badge */}
                    <div className="bg-navy absolute -top-2 -right-1.5 flex size-6 items-center justify-center rounded-xl border-2 border-white text-[11px] font-extrabold text-white">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-navy text-[15px] font-bold">{step.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.75] text-[#6b7280]">{step.body}</p>
                </div>
              )
            })}
          </div>

          {/* CTA button */}
          <div className="mt-16 text-center">
            <a
              href="mailto:colombosouth@aiesec.net?subject=Start Application - Global Teacher"
              className="bg-gold text-navy inline-flex items-center gap-2 rounded-[10px] px-8 py-3.5 text-[15px] font-extrabold shadow-[0_4px_9px_rgba(255,171,0,0.27)] transition-all hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(255,171,0,0.4)]"
            >
              Start Your Application <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <Reveal as="section" className="bg-navy py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-[675px] text-center">
            <span className="text-gold inline-block rounded-full bg-[rgba(255,171,0,0.13)] px-4 py-[6px] text-[11px] font-bold tracking-[1.32px] uppercase">
              GTE Alumni &amp; Schools
            </span>
            <h2 className="mt-5 text-[38px] font-extrabold text-white">
              Stories From the Classroom.
            </h2>
            <p className="text-text-subtle mt-4 text-base">
              Real words from teachers who went abroad — and the schools that welcomed them.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-navy-card flex flex-col rounded-[20px] border border-[rgba(255,255,255,0.06)] p-8 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
              >
                {/* Badge */}
                <div className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-[rgba(255,171,0,0.13)] px-3 py-1">
                  <BookOpen size={12} className="text-gold" />
                  <span className="text-gold text-[10px] font-bold tracking-[1px] uppercase">
                    {t.badge}
                  </span>
                </div>

                {/* Opening quote mark */}
                <span className="text-gold font-serif text-[64px] leading-none font-bold opacity-90">
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="mt-1 flex-1 text-[15px] leading-[1.85] text-[rgba(255,255,255,0.9)] italic">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="border-gold size-[52px] shrink-0 rounded-full border-2 object-cover"
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
      </Reveal>

      {/* ══════════════════ CTA ══════════════════ */}
      <Reveal
        variant="scaleIn"
        as="section"
        className="relative overflow-hidden py-36"
        style={{
          background: 'linear-gradient(159.96deg, #ffab00 0%, #f97316 40%, #037ef3 100%)',
        }}
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-16 -left-16 size-60 rounded-[120px] bg-white/10 opacity-[0.08]" />
        <div className="pointer-events-none absolute right-[-20px] bottom-[90px] size-[280px] rounded-[140px] bg-white/10 opacity-[0.07]" />
        <div className="pointer-events-none absolute top-[49%] right-[19%] size-3 rounded-md bg-white/50 opacity-[0.35]" />
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
          <h2 className="text-[48px] leading-[1.15] font-black tracking-[-0.48px] text-white">
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
            className="text-navy mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-extrabold shadow-[0_6px_12px_rgba(0,0,0,0.16)] transition-all hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(0,0,0,0.22)]"
          >
            Apply Now <ArrowRight size={17} />
          </a>

          {/* Fine print */}
          <p className="mt-5 text-[13px] text-[rgba(255,255,255,0.65)]">
            Applications reviewed within 5 business days · No teaching degree required
          </p>
        </div>
      </Reveal>
    </>
  )
}
