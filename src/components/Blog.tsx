import { Link } from 'react-router-dom'
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
            <span className="bg-brand/10 text-brand inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
              From Our Members
            </span>
            <h2 className="text-text-primary mt-4 text-3xl font-extrabold md:text-4xl">
              Latest Stories
            </h2>
          </header>
          <Link
            to="/blog"
            className="border-brand text-brand hover:text-brand-dark border-b-2 pb-1.5 text-[15px] font-bold transition-colors"
          >
            View All →
          </Link>
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
                  className={`absolute top-3.5 left-3.5 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase ${post.categoryBg} ${post.categoryColor}`}
                >
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-text-primary text-[17px] leading-snug font-bold">
                  {post.title}
                </h3>
                <p className="text-text-muted mt-3 text-sm leading-relaxed">{post.excerpt}</p>

                <div className="border-surface mt-5 flex items-center gap-2.5 border-t pt-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="border-brand size-[34px] rounded-full border-2 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-text-primary truncate text-[13px] font-semibold">
                      {post.author}
                    </p>
                    <p className="text-text-faint text-xs">{post.date}</p>
                  </div>
                  <a
                    href="#"
                    className="text-brand hover:text-brand-dark shrink-0 text-[13px] font-semibold"
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
