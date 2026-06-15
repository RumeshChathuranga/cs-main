import { images } from '../assets/images'

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-text-primary md:text-[42px] md:leading-[50px]">
            Empowering Youth{' '}
            <span className="text-brand">Since 1948</span>
          </h2>

          <div className="mt-8 space-y-6 text-base leading-[1.8] text-text-secondary">
            <p>
              AIESEC is the world&apos;s largest youth-run organization, present
              in over 126 countries and territories. Founded in 1948, we have
              been developing leadership potential in young people for over 70
              years, connecting them with global opportunities that create
              tangible impact.
            </p>
            <p>
              AIESEC in Colombo South, based at the University of Moratuwa, is
              Sri Lanka&apos;s leading chapter for youth exchange and leadership
              development. We connect passionate university students with
              international volunteering, internship, and teaching experiences
              across the globe.
            </p>
            <p>
              Our members come from all faculties at the University of Moratuwa,
              united by a shared drive to grow as leaders and contribute to a
              more peaceful, developed world — one experience at a time.
            </p>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center text-[15px] font-bold text-brand transition-colors hover:text-brand-dark"
          >
            Learn More →
          </a>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 -rotate-2 rounded-[20px] bg-gradient-to-br from-brand to-brand/15 p-1">
            <div className="size-full min-h-[400px] min-w-[300px] rounded-[20px]" />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(3,126,243,0.2),0_8px_24px_rgba(0,0,0,0.12)]">
            <img
              src={images.aboutTeam}
              alt="AIESEC in Colombo South members"
              className="aspect-[568/440] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-4 -left-5 rounded-xl bg-brand px-5 py-3.5 shadow-[0_8px_16px_rgba(3,126,243,0.35)]">
            <p className="text-[22px] font-extrabold text-white">126</p>
            <p className="text-[11px] font-medium leading-snug text-white">
              Countries &amp;
              <br />
              Territories
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
