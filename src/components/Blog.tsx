import { images } from '../assets/images'

interface BlogPost {
  image: string
  category: string
  categoryColor: string
  categoryBg: string
  title: string
  excerpt: string
  author: string
  avatar: string
  date: string
}

const posts: BlogPost[] = [
  {
    image: images.blogLeadership,
    category: 'Leadership',
    categoryColor: 'text-brand',
    categoryBg: 'bg-blue-100',
    title: '5 Leadership Lessons I Learned From My AIESEC Exchange',
    excerpt:
      "From managing cross-cultural teams in Budapest to presenting at international conferences — here's what six weeks abroad taught me about real leadership that no classroom could.",
    author: 'Nethmi Perera',
    avatar: images.avatarNethmi,
    date: 'March 15, 2026 · 5 min read',
  },
  {
    image: images.blogAbroad,
    category: 'Travel',
    categoryColor: 'text-teal',
    categoryBg: 'bg-teal-100',
    title: "What It's Really Like to Live Abroad for the First Time",
    excerpt:
      'The flights, the culture shock, the friendships, the growth — an honest account of what happens when a 22-year-old from Moratuwa packs a bag and moves to Morocco for two months.',
    author: 'Ravindu Jayasinghe',
    avatar: images.avatarRavindu,
    date: 'February 28, 2026 · 7 min read',
  },
  {
    image: images.globalTeacher,
    category: 'Teaching',
    categoryColor: 'text-amber',
    categoryBg: 'bg-amber-100',
    title: 'Teaching English in Vietnam: A Week-by-Week Journal',
    excerpt:
      "Week one was terrifying. Week two was magical. By week six, I didn't want to leave. A Global Teacher's honest, funny, and emotional account of teaching young children in Ho Chi Minh City.",
    author: 'Sanduni Wickramasinghe',
    avatar: images.avatarNethmi,
    date: 'January 10, 2026 · 9 min read',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <header>
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
              From Our Members
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-text-primary md:text-4xl">
              Latest Stories
            </h2>
          </header>
          <a
            href="#"
            className="border-b-2 border-brand pb-1.5 text-[15px] font-bold text-brand transition-colors hover:text-brand-dark"
          >
            View All →
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_6px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-lg"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3.5 top-3.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${post.categoryBg} ${post.categoryColor}`}
                >
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-[17px] font-bold leading-snug text-text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-2.5 border-t border-surface pt-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="size-[34px] rounded-full border-2 border-brand object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-text-primary">
                      {post.author}
                    </p>
                    <p className="text-xs text-text-faint">{post.date}</p>
                  </div>
                  <a
                    href="#"
                    className="shrink-0 text-[13px] font-semibold text-brand hover:text-brand-dark"
                  >
                    Read →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
