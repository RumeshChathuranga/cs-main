import { Stagger, StaggerItem } from './motion/Stagger'

const stats = [
  { value: '70+', label: 'Years of Experience' },
  { value: '1M+', label: 'Alumni Worldwide' },
  { value: '40K+', label: 'Experiences Yearly' },
  { value: '126', label: 'Countries & Territories' },
]

export function StatsBar() {
  return (
    <section className="bg-brand py-14">
      <Stagger className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/25 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StaggerItem
            key={stat.label}
            className="flex flex-col items-center gap-2.5 px-6 py-4 text-center"
          >
            <span className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
              {stat.value}
            </span>
            <span className="text-[15px] font-medium tracking-wide text-white/85">
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
