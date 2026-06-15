import { images } from '../assets/images'
import { SectionHeader } from './ui/SectionHeader'

const testimonials = [
  {
    quote:
      'My Global Volunteer experience in Egypt was life-changing. I returned to Sri Lanka not just with memories, but with a whole new perspective on leadership, cultural empathy, and what it means to truly make an impact in the world.',
    name: 'Nethmi Perera',
    role: 'GV Alumni · Egypt 2024',
    avatar: images.alumniNethmi,
    flag: '🇪🇬',
  },
  {
    quote:
      'Through Global Talent, I landed a 6-month internship at a tech startup in Germany. AIESEC in Colombo South prepared me incredibly well — the professional skills, the confidence, the network. It was the best decision I made in university.',
    name: 'Ravindu Jayasinghe',
    role: 'GT Alumni · Germany 2025',
    avatar: images.alumniRavindu,
    flag: '🇩🇪',
  },
  {
    quote:
      'Teaching English in Vietnam for two months through Global Teacher was extraordinary. I discovered a passion for education I never knew I had. AIESEC gave me a platform to contribute meaningfully while growing as a person.',
    name: 'Sanduni Wickramasinghe',
    role: 'GTE Alumni · Vietnam 2024',
    avatar: images.alumniSanduni,
    flag: '🇻🇳',
  },
]

export function Testimonials() {
  return (
    <section className="bg-navy py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Alumni Voices"
          title="Stories From Our Alumni"
          description="Real experiences from young leaders who dared to go global."
          dark
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-6 rounded-[20px] border border-white/6 bg-navy-card p-8 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
            >
              <span className="text-7xl font-bold leading-none text-brand opacity-80">
                &ldquo;
              </span>

              <p className="flex-1 text-[15px] italic leading-relaxed text-white/90">
                {item.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="size-[52px] rounded-full border-2 border-brand object-cover"
                  />
                  <span className="absolute -bottom-1 -right-1 text-base">
                    {item.flag}
                  </span>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-white">{item.name}</p>
                  <p className="text-[13px] text-text-subtle">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
