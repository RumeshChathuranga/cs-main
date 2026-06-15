import { images } from '../assets/images'
import { SectionHeader } from './ui/SectionHeader'

interface Program {
  image: string
  tag: string
  tagColor: string
  tagBg: string
  gradient: string
  emoji: string
  title: string
  subtitle: string
  subtitleColor: string
  description: string
  badges: { label: string; bg: string; color: string }[]
}

const programs: Program[] = [
  {
    image: images.globalVolunteer,
    tag: 'Volunteer',
    tagColor: 'text-teal',
    tagBg: 'bg-teal-100',
    gradient: 'from-teal/80',
    emoji: '🌍',
    title: 'Global Volunteer',
    subtitle: 'Make an Impact Abroad',
    subtitleColor: 'text-teal',
    description:
      'Travel the world while making a real difference. Join short-term volunteering projects in 60+ countries, working on education, environment, and social causes — and grow as a leader.',
    badges: [
      { label: '⏱ 6–8 weeks', bg: 'bg-teal/8', color: 'text-teal' },
      { label: '🌐 60+ countries', bg: 'bg-teal/8', color: 'text-teal' },
    ],
  },
  {
    image: images.globalTalent,
    tag: 'Internship',
    tagColor: 'text-brand',
    tagBg: 'bg-blue-100',
    gradient: 'from-brand/80',
    emoji: '💼',
    title: 'Global Talent',
    subtitle: 'Launch Your Global Career',
    subtitleColor: 'text-brand',
    description:
      'Secure a professional internship with a company abroad. Build your career, gain cross-cultural work experience, and develop the skills that modern employers demand — on an international stage.',
    badges: [
      { label: '⏱ 3–18 months', bg: 'bg-brand/8', color: 'text-brand' },
      { label: '🌐 70+ countries', bg: 'bg-brand/8', color: 'text-brand' },
    ],
  },
  {
    image: images.globalTeacher,
    tag: 'Teaching',
    tagColor: 'text-amber',
    tagBg: 'bg-amber-100',
    gradient: 'from-amber/80',
    emoji: '📚',
    title: 'Global Teacher',
    subtitle: 'Teach. Inspire. Lead.',
    subtitleColor: 'text-amber',
    description:
      'Travel abroad and teach English or other subjects in schools and community centers. The Global Teacher program places passionate young educators in classrooms around the world.',
    badges: [
      { label: '⏱ 6–8 weeks', bg: 'bg-amber/8', color: 'text-amber' },
      { label: '🌐 20+ countries', bg: 'bg-amber/8', color: 'text-amber' },
    ],
  },
]

export function Programs() {
  return (
    <section id="programs" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Exchange Programs"
          title="Find Your Experience"
          description="Three pathways to global impact — choose yours."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group overflow-hidden rounded-[20px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-xl"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${program.gradient} to-transparent to-60%`}
                />
                <span
                  className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase ${program.tagBg} ${program.tagColor}`}
                >
                  {program.tag}
                </span>
              </div>

              <div className="flex flex-col gap-5 p-7">
                <div className="flex items-center gap-3">
                  <span className="text-[28px]">{program.emoji}</span>
                  <div>
                    <h3 className="text-text-primary text-xl font-extrabold">{program.title}</h3>
                    <p className={`text-[13px] font-semibold ${program.subtitleColor}`}>
                      {program.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">{program.description}</p>

                <div className="flex flex-wrap gap-2.5">
                  {program.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.bg} ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-brand hover:text-brand-dark text-sm font-bold transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
